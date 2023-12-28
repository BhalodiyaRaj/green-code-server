const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  title: {
    type: String,
    required: true,
  },
  question: {
    type: String,
  },
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
  }],
  level: {
    type: String,
    enum: ['hard', 'medium', 'easy'],
  },
}, {
  timestamps: true,
});

schema.method({
  info() {
    return {
      title: this.title,
      question: this.question,
      categories: this.categories,
      level: this.level,
    };
  },

});

module.exports = mongoose.model('question', schema);
