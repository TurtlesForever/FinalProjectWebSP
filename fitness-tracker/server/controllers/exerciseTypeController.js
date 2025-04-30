const ExerciseType = require('../models/exerciseTypeModel');

async function createExerciseType(req, res) {
  const { name } = req.body;
  try {
    const exerciseType = await exerciseTypeModel.createExerciseType(name);
    res.status(201).json(exerciseType);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getAllExerciseTypes(req, res) {
  try {
    const types = await exerciseTypeModel.getAllExerciseTypes();
    res.json(types);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { createExerciseType, getAllExerciseTypes };