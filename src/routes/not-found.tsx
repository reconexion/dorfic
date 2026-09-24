import { FoxMascot } from "@/components/brand/fox-mascot";
import { ButtonLink } from "@/components/base/buttons/button-link";
import { ToolGrid } from "@/components/content/tool-grid";
import { getUi, useUi } from "@/i18n";
import { buildMeta } from "@/lib/seo";

export const meta = () => {
    const ui = getUi();
    return buildMeta({ title: ui.notFound.title, description: ui.notFound.description, path: "/404", noindex: true });
};

export default function NotFound() {
    const ui = useUi();
    return (
        <div className="mx-auto max-w-5xl px-4 py-16 text-center md:px-8 md:py-24">
            {/* El zorro de Dorfic flota suavemente buscando la página perdida. */}
            <div className="float-bob mx-auto w-max">
                <FoxMascot size={150} />
            </div>
            <p className="mt-6 text-sm font-semibold text-brand-secondary">Error 404</p>
            <h1 className="mt-2 text-display-sm font-semibold tracking-tight text-primary md:text-display-md">{ui.notFound.heading}</h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-tertiary">{ui.notFound.body}</p>
            <ButtonLink to="/" size="xl" className="mt-8">
                {ui.notFound.cta}
            </ButtonLink>
            <div className="mt-16 text-left">
                <ToolGrid slugs={["heic-a-jpg", "comprimir-imagen", "redimensionar-imagen"]} />
            </div>
        </div>
    );
}
