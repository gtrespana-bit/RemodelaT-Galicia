/**
 * Constantes de marca — FUENTE ÚNICA DE VERDAD.
 *
 * Adaptación de `reformat-venezuela` a RemodelaT Coruña (ver plan en
 * RINCOCARABOBO: 07-web-y-marketing/adaptacion-reformat-venezuela.md).
 *
 * Cambios clave frente a la versión venezolana:
 *   - Marca: RemodelaT Coruña (empresa NUEVA, sin "23 años" ni "desde 2003").
 *   - Moneda: € (EUR). Horquillas orientativas de mercado 2026 (sin IVA) en blog, servicios y zonas; presupuesto cerrado por partidas tras visita (IVA 10 % / 21 % según obra).
 *   - Zona: A Coruña y área metropolitana (municipios de A Coruña).
 *   - Idioma: solo español.
 *   - Paleta: navy + oro.
 *
 * Cualquier cifra o dato de contacto que aparezca en la web debe salir de aquí.
 */

export const SITE_URL = 'https://remodelat.es';

export const BRAND = {
  name: 'RemodelaT Coruña',
  shortName: 'RemodelaT',

  /**
   * Empresa de nueva creación en A Coruña: NO se publica año de fundación
   * ni "años de experiencia" de la empresa. La experiencia del fundador
   * (España + internacional) se comunica sin fechas de fundación.
   */
  foundedYear: undefined as number | undefined,

  phone: '+34600000000', // [PENDIENTE] teléfono/WhatsApp real (brief-web.md §4)
  phoneDisplay: '600 000 000',
  phoneIntl: '+34 600 000 000',
  email: 'contacto@remodelat.es', // [PENDIENTE] email real

  /** Moneda y formato de precios (€, sin IVA). */
  currency: 'EUR',
  currencySymbol: '€',

  areas: 'A Coruña y área metropolitana (Arteixo, Oleiros, Culleredo, Cambre, Sada, Bergondo, Betanzos, Carral y Abegondo)',

  /** Paleta navy + oro (coherente con los tokens de diseño de global.css). */
  colors: {
    navy: '#0f2233',
    navySoft: '#16324a',
    gold: '#c9a961',
  },
} as const;

/** Enlace de WhatsApp con mensaje pre-escrito ya codificado. */
export function waLink(text: string): string {
  return `https://wa.me/${BRAND.phone.replace('+', '')}?text=${encodeURIComponent(text)}`;
}

/** Frases reutilizables para no volver a desincronizar el contenido. */
export const COPY = {
  es: {
    positioning: 'No competimos por ser la opción más económica. Competimos por hacerlo bien.',
    footerDesc: 'Reformas de viviendas en A Coruña, hechas bien y documentadas.',
    guarantee: 'Garantía por partidas, por escrito.',
  },
} as const;
