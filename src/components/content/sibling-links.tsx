import { Link } from "react-router";
import { TOOL_SLUGS, type ToolSlug } from "@/config/paths";
import { TOOLS } from "@/config/tools";
import { useToolCards } from "@/i18n";
import { cx } from "@/utils/cx";

/**
 * Accesos rápidos a herramientas hermanas (otros tamaños u otros formatos).
 * Ayudan al usuario a cambiar de opción en un toque y refuerzan el enlazado interno (SEO).
 */
export const SiblingLinks = ({ current, label }: { current: ToolSlug; label: string }) => {
    const cards = useToolCards();
    const group = TOOLS[current].group;
    const siblings = TOOL_SLUGS.filter((s) => TOOLS[s].group === group || (group === "resize" && TOOLS[s].group === "compress")).slice(0, 12);

    return (
        <nav aria-label={label} className="mt-5">
            <p className="mb-2 text-center text-xs font-semibold tracking-wide text-quaternary uppercase">{label}</p>
            <ul className="scrollbar-hide -mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
                {siblings.map((slug) => (
                    <li key={slug} className="shrink-0 snap-start">
                        <Link
                            to={`/${slug}`}
                            aria-current={slug === current ? "page" : undefined}
                            className={cx(
                                "inline-flex rounded-full px-3 py-1.5 text-sm font-semibold whitespace-nowrap ring-1 transition duration-150 motion-safe:active:scale-[0.97]",
                                slug === current
                                    ? "bg-brand-solid text-white ring-transparent"
                                    : "bg-primary text-brand-secondary ring-brand-200 hover:bg-brand-50 hover:ring-brand-300",
                            )}
                        >
                            {cards[slug].name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
