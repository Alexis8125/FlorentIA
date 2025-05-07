// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';

export default defineConfig({
  // Configuración para GitHub Pages (NUEVO)
  site: 'https://Alexis8125.github.io', // Reemplaza con tu nombre de usuario
  base: '/FlorentIA', // Nombre exacto de tu repositorio (case sensitive)
  
  // Tu configuración existente
  output: 'static',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
    assetsPrefix: '',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue'],
            firebase: ['firebase/app', 'firebase/firestore']
          }
        }
      }
    }
  },
  integrations: [vue()],
  trailingSlash: 'ignore',
});