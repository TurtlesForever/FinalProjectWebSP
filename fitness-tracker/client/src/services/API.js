import API from '../api';

// Inside an async function or lifecycle hook
async function fetchActivities() {
  try {
    const { data } = await API.get('/activities');
    console.log(data);
  } catch (err) {
    console.error('Error fetching:', err.message);
  }
}

async function addActivity(newActivity) {
  await API.post('/activities', newActivity);
}

async function deleteActivity(id) {
  await API.delete(`/activities/${id}`);
}

async function updateActivity(id, updatedActivity) {
  await API.put(`/activities/${id}`, updatedActivity);
}