const express = require('express');
const router = express.Router();
const exerciseTypeController = require('../controllers/exerciseTypeController');

router.post('/', exerciseTypeController.createExerciseType);
router.get('/', exerciseTypeController.getAllExerciseTypes);

module.exports = router;