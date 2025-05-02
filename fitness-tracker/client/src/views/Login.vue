<template>
  <div :class="['flex justify-center items-center min-h-screen', darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900']">
    <div class="form-container w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold mb-6 text-center">Login</h2>
      <form @submit.prevent="loginUser" class="form">
        <label class="text-lg mb-2 block">
          Username:
          <input v-model="user.username" placeholder="Username" required class="input-field" />
        </label>
        <label class="text-lg mb-2 block">
          Password:
          <input v-model="user.password" type="password" placeholder="Password" required class="input-field" />
        </label>
        <button type="submit" class="submit-btn w-full">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import API from '@/api';

const darkMode = ref(false);

const user = ref({ username: '', password: '' });

const loginUser = async () => {
  try {
    const res = await API.post('/users/login', user.value);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('username', user.value.username);
    this.$router.push('/');
  } catch (err) {
    console.error('Login failed:', err);
    alert('Login failed. Check your credentials.');
  }
};
</script>

<style scoped>
.input-field {
  width: 100%;
  padding: 0.75rem;
  background-color: #2a2a2a;
  color: white;
  border: 1px solid #444;
  border-radius: 4px;
  font-size: 1rem;
}

.submit-btn {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #0056b3;
}

.form-container {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.form label {
  display: block;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>