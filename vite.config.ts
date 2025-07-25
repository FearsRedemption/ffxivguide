import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'docs', // 👈 Vite will output here
    emptyOutDir: true
  }
});
