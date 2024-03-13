const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const Logger = require('./lib/logger');
const parseUser = require('./middlewares/parseUser');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(morgan(':method :url Status : :status, Time taken: :response-time ms', {
  stream: {
    write: (message) => Logger.info(message),
  },
}));

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(parseUser);

const versionOneRoutes = require('./routes/v1');

app.get('/health', (req, res) => {
  res.send('ok');
});

app.use('/api/v1', versionOneRoutes);

app.use(errorHandler);

module.exports = app;
