<template>
  <div class="activities-page">
    <h2>Your Activities</h2>

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
import { apiFetch } from '../api';

export default {
  name: 'Activities',
  data() {
    return {
      activities: [],
    };
  },
  async mounted() {
    try {
      this.activities = await apiFetch('api/activities');
    } catch (e) {
      alert('Failed to fetch activities: ' + e.message);
    }
  },
  methods: {
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.activities-page {
  margin: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
</style>