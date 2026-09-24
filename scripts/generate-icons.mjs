/**
 * Genera favicon, apple-touch-icon, íconos PWA, logo e imagen Open Graph a partir del isotipo SVG.
 * Uso: npm run icons
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const OUT = path.resolve("public");
const ORANGE = "#FF6A00";
const D_PATH = "M8.5 7H16a9 9 0 0 1 0 18H8.5Zm7.5 5.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z";

// Isotipo con esquinas redondeadas (favicon y logo)
const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="${ORANGE}"/><path fill="#fff" fill-rule="evenodd" d="${D_PATH}"/></svg>`;

// Cuadrado completo (Apple y maskable recortan las esquinas por su cuenta). `scale` deja margen de zona segura.
const square = (scale) => {
    const t = 16 - 16 * scale;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="${ORANGE}"/><g transform="translate(${t} ${t}) scale(${scale})"><path fill="#fff" fill-rule="evenodd" d="${D_PATH}"/></g></svg>`;
};

const FONT = "Inter, 'Noto Sans', 'DejaVu Sans', Arial, sans-serif";

const logo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 40" width="150" height="40"><g transform="translate(4 4)"><rect width="32" height="32" rx="8" fill="${ORANGE}"/><path fill="#fff" fill-rule="evenodd" d="${D_PATH}"/></g><text x="44" y="28.5" font-family="${FONT}" font-size="24" font-weight="600" letter-spacing="-0.5" fill="#181D27">Dorfic</text></svg>`;

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fff"/>
  <rect x="0" y="0" width="1200" height="10" fill="${ORANGE}"/>
  <circle cx="1080" cy="120" r="260" fill="#FFF4EB"/>
  <g transform="translate(96 150) scale(3.4)"><rect width="32" height="32" rx="8" fill="${ORANGE}"/><path fill="#fff" fill-rule="evenodd" d="${D_PATH}"/></g>
  <text x="232" y="232" font-family="${FONT}" font-size="84" font-weight="700" letter-spacing="-2" fill="#181D27">Dorfic</text>
  <text x="96" y="370" font-family="${FONT}" font-size="54" font-weight="600" letter-spacing="-1" fill="#181D27">Herramientas de imagen gratis</text>
  <text x="96" y="440" font-family="${FONT}" font-size="34" fill="#535862">Convierte, comprime y redimensiona en tu navegador.</text>
  <rect x="96" y="492" width="604" height="64" rx="32" fill="#FFF4EB" stroke="#FFA766"/>
  <text x="130" y="534" font-family="${FONT}" font-size="28" font-weight="600" fill="#B84300">Tus fotos nunca salen de tu dispositivo</text>
</svg>`;

const png = (svg, size) => sharp(Buffer.from(svg), { density: 600 }).resize(size, size).png().toBuffer();

/** ICO que contiene un PNG (válido en todos los navegadores modernos). */
const ico = (pngBuf, size) => {
    const header = Buffer.alloc(6 + 16);
    header.writeUInt16LE(0, 0); // reservado
    header.writeUInt16LE(1, 2); // tipo: ícono
    header.writeUInt16LE(1, 4); // número de imágenes
    header.writeUInt8(size, 6); // ancho
    header.writeUInt8(size, 7); // alto
    header.writeUInt16LE(1, 10); // planos
    header.writeUInt16LE(32, 12); // bits por pixel
    header.writeUInt32LE(pngBuf.length, 14); // tamaño de la imagen
    header.writeUInt32LE(22, 18); // posición de la imagen
    return Buffer.concat([header, pngBuf]);
};

await writeFile(path.join(OUT, "favicon.svg"), mark);
await writeFile(path.join(OUT, "logo.svg"), logo);
await writeFile(path.join(OUT, "favicon.ico"), ico(await png(mark, 32), 32));
await writeFile(path.join(OUT, "apple-touch-icon.png"), await png(square(0.72), 180));
await writeFile(path.join(OUT, "pwa-192.png"), await png(mark, 192));
await writeFile(path.join(OUT, "pwa-512.png"), await png(mark, 512));
await writeFile(path.join(OUT, "pwa-maskable-512.png"), await png(square(0.6), 512));
await writeFile(path.join(OUT, "og-image.png"), await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toBuffer());
console.log("Íconos generados en public/");

// ---------- Imagen Open Graph por herramienta (public/og/<slug>.png) ----------
const { toolCards } = await import("../src/i18n/es/tool-cards.ts");
await mkdir(path.join(OUT, "og"), { recursive: true });
const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
for (const [slug, card] of Object.entries(toolCards)) {
    const title = `${card.name} gratis`;
    const size = title.length > 22 ? 72 : 88;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f8fafc"/>
  <g stroke="#e2e8f0" stroke-width="1">${Array.from({ length: 61 }, (_, i) => `<line x1="${i * 20}" y1="0" x2="${i * 20}" y2="630"/>`).join("")}${Array.from({ length: 22 }, (_, i) => `<line x1="0" y1="${i * 30}" x2="1200" y2="${i * 30}"/>`).join("")}</g>
  <rect x="0" y="0" width="1200" height="14" fill="${ORANGE}"/>
  <circle cx="1090" cy="80" r="240" fill="${ORANGE}" opacity="0.12"/>
  <g transform="translate(80 90) scale(2.2)"><rect width="32" height="32" rx="8" fill="${ORANGE}"/><path fill="#fff" fill-rule="evenodd" d="${D_PATH}"/></g>
  <text x="170" y="142" font-family="${FONT}" font-size="46" font-weight="700" fill="#181D27">Dorfic</text>
  <text x="80" y="330" font-family="${FONT}" font-size="${size}" font-weight="800" letter-spacing="-2" fill="#181D27">${esc(title)}</text>
  <text x="80" y="410" font-family="${FONT}" font-size="34" fill="#535862">${esc(card.description.slice(0, 64))}${card.description.length > 64 ? "…" : ""}</text>
  <rect x="80" y="470" width="640" height="72" rx="36" fill="${ORANGE}"/>
  <text x="118" y="517" font-family="${FONT}" font-size="30" font-weight="700" fill="#ffffff">Tus fotos nunca salen de tu dispositivo</text>
</svg>`;
    await writeFile(path.join(OUT, "og", `${slug}.png`), await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true }).toBuffer());
}
console.log(`Imágenes OG generadas: ${Object.keys(toolCards).length}`);
