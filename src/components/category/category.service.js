/* eslint-disable no-multiple-empty-lines */
const CategoryDal = require('./category.dal');



/**
 * Create a new category
 * @param {*} categoryData - category data
 * @returns {Promise<Object>}
 */
exports.create = async (categoryData) => {
  const newCategory = await CategoryDal.create(categoryData);
  return newCategory;
};



/**
 * List out all categories
 * @returns {Promise<Object[]>}
 */
exports.list = async () => {
  const categories = await CategoryDal.list();
  return categories;
};



/**
 * Update category
 * @param {String} categoryId - category id
 * @param {*} categoryData - category data
 */
exports.update = async (categoryId, categoryData) => {
  await CategoryDal.update(categoryId, categoryData);
};



/**
 * Delete category
 * @param {String} categoryId - category id
 */
exports.delete = async (categoryId) => {
  await CategoryDal.delete(categoryId);
};
