const Joi = require('joi');
const { Schema } = require('../../utils/validationHelper');

module.exports = {

  like: {
    query: Joi.object({
      question: Schema.mongoId,
      solution: Schema.mongoId,
    }).or('question', 'solution')
      .custom((obj) => {
        const type = Object.keys(obj)[0];
        const reference = obj[type];
        return { type, reference };
      }),
  },

  unlike: {
    query: Joi.object({
      question: Schema.mongoId,
      solution: Schema.mongoId,
    }).or('question', 'solution')
      .custom((obj) => {
        const type = Object.keys(obj)[0];
        const reference = obj[type];
        return { type, reference };
      }),
  },

};
