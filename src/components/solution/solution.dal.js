const Solution = require('../../models/solution.model');

exports.model = Solution;

exports.create = async (data) => {
  const newSolution = new Solution(data);
  await newSolution.save();
  return newSolution;
};

exports.list = async () => {
  const solutions = await Solution.find();
  return solutions;
};

exports.update = async (id, data) => {
  await Solution.findOneAndUpdate({ _id: id }, data);
};
