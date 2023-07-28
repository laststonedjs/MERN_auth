import express from 'express';
const router = express.Router();
// controller function
import { authUser } from '../controllers/userController.js';

router.post('/auth', authUser);

export default router;