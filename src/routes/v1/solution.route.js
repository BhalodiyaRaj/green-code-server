const express = require('express');
const { validate } = require('express-validation');
const { isSuperuser } = require('../../middlewares/auth');
const Solution = require('../../components/solution');

const router = express.Router();

router.route('/')
  .get(validate(Solution.validation.list), Solution.controller.list)
  .post(isSuperuser, validate(Solution.validation.create), Solution.controller.create);

router.route('/:id')
  .put(isSuperuser, validate(Solution.validation.update), Solution.controller.update);

module.exports = router;
