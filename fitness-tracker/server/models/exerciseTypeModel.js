exports.findByUserId = (userId) => ExerciseType.find({ user: userId });

const mongoose = require('mongoose');

const exerciseTypeSchema = new mongoose.Schema({
  name: { type: String, required: true }, // E.g., "Running", "Yoga"
  description: { type: String }, // Description of the exercise type
});

module.exports = mongoose.model('ExerciseType', exerciseTypeSchema);