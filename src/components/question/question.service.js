const Question = require('./question.model');
const Like = require('../like/like.model');

exports.create = async (questionData) => {
  const newQuestion = new Question(questionData);
  await newQuestion.save();
  return { question: newQuestion.info() };
};

exports.list = async ({
  limit = 5, offset = 0, search = '', level, categories,
}) => {
  const questions = await Question.getQuestionList(search, level, categories, limit, offset);
  return questions;
};

// service for getting one question

exports.getOne = async (questionId, requestUser) => {
  const [question, like] = await Promise.all([
    await Question.findOne({ _id: questionId }),
    await Like.findOne({ user: requestUser, model: questionId, reference: 'question' }),
  ]);
  if (like) question.liked = true;
  return question;
};

exports.update = async (questionId, questionData) => {
  await Question.findOneAndUpdate({ _id: questionId }, questionData);
};

// create service for like question

exports.like = async (questionId, userId) => {
  const like = await Like.findOne({ reference: questionId, user: userId, type: 'question' });
  if (like) {
    await Like.deleteOne({ _id: like._id });
    return { message: 'unlike' };
  }
  const newLike = new Like({ question: questionId, user: userId });
  await newLike.save();
  return { message: 'like' };
};
