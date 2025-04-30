const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));

// Routes
const userRoutes = require('./routes/userRoutes');
const activityRoutes = require('./routes/activityRoutes');
const exerciseTypeRoutes = require('./routes/exerciseTypeRoutes');

app.use('/api/users', userRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/exercise-types', exerciseTypeRoutes);

// Serve static files from the Vue app
app.use(express.static(path.join(__dirname, 'public')));

// Health check route for Render
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Handle SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});