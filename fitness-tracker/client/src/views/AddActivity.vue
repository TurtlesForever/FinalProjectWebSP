<template>
  <div :class="['flex justify-center items-center min-h-screen', darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900']">
    <div class="form-container w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold mb-6 text-center">Add Activity</h2>

      <!-- Dark Mode Toggle Button -->
      <button @click="toggleDarkMode" class="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-md">
        Toggle Dark Mode
      </button>

      <form @submit.prevent="submitForm" class="form">
        <label class="text-lg mb-2 block">
          Date:
          <input type="date" v-model="activity.date" required class="input-field" />
        </label>
        <label class="text-lg mb-2 block">
          Exercise Type:
          <input v-model="activity.exerciseType" placeholder="e.g. Running" required class="input-field" />
        </label>
        <label class="text-lg mb-2 block">
          Duration (minutes):
          <input type="number" v-model.number="activity.duration" min="1" required class="input-field" />
        </label>
        <button type="submit" class="submit-btn w-full" :disabled="isSubmitting">
          Submit
        </button>
      </form>

      <p v-if="message" :class="{ success: success, error: !success }" class="mt-4">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import API from '@/api';

const darkMode = ref(false);

const activity = ref({ date: '', exerciseType: '', duration: null });
const message = ref('');
const success = ref(false);
const isSubmitting = ref(false);  // Track submission state

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
};

const submitForm = async () => {
  // Form validation
  if (!activity.value.date || !activity.value.exerciseType || !activity.value.duration) {
    message.value = 'All fields are required.';
    success.value = false;
    return;
  }

  // Prevent future dates
  const currentDate = new Date();
  const activityDate = new Date(activity.value.date);
  if (activityDate > currentDate) {
    message.value = 'Please select a valid date.';
    success.value = false;
    return;
  }

  try {
    isSubmitting.value = true;
    await API.post('/activities', activity.value);
    message.value = 'Activity added successfully!';
    success.value = true;

    // Delay before resetting the form for better user experience
    setTimeout(() => {
      activity.value = { date: '', exerciseType: '', duration: null };
    }, 1000);  // Delay before clearing form
  } catch (err) {
    console.error(err);
    message.value = 'Error adding activity.';
    success.value = false;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.input-field {
  width: 100%;
  padding: 0.75rem;
  background-color: #2a2a2a;
  color: white;
  border: 1px solid #444;
  border-radius: 4px;
  font-size: 1rem;
}

.submit-btn {
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-btn:hover {
  background-color: #45a049;
}

.success {
  margin-top: 1rem;
  color: #4caf50;
}

.error {
  margin-top: 1rem;
  color: #ff5c5c;
}

.form-container {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.form label {
  display: block;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>