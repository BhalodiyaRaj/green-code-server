const express = require('express');
const { validate } = require('express-validation');

const User = require('../../components/user');

const router = express.Router();

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register User
 *     tags:
 *       - User
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/user.yaml#/register/request'
 *     responses:
 *       200:
 *         description: A user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/user.yaml#/register/response'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/error.yaml#/response/validation'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/error.yaml#/response/error'
 */

router.route('/register').post(validate(User.validation.register), User.controller.register);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login User
 *     tags:
 *       - User
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/user.yaml#/login/request'
 *     responses:
 *       200:
 *         description: A user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/user.yaml#/login/response'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/error.yaml#/response/validation'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/error.yaml#/response/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/error.yaml#/response/error'
 */
router.route('/login').post(validate(User.validation.login), User.controller.login);

module.exports = router;
