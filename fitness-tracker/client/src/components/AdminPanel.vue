<template>
  <div v-if="isAdmin" class="admin-page">
    <h2>Admin Panel</h2>

    <section class="form-section">
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
        <div class="form-buttons">
          <button type="submit">{{ selectedUser ? 'Update' : 'Add' }}</button>
          <button type="button" @click="cancelEdit" v-if="selectedUser" class="cancel">Cancel</button>
        </div>
      </form>
    </section>

    <section class="users-section">
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
              <button @click="deleteUser(user.id)" class="danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="pagination">
        <button @click="prevPage" :disabled="page === 1">Prev</button>
        <span>Page {{ page }}</span>
        <button @click="nextPage" :disabled="page >= totalPages">Next</button>
      </div>
    </section>
  </div>

  <div v-else class="no-access">
    <p>You do not have permission to view this page.</p>
  </div>
</template>

<script>
import API from '@/api';

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
      return this.$store.state.user?.role === 'admin';
    },
    paginatedUsers() {
      const start = (this.page - 1) * this.pageSize;
      return this.users.slice(start, start + this.pageSize);
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
        const { data } = await API.get('/users');
        this.users = data;
      } catch {
        alert('Error fetching users');
      } finally {
        this.loading = false;
      }
    },
    async addUser() {
      try {
        await API.post('/users', this.formUser);
        this.resetForm();
        await this.fetchUsers();
      } catch {
        alert('Error adding user');
      }
    },
    async updateUser() {
      try {
        await API.put(`/users/${this.selectedUser.id}`, this.formUser);
        this.resetForm();
        await this.fetchUsers();
      } catch {
        alert('Error updating user');
      }
    },
    async deleteUser(userId) {
      try {
        await API.delete(`/users/${userId}`);
        await this.fetchUsers();
      } catch {
        alert('Error deleting user');
      }
    },
    editUser(user) {
      this.selectedUser = user;
      this.formUser = { ...user, password: '' };
    },
    cancelEdit() {
      this.resetForm();
    },
    resetForm() {
      this.selectedUser = null;
      this.formUser = { username: '', password: '', role: 'user' };
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
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #1e1e1e;
  color: var(--text-color);
  border-radius: 10px;
}

form {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  gap: 10px;
}

form input,
form select {
  padding: 0.5rem;
  background-color: var(--sidebar-bg);
  color: var(--text-color);
  border: 1px solid var(--text-color);
  border-radius: 4px;
}

.form-buttons {
  display: flex;
  gap: 10px;
}

.users-section table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.users-section th,
.users-section td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--sidebar-bg);
}

button {
  padding: 0.4rem 0.8rem;
  background-color: var(--link-color);
  color: var(--header-text);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3a8bde;
}

button.danger {
  background-color: #e53935;
}

button.danger:hover {
  background-color: #c62828;
}

button.cancel {
  background-color: #757575;
}

button.cancel:hover {
  background-color: #616161;
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

.no-access {
  text-align: center;
  padding: 3rem;
  color: var(--text-color);
  opacity: 0.8;
}
</style>