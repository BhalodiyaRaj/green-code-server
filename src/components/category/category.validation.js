const Joi = require('joi');
const { MongoId } = require('../../utils/validationHelper');

module.exports = {
  create: {
    body: Joi.object({
      name: Joi.string().required().min(3).max(50),
    }),
  },
  update: {
    params: Joi.object({
      id: MongoId.required(),
    }),
    body: Joi.object({
      name: Joi.string().min(3).max(50),
    }),
  },
  delete: {
    params: Joi.object({
      id: MongoId.required(),
    }),
  },
};
