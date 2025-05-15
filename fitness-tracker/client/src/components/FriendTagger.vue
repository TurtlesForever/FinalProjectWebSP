<template>
  <o-autocomplete
    v-model="selectedFriend"
    :data="suggestions"
    :search="searchFriends"
    label="name"
    placeholder="Tag a friend"
    clearable
  />
</template>

<o-autocomplete
  v-model="taggedFriend"
  :data="filteredFriends"
  field="username"
  placeholder="Tag a friend"
  :loading="isLoading"
  @typing="searchFriends"
/>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const selectedFriend = ref(null)
const suggestions = ref([])

async function searchFriends(query) {
  if (!query) {
    suggestions.value = []
    return
  }
  try {
    const res = await axios.get(`/api/friends/search?q=${encodeURIComponent(query)}`)
    suggestions.value = res.data // expect array of { id, name }
  } catch (err) {
    console.error('Failed to fetch friend suggestions:', err)
    suggestions.value = []
  }
}
</script>