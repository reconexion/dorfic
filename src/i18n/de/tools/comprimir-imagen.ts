import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen",
    title: "Bild komprimieren",
    metaDescription:
        "Komprimiere JPG-, PNG- und WebP-Bilder kostenlos auf die gewünschte KB-Größe oder nach Qualität in Prozent. Größe vorher und nachher sehen. Ohne Upload.",
    h1: "Bilder kostenlos komprimieren",
    lead: "Verkleinere deine JPG-, PNG- oder WebP-Fotos auf genau die KB, die verlangt werden – ohne Installation und ohne Upload.",
    sections: [
        {
            heading: "Was macht der Bildkomprimierer?",
            paragraphs: [
                "Ein Bild zu komprimieren heißt, seine Dateigröße (die KB oder MB, die es belegt) zu verringern und es dabei gut aussehen zu lassen. Fotos von aktuellen Handys sind 2 bis 6 MB groß – viel zu viel für eine E-Mail, ein Formular oder eine Website. Mit diesem Tool bringst du sie in wenigen Sekunden auf 100 KB, 50 KB oder die Größe, die du brauchst.",
                "Es gibt zwei Arbeitsweisen. Bei „Zielgröße“ wählst du die maximale Größe in KB und Dorfic findet automatisch die bestmögliche Qualität innerhalb dieses Limits; bei Bedarf werden auch die Abmessungen leicht verkleinert. Bei „Nach Qualität“ wählst du einen Prozentwert und bestimmst selbst das Verhältnis von Schärfe und Größe.",
            ],
        },
        {
            heading: "So komprimierst du ein Bild – Schritt für Schritt",
            steps: [
                "Wähle den Modus: Zielgröße (empfohlen für Anträge und Formulare) oder nach Qualität.",
                "Bei Zielgröße tippst du auf eine der Schnelltasten (20, 50, 100, 200 oder 500 KB) oder gibst einen anderen Wert ein.",
                "Wähle deine Bilder aus, zieh sie hinein oder füge sie ein. Du kannst mehrere auf einmal hinzufügen.",
                "Prüfe das Ergebnis: Du siehst die Größe vorher und nachher und wie viel Prozent du gespart hast.",
                "Lade jedes Bild einzeln oder alle zusammen als ZIP herunter.",
            ],
        },
        {
            heading: "Wofür lohnt sich das Komprimieren?",
            bullets: [
                "Formulare mit Größenlimit: Bewerbungen, Stipendien, Einschreibungen und Behördenanträge verlangen oft Dateien unter 100 oder 200 KB.",
                "E-Mail: Verhindere, dass deine Nachrichten wegen zu großer Anhänge zurückkommen.",
                "WhatsApp und soziale Netzwerke: Fotos schneller hochladen und weniger mobiles Datenvolumen verbrauchen.",
                "Websites und Onlineshops: Leichte Bilder lassen deine Seite schnell laden und verbessern das Google-Ranking.",
                "Speicherplatz sparen: Mehr Fotos auf dem Handy oder in der Cloud, ohne für zusätzlichen Speicher zu zahlen.",
            ],
        },
        {
            heading: "Welches Ausgabeformat passt zu mir?",
            paragraphs: [
                "Standardmäßig behält das Bild sein Originalformat. Für Fotos ist JPG die kompatibelste Wahl. WebP erzeugt bei gleicher Qualität noch kleinere Dateien und wird von allen modernen Browsern unterstützt, auch wenn manche ältere Portale es nicht erkennen. PNG ist verlustfrei, lässt sich aber nicht so stark komprimieren: Hast du ein Foto als PNG gespeichert und muss es sehr klein werden, stell die Ausgabe auf JPG um – der Unterschied ist enorm.",
                "Hat das Bild einen transparenten Hintergrund und wandelst du es in JPG um, wird die Transparenz weiß gefüllt, weil JPG keine Transparenz unterstützt.",
            ],
        },
        {
            heading: "Grenzen und Tipps",
            paragraphs: [
                "Je kleiner die Zielgröße, desto mehr Details gehen verloren. Ein Foto mit 20 KB reicht für einen Ausweis oder ein Profilbild, aber nicht zum Drucken. Wirkt das Bild zu unscharf, probiere ein höheres Limit oder schneide es vorher zu, um Unwichtiges zu entfernen. Wir akzeptieren Dateien bis 50 MB und bis zu 50 Bilder pro Durchgang. Alles passiert auf deinem Gerät, daher kann es auf älteren Handys etwas länger dauern.",
            ],
        },
    ],
    faqs: [
        {
            q: "Wie verkleinere ich ein Bild ohne Qualitätsverlust?",
            a: "Nutze den Modus „Nach Qualität“ mit 75 % bis 85 %: Der Unterschied ist kaum zu sehen und die Größe sinkt meist um mehr als die Hälfte. Stellst du zusätzlich die Ausgabe auf WebP, wird die Datei noch kleiner.",
        },
        {
            q: "Hat das Bild danach genau die gewählte Größe?",
            a: "Es hat diese Größe oder etwas weniger, nie mehr. Dorfic sucht die höchste Qualität, die ins Limit passt, daher liegt das Ergebnis meist sehr nah am gewünschten Wert.",
        },
        {
            q: "Was passiert, wenn mein Bild schon kleiner als das Ziel ist?",
            a: "Es bleibt unverändert, damit es nicht unnötig an Qualität verliert. Du siehst den Hinweis „War schon klein genug, unverändert“ und kannst es so herunterladen.",
        },
        {
            q: "Ist es sicher, hier persönliche Dokumente zu komprimieren?",
            a: "Ja. Deine Bilder werden nie ins Internet hochgeladen: Alles wird in deinem Browser verarbeitet. Du kannst Fotos von Ausweis, Nachweisen oder anderen Dokumenten bedenkenlos komprimieren.",
        },
        {
            q: "Kann ich PNGs mit transparentem Hintergrund komprimieren?",
            a: "Ja. Wenn du das PNG-Format behältst oder WebP wählst, bleibt die Transparenz erhalten. Nur beim Umwandeln in JPG wird der transparente Hintergrund weiß.",
        },
        {
            q: "Wie viele Bilder kann ich auf einmal komprimieren?",
            a: "Bis zu 50 Bilder pro Durchgang mit je bis zu 50 MB. Am Ende kannst du alle als ZIP herunterladen.",
        },
    ],
    related: [
        "comprimir-imagen-a-100kb",
        "comprimir-imagen-a-50kb",
        "comprimir-imagen-a-20kb",
        "comprimir-imagen-a-200kb",
        "redimensionar-imagen",
        "jpg-a-webp",
    ],
};

export default content;
