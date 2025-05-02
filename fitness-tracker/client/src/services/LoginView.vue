<template>
  <div class="form-container">
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <label>Username:
        <input v-model="username" required />
      </label>
      <label>Password:
        <input v-model="password" type="password" required />
      </label>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { apiFetch } from '@/services/apiFetch';

const router = useRouter();

const username = ref('');
const password = ref('');

const loginUser = async () => {
  try {
    const response = await apiFetch('auth/login', {
      method: 'POST',
      body: JSON.stringify({ username: username.value, password: password.value }),
    });
    localStorage.setItem('token', response.token);
    router.push('/'); // redirect to the home page after successful login
  } catch (err) {
    console.error('Login failed:', err.message);
    alert('Login failed. Please try again.');
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
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
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
}
.success {
  color: #66ff66;
  margin-top: 1rem;
}
</style>