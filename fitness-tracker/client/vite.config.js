import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Ensure this alias is defined
    },
  },
  base: '/', // Make sure base is set correctly
  build: {
    outDir: '../server/public', // Make sure the output dir is correct
    emptyOutDir: true,
  },
});