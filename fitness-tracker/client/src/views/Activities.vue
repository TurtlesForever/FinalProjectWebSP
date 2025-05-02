<template>
  <div class="activities">
    <h2>My Activities</h2>

    <ul class="activity-list">
      <li v-for="act in activities" :key="act.id" class="activity-item">
        <div class="activity-details">
          <strong>{{ act.type }}</strong> — {{ act.duration }} min on {{ formatDate(act.date) }}
        </div>
        <button class="delete-btn" @click="deleteActivity(act.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import API from '@/api';

const activities = ref([]);

const fetchActivities = async () => {
  try {
    const { data } = await API.get('/activities');
    activities.value = data;
  } catch (err) {
    console.error('Failed to load activities:', err.message);
  }
};

const deleteActivity = async (id) => {
  try {
    await API.delete(`/activities/${id}`);
    activities.value = activities.value.filter((a) => a.id !== id);
  } catch (err) {
    console.error('Error deleting activity:', err.message);
  }
};

const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString();

onMounted(fetchActivities);
</script>

<style scoped>
.activities {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #1e1e1e;
  border-radius: 8px;
  color: var(--text-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

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
</style>