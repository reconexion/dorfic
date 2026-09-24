import { Send01 } from "@untitledui/icons";
import { type LegalLoaderData, LegalPage, legalMeta } from "@/components/content/legal-page";
import { resolvePath } from "@/config/paths";
import { CONTACT_TELEGRAM, CONTACT_TELEGRAM_URL } from "@/config/site";
import { useUi } from "@/i18n";
import { loadPageContent } from "@/i18n/content.server";

export async function loader({ request }: { request: Request }): Promise<LegalLoaderData> {
    return { content: await loadPageContent(resolvePath(new URL(request.url).pathname).locale, "contacto") };
}

export const meta = legalMeta("contacto");

export default function Page({ loaderData }: { loaderData: LegalLoaderData }) {
    const ui = useUi();
    return (
        <LegalPage content={loaderData.content}>
            <a
                href={CONTACT_TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center gap-4 rounded-xl border border-secondary p-5 shadow-xs transition duration-150 hover:border-brand hover:shadow-md"
            >
                <span className="flex size-12 items-center justify-center rounded-lg bg-brand-primary text-fg-brand-primary">
                    <Send01 aria-hidden className="size-6" />
                </span>
                <span className="flex flex-col">
                    <span className="text-sm text-tertiary">{ui.contactPage.telegramLabel}</span>
                    <span className="text-lg font-semibold text-brand-secondary">@{CONTACT_TELEGRAM}</span>
                </span>
            </a>
        </LegalPage>
    );
}
