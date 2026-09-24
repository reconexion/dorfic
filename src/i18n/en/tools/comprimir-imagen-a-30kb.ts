import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-30kb",
    title: "Compress Image to 30 KB",
    metaDescription:
        "Compress your photo to 30 KB or less for free, with good sharpness for applications, scholarships and ID cards. In seconds and without uploading your image.",
    h1: "Compress an image to 30 KB for free",
    lead: "Get your photo down to 30 KB or less while keeping it sharp, ready for applications, scholarships and online ID cards.",
    sections: [
        {
            heading: "30 KB: the limit on many online applications",
            paragraphs: [
                "Many scholarship forms, job openings, school registrations and employment applications ask for a photo of at most 30 KB. It's a middle ground: small enough for the system to store thousands of records, but enough for your face to be clearly visible.",
                "This page is already set to that limit. Just select your photo: Dorfic tries different compression levels, picks the best quality that fits in 30 KB and, if needed, adjusts the dimensions to keep the image sharp.",
            ],
        },
        {
            heading: "How to get your photo to 30 KB",
            steps: [
                "Take or choose a front-facing photo with good light and a plain background.",
                "Crop it to leave your face and shoulders.",
                "Select the image here; the 30 KB target is ready.",
                "Download the result and upload it to the form.",
            ],
        },
        {
            heading: "What a 30 KB photo looks like",
            paragraphs: [
                "At 30 KB a face photo can measure around 500 to 700 pixels per side with good definition. It looks good on screen and on small printed ID cards. It's noticeably better than 20 KB and usually meets what institutions ask for when they request a passport-style or ID photo in digital format.",
            ],
        },
        {
            heading: "Tips to get your photo accepted",
            bullets: [
                "A white or light, uniform background; avoid textured walls.",
                "Face straight on, without sunglasses or a cap, unless told otherwise.",
                "Even lighting, without strong shadows on your face.",
                "JPG format unless the system says otherwise.",
                "Name the file as instructed, for example with your student or application number.",
            ],
        },
        {
            heading: "If the portal asks for exact dimensions",
            paragraphs: [
                "Some systems also ask for dimensions in pixels, such as 600 × 600. In that case, first use the resize tool with those dimensions and then come back here to compress. That way you meet both requirements without distorting the photo.",
                "If you see “invalid format” when uploading it, check that it isn't HEIC (iPhone photos) or WebP. You can convert it to JPG first with our tools.",
            ],
        },
        {
            heading: "Privacy",
            paragraphs: [
                "Your photo never leaves your device: compression happens in your browser. You can process several photos at once and download them in a ZIP.",
            ],
        },
        {
            heading: "Common mistakes when uploading photos to forms",
            paragraphs: [
                "The most frequent error isn't the size but the format: iPhone photos are saved as HEIC and many portals reject them even when they're small. Another common problem is uploading a screenshot of the photo instead of the original photo, which adds borders, phone status bars and quality loss.",
                "It's also worth checking the orientation: if the photo appears sideways on the portal, export it again. Dorfic keeps the correct orientation when compressing, so the file you download already appears upright in any system. Finally, avoid filters and beauty effects: institutions usually ask for a natural, recent photo.",
            ],
        },
    ],
    faqs: [
        {
            q: "How do I reduce a photo to 30 KB on my phone?",
            a: "Open this page, tap “Select images”, choose your photo and download it when the green check mark appears.",
        },
        {
            q: "Will the photo be exactly 30 KB?",
            a: "It will be 30 KB or slightly less. It never goes over the limit.",
        },
        {
            q: "Why did the pixel size change?",
            a: "Because fitting into 30 KB with good sharpness sometimes requires reducing the dimensions. That's better than leaving the photo large and full of blotches.",
        },
        {
            q: "My photo is from an iPhone and the portal won't accept it. What should I do?",
            a: "It's probably HEIC. Convert it first with the HEIC to JPG tool and then compress it here.",
        },
        {
            q: "Is it safe?",
            a: "Yes. Your photo is processed on your device and never uploaded to the internet.",
        },
    ],
    related: ["comprimir-imagen-a-20kb", "comprimir-imagen-a-50kb", "comprimir-imagen-a-10kb", "redimensionar-imagen", "heic-a-jpg", "comprimir-imagen"],
};

export default content;
