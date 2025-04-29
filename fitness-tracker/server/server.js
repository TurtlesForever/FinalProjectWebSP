const express = require('express');
const path = require('path');
const app = express();

// Set the port from environment or default to 3000
const PORT = process.env.PORT || 3000;

// Absolute path to the built Vue app
const distPath = path.join(__dirname, '../client/dist');

// Serve static files (HTML, CSS, JS, etc.)
app.use(express.static(distPath));

// Catch-all route to support client-side routing (Vue Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});