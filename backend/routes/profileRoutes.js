import express from 'express'
import { createProfile, getAllProfile, getCurrentProfile, testRoute, updateProfile } from '../controllers/profileController.js';
import  {protect} from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/test',testRoute)
router.get('/all',getAllProfile)
router.route('/')
.get(protect,getCurrentProfile)
.post(protect,createProfile)
.put(protect,updateProfile)

export default router