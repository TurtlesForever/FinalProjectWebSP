<template>
  <div :class="['login-page min-h-screen flex flex-col justify-center items-center px-4', darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900']">
    <h2 class="text-3xl font-bold mb-6">Login</h2>

    <form @submit.prevent="submitLogin" class="w-full max-w-sm space-y-4">
      <label class="block">
        <span class="text-sm font-medium mb-1 block">Username</span>
        <input
          type="text"
          v-model.trim="username"
          required
          class="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </label>

      <label class="block">
        <span class="text-sm font-medium mb-1 block">Password</span>
        <input
          type="password"
          v-model="password"
          required
          class="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </label>

      <button
        type="submit"
        class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
      >
        Login
      </button>
    </form>

    <p v-if="errorMessage" class="mt-4 text-red-500">{{ errorMessage }}</p>

    <p class="mt-4">
      Don't have an account?
      <router-link to="/register" class="text-indigo-600 dark:text-indigo-300 hover:underline">Register here</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import API from '@/api';
import { useRouter } from 'vue-router';
import { useDarkModeStore } from '@/stores/darkMode';

const darkModeStore = useDarkModeStore();
const darkMode = computed(() => darkModeStore.darkMode);

const router = useRouter();
const username = ref('');
const password = ref('');
const errorMessage = ref('');

async function submitLogin() {
  errorMessage.value = '';

  try {
    const { data } = await API.post('/auth/login', {
      username: username.value,
      password: password.value,
    });
    localStorage.setItem('token', data.token);
    router.push('/');
  } catch (error) {
    errorMessage.value = 'Invalid username or password.';
  }
}
</script>

<style scoped>
/* Tailwind styles */
</style>