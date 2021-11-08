const router = require('express').Router();
const PostController = require('../controller/posts.controller');

router.get('/', PostController.allPosts);
router.post('/', PostController.registerPost);
router.get('/:postId', PostController.getPost);
router.delete('/:postId', PostController.deletePost);
router.patch('/:postId', PostController.updatePost);

module.exports = router;
