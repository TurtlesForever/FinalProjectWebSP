require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const activityRoutes = require('./routes/activityRoutes');
const exerciseTypeRoutes = require('./routes/exerciseTypeRoutes');
const app = express();
const db = require('../db');

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

const friendsRouter = require('./routes/friends')
app.use('/api/friends', friendsRoutes);

const path = require('path');
const cors = require('cors');
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/activities', activityRoutes);
app.use('/exercise-types', exerciseTypeRoutes);

// Serve static files from the client build
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve index.html (for React/Vite client routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Database Connection (ensure MongoDB is connected)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Database connection error:', err));

// Start server
app.listen(10000, () => {
  console.log('Server running on port 10000');
});