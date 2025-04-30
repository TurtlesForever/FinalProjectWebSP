<template>
  <form @submit.prevent="submitForm">
    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit">Register</button>
  </form>
</template>

<script>
import API from '@/services/apiService';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
  async submitForm() {
    try {
      await API.post('/users/register', {
        username: this.username,
        email: this.email,
        password: this.password,
      });
      // Handle successful registration (e.g., redirect or show a success message)
    } catch (error) {
      // Handle error (e.g., display error message to the user)
    }
  },
}
}
</script>&#8203;:contentReference[oaicite:24]{index=24}