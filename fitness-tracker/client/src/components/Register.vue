<template>
  <div :class="['flex justify-center items-center min-h-screen', darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900']">
    <div class="form-container w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold mb-6 text-center">Register</h2>
      <form @submit.prevent="registerUser" class="form">
        <label class="text-lg mb-2 block">
          Username:
          <input v-model="user.username" placeholder="Username" required class="input-field" />
        </label>
        <label class="text-lg mb-2 block">
          Password:
          <input v-model="user.password" type="password" placeholder="Password" required class="input-field" />
        </label>
        <button type="submit" class="submit-btn w-full">Register</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/userStore';
import API from '@/api';

const router = useRouter();
const userStore = useUserStore();

const darkMode = ref(true); // Keep dark mode consistent
const user = ref({ username: '', password: '' });

const registerUser = async () => {
  try {
    const res = await API.post('/users/register', user.value);

    localStorage.setItem('token', res.data.token);

    const newUser = {
      id: res.data.user._id,
      username: res.data.user.username,
      role: res.data.user.role,
    };
    userStore.setUser(newUser);

    router.push('/dashboard');
  } catch (err) {
    console.error('Registration failed:', err);
    alert('Registration failed. Try again.');
  }
};
</script>

<style scoped>
.input-field {
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

.form-container {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.form label {
  display: block;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>