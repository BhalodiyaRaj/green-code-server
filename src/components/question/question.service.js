const QuestionDal = require('./question.dal');
const Like = require('../../models/like.model');

exports.create = async (questionData) => {
  const newQuestion = await QuestionDal.create(questionData);
  return { question: newQuestion };
};

exports.list = async ({
  limit = 5, offset = 0, search = '', level, categories, user,
}) => {
  const questions = await QuestionDal.list(search, level, categories, limit, offset, user);
  return questions;
};

exports.getOne = async (questionId, requestUser) => {
  const [question, like] = await Promise.all([
    await QuestionDal.getById(questionId),
    await Like.findOne({ user: requestUser, reference: questionId, type: 'question' }),
  ]);
  if (like) question.liked = true;
  return question;
};

exports.update = async (questionId, questionData) => {
  await QuestionDal.update(questionId, questionData);
};

exports.like = async (questionId, userId) => {
  const like = await Like.findOne({ reference: questionId, user: userId, type: 'question' });
  if (like) {
    await Like.deleteOne({ _id: like._id });
    return { message: 'unlike' };
  }
  await Like.create({ reference: questionId, user: userId, type: 'question' });
  return { message: 'like' };
};
