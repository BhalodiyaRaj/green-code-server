const Joi = require('joi');
const { Schema } = require('../../utils/validationHelper');

module.exports = {

  create: {
    body: Joi.object({
      body: Joi.string().required().max(500).min(5),
    }),
    query: Joi.object({
      question: Schema.mongoId,
    }).or('question')
      .custom((obj) => {
        const type = Object.keys(obj)[0];
        const reference = obj[type];
        return { type, reference };
      }),
  },

  list: {
    query: Joi.object({
      question: Schema.mongoId,
    }).or('question')
      .custom((obj) => {
        const type = Object.keys(obj)[0];
        const reference = obj[type];
        return { type, reference };
      }),
  },

  delete: {
    params: Joi.object({
      id: Schema.mongoId.required(),
    }),
  },

};
