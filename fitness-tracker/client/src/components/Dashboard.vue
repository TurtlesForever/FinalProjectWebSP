<template>
  <div class="dashboard">
    <h1>Welcome, {{ user?.name || 'User' }}!</h1>

    <section v-if="stats">
      <h2>Your Stats</h2>
      <ul>
        <li>Steps Today: {{ stats.steps }}</li>
        <li>Calories Burned: {{ stats.calories }}</li>
        <li>Workout Time: {{ stats.minutes }} minutes</li>
      </ul>
    </section>

    <section v-else-if="loading">
      <p>Loading your stats...</p>
    </section>

    <section v-else>
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <p v-else>No stats available for today.</p>
    </section>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';
import { useUserStore } from '@/store/userStore';

const userStore = useUserStore();
const user = computed(() => userStore.currentUser);

const stats = ref(null);
const loading = ref(true);
const errorMessage = ref('');

onMounted(async () => {
  try {
    if (!user.value) {
      await userStore.fetchCurrentUser();
    }

    if (userStore.currentUser?.id) {
      const res = await fetch(`/api/stats/${userStore.currentUser.id}`);
      if (!res.ok) throw new Error('Failed to fetch stats');
      stats.value = await res.json();
    } else {
      errorMessage.value = 'No user logged in.';
    }
  } catch (err) {
    console.error('Failed to load stats:', err);
    errorMessage.value = 'Something went wrong while fetching your stats. Please try again later.';
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.dashboard {
  padding: 2rem;
}

section {
  margin-bottom: 1.5rem;
}

p {
  font-size: 1.2rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  font-size: 1rem;
}

.error-message {
  color: red;
  font-weight: bold;
}
</style>