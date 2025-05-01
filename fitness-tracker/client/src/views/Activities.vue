<template>
  <div>
    <h2>Activities</h2>
    <button @click="showCreateForm = !showCreateForm">Create Activity</button>

    <div v-if="showCreateForm">
      <form @submit.prevent="createActivity">
        <input v-model="newActivity.name" placeholder="Activity Name" required />
        <input v-model="newActivity.duration" type="number" placeholder="Duration (mins)" required />
        <input v-model="newActivity.calories" type="number" placeholder="Calories Burned" required />
        <button type="submit">Create Activity</button>
      </form>
    </div>

    <div v-if="activities.length > 0">
      <h3>Activity List</h3>
      <ul>
        <li v-for="activity in activities" :key="activity._id">
          <span>{{ activity.name }} ({{ activity.duration }} mins)</span>
          <span>{{ activity.calories }} kcal</span>
          <button @click="deleteActivity(activity._id)">Delete</button>
          <button @click="editActivity(activity)">Edit</button>
        </li>
      </ul>
    </div>
    <div v-if="editingActivity">
      <h3>Edit Activity</h3>
      <form @submit.prevent="updateActivity">
        <input v-model="editingActivity.name" required />
        <input v-model="editingActivity.duration" type="number" required />
        <input v-model="editingActivity.calories" type="number" required />
        <button type="submit">Update Activity</button>
        <button @click="cancelEdit">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Activities',
  data() {
    return {
      activities: [],
      newActivity: {
        name: '',
        duration: '',
        calories: '',
      },
      showCreateForm: false,
      editingActivity: null,
    };
  },
  methods: {
    async fetchActivities() {
      try {
        const response = await axios.get('/api/activities');
        this.activities = response.data;
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    },
    async createActivity() {
      try {
        await axios.post('/api/activities', this.newActivity);
        this.fetchActivities(); // Refresh the list
        this.newActivity = { name: '', duration: '', calories: '' }; // Reset the form
      } catch (error) {
        console.error('Error creating activity:', error);
      }
    },
    async updateActivity() {
      try {
        await axios.put(`/api/activities/${this.editingActivity._id}`, this.editingActivity);
        this.fetchActivities(); // Refresh the list
        this.editingActivity = null; // Reset editing state
      } catch (error) {
        console.error('Error updating activity:', error);
      }
    },
    async deleteActivity(activityId) {
      try {
        await axios.delete(`/api/activities/${activityId}`);
        this.fetchActivities(); // Refresh the list
      } catch (error) {
        console.error('Error deleting activity:', error);
      }
    },
    editActivity(activity) {
      this.editingActivity = { ...activity };
    },
    cancelEdit() {
      this.editingActivity = null;
    },
  },
  created() {
    this.fetchActivities(); // Fetch activities on component load
  },
};
</script>

<style scoped>
/* Styling */
</style>