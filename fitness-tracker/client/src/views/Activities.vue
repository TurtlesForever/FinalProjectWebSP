<template>
  <div class="activities">
    <h2>My Activities</h2>

    <ul class="activity-list">
      <li v-for="act in activities" :key="act.id" class="activity-item">
        <strong>{{ act.type }}</strong> - {{ act.duration }} min on {{ formatDate(act.date) }}
        <button @click="deleteActivity(act.id)">Delete</button>
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
  max-width: 600px;
  margin: auto;
  color: var(--text-color);
}

.activity-list {
  list-style: none;
  padding: 0;
}

.activity-item {
  background: #1c1c1c;
  padding: 1rem;
  margin-bottom: 1rem;
  border-left: 5px solid #4caf50;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background-color: #f44336;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #d32f2f;
}
</style>