const Joi = require('joi');
const { validate } = require('express-validation');

exports.validate = (schema) => validate(schema, { context: true });

exports.MongoId = Joi.string().hex().length(24);
