import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "jpg-a-png",
    title: "JPG in PNG umwandeln",
    metaDescription:
        "Wandle JPG kostenlos und im Stapel in PNG um, ohne weiteren Qualitätsverlust. Ideal zum Bearbeiten oder wenn ein Portal PNG verlangt. Deine Bilder werden nicht hochgeladen.",
    h1: "JPG kostenlos in PNG umwandeln",
    lead: "Wandle deine JPG-Fotos in Sekunden in PNG um, um sie ohne weiteren Qualitätsverlust zu bearbeiten oder ein verlangtes Format zu erfüllen.",
    sections: [
        {
            heading: "Was macht der JPG-zu-PNG-Konverter?",
            paragraphs: [
                "Er nimmt deine JPG-Bilder und speichert sie im PNG-Format, einem verlustfreien Format. Das heißt: Ab jetzt verliert das Bild keine Qualität mehr, auch wenn du es viele Male öffnest, bearbeitest und neu speicherst. Bei JPG ist es umgekehrt: Bei jedem Speichern wird erneut komprimiert und das Bild wird nach und nach schlechter.",
                "Die ganze Umwandlung passiert in deinem Browser. Du musst keine Programme installieren und kein Konto anlegen, und deine Fotos werden nie an einen Server gesendet.",
            ],
        },
        {
            heading: "So wandelst du JPG in PNG um – Schritt für Schritt",
            steps: [
                "Wähle deine JPG-Bilder aus oder zieh sie in den Upload-Bereich. Du kannst sie auch mit Strg + V einfügen.",
                "Du musst nichts einstellen: PNG speichert das Bild so, wie es ist, ohne Qualitätsstufe.",
                "Warte, bis bei jeder Datei das grüne Häkchen erscheint.",
                "Lade jedes PNG einzeln oder alle zusammen als ZIP-Datei herunter.",
            ],
        },
        {
            heading: "Wann ist PNG die bessere Wahl?",
            bullets: [
                "Vor dem Bearbeiten: Wenn du ein Bild mehrmals zuschneiden, beschriften oder retuschieren willst, verhindert PNG, dass sich Qualitätsverluste summieren.",
                "Wenn ein System es verlangt: Manche Portale, Designvorlagen oder Programme akzeptieren nur PNG.",
                "Für Bilder mit Text, Diagrammen oder Zeichnungen: PNG hält Kanten und Buchstaben perfekt scharf.",
                "Als Vorbereitung, um in einem Editor den Hintergrund zu entfernen, da PNG Transparenz unterstützt.",
            ],
        },
        {
            heading: "Was du vor dem Umwandeln wissen solltest",
            paragraphs: [
                "Die Umwandlung in PNG stellt keine Qualität wieder her, die das JPG bereits verloren hat: Das Bild sieht genauso aus wie das Original, ist ab dann aber vor weiteren Verlusten geschützt. Transparenz wird auch nicht automatisch hinzugefügt; der Hintergrund bleibt wie auf dem Foto.",
                "Beachte, dass ein PNG fast immer deutlich größer ist als das ursprüngliche JPG, manchmal fünf- bis zehnmal so groß, vor allem bei Fotos. Dorfic zeigt dir die endgültige Größe jeder Datei. Wenn du das Bild verschicken oder auf eine Seite mit Größenlimit hochladen willst, bleibst du wahrscheinlich besser bei JPG oder nutzt den Bildkomprimierer.",
            ],
        },
        {
            heading: "Grenzen",
            paragraphs: [
                "Du kannst bis zu 50 Bilder auf einmal mit je bis zu 50 MB umwandeln. Da die Umwandlung auf deinem Gerät erfolgt, können sehr große Fotos auf älteren Handys ein paar Sekunden dauern. Die fertige PNG-Datei enthält keine Metadaten des JPGs, etwa den Standort.",
            ],
        },
        {
            heading: "JPG und PNG – die Unterschiede in Kürze",
            paragraphs: [
                "JPG ist für Fotos gedacht: Es komprimiert stark, indem es Details verwirft, die das Auge kaum wahrnimmt – deshalb sind die Dateien klein. PNG ist für Grafiken gedacht: Es speichert jedes Pixel exakt, unterstützt Transparenz und hält die Kanten von Buchstaben, Symbolen und Linien perfekt scharf, dafür sind die Dateien größer.",
                "In der Praxis: Nutze JPG zum Teilen und Speichern von Fotos und PNG für Logos, Screenshots mit Text, Illustrationen oder Bilder, die du mehrmals bearbeitest. Im Zweifel behalte immer eine Kopie der Originaldatei – so kannst du sie später ohne Verlust in jedes gewünschte Format umwandeln.",
            ],
        },
    ],
    faqs: [
        {
            q: "Verbessert die Umwandlung von JPG in PNG die Qualität?",
            a: "Nein. Das Bild sieht genauso aus wie das ursprüngliche JPG. Du gewinnst aber, dass es beim wiederholten Bearbeiten und Speichern keine Qualität mehr verliert.",
        },
        {
            q: "Warum ist das PNG größer als das JPG?",
            a: "Weil PNG das Bild verlustfrei speichert, während JPG Details verwirft. Bei Fotos kann das PNG mehrfach so groß sein.",
        },
        {
            q: "Hat das PNG einen transparenten Hintergrund?",
            a: "Nicht automatisch. Die Umwandlung behält den ursprünglichen Hintergrund des Fotos. Um ihn zu entfernen, brauchst du ein Bildbearbeitungsprogramm.",
        },
        {
            q: "Kann ich viele Bilder auf einmal umwandeln?",
            a: "Ja, bis zu 50 pro Durchgang. Am Ende lädst du alle zusammen als dorfic-bilder.zip herunter.",
        },
        {
            q: "Werden meine Bilder irgendwo gespeichert?",
            a: "Nein. Sie werden in deinem Browser verarbeitet und verlassen nie dein Gerät. Wenn du die Seite schließt, sind sie weg.",
        },
    ],
    related: ["png-a-jpg", "jpg-a-webp", "redimensionar-imagen", "comprimir-imagen", "webp-a-jpg", "heic-a-jpg"],
};

export default content;
