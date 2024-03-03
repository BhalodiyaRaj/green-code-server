const Joi = require('joi');
const { Schema } = require('../../utils/validationHelper');

module.exports = {

  create: {
    body: Joi.object({
      name: Joi.string().required(),
    }),
  },

  update: {
    params: Joi.object({
      id: Schema.mongoId.required(),
    }),
    body: Joi.object({
      name: Joi.string().required(),
    }),
  },

  delete: {
    params: Joi.object({
      id: Schema.mongoId.required(),
    }),
  },

};
