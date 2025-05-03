<template>
  <div :class="['flex justify-center items-center min-h-screen', darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900']">
    <div class="activities w-full max-w-3xl p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold mb-6 text-center">My Activities</h2>

      <!-- Dark Mode Toggle -->
      <button @click="toggleDarkMode" class="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-md">
        Toggle Dark Mode
      </button>

      <ul class="activity-list">
        <li v-for="act in activities" :key="act.id" class="activity-item">
          <div class="activity-details">
            <strong>{{ act.type }}</strong> — {{ act.duration }} min on {{ formatDate(act.date) }}
          </div>
          <button class="delete-btn" @click="deleteActivity(act.id)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import API from '@/api';

const darkMode = ref(false);
const activities = ref([]);

// Toggle dark mode
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
};

// Fetch activities from API
const fetchActivities = async () => {
  try {
    const { data } = await API.get('/activities');
    activities.value = data;
  } catch (err) {
    console.error('Failed to load activities:', err.message);
  }
};

// Delete an activity and update the UI optimistically
const deleteActivity = async (id) => {
  // Optimistic UI update
  const activityToDelete = activities.value.find(a => a.id === id);
  activities.value = activities.value.filter((a) => a.id !== id);

  try {
    await API.delete(`/activities/${id}`);
  } catch (err) {
    // Rollback the deletion if the API call fails
    activities.value.push(activityToDelete);
    console.error('Error deleting activity:', err.message);
  }
};

// Format date
const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString();

onMounted(fetchActivities);
</script>

<style scoped>
.activity-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.activity-item {
  background-color: #2a2a2a;
  padding: 1rem;
  margin-bottom: 1rem;
  border-left: 5px solid #4caf50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
}

.activity-details {
  flex: 1;
  margin-right: 1rem;
}

.delete-btn {
  background-color: #ff5c5c;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.delete-btn:hover {
  background-color: #e64545;
}

.activities {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.activities h2 {
  color: #f9f9f9;
}
</style>