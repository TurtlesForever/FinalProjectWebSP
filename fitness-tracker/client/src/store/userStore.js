import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null,
  }),

  getters: {
    isLoggedIn: (state) => !!state.currentUser,
    isAdmin: (state) => state.currentUser?.role === 'admin',
  },

  actions: {
    setUser(user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      if (user.token) localStorage.setItem('token', user.token);
      if (user.username) localStorage.setItem('username', user.username);
    },

    loadUser() {
      try {
        const saved = localStorage.getItem('currentUser');
        if (saved) this.currentUser = JSON.parse(saved);
      } catch (e) {
        console.warn('Failed to parse saved user data', e);
        this.currentUser = null;
      }
    },

    logout() {
      this.currentUser = null;
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    }
  },
});