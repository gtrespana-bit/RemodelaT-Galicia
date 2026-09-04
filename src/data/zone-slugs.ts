// src/data/zone-slugs.ts
// -----------------------------------------------------------------------------
// FUENTE ÚNICA DE VERDAD para las zonas atendidas y sus páginas
// `reforma-<servicio>-<municipio>` (solo español).
//
// Adaptación a A Coruña (ver plan en RINCOCARABOBO):
//   - Zona de trabajo: A Coruña ciudad + área metropolitana.
//   - Municipios: A Coruña, Arteixo, Oleiros, Culleredo, Cambre, Sada,
//     Bergondo, Betanzos, Carral y Abegondo.
//
// Usado por:
//   - src/components/ZoneCrossLinks.astro
//   - footer / home / sitemap (prioridad)
// -----------------------------------------------------------------------------

export const zoneNames: Record<string, string> = {
  'a-coruna': 'A Coruña',
  'arteixo': 'Arteixo',
  'oleiros': 'Oleiros',
  'culleredo': 'Culleredo',
  'cambre': 'Cambre',
  'sada': 'Sada',
  'bergondo': 'Bergondo',
  'betanzos': 'Betanzos',
  'carral': 'Carral',
  'abegondo': 'Abegondo',
};

/**
 * Municipios de A Coruña, ordenados por prioridad comercial:
 * la ciudad primero y después el área metropolitana más próxima.
 */
export const corunaZones: string[] = [
  'a-coruna', 'oleiros', 'culleredo', 'cambre', 'arteixo',
  'sada', 'bergondo', 'betanzos', 'carral', 'abegondo',
];

/** Núcleo comercial: ciudad + primera corona metropolitana. */
export const primaryCorunaZones: string[] = [
  'a-coruna', 'oleiros', 'culleredo', 'cambre', 'arteixo',
];

/** Alias retrocompatible con el resto del sitio. */
export const allZones: string[] = [...corunaZones];

/** Agrupación por área (una sola: área metropolitana de A Coruña). */
export const metroGroups: Record<string, string[]> = {
  'a-coruna': corunaZones,
};

const primarySet = new Set(primaryCorunaZones);
const corunaSet = new Set(corunaZones);

export function isCorunaZone(slug: string): boolean {
  return corunaSet.has(slug);
}

export function isPrimaryCorunaZone(slug: string): boolean {
  return primarySet.has(slug);
}

/** Nombre legible de un municipio a partir de su slug. */
export function zoneLabel(slug: string): string {
  return zoneNames[slug] || slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/**
 * Ordena una lista de slugs poniendo A Coruña y la primera corona primero.
 */
export function sortZonesByPriority(slugs: string[]): string[] {
  return [...slugs].sort((a, b) => {
    const ia = corunaZones.indexOf(a);
    const ib = corunaZones.indexOf(b);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return 0;
  });
}
