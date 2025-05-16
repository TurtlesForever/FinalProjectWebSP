import { defineStore } from 'pinia';

export const useDarkModeStore = defineStore('darkMode', {
  state: () => ({
    darkMode: localStorage.getItem('darkMode') === 'true',
  }),

  actions: {
    toggle() {
      this.darkMode = !this.darkMode;
      localStorage.setItem('darkMode', this.darkMode);
      document.documentElement.classList.toggle('dark', this.darkMode);
    },

    initialize() {
      // Sync document class with saved darkMode state on app start
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
});