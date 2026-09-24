import { type LegalLoaderData, LegalPage, legalMeta } from "@/components/content/legal-page";
import { resolvePath } from "@/config/paths";
import { loadPageContent } from "@/i18n/content.server";

export async function loader({ request }: { request: Request }): Promise<LegalLoaderData> {
    return { content: await loadPageContent(resolvePath(new URL(request.url).pathname).locale, "acerca") };
}

export const meta = legalMeta("acerca");

export default function Page({ loaderData }: { loaderData: LegalLoaderData }) {
    return <LegalPage content={loaderData.content} />;
}
