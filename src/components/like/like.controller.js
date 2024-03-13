const Like = require('./like.service');

exports.like = async (req, res, next) => {
  try {
    const { type, reference } = req.query;
    await Like.like(req.user._id, type, reference);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

exports.unlike = async (req, res, next) => {
  try {
    const { reference } = req.query;
    await Like.unlike(req.user._id, reference);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
