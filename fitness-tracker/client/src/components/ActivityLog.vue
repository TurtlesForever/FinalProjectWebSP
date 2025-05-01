<template>
  <div>
    <h2>Your Activities</h2>
    <div v-if="activities.length">
      <div v-for="activity in activities" :key="activity.id">
        <p>{{ activity.type }} - {{ activity.duration }} mins</p>
        <button @click="editActivity(activity)">Edit</button>
        <button @click="deleteActivity(activity.id)">Delete</button>
      </div>
    </div>
    <p v-else>Loading or no activities found.</p>
  </div>
</template>

<script>
import { useActivityStore } from '@/store/activityStore';

export default {
  data() {
    return {
      activities: [],
    };
  },
  methods: {
    async fetchActivities() {
      try {
        const activityStore = useActivityStore();
        await activityStore.fetchActivities(); // make sure your store has this action
        this.activities = activityStore.activities;
      } catch (error) {
        console.error('Failed to fetch activities:', error);
      }
    },
    async deleteActivity(id) {
      const activityStore = useActivityStore();
      await activityStore.deleteActivity(id);
      this.fetchActivities(); // Refresh after deletion
    },
    editActivity(activity) {
      // Add edit form logic here
      console.log('Edit activity:', activity);
    },
  },
  created() {
    this.fetchActivities();
  },
};
</script>