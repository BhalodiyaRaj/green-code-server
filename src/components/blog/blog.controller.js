const Blog = require('./blog.service');

exports.create = async (req, res, next) => {
  try {
    const blog = await Blog.create(req.user._id, req.body);
    return res.status(200).json(blog);
  } catch (error) {
    return next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    const blogs = await Blog.list(req.query);
    return res.status(200).json(blogs);
  } catch (error) {
    return next(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const blog = await Blog.getOne(req.params.id);
    return res.status(200).json(blog);
  } catch (error) {
    return next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    await Blog.update(req.params.id, req.body);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};
