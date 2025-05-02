<template>
  <div class="dashboard-page">
    <h2>Dashboard</h2>

    <div class="statistics">
      <div class="stat-item">
        <h3>Total Activities</h3>
        <p>{{ totalActivities }}</p>
      </div>

      <div class="stat-item">
        <h3>Total Duration</h3>
        <p>{{ totalDuration }} mins</p>
      </div>
    </div>

    <div class="recent-activities">
      <h3>Recent Activities</h3>
      <ul v-if="activities.length">
        <li v-for="activity in activities" :key="activity._id">
          <div><strong>{{ activity.type }}</strong></div>
          <div>{{ activity.duration }} mins</div>
          <div>{{ formatDate(activity.date) }}</div>
        </li>
      </ul>
      <p v-else>No recent activities.</p>
    </div>
  </div>
</template>

<script>
import API from '@/api';

export default {
  name: 'Dashboard',
  data() {
    return {
      activities: [],
      totalActivities: 0,
      totalDuration: 0,
    };
  },
  async mounted() {
    await this.fetchDashboardData();
  },
  methods: {
  async fetchDashboardData() {
    try {
      const { data } = await API.get('/activities/dashboard');
      this.activities = data.activities;
      this.totalActivities = data.totalActivities;
      this.totalDuration = data.totalDuration;
    } catch (e) {
      alert('Error fetching dashboard data: ' + e.message);
      }
    },
    formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.dashboard-page {
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 2rem;
}

.statistics {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.stat-item {
  background-color: var(--sidebar-bg);
  padding: 1rem;
  border-radius: 4px;
  width: 48%;
}

.recent-activities ul {
  list-style-type: none;
  padding: 0;
}

.recent-activities li {
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem;
  background-color: var(--link-color);
  color: var(--header-text);
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #3a8bde;
}
</style>