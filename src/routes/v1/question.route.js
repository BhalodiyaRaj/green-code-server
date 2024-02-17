const express = require('express');
const { validate } = require('../../utils/validationHelper');
const { isSuperuser } = require('../../middlewares/auth');
const parseUser = require('../../middlewares/parseUser');

const Question = require('../../components/question');

const router = express.Router();

router.route('/')
  .get(parseUser, validate(Question.validation.list), Question.controller.list)
  .post(isSuperuser, validate(Question.validation.create), Question.controller.create);

router.route('/:id')
  .get(parseUser, validate(Question.validation.getOne), Question.controller.getOne)
  .put(isSuperuser, validate(Question.validation.update), Question.controller.update);

module.exports = router;
