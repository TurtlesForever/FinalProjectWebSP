const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const activityRoutes = require('./routes/activityRoutes');
const exerciseTypeRoutes = require('./routes/exerciseTypeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/exercise-types', exerciseTypeRoutes);

app.get('/', (req, res) => {
  res.send('Fitness Tracker API running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));