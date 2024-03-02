// Configuration
require('dotenv').config();
require('./config/mongoose').connect();
// Other imports
const http = require('http');
const vars = require('./config/vars');
const app = require('./app');
const Logger = require('./lib/logger');

const server = http.createServer(app);

const { port, env } = vars;
Logger.info(`ENV : ${env}`);

server.listen(port, () => {
  Logger.info(`Server PORT : ${port}`);
});

module.exports = app;
