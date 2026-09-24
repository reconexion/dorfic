import { ArrowRight } from "@untitledui/icons";
import { Link } from "react-router";
import { Reveal } from "@/components/motion/reveal";
import type { ToolSlug } from "@/config/paths";
import { TOOLS } from "@/config/tools";
import { useLocalePath, useToolCards, useUi } from "@/i18n";
import { cx } from "@/utils/cx";

/** Tarjetas de herramientas: aparecen escalonadas al hacer scroll y se elevan al pasar el cursor (CSS, sin JS). */
export const ToolGrid = ({ slugs, headingLevel = "h3", className }: { slugs: readonly ToolSlug[]; headingLevel?: "h2" | "h3"; className?: string }) => {
    const cards = useToolCards();
    const to = useLocalePath();
    const ui = useUi();
    const Heading = headingLevel;

    return (
        <ul className={cx("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
            {slugs.map((slug, i) => {
                const Icon = TOOLS[slug].icon;
                return (
                    <li key={slug}>
                        <Reveal delay={(i % 3) * 0.06} className="h-full">
                            <Link
                                to={to({ type: "tool", id: slug })}
                                className="group flex h-full flex-col gap-3 rounded-2xl border border-brand-100 bg-primary p-5 shadow-xs outline-focus-ring transition-[translate,box-shadow,border-color] duration-200 ease-out hover:border-brand hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 motion-safe:hover:-translate-y-[3px]"
                            >
                                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-primary text-fg-brand-primary transition duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-brand-solid group-hover:text-white group-hover:shadow-[0_8px_18px_-6px_rgb(255_106_0/0.8)]">
                                    <Icon className="size-5" />
                                </span>
                                <Heading className="text-md font-semibold text-primary">{cards[slug].name}</Heading>
                                <p className="text-sm text-tertiary">{cards[slug].description}</p>
                                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-secondary">
                                    {ui.toolPage.open}
                                    <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                </span>
                            </Link>
                        </Reveal>
                    </li>
                );
            })}
        </ul>
    );
};
