<template>
  <div class="form-container">
    <h2>Add Exercise Type</h2>
    <form @submit.prevent="submitForm" class="form">
      <label>
        Name:
        <input v-model="exerciseType.name" placeholder="e.g. Swimming" required />
      </label>
      <label>
        Description:
        <textarea v-model="exerciseType.description" placeholder="Describe the exercise..." required></textarea>
      </label>
      <button type="submit" class="submit-btn">Submit</button>
    </form>

    <p v-if="message" :class="{ success: success, error: !success }">{{ message }}</p>
  </div>
</template>

<script>
import API from '@/api';

export default {
  name: 'AddExerciseType',
  data() {
    return {
      exerciseType: {
        name: '',
        description: '',
      },
      message: '',
      success: false,
    };
  },
  methods: {
    async submitForm() {
      if (!this.exerciseType.name || !this.exerciseType.description) {
        this.message = 'All fields are required.';
        this.success = false;
        return;
      }

      try {
        await API.post('/exercise-types', this.exerciseType);
        this.message = 'Exercise type added!';
        this.success = true;
        this.exerciseType = { name: '', description: '' };
      } catch (err) {
        console.error(err);
        this.message = 'Error adding exercise type.';
        this.success = false;
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  margin: 2rem auto;
  max-width: 500px;
  padding: 1.5rem;
  background-color: #1e1e1e;
  border-radius: 8px;
  color: var(--text-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  background-color: #2a2a2a;
  color: white;
  border: 1px solid #444;
  border-radius: 4px;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
</style>