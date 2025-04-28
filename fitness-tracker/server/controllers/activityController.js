const activityModel = require('../models/activityModel');

async function createActivity(req, res) {
  const { exerciseTypeId, duration } = req.body;
  try {
    const activity = await activityModel.createActivity(req.userId, exerciseTypeId, duration);
    res.status(201).json(activity);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getMyActivities(req, res) {
  try {
    const activities = await activityModel.getActivitiesByUser(req.userId);
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteMyActivity(req, res) {
  const { id } = req.params;
  try {
    await activityModel.deleteActivity(id, req.userId);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { createActivity, getMyActivities, deleteMyActivity };