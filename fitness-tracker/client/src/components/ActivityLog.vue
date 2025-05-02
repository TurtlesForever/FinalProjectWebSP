<template>
  <div class="activity-log-page">
    <h2>Your Activity Log</h2>

    <ul v-if="activities.length" class="activity-list">
      <li v-for="activity in activities" :key="activity._id" class="activity-item">
        <div class="activity-type"><strong>{{ activity.type }}</strong></div>
        <div class="activity-details">
          <span>{{ activity.duration }} mins</span>
          <span>{{ formatDate(activity.date) }}</span>
        </div>
      </li>
    </ul>

    <p v-else class="no-activity">No activity logs available.</p>
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
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #1e1e1e;
  color: var(--text-color);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

.activity-list {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
}

.activity-item {
  background-color: #2a2a2a;
  border-left: 5px solid #03a9f4;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.activity-type {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.activity-details {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  color: #ccc;
}

.no-activity {
  text-align: center;
  opacity: 0.7;
  margin-top: 2rem;
}
</style>