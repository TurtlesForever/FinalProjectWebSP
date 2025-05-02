<template>
  <div>
    <h2>Your Activities</h2>
    
    <!-- Loading State -->
    <p v-if="loading">Loading your activities...</p>
    
    <!-- Display Activities -->
    <div v-if="activities.length && !loading">
      <div v-for="activity in activities" :key="activity.id">
        <p>{{ activity.type }} - {{ activity.duration }} mins</p>
        <button @click="editActivity(activity)">Edit</button>
        <button @click="deleteActivity(activity.id)">Delete</button>
      </div>
    </div>

    <!-- No Activities Found -->
    <p v-else-if="!loading">No activities found.</p>

    <!-- Error State -->
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { useActivityStore } from '@/store/activityStore';

export default {
  data() {
    return {
      activities: [],
      loading: false,
      errorMessage: '',
    };
  },
  methods: {
    async fetchActivities() {
      this.loading = true;
      this.errorMessage = '';  // Clear any previous errors

      try {
        const activityStore = useActivityStore();
        await activityStore.fetchActivities(); // Fetch activities from the store
        this.activities = activityStore.activities;
      } catch (error) {
        this.errorMessage = 'Failed to fetch activities. Please try again later.';
        console.error('Failed to fetch activities:', error);
      } finally {
        this.loading = false;  // Set loading to false after fetching
      }
    },
    async deleteActivity(id) {
      try {
        const activityStore = useActivityStore();
        await activityStore.deleteActivity(id); // Call store to delete activity
        this.fetchActivities(); // Refresh the activities list
      } catch (error) {
        this.errorMessage = 'Failed to delete activity. Please try again later.';
        console.error('Failed to delete activity:', error);
      }
    },
    editActivity(activity) {
      // Placeholder for the edit logic (e.g., show a form or navigate to edit page)
      console.log('Edit activity:', activity);
    },
  },
  created() {
    this.fetchActivities();  // Fetch activities on component creation
  },
};
</script>

<style scoped>
/* Simple styling for the activities display */
div {
  margin: 1rem 0;
}

button {
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.error-message {
  color: red;
  font-weight: bold;
}

p {
  margin-bottom: 1rem;
}
</style>