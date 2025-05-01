<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <input v-model="user.username" placeholder="Username" required />
      <input v-model="user.password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
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