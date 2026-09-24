import { ArrowRight } from "@untitledui/icons";
import { Link } from "react-router";
import { TOOL_SLUGS } from "@/config/paths";
import { TOOLS } from "@/config/tools";
import { useLocalePath, useToolCards } from "@/i18n";

/** Directorio compacto de todas las herramientas, agrupadas por tipo (rápido de escanear). */
export const ToolDirectory = ({ labels }: { labels: Record<"convert" | "compress" | "resize", string> }) => {
    const cards = useToolCards();
    const to = useLocalePath();
    const groups = (["compress", "convert", "resize"] as const).map((g) => ({ g, slugs: TOOL_SLUGS.filter((s) => TOOLS[s].group === g) }));

    return (
        <div className="grid gap-6 md:grid-cols-3">
            {groups.map(({ g, slugs }) => (
                <section key={g} aria-labelledby={`dir-${g}`} className="rounded-2xl bg-primary p-4 shadow-xs ring-1 ring-brand-100">
                    <h3 id={`dir-${g}`} className="mb-2 px-2 text-sm font-bold tracking-wide text-brand-secondary uppercase">
                        {labels[g]}
                    </h3>
                    <ul className="flex flex-col">
                        {slugs.map((slug) => {
                            const Icon = TOOLS[slug].icon;
                            return (
                                <li key={slug}>
                                    <Link
                                        to={to({ type: "tool", id: slug })}
                                        className="group flex items-center gap-3 rounded-xl px-2 py-2 font-semibold text-secondary transition duration-150 hover:bg-brand-50 hover:text-primary"
                                    >
                                        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-fg-brand-primary transition duration-200 group-hover:bg-brand-solid group-hover:text-white">
                                            <Icon className="size-4" />
                                        </span>
                                        {cards[slug].name}
                                        <ArrowRight
                                            aria-hidden
                                            className="ml-auto size-4 text-fg-brand-primary opacity-0 transition duration-150 group-hover:translate-x-0.5 group-hover:opacity-100"
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            ))}
        </div>
    );
};
