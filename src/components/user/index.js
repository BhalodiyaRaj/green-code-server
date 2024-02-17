const controller = require('./user.controller');
const service = require('./user.service');
const dal = require('./user.dal');
const validation = require('./user.validation');

module.exports = {
  controller,
  service,
  dal,
  validation,
};
