const QuestionService = require('./question.service');

exports.create = async (req, res, next) => {
  try {
    const question = await QuestionService.create(req.user._id, req.body);
    return res.status(200).json(question);
  } catch (error) {
    return next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    const questions = await QuestionService.list({ ...req.query, user: req.user?._id });
    return res.status(200).json(questions);
  } catch (error) {
    return next(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const question = await QuestionService.getOne(req.params.id, req.user?._id);
    return res.status(200).json(question);
  } catch (error) {
    return next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    await QuestionService.update(req.params.id, req.body);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};
