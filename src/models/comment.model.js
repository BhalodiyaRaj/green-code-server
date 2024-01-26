const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'question',
  },
  body: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('comment', schema);
