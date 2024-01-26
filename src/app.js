const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const versionOneRoutes = require('./routes/v1');

app.get('/health', (req, res) => {
  res.send('ok');
});

app.use('/api/v1', versionOneRoutes);

app.use(errorHandler);

module.exports = app;
