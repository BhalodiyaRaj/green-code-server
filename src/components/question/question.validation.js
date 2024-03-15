const Joi = require('joi');
const { ObjectId } = require('mongoose').Types;

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
      search: Joi.string().allow(''),
      limit: Joi.number().default(25).max(50),
      skip: Joi.number().default(0),
      level: Joi.string().valid('hard', 'medium', 'easy'),
      categories: Joi.array().items(Joi.string().length(24)).single(true),
    }),
  },

  getOne: {
    params: Joi.object({
      id: Joi.string().hex().length(24).required(),
    }).custom((obj) => ({ ...obj, id: new ObjectId(obj.id) })),
  },

  update: {
    params: Joi.object({
      id: Joi.string().hex().length(24).required(),
    }).custom((obj) => ({ ...obj, id: new ObjectId(obj.id) })),
    body: Joi.object({
      title: Joi.string().min(5).max(70),
      body: Joi.string().min(5).max(500),
      categories: Joi.array().items(Joi.string()).min(1).single(),
      level: Joi.string().valid('hard', 'medium', 'easy'),
    }),
  },

};
