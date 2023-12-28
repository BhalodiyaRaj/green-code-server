const Joi = require('joi');

module.exports = {
  create: {
    body: Joi.object({
      title: Joi.string().required().min(5).max(70),
      question: Joi.string().required().min(5).max(500),
      categories: Joi.array().items(Joi.string()),
      level: Joi.string().required().valid('hard', 'medium', 'easy'),
    }),
  },
  list: {
    query: Joi.object({
      limit: Joi.number().default(25).max(50),
      offset: Joi.number().default(0),
      search: Joi.string().allow(''),
    }),
  },
  update: {
    params: Joi.object({
      id: Joi.string().hex().length(24).required(),
    }),
    body: Joi.object({
      title: Joi.string().min(5).max(70),
      question: Joi.string().min(5).max(500),
      categories: Joi.array().items(Joi.string()),
      level: Joi.string().valid('hard', 'medium', 'easy'),
    }),
  },
};
