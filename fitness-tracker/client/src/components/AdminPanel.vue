<template>
  <div v-if="isAdmin">
    <h2>Admin Panel</h2>

    <!-- Add or Edit User Form -->
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

    <!-- Users Table -->
    <div>
      <h3>Users</h3>

      <!-- Loading Indicator -->
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

      <!-- Pagination Controls -->
      <div class="pagination">
        <button @click="prevPage" :disabled="page === 1">Prev</button>
        <span>Page {{ page }}</span>
        <button @click="nextPage" :disabled="page >= totalPages">Next</button>
      </div>
    </div>
  </div>

  <div v-else>
    <h2>Access Denied</h2>
    <p>You must be an admin to view this page.</p>
  </div>
</template>

<script>
import {
  db,
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
} from '@/firebaseConfig';
import bcrypt from 'bcryptjs';
import { useUserStore } from '@/store/userStore';

export default {
  data() {
    return {
      users: [],
      formUser: {
        username: '',
        password: '',
        role: 'user',
      },
      selectedUser: null,
      isAdmin: false,
      loading: false,
      page: 1,
      perPage: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.users.length / this.perPage);
    },
    paginatedUsers() {
      const start = (this.page - 1) * this.perPage;
      return this.users.slice(start, start + this.perPage);
    },
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        this.users = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
      } catch (err) {
        console.error('Error fetching users:', err);
      } finally {
        this.loading = false;
      }
    },
    async addUser() {
      try {
        const exists = this.users.some(
          (u) => u.username.toLowerCase() === this.formUser.username.toLowerCase()
        );
        if (exists) {
          alert('Username already exists.');
          return;
        }

        const { username, password, role } = this.formUser;
        const hashedPassword = await bcrypt.hash(password, 10);
        await addDoc(collection(db, 'users'), {
          username,
          password: hashedPassword,
          role,
          friends: [],
        });
        this.resetForm();
        await this.fetchUsers();
      } catch (err) {
        console.error('Error adding user:', err);
        alert('Failed to add user. Please try again later.');
      }
    },
    async updateUser() {
      try {
        const userRef = doc(db, 'users', this.selectedUser.id);
        await updateDoc(userRef, {
          username: this.formUser.username,
          role: this.formUser.role,
        });
        this.resetForm();
        await this.fetchUsers();
      } catch (err) {
        console.error('Error updating user:', err);
        alert('Failed to update user. Please try again later.');
      }
    },
    async deleteUser(userId) {
      if (confirm('Are you sure you want to delete this user?')) {
        try {
          const wasLastPage = this.page === this.totalPages;
          await deleteDoc(doc(db, 'users', userId));
          await this.fetchUsers();
          if (wasLastPage && this.page > this.totalPages) {
            this.page--; // Adjust page if the last user on the page was deleted
          }
        } catch (err) {
          console.error('Error deleting user:', err);
          alert('Failed to delete user. Please try again later.');
        }
      }
    },
    editUser(user) {
      this.selectedUser = user;
      this.formUser = {
        username: user.username,
        role: user.role,
        password: '', // Not editable
      };
    },
    cancelEdit() {
      this.resetForm();
    },
    resetForm() {
      this.selectedUser = null;
      this.formUser = {
        username: '',
        password: '',
        role: 'user',
      };
    },
    prevPage() {
      if (this.page > 1) this.page--;
    },
    nextPage() {
      if (this.page < this.totalPages) this.page++;
    },
    async checkAdmin() {
      const store = useUserStore();
      await store.fetchCurrentUser();
      this.isAdmin = store.currentUser?.role === 'admin';
    },
  },
  async created() {
    await this.checkAdmin();
    if (this.isAdmin) {
      await this.fetchUsers();
    }
  },
};
</script>

<style scoped>
table {
  margin-top: 1rem;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #ccc;
  padding: 0.5rem;
}
form {
  margin-bottom: 1rem;
}
button {
  margin-right: 0.5rem;
}
.pagination {
  margin-top: 1rem;
}
</style>