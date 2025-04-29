import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  base: './', // Important so paths resolve correctly in production
  plugins: [vue()],
  root: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',             // Build inside /client/dist
    emptyOutDir: true,
    sourcemap: true,            // Optional: helpful for debugging
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      external: ['firebase/app'],
    },
  },
});