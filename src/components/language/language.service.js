/* eslint-disable no-multiple-empty-lines */
const LanguageDal = require('./language.dal');



/**
 * Creates a new language.
 * @param {object} languageData - The data for the new language.
 * @returns {Promise<object>} - A promise that resolves to the newly created language object.
 */
exports.create = async (languageData) => {
  const newLanguage = await LanguageDal.create(languageData);
  return newLanguage;
};



/**
 * Retrieves a list of languages.
 * @returns {Promise<Array<object>>} - A promise that resolves to an array of language objects.
 */
exports.list = async () => {
  const languages = await LanguageDal.list();
  return languages;
};



/**
 * Updates a language by its ID.
 * @param {string} languageId - The ID of the language to update.
 * @param {object} languageData - The updated data for the language.
 * @returns {Promise<void>} - A promise that resolves when the language is updated.
 */
exports.update = async (languageId, languageData) => {
  await LanguageDal.update(languageId, languageData);
};



/**
 * Deletes a language by its ID.
 * @param {string} languageId - The ID of the language to delete.
 * @returns {Promise<void>} - A promise that resolves when the language is deleted.
 */
exports.delete = async (languageId) => {
  await LanguageDal.delete(languageId);
};
