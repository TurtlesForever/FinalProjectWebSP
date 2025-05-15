const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/', verifyToken, activityController.createActivity);
router.get('/', verifyToken, activityController.getActivitiesForUser);
router.put('/:id', verifyToken, activityController.updateActivity);
router.delete('/:id', verifyToken, activityController.deleteActivity);
router.get('/total-calories', verifyToken, activityController.getTotalCaloriesBurnedByUser);
router.get('/by-date-range', verifyToken, activityController.getActivitiesByDateRange);

module.exports = router;