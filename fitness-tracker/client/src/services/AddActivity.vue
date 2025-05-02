<template>
  <div class="form-container">
    <h2>Add New Activity</h2>
    <form @submit.prevent="submitActivity">
      <label>
        Type:
        <input v-model="form.type" required />
      </label>
      <label>
        Duration (minutes):
        <input v-model.number="form.duration" type="number" required />
      </label>
      <label>
        Date:
        <input v-model="form.date" type="date" required />
      </label>
      <button type="submit">Add Activity</button>
    </form>
    <p v-if="successMsg" class="success">{{ successMsg }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import API from '@/api';

const form = ref({
  type: '',
  duration: null,
  date: '',
});

const successMsg = ref('');
const router = useRouter();

const submitActivity = async () => {
  try {
    await API.post('/activities', form.value);
    successMsg.value = 'Activity added successfully!';
    setTimeout(() => {
      router.push('/activities');
    }, 1000);
  } catch (err) {
    console.error('Error adding activity:', err.message);
    successMsg.value = 'Failed to add activity.';
  }
};
</script>

<style scoped>
.form-container {
  margin: 2rem auto;
  max-width: 400px;
  background-color: var(--color-bg);
  padding: 1.5rem;
  border-radius: 8px;
  color: var(--color-text);
}

label {
  display: block;
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  background-color: var(--color-input);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--text-color);
}

button {
  padding: 0.5rem 1rem;
  background-color: var(--color-accent);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.success {
  color: var(--color-success);
  margin-top: 1rem;
}
</style>