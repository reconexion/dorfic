import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-30kb",
    title: "Bild auf 30 KB komprimieren",
    metaDescription:
        "Komprimiere dein Foto kostenlos auf 30 KB oder weniger – scharf genug für Bewerbungen, Stipendien und Ausweise. In Sekunden und ohne Upload.",
    h1: "Bild kostenlos auf 30 KB komprimieren",
    lead: "Bring dein Foto auf 30 KB oder weniger und behalte eine gute Schärfe – bereit für Bewerbungen, Stipendien und Online-Ausweise.",
    sections: [
        {
            heading: "30 KB: das Limit vieler Online-Anträge",
            paragraphs: [
                "Viele Formulare für Stipendien, Ausschreibungen, Schulanmeldungen und Bewerbungen verlangen ein Foto mit höchstens 30 KB. Das ist ein Mittelweg: klein genug, damit das System Tausende Akten speichern kann, aber groß genug, damit dein Gesicht klar zu erkennen ist.",
                "Diese Seite ist bereits auf dieses Limit eingestellt. Wähle einfach dein Foto aus: Dorfic probiert verschiedene Kompressionsstufen, wählt die beste Qualität, die in 30 KB passt, und passt bei Bedarf die Abmessungen an, damit das Bild scharf bleibt.",
            ],
        },
        {
            heading: "So bringst du dein Foto auf 30 KB",
            steps: [
                "Mach oder wähle ein Foto von vorn, mit gutem Licht und einfarbigem Hintergrund.",
                "Schneide es so zu, dass Gesicht und Schultern bleiben.",
                "Wähle das Bild hier aus; das Ziel von 30 KB ist schon eingestellt.",
                "Lade das Ergebnis herunter und lade es im Formular hoch.",
            ],
        },
        {
            heading: "So sieht ein Foto mit 30 KB aus",
            paragraphs: [
                "Mit 30 KB kann ein Gesichtsfoto etwa 500 bis 700 Pixel Kantenlänge in guter Auflösung haben. Es sieht am Bildschirm und auf kleinen gedruckten Ausweisen gut aus. Das ist deutlich besser als 20 KB und erfüllt meist die Anforderungen, wenn Institutionen ein digitales Passbild verlangen.",
            ],
        },
        {
            heading: "Tipps, damit dein Foto akzeptiert wird",
            bullets: [
                "Weißer oder heller, einheitlicher Hintergrund; vermeide strukturierte Wände.",
                "Gesicht frontal, ohne Sonnenbrille oder Mütze, sofern nichts anderes angegeben ist.",
                "Gleichmäßiges Licht ohne harte Schatten im Gesicht.",
                "JPG-Format, wenn das System nichts anderes verlangt.",
                "Benenne die Datei wie verlangt, zum Beispiel mit deiner Matrikel- oder Antragsnummer.",
            ],
        },
        {
            heading: "Wenn das Portal genaue Maße verlangt",
            paragraphs: [
                "Manche Systeme verlangen zusätzlich Maße in Pixeln, etwa 600 × 800. Nutze dann zuerst das Tool zum Ändern der Bildgröße mit diesen Maßen und komm danach zum Komprimieren hierher zurück. So erfüllst du beide Anforderungen, ohne das Foto zu verzerren.",
                "Erscheint beim Hochladen „ungültiges Format“, prüfe, ob es kein HEIC (iPhone-Fotos) oder WebP ist. Du kannst es vorher mit unseren Tools in JPG umwandeln.",
            ],
        },
        {
            heading: "Datenschutz",
            paragraphs: [
                "Dein Foto verlässt nie dein Gerät: Die Komprimierung passiert in deinem Browser. Du kannst mehrere Fotos auf einmal verarbeiten und als ZIP herunterladen.",
            ],
        },
        {
            heading: "Häufige Fehler beim Hochladen von Fotos",
            paragraphs: [
                "Der häufigste Fehler ist nicht die Größe, sondern das Format: iPhone-Fotos werden als HEIC gespeichert und von vielen Portalen abgelehnt, selbst wenn sie klein sind. Ein weiteres häufiges Problem: Statt des Originalfotos wird ein Screenshot davon hochgeladen – mit Rändern, Statusleisten und Qualitätsverlust.",
                "Prüfe auch die Ausrichtung: Erscheint das Foto im Portal seitlich, exportiere es erneut. Dorfic behält beim Komprimieren die richtige Ausrichtung bei, sodass die heruntergeladene Datei in jedem System aufrecht angezeigt wird. Und verzichte auf Filter und Beauty-Effekte: Institutionen verlangen meist ein natürliches, aktuelles Foto.",
            ],
        },
    ],
    faqs: [
        {
            q: "Wie verkleinere ich ein Foto am Handy auf 30 KB?",
            a: "Öffne diese Seite, tippe auf „Bilder auswählen“, wähle dein Foto und lade es herunter, sobald das grüne Häkchen erscheint.",
        },
        {
            q: "Hat das Foto dann genau 30 KB?",
            a: "Es hat 30 KB oder etwas weniger. Das Limit wird nie überschritten.",
        },
        {
            q: "Warum hat sich die Pixelgröße geändert?",
            a: "Weil man die Abmessungen manchmal verkleinern muss, um mit guter Schärfe in 30 KB zu passen. Das ist besser als ein großes Foto voller Flecken.",
        },
        {
            q: "Mein Foto stammt vom iPhone und das Portal akzeptiert es nicht – was tun?",
            a: "Wahrscheinlich ist es HEIC. Wandle es zuerst mit dem Tool „HEIC in JPG“ um und komprimiere es dann hier.",
        },
        {
            q: "Ist das sicher?",
            a: "Ja. Dein Foto wird auf deinem Gerät verarbeitet und nie ins Internet hochgeladen.",
        },
    ],
    related: ["comprimir-imagen-a-20kb", "comprimir-imagen-a-50kb", "comprimir-imagen-a-10kb", "redimensionar-imagen", "heic-a-jpg", "comprimir-imagen"],
};

export default content;
