<template>
  <div class="stats-container min-h-screen flex flex-col items-center justify-center px-4 py-8">
    <h2 class="text-3xl font-semibold mb-6">Your Stats</h2>

    <div v-if="stats.length > 0" class="w-full max-w-2xl space-y-4">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="stat-card bg-gray-800 p-4 rounded shadow"
      >
        <p><strong>Exercise:</strong> {{ stat.exerciseType }}</p>
        <p><strong>Date:</strong> {{ stat.date }}</p>
        <p><strong>Duration:</strong> {{ stat.duration }} minutes</p>
      </div>
    </div>

    <div v-else class="text-lg text-gray-400 mt-6">
      <p>No stats available. Start adding activities!</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import API from '@/api';

const stats = ref([]);
const message = ref('');
const success = ref(false);

const fetchStats = async () => {
  try {
    const res = await API.get('/stats');
    stats.value = res.data;
    message.value = 'Stats loaded successfully.';
    success.value = true;
  } catch (err) {
    console.error('Error loading stats:', err);
    message.value = 'Error loading stats.';
    success.value = false;
  }
};

onMounted(() => {
  fetchStats();
});
</script>

<style scoped>
.stats-container {
  background-color: #1e1e1e;
  color: #ffffff;
}

.stat-card {
  background-color: #2a2a2a;
  border: 1px solid #3c3c3c;
}

.stat-card p {
  margin-bottom: 0.5rem;
}
</style>