const SolutionService = require('./solution.service');

exports.create = async (req, res, next) => {
  try {
    const solution = await SolutionService.create({ ...req.body, user: req.userId });
    return res.status(200).json(solution);
  } catch (error) {
    return next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    const solutions = await SolutionService.list(req.query);
    return res.status(200).json(solutions);
  } catch (error) {
    return next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    await SolutionService.update(req.params.id, req.body);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};
