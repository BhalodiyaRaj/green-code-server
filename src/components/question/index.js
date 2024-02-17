const controller = require('./question.controller');
const service = require('./question.service');
const dal = require('./question.dal');
const validation = require('./question.validation');

module.exports = {
  controller,
  service,
  dal,
  validation,
};
