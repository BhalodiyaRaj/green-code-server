const Solution = require('../../models/solution.model');

exports.model = Solution;

exports.create = async (question, user, data) => {
  const newSolution = await new Solution({ ...data, question, createdBy: user, updatedBy: user }).save();
  return newSolution;
};

exports.list = async ({ question }) => {
  const solutions = await Solution.find({ question })
    .populate({ path: 'language', select: '_id name' })
    .populate({ path: 'createdBy', select: '_id username' });
  return solutions;
};

exports.getOne = async (id) => {
  const solution = await Solution.findOne({ _id: id })
    .populate({ path: 'language', select: '_id name' })
    .populate({ path: 'createdBy', select: '_id username' });
  return solution;
};

exports.update = async (id, user, data) => {
  await Solution.findOneAndUpdate({ _id: id }, { ...data, updatedBy: user });
};
