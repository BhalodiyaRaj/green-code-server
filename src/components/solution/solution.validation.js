const Joi = require('joi');

module.exports = {
  create: {
    body: Joi.object({
      question: Joi.string().required(),
      language: Joi.string().required(),
      title: Joi.string().required(),
      code: Joi.string().required(),
    }),
  },
  list: {
    query: Joi.object({
      limit: Joi.number().integer(),
      skip: Joi.number().integer(),
    }),
  },
  update: {
    body: Joi.object({
      question: Joi.string().required(),
      language: Joi.string().required(),
      title: Joi.string().required(),
      code: Joi.string().required(),
    }),
  },
};
