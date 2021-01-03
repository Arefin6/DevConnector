import express from 'express'
import { createPost, deletePost, getPosts, getSinglePost, testRoute } from '../controllers/postController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/test',testRoute)
router.route('/:id')
.get(getSinglePost)
.delete(protect,deletePost)
router.route('/')
.get(getPosts)
.post(protect,createPost)


export default router