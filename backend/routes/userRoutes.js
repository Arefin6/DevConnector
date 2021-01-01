import express from 'express'
import { authUser, registerUser, testApi } from '../controllers/userController.js';

const router = express.Router();

router.get('/test',testApi)
router.post('/register',registerUser)
router.post('/login',authUser)

export default router