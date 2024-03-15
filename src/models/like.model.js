const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },

  // reference will hold the id of Model (as per `type` field) that is being liked
  reference: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'type',
  },

  // type will hold the name of the Model that is being liked
  type: {
    type: String,
    required: true,
    enum: ['question', 'comment'],
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model('like', schema);
