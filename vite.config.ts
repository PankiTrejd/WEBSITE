import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: './index.html', // Ensure index.html is the entry point
    },
    sourcemap: true, // Optional, helps with debugging
  },
  base: './', // Ensures relative paths are used
});
