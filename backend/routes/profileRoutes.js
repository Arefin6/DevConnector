import express from 'express'
import { createProfile, getAllProfile, getCurrentProfile, getProfileWithSlug, testRoute, updateProfile } from '../controllers/profileController.js';
import  {protect} from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/test',testRoute)
router.get('/all',getAllProfile)
router.get('/:slug',getProfileWithSlug)
router.route('/')
.get(protect,getCurrentProfile)
.post(protect,createProfile)
.put(protect,updateProfile)

export default router