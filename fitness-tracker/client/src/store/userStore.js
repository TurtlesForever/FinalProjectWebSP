import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null, // or default structure
  }),
  actions: {
    async fetchCurrentUser() {
      try {
        const res = await fetch('/api/user'); // Adjust to your actual backend route
        const data = await res.json();
        this.currentUser = data;
      } catch (err) {
        console.error('Failed to fetch user:', err);
      }
    },
  },
});