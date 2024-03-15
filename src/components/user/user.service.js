/* eslint-disable no-multiple-empty-lines */
const UserDal = require('./user.dal');



/**
 * Register a new user
 *
 * @param {Object} userData - user data
 */
exports.register = async (userData) => {
  const newUser = await UserDal.create(userData);
  return { user: newUser.info() };
};



/**
 * Login a user.
 *
 * @param {Object} credentials - The user credentials.
 * @param {string} credentials.username - The username.
 * @param {string} credentials.password - The password.
 * @returns {Promise<Object>} The login result.
 */
exports.login = async ({ username, password }) => {
  const result = await UserDal.findOneAndGenerateToken(username, password);
  return result;
};
