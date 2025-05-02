<template>
  <div class="stats-container">
    <h2>Your Stats</h2>
    <div v-if="stats.length > 0">
      <ul>
        <li v-for="(stat, index) in stats" :key="index">
          <p><strong>Exercise:</strong> {{ stat.exerciseType }}</p>
          <p><strong>Date:</strong> {{ stat.date }}</p>
          <p><strong>Duration:</strong> {{ stat.duration }} minutes</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No stats available. Start adding activities!</p>
    </div>
  </div>
</template>

<script>
import API from '@/api';

export default {
  name: 'Stats',
  data() {
    return {
      stats: [],
      message: '',
      success: false,
    };
  },
  created() {
    this.fetchStats();
  },
  methods: {
    async fetchStats() {
      try {
        const response = await API.get('/stats');
        this.stats = response.data;
        this.message = 'Stats loaded successfully.';
        this.success = true;
      } catch (error) {
        console.error(error);
        this.message = 'Error loading stats.';
        this.success = false;
      }
    },
  },
};
</script>

<style scoped>
.stats-container {
  padding: 2rem;
  text-align: center;
  background-color: #1e1e1e;
  color: var(--text-color);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 1rem 0;
  background-color: #2a2a2a;
  padding: 1rem;
  border-radius: 4px;
}

li p {
  margin: 0.5rem 0;
}

.success {
  margin-top: 1rem;
  color: #4caf50;
}

.error {
  margin-top: 1rem;
  color: #ff5c5c;
}
</style>