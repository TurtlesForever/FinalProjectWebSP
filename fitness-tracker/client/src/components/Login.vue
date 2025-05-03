<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input v-model="username" id="username" type="text" required />
      
      <label for="password">Password:</label>
      <input v-model="password" id="password" type="password" required />
      
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');
const errorMessage = ref('');

// Fake login authentication (You would replace this with actual API logic)
const login = () => {
  if (username.value === 'admin' && password.value === 'password') {
    localStorage.setItem('token', 'fake-jwt-token'); // Store token
    localStorage.setItem('username', username.value); // Store username
    router.push('/dashboard');
  } else {
    errorMessage.value = 'Invalid credentials. Please try again.';
  }
};
</script>

<style scoped>
/* Style the login form */
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
}
</style>