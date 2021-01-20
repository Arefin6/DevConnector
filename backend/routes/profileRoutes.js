import express from 'express'
import { createProfile, getAllProfile, getCurrentProfile, testRoute, updateProfile,
      updateProfileToAddEducation, updateProfileToAddExperience
    ,deleteExperience, 
    deleteEducation,
    getProfileByUserId} from '../controllers/profileController.js';
import  {protect} from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/test',testRoute)
router.get('/all',getAllProfile)
router.get('/:userId',getProfileByUserId)
router.put('/addExperience',protect,updateProfileToAddExperience)
router.put('/addEducation',protect,updateProfileToAddEducation)
router.post('/:exp_id/delete',protect,deleteExperience)
router.post('/:edu_id/delete',protect,deleteEducation)
router.route('/')
.get(protect,getCurrentProfile)
.post(protect,createProfile)
.put(protect,updateProfile)

export default router