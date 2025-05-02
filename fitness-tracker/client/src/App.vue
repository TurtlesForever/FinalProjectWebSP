<template>
  <div :class="['min-h-screen', 'flex', 'flex-col', darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900']">
    <!-- Test if Tailwind is working -->
    <div class="bg-red-500 text-white p-4 rounded mb-4 text-center">
      Tailwind is working!
    </div>

    <!-- Header + Nav -->
    <header class="bg-white dark:bg-gray-800 shadow">
      <nav class="flex flex-wrap justify-center gap-4 py-4">
        <RouterLink to="/" class="text-indigo-600 dark:text-indigo-300 hover:underline">Home</RouterLink>
        <RouterLink to="/activities" class="text-indigo-600 dark:text-indigo-300 hover:underline">Activities</RouterLink>
        <RouterLink to="/exercise-types" class="text-indigo-600 dark:text-indigo-300 hover:underline">Exercise Types</RouterLink>
        <RouterLink to="/stats" class="text-indigo-600 dark:text-indigo-300 hover:underline">Stats</RouterLink>
        <RouterLink to="/friends-activities" class="text-indigo-600 dark:text-indigo-300 hover:underline">Friends</RouterLink>
        <RouterLink to="/login" class="text-indigo-600 dark:text-indigo-300 hover:underline">Login</RouterLink>
        <RouterLink to="/register" class="text-indigo-600 dark:text-indigo-300 hover:underline">Register</RouterLink>
        <!-- Dark Mode Toggle Button -->
        <button @click="toggleDarkMode" class="text-indigo-600 dark:text-indigo-300 hover:underline">
          {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
        </button>
      </nav>
    </header>

    <!-- Main content -->
    <main class="flex-grow p-6">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-800 text-center py-4 border-t border-gray-300 dark:border-gray-700">
      <p>Fitness Tracker &copy; 2025</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Dark mode state
const darkMode = ref(false);

// Toggle dark mode
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
</script>

<style scoped>
/* Scoped styles are no longer needed as Tailwind handles the styling */
</style>