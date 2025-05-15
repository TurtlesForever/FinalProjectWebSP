<!-- TagFriends.vue -->
<template>
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
</template>

<script>
import { ref, watch } from 'vue';
import axios from 'axios';

export default {
  name: 'TagFriends',
  emits: ['update:friends'],
  setup(_, { emit }) {
    const searchQuery = ref('');
    const suggestions = ref([]);
    const isLoading = ref(false);
    const selectedIds = ref([]);

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
      if (!selectedIds.value.includes(friend.id)) {
        selectedIds.value.push(friend.id);
        emit('update:friends', selectedIds.value);
      }
      searchQuery.value = '';
    };

    return {
      searchQuery,
      suggestions,
      isLoading,
      onSelect,
    };
  }
};
</script>