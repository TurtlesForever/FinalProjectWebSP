<template>
  <div class="activities-page">
    <h2>Your Activities</h2>

    <form @submit.prevent="addActivity">
      <input v-model="newActivity.type" placeholder="Activity Type" required />
      <input v-model.number="newActivity.duration" type="number" placeholder="Duration (mins)" required />
      <input v-model="newActivity.date" type="date" required />
      <button type="submit">Add Activity</button>
    </form>

    <ul v-if="activities.length">
      <li v-for="a in activities" :key="a._id">
        <strong>{{ a.type }}</strong> – {{ a.duration }} mins 
        ({{ formatDate(a.date) }})
      </li>
    </ul>

    <p v-else>No activities logged yet.</p>
  </div>
</template>

<script>
import API from '../api';

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
  margin: 20px;
  background-color: var(--bg-color);
  color: var(--text-color);
}

form {
  margin-bottom: 20px;
}

form input {
  margin-right: 10px;
  padding: 0.5rem;
  background-color: var(--sidebar-bg);
  color: var(--text-color);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
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