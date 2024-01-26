const CategoryDal = require('./category.dal');

exports.create = async (categoryData) => {
  const newCategory = await CategoryDal.create(categoryData);
  return newCategory;
};

exports.list = async () => {
  const categories = await CategoryDal.list();
  return categories;
};

exports.update = async (categoryId, categoryData) => {
  await CategoryDal.update(categoryId, categoryData);
};

exports.delete = async (categoryId) => {
  await CategoryDal.delete(categoryId);
};
