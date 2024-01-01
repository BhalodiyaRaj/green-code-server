const LanguageService = require('./language.service');

exports.create = async (req, res, next) => {
  try {
    const language = await LanguageService.create(req.body);
    return res.status(200).json(language);
  } catch (error) {
    return next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    const languages = await LanguageService.list();
    return res.status(200).json(languages);
  } catch (error) {
    return next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    await LanguageService.update(req.params.id, req.body);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    await LanguageService.delete(req.params.id);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};
