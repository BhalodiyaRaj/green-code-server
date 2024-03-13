const isSuperuser = (req, res, next) => {
  if (!req.user) throw new Error('UNAUTHORIZED');
  if (req.user.role !== 'superuser' && req.user.role !== 'admin') throw new Error('FORBIDDEN');
  next();
};

module.exports = isSuperuser;
