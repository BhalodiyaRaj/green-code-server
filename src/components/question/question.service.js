/* eslint-disable no-multiple-empty-lines */
const QuestionDal = require('./question.dal');
const Like = require('../../models/like.model');



exports.create = async (user, requestBody) => {
  const newQuestion = await QuestionDal.create(user, requestBody);
  return { question: newQuestion };
};



exports.list = async (requestBody) => {
  const { limit, skip, search = '', level, categories, user } = requestBody;
  const questions = await QuestionDal.list(search, level, categories, limit, skip, user);
  return questions;
};



exports.getOne = async (questionId, requestUser) => {
  const question = await QuestionDal.getById(questionId, requestUser);
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
