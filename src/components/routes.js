const express = require('express');

const router = express.Router();

const userRoute = require('./user/user.route');
const questionRoute = require('./question/question.route');
const categoryRoute = require('./category/category.route');
const solutionRoute = require('./solution/solution.route');
const languageRoute = require('./language/language.route');

router.use('/user', userRoute);
router.use('/question', questionRoute);
router.use('/category', categoryRoute);
router.use('/solution', solutionRoute);
router.use('/language', languageRoute);

module.exports = router;
