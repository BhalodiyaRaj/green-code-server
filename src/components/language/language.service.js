const LanguageDal = require('./language.dal');

exports.create = async (languageData) => {
  const newLanguage = await LanguageDal.create(languageData);
  return newLanguage;
};

exports.list = async () => {
  const languages = await LanguageDal.list();
  return languages;
};

exports.update = async (languageId, languageData) => {
  await LanguageDal.update(languageId, languageData);
};

exports.delete = async (languageId) => {
  await LanguageDal.delete(languageId);
};
