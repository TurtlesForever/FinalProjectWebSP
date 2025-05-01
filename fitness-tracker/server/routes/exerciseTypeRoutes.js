const express = require('express');
const router = express.Router();
const exerciseTypeController = require('../controllers/exerciseTypeController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/', verifyToken, exerciseTypeController.createExerciseType);
router.get('/', verifyToken, exerciseTypeController.getExerciseTypes);
router.put('/:id', verifyToken, exerciseTypeController.updateExerciseType);
router.delete('/:id', verifyToken, exerciseTypeController.deleteExerciseType);

module.exports = router;