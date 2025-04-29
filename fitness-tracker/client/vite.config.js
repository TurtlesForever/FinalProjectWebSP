import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Vite configuration
export default defineConfig({
  plugins: [vue()],
  root: './',  // Ensure Vite uses the correct root directory
  build: {
    outDir: '../dist',  // Output folder relative to the root project
    emptyOutDir: true,
  },
});