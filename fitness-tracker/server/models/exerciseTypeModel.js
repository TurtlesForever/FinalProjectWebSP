const db = require('../db/db');

async function createExerciseType(name) {
  const result = await db.query(
    'INSERT INTO exercise_types (name) VALUES ($1) RETURNING *',
    [name]
  );
  return result.rows[0];
}

async function getAllExerciseTypes() {
  const result = await db.query('SELECT * FROM exercise_types');
  return result.rows;
}

module.exports = { createExerciseType, getAllExerciseTypes };