const express = require('express');
const { validate } = require('../../utils/validationHelper');
const { isSuperuser } = require('../../middlewares/auth');
const parseUser = require('../../middlewares/parseUser');

const QuestionValidation = require('../../components/question/question.validation');
const QuestionController = require('../../components/question/question.controller');

const router = express.Router();

router.route('/')
  .get(parseUser, validate(QuestionValidation.list), QuestionController.list)
  .post(isSuperuser, validate(QuestionValidation.create), QuestionController.create);

router.route('/:id')
  .get(parseUser, validate(QuestionValidation.getOne), QuestionController.getOne)
  .put(isSuperuser, validate(QuestionValidation.update), QuestionController.update);

module.exports = router;
