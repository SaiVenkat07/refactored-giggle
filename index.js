const express = require('express');
const bodyParser = require('body-parser');
const crawlerRoutes = require('./routes/crawlerRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use('/api/crawler', crawlerRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
