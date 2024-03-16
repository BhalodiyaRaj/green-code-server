const express = require('express');
const { validate } = require('../../utils/validationHelper');
const { isLoggedIn, isSuperuser } = require('../../middlewares/auth');

const Blog = require('../../components/blog');

const router = express.Router();

/**
 * @swagger
 * /blogs:
 *   post:
 *     summary: Create Blog
 *     tags:
 *       - Blog
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/blog.yaml#/create/request'
 *     responses:
 *       200:
 *         description: A blog
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/blog.yaml#/create/response'
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
 *   get:
 *     summary: List Blogs
 *     tags:
 *       - Blog
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: limit
 *         in: query
 *         description: The maximum number of blogs to retrieve.
 *         type: integer
 *       - name: skip
 *         in: query
 *         description: The number of blogs to skip.
 *         type: integer
 *     responses:
 *       200:
 *         description: A list of blogs
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/blog.yaml#/list/response'
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
  .post(isSuperuser, validate(Blog.validation.create), Blog.controller.create)
  .get(isLoggedIn, validate(Blog.validation.list), Blog.controller.list);

/**
 * @swagger
 * /blogs/{id}:
 *   get:
 *     summary: Get Blog
 *     tags:
 *       - Blog
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         type: string
 *         in: path
 *         description: Blog ID
 *     responses:
 *       200:
 *         description: A blog
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/blog.yaml#/getOne/response'
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
 *     summary: Update Blog
 *     tags:
 *       - Blog
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         type: string
 *         in: path
 *         description: Blog ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/blog.yaml#/update/request'
 *     responses:
 *       204:
 *         description: Blog updated - No content
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
  .get(isLoggedIn, validate(Blog.validation.getOne), Blog.controller.getOne)
  .put(isSuperuser, validate(Blog.validation.update), Blog.controller.update);

module.exports = router;
