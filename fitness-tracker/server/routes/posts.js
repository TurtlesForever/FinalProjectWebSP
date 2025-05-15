const express = require('express');
const router = express.Router();
const pool = require('../db'); // PostgreSQL pool
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, async (req, res) => {
  const userId = req.user.id;  // from JWT payload
  const { activity, duration, taggedFriends } = req.body;

  try {
    // Insert new post
    const postResult = await pool.query(
      `INSERT INTO posts (user_id, activity, duration) VALUES ($1, $2, $3) RETURNING id`,
      [userId, activity, duration]
    );

    const postId = postResult.rows[0].id;

    // Insert tags if any
    if (Array.isArray(taggedFriends) && taggedFriends.length > 0) {
      const values = taggedFriends
        .map((friendId, i) => `($1, $${i + 2})`)
        .join(', ');

      const params = [postId, ...taggedFriends];

      await pool.query(
        `INSERT INTO post_tags (post_id, friend_id) VALUES ${values}`,
        params
      );
    }

    res.status(201).json({ message: 'Post created successfully', postId });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

module.exports = router;