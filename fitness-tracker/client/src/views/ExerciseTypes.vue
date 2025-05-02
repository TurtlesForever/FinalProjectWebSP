<template>
  <div>
    <h2>Exercise Types</h2>
    <button @click="showCreateForm = !showCreateForm" class="toggle-btn">Create Exercise Type</button>

    <form v-if="showCreateForm" @submit.prevent="createExerciseType" class="form">
      <input v-model="newExerciseType.name" placeholder="Exercise Type" required />
      <button type="submit" class="submit-btn">Create</button>
    </form>

    <ul v-if="exerciseTypes.length">
      <li v-for="exercise in exerciseTypes" :key="exercise._id">
        {{ exercise.name }}
        <button @click="editExerciseType(exercise)">Edit</button>
        <button @click="deleteExerciseType(exercise._id)">Delete</button>
      </li>
    </ul>

    <form v-if="editing" @submit.prevent="updateExerciseType">
      <input v-model="editedExerciseType.name" placeholder="Edit Exercise Type" required />
      <button type="submit" class="submit-btn">Update</button>
    </form>
  </div>
</template>

<script>
import API from '@../api';

export default {
  name: 'ExerciseTypes',
  data() {
    return {
      exerciseTypes: [],
      showCreateForm: false,
      newExerciseType: { name: '' },
      editing: false,
      editedExerciseType: { name: '', _id: '' },
    };
  },
  async created() {
    await this.fetchExerciseTypes();
  },
  methods: {
    async fetchExerciseTypes() {
      try {
        const response = await API.get('/exercise-types');
        this.exerciseTypes = response.data;
      } catch (err) {
        console.error('Error fetching exercise types:', err);
      }
    },
    async createExerciseType() {
      try {
        const response = await API.post('/exercise-types', this.newExerciseType);
        this.exerciseTypes.push(response.data);
        this.newExerciseType.name = '';
        this.showCreateForm = false;
      } catch (err) {
        console.error('Error creating exercise type:', err);
      }
    },
    async editExerciseType(exercise) {
      this.editedExerciseType = { ...exercise };
      this.editing = true;
    },
    async updateExerciseType() {
      try {
        const response = await API.put(`/exercise-types/${this.editedExerciseType._id}`, this.editedExerciseType);
        const index = this.exerciseTypes.findIndex(ex => ex._id === response.data._id);
        this.exerciseTypes.splice(index, 1, response.data);
        this.editing = false;
        this.editedExerciseType = { name: '', _id: '' };
      } catch (err) {
        console.error('Error updating exercise type:', err);
      }
    },
    async deleteExerciseType(id) {
      try {
        await API.delete(`/exercise-types/${id}`);
        this.exerciseTypes = this.exerciseTypes.filter(ex => ex._id !== id);
      } catch (err) {
        console.error('Error deleting exercise type:', err);
      }
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button.submit-btn {
  padding: 0.8rem 1.5rem;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button.submit-btn:hover {
  background-color: #007bff;
}

button {
  padding: 0.4rem 1rem;
  margin: 0.5rem;
  background-color: #ff5c5c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #ff4040;
}
</style>