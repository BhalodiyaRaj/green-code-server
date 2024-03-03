const Solution = require('./solution.dal');

exports.create = async (question, user, solutionData) => {
  const result = await Solution.create(question, user, solutionData);
  return result;
};

exports.list = async (query) => {
  const solutions = await Solution.list(query);
  return solutions;
};

exports.getOne = async (id) => {
  const solution = await Solution.getOne(id);
  return solution;
};

exports.update = async (id, user, solutionData) => {
  await Solution.update(id, user, solutionData);
};
