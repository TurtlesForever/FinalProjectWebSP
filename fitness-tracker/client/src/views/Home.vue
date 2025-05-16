<template>
  <section>
    <h1 class="text-3xl font-bold mb-4">Welcome to the Fitness Tracker App</h1>
    <p v-if="isLoggedIn">Track your activities, monitor your stats, and stay fit, {{ username }}!</p>
    <p v-else>Please log in or register to start tracking your fitness goals.</p>
  </section>
</template>

<script setup>
import { useSession } from '@/composables/useSession';

const { isLoggedIn, username, darkMode, toggleDarkMode, logout, initializeSession } = useSession();

initializeSession(); // initialize session state on component setup
</script>

<style scoped>
/* Your home page specific styles here */
</style>