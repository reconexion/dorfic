import type { LegalPageContent } from "../../types";

const UPDATED = "September 23, 2026";

export const acerca: LegalPageContent = {
    title: "About Dorfic",
    metaDescription: "Meet Dorfic: free image tools that run in your browser and protect your privacy. Our mission, how we work and how we fund the project.",
    h1: "About Dorfic",
    intro: "Dorfic is a set of free tools for working with images: converting formats, compressing and resizing. We built it around the real situations people run into every day.",
    sections: [
        {
            heading: "Our mission",
            paragraphs: [
                "We want anyone to be able to prepare their images for an application, school, work or social media without hassle, without paying and without putting their personal information at risk. Something as simple as reducing the size of a photo shouldn't force you to create an account, install an app or upload your documents to an unknown server.",
            ],
        },
        {
            heading: "How Dorfic works",
            paragraphs: [
                "Unlike many online services, Dorfic never receives your images. When you pick a photo, your browser processes it using your own device through standard web technologies (Canvas and Web Workers). The result is created right there and you download it directly. That's why we can say with full confidence that your photos never leave your device.",
                "Working this way also makes the tools fast: there's no waiting for a file to upload or for a server to process it.",
            ],
        },
        {
            heading: "How we fund Dorfic",
            paragraphs: [
                "Dorfic is free and is supported by ads shown on the site. We try to keep them unobtrusive, never covering the tools or interrupting what you're doing. Ads have no access to your images, because your images are never sent anywhere.",
            ],
        },
        {
            heading: "Our commitment",
            bullets: [
                "Keep the tools free and without watermarks.",
                "Never upload or store your images.",
                "Explain clearly what each tool does and what its limits are.",
                "Keep improving based on feedback from the people who use Dorfic.",
            ],
        },
    ],
};

export const contacto: LegalPageContent = {
    title: "Contact",
    metaDescription: "Questions, suggestions or found a bug in Dorfic? Message us on Telegram and we'll get back to you as soon as possible.",
    h1: "Contact",
    intro: "Have a question, an idea for a new tool, or found something that doesn't work right? We'd love to hear from you.",
    sections: [
        {
            heading: "Write to us",
            paragraphs: [
                "The best way to reach us is on Telegram, at @tostilocos. We usually reply within 2 to 5 business days.",
                "If you're reporting a problem, tell us which tool you were using, on which device and browser, and what message appeared. Please don't send us images containing personal information: we don't need them to help you.",
            ],
        },
        {
            heading: "Topics we can help with",
            bullets: [
                "Questions about how to use a tool.",
                "Bug reports or compatibility problems.",
                "Suggestions for new features or tools.",
                "Questions about privacy, advertising or legal matters.",
            ],
        },
    ],
};

export const privacidad: LegalPageContent = {
    title: "Privacy policy",
    metaDescription:
        "Dorfic's privacy policy: your images are processed on your device and never uploaded. Learn which technical data is collected, how advertising cookies are used and what your rights are.",
    h1: "Privacy policy",
    intro: "At Dorfic, privacy is part of the design. This policy explains what information is handled when you use the site, for what purposes and what choices you have.",
    updated: UPDATED,
    sections: [
        {
            heading: "1. Who is responsible",
            paragraphs: [
                "Dorfic (“Dorfic”, “we”) is responsible for the website and the tools it offers. You can contact us about anything related to this policy on Telegram (@tostilocos), as shown on the Contact page.",
            ],
        },
        {
            heading: "2. Your images are not collected",
            paragraphs: [
                "The images you select, drag or paste into the tools are processed exclusively in your browser, on your device. They are not sent to our servers or to any third party, we don't store them and we have no way of seeing them. When you close or reload the page, they disappear from the browser's memory.",
                "The resulting files don't include the original's metadata either (such as GPS location or camera model), except when an image is left unchanged because it already met the requested size.",
            ],
        },
        {
            heading: "3. Technical data and analytics",
            paragraphs: [
                "To know how many people visit the site and which pages are most useful, we use Cloudflare Web Analytics, an analytics service that doesn't use cookies or track people across websites. It collects aggregated information such as the page visited, approximate country, device type and browser.",
                "Like any website, our hosting provider (Cloudflare) may temporarily process technical data such as your IP address to deliver the pages and protect the site against attacks. We also use your browser's language and your approximate country to show you the site in your language, and we remember your choice in a small functional cookie (dorfic_lang).",
            ],
        },
        {
            heading: "4. Advertising and third-party cookies",
            paragraphs: [
                "Dorfic is funded by ads. Ads are managed by Ezoic, which works with Google and other advertising networks. Ezoic, Google and their partners use cookies or other identifiers to show ads based on your previous visits to this and other websites, and to measure their performance.",
                "You can turn off personalized advertising in Google's Ad Settings (adssettings.google.com) or visit www.aboutads.info to opt out of other vendors' cookies. For more information on how Google uses data, see policies.google.com/technologies/partner-sites. Where required by law, we will ask for your consent before using advertising cookies.",
            ],
        },
        {
            heading: "5. Local storage",
            paragraphs: [
                "So that the site works offline and loads faster, your browser may store the site's own files (code, styles and icons) through a service worker. These files contain no personal information or images, and you can delete them from your browser settings.",
            ],
        },
        {
            heading: "6. Your rights",
            paragraphs: [
                "Since we don't collect data that directly identifies you, in most cases we have no information about you to access, correct or delete. Even so, you can write to us to exercise your rights of access, rectification, erasure or objection under the data protection law that applies to you (for example, the GDPR in Europe or the CCPA in California), or with any question about this policy. If you message us on Telegram, we will use your username only to reply.",
            ],
        },
        {
            heading: "7. Children",
            paragraphs: [
                "Dorfic can be used by people of any age because we don't require registration or personal data. We recommend that minors browse under adult supervision.",
            ],
        },
        {
            heading: "8. Changes to this policy",
            paragraphs: [
                "We may update this policy to reflect changes to the site or the law. We will publish the current version on this page with its update date.",
            ],
        },
    ],
};

export const terminos: LegalPageContent = {
    title: "Terms of use",
    metaDescription: "Terms and conditions for using Dorfic, the free image tools that run in your browser.",
    h1: "Terms of use",
    intro: "By using Dorfic you agree to these terms. They're short and meant to be clear; please read them before using the tools.",
    updated: UPDATED,
    sections: [
        {
            heading: "1. The service",
            paragraphs: [
                "Dorfic offers free tools to convert, compress and resize images. The tools run in your browser and processing happens on your device. The service is provided “as is” and may change, expand or be discontinued at any time without notice.",
            ],
        },
        {
            heading: "2. Permitted use",
            paragraphs: ["You may use Dorfic for personal and commercial purposes. You agree not to use it to:"],
            bullets: [
                "Process images you don't own or don't have permission to use.",
                "Create or distribute illegal or defamatory content, or content that infringes the rights of others.",
                "Try to damage, overload or interfere with the operation of the site.",
                "Copy or reproduce the site, its design or its text without permission.",
            ],
        },
        {
            heading: "3. Your images",
            paragraphs: [
                "You keep all rights to the images you process. Dorfic doesn't receive them or claim any rights over them. You are responsible for keeping copies of your original files; we recommend not deleting the original until you've checked the result.",
            ],
        },
        {
            heading: "4. No warranties",
            paragraphs: [
                "We do our best to make the tools work correctly, but we don't guarantee that they are error-free, that they work on every device or browser, or that the result will be accepted by any particular portal or institution. Always check the requirements of the site where you'll use your images.",
            ],
        },
        {
            heading: "5. Limitation of liability",
            paragraphs: [
                "To the extent permitted by law, Dorfic will not be liable for direct or indirect damages arising from the use of, or inability to use, the site, including loss of data or files.",
            ],
        },
        {
            heading: "6. Advertising and links",
            paragraphs: [
                "The site shows third-party ads and may contain links to other websites. We don't control and are not responsible for the content, products or privacy practices of those third parties.",
            ],
        },
        {
            heading: "7. Intellectual property",
            paragraphs: [
                "The Dorfic brand, its logo, the site's design and its text belong to Dorfic. The open-source libraries we use are governed by their own licenses.",
            ],
        },
        {
            heading: "8. Changes and governing law",
            paragraphs: [
                "We may modify these terms at any time; the current version is the one published on this page. These terms are governed by the laws of the United Mexican States.",
            ],
        },
    ],
};
