/* eslint-disable no-multiple-empty-lines */
const Blog = require('./blog.dal');



/**
 * Creates a new blog post.
 *
 * @param {string} userId - The ID of the user creating the blog post.
 * @param {string} data.title - The title of the blog post.
 * @param {string} data.body - The body content of the blog post.
 * @returns {Promise<Object>} - A promise that resolves to the created blog post.
 */
exports.create = async (userId, { title, body }) => {
  const blog = await Blog.create(userId, { title, body });
  return blog;
};



/**
 * Retrieves a list of blog posts.
 *
 * @param {number} limit - The maximum number of blog posts to retrieve.
 * @param {number} skip - The number of blog posts to skip.
 * @returns {Promise<Array>} - A promise that resolves to an array of blog posts.
 */
exports.list = async (limit, skip) => {
  const blogs = await Blog.list(limit, skip);
  return blogs;
};



/**
 * Retrieves a single blog post by its ID.
 *
 * @param {string} id - The ID of the blog post to retrieve.
 * @returns {Promise<Object>} - A promise that resolves to the retrieved blog post.
 */
exports.getOne = async (id) => {
  const blog = await Blog.getOne(id);
  return blog;
};



/**
 * Updates a blog post by its ID.
 *
 * @param {string} id - The ID of the blog post to update.
 * @param {Object} blogData - The updated data for the blog post.
 * @returns {Promise<void>} - A promise that resolves when the blog post is updated.
 */
exports.update = async (id, blogData) => {
  await Blog.update(id, blogData);
};
