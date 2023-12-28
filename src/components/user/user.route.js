const express = require('express');
const { validate } = require('express-validation');

const UserValidation = require('./user.validation');
const UserController = require('./user.controller');

const router = express.Router();

router.route('/register').post(validate(UserValidation.register), UserController.register);
router.route('/login').post(validate(UserValidation.login), UserController.login);

module.exports = router;
