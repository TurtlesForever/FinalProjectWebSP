const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/', verifyToken, activityController.createActivity);

module.exports = router;

// Route to create an activity
router.post('/', verifyToken, activityController.createActivity);

// Route to get activities for a user
router.get('/', verifyToken, activityController.getActivitiesForUser);

// Route to update an activity by ID
router.put('/:id', verifyToken, activityController.updateActivity);

// Route to delete an activity by ID
router.delete('/:id', verifyToken, activityController.deleteActivity);

// Route to get total calories burned by the user
router.get('/total-calories', verifyToken, activityController.getTotalCaloriesBurnedByUser);

// Route to get activities by date range
router.get('/by-date-range', verifyToken, activityController.getActivitiesByDateRange);

router.post('/', async (req, res) => {
  const client = await pool.connect();
  try {
    const { name, duration, type_id, taggedFriends = [] } = req.body;

    await client.query('BEGIN');

    const insertActivityText = `
      INSERT INTO activities (name, duration, type_id)
      VALUES ($1, $2, $3)
      RETURNING id
    `;
    const { rows } = await client.query(insertActivityText, [name, duration, type_id]);
    const activityId = rows[0].id;

    const tagInsertText = `
      INSERT INTO activity_tags (activity_id, user_id)
      VALUES ($1, $2)
    `;

    for (const friend of taggedFriends) {
      await client.query(tagInsertText, [activityId, friend.id]);
    }

    await client.query('COMMIT');
    res.status(201).json({ message: 'Activity created', activityId });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.release();
  }
});

module.exports = router;