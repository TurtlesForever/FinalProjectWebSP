<template>
  <div :class="['add-exercise-type-page min-h-screen p-6 flex flex-col items-center', darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900']">
    <h2 class="text-3xl font-bold mb-6">Add Exercise Type</h2>

    <form @submit.prevent="submitExerciseType" class="w-full max-w-md space-y-4">
      <label class="block">
        <span class="text-sm font-medium mb-1 block">Name</span>
        <input
          type="text"
          v-model.trim="name"
          required
          class="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </label>

      <label class="block">
        <span class="text-sm font-medium mb-1 block">Description</span>
        <textarea
          v-model.trim="description"
          rows="4"
          class="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        ></textarea>
      </label>

      <button
        type="submit"
        class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
      >
        Add Exercise Type
      </button>
    </form>

    <p v-if="errorMessage" class="mt-4 text-red-500">{{ errorMessage }}</p>
    <p v-if="successMessage" class="mt-4 text-green-500">{{ successMessage }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import API from '@/api';
import { useRouter } from 'vue-router';
import { useDarkModeStore } from '@/store/darkMode';

const darkModeStore = useDarkModeStore();
const darkMode = computed(() => darkModeStore.darkMode);

const router = useRouter();

const name = ref('');
const description = ref('');
const errorMessage = ref('');
const successMessage = ref('');

async function submitExerciseType() {
  errorMessage.value = '';
  successMessage.value = '';

  if (!name.value) {
    errorMessage.value = 'Name is required.';
    return;
  }

  try {
    await API.post('/exercise-types', {
      name: name.value,
      description: description.value,
    });
    successMessage.value = 'Exercise type added successfully.';
    setTimeout(() => router.push('/exercise-types'), 1000);
  } catch (error) {
    errorMessage.value = 'Failed to add exercise type.';
  }
}
</script>

<style scoped>
/* Tailwind */
</style>