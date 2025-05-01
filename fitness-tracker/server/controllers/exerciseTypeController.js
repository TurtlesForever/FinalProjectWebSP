const ExerciseType = require('../models/exerciseTypeModel');

// Create a new exercise type
exports.createExerciseType = async (req, res) => {
  try {
    const { name, description } = req.body;
    const exerciseType = new ExerciseType({ name, description });
    await exerciseType.save();
    res.status(201).json(exerciseType);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all exercise types
exports.getExerciseTypes = async (req, res) => {
  try {
    const exerciseTypes = await ExerciseType.find();
    res.status(200).json(exerciseTypes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update exercise type by ID
exports.updateExerciseType = async (req, res) => {
  try {
    const updated = await ExerciseType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Exercise type not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete exercise type by ID
exports.deleteExerciseType = async (req, res) => {
  try {
    const deleted = await ExerciseType.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Exercise type not found' });
    res.json({ message: 'Exercise type deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};