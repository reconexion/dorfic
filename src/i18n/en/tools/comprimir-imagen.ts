import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen",
    title: "Compress Image",
    metaDescription:
        "Compress JPG, PNG and WebP images for free to the exact KB size you need or by quality percentage. See the size before and after. No uploads.",
    h1: "Compress images for free",
    lead: "Reduce the size of your JPG, PNG or WebP photos to the exact KB you're asked for, without installing anything or uploading them.",
    sections: [
        {
            heading: "What does the image compressor do?",
            paragraphs: [
                "Compressing an image means lowering its file size (the KB or MB it takes up) while keeping it looking good. Photos from a modern phone weigh between 2 and 6 MB, which is far too much to email, upload to a form or use on a website. With this tool you can bring them down to 100 KB, 50 KB or whatever size you need in a few seconds.",
                "There are two ways to work. In “Target size” you choose the maximum size in KB and Dorfic automatically finds the best possible quality that fits within that limit; if necessary, it also slightly reduces the dimensions. In “By quality” you choose a percentage and control the balance between sharpness and size yourself.",
            ],
        },
        {
            heading: "How to compress an image step by step",
            steps: [
                "Choose the mode: target size (recommended for forms and applications) or by quality.",
                "If you use target size, tap one of the quick buttons (20, 50, 100, 200 or 500 KB) or type another value.",
                "Select, drag or paste your images. You can add several at once.",
                "Check the result: you'll see the size before and after, and what percentage you saved.",
                "Download each image or all of them together in a ZIP.",
            ],
        },
        {
            heading: "Why compress your photos?",
            bullets: [
                "Forms with size limits: job applications, scholarships, enrollments and government services often ask for files under 100 or 200 KB.",
                "Email: stop your messages from bouncing because of oversized attachments.",
                "WhatsApp and social media: upload photos faster and use less mobile data.",
                "Websites and online stores: lightweight images make your site load fast and rank better on Google.",
                "Free up space: keep more photos on your phone or in the cloud without paying for extra storage.",
            ],
        },
        {
            heading: "Which output format should I choose?",
            paragraphs: [
                "By default the image keeps its original format. For photographs, JPG is the most compatible option. WebP produces even smaller files at the same quality and is supported by every modern browser, although some older portals don't recognize it. PNG is lossless but can't be compressed as much: if you have a photo saved as PNG and need it to be very small, switch the output to JPG and you'll see a huge difference.",
                "If the image has a transparent background and you convert it to JPG, the transparency is filled with white, because JPG doesn't support transparency.",
            ],
        },
        {
            heading: "Limits and tips",
            paragraphs: [
                "The smaller the target size, the more detail is lost. A photo at 20 KB works for an ID card or an avatar, but not for printing. If the image looks too blurry, try a larger limit or crop it first to remove what doesn't matter. We accept files up to 50 MB and up to 50 images per batch. The whole process happens on your device, so it may take a little longer on older phones.",
            ],
        },
    ],
    faqs: [
        {
            q: "How do I reduce an image's size without losing quality?",
            a: "Use “By quality” mode between 75% and 85%: the difference is barely noticeable and the size usually drops by more than half. If you also switch the output to WebP, the file gets even smaller.",
        },
        {
            q: "Does the image end up exactly at the size I choose?",
            a: "It ends up at that size or slightly below, never above. Dorfic looks for the highest quality that fits the limit, so it's usually very close to the value you asked for.",
        },
        {
            q: "What if my image is already smaller than the target?",
            a: "It's left as is so it doesn't lose quality for no reason. You'll see the notice “Already small enough, left as is” and can download it unchanged.",
        },
        {
            q: "Is it safe to compress personal documents here?",
            a: "Yes. Your images are never uploaded to the internet: everything is processed in your browser. You can compress photos of your ID, proof of address or other documents with peace of mind.",
        },
        {
            q: "Can I compress PNGs with a transparent background?",
            a: "Yes. If you keep the PNG format or choose WebP, the transparency is preserved. Only when converting to JPG does the transparent background turn white.",
        },
        {
            q: "How many images can I compress at once?",
            a: "Up to 50 images per batch, up to 50 MB each. When they're done you can download them all in a ZIP.",
        },
    ],
    related: [
        "comprimir-imagen-a-100kb",
        "comprimir-imagen-a-50kb",
        "comprimir-imagen-a-20kb",
        "comprimir-imagen-a-200kb",
        "redimensionar-imagen",
        "jpg-a-webp",
    ],
};

export default content;
