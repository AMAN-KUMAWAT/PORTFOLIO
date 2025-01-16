import express from 'express';
import { sendMessage } from '../controllers/messageController.js';
import { validateMessage } from '../middleware/validators.js';

const router = express.Router();

router.post('/', validateMessage, sendMessage);

export default router;