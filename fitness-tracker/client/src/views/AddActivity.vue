<template>
  <div :class="['add-activity-page min-h-screen p-6 flex flex-col items-center', darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900']">
    <h2 class="text-3xl font-bold mb-6">Add Activity</h2>

    <form @submit.prevent="submitActivity" class="w-full max-w-md space-y-4">
      <label class="block">
        <span class="text-sm font-medium mb-1 block">Activity Type</span>
        <v-select
          :options="exerciseTypeNames"
          v-model="activityType"
          placeholder="Select or type an activity type"
          :reduce="option => option"
          clearable
          class="w-full"
        />
      </label>

      <label class="block">
        <span class="text-sm font-medium mb-1 block">Duration (minutes)</span>
        <input
          type="number"
          v-model.number="duration"
          min="1"
          required
          class="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </label>

      <label class="block">
        <span class="text-sm font-medium mb-1 block">Date</span>
        <input
          type="date"
          v-model="date"
          required
          class="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </label>

      <button
        type="submit"
        class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
      >
        Add Activity
      </button>
    </form>

    <p v-if="errorMessage" class="mt-4 text-red-500">{{ errorMessage }}</p>
    <p v-if="successMessage" class="mt-4 text-green-500">{{ successMessage }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import API from '@/api';
import { useRouter } from 'vue-router';
import { useDarkModeStore } from '@/store/darkMode';

const darkModeStore = useDarkModeStore();
const darkMode = computed(() => darkModeStore.darkMode);

const router = useRouter();

const activityType = ref(null);
const duration = ref(null);
const date = ref(new Date().toISOString().substr(0, 10));
const errorMessage = ref('');
const successMessage = ref('');
const exerciseTypeNames = ref([]);

async function loadExerciseTypes() {
  try {
    const { data } = await API.get('/exercise-types');
    exerciseTypeNames.value = data.exerciseTypes.map(t => t.name);
  } catch (error) {
    console.error(error);
  }
}

async function submitActivity() {
  errorMessage.value = '';
  successMessage.value = '';

  if (!activityType.value || !duration.value || !date.value) {
    errorMessage.value = 'Please fill all fields.';
    return;
  }

  try {
    await API.post('/activities', {
      type: activityType.value,
      duration: duration.value,
      date: date.value,
    });
    successMessage.value = 'Activity added successfully.';
    setTimeout(() => router.push('/activities'), 1000);
  } catch (error) {
    errorMessage.value = 'Failed to add activity.';
  }
}

onMounted(() => {
  loadExerciseTypes();
});
</script>

<style scoped>
/* Tailwind styles */
</style>