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
import { apiFetch } from '../api';

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
        await apiFetch('api/exercise-types', {
          method: 'POST',
          body: this.form,
        });
        this.successMsg = 'Exercise type added!';
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
}
label {
  display: block;
  margin-bottom: 10px;
}
.success {
  color: green;
  margin-top: 10px;
}
</style>