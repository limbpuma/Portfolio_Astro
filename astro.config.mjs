import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';

// Configuración de Astro
export default defineConfig({
  i18n: {
    defaultLocale: "de",
    locales: ["en", "de", "es"],
    routing: {
      prefixDefaultLocale: false,
    }
  },
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});
