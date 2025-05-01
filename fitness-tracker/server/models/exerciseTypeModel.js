const mongoose = require('mongoose');

const exerciseTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

router.get('/', async (req, res) => {
  try {
    const exerciseTypes = await ExerciseType.find();
    res.status(200).json(exerciseTypes);
  } catch (error) {
    console.error('Failed to fetch exercise types:', error);
    res.status(500).json({ message: 'Failed to fetch exercise types' });
  }
});

const ExerciseType = mongoose.model('ExerciseType', exerciseTypeSchema);

module.exports = ExerciseType;