import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null, // User structure could be { id, username, role }
  }),

  actions: {
    async fetchCurrentUser() {
      try {
        const res = await fetch('/api/user'); // Your backend API to fetch the user data
        const data = await res.json();
        this.currentUser = data;
      } catch (err) {
        console.error('Failed to fetch user:', err);
      }
    },

    // Check if current user is admin
    isAdmin() {
      return this.currentUser && this.currentUser.role === 'admin';
    },
  },
});