import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Kepler/', // ← IMPORTANTE: Nombre de tu repo
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-icons-fa': ['react-icons/fa'],
          'react-icons-io5': ['react-icons/io5'],
          'react-icons-md': ['react-icons/md'],
          'react-icons-hi': ['react-icons/hi'],
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
    minify: 'esbuild',
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom',
      'framer-motion',
      'aos'
    ],
  },
});