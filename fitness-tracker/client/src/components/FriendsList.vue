<template>
  <div>
    <h2>Your Friends' Activities</h2>
    <div v-for="friend in friends" :key="friend.id">
      <h3>{{ friend.username }}</h3>
      <div v-for="activity in friend.activities" :key="activity.id">
        <p>{{ activity.type }} - {{ activity.duration }} mins</p>
      </div>
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
  methods: {
    async fetchFriends() {
      const userStore = useUserStore();
      await userStore.fetchFriends();
      this.friends = userStore.friends;
    }
  },
  created() {
    this.fetchFriends();
  }
};
</script>