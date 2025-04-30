const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

// Serve the static build from public
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for SPA routing
app.use((req, res, next) => {
  console.log(`[STATIC REQUEST] ${req.method} ${req.url}`);
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});