import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-50kb",
    title: "Compress Image to 50 KB",
    metaDescription:
        "Compress your image to 50 KB or less for free. Perfect for profile photos, signatures and online registrations. No uploads: everything happens in your browser.",
    h1: "Compress an image to 50 KB for free",
    lead: "Shrink your photos to 50 KB or less for registrations, signatures and profile pictures. Fast, free and private.",
    sections: [
        {
            heading: "A 50 KB image: small but good quality",
            paragraphs: [
                "The 50 KB limit shows up often in registration forms, school platforms, job boards and internal company systems. It's a size that allows a face photo or a signature with good definition, but it forces you to reduce a phone photo considerably, since it usually weighs around 3 MB.",
                "On this page the 50 KB target is already set. Dorfic tries different compression levels and keeps the best quality that fits within the limit; if the photo is very large, it also adjusts its dimensions so the result looks clean.",
            ],
        },
        {
            heading: "Step by step to get your image to 50 KB",
            steps: [
                "Select one or more photos, drag them or paste them onto the upload area.",
                "Leave the format as “Same as original” or choose JPG if the portal requires it.",
                "Wait for the green check mark: you'll see the final size and the percentage you saved.",
                "Download your image or all of them together in a ZIP.",
            ],
        },
        {
            heading: "Common uses for 50 KB images",
            bullets: [
                "Photos for job applications and profiles on recruitment platforms.",
                "Digitized signatures for contracts, school forms or HR systems.",
                "Profile pictures for learning platforms, forums or intranets.",
                "Images for mass emails or newsletters, where everything should load fast.",
                "Photo evidence in systems that limit the size of each attachment.",
            ],
        },
        {
            heading: "Tips for the best quality",
            paragraphs: [
                "Before compressing, crop the image to keep only what's needed. Every pixel you remove leaves more KB “budget” for what really matters. For face photos, a shoulders-up frame with a plain background gives very sharp results at 50 KB.",
                "For signatures and black-and-white documents, make sure the photo is well lit and free of shadows: grey or smudged paper takes up more space than a uniform white background. If the system also requires exact pixel dimensions, resize first and compress afterwards.",
            ],
        },
        {
            heading: "Private and unlimited",
            paragraphs: [
                "Your images never leave your device: compression is done by your own browser. There's no sign-up, no watermarks and no daily limit. You can process up to 50 images per batch, up to 50 MB each, and the final file doesn't keep the location or other metadata from the original photo.",
            ],
        },
        {
            heading: "20 KB vs 50 KB vs 100 KB",
            paragraphs: [
                "If you're unsure which limit to choose, think about the end use. At 20 KB a photo works for thumbnails and very small ID cards. At 50 KB a face photo at card size or a signature with clear strokes already looks good. At 100 KB you can keep a full document, such as a receipt or a certificate, legible.",
                "When the form just says “maximum 50 KB”, there's no advantage in making the image 20 KB: you lose quality for nothing. It's best to get close to the allowed limit, which is exactly what Dorfic does automatically. And if you need another size in the future, the general tool lets you type any value in KB.",
            ],
        },
    ],
    faqs: [
        {
            q: "How do I reduce a photo to 50 KB on my phone?",
            a: "Open this page on your phone, tap “Select images”, choose the photo from your gallery and download it when the green check mark appears. The 50 KB limit is already set.",
        },
        {
            q: "Does a 50 KB photo look good?",
            a: "Yes, for face photos, signatures and profile pictures it looks good on screen. It isn't suitable for printing at a large size.",
        },
        {
            q: "Can I choose a different size?",
            a: "Yes. In the general compress image tool you can choose 20, 100, 200 or 500 KB, or type any value.",
        },
        {
            q: "What if the portal requires JPG?",
            a: "Choose JPG under “Output format”. Your file will then have a .jpg extension even if the original was PNG or WebP.",
        },
        {
            q: "Is it safe to compress photos of documents here?",
            a: "Yes. We don't upload your images to any server; everything is processed on your device.",
        },
    ],
    related: ["comprimir-imagen-a-20kb", "comprimir-imagen-a-100kb", "comprimir-imagen-a-200kb", "comprimir-imagen", "redimensionar-imagen", "heic-a-jpg"],
};

export default content;
