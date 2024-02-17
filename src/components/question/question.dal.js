const mongoose = require('mongoose');
const Question = require('../../models/question.model');

exports.model = Question;

exports.create = async (questionData) => {
  const newQuestion = new Question(questionData);
  await newQuestion.save();
  return newQuestion.info();
};

exports.list = async (search, level, categories, limit, offset, requestUser) => {
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
    { $skip: offset },
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
      $addFields: { likes: { $size: '$likesArray' } },
    },
  ];
  if (requestUser) {
    pipeline.push({
      $addFields: {
        isLiked: {
          $cond: { if: { $in: [requestUser, '$likesArray.user'] }, then: true, else: false },
        },
      },
    });
  }
  pipeline.push({
    $project: {
      likesArray: 0,
    },
  });

  const questions = await Question.aggregate(pipeline);
  return questions;
};

exports.getById = async (id, requestUser) => {
  const pipeline = [
    {
      $match: {
        _id: new mongoose.Types.ObjectId(id),
      },
    },
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
      $addFields: { likes: { $size: '$likesArray' } },
    },
  ];
  if (requestUser) {
    pipeline.push({
      $addFields: {
        isLiked: {
          $cond: { if: { $in: [requestUser, '$likesArray.user'] }, then: true, else: false },
        },
      },
    });
  }
  pipeline.push({
    $project: {
      likesArray: 0,
    },
  });

  const question = await Question.aggregate(pipeline);
  return question[0];
};

exports.update = async (questionId, data) => {
  await Question.findOneAndUpdate({ _id: questionId }, data);
};
