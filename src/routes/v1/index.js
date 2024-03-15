const express = require('express');

const router = express.Router();

const userRoute = require('./user.route');
const questionRoute = require('./question.route');
const categoryRoute = require('./category.route');
const solutionRoute = require('./solution.route');
const languageRoute = require('./language.route');
const likeRoute = require('./like.route');
const commentRoute = require('./comment.route');

router.use('/docs', express.static('docs/v1/api'));
router.use('/users', userRoute);
router.use('/questions', questionRoute);
router.use('/categories', categoryRoute);
router.use('/solutions', solutionRoute);
router.use('/languages', languageRoute);
router.use('/likes', likeRoute);
router.use('/comments', commentRoute);

module.exports = router;
