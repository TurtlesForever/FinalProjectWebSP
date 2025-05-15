require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const activityRoutes = require('./routes/activityRoutes');
const exerciseTypeRoutes = require('./routes/exerciseTypeRoutes');
const userRoutes = require('./routes/userRoutes');
const friendsRoutes = require('./routes/friendsRoutes');


const pool = require('../db');  // import your db helper

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/api/friends', friendsRoutes);
app.use('/activities', activityRoutes);
app.use('/exercise-types', exerciseTypeRoutes);

app.use(express.static(path.join(__dirname, 'public')));

// For client routing fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Database connection error:', err));

app.listen(10000, () => {
  console.log('Server running on port 10000');
});