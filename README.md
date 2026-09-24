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
   - `VITE_CONTACT_EMAIL` = tu correo público
   - `VITE_CF_BEACON_TOKEN` = (opcional) token de Web Analytics
5. **Save and Deploy**.
6. Cuando compres el dominio: **Custom domains → Set up a custom domain**, actualiza `SITE_URL` y vuelve a desplegar (así se regeneran canónicas y sitemap).

También puedes subirlo sin Git: `npm run build && npx wrangler pages deploy build/client --project-name dorfic`.

> Cloudflare Pages sirve `heic-a-jpg.html` en la URL `/heic-a-jpg` y usa `404.html` para las rutas que no existen. No hace falta ningún archivo `_redirects`.

## Analítica (Cloudflare Web Analytics, sin cookies)

En Cloudflare: **Analytics & Logs → Web Analytics → Add a site**, copia el token y guárdalo en `VITE_CF_BEACON_TOKEN`. (Si el sitio está en Pages con dominio de Cloudflare también puedes activarlo con un clic desde el panel, sin token.)

## Anuncios (Google AdSense)

- Los espacios están en `src/components/ads/ad-slot.tsx`. Tienen **altura fija** para no causar CLS, están etiquetados como "Publicidad" y nunca cubren la herramienta ni quedan pegados a botones.
- Distribución por página de herramienta: debajo de la herramienta, dos dentro del contenido (separados por texto), uno antes de las herramientas relacionadas y uno fijo en la barra lateral de escritorio. En el inicio: uno bajo el hero y otro tras el directorio.
- Opcional: en AdSense puedes activar **Auto ads → Anchor (anuncio de anclaje)** para móvil; se descarta con un toque y no tapa la herramienta.
- Cuando AdSense te apruebe:
  1. Pega el script de AdSense donde indica el comentario en `src/root.tsx` (`<head>`).
  2. Reemplaza el `<div data-ad-slot>` de `ad-slot.tsx` por el bloque `<ins class="adsbygoogle">` (instrucciones en el comentario del archivo).
  3. Crea `public/ads.txt` con la línea que te da AdSense.

## SEO

Cada página se prerenderiza con:

- `<title>` y meta description únicos, canónica, `hreflang` (es-MX, es, x-default) y `robots` con `max-image-preview:large`.
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
  routes/                  Una ruta por página (tools/*.tsx para cada herramienta)
  config/paths.ts          Lista única de rutas (prerender + sitemap)
  config/tools.ts          Comportamiento de cada herramienta (formatos, presets)
  config/site.ts           SITE_URL, correo, límites
  i18n/                    Textos separados por idioma (es/ui.ts, es/tools/*, es/pages/*)
  lib/image/               Motor de imágenes: worker, pool, decodificación y compresión
  lib/seo.ts               Meta tags, Open Graph y JSON-LD
  components/tool/         Componente base de herramienta (zona de carga, lista, progreso, ZIP)
  components/base/…        Componentes de Untitled UI
  styles/theme.css         Tema de Untitled UI (brand → orange, sin dark mode)
scripts/generate-icons.mjs Genera favicon, íconos PWA, logo y og-image (npm run icons)
```

### Agregar una herramienta

1. Agrega el slug en `src/config/paths.ts` y su comportamiento en `src/config/tools.ts`.
2. Crea el contenido en `src/i18n/es/tools/<slug>.ts` y la tarjeta en `src/i18n/es/tool-cards.ts`.
3. Crea `src/routes/tools/<slug>.tsx` (copia cualquiera de los existentes).

### Agregar idiomas (/pt, /en)

Los textos ya viven fuera de los componentes. Para agregar portugués:

1. Copia `src/i18n/es` a `src/i18n/pt` y traduce.
2. Registra el diccionario en `src/i18n/index.ts` y agrega `"pt"` a `LOCALES` en `src/config/paths.ts`.
3. En `src/routes.ts` agrega las rutas con prefijo (`route("pt/…", …)`) y provee `LocaleContext` con el idioma según la URL.
4. Agrega las rutas `/pt/...` a `INDEXABLE_PATHS` para prerender y sitemap, y etiquetas `hreflang` en `lib/seo.ts`.

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
