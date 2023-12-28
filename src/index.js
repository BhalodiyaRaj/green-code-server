// Configuration
require('dotenv').config();
require('./config/mongoose').connect();
// Main Imports
const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middlewares/errorHandler');
const vars = require('./config/vars');

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const router = require('./components/routes');

app.get('/health', (req, res) => {
  res.send('ok');
});

app.use('/api/v1', router);

app.use(errorHandler);

const server = http.createServer(app);

const { port, env } = vars;
console.log('ENV : ', env);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
