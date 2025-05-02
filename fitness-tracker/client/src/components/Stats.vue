<template>
  <section>
    <h2>Your Stats</h2>
    <div v-if="loading" class="loading">Loading stats...</div>
    <div v-else-if="error" class="error">Error loading stats: {{ error }}</div>
    <ul v-else>
      <li>Steps Today: {{ stats.steps || 0 }}</li>
      <li>Calories Burned: {{ stats.calories || 0 }}</li>
      <li>Workout Time: {{ stats.minutes || 0 }} minutes</li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const stats = ref({ steps: 0, calories: 0, minutes: 0 });
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('/api/stats/1');
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    stats.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
section {
  padding: 1rem;
  background-color: #f7f7f7;
  border-radius: 8px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

.loading {
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff;
}

.error {
  font-size: 1.2rem;
  font-weight: bold;
  color: red;
}

li {
  font-size: 1.1rem;
  color: #333;
}
</style>