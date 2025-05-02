<template>
  <div class="exercise-types-page">
    <h2>Exercise Types</h2>

    <form @submit.prevent="addExerciseType">
      <input
        v-model="newExerciseType.name"
        placeholder="New Exercise Type"
        required
      />
      <button type="submit">Add Exercise Type</button>
    </form>

    <ul v-if="exerciseTypes.length">
      <li v-for="type in exerciseTypes" :key="type._id">
        {{ type.name }}
      </li>
    </ul>
    <p v-else>No exercise types added yet.</p>
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
  padding: 2rem;
}

form input {
  padding: 0.5rem;
  margin-right: 0.5rem;
  background-color: var(--sidebar-bg);
  color: var(--text-color);
  border: 1px solid var(--text-color);
  border-radius: 4px;
}

button {
  padding: 0.5rem;
  background-color: var(--link-color);
  color: var(--header-text);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3a8bde;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
}
</style>