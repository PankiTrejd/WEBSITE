import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // Use the desired port
    strictPort: true, // Fail if the port is not available
    open: true, // Automatically open the browser in development
  },
  build: {
    outDir: 'dist', // Output directory for the build files
    assetsDir: 'assets', // Directory for static assets
    sourcemap: true, // Enable source maps for debugging in production
  },
  base: './', // Use relative paths for Netlify or subdirectory hosting
});
