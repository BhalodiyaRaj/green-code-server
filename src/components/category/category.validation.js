const Joi = require('joi');

module.exports = {
  create: {
    body: Joi.object({
      name: Joi.string().required().min(3).max(50),
    }),
  },
};
