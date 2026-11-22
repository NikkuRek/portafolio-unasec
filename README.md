# Portafolio Académico — UNA (Curso Introductorio · Cód. 000)

Portafolio académico web de **Gabriel Alejandro Piña Martínez** (`C.I. 29.944.901`), aspirante a **Ingeniería de Sistemas (`Cód. 236`)** en la **Universidad Nacional Abierta (UNA)** — **Centro Local Lara (Barquisimeto)**, correspondiente al **Curso Introductorio (`Cód. 000`, Lapso 2026-2)**.

## Enfoque Técnico y Editorial

- **Arquitectura Estática (SSG):** construido con **Astro `5.18.2`**, **TypeScript estricto** (sin `any`) y **Tailwind CSS `v4`**, preparado para despliegue directo en Vercel (`output: 'static'`).
- **Sin bundles JS externos:** toda la navegación, tablas adaptativas y vistas de unidades funcionan en HTML y CSS puros (`0` archivos `.js`/`.mjs` emitidos en `dist/`), con un único micro-script inline (`is:inline`) para persistir el **Modo lectura** en `localStorage`.
- **Legibilidad, Modo Lectura y accesibilidad (WCAG AA/AAA):** paleta editorial minimalista de alto contraste, **Modo lectura** cálido en la cabecera para reducir la fatiga visual, medida de lectura de `68ch`, áreas táctiles `≥ 44px`, foco `:focus-visible`, fuentes autoalojadas (`Inter Variable` y `JetBrains Mono Variable`), tablas con desplazamiento interno en `360px` y soporte nativo de impresión (`@media print`).

## Rutas del Sitio (`8` páginas estáticas)

- **`/`** — Portada editorial, ficha de identificación UNA, acceso directo a las Unidades I–V, tabla síntesis de los 5 instrumentos (`U2-I1..U2-I5`) y recursos de Google Drive (`UNASEC` y Unidad I).
- **`/unidades`** — Índice y matriz curricular de las Unidades I a V, anexo de instrumentos, actividades sugeridas del libro y catálogo de referencias verificadas.
- **`/unidades/unidad-1`** — **Objetivos I.1 y I.2:** infografía institucional (`infografia.webp`), reproductor de micro-video (`micro.mp4` + `micro-poster.webp`) con opción embebida de Drive y síntesis de la Unidad I.
- **`/unidades/unidad-2`** — **Objetivo II.1:** los 5 instrumentos de autogestión (`U2-I1` a `U2-I5`), reflexión sobre el perfil de estudiante a distancia (Rasgo N.º 6) y mapa mental original (`mapa-mental.png`, Rasgo N.º 8).
- **`/unidades/unidad-3`** — **Objetivo III.1:** ensayo de propósito vocacional en tres tiempos (Pasado, Presente y Futuro) hacia Ingeniería de Sistemas (`Cód. 236`).
- **`/unidades/unidad-4`** — **Objetivo IV.1:** ficha técnica verificada (Preciado Rodríguez et al., 2021), resumen técnico sobre automatización de historiales clínicos (Rasgo N.º 10) y reflexión de estrategias de búsqueda y lectura (Rasgo N.º 11).
- **`/unidades/unidad-5`** — **Objetivo V.1:** artículo de opinión sobre la escritura académica y el aprendizaje en el Curso Introductorio (`Cód. 000`).
- **`/404`** — Página personalizada de error *No encontrado* (`dist/404.html`).

## Estructura del Proyecto

```text
├── astro.config.mjs                 # SSG + Tailwind v4 + compatibilidad SSR dev
├── tsconfig.json                    # TypeScript estricto sin any
├── vercel.json                      # cleanUrls, cabeceras de seguridad y caché inmutable
├── evidencias-una/                  # Evidencias originales (.docx, .png, .mp4, esquemas)
├── public/
│   ├── favicon.ico                  # Icono multi-resolución (16x16 y 32x32)
│   ├── robots.txt
│   └── media/
│       ├── unidad-1/                # infografia.webp, micro.mp4, micro-poster.webp
│       └── unidad-2/                # mapa-mental.png
└── src/
    ├── content.config.ts            # Esquemas Zod (unidades I-V e instrumentos U2-I1..U2-I5)
    ├── content/
    │   ├── instruments/             # instrumento-1.md .. instrumento-5.md
    │   └── units/                   # unidad-1.md .. unidad-5.md
    ├── data/portfolio.ts            # Datos institucionales, enlaces Drive, actividades y referencias
    ├── styles/                      # tokens.css y global.css (incl. Modo lectura y @media print)
    ├── layouts/                     # BaseLayout.astro y EditorialLayout.astro
    ├── components/                  # layout/, ui/ y portfolio/
    └── pages/                       # index.astro, 404.astro, unidades/index.astro y unidades/[slug].astro
```

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor local de desarrollo
npm run dev

# Verificación estricta de TypeScript y colecciones Zod
npm run check

# Compilación estática para producción (salida en dist/)
npm run build

# Previsualización local del build estático
npm run preview
```

## Despliegue en Vercel

El proyecto está configurado para compilación estática sin variables de entorno ni funciones serverless:

- **Framework Preset:** `Astro`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Cabeceras y rutas limpias:** definidas en `vercel.json` (`cleanUrls: true`, cabeceras de seguridad y caché inmutable para `/_astro/*`).
