const express = require('express')
const router = express.Router()
const pool = require('../db/db') // your PostgreSQL connection pool

router.get('/search', verifyToken, async (req, res) => {
  const query = req.query.q.toLowerCase();
  try {
    const result = await pool.query(
      `SELECT id, name FROM users WHERE LOWER(name) LIKE $1 LIMIT 10`,
      [`%${query}%`]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Search failed' });
  }
});

module.exports = router