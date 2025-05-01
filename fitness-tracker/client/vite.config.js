import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue';
import API from '@/api';
import path from 'path';

export default defineConfig({
  base: '/', // Make sure base is set correctly
  logLevel: 'info', // Change to 'debug' for even more verbose logs
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist', // default
    emptyOutDir: true,
    sourcemap: true,
    chunkSizeWarningLimit: 2000
  },
});