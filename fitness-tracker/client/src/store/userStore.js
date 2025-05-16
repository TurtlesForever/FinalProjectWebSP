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
    },

    loadUser() {
      const saved = localStorage.getItem('currentUser');
      if (saved) {
        this.currentUser = JSON.parse(saved);
      }
    },

    logout() {
      this.currentUser = null;
      localStorage.removeItem('currentUser');
    },
  },
});