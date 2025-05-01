const express = require('express');
const router = express.Router();
const exerciseTypeController = require('../controllers/exerciseTypeController');
const verifyToken = require('../middleware/authMiddleware');

// Route to create a new exercise type
router.post('/', verifyToken, exerciseTypeController.createExerciseType);

// Route to get all exercise types
router.get('/', verifyToken, exerciseTypeController.getExerciseTypes);

// Route to update an exercise type by ID
router.put('/:id', verifyToken, exerciseTypeController.updateExerciseType);

// Route to delete an exercise type by ID
router.delete('/:id', verifyToken, exerciseTypeController.deleteExerciseType);

module.exports = router;