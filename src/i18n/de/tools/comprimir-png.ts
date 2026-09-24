import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-png",
    title: "PNG komprimieren",
    metaDescription:
        "Komprimiere PNG-Bilder kostenlos: Verkleinere Screenshots, Logos und Grafiken, behalte die Transparenz oder wandle sie in JPG oder WebP um. Ohne Upload.",
    h1: "PNG kostenlos komprimieren",
    lead: "Mach deine PNG-Screenshots, Logos und Grafiken kleiner. Behalte die Transparenz oder wechsle mit einem Klick zu einem kleineren Format.",
    sections: [
        {
            heading: "Warum sich PNG schwer komprimieren lässt",
            paragraphs: [
                "PNG ist ein verlustfreies Format: Es speichert jedes Pixel exakt so, wie es ist. Deshalb ist es perfekt für Logos, Symbole, Screenshots mit Text und alle Bilder mit transparentem Hintergrund – und deshalb ist es auch so groß, wenn es Fotos oder Farbverläufe enthält.",
                "Da PNG keine Informationen verwirft, lässt sich die Größe nur verringern, indem man die Pixelanzahl reduziert oder zu einem verlustbehafteten Format wie WebP oder JPG wechselt. Bei Dorfic hast du die Wahl: das PNG behalten und die Abmessungen bis zur gewünschten Größe anpassen oder es umwandeln, um eine viel stärkere Verkleinerung zu erreichen.",
            ],
        },
        {
            heading: "So komprimierst du ein PNG – Schritt für Schritt",
            steps: [
                "Wähle deine PNG-Dateien aus oder zieh sie hinein. Screenshots kannst du auch mit Strg + V einfügen.",
                "Wähle die maximale Größe in KB oder den Qualitätsmodus.",
                "Lass unter „Ausgabeformat“ PNG stehen, wenn du Transparenz brauchst, oder wähle WebP oder JPG, um viel mehr zu sparen.",
                "Lade deine Bilder einzeln oder alle als ZIP herunter.",
            ],
        },
        {
            heading: "Welches Ausgabeformat passt?",
            bullets: [
                "PNG: behält Transparenz und perfekte Schärfe; um die Größe zu senken, werden die Abmessungen verkleinert.",
                "WebP: behält die Transparenz und ist meist 60 % bis 80 % kleiner. Ideal für Websites.",
                "JPG: am kompatibelsten und für Fotos am kleinsten, füllt den transparenten Hintergrund aber weiß.",
            ],
        },
        {
            heading: "Wobei es dir hilft",
            bullets: [
                "Screenshots mit mehreren Megabyte, die du per E-Mail oder Chat schicken willst.",
                "Logos für deine Website, Präsentationen oder E-Mail-Signaturen.",
                "Produktbilder mit transparentem Hintergrund für einen Onlineshop.",
                "Diagramme und Grafiken, die du in Dokumente oder Berichte einfügst.",
                "PNGs aus Designprogrammen, die mit höherer Auflösung als nötig exportiert wurden.",
            ],
        },
        {
            heading: "Tipps für Screenshots und Logos",
            paragraphs: [
                "Screenshots moderner Handys haben enorm viele Pixel. Wenn du sie nur am Bildschirm ansiehst, fällt eine Halbierung der Größe kaum auf und die Datei schrumpft auf ein Viertel. Bei Logos denk an die tatsächliche Anzeigegröße: Ein Logo mit 400 Pixeln Breite reicht fürs Web meist aus und ist nur ein Bruchteil so groß wie das Original.",
                "Ist dein PNG eigentlich ein Foto ohne Transparenz, wandelt der Automatikmodus des allgemeinen Komprimierers es in JPG um – die Ersparnis ist riesig. Hier lassen wir dagegen PNG als Standardausgabe, um alle zu berücksichtigen, die Transparenz brauchen.",
            ],
        },
        {
            heading: "Privat und ohne Limits",
            paragraphs: [
                "Deine Bilder werden in deinem Browser verarbeitet und nie an einen Server gesendet. Du kannst bis zu 50 Dateien pro Durchgang mit je bis zu 50 MB verarbeiten – ohne Anmeldung und ohne Wasserzeichen.",
            ],
        },
        {
            heading: "PNG mit 8 Bit, 24 Bit und Transparenz",
            paragraphs: [
                "PNGs können mit unterschiedlicher Farbtiefe gespeichert werden. PNGs mit 24 oder 32 Bit unterstützen Millionen Farben und weiche Transparenz – ideal für freigestellte Fotos und Schatten, aber auch am größten. Browser erzeugen beim Speichern aus einem Canvas 32-Bit-PNGs, daher spart man hier praktisch nur Platz, indem man die Abmessungen verringert oder zu WebP wechselt.",
                "Arbeitest du mit vielen Symbolen oder flächigen Grafiken für eine Website, nutze wenn möglich SVG: ein Vektorformat, das sehr wenig Platz braucht und in jeder Größe scharf aussieht. Für alles andere ist WebP mit Transparenz heute die effizienteste Wahl.",
            ],
        },
    ],
    faqs: [
        {
            q: "Bleibt der transparente Hintergrund beim Komprimieren eines PNGs erhalten?",
            a: "Ja, wenn du PNG behältst oder WebP als Ausgabeformat wählst. Nur JPG füllt die Transparenz weiß.",
        },
        {
            q: "Warum hat mein PNG jetzt weniger Pixel?",
            a: "Weil PNG beim Speichern keine Qualität verliert; um die gewünschte Größe als PNG zu erreichen, müssen die Abmessungen verkleinert werden.",
        },
        {
            q: "Wie verkleinere ich ein PNG am stärksten?",
            a: "Wandle es in WebP um: Die Transparenz bleibt erhalten und die Datei ist meist 60 % bis 80 % kleiner.",
        },
        {
            q: "Kann ich Screenshots direkt komprimieren?",
            a: "Ja. Mach den Screenshot und füge ihn auf dieser Seite mit Strg + V (oder Cmd + V auf dem Mac) ein.",
        },
        {
            q: "Ist das kostenlos und privat?",
            a: "Ja. Es ist kostenlos, ohne Anmeldung, und deine Bilder verlassen nie dein Gerät.",
        },
    ],
    related: ["png-a-webp", "png-a-jpg", "comprimir-imagen", "comprimir-jpg", "redimensionar-imagen", "comprimir-imagen-a-100kb"],
};

export default content;
