/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const vars = require('../config/vars');

const parseUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return next();
  jwt.verify(token, vars.jwtSecret, (err, payload) => {
    if (err) return next();
    req.userId = payload?.id;
    next();
  });
};

module.exports = parseUser;
