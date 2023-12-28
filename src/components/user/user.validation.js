const Joi = require('joi');

module.exports = {
  register: {
    body: Joi.object({
      username: Joi.string().required().min(3).max(50),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(8).max(100),
    }),
  },

  login: {
    body: Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required().max(128),
    }),
  },
};
