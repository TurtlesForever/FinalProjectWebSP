<template>
  <div class="exercise-types">
    <h2>Exercise Types</h2>

    <button @click="toggleForm" class="toggle-btn">
      {{ showCreateForm ? 'Cancel' : 'Create Exercise Type' }}
    </button>

    <form v-if="showCreateForm" @submit.prevent="createExerciseType" class="form">
      <input v-model="newExerciseType.name" placeholder="Exercise Type" required />
      <button type="submit" class="submit-btn" :disabled="isSubmitting">Create</button>
    </form>

    <!-- Loading indicator -->
    <div v-if="isSubmitting" class="loading">Loading...</div>

    <ul v-if="exerciseTypes.length" class="exercise-list">
      <li v-for="exercise in exerciseTypes" :key="exercise._id">
        {{ exercise.name }}
        <div class="btn-group">
          <button class="edit-btn" @click="editExerciseType(exercise)">Edit</button>
          <button class="delete-btn" @click="deleteExerciseType(exercise._id)">Delete</button>
        </div>
      </li>
    </ul>

    <form v-if="editing" @submit.prevent="updateExerciseType" class="form">
      <input v-model="editedExerciseType.name" required />
      <button type="submit" class="submit-btn" :disabled="isSubmitting">Update</button>
    </form>

    <!-- Error message -->
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import API from '@/api';

const exerciseTypes = ref([]);
const showCreateForm = ref(false);
const newExerciseType = ref({ name: '' });
const editedExerciseType = ref({ name: '', _id: '' });
const editing = ref(false);
const isSubmitting = ref(false);
const errorMessage = ref('');

const toggleForm = () => {
  showCreateForm.value = !showCreateForm.value;
  errorMessage.value = ''; // Clear error when toggling the form
};

const fetchExerciseTypes = async () => {
  try {
    isSubmitting.value = true;
    const res = await API.get('/exercise-types');
    exerciseTypes.value = res.data;
  } catch (err) {
    errorMessage.value = 'Error fetching exercise types.';
    console.error('Error fetching exercise types:', err);
  } finally {
    isSubmitting.value = false;
  }
};

const createExerciseType = async () => {
  try {
    isSubmitting.value = true;
    const res = await API.post('/exercise-types', newExerciseType.value);
    exerciseTypes.value.push(res.data);
    newExerciseType.value = { name: '' }; // Reset input field
    showCreateForm.value = false;
    errorMessage.value = ''; // Clear any previous errors
  } catch (err) {
    errorMessage.value = 'Error creating exercise type.';
    console.error('Error creating exercise type:', err);
  } finally {
    isSubmitting.value = false;
  }
};

const editExerciseType = (exercise) => {
  editedExerciseType.value = { ...exercise };
  editing.value = true;
  errorMessage.value = ''; // Clear error when editing
};

const updateExerciseType = async () => {
  try {
    isSubmitting.value = true;
    const res = await API.put(`/exercise-types/${editedExerciseType.value._id}`, editedExerciseType.value);
    const index = exerciseTypes.value.findIndex(ex => ex._id === res.data._id);
    exerciseTypes.value.splice(index, 1, res.data);
    editing.value = false;
    editedExerciseType.value = { name: '', _id: '' };
    errorMessage.value = ''; // Clear error on successful update
  } catch (err) {
    errorMessage.value = 'Error updating exercise type.';
    console.error('Error updating exercise type:', err);
  } finally {
    isSubmitting.value = false;
  }
};

const deleteExerciseType = async (id) => {
  try {
    isSubmitting.value = true;
    await API.delete(`/exercise-types/${id}`);
    exerciseTypes.value = exerciseTypes.value.filter(ex => ex._id !== id);
    errorMessage.value = ''; // Clear error on successful delete
  } catch (err) {
    errorMessage.value = 'Error deleting exercise type.';
    console.error('Error deleting exercise type:', err);
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(fetchExerciseTypes);
</script>

<style scoped>
.exercise-types {
  padding: 2rem;
  color: var(--text-color);
  background-color: #1e1e1e;
  border-radius: 8px;
}

.exercise-list {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.exercise-list li {
  background-color: #2a2a2a;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-group {
  display: flex;
  gap: 0.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

input {
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #555;
  background-color: #2a2a2a;
  color: var(--text-color);
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button.submit-btn {
  background-color: #1e90ff;
}

button.submit-btn:hover {
  background-color: #007bff;
}

button.toggle-btn {
  background-color: #6c63ff;
}

button.toggle-btn:hover {
  background-color: #574fd6;
}

button.edit-btn {
  background-color: #4caf50;
}

button.edit-btn:hover {
  background-color: #3d8b40;
}

button.delete-btn {
  background-color: #ff5c5c;
}

button.delete-btn:hover {
  background-color: #e64545;
}

.loading {
  margin-top: 1rem;
  color: #ffa500;
}

.error {
  margin-top: 1rem;
  color: #ff5c5c;
}
</style>