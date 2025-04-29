<template>
  <div>
    <h2>Admin Panel</h2>
    <div>
      <h3>Add New User</h3>
      <form @submit.prevent="addUser">
        <input v-model="newUser.username" type="text" placeholder="Username" required />
        <input v-model="newUser.password" type="password" placeholder="Password" required />
        <select v-model="newUser.role">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Add User</button>
      </form>
    </div>

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
import { useUserStore } from '@/store/userStore';
import { db, collection, addDoc, doc, updateDoc, deleteDoc, getDocs } from '@/firebaseConfig';

export default {
  data() {
    return {
      users: [], // To store users fetched from Firestore
      newUser: {
        username: '',
        password: '',
        role: 'user',
      },
      selectedUser: null, // To store the user to be edited
    };
  },
  methods: {
    async fetchUsers() {
      const userCollection = collection(db, "users");
      const querySnapshot = await getDocs(userCollection);
      this.users = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    },
    async addUser() {
      const { username, password, role } = this.newUser;
      const hashedPassword = await bcrypt.hash(password, 10); // Hash password before saving
      await addDoc(collection(db, "users"), {
        username,
        password: hashedPassword,
        role,
        friends: [], // Empty friends list initially
      });
      this.newUser = { username: '', password: '', role: 'user' }; // Clear the form
      this.fetchUsers(); // Refresh users list
    },
    async updateUser() {
      if (this.selectedUser) {
        const userRef = doc(db, "users", this.selectedUser.id);
        await updateDoc(userRef, {
          username: this.selectedUser.username,
          role: this.selectedUser.role,
        });
        this.selectedUser = null; // Reset the selected user after update
        this.fetchUsers(); // Refresh users list
      }
    },
    async deleteUser(userId) {
      const userRef = doc(db, "users", userId);
      await deleteDoc(userRef);
      this.fetchUsers(); // Refresh users list
    },
    editUser(user) {
      this.selectedUser = { ...user }; // Copy user data to selectedUser for editing
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
/* You can add your styling here */
</style>