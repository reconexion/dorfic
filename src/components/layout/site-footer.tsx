import { Lock01 } from "@untitledui/icons";
import { Link } from "react-router";
import { Logo } from "@/components/brand/logo";
import { TOOL_SLUGS } from "@/config/paths";
import { fmt, useToolCards, useUi } from "@/i18n";

export const SiteFooter = () => {
    const ui = useUi();
    const cards = useToolCards();
    const year = new Date().getFullYear();

    const linkClass = "text-sm text-tertiary transition duration-150 ease-out hover:text-brand-secondary";

    return (
        <footer className="mt-16 border-t-4 border-brand-500 bg-primary">
            <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
                <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
                    <div className="flex flex-col gap-4">
                        <Link to="/" aria-label={ui.brand.homeLink} className="w-max">
                            <Logo />
                        </Link>
                        <p className="max-w-xs text-sm text-tertiary">{ui.brand.tagline}.</p>
                        <p className="flex items-center gap-2 text-sm font-medium text-secondary">
                            <Lock01 aria-hidden className="size-4 text-fg-brand-primary" />
                            {ui.privacy.badge}
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-3">
                        <nav aria-label={ui.footer.tools} className="sm:col-span-2">
                            <h2 className="mb-3 text-sm font-semibold text-primary">{ui.footer.tools}</h2>
                            <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                                {TOOL_SLUGS.map((slug) => (
                                    <li key={slug}>
                                        <Link to={`/${slug}`} className={linkClass}>
                                            {cards[slug].name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="flex flex-col gap-8">
                            <nav aria-label={ui.footer.company}>
                                <h2 className="mb-3 text-sm font-semibold text-primary">{ui.footer.company}</h2>
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <Link to="/acerca" className={linkClass}>
                                            Acerca de
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contacto" className={linkClass}>
                                            Contacto
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav aria-label={ui.footer.legal}>
                                <h2 className="mb-3 text-sm font-semibold text-primary">{ui.footer.legal}</h2>
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <Link to="/privacidad" className={linkClass}>
                                            Aviso de privacidad
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/terminos" className={linkClass}>
                                            Términos de uso
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-2 border-t border-secondary pt-6 text-sm text-tertiary md:flex-row md:justify-between">
                    <p>{fmt(ui.footer.rights, { year })}</p>
                    <p>{ui.footer.madeWith}</p>
                </div>
            </div>
        </footer>
    );
};
