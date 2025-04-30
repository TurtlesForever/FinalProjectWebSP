const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  userId:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type:     { type: String, required: true },
  duration: { type: Number, required: true },
  date:     { type: Date, default: Date.now },
});

module.exports = mongoose.models.Activity || mongoose.model('Activity', activitySchema);