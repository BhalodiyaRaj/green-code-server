const Comment = require('./comment.service');

exports.create = async (req, res, next) => {
  try {
    const comment = await Comment.create(req.user._id, req.query.type, req.query.reference, req.body.body);
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    const comments = await Comment.list(req.user._id, req.query.type, req.query.reference);
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    await Comment.delete(req.user._id, req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
