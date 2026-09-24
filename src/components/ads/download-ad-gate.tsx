import { useEffect, useRef, useState } from "react";
import { Download01 } from "@untitledui/icons";
import { m } from "motion/react";
import { AdPlacement } from "@/components/ads/ad-slot";
import { Button } from "@/components/base/buttons/button";
import { DOWNLOAD_AD_SECONDS } from "@/config/site";
import { fmt, useUi } from "@/i18n";

interface DownloadAdGateProps {
    onContinue: () => void;
    onCancel: () => void;
}

/**
 * Panel con un anuncio corto que aparece antes de entregar la descarga.
 *
 * Va DENTRO de la página (no es un pop-up ni cubre la pantalla): las políticas de las redes
 * publicitarias no permiten anuncios en ventanas emergentes. Por la misma razón los botones
 * quedan separados del anuncio, para evitar clics accidentales.
 */
export const DownloadAdGate = ({ onContinue, onCancel }: DownloadAdGateProps) => {
    const ui = useUi();
    const [left, setLeft] = useState(DOWNLOAD_AD_SECONDS);
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        rootRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        rootRef.current?.focus({ preventScroll: true });
    }, []);

    useEffect(() => {
        if (left <= 0) return;
        const t = setTimeout(() => setLeft((s) => s - 1), 1000);
        return () => clearTimeout(t);
    }, [left]);

    return (
        <m.div
            ref={rootRef}
            tabIndex={-1}
            role="region"
            aria-label={ui.downloadAd.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-4 rounded-2xl bg-primary p-4 text-center shadow-md ring-1 ring-brand-100 outline-none md:p-6"
        >
            <div>
                <p className="text-lg font-semibold text-primary">{ui.downloadAd.title}</p>
                <p className="mt-1 text-sm text-tertiary">{ui.downloadAd.body}</p>
            </div>

            <AdPlacement name="toolDownload" className="[--ad-gap:0.5rem]" />

            <div className="mt-2 flex w-full flex-col-reverse gap-2 sm:w-auto sm:flex-row">
                <Button size="md" color="tertiary" onClick={onCancel}>
                    {ui.downloadAd.cancel}
                </Button>
                <Button size="lg" iconLeading={Download01} isDisabled={left > 0} onClick={onContinue} className="w-full sm:w-auto">
                    <span aria-live="polite">{left > 0 ? fmt(ui.downloadAd.wait, { s: left }) : ui.downloadAd.continue}</span>
                </Button>
            </div>
        </m.div>
    );
};
