import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { TOOL_SLUGS } from "./config/paths";

export default [
    index("routes/home.tsx"),
    ...TOOL_SLUGS.map((slug) => route(slug, `routes/tools/${slug}.tsx`)),
    route("acerca", "routes/acerca.tsx"),
    route("contacto", "routes/contacto.tsx"),
    route("privacidad", "routes/privacidad.tsx"),
    route("terminos", "routes/terminos.tsx"),
    route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
