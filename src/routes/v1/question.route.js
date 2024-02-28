const express = require('express');
const { validate } = require('../../utils/validationHelper');
const { isSuperuser } = require('../../middlewares/auth');
const parseUser = require('../../middlewares/parseUser');

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
 *       - name: offset
 *         type: number
 *         in: query
 *         description: offset of the question
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
 *         schema:
 *           $ref: 'components/question.yaml#/list/response'
 *
 *
 *
 *
 *
 */

router.route('/')
  .get(parseUser, validate(Question.validation.list), Question.controller.list)
  .post(isSuperuser, validate(Question.validation.create), Question.controller.create);

router.route('/:id')
  .get(parseUser, validate(Question.validation.getOne), Question.controller.getOne)
  .put(isSuperuser, validate(Question.validation.update), Question.controller.update);

module.exports = router;
