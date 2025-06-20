import fs from 'fs';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Función para generar el archivo robots.txt
function generateRobotsTxt() {
  const content = `User-agent: *
Disallow:

Sitemap: https://portfolio-astro-limbpumas-projects.vercel.app/sitemap.xml`;
  fs.writeFileSync('public/robots.txt', content);
}

// Función para generar el sitemap.xml (debes completar esta función según la lógica de tu sitio)
function generateSitemap() {
  // Tu lógica para generar el sitemap
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://portfolio-astro-limbpumas-projects.vercel.app/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.00</priority>
  </url>

</urlset>`;
  fs.writeFileSync('public/sitemap.xml', sitemapContent);
}

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
  adapter: vercel(),
  vite: {
    plugins: [
      {
        name: 'custom-build-scripts',
        enforce: 'build',
        buildEnd: () => {
          generateRobotsTxt();
          generateSitemap();
        }
      }
    ]
  }
});
