import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "png-a-jpg",
    title: "Convert PNG to JPG",
    metaDescription:
        "Convert PNG images to JPG for free and in batches. Choose the quality, reduce the size and download as a ZIP. No uploads: everything happens in your browser.",
    h1: "Convert PNG to JPG for free",
    lead: "Turn your PNGs into JPGs so they're much smaller and accepted by any form. No sign-up and no uploads.",
    sections: [
        {
            heading: "Why convert PNG to JPG?",
            paragraphs: [
                "PNG is a lossless format: it stores every pixel exactly as it is. It's perfect for logos, screenshots with text or images with a transparent background, but with photographs it produces huge files. A screenshot or photo in PNG can weigh 3, 5 or even 10 MB, when the same content as a JPG takes up a few hundred KB.",
                "On top of that, some portals and apps only accept JPG. Converting your PNGs helps you meet those requirements and share images faster. This tool does it in your own browser, without sending anything to the internet.",
            ],
        },
        {
            heading: "How to convert a PNG to JPG step by step",
            steps: [
                "Select your PNG files, drag them onto the upload area or paste them with Ctrl + V (great for screenshots).",
                "Adjust the quality if needed. At 92% the image looks practically the same and weighs much less.",
                "Wait until each image shows the green check mark and the percentage you saved.",
                "Download the JPGs one by one or all together in a ZIP.",
            ],
        },
        {
            heading: "When is it a good idea?",
            bullets: [
                "Screenshots you want to send by email or WhatsApp without them being so heavy.",
                "Photos accidentally saved as PNG, for example when exporting them from an editor.",
                "Forms for government services, schools or companies that only accept JPG.",
                "Images for your website or online store, where every KB counts for speed.",
                "Scanned documents that the scanner saved as PNG and take up too much space.",
            ],
        },
        {
            heading: "What happens to transparency",
            paragraphs: [
                "JPG doesn't support transparency. If your PNG has transparent areas (for example, a logo without a background), those areas are filled with white when converting. For most uses, like documents or photos, the result looks natural. If you need to keep the transparency and still reduce the size, you're better off converting to WebP or compressing the PNG in its own format.",
                "It's also not a good idea to convert images with lots of small text or very thin lines, like diagrams, to JPG: JPG can create small smudges around the letters. In those cases, raise the quality to 95–100%.",
            ],
        },
        {
            heading: "Limits",
            paragraphs: [
                "You can convert up to 50 images per batch, up to 50 MB each. The conversion happens on your device, so the speed depends on your phone or computer; in most cases it takes less than a second per image. The resulting JPG doesn't include metadata from the original file.",
            ],
        },
        {
            heading: "PNG, JPG and the size of your screenshots",
            paragraphs: [
                "Screenshots are saved as PNG on almost every phone and computer. On modern high-resolution screens, a single screenshot can exceed 2 MB. If you just need to show a conversation, a payment receipt or a chart, converting it to high-quality JPG brings it down to a fraction of that size and it stays perfectly readable.",
                "If you're going to put several screenshots in an email or upload them to a platform with a size limit, convert them all in one batch and download them as a ZIP. You save time and space, and since everything happens on your device, the sensitive information in your screenshots never leaves it.",
            ],
        },
    ],
    faqs: [
        {
            q: "Does an image lose quality when going from PNG to JPG?",
            a: "JPG compresses with a small loss, but at 90% quality or higher the difference is very hard to notice in photographs. For images with small text, raise the quality.",
        },
        {
            q: "What happens to the transparent background?",
            a: "It turns white, because JPG doesn't support transparency. If you need to keep it, use WebP or keep the PNG.",
        },
        {
            q: "How much space will I save?",
            a: "It depends on the image, but with photos and screenshots it's common to save 70% to 95% of the size. Dorfic shows you the exact saving for each file.",
        },
        {
            q: "Can I convert screenshots directly?",
            a: "Yes. Take the screenshot, open this page and press Ctrl + V (or Cmd + V on a Mac). The image is added automatically and converted.",
        },
        {
            q: "Is it safe? Are my files uploaded?",
            a: "They're not uploaded. Everything is processed in your browser and your images never leave your device.",
        },
        {
            q: "Is there any cost or watermark?",
            a: "No. It's free, with no sign-up and no watermarks.",
        },
    ],
    related: ["jpg-a-png", "comprimir-imagen", "webp-a-jpg", "jpg-a-webp", "heic-a-jpg", "redimensionar-imagen"],
};

export default content;
