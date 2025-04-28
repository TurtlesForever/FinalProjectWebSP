const db = require('../db/db');
const bcrypt = require('bcrypt');

async function createUser(username, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await db.query(
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
    [username, hashedPassword]
  );
  return result.rows[0];
}

async function findUserByUsername(username) {
  const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);
  return result.rows[0];
}

async function findUserById(id) {
  const result = await db.query('SELECT id, username FROM users WHERE id = $1', [id]);
  return result.rows[0];
}

module.exports = { createUser, findUserByUsername, findUserById };