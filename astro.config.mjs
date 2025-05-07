// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';

export default defineConfig({
  output: 'static',
  build: {
    format: 'directory',
    // Opciones adicionales para mejor rendimiento
    inlineStylesheets: 'auto',
    assetsPrefix: '',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      chunkSizeWarningLimit: 1500, // Aumentamos el límite para evitar warnings
      rollupOptions: {
        output: {
          manualChunks: {
            // Optimización de chunks para Vue y Firebase
            vue: ['vue'],
            firebase: ['firebase/app', 'firebase/firestore']
          }
        }
      }
    }
  },
  integrations: [vue()],
  // Opción importante para rutas dinámicas
  trailingSlash: 'ignore',
});


