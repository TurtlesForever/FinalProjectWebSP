<template>
  <div class="form-container">
    <h2>Add New Exercise Type</h2>
    <form @submit.prevent="submitExerciseType">
      <label>
        Name:
        <input v-model="form.name" required />
      </label>
      <label>
        Category:
        <input v-model="form.category" required />
      </label>
      <button type="submit">Add Type</button>
    </form>
    <p v-if="successMsg" class="success">{{ successMsg }}</p>
  </div>
</template>

<script>
import API from '../api';

export default {
  name: 'AddExerciseType',
  data() {
    return {
      form: {
        name: '',
        category: '',
      },
      successMsg: '',
    };
  },
  methods: {
    async submitExerciseType() {
      try {
        await API.post('exercise-types', {
          method: 'POST',
          body: JSON.stringify(this.form),
        });
        this.successMsg = 'Exercise type added successfully!';
        this.form = { name: '', category: '' };
      } catch (e) {
        alert('Failed to add exercise type: ' + e.message);
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  margin: 20px;
  max-width: 400px;
  background-color: var(--color-bg);
  padding: 20px;
  border-radius: 8px;
}
label {
  display: block;
  margin-bottom: 10px;
  color: var(--color-text);
}
input {
  width: 100%;
  padding: 6px;
  margin-top: 4px;
  background-color: var(--color-input);
  border: 1px solid #ccc;
  border-radius: 4px;
  color: var(--color-text);
}
button {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: var(--color-accent);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.success {
  color: var(--color-success);
  margin-top: 10px;
}
</style>