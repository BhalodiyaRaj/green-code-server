const express = require('express');

const router = express.Router();

const userRoute = require('./user.route');
const questionRoute = require('./question.route');
const categoryRoute = require('./category.route');
const solutionRoute = require('./solution.route');
const languageRoute = require('./language.route');

router.use('/user', userRoute);
router.use('/question', questionRoute);
router.use('/category', categoryRoute);
router.use('/solution', solutionRoute);
router.use('/language', languageRoute);

module.exports = router;
