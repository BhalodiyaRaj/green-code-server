const express = require('express');
const { validate } = require('../../utils/validationHelper');
const { isSuperuser } = require('../../middlewares/auth');

const QuestionValidation = require('./question.validation');
const QuestionController = require('./question.controller');

const router = express.Router();

router.route('/')
  .get(validate(QuestionValidation.list), QuestionController.list)
  .post(isSuperuser, validate(QuestionValidation.create), QuestionController.create);

router.route('/:id')
  .get(validate(QuestionValidation.getOne), QuestionController.getOne)
  .put(isSuperuser, validate(QuestionValidation.update), QuestionController.update);

module.exports = router;
