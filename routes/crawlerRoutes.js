const express = require('express');
const { startCrawl } = require('../controllers/crawlerController');

const router = express.Router();

// Route to start crawling
router.post('/start', startCrawl);

module.exports = router;
