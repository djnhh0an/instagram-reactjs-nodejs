import express from 'express';
import instagramController from '../controllers/instagram.controller.js';
import ApiController from '../controllers/index.js';
const router = express.Router();

// instagram
router.get('/api/auth', instagramController.auth);
router.get('/api/media', instagramController.getUserMedia);
router.get('/api/media/tag', instagramController.searchByTag);

//internal
router.get('/api/healthCheck', ApiController.healthCheck);
router.get('/api/profile', ApiController.getProfile);
router.get('/api/feed', ApiController.getFeedData);
router.get('/api/stories', ApiController.getStories);
export default router;