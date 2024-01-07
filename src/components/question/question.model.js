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
  body: {
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
      body: this.body,
      categories: this.categories,
      level: this.level,
    };
  },

});

schema.statics = {
  async getQuestionList(search, level, categories, limit, offset) {
    const query = {
      $or: [
        { title: { $regex: search, $options: 'i' } },
        { body: { $regex: search, $options: 'i' } },
      ],
    };
    if (level) query.level = level;
    if (categories?.length) query.categories = { $all: categories };
    const questions = await this.find(query).limit(limit).skip(offset).populate({ path: 'categories', select: 'name' });
    return questions;
  },
};

module.exports = mongoose.model('question', schema);
