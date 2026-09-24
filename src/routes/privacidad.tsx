import { type LegalLoaderData, LegalPage, legalMeta } from "@/components/content/legal-page";
import { resolvePath } from "@/config/paths";
import { loadPageContent } from "@/i18n/content.server";

export async function loader({ request }: { request: Request }): Promise<LegalLoaderData> {
    return { content: await loadPageContent(resolvePath(new URL(request.url).pathname).locale, "privacidad") };
}

export const meta = legalMeta("privacidad");

export default function Page({ loaderData }: { loaderData: LegalLoaderData }) {
    // Ezoic llena este elemento con la lista de sus socios publicitarios y sus cookies (requisito de Ezoic).
    return <LegalPage content={loaderData.content} after={<span id="ezoic-privacy-policy-embed" />} />;
}
