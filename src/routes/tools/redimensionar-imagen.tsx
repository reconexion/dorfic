import { ToolPage, toolMeta } from "@/components/content/tool-page";
import { toolCards } from "@/i18n/es/tool-cards";
import content from "@/i18n/es/tools/redimensionar-imagen";

export const meta = () => toolMeta(content, toolCards[content.slug].name);

export default function Page() {
    return <ToolPage content={content} />;
}
