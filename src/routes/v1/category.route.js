const express = require('express');
const { validate } = require('express-validation');
const Category = require('../../components/category');

const router = express.Router();

router.route('/')
  .get(Category.controller.list)
  .post(validate(Category.validation.create), Category.controller.create);

router.route('/:id')
  .put(validate(Category.validation.update), Category.controller.update)
  .delete(validate(Category.validation.delete), Category.controller.delete);

module.exports = router;
