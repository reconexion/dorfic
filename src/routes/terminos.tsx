import { LegalPage, legalMeta } from "@/components/content/legal-page";
import { terminos } from "@/i18n/es/pages/legal";

export const meta = () => legalMeta(terminos, "/terminos");

export default function Page() {
    return <LegalPage content={terminos} />;
}
