/* eslint-disable no-multiple-empty-lines */
const Category = require('../../models/category.model');


exports.model = Category;


/**
 * Create category
 * @param {Object} categoryData - category data
 * @returns
 */
exports.create = async (categoryData) => {
  const newCategory = new Category(categoryData);
  await newCategory.save();
  return newCategory;
};



/**
 * List out all categories
 * @returns
 */
exports.list = async () => {
  const categories = await Category.find();
  return categories;
};



/**
 * Update category
 * @param {String} id - category id
 * @param {Object} data
 */
exports.update = async (id, data) => {
  await Category.findOneAndUpdate({ _id: id }, data);
};



/**
 * Delete category
 * @param {String} id - category id
 */
exports.delete = async (id) => {
  await Category.findOneAndDelete({ _id: id });
};
