const Like = require('./like.dal');

exports.like = async (userId, type, reference) => {
  await Like.like(userId, type, reference);
};

exports.unlike = async (userId, reference) => {
  await Like.unlike(userId, reference);
};
