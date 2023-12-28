const UserServices = require('./user.service');

exports.register = async (req, res, next) => {
  try {
    const user = await UserServices.register(req.body);
    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const result = await UserServices.login(req.body);
    res.cookie('token', result.token, { maxAge: 1000 * 3600 * 10, httpOnly: true });
    res.cookie('user', JSON.stringify(result.user), { maxAge: 1000 * 3600 * 10 });
    return res.status(200).json({ user: result.user });
  } catch (error) {
    return next(error);
  }
};
