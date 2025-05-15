const express = require('express');
const router = express.Router();
const pool = require('../db/db'); // PostgreSQL connection
const { verifyToken } = require('../middleware/verifyToken');

router.get('/search', verifyToken, async (req, res) => {
  const rawQuery = req.query.q;

  if (!rawQuery || rawQuery.trim() === '') {
    return res.status(400).json({ error: 'Missing search query' });
  }

  const query = rawQuery.toLowerCase();

  try {
    const result = await pool.query(
      `SELECT id, name FROM users WHERE LOWER(name) LIKE $1 LIMIT 10`,
      [`%${query}%`]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({ error: 'Search failed' });
  }
});

module.exports = router;