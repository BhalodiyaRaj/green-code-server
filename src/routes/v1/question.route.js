const express = require('express');
const { validate } = require('../../utils/validationHelper');
const { isSuperuser } = require('../../middlewares/auth');

const Question = require('../../components/question');

const router = express.Router();

/**
 * @swagger
 * /questions:
 *   get:
 *     summary: Create Question
 *     tags:
 *       - Question
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: search
 *         type: string
 *         in: query
 *         description: Search string
 *       - name: limit
 *         type: number
 *         in: query
 *         description: limit of the question
 *       - name: skip
 *         type: number
 *         in: query
 *         description: skip number of the question
 *       - name: level
 *         type: string
 *         in: query
 *         description: Level of the question
 *       - name: categories
 *         type: array
 *         in: query
 *         description: Array of category IDs
 *     responses:
 *       200:
 *         description: A list of questions
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/question.yaml#/list/response'
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
 *     summary: Create Question
 *     tags:
 *       - Question
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/question.yaml#/create/request'
 *     responses:
 *       200:
 *         description: A question
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/question.yaml#/create/response'
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

router.route('/')
  .get(validate(Question.validation.list), Question.controller.list)
  .post(isSuperuser, validate(Question.validation.create), Question.controller.create);

/**
 * @swagger
 * /questions/{id}:
 *   get:
 *     summary: Get Question
 *     tags:
 *       - Question
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         type: string
 *         in: path
 *         description: Question ID
 *     responses:
 *       200:
 *         description: A question
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/question.yaml#/get/response'
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
 *     summary: Update Question
 *     tags:
 *       - Question
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         type: string
 *         in: path
 *         description: Question ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/question.yaml#/update/request'
 *     responses:
 *       204:
 *         description: Question updated - No content
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
  .get(validate(Question.validation.getOne), Question.controller.getOne)
  .put(isSuperuser, validate(Question.validation.update), Question.controller.update);

module.exports = router;
