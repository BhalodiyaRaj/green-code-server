const express = require('express');
const { validate } = require('express-validation');
const { isSuperuser } = require('../../middlewares/auth');
const Language = require('../../components/language');

const router = express.Router();

/**
 * @swagger
 * /language:
 *   get:
 *     summary: List languages
 *     tags:
 *       - language
 *     responses:
 *       200:
 *         description: OK - request succeeded
 *         schema:
 *           $ref: 'components/language.yaml#/list/response'
 *
 */

router.route('/')
  .get(Language.controller.list)
  .post(isSuperuser, validate(Language.validation.create), Language.controller.create);

router.route('/:id')
  .put(validate(Language.validation.update), Language.controller.update)
  .delete(validate(Language.validation.delete), Language.controller.delete);

module.exports = router;
