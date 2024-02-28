const Joi = require('joi');
const { MongoId } = require('../../utils/validationHelper');

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
    params: Joi.object({
      id: MongoId.required(),
    }),
    body: Joi.object({
      name: Joi.string().required(),
    }),
  },

  delete: {
    params: Joi.object({
      id: MongoId.required(),
    }),
  },

};
