const Question = require('../../models/question.model');

exports.model = Question;

exports.create = async (questionData) => {
  const newQuestion = new Question(questionData);
  await newQuestion.save();
  return newQuestion.info();
};

exports.list = async (search, level, categories, limit, offset, user) => {
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
        localField: 'categories',
        foreignField: '_id',
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
      },
    },
  ];
  if (user) {
    pipeline.push({
      $addFields: {
        isLiked: {
          $cond: {
            if: { $in: [user, '$likesArray.user'] },
            then: true,
            else: false,
          },
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

exports.getById = async (id) => {
  const question = await Question.findOne({ _id: id });
  return question;
};

exports.update = async (questionId, data) => {
  await Question.findOneAndUpdate({ _id: questionId }, data);
};
