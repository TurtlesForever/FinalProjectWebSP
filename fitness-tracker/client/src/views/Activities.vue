<template>
  <div>
    <h2>Activities</h2>
    <button @click="showCreateForm = !showCreateForm">Create Activity</button>

    <form v-if="showCreateForm" @submit.prevent="createActivity">
      <input v-model="newActivity.name" placeholder="Name" required />
      <input v-model="newActivity.duration" type="number" placeholder="Duration (mins)" required />
      <input v-model="newActivity.calories" type="number" placeholder="Calories" required />
      <button type="submit">Create</button>
    </form>

    <ul v-if="activities.length">
      <li v-for="activity in activities" :key="activity._id">
        {{ activity.name }} - {{ activity.duration }} mins, {{ activity.calories }} kcal
        <button @click="editActivity(activity)">Edit</button>
        <button @click="deleteActivity(activity._id)">Delete</button>
      </li>
    </ul>

    <form v-if="editingActivity" @submit.prevent="updateActivity">
      <input v-model="editingActivity.name" required />
      <input v-model="editingActivity.duration" type="number" required />
      <input v-model="editingActivity.calories" type="number" required />
      <button type="submit">Update</button>
      <button @click="cancelEdit">Cancel</button>
    </form>
  </div>
</template>

<script>
import API from '@/services/api';

export default {
  name: 'Activities',
  data() {
    return {
      activities: [],
      newActivity: { name: '', duration: '', calories: '' },
      editingActivity: null,
      showCreateForm: false,
    };
  },
  methods: {
    async fetchActivities() {
      const res = await API.get('/activities');
      this.activities = res.data;
    },
    async createActivity() {
      await API.post('/activities', this.newActivity);
      this.newActivity = { name: '', duration: '', calories: '' };
      this.fetchActivities();
    },
    async updateActivity() {
      await API.put(`/activities/${this.editingActivity._id}`, this.editingActivity);
      this.editingActivity = null;
      this.fetchActivities();
    },
    async deleteActivity(id) {
      await API.delete(`/activities/${id}`);
      this.fetchActivities();
    },
    editActivity(activity) {
      this.editingActivity = { ...activity };
    },
    cancelEdit() {
      this.editingActivity = null;
    },
  },
  created() {
    this.fetchActivities();
  },
};
</script>