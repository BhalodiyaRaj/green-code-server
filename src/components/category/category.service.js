const Category = require('./category.model');

exports.create = async (categoryData) => {
  const newCategory = await new Category(categoryData);
  await newCategory.save();
  return newCategory;
};

exports.list = async () => {
  const categories = await Category.find();
  return categories;
};

exports.update = async (categoryId, categoryData) => {
  await Category.findOneAndUpdate({ _id: categoryId }, categoryData);
};

exports.delete = async (categoryId) => {
  await Category.findOneAndDelete({ _id: categoryId });
};
