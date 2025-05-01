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

<script>
import API from '@/api';

export default {
  name: 'AddActivity',
  data() {
    return {
      form: {
        type: '',
        duration: null,
        date: '',
      },
      successMsg: '',
    };
  },
  methods: {
  async submitActivity() {
    try {
      await API.post('/api/exercise-types', this.form);
      this.successMsg = 'Activity added successfully!';
      this.form = { type: '', duration: null, date: '' };
    } catch (e) {
      alert('Failed to add activity: ' + e.message);
    }
  },
  }
}

</script>
import API from '@/services/api';

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