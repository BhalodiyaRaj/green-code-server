const express = require('express');
const { validate } = require('express-validation');

const UserValidation = require('../../components/user/user.validation');
const UserController = require('../../components/user/user.controller');

const router = express.Router();

router.route('/register').post(validate(UserValidation.register), UserController.register);
router.route('/login').post(validate(UserValidation.login), UserController.login);

module.exports = router;
