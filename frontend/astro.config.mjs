// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true, // Autorise l’accès depuis d’autres appareils
    allowedHosts: ['wyliam.fr', '*.wyliam.fr', 'localhost'],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});