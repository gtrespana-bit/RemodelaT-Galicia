#!/usr/bin/env node
/**
 * indexnow.mjs — Notificación de contenido nuevo vía IndexNow.
 *
 * IndexNow (https://www.indexnow.org) es un protocolo abierto que avisa a
 * Bing, Yandex, Seznam, Naver y Yep de que hay URLs nuevas o actualizadas,
 * sin esperar a que sus crawlers las descubran. Es complementario a
 * Google Search Console (Google no usa IndexNow).
 *
 * Clave: el archivo `public/<KEY>.txt` sirve la clave en el dominio
 * (https://remodelat.es/<KEY>.txt), requisito del protocolo.
 *
 * Cuándo se ejecuta:
 *   - Automáticamente al final de `npm run build` SOLO en despliegues de
 *     Vercel (env VERCEL=1), para no hacer ping desde builds locales.
 *   - Manualmente: INDEXNOW_PING=1 npm run indexnow
 *
 * Envía el sitemap (que los motores procesan como lista de URLs) más las
 * páginas clave del negocio. Nunca interrumpe el build: cualquier error de
 * red se ignora.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const HOST = 'remodelat.es';
const KEY = 'f35eb6be92b53534e8c05404a88673bf';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
];

const shouldPing = process.env.VERCEL === '1' || process.env.INDEXNOW_PING === '1';
if (!shouldPing) {
  console.log('  IndexNow: omitido (no es build de Vercel).');
  console.log('  Para enviar manualmente: INDEXNOW_PING=1 npm run indexnow');
  process.exit(0);
}

const keyFile = join(process.cwd(), 'public', `${KEY}.txt`);
if (!existsSync(keyFile)) {
  console.error('  IndexNow: falta el archivo de clave ' + keyFile);
  process.exit(1);
}

// URLs prioritarias: sitemap + páginas de negocio principales.
const sitemapUrl = `https://${HOST}/sitemap-index.xml`;
const keyPages = [
  `https://${HOST}/`,
  `https://${HOST}/zonas/`,
  `https://${HOST}/servicios/`,
  `https://${HOST}/servicios/reforma-integral/`,
  `https://${HOST}/servicios/reforma-cocina/`,
  `https://${HOST}/servicios/reforma-bano/`,
  `https://${HOST}/servicios/reforma-vivienda/`,
  `https://${HOST}/servicios/reforma-accesibilidad/`,
  `https://${HOST}/servicios/instalacion-electrica/`,
  `https://${HOST}/servicios/fontaneria/`,
  `https://${HOST}/proyectos/`,
  `https://${HOST}/metodo-remodelat/`,
  `https://${HOST}/sobre-nosotros/`,
  `https://${HOST}/reforma-integral-a-coruna/`,
  `https://${HOST}/reforma-integral-oleiros/`,
  `https://${HOST}/reforma-integral-culleredo/`,
  `https://${HOST}/reforma-integral-cambre/`,
  `https://${HOST}/reforma-integral-arteixo/`,
  `https://${HOST}/reforma-bano-a-coruna/`,
  `https://${HOST}/reforma-cocina-a-coruna/`,
  `https://${HOST}/contacto/`,
  `https://${HOST}/blog/`,
];
const urlList = [sitemapUrl, ...keyPages];

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
});

let ok = 0;
for (const endpoint of ENDPOINTS) {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body,
      signal: AbortSignal.timeout(15000),
    });
    if (res.ok) {
      ok++;
      console.log(`  IndexNow: ${res.status} ${endpoint}`);
    } else {
      console.warn(`  IndexNow: ${res.status} ${endpoint} (${await res.text().catch(() => '')})`);
    }
  } catch (err) {
    console.warn(`  IndexNow: error de red en ${endpoint}: ${err.message}`);
  }
}
console.log(`  IndexNow: enviadas ${urlList.length} URLs (${ok}/${ENDPOINTS.length} endpoints OK).`);
// Nunca romper el build por problemas de red.
process.exit(0);
