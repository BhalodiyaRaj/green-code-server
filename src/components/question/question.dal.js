const Question = require('../../models/question.model');

exports.model = Question;

exports.create = async (questionData) => {
  const newQuestion = new Question(questionData);
  await newQuestion.save();
  return newQuestion.info();
};

exports.list = async (search, level, categories, limit, offset) => {
  const query = {
    $or: [
      { title: { $regex: search, $options: 'i' } },
      { body: { $regex: search, $options: 'i' } },
    ],
  };
  if (level) query.level = level;
  if (categories?.length) query.categories = { $all: categories };
  const questions = await Question.find(query).limit(limit).skip(offset).populate({ path: 'categories', select: 'name' });
  return questions;
};

exports.getById = async (id) => {
  const question = await Question.findOne({ _id: id });
  return question;
};

exports.update = async (questionId, data) => {
  await Question.findOneAndUpdate({ _id: questionId }, data);
};
