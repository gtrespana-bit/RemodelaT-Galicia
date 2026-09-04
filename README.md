# RemodelaT Coruña — Web

Web corporativa de **RemodelaT Coruña** (reformas y remodelación de viviendas en
A Coruña y su área metropolitana). Adaptada desde la arquitectura del repo
público `gtrespana-bit/reformat-venezuela` (Astro), siguiendo el plan de
adaptación de RINCOCARABOBO
(`07-web-y-marketing/adaptacion-reformat-venezuela.md`).

## Cambios principales frente a la base

- **Marca:** RemodelaT Coruña (empresa nueva; sin «años de experiencia» ni año de fundación).
- **Colores:** navy (`#0f2233`) + oro (`#c9a961`) — tokens en `src/styles/global.css`.
- **Zonas:** A Coruña ciudad + área metropolitana (Arteixo, Oleiros, Culleredo,
  Cambre, Sada, Bergondo, Betanzos, Carral y Abegondo) — `src/data/zone-slugs.ts`.
- **Moneda:** € (precios orientativos **sin IVA**, bandas de mercado 2026).
- **Idioma:** solo español (sin versión en inglés).
- **Proyectos:** portfolio real de obras previas ejecutadas por el fundador en España
  (identificadas como «obra previa en España», sin localizar en A Coruña).
- **Sin testimonios ni nombres de clientes de Venezuela.**

## Stack

- [Astro 6](https://astro.build) + `@astrojs/sitemap` + `@astrojs/rss`.
- Fuente única de verdad de datos en `src/data/*` y `src/components/*`.
- Scripts de build/SEO en `scripts/` (imágenes, sitemap, trailing slashes,
  guardián SEO, PWA móvil, IndexNow).

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build completo + auditorías SEO/PWA
npm run preview   # sirve dist/ en local
```

## Despliegue

- `vercel.json` incluye redirects y cabeceras.
- El build se ejecuta con `npm run build`; los scripts de SEO fallan el build
  si detectan enlaces rotos, canonicals incorrectos o problemas PWA.
- IndexNow solo hace ping en builds de Vercel (`VERCEL=1`).

## Pendiente antes de publicar (ver `brief-web.md`)

- Dominio `.es` y teléfono/email reales (`src/data/brand.ts`).
- Logotipo y favicon propios.
- Fotos reales de obras: ya se publica el portfolio de obras previas en España
  (ver `/proyectos/`); pendiente confirmar permisos de publicación.
- Completar datos del fundador (titulación y trayectoria por etapa, sin inventar antigüedad).
