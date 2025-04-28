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