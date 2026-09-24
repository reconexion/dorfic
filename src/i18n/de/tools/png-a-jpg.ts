import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "png-a-jpg",
    title: "PNG in JPG umwandeln",
    metaDescription:
        "Wandle PNG-Bilder kostenlos und im Stapel in JPG um. Qualität wählen, Größe verringern und als ZIP herunterladen. Ohne Upload: alles in deinem Browser.",
    h1: "PNG kostenlos in JPG umwandeln",
    lead: "Mach aus deinen PNGs JPGs, damit sie viel kleiner sind und von jedem Formular akzeptiert werden. Ohne Anmeldung und ohne Upload.",
    sections: [
        {
            heading: "Warum PNG in JPG umwandeln?",
            paragraphs: [
                "PNG ist ein verlustfreies Format: Es speichert jedes Pixel exakt. Das ist perfekt für Logos, Screenshots mit Text oder Bilder mit transparentem Hintergrund, bei Fotos entstehen aber riesige Dateien. Ein Screenshot oder Foto als PNG kann 3, 5 oder sogar 10 MB groß sein, während derselbe Inhalt als JPG nur ein paar hundert KB belegt.",
                "Außerdem akzeptieren manche Portale und Apps nur JPG. Das Umwandeln deiner PNGs hilft dir, diese Vorgaben zu erfüllen und Bilder schneller zu teilen. Dieses Tool erledigt das in deinem eigenen Browser, ohne etwas ins Internet zu senden.",
            ],
        },
        {
            heading: "So wandelst du PNG in JPG um – Schritt für Schritt",
            steps: [
                "Wähle deine PNG-Dateien aus, zieh sie in den Upload-Bereich oder füge sie mit Strg + V ein (ideal für Screenshots).",
                "Passe bei Bedarf die Qualität an. Bei 92 % sieht das Bild praktisch gleich aus und ist viel kleiner.",
                "Warte, bis jedes Bild das grüne Häkchen und die gesparten Prozent anzeigt.",
                "Lade die JPGs einzeln oder alle zusammen als ZIP herunter.",
            ],
        },
        {
            heading: "Wann lohnt es sich?",
            bullets: [
                "Screenshots, die du per E-Mail oder WhatsApp verschicken willst, ohne dass sie so groß sind.",
                "Fotos, die versehentlich als PNG gespeichert wurden, zum Beispiel beim Export aus einem Bildbearbeitungsprogramm.",
                "Formulare von Behörden, Schulen oder Unternehmen, die nur JPG akzeptieren.",
                "Bilder für deine Website oder deinen Onlineshop, wo jedes KB für die Ladezeit zählt.",
                "Gescannte Dokumente, die der Scanner als PNG gespeichert hat und die zu viel Platz belegen.",
            ],
        },
        {
            heading: "Was mit der Transparenz passiert",
            paragraphs: [
                "JPG unterstützt keine Transparenz. Hat dein PNG transparente Bereiche (etwa ein Logo ohne Hintergrund), werden sie beim Umwandeln weiß gefüllt. Für die meisten Zwecke wie Dokumente oder Fotos wirkt das Ergebnis natürlich. Wenn du die Transparenz behalten und trotzdem die Größe verringern möchtest, wandle besser in WebP um oder komprimiere das PNG im eigenen Format.",
                "Auch Bilder mit viel kleinem Text oder sehr feinen Linien, etwa Diagramme, solltest du nicht in JPG umwandeln: JPG kann kleine Flecken um die Buchstaben erzeugen. In solchen Fällen stell die Qualität auf 95–100 %.",
            ],
        },
        {
            heading: "Grenzen",
            paragraphs: [
                "Du kannst bis zu 50 Bilder pro Durchgang mit je bis zu 50 MB umwandeln. Die Umwandlung findet auf deinem Gerät statt, die Geschwindigkeit hängt also von deinem Handy oder Computer ab; meist dauert es weniger als eine Sekunde pro Bild. Das erzeugte JPG enthält keine Metadaten der Originaldatei.",
            ],
        },
        {
            heading: "PNG, JPG und die Größe deiner Screenshots",
            paragraphs: [
                "Screenshots werden auf fast allen Handys und Computern als PNG gespeichert. Auf modernen Bildschirmen mit vielen Pixeln kann ein einziger Screenshot über 2 MB groß sein. Wenn du nur einen Chat, einen Zahlungsbeleg oder ein Diagramm zeigen willst, bringt eine Umwandlung in JPG mit hoher Qualität die Datei auf einen Bruchteil dieser Größe – und sie bleibt problemlos lesbar.",
                "Willst du mehrere Screenshots in eine E-Mail packen oder auf eine Plattform mit Größenlimit hochladen, wandle alle in einem Durchgang um und lade sie als ZIP herunter. Das spart Zeit und Platz, und da alles auf deinem Gerät passiert, verlassen die sensiblen Informationen in deinen Screenshots es nie.",
            ],
        },
    ],
    faqs: [
        {
            q: "Verliert ein Bild beim Wechsel von PNG zu JPG an Qualität?",
            a: "JPG komprimiert mit einem kleinen Verlust, aber ab 90 % Qualität ist der Unterschied bei Fotos kaum zu erkennen. Bei Bildern mit kleinem Text erhöhe die Qualität.",
        },
        {
            q: "Was passiert mit dem transparenten Hintergrund?",
            a: "Er wird weiß, weil JPG keine Transparenz unterstützt. Wenn du sie behalten musst, nutze WebP oder behalte das PNG.",
        },
        {
            q: "Wie viel Platz spare ich?",
            a: "Das hängt vom Bild ab, aber bei Fotos und Screenshots sind 70 % bis 95 % Ersparnis üblich. Dorfic zeigt dir die genaue Ersparnis für jede Datei.",
        },
        {
            q: "Kann ich Screenshots direkt umwandeln?",
            a: "Ja. Mach den Screenshot, öffne diese Seite und drück Strg + V (oder Cmd + V auf dem Mac). Das Bild wird automatisch hinzugefügt und umgewandelt.",
        },
        {
            q: "Ist das sicher? Werden meine Dateien hochgeladen?",
            a: "Sie werden nicht hochgeladen. Alles wird in deinem Browser verarbeitet und deine Bilder verlassen nie dein Gerät.",
        },
        {
            q: "Kostet es etwas oder gibt es ein Wasserzeichen?",
            a: "Nein. Es ist kostenlos, ohne Anmeldung und ohne Wasserzeichen.",
        },
    ],
    related: ["jpg-a-png", "comprimir-imagen", "webp-a-jpg", "jpg-a-webp", "heic-a-jpg", "redimensionar-imagen"],
};

export default content;
