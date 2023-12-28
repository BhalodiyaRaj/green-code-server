const LanguageService = require('./language.service');

exports.create = async (req, res, next) => {
  const language = await LanguageService.create(req.body);
  return res.status(200).json(language);
};

exports.list = async (req, res, next) => {
  const languages = await LanguageService.list();
  return res.status(200).json(languages);
};
