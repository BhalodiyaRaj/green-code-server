const Language = require('../../models/language.model');

exports.create = async (languageData) => {
  const newLanguage = new Language(languageData);
  await newLanguage.save();
  return newLanguage;
};

exports.list = async () => {
  const languages = await Language.find();
  return languages;
};

exports.update = async (id, languageData) => {
  await Language.findOneAndUpdate({ _id: id }, languageData);
};

exports.delete = async (id) => {
  await Language.findOneAndDelete({ _id: id });
};
