const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');
const verifyToken = require('../middleware/authMiddleware');

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

module.exports = router;