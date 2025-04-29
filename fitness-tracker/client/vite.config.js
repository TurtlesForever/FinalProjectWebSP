import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  root: '.', // Set the root to current directory
  build: {
    outDir: 'dist', // Output to 'dist' (already default, but good to be explicit)
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // Tell Vite exactly where index.html is
    },
  },
})