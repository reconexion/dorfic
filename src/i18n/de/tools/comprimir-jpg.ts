import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-jpg",
    title: "JPG komprimieren",
    metaDescription:
        "Komprimiere JPG-Fotos kostenlos und verringere ihre Größe um bis zu 90 %, ohne dass man es sieht. KB oder Qualität wählen, im Stapel verarbeiten, als ZIP laden. Ohne Upload.",
    h1: "JPG kostenlos komprimieren",
    lead: "Verkleinere deine JPG-Fotos in Sekunden – ohne sichtbaren Schärfeverlust und ohne dass sie dein Gerät verlassen.",
    sections: [
        {
            heading: "Warum sind deine JPGs so groß?",
            paragraphs: [
                "Aktuelle Handykameras speichern Fotos mit 12, 48 oder sogar 200 Megapixeln und nur sehr leichter Komprimierung, damit alle Details erhalten bleiben, falls du drucken oder zuschneiden willst. Das Ergebnis sind JPG-Dateien mit jeweils 3 bis 8 MB. Um sie am Bildschirm anzusehen, per E-Mail zu verschicken oder in ein Formular hochzuladen, ist diese Größe unnötig.",
                "Ein JPG zu komprimieren heißt, es mit effizienterer Komprimierung und bei Bedarf mit weniger Pixeln neu zu speichern. Richtig gemacht sieht das Foto praktisch gleich aus und ist 70 % bis 95 % kleiner. Dorfic erledigt das in deinem Browser: Du installierst nichts, und deine Fotos werden nie hochgeladen.",
            ],
        },
        {
            heading: "So komprimierst du ein JPG – Schritt für Schritt",
            steps: [
                "Wähle deine JPG-Fotos aus, zieh sie in den Upload-Bereich oder füge sie mit Strg + V ein.",
                "Wähle „Zielgröße“ und tippe auf 20, 50, 100, 200 oder 500 KB – oder wähle „Nach Qualität“ und bewege den Regler.",
                "Warte auf das grüne Häkchen: Du siehst die Größe vorher und nachher und die gesparten Prozent.",
                "Lade jedes Foto einzeln oder alle zusammen als ZIP herunter.",
            ],
        },
        {
            heading: "Zielgröße oder Qualität?",
            paragraphs: [
                "Nutze „Zielgröße“, wenn dir jemand ein Limit vorgibt: ein Portal mit maximal 100 KB, ein E-Mail-Dienst, der Anhänge über insgesamt 10 MB ablehnt, oder eine Schulplattform mit Limit pro Datei. Dorfic findet automatisch die höchste Qualität, die in diese Größe passt.",
                "Nutze „Nach Qualität“, wenn es vor allem darum geht, dass das Foto gut aussieht, und du es nur leichter machen willst. 75 % bis 85 % sind für die meisten Fotos ideal: Der Unterschied zum Original ist kaum zu erkennen und die Datei schrumpft meist auf ein Viertel.",
            ],
        },
        {
            heading: "Häufigste Anwendungen",
            bullets: [
                "Viele Fotos per E-Mail verschicken, ohne das Anhangslimit zu überschreiten.",
                "Fotos in Job-, Stipendien- oder Behördenportale mit Größenlimit hochladen.",
                "Deine Website oder deinen Onlineshop mit kleineren Bildern beschleunigen.",
                "Speicherplatz auf dem Handy oder in der Cloud freigeben und trotzdem alle Erinnerungen behalten.",
                "Alben über WhatsApp oder Telegram teilen und dabei weniger Daten verbrauchen.",
            ],
        },
        {
            heading: "Tipps für die beste Qualität",
            paragraphs: [
                "Komprimiere immer das Originalfoto und nicht eines, das bereits komprimiert wurde: Jedes erneute Speichern eines JPGs kostet etwas Detail. Brauchst du bestimmte Maße, ändere zuerst die Größe und komprimiere danach; so fließt die Dateigröße in die Pixel, die wirklich zu sehen sind.",
                "Hat dein Foto Himmel oder weiche Farbverläufe, vermeide Qualitäten unter 60 %, sonst können Streifen entstehen. Bei Fotos von Dokumenten bleibt der Text mit 70 % Qualität meist perfekt lesbar.",
            ],
        },
        {
            heading: "Datenschutz und Grenzen",
            paragraphs: [
                "Du kannst bis zu 50 Fotos auf einmal mit je bis zu 50 MB komprimieren. Die ganze Arbeit erledigt dein Gerät, daher gibt es keine Warteschlangen und kein Tageslimit. Die fertige Datei enthält keine Metadaten wie den GPS-Standort – praktisch, wenn du deine Fotos öffentlich teilst.",
            ],
        },
    ],
    faqs: [
        {
            q: "Wie stark kann ich ein JPG verkleinern?",
            a: "Bei Handyfotos sind 70 % bis 95 % weniger Größe üblich. Dorfic zeigt dir die genaue Ersparnis jeder Datei.",
        },
        {
            q: "Sieht man die Komprimierung?",
            a: "Bei 75 % bis 85 % Qualität ist der Unterschied in Bildschirmgröße praktisch unsichtbar. Nur bei sehr niedrigen Limits wie 20 KB verliert das Foto Details.",
        },
        {
            q: "Kann ich mehrere JPG-Fotos auf einmal komprimieren?",
            a: "Ja, bis zu 50 pro Durchgang. Am Ende lädst du alle zusammen als dorfic-bilder.zip herunter.",
        },
        {
            q: "Werden meine Fotos auf einen Server hochgeladen?",
            a: "Nein. Die Komprimierung passiert in deinem Browser und deine Fotos verlassen nie dein Gerät.",
        },
        {
            q: "Was ist der Unterschied zwischen JPG und JPEG?",
            a: "Keiner: Es ist dasselbe Format. JPEG ist der vollständige Name, JPG die kurze Endung, die Windows populär gemacht hat.",
        },
        {
            q: "Ändert das Komprimieren eines JPGs seine Abmessungen?",
            a: "Im Qualitätsmodus nicht. Im Zielgrößen-Modus nur, wenn das Limit so niedrig ist, dass die Abmessungen verkleinert werden müssen, damit das Foto scharf bleibt.",
        },
    ],
    related: ["comprimir-imagen", "comprimir-imagen-a-100kb", "comprimir-png", "redimensionar-imagen", "jpg-a-webp", "comprimir-imagen-a-200kb"],
};

export default content;
