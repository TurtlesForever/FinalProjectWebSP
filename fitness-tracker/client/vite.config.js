import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  root: './',
  build: {
    outDir: 'dist',  // Output inside client/
    emptyOutDir: true,
  },
});