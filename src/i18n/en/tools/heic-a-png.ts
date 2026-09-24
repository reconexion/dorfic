import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "heic-a-png",
    title: "Convert HEIC to PNG",
    metaDescription:
        "Convert iPhone HEIC photos to PNG for free, with no quality loss. Ideal for editing or design. In batches, in your browser and without uploading your photos.",
    h1: "Convert HEIC to PNG for free",
    lead: "Turn your iPhone photos into lossless PNGs, ready to edit, crop or use in your designs.",
    sections: [
        {
            heading: "When is HEIC to PNG better than JPG?",
            paragraphs: [
                "The iPhone saves its photos as HEIC, a modern, efficient format that many programs still can't open. To share or upload a photo, converting it to JPG is the most practical option. But if you're going to edit it, retouch it several times, use it in a design or remove its background, PNG is the better choice: it stores the image losslessly, so it doesn't degrade every time you save it again.",
                "With Dorfic you do the conversion right in your browser. The photo is decoded on your own device and saved as PNG without sending it to any server.",
            ],
        },
        {
            heading: "How to convert HEIC to PNG step by step",
            steps: [
                "Tap “Select images” and choose your HEIC or HEIF photos, or drag them onto the upload area.",
                "There's nothing to adjust: PNG keeps the image as it is, with no quality level.",
                "Wait until each photo shows the green check mark.",
                "Download each PNG or all of them together in a ZIP file.",
            ],
        },
        {
            heading: "What it's useful for",
            bullets: [
                "Editing photos in Photoshop, GIMP, Canva or Figma without piling up quality loss.",
                "Preparing images to remove their background in an editor.",
                "Using iPhone photos in presentations or printed materials with maximum sharpness.",
                "Archiving your best photos in an open, widely compatible format.",
                "Opening iPhone photos on Windows computers that don't recognize HEIC.",
            ],
        },
        {
            heading: "What to know about file size",
            paragraphs: [
                "A PNG of a photograph weighs much more than the original HEIC, sometimes five or ten times more, because it doesn't discard any detail. That's the price of having a perfect copy for editing. If your goal is just to share the photo or upload it to a form, the HEIC to JPG tool is a better fit, since it produces small, compatible files.",
                "Orientation is respected, so your photos won't come out sideways. The resulting PNG doesn't include the original metadata, such as where you took the photo.",
            ],
        },
        {
            heading: "Compatibility and limits",
            paragraphs: [
                "It works in up-to-date Safari, Chrome, Edge and Firefox, on phones and computers. On iPhones with a recent iOS the conversion is especially fast because the system already knows how to read HEIC. We accept up to 50 photos per batch and files up to 50 MB. Live Photos are converted as a still image.",
            ],
        },
        {
            heading: "HEIC, JPG and PNG: which one to choose",
            paragraphs: [
                "HEIC is ideal for storing photos on your iPhone because it takes up little space with very good quality. JPG is the universal format for sharing: light and compatible with everything. PNG is the working format: lossless, perfect for editing and for images you'll combine with other graphic elements.",
                "A practical strategy is to keep your originals in HEIC, convert what you'll share to JPG and only what you'll edit heavily to PNG. That way you save space and always have the right file for each use. With Dorfic you can do both conversions from your browser, without installing programs or uploading your photos.",
            ],
        },
    ],
    faqs: [
        {
            q: "Does HEIC to PNG lose quality?",
            a: "No. PNG is a lossless format, so the photo keeps all the quality the HEIC had when decoded.",
        },
        {
            q: "Why is the PNG so large?",
            a: "Because it stores every pixel without lossy compression. For sharing, use HEIC to JPG instead or compress the result.",
        },
        {
            q: "Will the PNG have a transparent background?",
            a: "Not automatically: photos have a background. PNG lets you remove it later in an editor without losing quality.",
        },
        {
            q: "Can I convert many HEIC photos to PNG at once?",
            a: "Yes, up to 50 per batch, and you download them together in a ZIP.",
        },
        {
            q: "Are my photos uploaded?",
            a: "No. The conversion happens in your browser and your photos never leave your device.",
        },
    ],
    related: ["heic-a-jpg", "comprimir-png", "png-a-jpg", "redimensionar-imagen", "comprimir-imagen", "png-a-webp"],
};

export default content;
