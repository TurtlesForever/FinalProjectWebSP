const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

// Serve static files from the Vite build folder
app.use(express.static(path.resolve(__dirname, '../client/dist')));

// For any other route, send back index.html (for Vue router)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});