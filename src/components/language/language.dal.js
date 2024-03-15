/* eslint-disable no-multiple-empty-lines */
const Language = require('../../models/language.model');



exports.model = Language;


/**
 * Create a new language.
 * @param {Object} languageData - The data for the new language.
 * @returns {Promise<Language>} A promise that resolves with the newly created language.
 */
exports.create = async (languageData) => {
  const newLanguage = new Language(languageData);
  await newLanguage.save();
  return newLanguage;
};



/**
 * Get a list of all languages.
 * @returns {Promise<Array<Language>>} A promise that resolves with an array of all languages.
 */
exports.list = async () => {
  const languages = await Language.find();
  return languages;
};



/**
 * Update a language by its ID.
 * @param {string} id - The ID of the language to update.
 * @param {Object} languageData - The updated data for the language.
 * @returns {Promise<void>} A promise that resolves when the language is updated.
 */
exports.update = async (id, languageData) => {
  await Language.findOneAndUpdate({ _id: id }, languageData);
};



/**
 * Delete a language by its ID.
 * @param {string} id - The ID of the language to delete.
 */
exports.delete = async (id) => {
  await Language.findOneAndDelete({ _id: id });
};
