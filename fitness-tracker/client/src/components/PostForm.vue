<template>
  <section class="max-w-xl mx-auto p-4 bg-gray-800 text-white rounded-xl shadow-md">
    <h2 class="text-2xl font-bold mb-4">Post a New Workout</h2>

    <form @submit.prevent="submitPost" class="space-y-4">
      <div>
        <label class="block mb-1">Activity</label>
        <input
          v-model="activity"
          type="text"
          required
          class="w-full p-2 rounded bg-gray-700 text-white"
        />
      </div>

      <div>
        <label class="block mb-1">Duration (minutes)</label>
        <input
          v-model.number="duration"
          type="number"
          min="1"
          required
          class="w-full p-2 rounded bg-gray-700 text-white"
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

<script>
import axios from 'axios';
import FriendTagger from './FriendTagger.vue';

export default {
  name: 'PostForm',
  components: { FriendTagger },
  data() {
    return {
      activity: '',
      duration: 30,
      taggedFriendIds: [],
    };
  },
  methods: {
    updateTaggedFriends(ids) {
      this.taggedFriendIds = ids;
    },
    async submitPost() {
      try {
        const token = localStorage.getItem('token');
        await axios.post(
          '/api/posts',
          {
            activity: this.activity,
            duration: this.duration,
            taggedFriends: this.taggedFriendIds,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.activity = '';
        this.duration = 30;
        this.taggedFriendIds = [];
        alert('Workout posted!');
      } catch (err) {
        console.error('Post submission failed:', err);
        alert('Failed to submit post');
      }
    },
  },
};
</script>