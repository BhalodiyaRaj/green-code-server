const express = require('express');
const { validate } = require('../../utils/validationHelper');
const { isSuperuser } = require('../../middlewares/auth');
const Language = require('../../components/language');

const router = express.Router();

/**
 * @swagger
 * /languages:
 *   get:
 *     summary: Get list of languages
 *     tags:
 *       - Language
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A list of languages
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/language.yaml#/list/response'
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
 *     summary: Create Language
 *     tags:
 *       - Language
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/language.yaml#/create/request'
 *     responses:
 *       200:
 *         description: A language
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/language.yaml#/create/response'
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
  .get(Language.controller.list)
  .post(isSuperuser, validate(Language.validation.create), Language.controller.create);

/**
 * @swagger
 * /languages/{id}:
 *   put:
 *     summary: Update Language
 *     tags:
 *       - Language
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         type: string
 *         description: Language ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/language.yaml#/update/request'
 *     responses:
 *       204:
 *         description: Language updated - No content
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
 *     summary: Delete Language
 *     tags:
 *       - Language
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *         description: Language ID
 *     responses:
 *       204:
 *         description: Language deleted - No content
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
  .put(validate(Language.validation.update), Language.controller.update)
  .delete(validate(Language.validation.delete), Language.controller.delete);

module.exports = router;
