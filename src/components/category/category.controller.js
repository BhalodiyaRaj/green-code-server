const CategoryService = require('./category.service');

exports.create = async (req, res, next) => {
  try {
    const category = await CategoryService.create(req.body);
    return res.status(200).json(category);
  } catch (error) {
    return next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    const categories = await CategoryService.list();
    return res.status(200).json(categories);
  } catch (error) {
    return next(error);
  }
};
