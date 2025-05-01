const mongoose = require('mongoose');

const exerciseTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const ExerciseType = mongoose.model('ExerciseType', exerciseTypeSchema);

module.exports = ExerciseType;