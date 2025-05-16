<template>
  <div :class="['flex flex-col items-center min-h-screen px-4', darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900']">
    <h1 class="text-3xl font-bold mb-4">Welcome to the Fitness Tracker App</h1>
    <p class="mb-4">Track your activities, exercises, and stay fit!</p>

    <!-- Dark Mode Toggle Button -->
    <button @click="toggleDarkMode" class="mt-4 px-4 py-2 rounded-md text-white bg-gray-800 hover:bg-gray-600">
      Toggle Dark Mode
    </button>

    <div v-if="isLoggedIn" class="w-full max-w-lg p-4">
      <p class="text-xl mb-4">Welcome, {{ username }}!</p>
      <div class="links mb-6">
        <router-link to="/activities" class="block text-indigo-600 dark:text-indigo-300 hover:underline mb-2">Manage Activities</router-link>
        <router-link to="/add-activity" class="block text-indigo-600 dark:text-indigo-300 hover:underline mb-2">Add Activity</router-link>
        <router-link to="/exercise-types" class="block text-indigo-600 dark:text-indigo-300 hover:underline mb-2">Manage Exercise Types</router-link>
        <router-link to="/add-exercise-type" class="block text-indigo-600 dark:text-indigo-300 hover:underline">Add Exercise Type</router-link>
      </div>
      <button @click="logout" class="logout-btn mt-4 px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400">
        Logout
      </button>
    </div>

    <div v-else class="text-center">
      <p class="mb-4">Please log in to track your activities.</p>
      <router-link to="/login" class="text-indigo-600 dark:text-indigo-300 hover:underline">Login</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useDarkModeStore } from '@/stores/darkMode';

const darkModeStore = useDarkModeStore();
const darkMode = computed(() => darkModeStore.darkMode);
const toggleDarkMode = () => darkModeStore.toggle();

const router = useRouter();
const isLoggedIn = computed(() => !!localStorage.getItem('token'));
const username = localStorage.getItem('username') || 'User';

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  router.push('/login');
};
</script>

<style scoped>
.logout-btn {
  background-color: #ff5c5c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.logout-btn:hover {
  background-color: #ff4040;
}
</style>