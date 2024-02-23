import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "es"],
    routing: {
      prefixDefaultLocale: false,
    }
  },
  output: 'server',
  integrations: [vercel(), tailwind(), react()]
});
