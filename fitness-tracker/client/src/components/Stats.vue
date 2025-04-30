<template>
  <section>
    <h2>Your Stats</h2>
    <ul>
      <li>Steps Today: {{ stats.steps }}</li>
      <li>Calories Burned: {{ stats.calories }}</li>
      <li>Workout Time: {{ stats.minutes }} minutes</li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const stats = ref({ steps: 0, calories: 0, minutes: 0 });

onMounted(async () => {
  try {
    const response = await fetch('/api/stats/1');
    stats.value = await response.json();
  } catch (err) {
    console.error('Failed to load stats:', err);
  }
});
</script>

<style scoped>
/* Your styles here */
</style>