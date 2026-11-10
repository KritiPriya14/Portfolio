import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          threeBundle: ['three', '@react-three/fiber', '@react-three/drei'],
          motion: ['framer-motion'],
        }
      }
    }
  }
});
