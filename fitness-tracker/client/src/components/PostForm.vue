<template>
  <section
    :class="[
      'max-w-xl mx-auto p-4 rounded-xl shadow-md',
      darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    ]"
  >
    <h2 class="text-2xl font-bold mb-4">Post a New Workout</h2>

    <form @submit.prevent="submitPost" class="space-y-4">
      <div>
        <label class="block mb-1">Activity</label>
        <input
          v-model="activity"
          type="text"
          required
          :class="inputClasses"
        />
      </div>

      <div>
        <label class="block mb-1">Duration (minutes)</label>
        <input
          v-model.number="duration"
          type="number"
          min="1"
          required
          :class="inputClasses"
        />
      </div>

      <div>
        <label class="block mb-1">Tag Friends</label>
        <FriendTagger @update:friends="updateTaggedFriends" />
      </div>

      <div class="text-right">
        <button
          type="submit"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
        >
          Submit
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import FriendTagger from './FriendTagger.vue';
import { useDarkModeStore } from '@/stores/darkMode';

const store = useDarkModeStore();
const darkMode = computed(() => store.darkMode);

const activity = ref('');
const duration = ref(30);
const taggedFriendIds = ref([]);

const inputClasses = computed(() =>
  `w-full p-2 rounded ${darkMode.value ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}`
);

function updateTaggedFriends(ids) {
  taggedFriendIds.value = ids;
}

async function submitPost() {
  try {
    const token = localStorage.getItem('token');
    await axios.post(
      '/api/posts',
      {
        activity: activity.value,
        duration: duration.value,
        taggedFriends: taggedFriendIds.value,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    activity.value = '';
    duration.value = 30;
    taggedFriendIds.value = [];
    alert('Workout posted!');
  } catch (err) {
    console.error('Post submission failed:', err);
    alert('Failed to submit post');
  }
}
</script>