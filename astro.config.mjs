import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // Asegúrate de que esta integración es necesaria para tu despliegue
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Configuración de Astro
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "es"],
    routing: {
      prefixDefaultLocale: false, // en -> / de -> /de es -> /es
    }
  },
  integrations: [vercel(), tailwind(), react()],
  output: 'server'
});
