const mongoose = require('mongoose');
const { mongo } = require('./vars');
const Logger = require('../lib/logger');

// Exit application on error
mongoose.connection.on('error', (err) => {
  Logger.error(`Database connection error : ${err}`);
  process.exit(-1);
});

mongoose.connection.on('connected', () => {
  Logger.info('Database connected successfully');
});

exports.connect = (cb) => {
  mongoose.connect(mongo.uri).then(() => { if (cb) cb(); });
  return mongoose.connection;
};
