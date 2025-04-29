const express = require('express');
const path = require('path');
const app = express();

// Set the port from environment or default to 3000
const PORT = process.env.PORT || 3000;

// Absolute path to the built Vue app
const distPath = path.join(__dirname, '..', 'client', 'dist');

// Serve static files (HTML, CSS, JS, etc.)
app.use(express.static(distPath));

// Catch-all route to support client-side routing (Vue Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Global error handler (for logging and fallback errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
  console.error('Express error:', err.stack);
  res.status(500).send('Something went wrong!');
});