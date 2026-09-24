import { useId, useState } from "react";
import { ChevronDown } from "@untitledui/icons";
import { m } from "motion/react";
import type { Faq } from "@/i18n/types";
import { cx } from "@/utils/cx";

/**
 * Acordeón de preguntas frecuentes. Las respuestas SIEMPRE están en el HTML
 * (para SEO y el JSON-LD de FAQPage); solo se anima la altura al abrir/cerrar.
 */
const FaqItem = ({ faq, defaultOpen }: { faq: Faq; defaultOpen?: boolean }) => {
    const [open, setOpen] = useState(Boolean(defaultOpen));
    const id = useId();

    return (
        <div className="border-b border-secondary">
            <h3>
                <button
                    type="button"
                    id={`${id}-q`}
                    aria-expanded={open}
                    aria-controls={`${id}-a`}
                    onClick={() => setOpen((v) => !v)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-md font-semibold text-primary outline-focus-ring focus-visible:outline-2"
                >
                    {faq.q}
                    <ChevronDown aria-hidden className={cx("size-5 shrink-0 text-fg-quaternary transition-transform duration-200", open && "rotate-180")} />
                </button>
            </h3>
            <m.div
                id={`${id}-a`}
                role="region"
                aria-labelledby={`${id}-q`}
                initial={false}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
            >
                <p className="pb-4 text-md text-tertiary">{faq.a}</p>
            </m.div>
        </div>
    );
};

export const FaqList = ({ faqs, title }: { faqs: Faq[]; title: string }) => (
    <section aria-labelledby="faq-title" className="mt-12">
        <h2 id="faq-title" className="text-display-xs font-semibold text-primary">
            {title}
        </h2>
        <div className="mt-4 border-t border-secondary">
            {faqs.map((faq, i) => (
                <FaqItem key={faq.q} faq={faq} defaultOpen={i === 0} />
            ))}
        </div>
    </section>
);
