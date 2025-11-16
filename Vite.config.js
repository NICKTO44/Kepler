import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // ✅ OPTIMIZACIÓN: Reducir tamaño de chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar React Icons en chunks individuales (carga bajo demanda)
          'react-icons-fa': ['react-icons/fa'],
          'react-icons-io5': ['react-icons/io5'],
          'react-icons-md': ['react-icons/md'],
          'react-icons-hi': ['react-icons/hi'],
          // Separar vendor libraries grandes
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
        },
      },
    },
    // ✅ OPTIMIZACIÓN: Chunks más pequeños
    chunkSizeWarningLimit: 500,
    // ✅ OPTIMIZACIÓN: Minificación agresiva
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.log en producción
        drop_debugger: true,
        pure_funcs: ['console.log'], // Eliminar funciones específicas
      },
    },
  },
  // ✅ OPTIMIZACIÓN: Optimizar dependencias
  optimizeDeps: {
    include: [
      'react', 
      'react-dom',
      'framer-motion',
      'aos'
    ],
  },
});