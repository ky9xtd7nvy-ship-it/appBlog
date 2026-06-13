const router = require('express').Router();
const autoresRouter = require('./api/autores');
const postsRouter = require('./api/posts');

router.use ('/autores', autoresRouter);
router.use ('/posts', postsRouter);

module.exports = router;
