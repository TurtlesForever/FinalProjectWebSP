const express = require('express');
const path = require('path');
const app = express();

// Render provides PORT via environment variable
const PORT = process.env.PORT || 10000;

// Serve static files from Vite's production build
app.use(express.static(path.join(__dirname, '../client/dist')));

// Optional: API routes would go here

// Catch-all route to serve index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});