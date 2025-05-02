<template>
  <div class="form-container">
    <h2>Login</h2>
    <form @submit.prevent="loginUser" class="form">
      <input v-model="user.username" placeholder="Username" required />
      <input v-model="user.password" type="password" placeholder="Password" required />
      <button type="submit" class="submit-btn">Login</button>
    </form>
  </div>
</template>

<script>
import API from '../api';

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
  padding: 2rem;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button.submit-btn {
  padding: 0.8rem 1.5rem;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button.submit-btn:hover {
  background-color: #007bff;
}
</style>