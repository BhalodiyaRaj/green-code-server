const Joi = require('joi');
const { Schema } = require('../../utils/validationHelper');

module.exports = {
  create: {
    query: Joi.object({
      question: Schema.mongoId.required(),
    }),
    body: Joi.object({
      language: Schema.mongoId.required(),
      title: Joi.string().required().min(3).max(50),
      code: Joi.string().required().min(10).max(3000),
    }),
  },

  list: {
    query: Joi.object({
      question: Schema.mongoId.required(),
    }),
  },

  getOne: {
    params: Joi.object({
      id: Schema.mongoId.required(),
    }),
  },

  update: {
    params: Joi.object({
      id: Schema.mongoId.required(),
    }),
    body: Joi.object({
      language: Joi.string().required(),
      title: Joi.string().required(),
      code: Joi.string().required(),
    }),
  },
};
