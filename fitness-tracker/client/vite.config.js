import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: './',  // The root of your client app
  build: {
    outDir: 'dist',  // Where to output the built files
  },
});