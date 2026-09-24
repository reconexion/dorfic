import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "redimensionar-imagen",
    title: "Bildgröße ändern",
    metaDescription:
        "Ändere die Größe deiner Bilder in Pixeln oder Prozent und behalte das Seitenverhältnis. Kostenlos, im Stapel und ohne deine Fotos auf einen Server hochzuladen.",
    h1: "Bildgröße kostenlos ändern",
    lead: "Ändere Breite und Höhe deiner Fotos in Pixeln oder Prozent, ohne sie zu verzerren. Schnell, kostenlos und direkt im Browser.",
    sections: [
        {
            heading: "Was bedeutet es, die Bildgröße zu ändern?",
            paragraphs: [
                "Die Größe zu ändern heißt, die Abmessungen eines Bildes anzupassen – also wie viele Pixel es breit und hoch ist. Ein Handyfoto misst meist 4000 × 3000 Pixel oder mehr, weit mehr, als ein Bildschirm, ein Dokument oder ein Post braucht. Verkleinerst du es zum Beispiel auf 1080 Pixel Breite, sieht es am Bildschirm genauso gut aus und ist viel kleiner.",
                "Mit diesem Tool kannst du die genauen Maße in Pixeln angeben oder einfach einen Prozentsatz der Originalgröße wählen. Die Option „Seitenverhältnis beibehalten“ verhindert, dass das Bild gestreckt oder gestaucht wirkt: Gib nur die Breite oder die Höhe ein, der andere Wert wird automatisch berechnet.",
            ],
        },
        {
            heading: "So änderst du die Bildgröße – Schritt für Schritt",
            steps: [
                "Wähle, ob du „In Pixeln“ oder „In Prozent“ arbeiten möchtest.",
                "In Pixeln gibst du Breite, Höhe oder beides ein. Ist „Seitenverhältnis beibehalten“ aktiv und gibst du beide Werte ein, wird das Bild ohne Verzerrung in diesen Rahmen eingepasst.",
                "In Prozent bewegst du den Schieberegler: 50 % halbiert Breite und Höhe des Bildes.",
                "Wähle deine Bilder aus, zieh sie hinein oder füge sie ein. Alle werden mit denselben Einstellungen verarbeitet.",
                "Lade jedes Bild einzeln oder den ganzen Stapel als ZIP-Datei herunter.",
            ],
        },
        {
            heading: "Typische Anwendungen",
            bullets: [
                "Soziale Netzwerke: 1080 px Breite ist ein Standardmaß für quadratische und hochformatige Posts.",
                "Fotos für Anträge: Manche Portale verlangen feste Maße, etwa für ein digitales Passbild.",
                "Websites und Blogs: Bilder mit 1200 bis 1600 px Breite sind scharf und laden schnell.",
                "Präsentationen und Dokumente: Verkleinere Fotos vor dem Einfügen, damit deine Word- oder PowerPoint-Datei nicht Hunderte Megabyte groß wird.",
                "Vorschaubilder und Kataloge: Erstelle kleine Versionen deiner Produktfotos in einem Schritt.",
            ],
        },
        {
            heading: "Tipps für das beste Ergebnis",
            paragraphs: [
                "Ein Bild zu verkleinern sieht immer gut aus, weil überflüssige Informationen wegfallen. Beim Vergrößern entstehen dagegen keine echten Details: Der Browser muss Pixel erfinden, und das Ergebnis wirkt weicher oder unscharf. Starte daher wenn möglich immer mit dem größten Bild, das du hast.",
                "Das Bild behält sein Originalformat (JPG, PNG oder WebP) und bei PNG und WebP auch die Transparenz. Wenn du neben den Maßen eine maximale Größe in KB brauchst, ändere zuerst die Größe und nutze dann den Bildkomprimierer. Bei starken Verkleinerungen skaliert Dorfic das Bild schrittweise, damit Kanten sauber und ohne „Treppchen“ bleiben.",
            ],
        },
        {
            heading: "Grenzen",
            paragraphs: [
                "Du kannst Maße bis 16.384 Pixel pro Seite wählen, bis zu 50 Bilder pro Durchgang verarbeiten und Dateien bis 50 MB verwenden. Die ganze Arbeit passiert auf deinem Gerät, deine Fotos verlassen es also nie. Auf Handys mit wenig Arbeitsspeicher können riesige Bilder etwas länger dauern.",
            ],
        },
    ],
    faqs: [
        {
            q: "Wie ändere ich die Größe eines Fotos, ohne es zu verzerren?",
            a: "Lass „Seitenverhältnis beibehalten“ aktiviert und gib nur die Breite oder nur die Höhe ein. Dorfic berechnet den anderen Wert automatisch, damit die ursprüngliche Form erhalten bleibt.",
        },
        {
            q: "Was passiert, wenn ich Breite und Höhe bei aktivem Seitenverhältnis eingebe?",
            a: "Das Bild wird ohne Verzerrung in diesen Rahmen eingepasst. Deshalb kann eine Seite etwas kleiner ausfallen als die eingegebene Zahl.",
        },
        {
            q: "Kann ich ein Bild vergrößern?",
            a: "Ja, aber Vergrößern fügt keine echten Details hinzu und das Foto kann unscharf wirken. Am besten nutzt du dieses Tool zum Verkleinern.",
        },
        {
            q: "Wird die Datei beim Ändern der Größe auch kleiner?",
            a: "Ja. Weniger Pixel bedeuten eine kleinere Datei. Brauchst du eine exakte Größe in KB, nutze danach das Tool „Bild komprimieren“.",
        },
        {
            q: "Verlieren meine PNGs ihre Transparenz?",
            a: "Nein. Das Bild behält sein Originalformat, daher behalten PNG- und WebP-Dateien ihren transparenten Hintergrund.",
        },
        {
            q: "Werden meine Bilder ins Internet hochgeladen?",
            a: "Nein. Alles passiert in deinem Browser. Deine Fotos verlassen nie dein Gerät.",
        },
    ],
    related: ["comprimir-imagen", "comprimir-imagen-a-100kb", "heic-a-jpg", "jpg-a-webp", "png-a-jpg", "comprimir-imagen-a-50kb"],
};

export default content;
