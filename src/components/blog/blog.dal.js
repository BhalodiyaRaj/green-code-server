/* eslint-disable no-multiple-empty-lines */
const Blog = require('../../models/blog.model');


exports.model = Blog;


/**
 * Creates a new blog post.
 * @param {Object} userId - The user object.
 * @param {string} title - The title of the blog post.
 * @param {string} body - The body content of the blog post.
 * @returns {Promise<Object>} A promise that resolves to the created blog post.
 */
exports.create = async (userId, { title, body }) => {
  const blog = await Blog.create({ title, body, createdBy: userId });
  return blog;
};



/**
 * Retrieves a list of blog posts.
 * @param {number} limit - The maximum number of blog posts to retrieve.
 * @param {number} skip - The number of blog posts to skip.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of blog posts.
 */
exports.list = async (limit, skip) => {
  const blogs = await Blog.find({}, { body: 0 }).limit(limit).skip(skip);
  return blogs;
};



/**
 * Retrieves a single blog post by its ID.
 * @param {string} id - The ID of the blog post.
 * @returns {Promise<Object>} A promise that resolves to the blog post.
 */
exports.getOne = async (id) => {
  const blog = await Blog.findById(id);
  return blog;
};



/**
 * Updates a blog post by its ID.
 * @param {string} id - The ID of the blog post.
 * @param {Object} blogData - The updated data for the blog post.
 * @returns {Promise<void>} A promise that resolves when the blog post is updated.
 */
exports.update = async (id, blogData) => {
  await Blog.updateOne({ _id: id }, blogData);
};
