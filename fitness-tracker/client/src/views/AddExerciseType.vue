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
import API from '@/api'; // ✅ fixed import path

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
        await API.post('/api/exercise-types', this.form);
        this.successMsg = 'Exercise type added successfully!';
        this.form = { name: '', category: '' }; // ✅ fixed reset
      } catch (e) {
        alert('Failed to add exercise type: ' + e.message);
      }
    },
  },
};
</script>