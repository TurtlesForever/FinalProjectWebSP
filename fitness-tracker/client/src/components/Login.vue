<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
    <router-link to="/register">Don't have an account? Register here</router-link>
  </div>
</template>

<script>
import { useUserStore } from '@/store/userStore';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async handleLogin() {
      const store = useUserStore();
      const success = await store.login(this.email, this.password);

      if (success) {
        this.$router.push('/dashboard');
      } else {
        this.errorMessage = 'Invalid email or password';
      }
    }
  }
};
</script>

<style scoped>
/* Add your styling here */
</style>

<router-link to="/register">Don’t have an account? Register here</router-link>