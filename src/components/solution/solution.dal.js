/* eslint-disable no-multiple-empty-lines */
const Solution = require('../../models/solution.model');



exports.model = Solution;



/**
 * Creates a new solution.
 * @param {string} question - The question associated with the solution.
 * @param {string} user - The user who created the solution.
 * @param {object} data - The data for the solution.
 */
exports.create = async (question, user, data) => {
  const newSolution = await new Solution({ ...data, question, createdBy: user, updatedBy: user }).save();
  return newSolution;
};



/**
 * Retrieves a list of solutions for a specific question.
 * @param {object} options - The options for filtering the solutions.
 * @param {string} options.question - The question to filter the solutions by.
 */
exports.list = async ({ question }) => {
  const solutions = await Solution.find({ question })
    .populate({ path: 'language', select: '_id name' })
    .populate({ path: 'createdBy', select: '_id username' });
  return solutions;
};



/**
 * Retrieves a single solution by its ID.
 * @param {string} id - The ID of the solution.
 */
exports.getOne = async (id) => {
  const solution = await Solution.findOne({ _id: id })
    .populate({ path: 'language', select: '_id name' })
    .populate({ path: 'createdBy', select: '_id username' });
  return solution;
};



/**
 * Updates a solution by its ID.
 * @param {string} id - The ID of the solution to update.
 * @param {string} user - The user who is updating the solution.
 * @param {object} data - The updated data for the solution.
 */
exports.update = async (id, user, data) => {
  await Solution.findOneAndUpdate({ _id: id }, { ...data, updatedBy: user });
};
