const mongoose = require('mongoose');

const exerciseTypeSchema = new mongoose.Schema({
  name:     { type: String, required: true, unique: true },
  category: { type: String }, // e.g., 'strength', 'cardio', etc.
});

module.exports = mongoose.models.ExerciseType || mongoose.model('ExerciseType', exerciseTypeSchema);