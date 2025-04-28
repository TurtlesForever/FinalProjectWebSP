const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Vue client
app.use(express.static(path.join(__dirname, '../client/dist')));

// Handle routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});