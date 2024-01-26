// Configuration
require('dotenv').config();
require('./config/mongoose').connect();
// Other imports
const http = require('http');
const vars = require('./config/vars');
const app = require('./app');

const server = http.createServer(app);

const { port, env } = vars;
console.log('ENV : ', env);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
