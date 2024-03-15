const express = require('express');
const { validate } = require('../../utils/validationHelper');
const { isLoggedIn } = require('../../middlewares/auth');
const Comment = require('../../components/comment');

const router = express.Router();

/**
 * @swagger
 * /comments:
 *   get:
 *     summary: Get list of comments
 *     tags:
 *       - Comment
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: question
 *         in: query
 *         type: string
 *         description: The question id
 *     responses:
 *       200:
 *         description: A list of comments
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/comment.yaml#/list/response'
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
 *     summary: Create Comment
 *     tags:
 *       - Comment
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: question
 *         in: query
 *         type: string
 *         description: The question id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/comment.yaml#/create/request'
 *     responses:
 *       200:
 *         description: A comment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/comment.yaml#/create/response'
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
  .post(isLoggedIn, validate(Comment.validation.create), Comment.controller.create)
  .get(isLoggedIn, validate(Comment.validation.list), Comment.controller.list);

/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     summary: Delete Comment
 *     tags:
 *       - Comment
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         type: string
 *         description: The comment id
 *     responses:
 *       204:
 *         description: comment deleted - No content
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
 */
router.route('/:id')
  .delete(isLoggedIn, validate(Comment.validation.delete), Comment.controller.delete);

module.exports = router;
