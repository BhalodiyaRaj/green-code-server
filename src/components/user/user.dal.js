/* eslint-disable no-multiple-empty-lines */
const User = require('../../models/user.model');



exports.model = User;



/**
 * Create a new user
 *
 * @param {Object} userData - user data
 * @returns
 */
exports.create = async (userData) => {
  const newUser = new User(userData);
  await newUser.save();
  return newUser;
};



/**
 * Verify user by username and password and generate token
 *
 * @param {String} username - username
 * @param {String} password - password
 */
exports.findOneAndGenerateToken = async (username, password) => {
  const user = await User.findOne({ $or: [{ username }, { email: username }] });
  if (!user) throw new Error('RESOURCE_NOT_FOUND');
  if (!await user.comparePassword(password)) throw new Error('INVALID_DATA');
  return { user: user.info(), token: user.token() };
};
