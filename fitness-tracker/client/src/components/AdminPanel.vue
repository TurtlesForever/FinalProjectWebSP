<template>
  <div v-if="isAdmin">
    <h2>Admin Panel</h2>

    <div>
      <h3>{{ selectedUser ? 'Edit User' : 'Add New User' }}</h3>
      <form @submit.prevent="selectedUser ? updateUser() : addUser()">
        <input v-model="formUser.username" type="text" placeholder="Username" required />
        <input
          v-if="!selectedUser"
          v-model="formUser.password"
          type="password"
          placeholder="Password"
          required
        />
        <select v-model="formUser.role">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">{{ selectedUser ? 'Update' : 'Add' }}</button>
        <button type="button" @click="cancelEdit" v-if="selectedUser">Cancel</button>
      </form>
    </div>

    <div>
      <h3>Users</h3>

      <div v-if="loading">Loading users...</div>

      <table v-if="!loading">
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in paginatedUsers" :key="user.id">
            <td>{{ user.username }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button @click="editUser(user)">Edit</button>
              <button @click="deleteUser(user.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="pagination">
        <button @click="prevPage" :disabled="page === 1">Prev</button>
        <span>Page {{ page }}</span>
        <button @click="nextPage" :disabled="page >= totalPages">Next</button>
      </div>
    </div>
  </div>

  <div v-else>
    <p>You do not have permission to view this page.</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useUserStore } from '../stores/userStore';
import { apiFetch, apiPost, apiDelete } from '../api';

export default {
  name: 'AdminPanel',
  data() {
    return {
      users: [],
      formUser: {
        username: '',
        password: '',
        role: 'user',
      },
      selectedUser: null,
      loading: true,
      page: 1,
      pageSize: 5,
    };
  },
  computed: {
    isAdmin() {
      return this.$store.state.user.role === 'admin';
    },
    paginatedUsers() {
      const startIndex = (this.page - 1) * this.pageSize;
      return this.users.slice(startIndex, startIndex + this.pageSize);
    },
    totalPages() {
      return Math.ceil(this.users.length / this.pageSize);
    },
  },
  async mounted() {
    if (this.isAdmin) {
      await this.fetchUsers();
    }
  },
  methods: {
    async fetchUsers() {
      try {
        this.users = await apiFetch('api/users');
        this.loading = false;
      } catch (error) {
        alert('Error fetching users');
      }
    },
    async addUser() {
      try {
        await apiPost('api/users', this.formUser);
        this.formUser = { username: '', password: '', role: 'user' };
        await this.fetchUsers();
      } catch (error) {
        alert('Error adding user');
      }
    },
    async updateUser() {
      try {
        await apiPost(`api/users/${this.selectedUser.id}`, this.formUser);
        this.selectedUser = null;
        this.formUser = { username: '', password: '', role: 'user' };
        await this.fetchUsers();
      } catch (error) {
        alert('Error updating user');
      }
    },
    editUser(user) {
      this.selectedUser = user;
      this.formUser = { ...user };
    },
    cancelEdit() {
      this.selectedUser = null;
      this.formUser = { username: '', password: '', role: 'user' };
    },
    async deleteUser(userId) {
      try {
        await apiDelete(`api/users/${userId}`);
        await this.fetchUsers();
      } catch (error) {
        alert('Error deleting user');
      }
    },
    prevPage() {
      if (this.page > 1) this.page--;
    },
    nextPage() {
      if (this.page < this.totalPages) this.page++;
    },
  },
};
</script>

<style scoped>
.admin-page {
  margin: 20px;
  background-color: var(--bg-color);
  color: var(--text-color);
}

form input,
form select {
  margin-bottom: 10px;
  padding: 0.5rem;
  background-color: var(--sidebar-bg);
  color: var(--text-color);
}

button {
  padding: 0.5rem;
  background-color: var(--link-color);
  color: var(--header-text);
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #3a8bde;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
</style>