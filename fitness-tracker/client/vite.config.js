import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  base: './', // ✅ This is crucial for correct relative paths in production
  plugins: [vue()],
  root: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      external: ['firebase/app'],
    },
  },
});