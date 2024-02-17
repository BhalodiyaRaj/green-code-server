const controller = require('./comment.controller');
const service = require('./comment.service');
const dal = require('./comment.dal');
const validation = require('./comment.validation');

module.exports = {
  controller,
  service,
  dal,
  validation,
};
