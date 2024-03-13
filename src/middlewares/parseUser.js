/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongoose').Types;

const vars = require('../config/vars');

/**
 * Parse user from token
 * - If token is valid, user will be added to req object
 * - user._id will be converted to mongoose `ObjectId`
 */
const parseUser = (req, res, next) => {
  jwt.verify(req.cookies.token, vars.jwtSecret, (err, payload) => {
    if (!err && payload?._id) req.user = { ...payload, _id: new ObjectId(payload._id) };
    next();
  });
};

module.exports = parseUser;
