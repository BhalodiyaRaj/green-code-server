const Category = require('../../models/category.model');

exports.create = async (categoryData) => {
  const newCategory = new Category(categoryData);
  await newCategory.save();
  return newCategory;
};

exports.list = async () => {
  const categories = await Category.find();
  return categories;
};

exports.update = async (id, data) => {
  await Category.findOneAndUpdate({ _id: id }, data);
};

exports.delete = async (id) => {
  await Category.findOneAndDelete({ _id: id });
};
