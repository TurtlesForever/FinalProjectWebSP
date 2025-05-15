const pool = require('../db/db');
const Activity = require('../models/activityModel');

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
      RETURNING id, name, duration, type_id, user_id
    `;
    const { rows } = await client.query(insertActivityQuery, [
      name, duration, type_id, userId
    ]);
    const activity = rows[0];

    const tagInsertQuery = `
      INSERT INTO activity_tags (activity_id, user_id)
      VALUES ($1, $2)
    `;
    for (const friend of taggedFriends) {
      await client.query(tagInsertQuery, [activity.id, friend.id]);
    }

    await client.query('COMMIT');
    res.status(201).json({ message: 'Activity created', activity });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error creating activity:', err);
    res.status(500).json({ error: 'Failed to create activity' });
  } finally {
    client.release();
  }
};

// Get all activities for the logged-in user
exports.getActivitiesForUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const query = `
      SELECT a.*, et.name as exercise_type_name
      FROM activities a
      LEFT JOIN exercise_types et ON a.type_id = et.id
      WHERE a.user_id = $1
      ORDER BY a.created_at DESC
    `;
    const { rows } = await pool.query(query, [userId]);
    res.status(200).json(rows);
  } catch (err) {
    console.error('Error fetching activities:', err);
    res.status(500).json({ error: 'Failed to fetch activities' });
  }
};

// Update an activity by ID (only if owned by user)
exports.updateActivity = async (req, res) => {
  const client = await pool.connect();
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const { name, duration, type_id, taggedFriends = [] } = req.body;

    await client.query('BEGIN');

    // Check if activity belongs to user
    const checkQuery = `SELECT * FROM activities WHERE id = $1 AND user_id = $2`;
    const checkResult = await client.query(checkQuery, [id, userId]);
    if (checkResult.rows.length === 0) {
      await client.query('ROLLBACK');
      return res.status(404).json({ error: 'Activity not found or unauthorized' });
    }

    // Update activity
    const updateQuery = `
      UPDATE activities
      SET name = $1, duration = $2, type_id = $3
      WHERE id = $4
      RETURNING *
    `;
    const updateResult = await client.query(updateQuery, [name, duration, type_id, id]);
    const updatedActivity = updateResult.rows[0];

    // Remove old tags
    await client.query(`DELETE FROM activity_tags WHERE activity_id = $1`, [id]);

    // Insert new tags
    const tagInsertQuery = `INSERT INTO activity_tags (activity_id, user_id) VALUES ($1, $2)`;
    for (const friend of taggedFriends) {
      await client.query(tagInsertQuery, [id, friend.id]);
    }

    await client.query('COMMIT');
    res.status(200).json({ message: 'Activity updated', activity: updatedActivity });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error updating activity:', err);
    res.status(500).json({ error: 'Failed to update activity' });
  } finally {
    client.release();
  }
};

// Delete an activity by ID (only if owned by user)
exports.deleteActivity = async (req, res) => {
  const client = await pool.connect();
  try {
    const userId = req.user.id;
    const { id } = req.params;

    await client.query('BEGIN');

    // Check ownership
    const checkQuery = `SELECT * FROM activities WHERE id = $1 AND user_id = $2`;
    const checkResult = await client.query(checkQuery, [id, userId]);
    if (checkResult.rows.length === 0) {
      await client.query('ROLLBACK');
      return res.status(404).json({ error: 'Activity not found or unauthorized' });
    }

    // Delete tags first (FK constraints)
    await client.query(`DELETE FROM activity_tags WHERE activity_id = $1`, [id]);

    // Delete activity
    await client.query(`DELETE FROM activities WHERE id = $1`, [id]);

    await client.query('COMMIT');
    res.status(200).json({ message: 'Activity deleted' });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error deleting activity:', err);
    res.status(500).json({ error: 'Failed to delete activity' });
  } finally {
    client.release();
  }
};

// Get total calories burned by user (assuming activities have calories column)
exports.getTotalCaloriesBurnedByUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const query = `
      SELECT COALESCE(SUM(calories_burned), 0) AS total_calories
      FROM activities
      WHERE user_id = $1
    `;
    const { rows } = await pool.query(query, [userId]);
    res.status(200).json({ totalCalories: rows[0].total_calories });
  } catch (err) {
    console.error('Error calculating total calories:', err);
    res.status(500).json({ error: 'Failed to calculate total calories burned' });
  }
};

// Get activities by date range for user
exports.getActivitiesByDateRange = async (req, res) => {
  try {
    const userId = req.user.id;
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'startDate and endDate query params are required' });
    }

    const query = `
      SELECT *
      FROM activities
      WHERE user_id = $1 AND created_at BETWEEN $2 AND $3
      ORDER BY created_at DESC
    `;
    const { rows } = await pool.query(query, [userId, startDate, endDate]);
    res.status(200).json(rows);
  } catch (err) {
    console.error('Error fetching activities by date range:', err);
    res.status(500).json({ error: 'Failed to fetch activities by date range' });
  }
};