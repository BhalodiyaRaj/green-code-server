/* eslint-disable no-multiple-empty-lines */
const mongoose = require('mongoose');
const Question = require('../../models/question.model');



/**
 * The Question model.
 *
 * @type {Question}
 */

exports.model = Question;


/**
 * Create a new question
 *
 * @param {Object} questionData
 * @returns
 */

exports.create = async (user, data) => {
  const newQuestion = new Question({ ...data, createdBy: user, updatedBy: user });
  await newQuestion.save();
  return newQuestion.info();
};




/**
 * Retrieve a list of questions from the database based several filters.
 *
 * @param {string} search - The search keyword to match against the question title or body.
 * @param {string} level - The level of the questions.
 * @param {Array<string>} categories - An array of category IDs to filter the questions.
 * @param {number} limit - The maximum number of questions to retrieve.
 * @param {number} offset - The number of questions to skip before retrieving.
 * @param {string} requestUser - The ID of the user making the request.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of question objects.
 */

exports.list = async (search, level, categories, limit, skip, requestUser) => {
  const aggregationMatch = {
    $or: [
      { title: { $regex: search, $options: 'i' } },
      { body: { $regex: search, $options: 'i' } },
    ],
  };

  if (level) aggregationMatch.level = level;
  if (categories?.length) aggregationMatch.categories = { $all: categories };

  const pipeline = [
    { $match: aggregationMatch },
    { $sort: { createdAt: 1 } },
    { $skip: skip },
    { $limit: limit },
    {
      $lookup: {
        from: 'categories',
        let: { categories: '$categories' },
        pipeline: [
          { $match: { $expr: { $in: ['$_id', '$$categories'] } } },
          { $project: { _id: 1, name: 1 } },
        ],
        as: 'categories',
      },
    },
    {
      $lookup: {
        from: 'likes',
        localField: '_id',
        foreignField: 'reference',
        as: 'likesArray',
      },
    },
    {
      $addFields: {
        likes: { $size: '$likesArray' },
        isLiked: { $in: [requestUser, '$likesArray.user'] },
      },
    },
    { $project: { likesArray: 0 } },
  ];

  const questions = await Question.aggregate(pipeline);
  return questions;
};





/**
 * Retrieve a single question from the database by its id.
 *
 * @param {string} id - The ID of the question to retrieve.
 * @param {string} requestUser - The ID of the user making the request.
 * @returns {Promise<Object>} - A promise that resolves to a question object.
 */

exports.getById = async (id, requestUser) => {
  const pipeline = [
    { $match: { _id: new mongoose.Types.ObjectId(id) } },
    {
      $lookup: {
        from: 'categories',
        let: { categories: '$categories' },
        pipeline: [
          { $match: { $expr: { $in: ['$_id', '$$categories'] } } },
          { $project: { _id: 1, name: 1 } },
        ],
        as: 'categories',
      },
    },
    {
      $lookup: {
        from: 'likes',
        localField: '_id',
        foreignField: 'reference',
        as: 'likesArray',
      },
    },
    {
      $addFields: {
        likes: { $size: '$likesArray' },
        isLiked: { $in: [requestUser, '$likesArray.user'] },
      },
    },
    { $project: { likesArray: 0 } },
  ];


  const question = await Question.aggregate(pipeline);
  return question[0];
};





/**
 * Update a question in the database.
 *
 * @param {string} questionId - The ID of the question to update.
 * @param {Object} data - The updated question data.
 * @returns {Promise<void>} - A promise that resolves when the question is updated.
 */

exports.update = async (questionId, data) => {
  await Question.findOneAndUpdate({ _id: questionId }, data);
};
