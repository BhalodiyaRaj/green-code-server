/* eslint-disable no-multiple-empty-lines */
const Comment = require('../../models/comment.model');



exports.model = Comment;


/**
 * Creates a new comment.
 * @param {string} userId - The ID of the user creating the comment.
 * @param {string} type - The type of the comment.
 * @param {string} reference - The reference for the comment.
 * @param {string} body - The body of the comment.
 * @returns {Promise<Comment>} The created comment.
 */
exports.create = async (userId, type, reference, body) => {
  const comment = await Comment.create({ createdBy: userId, type, reference, body });
  return comment;
};


/**
 * Retrieves a list of comments.
 * @param {string} userId - The ID of the user who created the comments.
 * @param {string} type - The type of the comments.
 * @param {string} reference - The reference for the comments.
 * @returns {Promise<Comment[]>} The list of comments.
 */
exports.list = async (userId, type, reference) => {
  const comments = await Comment.find({ createdBy: userId, type, reference });
  return comments;
};


/**
 * Deletes a comment.
 * @param {string} userId - The ID of the user who created the comment.
 * @param {string} commentId - The ID of the comment to be deleted.
 */
exports.delete = async (userId, commentId) => {
  await Comment.deleteOne({ createdBy: userId, _id: commentId });
};
