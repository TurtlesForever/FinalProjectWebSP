const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Home route (default route)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Or serve your homepage
});

// Other routes for activities, users, etc.
const activityRoutes = require('./routes/activityRoutes');
app.use('/activities', activityRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// Starting the server
app.listen(10000, () => {
  console.log('Server running on port 10000');
});

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// This will ensure that when someone accesses the root route ("/"),
// they get the index.html file from the build folder.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});