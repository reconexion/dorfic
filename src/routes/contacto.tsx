import { Mail01 } from "@untitledui/icons";
import { LegalPage, legalMeta } from "@/components/content/legal-page";
import { CONTACT_EMAIL } from "@/config/site";
import { contacto } from "@/i18n/es/pages/legal";

export const meta = () => legalMeta(contacto, "/contacto");

export default function Page() {
    return (
        <LegalPage content={contacto}>
            <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-8 flex items-center gap-4 rounded-xl border border-secondary p-5 shadow-xs transition duration-150 hover:border-brand hover:shadow-md"
            >
                <span className="flex size-12 items-center justify-center rounded-lg bg-brand-primary text-fg-brand-primary">
                    <Mail01 aria-hidden className="size-6" />
                </span>
                <span className="flex flex-col">
                    <span className="text-sm text-tertiary">Correo electrónico</span>
                    <span className="text-lg font-semibold text-brand-secondary">{CONTACT_EMAIL}</span>
                </span>
            </a>
        </LegalPage>
    );
}
