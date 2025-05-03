<template>
  <div class="dashboard-page min-h-screen flex flex-col items-center px-4 py-8 text-white">
    <h2 class="text-4xl font-semibold mb-8 text-gradient">Dashboard</h2>

    <div class="statistics w-full max-w-4xl flex flex-wrap gap-6 justify-center mb-8">
      <div class="stat-item w-full sm:w-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border border-gray-600 rounded-lg p-6 text-center shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h3 class="text-xl font-medium mb-2 text-gray-100">Total Activities</h3>
        <p class="text-3xl font-bold">{{ totalActivities }}</p>
      </div>
      <div class="stat-item w-full sm:w-1/2 bg-gradient-to-r from-teal-400 to-cyan-500 border border-gray-600 rounded-lg p-6 text-center shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h3 class="text-xl font-medium mb-2 text-gray-100">Total Duration</h3>
        <p class="text-3xl font-bold">{{ totalDuration }} mins</p>
      </div>
    </div>

    <div class="recent-activities w-full max-w-4xl">
      <h3 class="text-2xl font-semibold mb-4">Recent Activities</h3>

      <ul v-if="activities.length" class="space-y-4">
        <li
          v-for="activity in activities"
          :key="activity._id"
          class="activity-card bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          <div class="text-lg font-semibold text-white">{{ activity.type }}</div>
          <div class="text-gray-300">{{ activity.duration }} mins</div>
          <div class="activity-date text-sm text-gray-400">{{ formatDate(activity.date) }}</div>
        </li>
      </ul>

      <p v-else class="text-gray-400 italic">No recent activities.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import API from '@/api';

const activities = ref([]);
const totalActivities = ref(0);
const totalDuration = ref(0);

const fetchDashboardData = async () => {
  try {
    const { data } = await API.get('/activities/dashboard');
    activities.value = data.activities;
    totalActivities.value = data.totalActivities;
    totalDuration.value = data.totalDuration;
  } catch (e) {
    alert('Error fetching dashboard data: ' + e.message);
  }
};

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString();
};

onMounted(() => {
  fetchDashboardData();
});
</script>

<style scoped>
.dashboard-page {
  background-color: #121212;
}

.text-gradient {
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  color: transparent;
}

.activity-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.activity-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
</style>