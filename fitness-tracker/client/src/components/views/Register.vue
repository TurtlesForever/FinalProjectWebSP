<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <div>
        <label for="username">Username:</label>
        <input v-model="user.username" id="username" type="text" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input v-model="user.email" id="email" type="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input v-model="user.password" id="password" type="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <p>Already have an account? <router-link to="/login">Login here</router-link></p>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  name: 'Register',
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('/api/users/register', this.user);
        if (response.status === 201) {
          this.$router.push('/login'); // Redirect to login after successful registration
        }
      } catch (error) {
        console.error('Error registering user:', error);
        alert('Registration failed, please try again.');
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>