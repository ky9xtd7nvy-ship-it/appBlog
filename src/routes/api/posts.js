const router = require('express').Router();
const postsController = require('../../controllers/posts.controller');
const { validatePost } = require('../../middlewares/posts.middleware');

router.get('/', postsController.getAllPosts);
router.get('/autor/:autorId', postsController.getPostsByAuthorId);
router.post('/', validatePost, postsController.createPost);

module.exports = router;
