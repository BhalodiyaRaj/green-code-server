const jwt = require('jsonwebtoken');
const vars = require('../../config/vars');

const isLoggedIn = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new Error('UNAUTHORIZED');
  jwt.verify(token, vars.jwtSecret, (err, payload) => {
    if (err) throw new Error('UNAUTHORIZED');
    req.userId = payload.id;
    next();
  });
};

module.exports = isLoggedIn;
