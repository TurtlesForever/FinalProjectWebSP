<template>
  <div class="friends-activities-container">
    <h2>Friends' Activities</h2>
    <div v-if="friendsActivities.length > 0">
      <ul>
        <li v-for="(activity, index) in friendsActivities" :key="index">
          <p><strong>Friend:</strong> {{ activity.friendName }}</p>
          <p><strong>Activity:</strong> {{ activity.exerciseType }}</p>
          <p><strong>Date:</strong> {{ activity.date }}</p>
          <p><strong>Duration:</strong> {{ activity.duration }} minutes</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No activities from friends available.</p>
    </div>
  </div>
</template>

<script>
import API from '@/api';

export default {
  name: 'FriendsActivities',
  data() {
    return {
      friendsActivities: [],
      message: '',
      success: false,
    };
  },
  created() {
    this.fetchFriendsActivities();
  },
  methods: {
    async fetchFriendsActivities() {
      try {
        const response = await API.get('/friends-activities');
        this.friendsActivities = response.data;
        this.message = 'Friends\' activities loaded successfully.';
        this.success = true;
      } catch (error) {
        console.error(error);
        this.message = 'Error loading friends\' activities.';
        this.success = false;
      }
    },
  },
};
</script>

<style scoped>
.friends-activities-container {
  padding: 2rem;
  text-align: center;
  background-color: #1e1e1e;
  color: var(--text-color);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 1rem 0;
  background-color: #2a2a2a;
  padding: 1rem;
  border-radius: 4px;
}

li p {
  margin: 0.5rem 0;
}

.success {
  margin-top: 1rem;
  color: #4caf50;
}

.error {
  margin-top: 1rem;
  color: #ff5c5c;
}
</style>