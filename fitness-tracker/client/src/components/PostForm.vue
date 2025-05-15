<template>
  <form @submit.prevent="submitActivity" class="space-y-6">
    <div>
      <label class="text-white">Activity Name</label>
      <input v-model="activityData.name" class="input" required />
    </div>
    <div>
      <label class="text-white">Duration (minutes)</label>
      <input v-model="activityData.duration" type="number" class="input" required />
    </div>
    <div>
      <label class="text-white">Exercise Type ID</label>
      <input v-model="activityData.type_id" type="number" class="input" required />
    </div>

    <TagFriends v-model="taggedFriends" />

    <button type="submit" class="bg-primary text-white px-4 py-2 rounded">
      Submit Activity
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import TagFriends from './TagFriends.vue';

const activityData = ref({
  name: '',
  duration: 0,
  type_id: null
});

const taggedFriends = ref([]);
const token = localStorage.getItem('token');

const submitActivity = async () => {
  try {
    const payload = {
      ...activityData.value,
      taggedFriends: taggedFriends.value
    };
    await axios.post('/api/activities', payload, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert('Activity posted successfully!');
  } catch (err) {
    console.error('Activity post failed:', err);
    alert('Error posting activity');
  }
};
</script>