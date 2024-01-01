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

exports.update = async (languageId, languageData) => {
  await Language.findOneAndUpdate({ _id: languageId }, languageData);
};

exports.delete = async (languageId) => {
  await Language.findOneAndDelete({ _id: languageId });
};
