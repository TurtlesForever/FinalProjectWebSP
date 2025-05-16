<template>
  <div :class="['dashboard min-h-screen p-6', darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900']">
    <h1 class="text-4xl font-extrabold mb-6 text-center text-gradient">
      Dashboard
    </h1>

    <section class="stats grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div
        class="stat-card bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center"
      >
        <p class="text-3xl font-bold">{{ totalActivities }}</p>
        <p class="text-gray-600 dark:text-gray-300 mt-1">Activities</p>
      </div>

      <div
        class="stat-card bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center"
      >
        <p class="text-3xl font-bold">{{ totalDuration }}</p>
        <p class="text-gray-600 dark:text-gray-300 mt-1">Total Duration (mins)</p>
      </div>

      <div
        class="stat-card bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center"
      >
        <p class="text-3xl font-bold">{{ uniqueExerciseTypes }}</p>
        <p class="text-gray-600 dark:text-gray-300 mt-1">Exercise Types</p>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">Recent Activities</h2>
      <ul>
        <li
          v-for="activity in recentActivities"
          :key="activity._id"
          class="activity-item bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-lg p-4 mb-3 shadow-sm flex justify-between items-center"
        >
          <div>
            <p class="font-semibold">{{ activity.type }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              {{ formatDate(activity.date) }} — {{ activity.duration }} mins
            </p>
          </div>
          <button
            @click="deleteActivity(activity._id)"
            class="text-red-600 hover:text-red-800 focus:outline-none"
            aria-label="Delete activity"
          >
            ✕
          </button>
        </li>
      </ul>

      <p v-if="!activities.length" class="text-center italic text-gray-500 dark:text-gray-400">
        No activities to show.
      </p>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import API from '@/api';
import { useDarkModeStore } from '@/stores/darkMode';

const darkModeStore = useDarkModeStore();
const darkMode = computed(() => darkModeStore.darkMode);

const activities = ref([]);

const totalActivities = computed(() => activities.value.length);

const totalDuration = computed(() =>
  activities.value.reduce((sum, a) => sum + (a.duration || 0), 0)
);

// Count unique exercise types in activities
const uniqueExerciseTypes = computed(() => {
  const types = new Set(activities.value.map(a => a.type));
  return types.size;
});

// Show recent 5 activities (most recent by date)
const recentActivities = computed(() => {
  return [...activities.value]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);
});

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString();
}

async function loadActivities() {
  try {
    const { data } = await API.get('/activities');
    activities.value = data.activities || [];
  } catch (error) {
    console.error('Failed to load activities:', error);
  }
}

async function deleteActivity(id) {
  try {
    await API.delete(`/activities/${id}`);
    activities.value = activities.value.filter(a => a._id !== id);
  } catch (error) {
    console.error('Failed to delete activity:', error);
  }
}

onMounted(() => {
  loadActivities();
});
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, #7928ca, #ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>