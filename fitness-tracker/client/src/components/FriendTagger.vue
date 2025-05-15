<!-- FriendTagger.vue -->
<template>
  <section>
    <o-autocomplete
      v-model="searchQuery"
      :data="suggestions"
      field="name"
      :loading="isLoading"
      @select="onSelect"
      placeholder="Tag friends..."
      :open-on-focus="true"
      class="text-black dark:text-white"
    />
    <div class="mt-2 text-sm text-gray-300" v-if="selectedFriends.length">
      <span
        v-for="friend in selectedFriends"
        :key="friend.id"
        class="mr-2 mb-1 inline-block bg-gray-700 px-2 py-1 rounded-full"
      >
        {{ friend.name }}
        <button
          type="button"
          @click="removeFriend(friend.id)"
          class="ml-1 text-red-400 hover:text-red-600"
        >
          ×
        </button>
      </span>
    </div>
  </section>
</template>

<script>
import { ref, watch } from 'vue';
import axios from 'axios';

export default {
  name: 'FriendTagger',
  emits: ['update:friends'],
  setup(_, { emit }) {
    const searchQuery = ref('');
    const suggestions = ref([]);
    const selectedFriends = ref([]);
    const isLoading = ref(false);

    watch(searchQuery, async (newVal) => {
      if (newVal.trim().length < 2) {
        suggestions.value = [];
        return;
      }

      isLoading.value = true;
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`/api/search?q=${encodeURIComponent(newVal)}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        suggestions.value = res.data;
      } catch (err) {
        console.error('Search error:', err);
      } finally {
        isLoading.value = false;
      }
    });

    const onSelect = (friend) => {
      if (!selectedFriends.value.find(f => f.id === friend.id)) {
        selectedFriends.value.push(friend);
        emit('update:friends', selectedFriends.value.map(f => f.id));
      }
      searchQuery.value = '';
    };

    const removeFriend = (id) => {
      selectedFriends.value = selectedFriends.value.filter(f => f.id !== id);
      emit('update:friends', selectedFriends.value.map(f => f.id));
    };

    return {
      searchQuery,
      suggestions,
      selectedFriends,
      isLoading,
      onSelect,
      removeFriend,
    };
  }
};
</script>