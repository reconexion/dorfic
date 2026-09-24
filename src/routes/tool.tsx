import { ToolPage, toolMeta } from "@/components/content/tool-page";
import { resolvePath } from "@/config/paths";
import { getToolCards } from "@/i18n";
import { loadToolContent } from "@/i18n/content.server";
import type { ToolContent } from "@/i18n/types";

interface LoaderData {
    content: ToolContent;
}

/** Corre en el prerender: el texto de la herramienta en el idioma de la URL. */
export async function loader({ request }: { request: Request }): Promise<LoaderData> {
    const { locale, target } = resolvePath(new URL(request.url).pathname);
    if (target.type !== "tool") throw new Response("Not Found", { status: 404 });
    return { content: await loadToolContent(locale, target.id) };
}

export const meta = ({ loaderData, location }: { loaderData?: LoaderData; location: { pathname: string } }) => {
    if (!loaderData) return [];
    const { locale } = resolvePath(location.pathname);
    return toolMeta(loaderData.content, getToolCards(locale)[loaderData.content.slug].name, locale);
};

export default function Page({ loaderData }: { loaderData: LoaderData }) {
    return <ToolPage content={loaderData.content} />;
}
