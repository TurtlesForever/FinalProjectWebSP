const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, activityController.createActivity);
router.get('/', authMiddleware, activityController.getActivities);

module.exports = router;