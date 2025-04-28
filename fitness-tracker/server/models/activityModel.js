const db = require('../db/db');

async function createActivity(userId, exerciseTypeId, duration) {
  const result = await db.query(
    'INSERT INTO activities (user_id, exercise_type_id, duration) VALUES ($1, $2, $3) RETURNING *',
    [userId, exerciseTypeId, duration]
  );
  return result.rows[0];
}

async function getActivitiesByUser(userId) {
  const result = await db.query(
    'SELECT * FROM activities WHERE user_id = $1 ORDER BY date DESC',
    [userId]
  );
  return result.rows;
}

async function deleteActivity(id, userId) {
  await db.query('DELETE FROM activities WHERE id = $1 AND user_id = $2', [id, userId]);
}

module.exports = { createActivity, getActivitiesByUser, deleteActivity };