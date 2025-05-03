import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null,
  }),

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

    isAdmin() {
      return this.currentUser && this.currentUser.role === 'admin';
    }
  }
});