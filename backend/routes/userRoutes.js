import express from 'express'
import { registerUser, testApi } from '../controllers/userController.js';

const router = express.Router();

router.get('/test',testApi)
router.post('/register',registerUser)

export default router