<template>
  <div>
    <h2>Activity Statistics</h2>
    <p>Total Activities: {{ totalActivities }}</p>
    <p>Total Duration: {{ totalDuration }} minutes</p>
    <p>Total Calories: {{ totalCalories }} kcal</p>
  </div>
</template>

<script>
import { useActivityStore } from '@/store/activityStore';

export default {
  computed: {
    totalActivities() {
      return this.activities.length;
    },
    totalDuration() {
      return this.activities.reduce((sum, activity) => sum + activity.duration, 0);
    },
    totalCalories() {
      return this.activities.reduce((sum, activity) => sum + activity.calories, 0);
    }
  },
  data() {
    return {
      activities: []
    };
  },
  methods: {
    async fetchActivities() {
      const activityStore = useActivityStore();
      this.activities = activityStore.activities;
    }
  },
  created() {
    this.fetchActivities();
  }
};
</script>

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