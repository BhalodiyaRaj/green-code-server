const Joi = require('joi');

module.exports = {
  create: {
    body: Joi.object({
      name: Joi.string().required(),
    }),
  },
  list: {
    query: Joi.object({
      limit: Joi.number().integer(),
      offset: Joi.number().integer(),
    }),
  },
  update: {
    body: Joi.object({
      name: Joi.string().required(),
    }),
  },
};
