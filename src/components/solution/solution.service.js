/* eslint-disable no-multiple-empty-lines */
const Solution = require('./solution.dal');



/**
 * Creates a new solution.
 *
 * @param {string} question - The ID of the question associated with the solution.
 * @param {string} user - The ID of the user who created the solution.
 * @param {object} solutionData - The data of the solution.
 * @returns {Promise<object>} The created solution.
 */
exports.create = async (question, user, solutionData) => {
  const result = await Solution.create(question, user, solutionData);
  return result;
};



/**
 * Retrieves a list of solutions based on the provided query.
 *
 * @param {object} query - The query parameters for filtering the solutions.
 * @returns {Promise<Array<object>>} The list of solutions.
 */
exports.list = async (query) => {
  const solutions = await Solution.list(query);
  return solutions;
};



/**
 * Retrieves a single solution based on the provided ID.
 *
 * @param {string} id - The ID of the solution to retrieve.
 * @returns {Promise<object>} The retrieved solution.
 */
exports.getOne = async (id) => {
  const solution = await Solution.getOne(id);
  return solution;
};



/**
 * Updates a solution based on the provided ID.
 *
 * @param {string} id - The ID of the solution to update.
 * @param {string} user - The ID of the user who is updating the solution.
 * @param {object} solutionData - The updated data of the solution.
 * @returns {Promise<void>}
 */
exports.update = async (id, user, solutionData) => {
  await Solution.update(id, user, solutionData);
};
