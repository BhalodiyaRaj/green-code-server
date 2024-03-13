const express = require('express');
const { validate } = require('../../utils/validationHelper');
const Like = require('../../components/like');
const { isLoggedIn } = require('../../middlewares/auth');

const router = express.Router();

/**
 * @swagger
 * /likes:
 *   post:
 *     summary: Like anything
 *     tags:
 *       - Like
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
 *       204:
 *         description: Liked - No content
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
 *   delete:
 *     summary: Unlike anything
 *     tags:
 *       - Like
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
 *       204:
 *         description: UnLiked - No content
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
  .post(isLoggedIn, validate(Like.validation.like), Like.controller.like)
  .delete(isLoggedIn, validate(Like.validation.unlike), Like.controller.unlike);

module.exports = router;
