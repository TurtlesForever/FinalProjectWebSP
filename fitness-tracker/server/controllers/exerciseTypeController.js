const ExerciseType = require('../models/exerciseTypeModel');

// Create a new exercise type
exports.createExerciseType = async (req, res) => {
  const { name } = req.body;

  try {
    const newExerciseType = new ExerciseType({ name });
    await newExerciseType.save();
    res.status(201).json({ message: 'Exercise type created successfully', exerciseType: newExerciseType });
  } catch (error) {
    console.error('Failed to create exercise type:', error);
    res.status(500).json({ message: 'Failed to create exercise type, please try again' });
  }
};

// Fetch all exercise types
exports.getExerciseTypes = async (req, res) => {
  try {
    const exerciseTypes = await ExerciseType.find();
    res.status(200).json(exerciseTypes);
  } catch (error) {
    console.error('Failed to fetch exercise types:', error);
    res.status(500).json({ message: 'Failed to fetch exercise types' });
  }
};

// Update an exercise type by ID
exports.updateExerciseType = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedExerciseType = await ExerciseType.findByIdAndUpdate(id, { name }, { new: true });
    if (!updatedExerciseType) {
      return res.status(404).json({ message: 'Exercise type not found' });
    }
    res.status(200).json({ message: 'Exercise type updated successfully', exerciseType: updatedExerciseType });
  } catch (error) {
    console.error('Failed to update exercise type:', error);
    res.status(500).json({ message: 'Failed to update exercise type' });
  }
};

// Delete an exercise type by ID
exports.deleteExerciseType = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedExerciseType = await ExerciseType.findByIdAndDelete(id);
    if (!deletedExerciseType) {
      return res.status(404).json({ message: 'Exercise type not found' });
    }
    res.status(200).json({ message: 'Exercise type deleted successfully' });
  } catch (error) {
    console.error('Failed to delete exercise type:', error);
    res.status(500).json({ message: 'Failed to delete exercise type' });
  }
};