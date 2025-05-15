<template>
  <div class="mb-6">
    <label class="block text-white mb-2">Tag Friends</label>
    <o-autocomplete
      v-model="selectedFriend"
      :data="friendOptions"
      :async="true"
      field="name"
      placeholder="Start typing a friend's name..."
      :loading="loading"
      @typing="fetchSuggestions"
      @select="addFriend"
    />
    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="friend in modelValue"
        :key="friend.id"
        class="inline-block bg-secondary text-black px-3 py-1 rounded-full text-sm"
      >
        {{ friend.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import axios from 'axios';

const props = defineProps({ modelValue: Array });
const emit = defineEmits(['update:modelValue']);

const selectedFriend = ref(null);
const friendOptions = ref([]);
const loading = ref(false);

const fetchSuggestions = async (query) => {
  if (!query) return;
  loading.value = true;
  try {
    const { data } = await axios.get(`/api/friends/search?q=${encodeURIComponent(query)}`);
    friendOptions.value = data;
  } catch (err) {
    console.error('Error fetching suggestions', err);
  } finally {
    loading.value = false;
  }
};

const addFriend = (friend) => {
  if (!props.modelValue.some((f) => f.id === friend.id)) {
    emit('update:modelValue', [...props.modelValue, friend]);
  }
};
</script>