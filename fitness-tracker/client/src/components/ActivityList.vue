<template>
  <div class="activities-page">
    <h2>Your Activities</h2>

    <form @submit.prevent="addActivity" class="activity-form">
      <input v-model="newActivity.type" placeholder="Activity Type" required />
      <input v-model.number="newActivity.duration" type="number" placeholder="Duration (mins)" required />
      <input v-model="newActivity.date" type="date" required />
      <button type="submit">Add Activity</button>
    </form>

    <ul v-if="activities.length" class="activity-list">
      <li v-for="a in activities" :key="a._id" class="activity-item">
        <strong>{{ a.type }}</strong> – {{ a.duration }} mins ({{ formatDate(a.date) }})
      </li>
    </ul>

    <p v-else class="no-activities">No activities logged yet.</p>
  </div>
</template>

<script>
import API from '@/api';

export default {
  name: 'Activities',
  data() {
    return {
      activities: [],
      newActivity: {
        type: '',
        duration: null,
        date: new Date().toISOString().slice(0, 10),
      },
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
        alert('Failed to fetch activities: ' + e.message);
      }
    },
    async addActivity() {
      try {
        await API.post('/activities', this.newActivity);
        this.newActivity = {
          type: '',
          duration: null,
          date: new Date().toISOString().slice(0, 10),
        };
        await this.fetchActivities();
      } catch (e) {
        alert('Failed to add activity: ' + e.message);
      }
    },
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.activities-page {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #1e1e1e;
  border-radius: 8px;
  color: var(--text-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

.activity-form {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.activity-form input {
  flex: 1;
  padding: 0.75rem;
  background-color: #2a2a2a;
  border: 1px solid #444;
  border-radius: 4px;
  color: var(--text-color);
}

.activity-form button {
  background-color: #6c63ff;
  color: white;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.activity-form button:hover {
  background-color: #574fd6;
}

.activity-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.activity-item {
  background-color: #2a2a2a;
  padding: 1rem;
  margin-bottom: 1rem;
  border-left: 5px solid #4caf50;
  border-radius: 6px;
}

.no-activities {
  text-align: center;
  opacity: 0.7;
}
</style>