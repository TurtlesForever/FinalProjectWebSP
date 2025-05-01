<template>
  <div>
    <h2>Exercise Types</h2>
    <button @click="showCreateForm = !showCreateForm">Create Exercise Type</button>

    <form v-if="showCreateForm" @submit.prevent="createExerciseType">
      <input v-model="newExerciseType.name" placeholder="Exercise Type" required />
      <button type="submit">Create</button>
    </form>

    <ul v-if="exerciseTypes.length">
      <li v-for="exercise in exerciseTypes" :key="exercise._id">
        {{ exercise.name }}
        <button @click="editExerciseType(exercise)">Edit</button>
        <button @click="deleteExerciseType(exercise._id)">Delete</button>
      </li>
    </ul>

    <form v-if="editingExerciseType" @submit.prevent="updateExerciseType">
      <input v-model="editingExerciseType.name" required />
      <button type="submit">Update</button>
      <button @click="cancelEdit">Cancel</button>
    </form>
  </div>
</template>

<script>
import API from '@/api';

export default {
  name: 'ExerciseTypes',
  data() {
    return {
      exerciseTypes: [],
      newExerciseType: { name: '' },
      editingExerciseType: null,
      showCreateForm: false,
    };
  },
  methods: {
    async fetchExerciseTypes() {
      const res = await API.get('/exercise-types');
      this.exerciseTypes = res.data;
    },
    async createExerciseType() {
      await API.post('/exercise-types', this.newExerciseType);
      this.newExerciseType.name = '';
      this.fetchExerciseTypes();
    },
    async updateExerciseType() {
      await API.put(`/exercise-types/${this.editingExerciseType._id}`, this.editingExerciseType);
      this.editingExerciseType = null;
      this.fetchExerciseTypes();
    },
    async deleteExerciseType(id) {
      await API.delete(`/exercise-types/${id}`);
      this.fetchExerciseTypes();
    },
    editExerciseType(type) {
      this.editingExerciseType = { ...type };
    },
    cancelEdit() {
      this.editingExerciseType = null;
    },
  },
  created() {
    this.fetchExerciseTypes();
  },
};
</script>