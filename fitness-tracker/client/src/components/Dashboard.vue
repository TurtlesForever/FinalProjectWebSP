<template>
  <div class="dashboard-page min-h-screen flex flex-col items-center px-4 py-8 text-white">
    <h2 class="text-3xl font-semibold mb-8">Dashboard</h2>

    <div class="statistics w-full max-w-3xl flex flex-wrap gap-6 justify-center mb-8">
      <div class="stat-item w-full sm:w-1/2 bg-gray-800 border border-gray-600 rounded p-6 text-center">
        <h3 class="text-xl font-medium mb-2">Total Activities</h3>
        <p class="text-2xl font-bold">{{ totalActivities }}</p>
      </div>
      <div class="stat-item w-full sm:w-1/2 bg-gray-800 border border-gray-600 rounded p-6 text-center">
        <h3 class="text-xl font-medium mb-2">Total Duration</h3>
        <p class="text-2xl font-bold">{{ totalDuration }} mins</p>
      </div>
    </div>

    <div class="recent-activities w-full max-w-3xl">
      <h3 class="text-2xl font-semibold mb-4">Recent Activities</h3>

      <ul v-if="activities.length" class="space-y-4">
        <li
          v-for="activity in activities"
          :key="activity._id"
          class="activity-card bg-gray-800 border border-gray-600 p-4 rounded"
        >
          <div class="text-lg font-semibold">{{ activity.type }}</div>
          <div>{{ activity.duration }} mins</div>
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
  background-color: #1e1e1e;
}
</style>