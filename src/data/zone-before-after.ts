// src/data/zone-before-after.ts
// -----------------------------------------------------------------------------
// Adaptación a A Coruña: se retiran TODAS las parejas antes/después de la
// base original. Hasta que existan obras reales de A Coruña con permiso del
// cliente, las páginas de zona NO muestran comparativas "antes/después" para
// no presentar obras ajenas a la empresa actual como trabajos propios en
// Galicia. (Ver plan de adaptación, §4 y §8.)
// -----------------------------------------------------------------------------

export type ZoneService = 'cocina' | 'bano' | 'integral';
export type BeforeAfterOrientation = 'tall' | 'portrait' | 'landscape';
export type BeforeAfterScope = 'same-room' | 'same-zone' | 'same-room-process';

interface LocalizedText {
  es: string;
  en: string;
}

export interface ZoneBeforeAfterPair {
  project: LocalizedText;
  location: LocalizedText;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: LocalizedText;
  afterAlt: LocalizedText;
  beforeCaption: LocalizedText;
  afterCaption: LocalizedText;
  comparison: LocalizedText;
  beforeLabel?: LocalizedText;
  afterLabel?: LocalizedText;
  orientation: BeforeAfterOrientation;
  scope: BeforeAfterScope;
}

/**
 * Sin parejas documentadas por ahora. El componente BeforeAfter.astro
 * renderiza `null` y la sección desaparece limpiamente.
 */
export function getBeforeAfterPair(_zone: string, _service: ZoneService): ZoneBeforeAfterPair | null {
  return null;
}
