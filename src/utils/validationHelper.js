const Joi = require('joi');

exports.MongoId = Joi.string().hex().length(24);
