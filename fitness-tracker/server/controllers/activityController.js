const Activity = require('../models/activityModel');

// Create a new activity
exports.createActivity = async (req, res) => {
  const { userId } = req.user;  // Assuming the JWT token provides user info
  const { exerciseType, duration, caloriesBurned } = req.body;

  try {
    const newActivity = new Activity({
      user: userId,
      type: exerciseType, // Ensure exerciseType is valid
      duration,
      caloriesBurned,
    });

    await newActivity.save();
    res.status(201).json({ message: 'Activity created successfully', activity: newActivity });
  } catch (error) {
    console.error('Failed to create activity:', error);
    res.status(500).json({ message: 'Failed to create activity, please try again' });
  }
};

// Fetch activities for a user
exports.getActivitiesForUser = async (req, res) => {
  try {
    const activities = await Activity.find({ user: req.user.userId });
    res.status(200).json(activities);
  } catch (error) {
    console.error('Failed to fetch activities:', error);
    res.status(500).json({ message: 'Failed to fetch activities' });
  }
};

// Update an activity by ID
exports.updateActivity = async (req, res) => {
  const { id } = req.params;
  const { exerciseType, duration, caloriesBurned } = req.body;

  try {
    const updatedActivity = await Activity.findByIdAndUpdate(
      id,
      { exerciseType, duration, caloriesBurned },
      { new: true }
    );
    if (!updatedActivity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.status(200).json({ message: 'Activity updated successfully', activity: updatedActivity });
  } catch (error) {
    console.error('Failed to update activity:', error);
    res.status(500).json({ message: 'Failed to update activity' });
  }
};

// Delete an activity by ID
exports.deleteActivity = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedActivity = await Activity.findByIdAndDelete(id);
    if (!deletedActivity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.status(200).json({ message: 'Activity deleted successfully' });
  } catch (error) {
    console.error('Failed to delete activity:', error);
    res.status(500).json({ message: 'Failed to delete activity' });
  }
};

// Get total calories burned by the user
exports.getTotalCaloriesBurnedByUser = async (req, res) => {
  try {
    const totalCalories = await Activity.aggregate([
      { $match: { user: req.user.userId } },
      { $group: { _id: null, totalCalories: { $sum: '$caloriesBurned' } } }
    ]);
    res.status(200).json(totalCalories[0] || { totalCalories: 0 });
  } catch (error) {
    console.error('Failed to calculate total calories burned:', error);
    res.status(500).json({ message: 'Failed to calculate total calories burned' });
  }
};

// Get activities within a date range
exports.getActivitiesByDateRange = async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const activities = await Activity.find({
      user: req.user.userId,
      date: { $gte: new Date(startDate), $lte: new Date(endDate) }
    });
    res.status(200).json(activities);
  } catch (error) {
    console.error('Failed to fetch activities by date range:', error);
    res.status(500).json({ message: 'Failed to fetch activities by date range' });
  }
};

const pool = require('../db');

// Create activity and tag friends
exports.createActivity = async (req, res) => {
  const client = await pool.connect();
  try {
    const { name, duration, type_id, taggedFriends = [] } = req.body;
    const userId = req.user.id;

    await client.query('BEGIN');

    const insertActivityQuery = `
      INSERT INTO activities (name, duration, type_id, user_id)
      VALUES ($1, $2, $3, $4)
      RETURNING id
    `;
    const { rows } = await client.query(insertActivityQuery, [
      name, duration, type_id, userId
    ]);
    const activityId = rows[0].id;

    const tagInsertQuery = `
      INSERT INTO activity_tags (activity_id, user_id)
      VALUES ($1, $2)
    `;
    for (const friend of taggedFriends) {
      await client.query(tagInsertQuery, [activityId, friend.id]);
    }

    await client.query('COMMIT');
    res.status(201).json({ message: 'Activity created', activityId });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error creating activity:', err);
    res.status(500).json({ error: 'Failed to create activity' });
  } finally {
    client.release();
  }
};