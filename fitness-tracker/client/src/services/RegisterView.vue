<template>
  <div class="form-container">
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <label>Username:
        <input v-model="username" required />
      </label>
      <label>Password:
        <input v-model="password" type="password" required />
      </label>
      <button type="submit" :disabled="loading">
        {{ loading ? 'Registering...' : 'Register' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const username = ref('');
const password = ref('');
const loading = ref(false);

const registerUser = async () => {
  loading.value = true;
  try {
    const response = await axios.post('/api/auth/register', {
      username: username.value,
      password: password.value,
    });
    localStorage.setItem('token', response.data.token);
    router.push('/'); // Redirect to the home page after successful registration
  } catch (err) {
    console.error('Registration failed:', err.message);
    alert('Registration failed. Please try again.');
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.form-container {
  margin: 2rem auto;
  max-width: 400px;
  padding: 1rem;
  background-color: var(--bg-secondary);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: var(--text-color);
}
label {
  display: block;
  margin-bottom: 1rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  background: var(--bg-input);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
}
button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:disabled {
  background: #888;
  cursor: not-allowed;
}
</style>