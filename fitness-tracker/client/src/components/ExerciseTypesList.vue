<template>
  <div class="exercise-types-page">
    <h2>Exercise Types</h2>

    <form @submit.prevent="addExerciseType" class="form">
      <input
        v-model="newExerciseType.name"
        placeholder="New Exercise Type"
        required
      />
      <button type="submit">Add</button>
    </form>

    <div v-if="exerciseTypes.length" class="types-list">
      <ul>
        <li v-for="type in exerciseTypes" :key="type._id">
          <span>{{ type.name }}</span>
        </li>
      </ul>
    </div>
    <p v-else class="empty-message">No exercise types added yet.</p>
  </div>
</template>

<script>
import API from '@/api';

export default {
  name: 'ExerciseTypesList',
  data() {
    return {
      exerciseTypes: [],
      newExerciseType: {
        name: '',
      },
    };
  },
  async mounted() {
    await this.fetchExerciseTypes();
  },
  methods: {
    async fetchExerciseTypes() {
      try {
        const { data } = await API.get('/exercise-types');
        this.exerciseTypes = data;
      } catch (e) {
        alert('Error fetching exercise types: ' + e.message);
      }
    },
    async addExerciseType() {
      const trimmedName = this.newExerciseType.name.trim();
      if (!trimmedName) {
        return alert('Please enter a valid exercise type name.');
      }

      try {
        await API.post('/exercise-types', { name: trimmedName });
        this.newExerciseType.name = '';
        await this.fetchExerciseTypes();
      } catch (e) {
        alert('Error adding exercise type: ' + e.message);
      }
    },
  },
};
</script>

<style scoped>
.exercise-types-page {
  background-color: var(--bg-color);
  color: var(--text-color);
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 10px;
}

h2 {
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
}

.form {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 2rem;
}

input {
  flex: 1;
  padding: 0.5rem;
  background-color: var(--sidebar-bg);
  color: var(--text-color);
  border: 1px solid var(--text-color);
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  background-color: var(--link-color);
  color: var(--header-text);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3a8bde;
}

.types-list ul {
  list-style: none;
  padding: 0;
}

.types-list li {
  padding: 0.75rem 1rem;
  background-color: var(--sidebar-bg);
  border: 1px solid var(--text-color);
  border-radius: 4px;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.empty-message {
  opacity: 0.8;
  font-style: italic;
}
</style>