import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "es"],
    routing:{
      prefixDefaultLocale: false, // en -> / de -> /de es -> /es
    }
  },
  integrations: [tailwind(), react()],
  output: "server"
});