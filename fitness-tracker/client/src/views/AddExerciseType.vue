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
      <button type="submit" class="submit-btn" :disabled="isSubmitting">
        Submit
      </button>
    </form>

    <!-- Loading Indicator -->
    <div v-if="isSubmitting" class="loading">Submitting...</div>

    <!-- Message Feedback -->
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
      isSubmitting: false, // Track form submission state
    };
  },
  methods: {
    async submitForm() {
      if (!this.exerciseType.name || !this.exerciseType.description) {
        this.message = 'All fields are required.';
        this.success = false;
        return;
      }

      this.isSubmitting = true;
      try {
        await API.post('/exercise-types', this.exerciseType);
        this.message = 'Exercise type added!';
        this.success = true;
        this.exerciseType = { name: '', description: '' }; // Clear fields
        setTimeout(() => {
          this.message = ''; // Clear message after 3 seconds
        }, 3000);
      } catch (err) {
        console.error(err);
        this.message = 'Error adding exercise type.';
        this.success = false;
        setTimeout(() => {
          this.message = ''; // Clear message after 3 seconds
        }, 3000);
      } finally {
        this.isSubmitting = false;
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

.submit-btn:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

.success {
  margin-top: 1rem;
  color: #4caf50;
}

.error {
  margin-top: 1rem;
  color: #ff5c5c;
}

.loading {
  margin-top: 1rem;
  color: #ffa500;
}
</style>