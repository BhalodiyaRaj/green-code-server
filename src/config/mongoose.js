const mongoose = require('mongoose');
const { mongo } = require('./vars');

// Exit application on error
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

mongoose.connection.on('connected', () => {
  console.log('database connection..... done');
});

exports.connect = (cb) => {
  mongoose.connect(mongo.uri).then(() => { if (cb) cb(); });
  return mongoose.connection;
};
