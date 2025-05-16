<template>
  <div :class="['min-h-screen flex flex-col', darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900']">
    <header class="bg-white dark:bg-gray-800 shadow">
      <nav class="flex flex-wrap justify-center gap-4 py-4 items-center" aria-label="Main navigation">
        <ul class="flex flex-wrap gap-4 items-center">
          <li><router-link to="/" class="text-indigo-600 dark:text-indigo-300 hover:underline">Home</router-link></li>
          <li><router-link to="/dashboard" class="text-indigo-600 dark:text-indigo-300 hover:underline">Dashboard</router-link></li>
          <li><router-link to="/stats" class="text-indigo-600 dark:text-indigo-300 hover:underline">Stats</router-link></li>
          <li><router-link to="/friends" class="text-indigo-600 dark:text-indigo-300 hover:underline">Friends</router-link></li>

          <template v-if="isLoggedIn">
            <li><span class="text-indigo-600 dark:text-indigo-300">Welcome, {{ username }}!</span></li>
            <li>
              <button @click="logout" class="text-red-500 dark:text-red-300 hover:underline" aria-label="Logout">
                Logout
              </button>
            </li>
          </template>
          <template v-else>
            <li><router-link to="/login" class="text-indigo-600 dark:text-indigo-300 hover:underline">Login</router-link></li>
            <li><router-link to="/register" class="text-indigo-600 dark:text-indigo-300 hover:underline">Register</router-link></li>
          </template>

          <li>
            <button @click="toggleDarkMode" class="text-indigo-600 dark:text-indigo-300 hover:underline" aria-label="Toggle dark mode">
              {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
            </button>
          </li>
        </ul>
      </nav>
    </header>

    <main class="flex-grow p-6">
      <router-view :key="$route.fullPath" />
    </main>

    <footer class="bg-white dark:bg-gray-800 text-center py-4 border-t border-gray-300 dark:border-gray-700">
      <p>Fitness Tracker &copy; 2025</p>
    </footer>
  </div>
</template>

<script setup>
import { useSession } from '@/composables/useSession';

const {
  isLoggedIn,
  username,
  darkMode,
  toggleDarkMode,
  logout,
  initializeSession,
} = useSession();

initializeSession();
</script>

<style scoped>
/* Tailwind covers all main styling */
</style>