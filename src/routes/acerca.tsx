import { LegalPage, legalMeta } from "@/components/content/legal-page";
import { acerca } from "@/i18n/es/pages/legal";

export const meta = () => legalMeta(acerca, "/acerca");

export default function Page() {
    return <LegalPage content={acerca} />;
}
