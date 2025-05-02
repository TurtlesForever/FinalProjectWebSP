<template>
  <div>
    <h2>Your Friends' Activities</h2>

    <div v-if="loading">
      <p>Loading friends and activities...</p>
    </div>

    <div v-else>
      <div v-if="friends.length">
        <div v-for="friend in friends" :key="friend.id" class="friend-block">
          <h3>{{ friend.username }}</h3>
          <div v-if="friend.activities?.length">
            <div v-for="activity in friend.activities" :key="activity.id" class="activity-entry">
              <p>{{ activity.type }} - {{ activity.duration }} mins</p>
            </div>
          </div>
          <div v-else>
            <p>No activities logged.</p>
          </div>
        </div>
      </div>
      
      <div v-else>
        <p>You have no friends or no activities logged.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/store/userStore';

export default {
  data() {
    return {
      friends: [],
      loading: true,
      errorMessage: '',
    };
  },
  async created() {
    try {
      const userStore = useUserStore();
      await userStore.fetchFriends();
      this.friends = userStore.friends;
    } catch (error) {
      console.error('Failed to fetch friends:', error);
      this.errorMessage = 'Sorry, we couldn\'t load your friends\' activities. Please try again later.';
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.friend-block {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #f6f6f6;
  border-radius: 8px;
}

.activity-entry {
  margin-left: 1rem;
}

p {
  font-size: 1rem;
  color: #333;
}

.error-message {
  color: red;
  font-weight: bold;
}
</style>