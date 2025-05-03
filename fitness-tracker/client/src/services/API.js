import API from '@/api';

// Fetch all activities
async function fetchActivities() {
  try {
    const { data } = await API.get('/activities');
    console.log('Fetched Activities:', data);
    return data;  // You might want to return the data for further use
  } catch (err) {
    console.error('Error fetching activities:', err.message);
    // Optionally, return a fallback value or rethrow error
    return null;
  }
}

// Add a new activity
async function addActivity(newActivity) {
  try {
    const { data } = await API.post('/activities', newActivity);
    console.log('Activity added:', data);
    return data; // You can return the added activity if needed
  } catch (err) {
    console.error('Error adding activity:', err.message);
    throw new Error('Failed to add activity.');  // Throw an error to be handled by the caller
  }
}

// Delete an activity by its ID
async function deleteActivity(id) {
  try {
    const { data } = await API.delete(`/activities/${id}`);
    console.log('Activity deleted:', data);
    return data;  // You can return a success confirmation or deleted data
  } catch (err) {
    console.error('Error deleting activity:', err.message);
    throw new Error('Failed to delete activity.');  // Throw an error for the caller to handle
  }
}

// Update an existing activity by ID
async function updateActivity(id, updatedActivity) {
  try {
    const { data } = await API.put(`/activities/${id}`, updatedActivity);
    console.log('Activity updated:', data);
    return data;  // Return the updated activity data if needed
  } catch (err) {
    console.error('Error updating activity:', err.message);
    throw new Error('Failed to update activity.');  // Throw an error to be handled by the caller
  }
}