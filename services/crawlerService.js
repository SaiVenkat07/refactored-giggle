const puppeteer = require('puppeteer');
const { PRODUCT_PATTERNS } = require('../utils/regexPatterns');

exports.crawlWebsites = async (domains) => {
    const browser = await puppeteer.launch({ headless: true });
    const results = {};

    for (const domain of domains) {
        const page = await browser.newPage();
        results[domain] = [];

        try {
            await page.goto(`http://${domain}`, { waitUntil: 'networkidle2' });

            // Extract all links
            const links = await page.$$eval('a', anchors => anchors.map(a => a.href));

            // Filter product URLs
            const productUrls = links.filter(link =>
                PRODUCT_PATTERNS.some(pattern => new RegExp(pattern).test(link))
            );

            results[domain].push(...productUrls);
        } catch (error) {
            console.error(`Error crawling ${domain}:`, error.message);
        } finally {
            await page.close();
        }
    }

    await browser.close();
    return results;
};
