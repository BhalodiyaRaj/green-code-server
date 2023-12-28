const express = require('express');
const { validate } = require('express-validation');
const CategoryController = require('./category.controller');
const CategoryValidation = require('./category.validation');

const router = express.Router();

router.route('/')
  .get(CategoryController.list)
  .post(validate(CategoryValidation.create), CategoryController.create);

module.exports = router;
