import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "jpg-a-png",
    title: "Convert JPG to PNG",
    metaDescription:
        "Convert JPG to PNG for free, in batches and without losing more quality. Ideal for editing or when a portal requires PNG. Your images are never uploaded.",
    h1: "Convert JPG to PNG for free",
    lead: "Convert your JPG photos to PNG in seconds to edit them without further quality loss or to meet a required format.",
    sections: [
        {
            heading: "What does the JPG to PNG converter do?",
            paragraphs: [
                "It takes your JPG images and saves them as PNG, a lossless format. That means that from then on the image won't lose any more quality, even if you open, edit and save it again many times. With JPG it's the opposite: every time you save, it's compressed again and the image slowly degrades.",
                "The whole conversion happens in your browser. You don't need to install programs or create an account, and your photos are never sent to any server.",
            ],
        },
        {
            heading: "How to convert JPG to PNG step by step",
            steps: [
                "Select your JPG images or drag them onto the upload area. You can also paste them with Ctrl + V.",
                "No settings needed: PNG saves the image as it is, with no quality to choose.",
                "Wait for the green check mark to appear on each file.",
                "Download each PNG or all of them together in a ZIP file.",
            ],
        },
        {
            heading: "When is PNG the better choice?",
            bullets: [
                "Before editing: if you're going to crop, add text or retouch an image several times, working in PNG avoids accumulating quality loss.",
                "When a system requires it: some portals, design templates or programs only accept PNG.",
                "For images with text, charts or drawings: PNG keeps edges and letters perfectly sharp.",
                "As a first step before removing the background in an editor, since PNG supports transparency.",
            ],
        },
        {
            heading: "What to know before converting",
            paragraphs: [
                "Converting to PNG doesn't recover quality the JPG has already lost: the image will look exactly like the original, but from then on it's protected against further losses. It doesn't add transparency automatically either; the background stays the same as in the photo.",
                "Keep in mind that a PNG is almost always much larger than the original JPG, sometimes five or ten times larger, especially with photographs. Dorfic will show you the final size of each file. If your goal is to send the image or upload it to a site with a size limit, you're probably better off sticking with JPG or using the image compressor.",
            ],
        },
        {
            heading: "Limits",
            paragraphs: [
                "You can convert up to 50 images at a time, up to 50 MB each. Since the conversion happens on your device, very large photos may take a few seconds on older phones. The final PNG file doesn't include the JPG's metadata, such as location.",
            ],
        },
        {
            heading: "JPG vs PNG in a nutshell",
            paragraphs: [
                "JPG is designed for photographs: it compresses heavily by discarding details the eye barely notices, which is why its files are small. PNG is designed for graphics: it stores every pixel exactly, supports transparency and keeps the edges of letters, icons and lines perfectly sharp, at the cost of larger files.",
                "In practice, use JPG to share and store photos, and PNG for logos, screenshots with text, illustrations or any image you'll edit several times. If in doubt, always keep a copy of the original file: that way you can convert it to whatever format you need later without losing anything.",
            ],
        },
    ],
    faqs: [
        {
            q: "Does converting JPG to PNG improve quality?",
            a: "No. The image looks the same as the original JPG. What you gain is that it won't lose any more quality when you edit and save it several times.",
        },
        {
            q: "Why is the PNG larger than the JPG?",
            a: "Because PNG stores the image losslessly, while JPG compresses by discarding details. With photographs, the PNG can be several times larger.",
        },
        {
            q: "Will the PNG have a transparent background?",
            a: "Not automatically. The conversion keeps the photo's original background. To remove it you need an image editor.",
        },
        {
            q: "Can I convert many images at once?",
            a: "Yes, up to 50 per batch. When they're done you can download them all together in dorfic-images.zip.",
        },
        {
            q: "Are my images stored anywhere?",
            a: "No. They're processed in your browser and never leave your device. When you close the page, they're gone.",
        },
    ],
    related: ["png-a-jpg", "jpg-a-webp", "redimensionar-imagen", "comprimir-imagen", "webp-a-jpg", "heic-a-jpg"],
};

export default content;
