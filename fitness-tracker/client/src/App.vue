<template>
  <div :class="['min-h-screen flex flex-col', darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900']">
    <header class="bg-white dark:bg-gray-800 shadow">
      <nav class="flex flex-wrap justify-center gap-4 py-4">
        <router-link to="/" class="text-indigo-600 dark:text-indigo-300 hover:underline">Home</router-link>
        <router-link to="/dashboard" class="text-indigo-600 dark:text-indigo-300 hover:underline">Dashboard</router-link>
        <router-link to="/stats" class="text-indigo-600 dark:text-indigo-300 hover:underline">Stats</router-link>
        <router-link to="/friends" class="text-indigo-600 dark:text-indigo-300 hover:underline">Friends</router-link>
        <router-link to="/login" class="text-indigo-600 dark:text-indigo-300 hover:underline">Login</router-link>
        <router-link to="/register" class="text-indigo-600 dark:text-indigo-300 hover:underline">Register</router-link>

        <!-- Dark Mode Toggle -->
        <button @click="toggleDarkMode" class="text-indigo-600 dark:text-indigo-300 hover:underline">
          {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
        </button>
      </nav>
    </header>

    <main class="flex-grow p-6">
      <router-view />
    </main>

    <footer class="bg-white dark:bg-gray-800 text-center py-4 border-t border-gray-300 dark:border-gray-700">
      <p>Fitness Tracker &copy; 2025</p>
    </footer>
  </div>
</template>

<script setup>
import { useDarkModeStore } from '@/stores/darkMode';

const darkModeStore = useDarkModeStore();

const toggleDarkMode = () => {
  darkModeStore.toggle();
};

const darkMode = computed(() => darkModeStore.darkMode);
</script>

<style scoped>
/* Tailwind handles most styles */
</style>