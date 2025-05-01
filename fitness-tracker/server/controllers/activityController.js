const Activity = require('../models/activityModel');
const ExerciseType = require('../models/exerciseTypeModel');

// Create a new activity
exports.createActivity = async (req, res) => {
  try {
    const { type, duration, caloriesBurned, notes } = req.body;
    const activity = new Activity({
      user: req.user.id, // From verified JWT
      type, 
      duration, 
      caloriesBurned, 
      notes,
    });
    await activity.save();
    res.status(201).json(activity);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all activities for current user
exports.getActivitiesForUser = async (req, res) => {
  try {
    const activities = await Activity.find({ user: req.user.id }).populate('type');
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update activity by ID
exports.updateActivity = async (req, res) => {
  try {
    const updated = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Activity not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete activity by ID
exports.deleteActivity = async (req, res) => {
  try {
    const deleted = await Activity.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Activity not found' });
    res.json({ message: 'Activity deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Custom Function - Get total calories burned by a user
exports.getTotalCaloriesBurnedByUser = async (req, res) => {
  try {
    const activities = await Activity.find({ user: req.user.id });
    const totalCalories = activities.reduce((sum, activity) => sum + activity.caloriesBurned, 0);
    res.json({ totalCalories });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Custom Function - Get activities by date range
exports.getActivitiesByDateRange = async (req, res) => {
  const { start, end } = req.query; // Expecting start and end date in query params
  try {
    const activities = await Activity.find({
      user: req.user.id,
      date: { $gte: new Date(start), $lte: new Date(end) }
    });
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};