const Comment = require('./comment.dal');

exports.create = async (userId, type, reference, body) => {
  const comment = await Comment.create(userId, type, reference, body);
  return comment;
};

exports.list = async (userId, type, reference) => {
  const comments = await Comment.list(userId, type, reference);
  return comments;
};

exports.delete = async (userId, commentId) => {
  await Comment.delete(userId, commentId);
};
