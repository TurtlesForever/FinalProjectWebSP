const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');
const authenticate = require('../middleware/authenticateToken');

router.post('/', authenticate, activityController.createActivity);
router.get('/', authenticate, activityController.getMyActivities);
router.delete('/:id', authenticate, activityController.deleteMyActivity);

module.exports = router;