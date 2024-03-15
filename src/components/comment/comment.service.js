/* eslint-disable no-multiple-empty-lines */
const Comment = require('./comment.dal');



/**
 * Creates a new comment.
 *
 * @param {string} userId - The ID of the user creating the comment.
 * @param {string} type - The type of the comment.
 * @param {string} reference - The reference for the comment.
 * @param {string} body - The body of the comment.
 * @returns {Promise<Object>} The created comment.
 */
exports.create = async (userId, type, reference, body) => {
  const comment = await Comment.create(userId, type, reference, body);
  return comment;
};



/**
 * Retrieves a list of comments.
 *
 * @param {string} userId - The ID of the user retrieving the comments.
 * @param {string} type - The type of the comments.
 * @param {string} reference - The reference for the comments.
 * @returns {Promise<Array>} An array of comments.
 */
exports.list = async (userId, type, reference) => {
  const comments = await Comment.list(userId, type, reference);
  return comments;
};



/**
 * Deletes a comment.
 *
 * @param {string} userId - The ID of the user deleting the comment.
 * @param {string} commentId - The ID of the comment to be deleted.
 */
exports.delete = async (userId, commentId) => {
  await Comment.delete(userId, commentId);
};
