<template>
  <div :class="['activities-container min-h-screen p-6', darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900']">
    <h2 class="text-3xl font-bold mb-6">Your Activities</h2>

    <router-link
      to="/add-activity"
      class="inline-block mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
    >
      Add New Activity
    </router-link>

    <ul>
      <li
        v-for="activity in activities"
        :key="activity._id"
        class="activity-item bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-lg p-4 mb-3 shadow-sm flex justify-between items-center"
      >
        <div>
          <p class="text-lg font-semibold">{{ activity.type }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-300">{{ formatDate(activity.date) }} - {{ activity.duration }} mins</p>
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

    <p v-if="activities.length === 0" class="text-center text-gray-500 dark:text-gray-400 italic">
      You have no recorded activities.
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import API from '@/api';
import { useDarkModeStore } from '@/store/darkMode';

const darkModeStore = useDarkModeStore();
const darkMode = computed(() => darkModeStore.darkMode);

const activities = ref([]);

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString();
}

async function loadActivities() {
  try {
    const { data } = await API.get('/activities');
    activities.value = data.activities || [];
  } catch (error) {
    console.error(error);
  }
}

async function deleteActivity(id) {
  try {
    await API.delete(`/activities/${id}`);
    activities.value = activities.value.filter(a => a._id !== id);
  } catch (error) {
    console.error('Failed to delete activity', error);
  }
}

onMounted(() => {
  loadActivities();
});
</script>

<style scoped>
/* Tailwind utility classes handle styles */
</style>