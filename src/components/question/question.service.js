/* eslint-disable no-multiple-empty-lines */
const QuestionDal = require('./question.dal');



/**
 * Create a new question
 * @param {*} user - user
 * @param {Object} questionData - question data
 * @returns
 */
exports.create = async (user, questionData) => {
  const newQuestion = await QuestionDal.create(user, questionData);
  return { question: newQuestion };
};



/**
 * List out all questions with filters
 * @param {Object} options - options
 * @returns
 */
exports.list = async (options) => {
  const { limit, skip, search = '', level, categories, user } = options;
  const questions = await QuestionDal.list(search, level, categories, limit, skip, user);
  return questions;
};



/**
 * Get one question by id
 * @param {String} questionId - question id
 * @param {*} requestUser - request user
 * @returns
 */
exports.getOne = async (questionId, requestUser) => {
  const question = await QuestionDal.getById(questionId, requestUser);
  return question;
};



/**
 * Update question by id
 * @param {ObjectId} questionId - question id
 * @param {Object} questionData - question data
 */
exports.update = async (questionId, questionData) => {
  await QuestionDal.update(questionId, questionData);
};
