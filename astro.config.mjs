import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

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
  output: 'static'
});
