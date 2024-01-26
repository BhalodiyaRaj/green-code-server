const Solution = require('./solution.dal');

exports.create = async (requestUser, solutionData) => {
  const result = await Solution.create({ ...solutionData, user: requestUser });
  return result;
};

exports.list = async () => {
  const solutions = await Solution.list();
  return solutions;
};

exports.update = async (id, solutionData) => {
  await Solution.update({ _id: id }, solutionData);
};
