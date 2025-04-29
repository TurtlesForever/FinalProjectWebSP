const express = require('express');
const path = require('path');
const app = express();

// Use the port Render expects
const PORT = process.env.PORT || 10000;

// Serve the built Vue frontend
app.use(express.static(path.resolve(__dirname, '../client/dist')));

// Handle client-side routing (important!)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});