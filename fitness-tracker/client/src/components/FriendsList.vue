<template>
  <div class="friends-activities-container min-h-screen flex flex-col items-center justify-center px-4 py-8">
    <h2 class="text-3xl font-semibold mb-6">Friends' Activities</h2>

    <div v-if="friendsActivities.length > 0" class="w-full max-w-2xl space-y-4">
      <div
        v-for="(activity, index) in friendsActivities"
        :key="index"
        class="activity-card bg-gray-800 p-4 rounded shadow"
      >
        <p><strong>Friend:</strong> {{ activity.friendName }}</p>
        <p><strong>Activity:</strong> {{ activity.exerciseType }}</p>
        <p><strong>Date:</strong> {{ activity.date }}</p>
        <p><strong>Duration:</strong> {{ activity.duration }} minutes</p>
      </div>
    </div>

    <div v-else class="text-lg text-gray-400 mt-6">
      <p>No activities from friends available.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import API from '@/api';

const friendsActivities = ref([]);
const message = ref('');
const success = ref(false);

const fetchFriendsActivities = async () => {
  try {
    const response = await API.get('/friends-activities');
    friendsActivities.value = response.data;
    message.value = "Friends' activities loaded successfully.";
    success.value = true;
  } catch (error) {
    console.error('Error loading friends\' activities:', error);
    message.value = "Error loading friends' activities.";
    success.value = false;
  }
};

onMounted(() => {
  fetchFriendsActivities();
});
</script>

<style scoped>
.friends-activities-container {
  background-color: #1e1e1e;
  color: #ffffff;
}

.activity-card {
  background-color: #2a2a2a;
  border: 1px solid #3c3c3c;
}

.activity-card p {
  margin-bottom: 0.5rem;
}
</style>