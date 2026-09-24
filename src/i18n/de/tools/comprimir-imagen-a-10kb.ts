import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-10kb",
    title: "Bild auf 10 KB komprimieren",
    metaDescription:
        "Verkleinere dein Bild kostenlos auf 10 KB oder weniger. Für eingescannte Unterschriften und Systeme mit extremen Limits. Ohne Anmeldung und ohne Upload.",
    h1: "Bild kostenlos auf 10 KB komprimieren",
    lead: "Für die strengsten Systeme: Bring deine Unterschrift oder dein Foto in Sekunden auf 10 KB oder weniger, ohne es hochzuladen.",
    sections: [
        {
            heading: "Wer verlangt Bilder mit 10 KB?",
            paragraphs: [
                "Zehn Kilobyte ist eines der niedrigsten Limits überhaupt. Du findest es vor allem in alten oder sehr restriktiven Systemen: Anmeldungen, bei denen du eine eingescannte Unterschrift hochlädst, digitale Ausweise mit Miniaturfoto, Datenbanken von Schulen oder Behörden mit Tausenden Akten und manche Prüfungs- oder Bewerbungsformulare.",
                "Um von einem 3 MB großen Handyfoto auf 10 KB zu kommen, muss die Datei um mehr als 99 % schrumpfen. Diese Seite ist bereits darauf eingestellt: Dorfic passt Komprimierung und Abmessungen automatisch an, damit das Ergebnis das Limit einhält und so gut wie möglich aussieht.",
            ],
        },
        {
            heading: "So bringst du dein Bild auf 10 KB",
            steps: [
                "Schneide das Bild so zu, dass nur das Nötige bleibt: deine Unterschrift oder Gesicht und Schultern.",
                "Wähle das Bild aus oder zieh es hinein. Das Ziel von 10 KB ist bereits eingestellt.",
                "Verlangt das System JPG, ändere es unter „Ausgabeformat“.",
                "Prüfe die endgültige Größe und lade dein Bild herunter.",
            ],
        },
        {
            heading: "Was du von einem Bild mit 10 KB erwarten kannst",
            paragraphs: [
                "In dieser Größe hat ein Gesichtsfoto etwa 200 bis 300 Pixel Kantenlänge: genug für einen Ausweis am Bildschirm oder eine digitale Akte, aber nicht zum Drucken. Unterschriften funktionieren besonders gut, weil sie aus dunklen Linien auf weißem Hintergrund bestehen und sich mit sehr wenig Verlust komprimieren lassen.",
                "Wirkt das Ergebnis zu unscharf, hilft am meisten, stärker zuzuschneiden. Jeder entfernte Hintergrundbereich lässt mehr Platz für die wichtigen Details.",
            ],
        },
        {
            heading: "Tipps für eingescannte Unterschriften",
            bullets: [
                "Unterschreibe mit schwarzer oder dunkelblauer Tinte auf einem weißen, unlinierten Blatt.",
                "Fotografiere bei gutem Licht, gerade von vorn und ohne Schatten.",
                "Schneide vor dem Komprimieren ganz eng um die Unterschrift zu.",
                "Verlangt das System bestimmte Maße, ändere zuerst die Bildgröße.",
                "Prüfe vor dem Hochladen, ob die fertige Datei gut lesbar ist.",
            ],
        },
        {
            heading: "Und wenn ich 10 KB nicht in guter Qualität schaffe?",
            paragraphs: [
                "Prüfe, ob das System ein etwas höheres Limit akzeptiert: Der Qualitätsunterschied zwischen 10 und 20 KB ist groß. Prüfe auch das erlaubte Format; manche Portale akzeptieren PNG für Unterschriften, was bei feinen Linien sauberer aussehen kann.",
            ],
        },
        {
            heading: "Datenschutz",
            paragraphs: [
                "Unterschriften und Fotos für Anträge sind sensible Daten. Dorfic lädt sie auf keinen Server hoch: Alles wird in deinem Browser verarbeitet. Die fertige Datei enthält keine Metadaten wie den Standort.",
            ],
        },
        {
            heading: "10, 20 oder 30 KB – der Unterschied",
            paragraphs: [
                "Jede Größenstufe verändert deutlich, was ins Bild passt. Bei 10 KB sieht eine Unterschrift sauber aus, ein Gesichtsfoto bleibt aber klein und etwas weich. Bei 20 KB erhältst du schon ein erkennbares Passbild, und bei 30 KB gewinnt dasselbe Foto an Schärfe bei Augen, Haaren und Kanten. Deshalb empfehlen wir, immer das höchste Limit zu nutzen, das das System erlaubt: Es bringt nichts, weit darunter zu bleiben.",
                "Kennst du das genaue Limit nicht, schau in die Hinweise des Portals oder in die Fehlermeldung, die beim Hochladen erscheint; meist steht dort die maximal erlaubte Größe. Wähle dann die passende Dorfic-Seite oder gib den genauen Wert im allgemeinen Komprimierer ein.",
            ],
        },
    ],
    faqs: [
        {
            q: "Kann man ein Handyfoto auf 10 KB komprimieren?",
            a: "Ja. Dorfic verringert Qualität und Abmessungen so weit wie nötig, damit es 10 KB oder weniger hat.",
        },
        {
            q: "Sieht das gut aus?",
            a: "Für Unterschriften und kleine Passbilder ja. Für Drucke oder sehr detailreiche Bilder ist diese Größe nicht geeignet.",
        },
        {
            q: "Hat es dann genau 10 KB?",
            a: "Es hat 10 KB oder etwas weniger, nie mehr als das Limit.",
        },
        {
            q: "Wird meine Unterschrift irgendwo gespeichert?",
            a: "Nein. Sie verlässt nie dein Gerät und verschwindet, wenn du die Seite schließt.",
        },
        {
            q: "Was tun, wenn das Portal Maße in Pixeln verlangt?",
            a: "Nutze zuerst das Tool zum Ändern der Bildgröße mit den verlangten Maßen und komprimiere dann hier.",
        },
    ],
    related: ["comprimir-imagen-a-20kb", "comprimir-imagen-a-30kb", "comprimir-imagen-a-50kb", "redimensionar-imagen", "comprimir-imagen", "heic-a-jpg"],
};

export default content;
