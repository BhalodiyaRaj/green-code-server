const SolutionService = require('./solution.service');

exports.create = async (req, res) => {
  const solution = await SolutionService.create({ ...req.body, user: req.userId });
  return res.status(200).json(solution);
};

exports.list = async (req, res) => {
  const solutions = await SolutionService.list(req.query);
  return res.status(200).json(solutions);
};
