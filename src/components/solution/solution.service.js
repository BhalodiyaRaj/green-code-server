const Solution = require('./solution.model');

exports.create = async (requestUser, solutionData) => {
  const newSolution = new Solution({ ...solutionData, user: requestUser });
  await newSolution.save();
  return newSolution;
};

exports.list = async () => {
  const solutions = await Solution.find();
  return solutions;
};

exports.update = async (id, solutionData) => {
  await Solution.findOneAndUpdate({ _id: id }, solutionData);
};
