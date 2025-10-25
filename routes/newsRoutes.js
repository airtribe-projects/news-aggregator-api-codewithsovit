const express = require('express');
const { getNews,getTopHeadlines } = require('../controllers/newsController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();
 
router.get('/', authenticate, getNews);
router.get('/top-headlines', authenticate, getTopHeadlines);

module.exports = router;
