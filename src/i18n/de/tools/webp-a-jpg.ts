import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "webp-a-jpg",
    title: "WebP in JPG umwandeln",
    metaDescription:
        "Wandle WebP-Bilder kostenlos in JPG um, damit du sie überall öffnen und hochladen kannst. Im Stapel, mit einstellbarer Qualität und ohne Upload.",
    h1: "WebP kostenlos in JPG umwandeln",
    lead: "Du hast ein Bild heruntergeladen und es wurde als .webp gespeichert? Wandle es in Sekunden in JPG um, um es zu öffnen, zu bearbeiten oder hochzuladen.",
    sections: [
        {
            heading: "Was ist WebP und warum umwandeln?",
            paragraphs: [
                "WebP ist ein Bildformat, das entwickelt wurde, damit Webseiten schnell laden. Viele Websites verwenden es, deshalb wird ein Bild, das du im Browser speicherst, oft mit der Endung .webp heruntergeladen. Das Problem kommt danach: Manche Bildbearbeitungs- und Office-Programme, ältere Bildbetrachter, Drucker oder Online-Formulare erkennen es nicht.",
                "Dieses Tool wandelt deine WebP-Dateien in JPG um, das Format, das praktisch jedes Gerät und jede Plattform akzeptiert. Alles passiert in deinem Browser – sofort und privat.",
            ],
        },
        {
            heading: "So wandelst du WebP in JPG um – Schritt für Schritt",
            steps: [
                "Wähle deine WebP-Bilder aus, zieh sie in den gestrichelten Bereich oder füge sie mit Strg + V ein.",
                "Wähle die JPG-Qualität. Bei 92 % bleiben fast alle Details erhalten.",
                "Verfolge den Fortschritt jedes Bildes; am Ende siehst du die endgültige Größe.",
                "Lade die JPGs einzeln oder alle als ZIP herunter.",
            ],
        },
        {
            heading: "Wann es dir hilft",
            bullets: [
                "Du hast ein Bild aus dem Internet gespeichert und dein Computer öffnet es nicht per Doppelklick.",
                "Du willst das Bild in Word, PowerPoint oder ein Designprogramm einfügen, das kein WebP unterstützt.",
                "Ein Formular von Schule, Arbeit oder Behörde verlangt JPG.",
                "Du willst das Bild drucken oder entwickeln lassen.",
                "Du willst es mit jemandem teilen, der ein älteres Gerät oder eine ältere App nutzt.",
            ],
        },
        {
            heading: "Qualität und Transparenz",
            paragraphs: [
                "WebP ist meist effizienter als JPG, daher ist es normal, dass die umgewandelte Datei etwas größer ist als das Original. Wenn sie klein sein muss, senke die Qualität auf 75–85 % oder nutze danach den Bildkomprimierer für eine exakte Größe in KB.",
                "Manche WebP-Bilder haben einen transparenten Hintergrund. Da JPG keine Transparenz unterstützt, werden diese Bereiche weiß. Animierte WebP-Bilder werden anhand ihres ersten Frames umgewandelt, weil JPG keine Animation unterstützt. Denk außerdem an das Urheberrecht von Bildern aus dem Internet: Die Umwandlung ändert nichts daran, wem sie gehören.",
            ],
        },
        {
            heading: "Grenzen",
            paragraphs: [
                "Wir akzeptieren bis zu 50 Bilder pro Durchgang und Dateien bis 50 MB. Die Umwandlung erledigt dein Gerät, also gibt es keine Warteschlangen und kein Tageslimit, auf älteren Geräten kann es aber etwas länger dauern. Deine Bilder werden nie auf einen Server hochgeladen.",
            ],
        },
        {
            heading: "JPG oder PNG als Ziel?",
            paragraphs: [
                "Für Fotos ist JPG die beste Wahl: universell und mit vernünftiger Dateigröße. Ist dein WebP-Bild ein Logo, ein Symbol oder eine Grafik mit transparentem Hintergrund, behältst du es vielleicht lieber als WebP oder wandelst es in PNG um, damit die Transparenz erhalten bleibt.",
                "Ein Vorteil der Umwandlung im Browser ist die Geschwindigkeit: Du wartest weder auf einen Upload noch auf einen Server und kannst Dutzende Bilder im Stapel umwandeln. Am Ende lädst du das ZIP herunter und alle Bilder lassen sich in jedem Programm, auf jedem Handy und jedem Computer öffnen.",
            ],
        },
    ],
    faqs: [
        {
            q: "Warum werden meine Bilder im WebP-Format heruntergeladen?",
            a: "Weil viele Websites ihre Bilder als WebP ausliefern, um schneller zu laden, und der Browser sie so speichert. Mit diesem Tool machst du in Sekunden JPGs daraus.",
        },
        {
            q: "Verliere ich beim Umwandeln von WebP in JPG Qualität?",
            a: "Sehr wenig, wenn du eine hohe Qualität (90 % oder mehr) wählst. Mit bloßem Auge sieht das Bild gleich aus.",
        },
        {
            q: "Was passiert mit transparenten WebP-Bildern?",
            a: "Der transparente Teil wird weiß, weil JPG keine Transparenz kennt. Wenn du sie behalten musst, wandle stattdessen in PNG um oder behalte das WebP.",
        },
        {
            q: "Funktioniert es mit animierten WebP?",
            a: "Es wird nur der erste Frame umgewandelt, weil JPG ein Format für Standbilder ist.",
        },
        {
            q: "Muss ich etwas installieren?",
            a: "Nein. Es funktioniert im Browser deines Handys oder Computers, ohne Programme und ohne Anmeldung, und deine Dateien verlassen nie dein Gerät.",
        },
    ],
    related: ["jpg-a-webp", "png-a-jpg", "comprimir-imagen", "heic-a-jpg", "jpg-a-png", "redimensionar-imagen"],
};

export default content;
