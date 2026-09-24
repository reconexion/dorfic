/** Destellos naranjas flotando detrás del hero (solo CSS). La cuadrícula está en el layout (grid-background). */
export const HeroBackground = ({ compact }: { compact?: boolean }) => (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className={compact ? "hero-orb hero-orb-a -top-40 left-[-30%] size-[300px] opacity-60 md:left-[-10%] md:size-[420px] md:opacity-100" : "hero-orb hero-orb-a -top-40 left-[-40%] size-[340px] opacity-60 md:-top-48 md:left-[-12%] md:size-[620px] md:opacity-100"} />
        <div className={compact ? "hero-orb hero-orb-b -top-24 right-[-30%] size-[260px] opacity-60 md:right-[-8%] md:size-[360px] md:opacity-100" : "hero-orb hero-orb-b -top-20 right-[-40%] size-[300px] opacity-60 md:right-[-10%] md:size-[520px] md:opacity-100"} />
    </div>
);
