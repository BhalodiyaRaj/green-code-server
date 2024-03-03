const express = require('express');
const { validate } = require('express-validation');
const { isSuperuser, isLoggedIn } = require('../../middlewares/auth');
const Solution = require('../../components/solution');

const router = express.Router();

/**
 * @swagger
 * /solutions:
 *   get:
 *     summary: Get list of solutions
 *     tags:
 *       - Solution
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: question
 *         type: string
 *         in: query
 *         description: Question ID
 *     responses:
 *       200:
 *         description: A list of solutions
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/solution.yaml#/list/response'
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
 *   post:
 *     summary: Create Solution
 *     tags:
 *       - Solution
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: question
 *         type: string
 *         in: query
 *         description: Question ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/solution.yaml#/create/request'
 *     responses:
 *       200:
 *         description: A solution
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/solution.yaml#/create/response'
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
 *
 *
 */
router.route('/')
  .get(isLoggedIn, validate(Solution.validation.list), Solution.controller.list)
  .post(isSuperuser, validate(Solution.validation.create), Solution.controller.create);

/**
 * @swagger
 * /solutions/{id}:
 *   get:
 *     summary: Get Solution
 *     tags:
 *       - Solution
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A solution
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/solution.yaml#/get/response'
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
 *   put:
 *     summary: Update Solution
 *     tags:
 *       - Solution
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/solution.yaml#/create/request'
 *     responses:
 *       204:
 *         description: Solution updated - No content
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
router.route('/:id')
  .get(isLoggedIn, validate(Solution.validation.getOne), Solution.controller.getOne)
  .put(isSuperuser, validate(Solution.validation.update), Solution.controller.update);

module.exports = router;
