import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-200kb",
    title: "Bild auf 200 KB komprimieren",
    metaDescription:
        "Verkleinere deine Bilder auf 200 KB oder weniger, ohne an Schärfe zu verlieren. Kostenlos, im Stapel und ohne Upload. Ideal für E-Mails, Schule und Websites.",
    h1: "Bild kostenlos auf 200 KB komprimieren",
    lead: "Kleine Fotos, die trotzdem richtig gut aussehen: 200 KB oder weniger, bereit für E-Mail, Schule oder deine Website.",
    sections: [
        {
            heading: "200 KB: der ideale Mittelweg zwischen Qualität und Größe",
            paragraphs: [
                "Ein Limit von 200 KB ist groß genug für ein scharfes Foto in voller Bildschirmgröße und klein genug, damit es sich schnell verschicken und laden lässt. Deshalb ist es eine häufige Vorgabe auf Schulplattformen, bei Fotowettbewerben, in Jobportalen und in Systemen, in die du mehrere Bilder auf einmal hochlädst.",
                "Diese Seite ist bereits auf dieses Ziel eingestellt. Dorfic passt die Komprimierung so an, dass die Datei möglichst nah an 200 KB liegt, ohne sie zu überschreiten – so fließt jedes KB in die Qualität. Bei den meisten Handyfotos bleibt eine gute Auflösung erhalten und der Unterschied zum Original ist minimal.",
            ],
        },
        {
            heading: "So komprimierst du deine Fotos auf 200 KB",
            steps: [
                "Wähle deine Bilder aus, zieh sie in den Upload-Bereich oder füge sie ein.",
                "Wähle bei Bedarf das Ausgabeformat; WebP bietet fürs Web noch mehr Qualität pro KB.",
                "Verfolge den Fortschritt jedes Fotos und die erzielte Ersparnis.",
                "Lade sie einzeln oder alle zusammen als ZIP herunter.",
            ],
        },
        {
            heading: "Ideal für …",
            bullets: [
                "Hausaufgaben und Schulprojekte auf Plattformen mit Limit pro Datei.",
                "E-Mails mit mehreren Fotos im Anhang, ohne das Serverlimit zu überschreiten.",
                "Blogs, Websites und Onlineshops, die schnelle und trotzdem ansprechende Bilder brauchen.",
                "Inserate auf Immobilien- oder Autoportalen, für die du viele Fotos hochlädst.",
                "Nachweise für Versicherungen oder Garantiefälle, die mehrere klare Bilder verlangen.",
            ],
        },
        {
            heading: "Tipps, um die 200 KB optimal zu nutzen",
            paragraphs: [
                "Für Veröffentlichungen im Internet brauchst du keine Bilder mit 4000 Pixeln: Mit 1600 bis 2000 Pixeln Breite sehen sie auf jedem Bildschirm perfekt aus. Wenn du sie vorher verkleinerst, bleibt mehr Spielraum für Qualität und das Ergebnis wird noch schärfer.",
                "Für detailreiche Fotos wie Landschaften oder Menschenmengen funktionieren JPG und WebP viel besser als PNG. Ist dein Originalbild ein Foto im PNG-Format, stell die Ausgabe auf JPG um: Du wirst merken, dass innerhalb desselben Limits viel mehr Details erhalten bleiben.",
            ],
        },
        {
            heading: "Schnell, kostenlos und privat",
            paragraphs: [
                "Du brauchst kein Konto und keine App. Deine Fotos verlassen nie dein Gerät, weil alles in deinem Browser passiert. Du kannst bis zu 50 Bilder pro Durchgang mit je bis zu 50 MB komprimieren, ohne Wasserzeichen.",
            ],
        },
        {
            heading: "Wie Dorfic die endgültige Qualität bestimmt",
            paragraphs: [
                "Wenn du eine Zielgröße wählst, wendet Dorfic nicht auf alle Fotos denselben Prozentwert an. Zuerst wird mit der Bibliothek browser-image-compression komprimiert und das Ergebnis geprüft. Liegt die Datei noch über 200 KB, werden verschiedene Qualitätsstufen ausprobiert, bis die höchste gefunden ist, die ins Limit passt – und nur wenn auch das nicht reicht, werden die Abmessungen schrittweise verkleinert.",
                "Deshalb können zwei verschiedene Fotos unterschiedliche Qualitäten erhalten: Ein einfaches Bild wie ein Porträt vor einfarbigem Hintergrund passt fast unverändert in 200 KB, während ein detailreiches Foto stärker komprimiert werden muss. In jedem Fall hält das Ergebnis das Limit ein und nutzt den verfügbaren Platz optimal.",
            ],
        },
    ],
    faqs: [
        {
            q: "Wie viel Qualität verliert ein Foto bei 200 KB?",
            a: "In den meisten Fällen sehr wenig. In Bildschirmgröße ist der Unterschied zum Original meist kaum zu erkennen.",
        },
        {
            q: "Kann ich viele Fotos auf einmal auf 200 KB komprimieren?",
            a: "Ja, bis zu 50 Bilder pro Durchgang. Jedes wird 200 KB oder kleiner und du kannst alle als ZIP herunterladen.",
        },
        {
            q: "Ist bei 200 KB JPG oder WebP besser?",
            a: "WebP bietet mehr Qualität pro KB und ist ideal für Websites. Zum Versand an Behörden oder an Menschen mit älteren Geräten ist JPG kompatibler.",
        },
        {
            q: "Warum hat mein Bild 190 KB und nicht 200?",
            a: "Weil Dorfic das Limit nie überschreitet: Es sucht die beste Qualität unter 200 KB, deshalb landet das Ergebnis meist knapp darunter.",
        },
        {
            q: "Muss ich ein Konto erstellen?",
            a: "Nein. Es ist kostenlos, ohne Anmeldung, und deine Bilder werden nur auf deinem Gerät verarbeitet.",
        },
    ],
    related: ["comprimir-imagen-a-100kb", "comprimir-imagen", "redimensionar-imagen", "jpg-a-webp", "comprimir-imagen-a-50kb", "heic-a-jpg"],
};

export default content;
