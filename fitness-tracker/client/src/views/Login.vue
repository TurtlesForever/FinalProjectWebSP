<template>
  <div class="form-container">
    <h2>Login</h2>
    <form @submit.prevent="loginUser" class="form">
      <label>
        Username:
        <input v-model="user.username" placeholder="Username" required aria-label="Username" />
      </label>
      <label>
        Password:
        <input v-model="user.password" type="password" placeholder="Password" required aria-label="Password" />
      </label>
      <button type="submit" class="submit-btn">Login</button>
    </form>
  </div>
</template>

<script>
import API from '@/api';

export default {
  name: 'Login',
  data() {
    return {
      user: { username: '', password: '' },
    };
  },
  methods: {
    async loginUser() {
      try {
        const res = await API.post('/users/login', this.user);
        localStorage.setItem('token', res.data.token);
        this.$router.push('/');
      } catch (err) {
        console.error('Login failed:', err);
        alert('Login failed. Check your credentials.');
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  margin: 2rem auto;
  max-width: 400px;
  padding: 1.5rem;
  background-color: var(--bg-secondary);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  color: var(--text-color);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  display: block;
}

input {
  width: 100%;
  padding: 0.75rem;
  background: var(--bg-input);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 1rem;
}

button.submit-btn {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--accent);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

button.submit-btn:hover {
  background-color: #007bff;
}
</style>