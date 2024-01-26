const Joi = require('joi');

module.exports = {
  create: {
    body: Joi.object({
      title: Joi.string().required().min(5).max(70),
      body: Joi.string().required().min(5).max(500),
      categories: Joi.array().items(Joi.string()),
      level: Joi.string().required().valid('hard', 'medium', 'easy'),
    }),
  },
  list: {
    query: Joi.object({
      limit: Joi.number().default(25).max(50).default(50),
      offset: Joi.number().default(0).default(0),
      search: Joi.string().allow('').default(''),
      level: Joi.string().valid('hard', 'medium', 'easy'),
      categories: Joi.array().items(Joi.string().length(24)).single(true),
    }),
  },
  getOne: {
    params: Joi.object({
      id: Joi.string().hex().length(24).required(),
    }),
  },
  update: {
    params: Joi.object({
      id: Joi.string().hex().length(24).required(),
    }),
    body: Joi.object({
      title: Joi.string().min(5).max(70),
      body: Joi.string().min(5).max(500),
      categories: Joi.array().items(Joi.string()).min(1).single(),
      level: Joi.string().valid('hard', 'medium', 'easy'),
    }),
  },
};
