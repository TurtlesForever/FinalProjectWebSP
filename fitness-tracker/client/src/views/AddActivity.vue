<template>
  <div class="form-container">
    <h2>Add New Activity</h2>
    <form @submit.prevent="submitActivity">
      <label>
        Name:
        <input v-model="form.name" required />
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

<script>
import API from '@/api';

export default {
  name: 'AddActivity',
  data() {
    return {
      form: {
        name: '',
        duration: null,
        date: '',
      },
      successMsg: '',
    };
  },
  methods: {
    async submitActivity() {
      try {
        await API.post('/activities', this.form);
        this.successMsg = 'Activity added successfully!';
        this.form = { name: '', duration: null, date: '' };
      } catch (e) {
        alert('Failed to add activity: ' + e.message);
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