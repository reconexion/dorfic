import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-10kb",
    title: "Compress Image to 10 KB",
    metaDescription:
        "Reduce your image to 10 KB or less for free. For scanned signatures and systems with extreme limits. No sign-up and no uploading your photos.",
    h1: "Compress an image to 10 KB for free",
    lead: "For the strictest systems: get your signature or photo down to 10 KB or less, in seconds and without uploading it.",
    sections: [
        {
            heading: "Who asks for 10 KB images?",
            paragraphs: [
                "Ten kilobytes is one of the lowest limits there is. You'll find it mostly in old or very restrictive systems: registrations where you upload a scanned signature, digital ID cards with a thumbnail photo, school or government databases that store thousands of records, and some exam or job application forms.",
                "Getting to 10 KB from a 3 MB phone photo means reducing the file by more than 99%. This page is already set up to do it: Dorfic adjusts the compression and dimensions automatically so the result meets the limit and looks as good as possible.",
            ],
        },
        {
            heading: "How to get your image to 10 KB",
            steps: [
                "Crop the image to leave only what's needed: your signature, or your face and shoulders.",
                "Select or drag the image. The 10 KB target is already chosen.",
                "If the system requires JPG, change it in “Output format”.",
                "Check the final size and download your image.",
            ],
        },
        {
            heading: "What to expect from a 10 KB image",
            paragraphs: [
                "At this size, a face photo ends up about 200 to 300 pixels per side: enough for an on-screen ID card or a digital record, but not for printing. Signatures work especially well, because they're dark strokes on a white background and compress with very little loss.",
                "If the result looks too blurry, the most effective fix is to crop more. Every bit of background you remove leaves more room for the important detail.",
            ],
        },
        {
            heading: "Tips for scanned signatures",
            bullets: [
                "Sign with black or dark blue ink on a white, unlined sheet.",
                "Take the photo in good light, straight on and without shadows.",
                "Crop very close to the signature before compressing.",
                "If the system asks for specific dimensions, resize first.",
                "Check that the final file reads clearly before uploading it.",
            ],
        },
        {
            heading: "What if I can't get to 10 KB with good quality?",
            paragraphs: [
                "Check whether the system accepts a slightly higher limit: the quality difference between 10 and 20 KB is big. Also check the allowed format; some portals accept PNG for signatures, which can look cleaner with thin strokes.",
            ],
        },
        {
            heading: "Privacy",
            paragraphs: [
                "Signatures and photos for applications are sensitive data. Dorfic doesn't upload them to any server: everything is processed in your browser. The final file doesn't include metadata such as location.",
            ],
        },
        {
            heading: "10 KB vs 20 KB vs 30 KB",
            paragraphs: [
                "Each size step changes quite a bit what fits in the image. At 10 KB a signature looks clean, but a face photo ends up small and somewhat soft. At 20 KB you can already have a recognizable ID-style photo, and at 30 KB the same photo gains sharpness in the eyes, hair and edges. That's why we recommend always using the highest limit the system allows: there's no advantage in going far below it.",
                "If you don't know the exact limit, check the portal's instructions or the error message that appears when you try to upload the file; it usually states the maximum size allowed. With that number, choose the matching Dorfic page or type the exact value into the general compressor.",
            ],
        },
    ],
    faqs: [
        {
            q: "Can a phone photo be compressed to 10 KB?",
            a: "Yes. Dorfic reduces the quality and dimensions as much as needed so it ends up at 10 KB or less.",
        },
        {
            q: "Will it look good?",
            a: "For signatures and small ID-style photos, yes. It isn't a suitable size for printing or for images with a lot of detail.",
        },
        {
            q: "Will it be exactly 10 KB?",
            a: "It will be 10 KB or slightly less, never above the limit.",
        },
        {
            q: "Is my signature stored anywhere?",
            a: "No. It never leaves your device and disappears when you close the page.",
        },
        {
            q: "What if the portal asks for dimensions in pixels?",
            a: "First use the resize tool with the dimensions they ask for, then compress here.",
        },
    ],
    related: ["comprimir-imagen-a-20kb", "comprimir-imagen-a-30kb", "comprimir-imagen-a-50kb", "redimensionar-imagen", "comprimir-imagen", "heic-a-jpg"],
};

export default content;
