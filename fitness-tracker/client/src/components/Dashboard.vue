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
    <section v-else>
      <p>Loading stats...</p>
    </section>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';
import { useUserStore } from '@/store/userStore';

const userStore = useUserStore();
const user = computed(() => userStore.currentUser);

const stats = ref(null);

onMounted(async () => {
  if (!user.value) {
    await userStore.fetchCurrentUser();
  }

  try {
    const res = await fetch(`/api/stats/${userStore.currentUser.id}`);
    stats.value = await res.json();
  } catch (err) {
    console.error('Failed to load stats:', err);
  }
});
</script>

<style scoped>
.dashboard {
  padding: 2rem;
}
</style>