const User = require('../../models/user.model');

exports.model = User;

exports.create = async (userData) => {
  const newUser = new User(userData);
  await newUser.save();
  return newUser;
};

exports.findOneAndGenerateToken = async (username, password) => {
  const user = await User.findOne({ $or: [{ username }, { email: username }] });
  if (!user) throw new Error('RESOURCE_NOT_FOUND');
  if (!await user.comparePassword(password)) throw new Error('INVALID_DATA');
  return { user: user.info(), token: user.token() };
};
