import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // <-- Add this!

export default defineConfig({
  plugins: [vue()],
  root: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // <-- Add this!
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});