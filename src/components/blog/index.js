const dal = require('./blog.dal');
const service = require('./blog.service');
const controller = require('./blog.controller');
const validation = require('./blog.validation');

module.exports = {
  dal,
  service,
  controller,
  validation,
};
