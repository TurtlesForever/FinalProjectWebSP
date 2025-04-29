import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({ 
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
    sourcemap: true,             // Correct placement
    chunkSizeWarningLimit: 600,  // Correct placement
    rollupOptions: {
      external: ['firebase/app'],
    },
  },
});