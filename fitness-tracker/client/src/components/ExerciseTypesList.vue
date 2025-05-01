<template>
  <div class="exercise-types-page">
    <h2>Exercise Types</h2>

    <ul v-if="exerciseTypes.length">
      <li v-for="type in exerciseTypes" :key="type._id">
        <strong>{{ type.name }}</strong> – Category: {{ type.category }}
      </li>
    </ul>

    <p v-else>No exercise types defined yet.</p>
  </div>
</template>

<script>
import { apiFetch } from '../api';

export default {
  name: 'ExerciseTypes',
  data() {
    return {
      exerciseTypes: [],
    };
  },
  async mounted() {
    try {
      this.exerciseTypes = await apiFetch('api/exercise-types');
    } catch (e) {
      alert('Failed to fetch exercise types: ' + e.message);
    }
  },
};
</script>

<style scoped>
.exercise-types-page {
  margin: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
</style>