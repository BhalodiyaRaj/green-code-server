const Joi = require('joi');
const { ObjectId } = require('mongoose').Types;

module.exports = {

  create: {
    body: Joi.object({
      title: Joi.string().required().min(5).max(70),
      body: Joi.string().required().min(5).max(2000),
    }),
  },

  list: {
    query: Joi.object({
      limit: Joi.number().default(25).max(50),
      skip: Joi.number().default(0),
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
      body: Joi.string().min(5).max(2000),
    }),
  },

};
