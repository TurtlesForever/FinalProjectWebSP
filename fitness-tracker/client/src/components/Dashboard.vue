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
        <li v-for="activity in activities" :key="activity._id" class="activity-card">
          <div><strong>{{ activity.type }}</strong></div>
          <div>{{ activity.duration }} mins</div>
          <div class="activity-date">{{ formatDate(activity.date) }}</div>
        </li>
      </ul>
      <p v-else class="empty-message">No recent activities.</p>
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
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 10px;
}

h2 {
  margin-bottom: 2rem;
  font-size: 1.75rem;
}

.statistics {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  flex: 1 1 45%;
  background-color: var(--sidebar-bg);
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
  border: 1px solid var(--text-color);
}

.recent-activities {
  margin-top: 2rem;
}

.recent-activities h3 {
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding: 0;
}

.activity-card {
  background-color: var(--sidebar-bg);
  border: 1px solid var(--text-color);
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.activity-date {
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.8;
}

.empty-message {
  opacity: 0.8;
  font-style: italic;
}
</style>