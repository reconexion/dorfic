import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-100kb",
    title: "Bild auf 100 KB komprimieren",
    metaDescription:
        "Komprimiere Fotos und gescannte Dokumente kostenlos auf 100 KB oder weniger, ohne Upload. Ideal für Online-Anträge und Formulare mit Größenlimit.",
    h1: "Bild kostenlos auf 100 KB komprimieren",
    lead: "Bring deine Fotos und gescannten Dokumente auf 100 KB oder weniger – für jeden Online-Antrag. Ohne Anmeldung und 100 % privat.",
    sections: [
        {
            heading: "Das häufigste Limit bei Anträgen: 100 KB",
            paragraphs: [
                "Wenn ein Portal verlangt, dass du einen Ausweis, einen Wohnsitznachweis, eine Urkunde oder eine Bescheinigung als Bild hochlädst, liegt das Limit sehr oft bei 100 KB pro Datei. Auch viele Plattformen für Schulanmeldungen, Jobbörsen und Kundenservice-Systeme nutzen es. Bei dieser Größe bleibt ein ganzes Dokument lesbar – vorausgesetzt, das Bild wird gut optimiert.",
                "Diese Seite ist bereits auf 100 KB eingestellt. Dorfic sucht automatisch die höchstmögliche Qualität, ohne das Limit zu überschreiten, und verkleinert die Abmessungen nur, wenn es unbedingt nötig ist. So bleiben deine Dokumente klein und trotzdem lesbar.",
            ],
        },
        {
            heading: "So komprimierst du auf 100 KB – Schritt für Schritt",
            steps: [
                "Mach ein klares Foto des Dokuments oder wähle das Bild, das du schon hast.",
                "Füge es im Upload-Bereich hinzu (du kannst es auch hineinziehen oder einfügen). Du kannst mehrere auf einmal hinzufügen, zum Beispiel Vorder- und Rückseite deines Ausweises.",
                "Verlangt das System es, stell das Ausgabeformat auf JPG.",
                "Prüfe die endgültige Größe und lade jedes Bild einzeln oder alle als ZIP herunter.",
            ],
        },
        {
            heading: "Was kannst du auf 100 KB komprimieren?",
            bullets: [
                "Ausweisdokumente, Vorder- und Rückseite.",
                "Abfotografierte Wohnsitznachweise, Rechnungen und Kontoauszüge.",
                "Gescannte Urkunden, Bescheinigungen, Zeugnisse und Zertifikate.",
                "Fotos für Schul- oder Bewerbungsunterlagen.",
                "Screenshots von Zahlungen oder Überweisungen.",
            ],
        },
        {
            heading: "Tricks, damit das Dokument lesbar bleibt",
            paragraphs: [
                "Die Endqualität hängt stark vom Originalfoto ab. Leg das Dokument auf eine dunkle, glatte Fläche, nutze gutes Tageslicht ohne Blitz und fotografiere es gerade von vorn, damit es nicht schief ist. Schneide überflüssige Ränder ab: Je weniger Hintergrund, desto mehr Details bleiben für den Text.",
                "Hat das Dokument sehr kleine Schrift, die bei 100 KB nicht lesbar ist, prüfe, ob das Portal PDF oder ein höheres Limit akzeptiert. Du kannst auch JPG statt PNG als Ausgabe probieren, denn JPG erhält Text in Dokumentfotos bei knappen Limits meist besser.",
            ],
        },
        {
            heading: "Sicherheit deiner Dokumente",
            paragraphs: [
                "Wir wissen, dass persönliche Dokumente sensibel sind. Dorfic lädt sie nicht ins Internet hoch: Die Komprimierung läuft in deinem eigenen Browser und die Dateien verlassen nie dein Gerät. Das Ergebnis enthält auch keinen Standort und keine Kameradaten. Du kannst bis zu 50 Dateien pro Durchgang mit je bis zu 50 MB verarbeiten.",
            ],
        },
        {
            heading: "Was bedeuten 100 KB eigentlich?",
            paragraphs: [
                "Ein Kilobyte (KB) entspricht 1.024 Byte, 100 KB sind also rund 102.400 Byte. Manche Portale rechnen mit 1.000 Byte pro KB; deshalb lässt Dorfic die Datei immer knapp unter dem Ziel, damit sie unabhängig von der Rechenweise akzeptiert wird. Zeigt dein Computer eine etwas andere Zahl als die Seite, liegt das an diesem Rundungsunterschied.",
                "Zum Vergleich: Ein unbearbeitetes Handyfoto ist 2.000 bis 5.000 KB groß. Es auf 100 KB zu bringen heißt, die Größe um mehr als 95 % zu verringern – das schafft Dorfic mit intelligenter Komprimierung und, nur wenn nötig, einer moderaten Verkleinerung der Abmessungen.",
            ],
        },
    ],
    faqs: [
        {
            q: "Wie verkleinere ich ein Bild auf 100 KB?",
            a: "Wähle dein Bild auf dieser Seite aus und warte ein paar Sekunden. Das Limit von 100 KB ist bereits eingestellt; lade es herunter, sobald das grüne Häkchen erscheint.",
        },
        {
            q: "Ist ein auf 100 KB komprimiertes Dokument noch lesbar?",
            a: "In den meisten Fällen ja, vor allem wenn das Foto gut ausgeleuchtet und zugeschnitten ist. Dorfic hält die Qualität innerhalb des Limits so hoch wie möglich.",
        },
        {
            q: "Kann ich Vorder- und Rückseite meines Ausweises gleichzeitig komprimieren?",
            a: "Ja. Wähle beide Bilder auf einmal aus; jedes wird 100 KB oder kleiner.",
        },
        {
            q: "Was passiert, wenn mein Bild schon unter 100 KB liegt?",
            a: "Es bleibt unverändert, damit es keine Qualität verliert. Du siehst den Hinweis „War schon klein genug, unverändert“.",
        },
        {
            q: "Funktioniert es auf dem Handy?",
            a: "Ja, es ist fürs Handy gemacht. Du kannst Fotos direkt aus deiner Galerie wählen oder ein neues aufnehmen.",
        },
        {
            q: "Speichert Dorfic Kopien meiner Dokumente?",
            a: "Nein. Wir erhalten deine Dateien nie: Alles wird auf deinem Gerät verarbeitet und verschwindet, wenn du die Seite schließt.",
        },
    ],
    related: ["comprimir-imagen-a-200kb", "comprimir-imagen-a-50kb", "comprimir-imagen", "heic-a-jpg", "redimensionar-imagen", "png-a-jpg"],
};

export default content;
