const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const vars = require('../config/vars');

const schema = new mongoose.Schema({

  username: {
    type: String,
    unique: true,
    require: true,
  },

  email: {
    type: String,
    unique: true,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },

  role: {
    type: String,
    default: 'user',
    enum: ['user', 'superuser', 'admin'],
  },

}, {
  timestamps: true,
});

// pre-save hook to encrypt password before saving user to database
schema.pre('save', async function encryptPassword(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 7);
  return next();
});

/**
 * methods that are used frequently are defined on schema.methods
 * this way, they are available on every instance of the model
 * Documentation: https://mongoosejs.com/docs/guide.html#methods
 */
schema.method({

  info() {
    return {
      username: this.username,
      email: this.email,
      role: this.role,
    };
  },

  token() {
    return jwt.sign({ _id: this._id, role: this.role }, vars.jwtSecret, {
      expiresIn: '10h',
    });
  },

  comparePassword(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  },

});

/**
 * static methods are defined on schema.statics
 * this way, they are available on the model itself
 * Documentation: https://mongoosejs.com/docs/guide.html#statics
 */
schema.statics = {

};

module.exports = mongoose.model('user', schema);
