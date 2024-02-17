const controller = require('./category.controller');
const service = require('./category.service');
const dal = require('./category.dal');
const validation = require('./category.validation');

module.exports = {
  controller,
  service,
  dal,
  validation,
};
