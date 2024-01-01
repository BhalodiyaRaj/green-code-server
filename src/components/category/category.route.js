const express = require('express');
const { validate } = require('express-validation');
const CategoryController = require('./category.controller');
const CategoryValidation = require('./category.validation');

const router = express.Router();

router.route('/')
  .get(CategoryController.list)
  .post(validate(CategoryValidation.create), CategoryController.create);

router.route('/:id')
  .put(validate(CategoryValidation.update), CategoryController.update)
  .delete(validate(CategoryValidation.delete), CategoryController.delete);

module.exports = router;
