import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// [PENDIENTE] dominio .es por confirmar (ver brief-web.md §4).
const SITE = 'https://remodelat.es';

const CORUNA = new Set([
  'a-coruna', 'oleiros', 'culleredo', 'cambre', 'arteixo',
  'sada', 'bergondo', 'betanzos', 'carral', 'abegondo',
]);
const PRIMARY_CORUNA = new Set([
  'a-coruna', 'oleiros', 'culleredo', 'cambre', 'arteixo',
]);

function sitemapPriority(url) {
  const path = new URL(url).pathname;
  if (path === '/') return 1.0;
  if (path === '/zonas/') return 0.95;
  if (path.startsWith('/servicios/')) return 0.85;
  if (path === '/proyectos/') return 0.8;
  if (path === '/contacto/' || path === '/sobre-nosotros/') return 0.8;
  if (path.startsWith('/proyectos/')) return 0.65;

  const zone = path.match(/^\/reforma-(?:bano|cocina|integral)-([a-z-]+)\/$/);
  if (zone) {
    if (PRIMARY_CORUNA.has(zone[1])) return 0.8;
    if (CORUNA.has(zone[1])) return 0.7;
    return 0.4;
  }
  if (path.includes('/blog/')) return 0.55;
  return 0.5;
}

function sitemapChangefreq(url) {
  const path = new URL(url).pathname;
  if (path === '/') return 'weekly';
  if (path.includes('/blog/')) return 'monthly';
  return 'weekly';
}

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  viewTransitions: true,
  build: {
    inlineStylesheets: 'always',
  },
  server: {
    // Permite el host del preview de Arena (dominio *.e2b.app).
    allowedHosts: true,
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        item.priority = sitemapPriority(item.url);
        item.changefreq = sitemapChangefreq(item.url);
        return item;
      },
    }),
  ],
});
