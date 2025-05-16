import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  base: './',
  logLevel: 'info',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: '../server/public',
    emptyOutDir: true,
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      external: ['@oruga-ui/oruga-next/dist/oruga.css']
    },
  },
});