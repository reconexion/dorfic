import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ isSsrBuild }) => ({
    // Expone SITE_URL (dominio) y VITE_* al código del cliente.
    envPrefix: ["VITE_", "SITE_URL"],
    plugins: [
        tailwindcss(),
        reactRouter(),
        // PWA instalable. Solo en el build del cliente.
        !isSsrBuild &&
            VitePWA({
                registerType: "autoUpdate",
                injectRegister: null, // se registra a mano en src/root.tsx
                outDir: "build/client",
                manifest: {
                    name: "Dorfic",
                    short_name: "Dorfic",
                    description: "Herramientas de imagen gratis que funcionan en tu navegador. Tus fotos nunca salen de tu dispositivo.",
                    lang: "es-MX",
                    start_url: "/",
                    scope: "/",
                    display: "standalone",
                    theme_color: "#ff6a00",
                    background_color: "#ffffff",
                    icons: [
                        { src: "/pwa-192.png", sizes: "192x192", type: "image/png" },
                        { src: "/pwa-512.png", sizes: "512x512", type: "image/png" },
                        { src: "/pwa-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
                    ],
                },
                workbox: {
                    globDirectory: "build/client",
                    // Precarga ligera: estilos e íconos. El JS se guarda en caché conforme se usa
                    // (así no descargamos heic2any a quien nunca convierte HEIC).
                    globPatterns: ["**/*.{css,svg,png,ico,woff2,webmanifest}"],
                    globIgnores: ["og-image.png", "og/**", "mascots/**"],
                    navigateFallback: null,
                    runtimeCaching: [
                        {
                            urlPattern: ({ request }) => request.mode === "navigate",
                            handler: "NetworkFirst",
                            options: { cacheName: "dorfic-pages", networkTimeoutSeconds: 3 },
                        },
                        {
                            urlPattern: ({ url }) => url.pathname.startsWith("/assets/"),
                            handler: "CacheFirst",
                            options: { cacheName: "dorfic-assets", expiration: { maxEntries: 120, maxAgeSeconds: 60 * 60 * 24 * 60 } },
                        },
                    ],
                },
            }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(import.meta.dirname, "./src"),
        },
    },
    build: { sourcemap: process.env.SOURCEMAP === "1" },
    worker: {
        format: "es",
    },
}));
