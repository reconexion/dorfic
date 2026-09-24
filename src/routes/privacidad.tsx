import { LegalPage, legalMeta } from "@/components/content/legal-page";
import { privacidad } from "@/i18n/es/pages/legal";

export const meta = () => legalMeta(privacidad, "/privacidad");

export default function Page() {
    return <LegalPage content={privacidad} />;
}
