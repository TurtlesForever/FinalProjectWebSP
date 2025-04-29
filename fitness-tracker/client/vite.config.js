import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',        // Auto-imports like ref, computed
        'pinia',      // Auto-imports like defineStore, storeToRefs
      ],
      dts: './auto-imports.d.ts',  // Generates TypeScript typings (optional but recommended)
    }),
  ],
  root: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});