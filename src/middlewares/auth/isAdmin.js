const jwt = require('jsonwebtoken');
const vars = require('../../config/vars');

const isAdmin = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new Error('UNAUTHORIZED');
  jwt.verify(token, vars.jwtSecret, (err, payload) => {
    if (err) throw new Error('UNAUTHORIZED');
    if (payload.role !== 'admin') throw new Error('FORBIDDEN');
    req.userId = payload.id;
    next();
  });
};

module.exports = isAdmin;
