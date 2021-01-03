import express from 'express'
import { createPost, deletePost, getPosts, getSinglePost, likePost, testRoute, unlikePost } from '../controllers/postController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/test',testRoute)
router.route('/:id')
.get(getSinglePost)
.delete(protect,deletePost)
router.put('/like/:id',protect,likePost)
router.put('/unlike/:id',protect,unlikePost)
router.route('/')
.get(getPosts)
.post(protect,createPost)


export default router