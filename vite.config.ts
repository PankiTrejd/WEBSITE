import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Remove mkcert
  server: {
    https: false, // Disable HTTPS
    port: 5174, // Use the port you need
    strictPort: true, // Ensure the server fails if the port is not available
    open: true, // Automatically open the browser
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  base: './',
});
