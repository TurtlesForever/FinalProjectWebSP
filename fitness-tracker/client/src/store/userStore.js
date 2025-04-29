import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    async register(username, password) {
      try {
        const response = await axios.post('/api/register', {
          username,
          password,   // just send plain password
        });
        this.user = response.data.user;
      } catch (error) {
        console.error('Registration failed', error);
      }
    },
    async login(username, password) {
      try {
        const response = await axios.post('/api/login', {
          username,
          password,  // just send plain password
        });
        this.user = response.data.user;
      } catch (error) {
        console.error('Login failed', error);
      }
    },
  },
});