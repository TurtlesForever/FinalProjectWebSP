<template>
  <div v-for="activity in activities" :key="activity.id">
    <p>{{ activity.type }} - {{ activity.duration }} mins</p>
    <button @click="editActivity(activity)">Edit</button>
    <button @click="deleteActivity(activity.id)">Delete</button>
  </div>
</template>

<script>
import { useActivityStore } from '@/store/activityStore';

export default {
  data() {
    return {
      activities: []
    };
  },
  methods: {
    async fetchActivities() {
      const activityStore = useActivityStore();
      this.activities = activityStore.activities;
    },
    async deleteActivity(id) {
      const activityStore = useActivityStore();
      await activityStore.deleteActivity(id);
    },
    editActivity(activity) {
      // Handle the editing logic, perhaps showing a form with the current data
      console.log('Edit activity:', activity);
    }
  },
  created() {
    this.fetchActivities();
  }
};
</script>