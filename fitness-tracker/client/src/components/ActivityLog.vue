<template>
  <div class="activity-log-page">
    <h2>Your Activity Log</h2>
    <ul v-if="activities.length">
      <li v-for="activity in activities" :key="activity._id">
        <div class="activity-item">
          <div><strong>{{ activity.type }}</strong></div>
          <div>{{ activity.duration }} mins</div>
          <div>{{ formatDate(activity.date) }}</div>
        </div>
      </li>
    </ul>
    <p v-else>No activity logs available.</p>
  </div>
</template>

<script>
import API from '@/api';

export default {
  name: 'ActivityLog',
  data() {
    return {
      activities: [],
    };
  },
  async mounted() {
    await this.fetchActivities();
  },
  methods: {
    async fetchActivities() {
      try {
        const { data } = await API.get('/activities');
        this.activities = data;
      } catch (e) {
        alert('Error fetching activity logs: ' + e.message);
      }
    },
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.activity-log-page {
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 2rem;
}

.activity-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid var(--sidebar-bg);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
}

p {
  color: var(--text-color);
}
</style>