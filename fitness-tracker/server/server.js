const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const activityRoutes = require('./routes/activityRoutes');
const exerciseTypeRoutes = require('./routes/exerciseTypeRoutes');
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/activities', activityRoutes);
app.use('/exercise-types', exerciseTypeRoutes);

// Database Connection (ensure MongoDB is connected)
mongoose.connect('mongodb://localhost/fitness-tracker', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Database connection error:', err));

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});