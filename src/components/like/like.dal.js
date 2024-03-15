/* eslint-disable no-multiple-empty-lines */
const Like = require('../../models/like.model');



exports.model = Like;



/**
 * Creates a new like.
 * @param {string} userId - The ID of the user who created the like.
 * @param {string} type - The type of the like.
 * @param {string} referenceId - The ID of the reference for the like.
 * @returns {Promise<void>} A promise that resolves when the like is created.
 */
exports.like = async (userId, type, referenceId) => {
  await Like.create({
    createdBy: userId,
    reference: referenceId,
    type,
  });
};



/**
 * Deletes a like.
 * @param {string} userId - The ID of the user who created the like.
 * @param {string} reference - The reference for the like.
 * @returns {Promise<void>} A promise that resolves when the like is deleted.
 */
exports.unlike = async (userId, reference) => {
  await Like.deleteOne({ createdBy: userId, reference });
};
