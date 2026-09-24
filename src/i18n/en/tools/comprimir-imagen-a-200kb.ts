import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-200kb",
    title: "Compress Image to 200 KB",
    metaDescription:
        "Reduce your images to 200 KB or less without losing sharpness. Free, in batches and without uploading your photos. Ideal for email, school and websites.",
    h1: "Compress an image to 200 KB for free",
    lead: "Get lightweight photos that still look great: 200 KB or less, ready for email, school or your website.",
    sections: [
        {
            heading: "200 KB: the sweet spot between quality and size",
            paragraphs: [
                "A 200 KB limit is generous enough to keep a sharp full-screen photograph, and small enough for it to send and load quickly. That's why it's a common requirement on school platforms, photo contests, job portals and systems where you upload several images at once.",
                "This page is already set to that target. Dorfic adjusts the compression to get as close as possible to 200 KB without going over, so every KB goes into quality. With most phone photos, the image keeps a good resolution and the difference from the original is minimal.",
            ],
        },
        {
            heading: "How to compress your photos to 200 KB",
            steps: [
                "Select your images, drag them onto the upload area or paste them.",
                "Choose the output format if you need to; WebP gives you even more quality per KB for web use.",
                "Watch each photo's progress and the savings achieved.",
                "Download them individually or all together in a ZIP.",
            ],
        },
        {
            heading: "Ideal for…",
            bullets: [
                "Homework and school projects submitted on platforms with a per-file limit.",
                "Emails with several attached photos that stay under the server's limit.",
                "Blogs, websites and online stores that need fast but attractive images.",
                "Listings on real estate or car sales portals, where you upload lots of photos.",
                "Evidence for insurance claims or warranties that require several clear images.",
            ],
        },
        {
            heading: "Tips to make the most of 200 KB",
            paragraphs: [
                "If you're publishing online, you don't need 4000-pixel images: 1600 to 2000 pixels wide looks perfect on any screen. Resizing them first leaves more room for quality and the result is even sharper.",
                "For photos with lots of detail, like landscapes or crowds, JPG and WebP work much better than PNG. If your original image is a PNG photograph, switch the output to JPG: you'll notice it keeps much more detail within the same limit.",
            ],
        },
        {
            heading: "Fast, free and private",
            paragraphs: [
                "You don't need an account or to install any app. Your photos never leave your device because the whole process happens in your browser. You can compress up to 50 images per batch, up to 50 MB each, with no watermarks.",
            ],
        },
        {
            heading: "How Dorfic decides the final quality",
            paragraphs: [
                "When you choose a target size, Dorfic doesn't apply a fixed percentage to every photo. It first tries compressing with the browser-image-compression library and then checks the result. If the file is still above 200 KB, it tries different quality levels until it finds the highest one that fits the limit, and only if that isn't enough does it gradually reduce the dimensions.",
                "That's why two different photos can end up with different qualities: a simple image, like a portrait on a plain background, fits in 200 KB almost unchanged, while a photo full of detail needs more compression. In every case the final result respects the limit and makes the most of the available space.",
            ],
        },
    ],
    faqs: [
        {
            q: "How much quality does a photo lose when compressed to 200 KB?",
            a: "Very little in most cases. At screen size the difference from the original is usually hard to notice.",
        },
        {
            q: "Can I compress many photos to 200 KB at once?",
            a: "Yes, up to 50 images per batch. Each will end up at 200 KB or less and you can download them in a ZIP.",
        },
        {
            q: "Is JPG or WebP better at 200 KB?",
            a: "WebP offers more quality per KB and is ideal for websites. For sending to institutions or people with older devices, JPG is more compatible.",
        },
        {
            q: "Why did my image end up at 190 KB and not 200?",
            a: "Because Dorfic never goes over the limit: it looks for the best quality that fits under 200 KB, so it usually lands slightly below.",
        },
        {
            q: "Do I need to create an account?",
            a: "No. It's free, with no sign-up, and your images are processed only on your device.",
        },
    ],
    related: ["comprimir-imagen-a-100kb", "comprimir-imagen", "redimensionar-imagen", "jpg-a-webp", "comprimir-imagen-a-50kb", "heic-a-jpg"],
};

export default content;
