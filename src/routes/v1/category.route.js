const express = require('express');
const { validate } = require('../../utils/validationHelper');
const Category = require('../../components/category');

const router = express.Router();

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get list of categories
 *     tags:
 *       - Category
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A list of categories
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/category.yaml#/list/response'
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
 *     summary: Create Category
 *     tags:
 *       - Category
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/category.yaml#/create/request'
 *     responses:
 *       200:
 *         description: A category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/category.yaml#/create/response'
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
  .get(Category.controller.list)
  .post(validate(Category.validation.create), Category.controller.create);

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Update Category
 *     tags:
 *       - Category
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/category.yaml#/update/request'
 *     responses:
 *       200:
 *         description: A category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/category.yaml#/update/response'
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
 *     summary: Delete Category
 *     tags:
 *       - Category
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Category deleted - No content
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
  .put(validate(Category.validation.update), Category.controller.update)
  .delete(validate(Category.validation.delete), Category.controller.delete);

module.exports = router;
