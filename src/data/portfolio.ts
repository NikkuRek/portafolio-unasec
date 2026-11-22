export type UnaCode = `Cód. ${number}`;
export type IsoDateString = `${number}-${number}-${number}`;
export type UnitRomanNumber = 'I' | 'II' | 'III' | 'IV' | 'V';
export type UnitObjectiveCode = 'I.1 / I.2' | 'II.1' | 'III.1' | 'IV.1' | 'V.1';
export type DeliverableKind =
  | 'infographic-and-video'
  | 'instruments-and-mindmap'
  | 'purpose-essay'
  | 'technical-summary-reflection'
  | 'opinion-article';

export const DELIVERABLE_KIND_LABELS: Readonly<Record<DeliverableKind, string>> = {
  'infographic-and-video': 'Objetivos I.1 y I.2 · Infografía y Micro-Video',
  'instruments-and-mindmap': 'Objetivo II.1 · 5 Instrumentos + Mapa Mental',
  'purpose-essay': 'Objetivo III.1 · Ensayo de Propósito (Pasado, Presente y Futuro)',
  'technical-summary-reflection': 'Objetivo IV.1 · Resumen Técnico (Historiales Clínicos) y Reflexión',
  'opinion-article': 'Objetivo V.1 · Artículo de Opinión (Aprendizaje en el C.I.)',
};

export interface PortfolioDeliveryMeta {
  readonly milestone: string;
  readonly week: string;
  readonly coverage: string;
  readonly modality: string;
}

export const PORTFOLIO_DELIVERY: PortfolioDeliveryMeta = {
  milestone: 'Portafolio Académico Completo',
  week: 'Semanas 1–9',
  coverage: 'Unidades I a V (Objetivos I.1 a V.1) + 5 Instrumentos (U2-I1..U2-I5)',
  modality: 'Educación Abierta y a Distancia',
};

export interface OperationalScheduleContext {
  readonly workplace: string;
  readonly workHours: string;
  readonly commuteSummary: string;
  readonly studyWindow: string;
  readonly contingencies: readonly string[];
}

export interface AuthorProfile {
  readonly fullName: string;
  readonly nationalId: string;
  readonly currentDegree: string;
  readonly previousInstitution: string;
  readonly targetProgram: {
    readonly name: string;
    readonly code: UnaCode;
  };
  readonly university: {
    readonly name: string;
    readonly acronym: 'UNA';
    readonly localCenter: string;
    readonly city: string;
  };
  readonly course: {
    readonly name: string;
    readonly code: UnaCode;
    readonly term: string;
  };
  readonly operationalContext: OperationalScheduleContext;
}

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly code?: string | undefined;
  readonly external?: boolean | undefined;
}

export interface DriveResourceLink {
  readonly label: string;
  readonly description: string;
  readonly url: string;
  readonly code: string;
}

export const DRIVE_RESOURCES = {
  folder: {
    label: 'Carpeta Principal UNASEC (Google Drive)',
    description: 'Repositorio completo de evidencias originales del portafolio académico (Unidades I a V).',
    url: 'https://drive.google.com/drive/folders/142tYu4QmBQBLLFpKMMtj2RRqGmQhEqYb?usp=sharing',
    code: 'UNASEC',
  },
  unit1Video: {
    label: 'Unidad I — Video (Micro.mp4)',
    description: 'Micro-video expositivo de la Unidad I del Curso Introductorio.',
    url: 'https://drive.google.com/file/d/1gjjWWNL0O5S3KM6wRyC-ac6h2vhqOtV4/view?usp=drive_link',
    code: 'U1 · VIDEO',
  },
  unit1Infographic: {
    label: 'Unidad I — Infografía (Infografía.png)',
    description: 'Síntesis visual de la Unidad I en formato de infografía.',
    url: 'https://drive.google.com/file/d/1o4MWEtFbZ4gH8WEicnYsmi6nzEOvOlA9/view?usp=drive_link',
    code: 'U1 · INFOGRAFÍA',
  },
  unit2MindMap: {
    label: 'Unidad II — Mapa Mental (MAPA MENTAL, O. II.2.jpg)',
    description: 'Imagen original del mapa mental del Objetivo II.1 / II.2 en Google Drive.',
    url: 'https://drive.google.com/file/d/1reAMpTmREx_PPou9e6WS1OzHEf8d3rTa/view?usp=drive_link',
    code: 'U2 · MAPA',
  },
} as const satisfies Record<string, DriveResourceLink>;

export interface SuggestedBookActivity {
  readonly id: string;
  readonly unitNumber: UnitRomanNumber;
  readonly objectiveCode: UnitObjectiveCode;
  readonly title: string;
  readonly bookSection: string;
  readonly synthesis: string;
  readonly portfolioRelation: string;
}

export interface VerifiedReference {
  readonly id: string;
  readonly unitNumber: UnitRomanNumber | 'General';
  readonly category: 'Institucional UNA' | 'Metodología y Lectura' | 'Sistemas e Informática Médica';
  readonly citation: string;
  readonly verificationNote: string;
}

export const AUTHOR_PROFILE = {
  fullName: 'Gabriel Alejandro Piña Martínez',
  nationalId: 'C.I. 29.944.901',
  currentDegree: 'TSU en Informática',
  previousInstitution: 'Instituto Universitario Jesús Obrero (IUJO)',
  targetProgram: {
    name: 'Ingeniería de Sistemas',
    code: 'Cód. 236',
  },
  university: {
    name: 'Universidad Nacional Abierta',
    acronym: 'UNA',
    localCenter: 'Centro Local Lara',
    city: 'Barquisimeto',
  },
  course: {
    name: 'Curso Introductorio',
    code: 'Cód. 000',
    term: 'Lapso 2026-2',
  },
  operationalContext: {
    workplace: 'Entorno clínico de salud (Barquisimeto)',
    workHours: 'Lunes a viernes, 08:00 a. m. – 05:00 p. m.',
    commuteSummary: 'Traslados diarios urbanos hogar ↔ clínica (06:45–07:45 a. m. y 05:15–06:15 p. m.)',
    studyWindow: 'Bloques nocturnos (08:00 p. m. – 10:00 p. m. L–V) y bloques intensivos de fin de semana',
    contingencies: [
      'Cortes eléctricos no programados en franja nocturna',
      'Fluctuaciones de conectividad y bajo ancho de banda',
      'Demandas operativas de soporte e información en clínica',
    ],
  },
} as const satisfies AuthorProfile;

export const PRIMARY_NAVIGATION: readonly NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Unidad I', href: '/unidades/unidad-1' },
  { label: 'Unidad II', href: '/unidades/unidad-2' },
  { label: 'Unidad III', href: '/unidades/unidad-3' },
  { label: 'Unidad IV', href: '/unidades/unidad-4' },
  { label: 'Unidad V', href: '/unidades/unidad-5' },
  {
    label: 'Drive UNASEC ↗',
    href: 'https://drive.google.com/drive/folders/142tYu4QmBQBLLFpKMMtj2RRqGmQhEqYb?usp=sharing',
    external: true,
  },
];

export const SUGGESTED_BOOK_ACTIVITIES: readonly SuggestedBookActivity[] = [
  {
    id: 'act-u1-1',
    unitNumber: 'I',
    objectiveCode: 'I.1 / I.2',
    title: 'Caracterización de la UNA, medios instruccionales, roles y bienestar estudiantil',
    bookSection: 'Unidad I: La Universidad Nacional Abierta y la Educación a Distancia',
    synthesis:
      'Estudio de los 9 principios rectores de la UNA, estructura central y regional (Centro Local Lara), taxonomía de medios, los 6 roles del estudiante unista, sistema de evaluación por objetivos (escala 1–10) y programas de bienestar.',
    portfolioRelation:
      'Sustenta los dos entregables de la Primera Entrega: la Infografía Institucional (Objetivo I.1) y el Micro-Video expositivo MICRO.mp4 (Objetivo I.2).',
  },
  {
    id: 'act-u2-1',
    unitNumber: 'II',
    objectiveCode: 'II.1',
    title: 'Inventario de variables personales, contextuales y autogestión del tiempo',
    bookSection: 'Unidad II: El estudiante y su vinculación con la Universidad Nacional Abierta',
    synthesis:
      'Revisión formativa de las variables que condicionan el estudio independiente del adulto trabajador, contraste con los servicios de orientación del Centro Local Lara y aplicación secuencial de los cinco instrumentos de autogestión.',
    portfolioRelation:
      'Sustenta los instrumentos U2-I1 a U2-I5, la reflexión sobre la jornada laboral en clínica (08:00 a. m.–05:00 p. m.) y el mapa mental del Objetivo II.1.',
  },
  {
    id: 'act-u3-1',
    unitNumber: 'III',
    objectiveCode: 'III.1',
    title: 'Exploración vocacional, rasgos personales y análisis del perfil curricular UNA',
    bookSection: 'Unidad III: Elección de la carrera',
    synthesis:
      'Autovaloración de intereses, aptitudes previas y motivaciones frente a la oferta académica de la UNA y el plan de estudios de Ingeniería de Sistemas (Cód. 236).',
    portfolioRelation:
      'Base reflexiva para estructurar el ensayo de propósito vocacional en tres tiempos: Pasado (TSU en Informática IUJO), Presente (trabajo en clínica y C.I.) y Futuro (Ingeniero de Sistemas UNA).',
  },
  {
    id: 'act-u4-1',
    unitNumber: 'IV',
    objectiveCode: 'IV.1',
    title: 'Ejercicios de prelectura, identificación de estructuras textuales y órdenes discursivos',
    bookSection: 'Unidad IV: Búsqueda y procesamiento de información',
    synthesis:
      'Práctica sistemática de estrategias de comprensión lectora (prelectura, lectura comprensiva y postlectura) y clasificación de textos expositivos, argumentativos y técnico-científicos.',
    portfolioRelation:
      'Aplicado directamente en la ficha técnica verificada y el resumen técnico sobre automatización de historiales clínicos, junto con la reflexión metacognitiva del Objetivo IV.1.',
  },
  {
    id: 'act-u5-1',
    unitNumber: 'V',
    objectiveCode: 'V.1',
    title: 'Planificación, textualización y revisión del discurso escrito académico',
    bookSection: 'Unidad V: Expresión escrita',
    synthesis:
      'Aplicación de las fases del proceso de escritura, control de coherencia, cohesión, adecuación ortotipográfica y construcción de argumentos propios.',
    portfolioRelation:
      'Instrumentado en la redacción del artículo de opinión sobre el aprendizaje alcanzado en el Curso Introductorio (Cód. 000).',
  },
];

export const VERIFIED_REFERENCES: readonly VerifiedReference[] = [
  {
    id: 'ref-una-ci-2010',
    unitNumber: 'General',
    category: 'Institucional UNA',
    citation:
      'Universidad Nacional Abierta. (2010). Curso Introductorio: Estrategias de orientación y desarrollo académico. Caracas: Autor.',
    verificationNote: 'Texto instruccional oficial de las Unidades I a V del Curso Introductorio (Cód. 000).',
  },
  {
    id: 'ref-una-plan-2026',
    unitNumber: 'General',
    category: 'Institucional UNA',
    citation:
      'Universidad Nacional Abierta. (2026). Plan de Curso e Instructivo de Evaluación del Curso Introductorio (Cód. 000) — Lapso Académico 2026-2. Caracas: Vicerrectorado Académico.',
    verificationNote: 'Documento normativo de objetivos (II.1, III.1, IV.1 y V.1) y pautas de entrega del portafolio.',
  },
  {
    id: 'ref-una-sistemas-236',
    unitNumber: 'III',
    category: 'Institucional UNA',
    citation:
      'Universidad Nacional Abierta. (2025). Diseño Curricular y Plan de Estudios de la Carrera Ingeniería de Sistemas (Cód. 236). Caracas: Subprograma de Ingeniería de Sistemas.',
    verificationNote: 'Referencia curricular verificada para la fundamentación vocacional del Objetivo III.1.',
  },
  {
    id: 'ref-preciado-2021',
    unitNumber: 'IV',
    category: 'Sistemas e Informática Médica',
    citation:
      'Preciado Rodríguez, A. J., Valles Coral, M. A. y Lévano Rodríguez, D. (2021). Importancia del uso de sistemas de información en la automatización de historiales clínicos, una revisión sistemática. Revista Cubana de Informática Médica, 13(1).',
    verificationNote: 'Artículo técnico principal resumido en el Objetivo IV.1 (base SciELO Cuba / Dialnet).',
  },
  {
    id: 'ref-bolivar-2010',
    unitNumber: 'IV',
    category: 'Metodología y Lectura',
    citation:
      'Bolívar, D., Campos, D., Ramírez, F. y Ramírez, C. (2010). Búsqueda y procesamiento de información en textos impresos o electrónicos. En Universidad Nacional Abierta, Estrategias de orientación y desarrollo académico para la carrera universitaria en la UNA: Curso Introductorio (2.ª ed., pp. 149-196). Caracas: Autor.',
    verificationNote: 'Fuente metodológica oficial citada en la Unidad IV (Objetivo IV.1).',
  },
  {
    id: 'ref-ramirez-2010',
    unitNumber: 'V',
    category: 'Metodología y Lectura',
    citation:
      'Ramírez, F. (2010). Producción de textos. En Universidad Nacional Abierta, Estrategias de orientación y desarrollo académico para la carrera universitaria en la UNA: Curso Introductorio (2.ª ed., pp. 203-243). Caracas: Autor.',
    verificationNote: 'Fuente metodológica oficial citada en la Unidad V (Objetivo V.1).',
  },
  {
    id: 'ref-reglamento-una-1996',
    unitNumber: 'V',
    category: 'Institucional UNA',
    citation:
      'Universidad Nacional Abierta. (1996). Reglamento de la Universidad Nacional Abierta (Gaceta Oficial N.º 5.098 Extraordinario, 18 de septiembre de 1996). Caracas: Autor.',
    verificationNote: 'Marco normativo de ética y evaluación citado en la Unidad V.',
  },
];
