import express from 'express'
import { getCurrentProfile, testRoute } from '../controllers/profileController.js';
import  {protect} from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/test',testRoute)
router.route('/').get(protect,getCurrentProfile)

export default router