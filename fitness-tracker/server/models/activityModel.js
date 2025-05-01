exports.findByUserId = (userId) => Activity.find({ user: userId });

const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: mongoose.Schema.Types.ObjectId, ref: 'ExerciseType', required: true }, // References ExerciseType
  duration: { type: Number, required: true }, // Duration in minutes
  caloriesBurned: { type: Number, required: true }, // Calories burned
  date: { type: Date, default: Date.now }, // Date of activity
  notes: { type: String }, // Additional notes
});

module.exports = mongoose.model('Activity', activitySchema);