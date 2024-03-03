const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'question',
  },
  language: {
    type: String,
    required: true,
    ref: 'language',
  },
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('solution', schema);
