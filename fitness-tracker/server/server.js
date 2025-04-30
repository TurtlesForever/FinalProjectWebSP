const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to support Vue Router history mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});