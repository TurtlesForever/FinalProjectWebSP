import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  base: '/', // Make sure base is set correctly
  logLevel: 'info', // Change to 'debug' for even more verbose logs
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Ensure this alias is defined
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: '../server/public', // Make sure the output dir is correct
    emptyOutDir: true,
    sourcemap: true, // Enable source maps to debug JS issues
    chunkSizeWarningLimit: 2000 // Increase the limit if needed
  },
});