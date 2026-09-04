// src/data/zone-local.ts
// -----------------------------------------------------------------------------
// Texto local por municipio para las páginas de zona
// `reforma-<servicio>-<municipio>` (solo español).
//
// Copia intencionadamente neutra: no se inventan datos de obras ni cifras.
// Solo se describen tipologías de vivienda habituales del área metropolitana
// de A Coruña. (Ver plan de adaptación §6 y §8: "no inventar".)
// -----------------------------------------------------------------------------

export interface ZoneLocalInfo {
  /** Frase corta para el párrafo introductorio. */
  blurb: string;
  /** Título del recuadro local "pensado para las viviendas de…". */
  localBoxTitle: string;
  /** Texto del recuadro local. */
  localBoxText: string;
}

export const zoneLocal: Record<string, ZoneLocalInfo> = {
  'a-coruna': {
    blurb: 'la ciudad de A Coruña, donde atendemos pisos del centro, barrios residenciales y viviendas unifamiliares.',
    localBoxTitle: 'Reformas pensadas para las viviendas de A Coruña',
    localBoxText:
      'La ciudad de A Coruña combina pisos de diferentes épocas —algunos con distribuciones antiguas e instalaciones que piden renovación— y viviendas unifamiliares. Cada tipología tiene sus retos, y el método es el mismo: diagnóstico técnico real, presupuesto por partidas y garantía por escrito.',
  },
  'arteixo': {
    blurb: 'Arteixo, en el borde occidental del área metropolitana, con viviendas unifamiliares y pisos.',
    localBoxTitle: 'Reformas en Arteixo y su entorno',
    localBoxText:
      'Arteixo es un municipio del área metropolitana de A Coruña con una mezcla de viviendas unifamiliares y bloques de pisos. Trabajamos con el mismo estándar que en la ciudad: visita técnica, mediciones reales y presupuesto cerrado por partidas.',
  },
  'oleiros': {
    blurb: 'Oleiros, municipio residencial próximo a la costa, con viviendas unifamiliares y pisos.',
    localBoxTitle: 'Reformas en Oleiros',
    localBoxText:
      'Oleiros es uno de los municipios residenciales de referencia del área metropolitana, con viviendas unifamiliares y pisos. Las viviendas unifamiliares suelen requerir reformas integrales de mayor metraje, con especial atención a instalaciones y acabados duraderos.',
  },
  'culleredo': {
    blurb: 'Culleredo, municipio del área metropolitana, con pisos y viviendas unifamiliares.',
    localBoxTitle: 'Reformas en Culleredo',
    localBoxText:
      'Culleredo combina núcleos urbanos y zonas residenciales de baja densidad. Coordinamos visitas técnicas y presupuestos con normalidad en todo el municipio, con el mismo método técnico y la misma garantía por escrito.',
  },
  'cambre': {
    blurb: 'Cambre, municipio del área metropolitana, con urbanizaciones y viviendas unifamiliares.',
    localBoxTitle: 'Reformas en Cambre',
    localBoxText:
      'En Cambre predomina la vivienda unifamiliar y las urbanizaciones residenciales. Las reformas más habituales son integrales de vivienda, cocinas y baños, con especial cuidado en la coordinación de instalaciones.',
  },
  'sada': {
    blurb: 'Sada, municipio costero del área metropolitana, con viviendas unifamiliares y pisos.',
    localBoxTitle: 'Reformas en Sada',
    localBoxText:
      'Sada es un municipio costero del área metropolitana de A Coruña. Atendemos reformas de pisos y viviendas unifamiliares con el mismo protocolo: diagnóstico, presupuesto por partidas y entrega documentada.',
  },
  'bergondo': {
    blurb: 'Bergondo, municipio del área metropolitana, con viviendas unifamiliares en entorno semirrural.',
    localBoxTitle: 'Reformas en Bergondo',
    localBoxText:
      'Bergondo combina viviendas unifamiliares y entornos semirrurales. En este tipo de vivienda la reforma integral suele incluir instalaciones, revestimientos y acabados; planificamos cada fase antes de empezar.',
  },
  'betanzos': {
    blurb: 'Betanzos, municipio del área metropolitana con casco histórico y viviendas unifamiliares.',
    localBoxTitle: 'Reformas en Betanzos',
    localBoxText:
      'Betanzos tiene un casco histórico singular y viviendas unifamiliares en su entorno. Las reformas en edificios con carácter exigen cuidado con la estructura y los acabados; las valoramos caso a caso en la visita técnica.',
  },
  'carral': {
    blurb: 'Carral, municipio del área metropolitana, con viviendas unifamiliares en entorno rural.',
    localBoxTitle: 'Reformas en Carral',
    localBoxText:
      'En Carral predomina la vivienda unifamiliar en un entorno tranquilo. Las reformas más habituales son integrales, cocinas y baños, con presupuesto por partidas y cronograma por fases.',
  },
  'abegondo': {
    blurb: 'Abegondo, municipio del área metropolitana, con viviendas unifamiliares en entorno rural.',
    localBoxTitle: 'Reformas en Abegondo',
    localBoxText:
      'Abegondo es un municipio del interior del área metropolitana de A Coruña, con viviendas unifamiliares. Nos desplazamos para la visita técnica y entregamos presupuesto cerrado por partidas, sin sorpresas.',
  },
};
