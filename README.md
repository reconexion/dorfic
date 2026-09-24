# Dorfic

Suite de herramientas de imagen **gratis** que funciona 100% en el navegador: convertir HEIC a JPG, comprimir a un tamaño en KB, redimensionar y cambiar de formato. **Las imágenes nunca se suben a ningún servidor.**

- React 19 + Vite 8 + TypeScript
- React Router v7 en **modo framework** con `ssr: false` y **prerender** de todas las rutas (cada página es un HTML estático con su contenido, `<title>`, meta tags y JSON-LD)
- Untitled UI React (versión free) + Tailwind CSS v4 + React Aria, tema naranja, **sin modo oscuro**
- Motion (`motion/react`) con `LazyMotion` y carga diferida de features
- Procesamiento en **Web Workers** (OffscreenCanvas), `heic2any`, `browser-image-compression`, `JSZip`
- PWA instalable (`vite-plugin-pwa`), Cloudflare Web Analytics opcional

## Requisitos

- Node.js 20.19+ (probado con Node 22)
- npm 10+

## Correr en local

```bash
npm install
cp .env.example .env   # opcional: ajusta SITE_URL, correo y token de analítica
npm run dev            # http://localhost:5173
```

## Build de producción

```bash
npm run build          # genera build/client (sitio estático listo para subir)
npm run preview        # sirve build/client en http://localhost:4173
npm start               # servidor de producción (Railway): usa $PORT o 8080, redirige por idioma y da el 404 de cada idioma
npm run typecheck      # revisión de tipos
```

El build:

1. Prerenderiza cada ruta a HTML (`build/client/heic-a-jpg.html`, `build/client/comprimir-imagen.html`, …) con el contenido, title, description, canónica, Open Graph y JSON-LD ya incluidos.
2. Genera `404.html`, `sitemap.xml` y `robots.txt` a partir de `src/config/paths.ts`, usando la variable `SITE_URL`.
3. Genera el service worker y el manifest de la PWA.

## Deploy en Cloudflare Pages (paso a paso)

1. Sube el proyecto a un repositorio de GitHub o GitLab.
2. En el panel de Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** y elige el repositorio.
3. Configuración de build:
    - **Framework preset:** `None`
    - **Build command:** `npm run build`
    - **Build output directory:** `build/client`
    - **Root directory:** `/` (déjalo vacío)
4. En **Environment variables** (Production y Preview) agrega:
    - `SITE_URL` = `https://tu-dominio.com` (cuando lo compres; mientras tanto `https://<proyecto>.pages.dev`)
    - `NODE_VERSION` = `22`
    - `VITE_CF_BEACON_TOKEN` = (opcional) token de Web Analytics
5. **Save and Deploy**.
6. Cuando compres el dominio: **Custom domains → Set up a custom domain**, actualiza `SITE_URL` y vuelve a desplegar (así se regeneran canónicas y sitemap).

También puedes subirlo sin Git: `npm run build && npx wrangler pages deploy build/client --project-name dorfic`.

> Cloudflare Pages sirve `heic-a-jpg.html` en la URL `/heic-a-jpg` y usa el `404.html` más cercano (`/en/404.html`, `/pt/404.html`…) para las rutas que no existen. No hace falta ningún archivo `_redirects`.
>
> La carpeta `functions/` se despliega sola como **Pages Function** (redirección por idioma, ver abajo). `public/_routes.json` limita la función a las URLs en español para no gastar invocaciones en assets.

## Analítica (Cloudflare Web Analytics, sin cookies)

En Cloudflare: **Analytics & Logs → Web Analytics → Add a site**, copia el token y guárdalo en `VITE_CF_BEACON_TOKEN`. (Si el sitio está en Pages con dominio de Cloudflare también puedes activarlo con un clic desde el panel, sin token.)

## Anuncios (Ezoic)

- Los scripts (consentimiento de Gatekeeper primero, luego Ezoic) se insertan al inicio del `<head>` de todas las páginas en el build (`react-router.config.ts`, `HEAD_SCRIPTS`).
- `ads.txt`: `/ads.txt` redirige (301) a adstxtmanager (`server/server.ts`, `REDIRECTS`).
- Los placeholders están en `src/config/site.ts` (`EZOIC_PLACEHOLDERS`). **Cada ID debe existir en Ezoic → Monetization → Ad Placeholders**; si Ezoic te asignó otros números, cámbialos ahí.

| ID | Nombre | Dónde |
|---|---|---|
| 101 | `toolBelow` | Herramienta: debajo de la herramienta (donde aparecen los resultados) |
| 102 | `toolDownload` | Herramienta: panel antes de la primera descarga |
| 103 | `toolContentTop` | Herramienta: dentro del texto, tras el primer tercio |
| 104 | `toolContentMid` | Herramienta: dentro del texto, tras el segundo tercio |
| 105 | `toolContentEnd` | Herramienta: final del texto, antes de las preguntas frecuentes |
| 106 | `toolSidebar` | Herramienta: lateral fijo (solo escritorio) |
| 107 | `toolBottom` | Herramienta: final de la página |
| 108 | `homeBelowHero` | Inicio: debajo del buscador |
| 109 | `homeMid` | Inicio: tras el directorio de herramientas |
| 110 | `homeBottom` | Inicio: final |
| 111 | `pageTop` | Acerca / Contacto / Privacidad / Términos: tras la introducción |
| 112 | `pageBottom` | Acerca / Contacto / Privacidad / Términos: final |

- Un placeholder que Ezoic no llena queda vacío y no ocupa espacio; el margen solo aparece cuando hay anuncio (`.ad-placement` en `globals.css`).
- Ninguno va encima de la herramienta ni pegado a botones. La barra fija inferior (**Anchor Ads**) y los laterales de pantalla ancha (**Side Rails**) se activan en el panel de Ezoic, no en el código.
- La página de Privacidad incluye `<span id="ezoic-privacy-policy-embed">`, que Ezoic llena con la lista de sus socios (requisito de Ezoic).

## SEO

Cada página se prerenderiza con:

- `<title>` y meta description únicos, canónica, `hreflang` de los 5 idiomas + `x-default` y `robots` con `max-image-preview:large`.
- Open Graph y Twitter Card con **imagen propia por herramienta** (`public/og/<slug>.png`, generadas con `npm run icons`).
- JSON-LD: `Organization`, `WebSite`, `WebPage` (con `dateModified`), `SoftwareApplication`, `FAQPage`, `HowTo` (a partir de los pasos) y `BreadcrumbList`; el inicio incluye `ItemList` con todas las herramientas.
- 19 páginas de herramienta con 600 a 800 palabras originales cada una, pensadas para búsquedas concretas ("comprimir imagen a 30 kb", "heic a png", "comprimir png"…).
- Enlazado interno: buscador, directorio del inicio, bloque "Otras opciones" bajo cada herramienta, relacionadas y footer.
- `sitemap.xml` con `lastmod` e imágenes (image sitemap) y `robots.txt`.

**Después de publicar con tu dominio:**

1. Define `SITE_URL` y vuelve a desplegar.
2. Google Search Console: agrega la propiedad, pon el valor de verificación en `VITE_GOOGLE_SITE_VERIFICATION`, despliega, verifica y envía `https://tu-dominio/sitemap.xml`.
3. Bing Webmaster Tools: igual con `VITE_BING_SITE_VERIFICATION` (o importa desde Search Console). Bing alimenta también a DuckDuckGo y Yahoo.
4. En Cloudflare activa **Crawler Hints** (Caching → Configuration) para avisar a Bing/Yandex vía IndexNow cuando cambie el contenido.
5. Pide indexación manual de las páginas más importantes en Search Console la primera semana.

## Estructura

```
src/
  root.tsx                 Layout HTML, header/footer, Motion, PWA, analítica
  routes.ts                Rutas (React Router framework)
  routes/                  tool.tsx (todas las herramientas), home, páginas legales y 404
  config/paths.ts          Idiomas, URLs traducidas, detección de idioma, rutas de prerender/sitemap
  config/tools.ts          Comportamiento de cada herramienta (formatos, presets)
  config/site.ts           SITE_URL, correo, límites
  i18n/<idioma>/            Textos por idioma: ui.ts, tool-cards.ts, search.ts, pages/*, tools/*
  i18n/content.server.ts   Carga el contenido largo en el prerender (no va en el JS)
  lib/locale-preference.ts Cookie del idioma y redirección de respaldo en el navegador
functions/_middleware.ts   Cloudflare Pages Function: redirige a cada visitante a su idioma
  lib/image/               Motor de imágenes: worker, pool, decodificación y compresión
  lib/seo.ts               Meta tags, Open Graph y JSON-LD
  components/tool/         Componente base de herramienta (zona de carga, lista, progreso, ZIP)
  components/base/…        Componentes de Untitled UI
  styles/theme.css         Tema de Untitled UI (brand → orange, sin dark mode)
scripts/generate-icons.mjs Genera favicon, íconos PWA, logo y og-image (npm run icons)
```

### Agregar una herramienta

1. Agrega el slug en `TOOL_SLUGS` (`src/config/paths.ts`) y su comportamiento en `src/config/tools.ts`. Si no es una conversión ni un tamaño en KB, agrega su URL traducida en `TOOL_URL_RULES[...].fixed`.
2. Crea el contenido en `src/i18n/<idioma>/tools/<slug>.ts` y la tarjeta en `src/i18n/<idioma>/tool-cards.ts` **para cada idioma** (TypeScript avisa si falta una tarjeta).
3. No hace falta crear archivos de ruta: `src/routes.ts` genera las URLs de todos los idiomas.

## Idiomas

| Idioma             | URL         | Ejemplo             |
| ------------------ | ----------- | ------------------- |
| Español (México)   | sin prefijo | `/heic-a-jpg`       |
| Inglés             | `/en`       | `/en/heic-to-jpg`   |
| Portugués (Brasil) | `/pt`       | `/pt/heic-para-jpg` |
| Francés            | `/fr`       | `/fr/heic-en-jpg`   |
| Alemán             | `/de`       | `/de/heic-in-jpg`   |

- **Cada idioma tiene sus propias páginas prerenderizadas** (título, contenido, JSON-LD, 404) y se enlazan entre sí con `hreflang`. El contenido largo se carga en el `loader` de cada ruta durante el build, así que no engorda el JavaScript; solo los textos cortos de interfaz (`ui.ts`, `tool-cards.ts`, `search.ts`) van en el bundle.
- **Idioma predeterminado:** la primera vez que alguien entra por una URL en español, se le manda a su idioma según, en este orden: la elección que ya hizo (cookie `dorfic_lang`) → el idioma de su navegador → su país. En Cloudflare lo hace `functions/_middleware.ts` antes de servir la página (sin parpadeo, usa `Accept-Language` y el país de la IP). En desarrollo o en otro hosting lo hace el navegador (`src/lib/locale-preference.ts`, con la zona horaria como aproximación del país).
- **Nunca se redirige** a buscadores ni a quien entra directo a una URL con prefijo (`/en/...`): Google indexa todas las versiones.
- **Selector de idioma** en el header y en el footer; lleva a la misma página en el otro idioma y guarda la elección.
- Las imágenes Open Graph (`public/og/*.png`) son las mismas para todos los idiomas.

### Agregar otro idioma

1. Agrega el código en `LOCALES`, `LOCALE_TAGS`, `LOCALE_NAMES` y sus reglas de URL en `TOOL_URL_RULES` / `PAGE_URLS` (`src/config/paths.ts`). Si aplica, agrega sus países en `COUNTRY_LOCALE`.
2. Copia `src/i18n/en` a `src/i18n/<idioma>`, traduce y regístralo en `src/i18n/index.ts`.
3. Agrega `"/<idioma>/*"` a `exclude` en `public/_routes.json`.

## Diseño e interacción

- **Paleta:** naranja brillante `#FF6A00` (`--color-brand-500/600` en `src/styles/theme.css`). Los botones usan texto blanco sobre ese naranja (decisión de marca; contraste 2.9:1). El texto naranja sobre blanco usa `brand-800` para que se lea.
- **Fondo:** cuadrícula `#e2e8f0` de 20×30 px sobre `#f8fafc`, que se desvanece desde arriba (`.grid-background` en `globals.css`).
- **Buscador:** en el inicio y en el header (Ctrl/Cmd + K). Entiende sinónimos; las palabras clave están en `src/i18n/es/search.ts`.
- **Inicio rápido:** si sueltas una imagen en la portada, se detecta su formato y peso, se sugieren acciones y la herramienta elegida abre con la imagen ya cargada (traspaso en memoria, `src/lib/handoff.ts`; nada se sube).
- **Mascota:** zorro de [page-mascot](https://github.com/nilbuild/page-mascot) (MIT). Sus hojas de sprites están en `public/mascots/` (optimizadas a 720 px). Se carga después del evento `load` para no afectar la velocidad.

## Detalles técnicos

- **Privacidad:** no hay backend ni llamadas de red para procesar. `browser-image-compression` se ejecuta con `useWebWorker: false` dentro de nuestro propio worker (así no descarga nada de un CDN).
- **HEIC:** primero se intenta la decodificación nativa (Safari 17+). Si no hay soporte, `heic2any` se ejecuta dentro del worker con un pequeño adaptador de OffscreenCanvas; en navegadores sin OffscreenCanvas se usa el hilo principal como respaldo.
- **Tamaño objetivo:** primero `browser-image-compression`; si el resultado se pasa del límite, un algoritmo propio hace búsqueda binaria de calidad y, si hace falta, reduce dimensiones. El resultado **nunca** supera el límite pedido.
- **Carga diferida:** heic2any, browser-image-compression y JSZip se cargan con `import()` solo cuando se usan. Las features de Motion (`domMax`) se cargan de forma asíncrona con `LazyMotion`.
- **Animaciones y SEO:** el contenido prerenderizado nunca inicia en `opacity: 0` que dependa de JavaScript. El hero usa una animación CSS; las tarjetas solo se animan si están fuera de la pantalla al hidratar. Con “reducir movimiento” activo, `MotionConfig reducedMotion="user"` y reglas CSS desactivan los desplazamientos.
- **Fuente:** Inter variable recortada a los caracteres del español (`src/assets/fonts/inter-es-wght.woff2`, ≈34 KB) y precargada. Para regenerarla: `pyftsubset Inter.woff2 --unicodes="U+0020-007E,U+00A0-00FF,U+2013-2014,U+2018-201E,U+2022,U+2026,U+20AC,U+2192,U+2212" --flavor=woff2 --output-file=src/assets/fonts/inter-es-wght.woff2` (requiere `pip install fonttools brotli`).
- **Prerender en orden:** `src/entry.server.tsx` siempre espera `onAllReady` y desactiva `progressiveChunkSize`, así el HTML sale completo y en orden (sin bloques de `<Suspense>` al final).
- **Sin modo oscuro:** se eliminaron las variables `.dark-mode` del tema, se quitó el ThemeProvider y se declara `color-scheme: only light` (también evita el oscurecimiento automático de Chrome en Android).

# dorfic
