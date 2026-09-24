import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-20kb",
    title: "Compress Image to 20 KB",
    metaDescription:
        "Reduce your photo to 20 KB or less in seconds, for free and without uploading it. Ideal for ID-style photos and forms with very strict size limits.",
    h1: "Compress an image to 20 KB for free",
    lead: "Get your photo down to 20 KB or less for those forms with very strict limits. No sign-up and your image never leaves your device.",
    sections: [
        {
            heading: "When do you need a 20 KB image?",
            paragraphs: [
                "Some online systems set very low size limits, especially when they ask for an ID-style photo, a scanned signature or a profile picture. You'll often find them in registrations for entrance exams, job openings, scholarship applications, school platforms and some government portals. A phone photo weighs 100 to 300 times more than that, so “shrinking it a little” isn't enough.",
                "This page is already set up to bring each image down to 20 KB or less. Just select your photo and download it. Dorfic automatically finds the best possible quality within the limit and, as is necessary at this size, also reduces the image's dimensions.",
            ],
        },
        {
            heading: "How to get your photo to 20 KB step by step",
            steps: [
                "If you can, crop the photo first so only what matters is visible (for example, your face and shoulders). That way the detail is put to better use.",
                "Select the image, drag it or paste it. The 20 KB target is already chosen.",
                "If the portal requires a specific format, change it in “Output format”. For photos, JPG is the safest choice.",
                "Check the final size next to the file name and download it.",
            ],
        },
        {
            heading: "What a 20 KB image looks like",
            paragraphs: [
                "20 KB is enough for a sharp face photo about 300 to 500 pixels per side, which is exactly what forms with this limit expect. It works perfectly on screen or on a small ID card, but not for printing large or for showing documents with small print.",
                "If your image has a lot of detail (a landscape, a full document or several people), it will look softer at 20 KB. In that case, crop out what isn't needed or check whether the system accepts a larger limit, such as 50 or 100 KB.",
            ],
        },
        {
            heading: "Tips to get your photo accepted",
            bullets: [
                "Use a plain, light background: uniform backgrounds take up less space and leave more detail for your face.",
                "Check whether exact pixel dimensions are required; if so, use the resize tool first and then compress.",
                "Name the file the way they ask (for example, with your ID or application number) before uploading it.",
                "If the system says “invalid format”, make sure it's a JPG and not HEIC or WebP.",
            ],
        },
        {
            heading: "Your privacy is protected",
            paragraphs: [
                "Photos for applications are usually personal. That's why Dorfic doesn't upload them to any server: compression happens in your own browser. The final file also doesn't include metadata such as GPS location. You can process up to 50 images at a time, up to 50 MB each.",
            ],
        },
    ],
    faqs: [
        {
            q: "Can a phone photo be compressed to 20 KB?",
            a: "Yes. Dorfic reduces the quality and dimensions as much as needed so it ends up at 20 KB or less, while making it look as good as possible.",
        },
        {
            q: "Why did the image get smaller in pixels?",
            a: "Because the millions of pixels in a phone photo don't fit into 20 KB. Reducing the dimensions keeps the image sharp instead of full of blotches.",
        },
        {
            q: "Will the image be exactly 20 KB?",
            a: "It will be 20 KB or slightly less, never more. That way it meets the form's limit.",
        },
        {
            q: "My image looks blurry. What should I do?",
            a: "Crop out what doesn't matter and try again. If the system allows it, use a larger limit such as 50 KB.",
        },
        {
            q: "Can I compress a scanned signature to 20 KB?",
            a: "Yes. Signatures on a white background compress very well. If the portal accepts it, PNG can look cleaner for signatures; otherwise, use JPG.",
        },
        {
            q: "Are my photos uploaded to the internet?",
            a: "No. Everything is processed on your device. Your photos never leave it.",
        },
    ],
    related: ["comprimir-imagen-a-50kb", "comprimir-imagen-a-100kb", "comprimir-imagen", "redimensionar-imagen", "heic-a-jpg", "comprimir-imagen-a-200kb"],
};

export default content;
