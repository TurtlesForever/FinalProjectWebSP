<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <input v-model="user.username" placeholder="Username" required />
      <input v-model="user.password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import API from '@/services/api';

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
        this.$router.push('/');
      } catch (err) {
        console.error('Registration failed:', err);
        alert('Registration failed. Try again.');
      }
    },
  },
};
</script>