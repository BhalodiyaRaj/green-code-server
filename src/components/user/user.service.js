const UserDal = require('./user.dal');

exports.register = async (userData) => {
  const newUser = await UserDal.create(userData);
  return { user: newUser.info() };
};

exports.login = async ({ username, password }) => {
  const result = await UserDal.findOneAndGenerateToken(username, password);
  return result;
};
