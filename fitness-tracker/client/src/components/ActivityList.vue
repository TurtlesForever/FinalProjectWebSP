<template>
  <div>
    <h2>Your Activities</h2>
    <ul>
      <li v-for="a in activities" :key="a._id">
        {{ a.type }} - {{ a.duration }} mins ({{ new Date(a.date).toLocaleDateString() }})
      </li>
    </ul>
  </div>
</template>

<script>
import { apiFetch } from '../api';

export default {
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
};
</script>