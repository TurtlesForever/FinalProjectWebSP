<template>
  <div class="form-container">
    <h2>Register</h2>
    <form @submit.prevent="registerUser" class="form">
      <label>
        Username:
        <input v-model="user.username" placeholder="Username" required />
      </label>
      <label>
        Password:
        <input v-model="user.password" type="password" placeholder="Password" required />
      </label>
      <button type="submit" class="submit-btn">Register</button>
    </form>
  </div>
</template>

<script>
import API from '@/api';

export default {
  name: 'Register',
  data() {
    return {
      user: { username: '', password: '' },
    };
  },
  methods: {
    async registerUser() {
      try {
        const res = await API.post('/users/register', this.user);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', this.user.username);
        this.$router.push('/');
      } catch (err) {
        console.error('Registration failed:', err);
        alert('Registration failed. Try again.');
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
  background-color: #1e1e1e;
  border-radius: 8px;
  color: var(--text-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
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
</style>