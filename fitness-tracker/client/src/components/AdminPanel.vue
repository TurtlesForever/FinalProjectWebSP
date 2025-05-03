<template>
  <div v-if="isAdmin" class="admin-page min-h-screen flex flex-col items-center px-4 py-8 text-white">
    <h2 class="text-3xl font-semibold mb-8">Admin Panel</h2>

    <section class="form-section w-full max-w-3xl bg-gray-800 p-6 rounded mb-8">
      <h3 class="text-2xl font-semibold mb-4">{{ selectedUser ? 'Edit User' : 'Add New User' }}</h3>
      <form @submit.prevent="selectedUser ? updateUser() : addUser" class="space-y-4">
        <input v-model="formUser.username" type="text" placeholder="Username" required class="w-full p-3 bg-gray-700 border border-gray-600 rounded" />
        
        <input 
          v-if="!selectedUser"
          v-model="formUser.password" 
          type="password" 
          placeholder="Password" 
          required 
          class="w-full p-3 bg-gray-700 border border-gray-600 rounded" 
        />
        
        <select v-model="formUser.role" class="w-full p-3 bg-gray-700 border border-gray-600 rounded">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <div class="form-buttons flex gap-4">
          <button type="submit" class="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">{{ selectedUser ? 'Update' : 'Add' }}</button>
          <button type="button" @click="cancelEdit" v-if="selectedUser" class="w-full py-2 bg-gray-600 text-white rounded hover:bg-gray-700">Cancel</button>
        </div>
      </form>
    </section>

    <section class="users-section w-full max-w-3xl">
      <h3 class="text-2xl font-semibold mb-4">Users</h3>

      <div v-if="loading" class="text-center text-gray-400">Loading users...</div>

      <table v-if="!loading" class="w-full table-auto bg-gray-800 text-white rounded-lg">
        <thead>
          <tr>
            <th class="p-4">Username</th>
            <th class="p-4">Role</th>
            <th class="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in paginatedUsers" :key="user.id" class="border-b border-gray-600">
            <td class="p-4">{{ user.username }}</td>
            <td class="p-4">{{ user.role }}</td>
            <td class="p-4 flex gap-2">
              <button @click="editUser(user)" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Edit</button>
              <button @click="deleteUser(user.id)" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="pagination flex justify-between mt-4 text-white">
        <button @click="prevPage" :disabled="page === 1" class="py-2 px-4 bg-gray-600 rounded hover:bg-gray-700">Prev</button>
        <span>Page {{ page }}</span>
        <button @click="nextPage" :disabled="page >= totalPages" class="py-2 px-4 bg-gray-600 rounded hover:bg-gray-700">Next</button>
      </div>
    </section>
  </div>

  <div v-else class="no-access text-center py-8">
    <p class="text-lg text-gray-400">You do not have permission to view this page.</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import API from '@/api';

const users = ref([]);
const formUser = ref({ username: '', password: '', role: 'user' });
const selectedUser = ref(null);
const loading = ref(true);
const page = ref(1);
const pageSize = 5;

const isAdmin = computed(() => {
  return $store.state.user?.role === 'admin';
});

const paginatedUsers = computed(() => {
  const start = (page.value - 1) * pageSize;
  return users.value.slice(start, start + pageSize);
});

const totalPages = computed(() => {
  return Math.ceil(users.value.length / pageSize);
});

const fetchUsers = async () => {
  try {
    const { data } = await API.get('/users');
    users.value = data;
  } catch (e) {
    alert('Error fetching users');
  } finally {
    loading.value = false;
  }
};

const addUser = async () => {
  try {
    await API.post('/users', formUser.value);
    resetForm();
    await fetchUsers();
  } catch (e) {
    alert('Error adding user');
  }
};

const updateUser = async () => {
  try {
    await API.put(`/users/${selectedUser.value.id}`, formUser.value);
    resetForm();
    await fetchUsers();
  } catch (e) {
    alert('Error updating user');
  }
};

const deleteUser = async (userId) => {
  try {
    await API.delete(`/users/${userId}`);
    await fetchUsers();
  } catch (e) {
    alert('Error deleting user');
  }
};

const editUser = (user) => {
  selectedUser.value = user;
  formUser.value = { ...user, password: '' };
};

const cancelEdit = () => {
  resetForm();
};

const resetForm = () => {
  selectedUser.value = null;
  formUser.value = { username: '', password: '', role: 'user' };
};

const prevPage = () => {
  if (page.value > 1) page.value--;
};

const nextPage = () => {
  if (page.value < totalPages.value) page.value++;
};

onMounted(() => {
  if (isAdmin.value) fetchUsers();
});
</script>

<style scoped>
.admin-page {
  background-color: #1e1e1e;
  color: var(--text-color);
}
</style>