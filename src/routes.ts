import { type RouteConfig, route } from "@react-router/dev/routes";
import { LOCALES, PAGE_SLUGS, TOOL_SLUGS, localizePath } from "./config/paths";

// Cada idioma tiene sus propias URLs (/heic-a-jpg, /en/heic-to-jpg, …) que apuntan al mismo módulo.
// El módulo sabe qué idioma y qué herramienta mostrar a partir de la URL (ver resolvePath).
const at = (path: string) => (path === "/" ? "" : path.slice(1));

export default [
    ...LOCALES.flatMap((locale) => [
        route(at(localizePath(locale, { type: "home" })), "routes/home.tsx", { id: `home-${locale}` }),
        ...TOOL_SLUGS.map((id) => route(at(localizePath(locale, { type: "tool", id })), "routes/tool.tsx", { id: `tool-${locale}-${id}` })),
        ...PAGE_SLUGS.map((id) => route(at(localizePath(locale, { type: "page", id })), `routes/${id}.tsx`, { id: `page-${locale}-${id}` })),
    ]),
    route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
