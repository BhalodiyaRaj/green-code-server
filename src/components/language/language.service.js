const Language = require('./language.model');

exports.create = async (languageData) => {
  const newLanguage = new Language(languageData);
  await newLanguage.save();
  return newLanguage;
};

exports.list = async () => {
  const languages = await Language.find();
  return languages;
};
