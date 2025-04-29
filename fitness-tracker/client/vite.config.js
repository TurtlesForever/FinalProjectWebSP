import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Vite configuration for Vue
export default defineConfig({
  plugins: [vue()],
  root: 'client', // Ensures Vite looks in the client folder
  build: {
    outDir: 'client/dist', // Specifies where to build the output
    rollupOptions: {
      input: {
        main: './client/index.html' // Points to the entry HTML file
      }
    }
  },
});