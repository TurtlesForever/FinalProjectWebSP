<template>
  <div>
    <h2>Your Friends' Activities</h2>
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
      <p>Loading or no friends to show.</p>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/store/userStore';

export default {
  data() {
    return {
      friends: []
    };
  },
  async created() {
    try {
      const userStore = useUserStore();
      await userStore.fetchFriends();
      this.friends = userStore.friends;
    } catch (error) {
      console.error('Failed to fetch friends:', error);
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
</style>