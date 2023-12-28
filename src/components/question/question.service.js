const Question = require('./question.model');
const Like = require('../like/like.model');

exports.create = async (questionData) => {
  const newQuestion = new Question(questionData);
  await newQuestion.save();
  return { question: newQuestion.info() };
};

exports.list = async ({ limit = 5, offset = 0, search = '' }) => {
  const questions = await Question.find({
    $or: [
      { title: { $regex: search, $options: 'i' } },
      { question: { $regex: search, $options: 'i' } },
    ],
  })
    .skip(Number(offset))
    .limit(Number(limit))
    .populate({ path: 'categories', select: 'name' });
  return questions;
};

exports.update = async (questionId, questionData) => {
  await Question.findOneAndUpdate({ _id: questionId }, questionData);
};

// create service for like question

exports.like = async (questionId, userId) => {
  const like = await Like.findOne({ reference: questionId, user: userId, model: 'question' });
  if (like) {
    await Like.deleteOne({ _id: like._id });
    return { message: 'unlike' };
  }
  const newLike = new Like({ question: questionId, user: userId });
  await newLike.save();
  return { message: 'like' };
};
