const User = require('./user.model');

exports.register = async (userData) => {
  const newUser = new User(userData);
  await newUser.save();
  return { user: newUser.info() };
};

exports.login = async ({ username, password }) => {
  const result = await User.findOneAndGenerateToken({ username, password });
  return result;
};
