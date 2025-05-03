<template>
  <div class="activities-page max-w-4xl mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
    <h2 class="text-3xl text-white font-semibold mb-8">Your Activities</h2>

    <form @submit.prevent="addActivity" class="activity-form flex flex-wrap gap-4 mb-8">
      <input v-model="newActivity.type" placeholder="Activity Type" required class="input-field" />
      <input v-model.number="newActivity.duration" type="number" placeholder="Duration (mins)" required class="input-field" />
      <input v-model="newActivity.date" type="date" required class="input-field" />
      <button type="submit" class="submit-button">Add Activity</button>
    </form>

    <ul v-if="activities.length" class="activity-list space-y-4">
      <li v-for="a in activities" :key="a._id" class="activity-item p-4 bg-gray-700 rounded-lg border-l-4 border-green-500">
        <strong class="text-white">{{ a.type }}</strong> – {{ a.duration }} mins ({{ formatDate(a.date) }})
      </li>
    </ul>

    <p v-else class="no-activities text-gray-400 text-center mt-8">No activities logged yet.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import API from '@/api';

const activities = ref([]);
const newActivity = ref({
  type: '',
  duration: null,
  date: new Date().toISOString().slice(0, 10),
});

const fetchActivities = async () => {
  try {
    const { data } = await API.get('/activities');
    activities.value = data;
  } catch (e) {
    alert('Failed to fetch activities: ' + e.message);
  }
};

const addActivity = async () => {
  try {
    await API.post('/activities', newActivity.value);
    newActivity.value = {
      type: '',
      duration: null,
      date: new Date().toISOString().slice(0, 10),
    };
    await fetchActivities();
  } catch (e) {
    alert('Failed to add activity: ' + e.message);
  }
};

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString();
};

onMounted(() => {
  fetchActivities();
});
</script>

<style scoped>
.activities-page {
  background-color: #1e1e1e;
  color: var(--text-color);
}

.input-field {
  padding: 0.75rem;
  background-color: #2a2a2a;
  border: 1px solid #444;
  border-radius: 4px;
  color: var(--text-color);
  flex: 1;
}

.submit-button {
  background-color: #6c63ff;
  color: white;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-button:hover {
  background-color: #574fd6;
}

.activity-item {
  background-color: #2a2a2a;
  border-left: 5px solid #4caf50;
  border-radius: 6px;
}

.activity-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.no-activities {
  text-align: center;
  opacity: 0.7;
}
</style>