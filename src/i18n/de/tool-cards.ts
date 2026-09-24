import type { ToolSlug } from "@/config/paths";
import type { ToolCard } from "../types";

export const toolCards: Record<ToolSlug, ToolCard> = {
    "heic-a-jpg": { name: "HEIC in JPG", description: "Wandle deine iPhone-Fotos in JPG um, damit sie sich überall öffnen lassen." },
    "comprimir-imagen": { name: "Bild komprimieren", description: "Verkleinere JPG, PNG oder WebP auf genau die KB-Größe, die du brauchst." },
    "redimensionar-imagen": { name: "Bildgröße ändern", description: "Ändere Breite und Höhe in Pixeln oder Prozent, ohne zu verzerren." },
    "png-a-jpg": { name: "PNG in JPG", description: "Wandle PNG in JPG um, damit Dateien kleiner sind und überall akzeptiert werden." },
    "jpg-a-png": { name: "JPG in PNG", description: "Speichere JPGs als PNG, damit sie beim Bearbeiten nicht weiter an Qualität verlieren." },
    "webp-a-jpg": { name: "WebP in JPG", description: "Wandle aus dem Internet geladene WebP-Bilder in kompatibles JPG um." },
    "jpg-a-webp": { name: "JPG in WebP", description: "In WebP umwandeln, damit deine Website schneller lädt." },
    "comprimir-imagen-a-20kb": { name: "Auf 20 KB komprimieren", description: "Für Formulare, die sehr kleine Fotos verlangen, z. B. Passbilder." },
    "comprimir-imagen-a-50kb": { name: "Auf 50 KB komprimieren", description: "Ideal für Unterschriften, Profilbilder und Online-Anmeldungen." },
    "comprimir-imagen-a-100kb": { name: "Auf 100 KB komprimieren", description: "Für gescannte Dokumente und Anträge mit Größenlimit." },
    "comprimir-imagen-a-200kb": { name: "Auf 200 KB komprimieren", description: "Gute Qualität bei kleiner Größe für E-Mails und Schulplattformen." },
    "comprimir-jpg": { name: "JPG komprimieren", description: "Verkleinere deine JPG-Fotos ohne sichtbaren Unterschied." },
    "comprimir-png": { name: "PNG komprimieren", description: "Mach PNG-Screenshots und Grafiken kleiner und behalte die Transparenz." },
    "heic-a-png": { name: "HEIC in PNG", description: "Wandle iPhone-Fotos verlustfrei in PNG um, um sie zu bearbeiten." },
    "webp-a-png": { name: "WebP in PNG", description: "Wandle WebP-Bilder in PNG um und behalte den transparenten Hintergrund." },
    "png-a-webp": { name: "PNG in WebP", description: "Viel kleinere Bilder mit Transparenz für deine Website." },
    "comprimir-imagen-a-10kb": { name: "Auf 10 KB komprimieren", description: "Für Unterschriften und Fotos in Systemen mit extremen Limits." },
    "comprimir-imagen-a-30kb": { name: "Auf 30 KB komprimieren", description: "Bewerbungs- und Ausweisfotos, die scharf bleiben." },
    "comprimir-imagen-a-500kb": { name: "Auf 500 KB komprimieren", description: "Fast Originalqualität bei einem Bruchteil der Größe." },
};
