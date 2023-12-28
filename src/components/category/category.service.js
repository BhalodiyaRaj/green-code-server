const Category = require('./category.model');

exports.create = async (categoryData) => {
  const newCategory = await new Category(categoryData);
  await newCategory.save();
  return { category: newCategory };
};

exports.list = async () => {
  const categories = await Category.find();
  return categories;
};
