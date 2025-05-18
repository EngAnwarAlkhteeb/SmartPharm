import express from 'express';
import { chatPost } from '../controllers/chatController.js';
import { test } from '../controllers/test.js';

const router = express.Router();

router.post('/', chatPost);
router.get('/test', test);

export default router;