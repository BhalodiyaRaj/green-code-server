const Comment = require('../../models/comment.model');

exports.model = Comment;

exports.create = async (userId, type, reference, body) => {
  const comment = await Comment.create({ createdBy: userId, type, reference, body });
  return comment;
};

exports.list = async (userId, type, reference) => {
  const comments = await Comment.find({ createdBy: userId, type, reference });
  return comments;
};

exports.delete = async (userId, commentId) => {
  await Comment.deleteOne({ createdBy: userId, _id: commentId });
};
