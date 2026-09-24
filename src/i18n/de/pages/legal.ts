import type { LegalPageContent } from "../../types";

const UPDATED = "23. September 2026";

export const acerca: LegalPageContent = {
    title: "Über Dorfic",
    metaDescription:
        "Lerne Dorfic kennen: kostenlose Bildtools, die in deinem Browser laufen und deine Privatsphäre schützen. Unsere Mission, wie wir arbeiten und wie wir uns finanzieren.",
    h1: "Über Dorfic",
    intro: "Dorfic ist eine Sammlung kostenloser Tools für die Arbeit mit Bildern: Formate umwandeln, komprimieren und die Größe ändern. Wir haben sie für die echten Situationen im Alltag entwickelt.",
    sections: [
        {
            heading: "Unsere Mission",
            paragraphs: [
                "Wir möchten, dass jede Person ihre Bilder für einen Antrag, die Schule, die Arbeit oder soziale Netzwerke vorbereiten kann – ohne Aufwand, ohne Kosten und ohne ihre persönlichen Daten zu gefährden. Etwas so Einfaches wie ein Foto zu verkleinern sollte dich nicht zwingen, ein Konto anzulegen, eine App zu installieren oder deine Dokumente auf einen unbekannten Server hochzuladen.",
            ],
        },
        {
            heading: "So funktioniert Dorfic",
            paragraphs: [
                "Anders als viele Online-Dienste erhält Dorfic deine Bilder nicht. Wenn du ein Foto auswählst, verarbeitet dein Browser es mit der Leistung deines eigenen Geräts über Standard-Webtechnologien (Canvas und Web Workers). Das Ergebnis entsteht direkt dort und du lädst es direkt herunter. Deshalb können wir mit voller Überzeugung sagen: Deine Fotos verlassen nie dein Gerät.",
                "Diese Arbeitsweise macht die Tools außerdem schnell: Du musst weder auf einen Upload noch auf die Verarbeitung durch einen Server warten.",
            ],
        },
        {
            heading: "Wie wir uns finanzieren",
            paragraphs: [
                "Dorfic ist kostenlos und finanziert sich über Werbung auf der Website. Wir achten darauf, dass sie dezent ist, die Tools nie verdeckt und dich nicht unterbricht. Die Werbung hat keinen Zugriff auf deine Bilder, weil deine Bilder nirgendwohin gesendet werden.",
            ],
        },
        {
            heading: "Unser Versprechen",
            bullets: [
                "Die Tools kostenlos und ohne Wasserzeichen anbieten.",
                "Deine Bilder weder hochladen noch speichern.",
                "Klar erklären, was jedes Tool macht und wo seine Grenzen liegen.",
                "Uns ständig verbessern, basierend auf dem Feedback der Menschen, die Dorfic nutzen.",
            ],
        },
    ],
};

export const contacto: LegalPageContent = {
    title: "Kontakt",
    metaDescription: "Fragen, Vorschläge oder einen Fehler in Dorfic gefunden? Schreib uns auf Telegram und wir antworten so schnell wie möglich.",
    h1: "Kontakt",
    intro: "Du hast eine Frage, eine Idee für ein neues Tool oder etwas gefunden, das nicht richtig funktioniert? Wir freuen uns auf deine Nachricht.",
    sections: [
        {
            heading: "Schreib uns",
            paragraphs: [
                "Am besten erreichst du uns auf Telegram unter @tostilocos. Wir antworten normalerweise innerhalb von 2 bis 5 Werktagen.",
                "Wenn du ein Problem meldest, schreib uns, welches Tool du benutzt hast, mit welchem Gerät und Browser und welche Meldung erschienen ist. Bitte schick uns keine Bilder mit persönlichen Informationen: Wir brauchen sie nicht, um dir zu helfen.",
            ],
        },
        {
            heading: "Wobei wir helfen können",
            bullets: [
                "Fragen zur Nutzung eines Tools.",
                "Fehlermeldungen oder Kompatibilitätsprobleme.",
                "Vorschläge für neue Funktionen oder Tools.",
                "Fragen zu Datenschutz, Werbung oder rechtlichen Themen.",
            ],
        },
    ],
};

export const privacidad: LegalPageContent = {
    title: "Datenschutzerklärung",
    metaDescription:
        "Datenschutzerklärung von Dorfic: Deine Bilder werden auf deinem Gerät verarbeitet und nie hochgeladen. Erfahre, welche technischen Daten erhoben werden, wie Werbe-Cookies eingesetzt werden und welche Rechte du hast.",
    h1: "Datenschutzerklärung",
    intro: "Bei Dorfic ist Datenschutz Teil des Konzepts. Diese Erklärung beschreibt, welche Informationen bei der Nutzung der Website verarbeitet werden, zu welchen Zwecken und welche Wahlmöglichkeiten du hast.",
    updated: UPDATED,
    sections: [
        {
            heading: "1. Verantwortlicher",
            paragraphs: [
                "Dorfic („Dorfic“, „wir“) ist für die Website und die angebotenen Tools verantwortlich. Bei allen Fragen zu dieser Erklärung erreichst du uns auf Telegram (@tostilocos), wie auf der Kontaktseite angegeben.",
            ],
        },
        {
            heading: "2. Deine Bilder werden nicht erhoben",
            paragraphs: [
                "Die Bilder, die du in den Tools auswählst, hineinziehst oder einfügst, werden ausschließlich in deinem Browser auf deinem Gerät verarbeitet. Sie werden weder an unsere Server noch an Dritte gesendet, wir speichern sie nicht und können sie nicht sehen. Wenn du die Seite schließt oder neu lädst, verschwinden sie aus dem Speicher des Browsers.",
                "Die erzeugten Dateien enthalten auch keine Metadaten des Originals (etwa GPS-Standort oder Kameramodell), außer wenn ein Bild unverändert bleibt, weil es die gewünschte Größe bereits erfüllt.",
            ],
        },
        {
            heading: "3. Technische Daten und Statistik",
            paragraphs: [
                "Um zu wissen, wie viele Menschen die Website besuchen und welche Seiten am nützlichsten sind, nutzen wir Cloudflare Web Analytics, einen Statistikdienst ohne Cookies, der Personen nicht über Websites hinweg verfolgt. Er erfasst zusammengefasste Informationen wie die besuchte Seite, das ungefähre Land, den Gerätetyp und den Browser.",
                "Wie bei jeder Website kann unser Hosting-Anbieter (Cloudflare) technische Daten wie die IP-Adresse vorübergehend verarbeiten, um die Seiten auszuliefern und die Website vor Angriffen zu schützen (berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO). Außerdem nutzen wir die Sprache deines Browsers und dein ungefähres Land, um dir die Website in deiner Sprache anzuzeigen, und speichern deine Auswahl in einem kleinen, technisch notwendigen Cookie (dorfic_lang).",
            ],
        },
        {
            heading: "4. Werbung und Cookies von Drittanbietern",
            paragraphs: [
                "Dorfic finanziert sich über Werbung. Wir können Anzeigen von Google AdSense einblenden. Google und seine Partner verwenden Cookies oder andere Kennungen, um Anzeigen auf Grundlage deiner früheren Besuche auf dieser und anderen Websites auszuliefern und deren Leistung zu messen.",
                "Du kannst personalisierte Werbung in den Google-Anzeigeneinstellungen (adssettings.google.com) deaktivieren oder unter www.youronlinechoices.com Cookies anderer Anbieter ablehnen. Mehr dazu, wie Google Daten verwendet, findest du unter policies.google.com/technologies/partner-sites. Werbe-Cookies setzen wir nur mit deiner Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO), die du jederzeit widerrufen kannst.",
            ],
        },
        {
            heading: "5. Lokale Speicherung",
            paragraphs: [
                "Damit die Website offline funktioniert und schneller lädt, kann dein Browser Dateien der Website selbst (Code, Styles und Symbole) über einen Service Worker speichern. Diese Dateien enthalten keine persönlichen Informationen und keine Bilder, und du kannst sie in den Browsereinstellungen löschen.",
            ],
        },
        {
            heading: "6. Deine Rechte",
            paragraphs: [
                "Da wir keine Daten erheben, die dich direkt identifizieren, haben wir in den meisten Fällen keine Informationen über dich, die wir auskunftsweise herausgeben, berichtigen oder löschen könnten. Du kannst uns dennoch jederzeit schreiben, um deine Rechte nach der DSGVO auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch auszuüben, oder bei Fragen zu dieser Erklärung. Außerdem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Wenn du uns auf Telegram schreibst, verwenden wir deinen Benutzernamen nur, um dir zu antworten.",
            ],
        },
        {
            heading: "7. Minderjährige",
            paragraphs: [
                "Dorfic kann in jedem Alter genutzt werden, da wir weder eine Anmeldung noch persönliche Daten verlangen. Wir empfehlen, dass Minderjährige unter Aufsicht eines Erwachsenen surfen.",
            ],
        },
        {
            heading: "8. Änderungen dieser Erklärung",
            paragraphs: [
                "Wir können diese Erklärung aktualisieren, um Änderungen an der Website oder am Recht zu berücksichtigen. Die jeweils gültige Fassung veröffentlichen wir auf dieser Seite mit Datum.",
            ],
        },
    ],
};

export const terminos: LegalPageContent = {
    title: "Nutzungsbedingungen",
    metaDescription: "Nutzungsbedingungen von Dorfic, den kostenlosen Bildtools, die in deinem Browser laufen.",
    h1: "Nutzungsbedingungen",
    intro: "Mit der Nutzung von Dorfic akzeptierst du diese Bedingungen. Sie sind kurz und sollen verständlich sein; bitte lies sie, bevor du die Tools verwendest.",
    updated: UPDATED,
    sections: [
        {
            heading: "1. Der Dienst",
            paragraphs: [
                "Dorfic bietet kostenlose Tools zum Umwandeln, Komprimieren und Skalieren von Bildern. Die Tools laufen in deinem Browser und die Verarbeitung erfolgt auf deinem Gerät. Der Dienst wird „wie besehen“ bereitgestellt und kann sich jederzeit ohne Vorankündigung ändern, erweitert oder eingestellt werden.",
            ],
        },
        {
            heading: "2. Erlaubte Nutzung",
            paragraphs: ["Du darfst Dorfic für private und gewerbliche Zwecke nutzen. Du verpflichtest dich, es nicht zu verwenden, um:"],
            bullets: [
                "Bilder zu verarbeiten, an denen du keine Rechte oder Nutzungserlaubnis hast.",
                "Rechtswidrige oder verleumderische Inhalte oder Inhalte, die Rechte Dritter verletzen, zu erstellen oder zu verbreiten.",
                "Die Website zu beschädigen, zu überlasten oder ihren Betrieb zu stören.",
                "Die Website, ihr Design oder ihre Texte ohne Genehmigung zu kopieren oder zu vervielfältigen.",
            ],
        },
        {
            heading: "3. Deine Bilder",
            paragraphs: [
                "Du behältst alle Rechte an den Bildern, die du verarbeitest. Dorfic erhält sie nicht und beansprucht keine Rechte daran. Du bist dafür verantwortlich, Kopien deiner Originaldateien aufzubewahren; wir empfehlen, das Original erst zu löschen, wenn du das Ergebnis geprüft hast.",
            ],
        },
        {
            heading: "4. Keine Gewährleistung",
            paragraphs: [
                "Wir tun unser Bestes, damit die Tools korrekt funktionieren, garantieren aber nicht, dass sie fehlerfrei sind, auf allen Geräten oder Browsern funktionieren oder dass das Ergebnis von einem bestimmten Portal oder einer bestimmten Stelle akzeptiert wird. Prüfe immer die Anforderungen der Website, auf der du deine Bilder verwenden wirst.",
            ],
        },
        {
            heading: "5. Haftungsbeschränkung",
            paragraphs: [
                "Soweit gesetzlich zulässig, haftet Dorfic nicht für direkte oder indirekte Schäden, die aus der Nutzung oder der Unmöglichkeit der Nutzung der Website entstehen, einschließlich des Verlusts von Daten oder Dateien. Die gesetzliche Haftung für Vorsatz und grobe Fahrlässigkeit bleibt unberührt.",
            ],
        },
        {
            heading: "6. Werbung und Links",
            paragraphs: [
                "Die Website zeigt Werbung von Drittanbietern und kann Links zu anderen Websites enthalten. Wir kontrollieren weder die Inhalte, Produkte oder Datenschutzpraktiken dieser Dritten noch sind wir dafür verantwortlich.",
            ],
        },
        {
            heading: "7. Geistiges Eigentum",
            paragraphs: [
                "Die Marke Dorfic, ihr Logo, das Design der Website und ihre Texte gehören Dorfic. Die von uns verwendeten Open-Source-Bibliotheken unterliegen ihren eigenen Lizenzen.",
            ],
        },
        {
            heading: "8. Änderungen und anwendbares Recht",
            paragraphs: [
                "Wir können diese Bedingungen jederzeit ändern; gültig ist die auf dieser Seite veröffentlichte Fassung. Es gilt das Recht der Vereinigten Mexikanischen Staaten, unbeschadet zwingender Verbraucherschutzvorschriften deines Wohnsitzlandes.",
            ],
        },
    ],
};
