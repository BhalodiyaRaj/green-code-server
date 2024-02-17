const express = require('express');
const { validate } = require('express-validation');

const User = require('../../components/user');

const router = express.Router();

router.route('/register').post(validate(User.validation.register), User.controller.register);
router.route('/login').post(validate(User.validation.login), User.controller.login);

module.exports = router;
