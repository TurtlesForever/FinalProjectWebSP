<template>
  <div>
    <h2>Exercise Types</h2>
    <button @click="showCreateForm = !showCreateForm">Create Exercise Type</button>

    <div v-if="showCreateForm">
      <form @submit.prevent="createExerciseType">
        <input v-model="newExerciseType.name" placeholder="Exercise Type" required />
        <button type="submit">Create Exercise Type</button>
      </form>
    </div>

    <div v-if="exerciseTypes.length > 0">
      <h3>Exercise Type List</h3>
      <ul>
        <li v-for="exercise in exerciseTypes" :key="exercise._id">
          <span>{{ exercise.name }}</span>
          <button @click="deleteExerciseType(exercise._id)">Delete</button>
          <button @click="editExerciseType(exercise)">Edit</button>
        </li>
      </ul>
    </div>

    <div v-if="editingExerciseType">
      <h3>Edit Exercise Type</h3>
      <form @submit.prevent="updateExerciseType">
        <input v-model="editingExerciseType.name" required />
        <button type="submit">Update Exercise Type</button>
        <button @click="cancelEdit">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ExerciseTypes',
  data() {
    return {
      exerciseTypes: [],
      newExerciseType: {
        name: '',
      },
      showCreateForm: false,
      editingExerciseType: null,
    };
  },
  methods: {
    async fetchExerciseTypes() {
      try {
        const response = await axios.get('/api/exercise-types');
        this.exerciseTypes = response.data;
      } catch (error) {
        console.error('Error fetching exercise types:', error);
      }
    },
    async createExerciseType() {
      try {
        await axios.post('/api/exercise-types', this.newExerciseType);
        this.fetchExerciseTypes(); // Refresh the list
        this.newExerciseType = { name: '' }; // Reset the form
      } catch (error) {
        console.error('Error creating exercise type:', error);
      }
    },
    async updateExerciseType() {
      try {
        await axios.put(`/api/exercise-types/${this.editingExerciseType._id}`, this.editingExerciseType);
        this.fetchExerciseTypes(); // Refresh the list
        this.editingExerciseType = null; // Reset editing state
      } catch (error) {
        console.error('Error updating exercise type:', error);
      }
    },
    async deleteExerciseType(exerciseTypeId) {
      try {
        await axios.delete(`/api/exercise-types/${exerciseTypeId}`);
        this.fetchExerciseTypes(); // Refresh the list
      } catch (error) {
        console.error('Error deleting exercise type:', error);
      }
    },
    editExerciseType(exercise) {
      this.editingExerciseType = { ...exercise };
    },
    cancelEdit() {
      this.editingExerciseType = null;
    },
  },
  created() {
    this.fetchExerciseTypes(); // Fetch exercise types on component load
  },
};
</script>

<style scoped>
/* Styling */
</style>