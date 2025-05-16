require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const activityRoutes = require('./routes/activityRoutes');
const exerciseTypeRoutes = require('./routes/exerciseTypeRoutes');
const userRoutes = require('./routes/userRoutes');
const friendsRoutes = require('./routes/friends');
const postRoutes = require('./routes/posts');  // ADD this

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/api/friends', friendsRoutes);
app.use('/activities', activityRoutes);
app.use('/exercise-types', exerciseTypeRoutes);
app.use('/api/posts', postRoutes);  // ADD this

app.use(express.static(path.join(__dirname, 'public')));

// For client routing fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});