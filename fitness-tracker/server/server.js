const express = require('express');
const app = express();
const activityRoutes = require('./routes/activityRoutes');  // Only declare once

// Use the route once
app.use('/activities', activityRoutes);  // Make sure to use the route here

// Other routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

const exerciseTypeRoutes = require('./routes/exerciseTypeRoutes');
app.use('/exercisetypes', exerciseTypeRoutes);

// Start the server
app.listen(10000, () => {
  console.log('Server running on port 10000');
});