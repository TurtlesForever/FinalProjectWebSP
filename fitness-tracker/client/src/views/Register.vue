<template>
  <div class="register">
    <h2>Create an Account</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { useUserStore } from '@/store/userStore'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register() {
      const userStore = useUserStore();
      try {
        await userStore.register(this.email, this.password);
        this.$router.push('/dashboard');
      } catch (err) {
        this.error = err.message || 'Registration failed.';
      }
    }
  }
}
</script>

<style scoped>
/* Add your styling here */
</style>