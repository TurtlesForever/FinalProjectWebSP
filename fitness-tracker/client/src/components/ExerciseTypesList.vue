<template>
  <div class="exercise-types-page">
    <h2>Exercise Types</h2>

    <form @submit.prevent="addExerciseType">
      <input v-model="newType.name" placeholder="Name" required />
      <input v-model="newType.category" placeholder="Category" required />
      <button type="submit">Add Exercise Type</button>
    </form>

    <ul v-if="exerciseTypes.length">
      <li v-for="type in exerciseTypes" :key="type._id">
        <strong>{{ type.name }}</strong> – Category: {{ type.category }}
      </li>
    </ul>

    <p v-else>No exercise types defined yet.</p>
  </div>
</template>

<script>
import { apiFetch, apiPost } from '../api';

export default {
  name: 'ExerciseTypes',
  data() {
    return {
      exerciseTypes: [],
      newType: { name: '', category: '' },
    };
  },
  async mounted() {
    await this.fetchTypes();
  },
  methods: {
    async fetchTypes() {
      try {
        this.exerciseTypes = await apiFetch('api/exercise-types');
      } catch (e) {
        alert('Failed to fetch exercise types: ' + e.message);
      }
    },
    async addExerciseType() {
      try {
        await apiPost('api/exercise-types', this.newType);
        this.newType = { name: '', category: '' };
        await this.fetchTypes();
      } catch (e) {
        alert('Failed to add exercise type: ' + e.message);
      }
    },
  },
};
</script>

<style scoped>
.exercise-types-page {
  margin: 20px;
}
form {
  margin-bottom: 20px;
}
form input {
  margin-right: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
</style>