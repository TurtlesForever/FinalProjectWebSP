<template>
  <div class="activities">
    <h2>Activities</h2>

    <button @click="toggleCreateForm" class="toggle-btn">
      {{ showCreateForm ? 'Cancel' : 'Add Activity' }}
    </button>

    <form v-if="showCreateForm" @submit.prevent="handleAddActivity" class="form">
      <input v-model="form.type" placeholder="Activity Type" required />
      <input v-model.number="form.duration" placeholder="Duration (minutes)" type="number" required />
      <input v-model.number="form.calories" placeholder="Calories Burned" type="number" required />
      <button type="submit" class="submit-btn">Create Activity</button>
    </form>

    <ul v-if="activities.length" class="activity-list">
      <li v-for="activity in activities" :key="activity.id">
        <strong>{{ activity.type }}</strong> — {{ activity.duration }} min, {{ activity.calories }} cal
        <br />
        <em>{{ formatDate(activity.date) }}</em>
        <div class="btn-group">
          <button @click="startEdit(activity)">Edit</button>
          <button @click="deleteActivity(activity.id)">Delete</button>
        </div>
      </li>
    </ul>

    <form v-if="editing" @submit.prevent="handleUpdateActivity" class="form">
      <h3>Edit Activity</h3>
      <input v-model="editForm.type" required />
      <input v-model.number="editForm.duration" type="number" required />
      <input v-model.number="editForm.calories" type="number" required />
      <button type="submit" class="submit-btn">Update Activity</button>
      <button type="button" @click="cancelEdit">Cancel</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useActivityStore } from '@/stores/activityStore';
import { useUserStore } from '@/stores/userStore';

const activityStore = useActivityStore();
const userStore = useUserStore();

const showCreateForm = ref(false);
const editing = ref(false);
const form = ref({ type: '', duration: '', calories: '' });
const editForm = ref({ id: '', type: '', duration: '', calories: '' });

const activities = computed(() => activityStore.activities);

onMounted(async () => {
  await activityStore.fetchActivities();
});

function toggleCreateForm() {
  showCreateForm.value = !showCreateForm.value;
}

async function handleAddActivity() {
  await activityStore.addActivity(
    userStore.currentUser?.id || 'anonymous',
    form.value.type,
    form.value.duration,
    form.value.calories
  );
  form.value = { type: '', duration: '', calories: '' };
  showCreateForm.value = false;
}

function startEdit(activity) {
  editing.value = true;
  editForm.value = { ...activity };
}

async function handleUpdateActivity() {
  const { id, type, duration, calories } = editForm.value;
  await activityStore.updateActivity(id, { type, duration, calories });
  editing.value = false;
  editForm.value = { id: '', type: '', duration: '', calories: '' };
}

function cancelEdit() {
  editing.value = false;
}

async function deleteActivity(id) {
  await activityStore.deleteActivity(id);
}

function formatDate(timestamp) {
  if (!timestamp) return '';
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleString();
}
</script>

<style scoped>
.activities {
  padding: 2rem;
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
  border: 1px solid #ccc;
}

.activity-list {
  margin-top: 2rem;
  list-style: none;
  padding: 0;
}

.activity-list li {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

.btn-group {
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
}

button {
  padding: 0.4rem 1rem;
  background-color: #ff5c5c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #ff4040;
}

button.submit-btn {
  background-color: #1e90ff;
}

button.submit-btn:hover {
  background-color: #007bff;
}

button.toggle-btn {
  background-color: #6c63ff;
  color: white;
}

button.toggle-btn:hover {
  background-color: #574fd6;
}
</style>