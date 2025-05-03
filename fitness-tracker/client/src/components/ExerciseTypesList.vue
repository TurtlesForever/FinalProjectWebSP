<template>
  <div class="exercise-types-page min-h-screen flex flex-col items-center justify-center px-4 py-8">
    <h2 class="text-3xl font-semibold mb-6">Exercise Types</h2>

    <form @submit.prevent="addExerciseType" class="form w-full max-w-md flex gap-4 mb-8">
      <input
        v-model="newExerciseType.name"
        placeholder="New Exercise Type"
        required
        class="flex-1 p-3 bg-gray-800 text-white border border-gray-500 rounded"
      />
      <button
        type="submit"
        class="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>

    <div v-if="exerciseTypes.length" class="types-list w-full max-w-md space-y-3">
      <ul>
        <li
          v-for="type in exerciseTypes"
          :key="type._id"
          class="bg-gray-800 border border-gray-600 text-white p-3 rounded"
        >
          {{ type.name }}
        </li>
      </ul>
    </div>

    <p v-else class="text-gray-400 italic mt-6">No exercise types added yet.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import API from '@/api';

const exerciseTypes = ref([]);
const newExerciseType = ref({ name: '' });

const fetchExerciseTypes = async () => {
  try {
    const { data } = await API.get('/exercise-types');
    exerciseTypes.value = data;
  } catch (e) {
    alert('Error fetching exercise types: ' + e.message);
  }
};

const addExerciseType = async () => {
  const trimmedName = newExerciseType.value.name.trim();
  if (!trimmedName) {
    return alert('Please enter a valid exercise type name.');
  }

  try {
    await API.post('/exercise-types', { name: trimmedName });
    newExerciseType.value.name = '';
    await fetchExerciseTypes();
  } catch (e) {
    alert('Error adding exercise type: ' + e.message);
  }
};

onMounted(() => {
  fetchExerciseTypes();
});
</script>

<style scoped>
.exercise-types-page {
  background-color: #1e1e1e;
  color: #ffffff;
}
</style>