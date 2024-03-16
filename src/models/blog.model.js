const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  body: {
    type: String,
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model('blog', schema);
