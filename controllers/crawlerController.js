const { crawlWebsites } = require('../services/crawlerService');

exports.startCrawl = async (req, res) => {
    const { domains } = req.body;

    if (!domains || !Array.isArray(domains)) {
        return res.status(400).json({ error: 'Invalid input. Provide an array of domains.' });
    }

    try {
        const results = await crawlWebsites(domains);
        res.status(200).json({ success: true, data: results });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during crawling.' });
    }
};
