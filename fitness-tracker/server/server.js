import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 10000;

// Fix __dirname with ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static frontend from /client/dist
const distPath = path.join(__dirname, '../client/dist');
app.use(express.static(distPath));

// Handle SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.get('*', (req, res) => {
  console.log('Sending index.html for:', req.url);
  res.sendFile(path.join(distPath, 'index.html'));
});