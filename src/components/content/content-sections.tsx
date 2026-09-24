import type { ContentSection } from "@/i18n/types";

/** Renderiza secciones de texto SEO (párrafos, pasos numerados y viñetas). */
export const ContentSections = ({ sections }: { sections: ContentSection[] }) => (
    <>
        {sections.map((section) => (
            <section key={section.heading} className="mt-10 first:mt-0">
                <h2 className="text-display-xs font-semibold text-primary">{section.heading}</h2>
                {section.paragraphs?.map((p) => (
                    <p key={p.slice(0, 40)} className="mt-4 text-lg text-tertiary">
                        {p}
                    </p>
                ))}
                {section.steps && (
                    <ol className="mt-4 flex flex-col gap-3">
                        {section.steps.map((step, i) => (
                            <li key={step.slice(0, 40)} id={`paso-${i + 1}`} className="flex scroll-mt-24 gap-3 text-lg text-tertiary">
                                <span
                                    aria-hidden
                                    className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-semibold text-brand-secondary"
                                >
                                    {i + 1}
                                </span>
                                <span>{step}</span>
                            </li>
                        ))}
                    </ol>
                )}
                {section.bullets && (
                    <ul className="mt-4 flex flex-col gap-2">
                        {section.bullets.map((b) => (
                            <li key={b.slice(0, 40)} className="flex gap-3 text-lg text-tertiary">
                                <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-fg-brand-primary" />
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        ))}
    </>
);
