const express = require('express');
const path = require('path');
const app = express();

// Serve static files from Vue's dist folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// Handle all other routes by sending index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});