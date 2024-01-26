const express = require('express');
const { validate } = require('express-validation');
const { isSuperuser } = require('../../middlewares/auth');
const SolutionController = require('../../components/solution/solution.controller');
const SolutionValidation = require('../../components/solution/solution.validation');

const router = express.Router();

router.route('/')
  .get(validate(SolutionValidation.list), SolutionController.list)
  .post(isSuperuser, validate(SolutionValidation.create), SolutionController.create);

router.route('/:id')
  .put(isSuperuser, validate(SolutionValidation.update), SolutionController.update);

module.exports = router;
