<template>
  <div :class="['exercise-types-page min-h-screen p-6', darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900']">
    <h2 class="text-3xl font-bold mb-6">Exercise Types</h2>

    <router-link
      to="/add-exercise-type"
      class="inline-block mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
    >
      Add New Exercise Type
    </router-link>

    <ul>
      <li
        v-for="type in exerciseTypes"
        :key="type._id"
        class="exercise-type-item bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-lg p-4 mb-3 shadow-sm flex justify-between items-center"
      >
        <div>
          <p class="text-lg font-semibold">{{ type.name }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-300">{{ type.description }}</p>
        </div>
        <button
          @click="deleteExerciseType(type._id)"
          class="text-red-600 hover:text-red-800 focus:outline-none"
          aria-label="Delete exercise type"
        >
          ✕
        </button>
      </li>
    </ul>

    <p v-if="exerciseTypes.length === 0" class="text-center text-gray-500 dark:text-gray-400 italic">
      No exercise types found.
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import API from '@/api';
import { useDarkModeStore } from '@/stores/darkMode';

const darkModeStore = useDarkModeStore();
const darkMode = computed(() => darkModeStore.darkMode);

const exerciseTypes = ref([]);

async function loadExerciseTypes() {
  try {
    const { data } = await API.get('/exercise-types');
    exerciseTypes.value = data.exerciseTypes || [];
  } catch (error) {
    console.error(error);
  }
}

async function deleteExerciseType(id) {
  try {
    await API.delete(`/exercise-types/${id}`);
    exerciseTypes.value = exerciseTypes.value.filter(t => t._id !== id);
  } catch (error) {
    console.error('Failed to delete exercise type', error);
  }
}

onMounted(() => {
  loadExerciseTypes();
});
</script>

<style scoped>
/* Tailwind styles mostly */
</style>