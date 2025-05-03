<template>
  <div class="activity-log-page max-w-4xl mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
    <h2 class="text-3xl text-white font-semibold mb-8">Your Activity Log</h2>

    <ul v-if="activities.length" class="activity-list space-y-4">
      <li v-for="activity in activities" :key="activity._id" class="activity-item p-4 bg-gray-700 rounded-lg border-l-4 border-blue-500">
        <div class="activity-type text-xl font-semibold text-white">{{ activity.type }}</div>
        <div class="activity-details flex justify-between text-sm text-gray-400">
          <span>{{ activity.duration }} mins</span>
          <span>{{ formatDate(activity.date) }}</span>
        </div>
      </li>
    </ul>

    <p v-else class="no-activity text-gray-400 text-center mt-8">No activity logs available.</p>
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
  } catch (e) {
    alert('Error fetching activity logs: ' + e.message);
  }
};

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString();
};

onMounted(() => {
  fetchActivities();
});
</script>

<style scoped>
.activity-log-page {
  background-color: #1e1e1e;
  color: var(--text-color);
}

.activity-item {
  background-color: #2a2a2a;
  border-left: 5px solid #03a9f4;
  border-radius: 6px;
}

.activity-type {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.activity-details {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  color: #ccc;
}

.no-activity {
  text-align: center;
  opacity: 0.7;
  margin-top: 2rem;
}
</style>