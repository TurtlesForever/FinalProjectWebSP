<template>
  <div class="form-container">
    <h2>Add Activity</h2>
    <form @submit.prevent="submitForm" class="form">
      <label>
        Date:
        <input type="date" v-model="activity.date" required />
      </label>
      <label>
        Exercise Type:
        <input v-model="activity.exerciseType" placeholder="e.g. Running" required />
      </label>
      <label>
        Duration (minutes):
        <input type="number" v-model.number="activity.duration" min="1" required />
      </label>
      <button type="submit" class="submit-btn">Submit</button>
    </form>

    <p v-if="message" :class="{ success: success, error: !success }">{{ message }}</p>
  </div>
</template>

<script>
import API from '@/api';

export default {
  name: 'AddActivity',
  data() {
    return {
      activity: {
        date: '',
        exerciseType: '',
        duration: null,
      },
      message: '',
      success: false,
    };
  },
  methods: {
    async submitForm() {
      if (!this.activity.date || !this.activity.exerciseType || !this.activity.duration) {
        this.message = 'All fields are required.';
        this.success = false;
        return;
      }

      try {
        await API.post('/activities', this.activity);
        this.message = 'Activity added successfully!';
        this.success = true;
        this.activity = { date: '', exerciseType: '', duration: null };
      } catch (err) {
        console.error(err);
        this.message = 'Error adding activity.';
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

input {
  width: 100%;
  padding: 0.75rem;
  background-color: #2a2a2a;
  color: white;
  border: 1px solid #444;
  border-radius: 4px;
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