# Web Crawler for Discovering Product URLs on E-commerce Websites

This project is a web crawler built using **Node.js** and **Express.js**. It discovers and lists product URLs from multiple e-commerce websites. The crawler supports dynamic content rendering, regex-based URL filtering, and asynchronous crawling.

---

## **Folder Structure**

```
web-crawler/
├── controllers/
│   ├── crawlerController.js
├── routes/
│   ├── crawlerRoutes.js
├── services/
│   ├── crawlerService.js
├── utils/
│   ├── regexPatterns.js
├── index.js
├── package.json
├── README.md
```

---

## **Features**

### 1. URL Discovery
- Discovers all product-related URLs using regex patterns.
- Handles dynamic content rendering with Puppeteer.

### 2. Scalability
- Processes multiple domains asynchronously.
- Efficiently handles deep hierarchies on large websites.

### 3. Robustness
- Includes error handling for timeouts, broken links, and unexpected structures.
- Detects product URLs dynamically based on configurable patterns.

### 4. API Integration
- Exposes an API to initiate the crawl process via HTTP requests.

---

## **Endpoints**

### 1. Start Crawling
- **URL:** `/api/crawler/start`
- **Method:** `POST`
- **Payload:**
```json
{
    "domains": ["example1.com", "example2.com"]
}
```
- **Response:**
```json
{
    "success": true,
    "data": {
        "example1.com": ["https://example1.com/product/123"],
        "example2.com": ["https://example2.com/item/456"]
    }
}
```

---

## **Setup Instructions**

### 1. Clone the Repository
```bash
git clone https://github.com/SaiVenkat07/refactored-giggle.git
cd web-crawler
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Server
```bash
node index.js
```

### 4. Test the API
Use Postman or a similar tool to test the endpoint:
- **URL:** `http://localhost:3000/api/crawler/start`
- **Method:** `POST`
- **Body:**
```json
{
    "domains": ["example1.com", "example2.com"]
}
```

---

## **Dependencies**

- **express:** For building the web server.
- **puppeteer:** For handling JavaScript-heavy and dynamic websites.
- **body-parser:** For parsing JSON request bodies.

Install these dependencies with:
```bash
npm install express puppeteer body-parser nodemon
```

---

## **Code Walkthrough**

### 1. Entry Point (`index.js`)
- Sets up the Express server.
- Defines the `/api/crawler` route.

### 2. Routes (`routes/crawlerRoutes.js`)
- Defines the endpoint for starting the crawler.

### 3. Controller (`controllers/crawlerController.js`)
- Handles API requests.
- Calls the crawler service to process domains.

### 4. Service (`services/crawlerService.js`)
- Implements the core crawling logic using Puppeteer.
- Extracts and filters URLs based on predefined regex patterns.

### 5. Utils (`utils/regexPatterns.js`)
- Contains regex patterns for matching product URLs.

---
