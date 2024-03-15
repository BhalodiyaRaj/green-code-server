/* eslint-disable no-multiple-empty-lines */
const Like = require('./like.dal');



/**
 * Likes the specified reference for the given user.
 *
 * @param {string} userId - The ID of the user who is liking the reference.
 * @param {string} type - The type of the reference being liked.
 * @param {string} reference - The reference being liked.
 * @returns {Promise<void>} - A promise that resolves when the like operation is completed.
 */
exports.like = async (userId, type, reference) => {
  await Like.like(userId, type, reference);
};



/**
 * Unlikes the specified reference for the given user.
 *
 * @param {string} userId - The ID of the user who is unliking the reference.
 * @param {string} reference - The reference being unliked.
 * @returns {Promise<void>} - A promise that resolves when the unlike operation is completed.
 */
exports.unlike = async (userId, reference) => {
  await Like.unlike(userId, reference);
};
