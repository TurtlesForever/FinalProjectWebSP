<template>
  <div>
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
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.username }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button @click="editUser(user)">Edit</button>
              <button @click="deleteUser(user.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
    };
  },
  methods: {
    async fetchUsers() {
      const querySnapshot = await getDocs(collection(db, 'users'));
      this.users = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    },
    async addUser() {
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
    },
    async updateUser() {
      const userRef = doc(db, 'users', this.selectedUser.id);
      await updateDoc(userRef, {
        username: this.formUser.username,
        role: this.formUser.role,
      });
      this.resetForm();
      await this.fetchUsers();
    },
    async deleteUser(userId) {
      await deleteDoc(doc(db, 'users', userId));
      await this.fetchUsers();
    },
    editUser(user) {
      this.selectedUser = user;
      this.formUser = {
        username: user.username,
        role: user.role,
        password: '', // not editable
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
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
table {
  margin-top: 1rem;
  border-collapse: collapse;
  width: 100%;
}
td, th {
  border: 1px solid #ccc;
  padding: 0.5rem;
}
form {
  margin-bottom: 1rem;
}
button {
  margin-right: 0.5rem;
}
</style>