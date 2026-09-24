import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-100kb",
    title: "Compress Image to 100 KB",
    metaDescription:
        "Compress photos and scanned documents to 100 KB or less, for free and without uploading them. Ideal for online applications and forms with size limits.",
    h1: "Compress an image to 100 KB for free",
    lead: "Get your photos and scanned documents down to 100 KB or less for any online application. No sign-up and 100% private.",
    sections: [
        {
            heading: "The most common limit for applications: 100 KB",
            paragraphs: [
                "When a portal asks you to upload an ID, proof of address, a certificate or another document as an image, the limit is very often 100 KB per file. Many school enrollment platforms, job boards and customer service systems use it too. It's a size that keeps a full document legible, as long as the image is well optimized.",
                "This page is already set to 100 KB. Dorfic automatically finds the highest possible quality without going over the limit, and only reduces the dimensions when it's absolutely necessary. That way your documents stay small and still readable.",
            ],
        },
        {
            heading: "How to compress to 100 KB step by step",
            steps: [
                "Take a clear photo of the document or select the image you already have.",
                "Add it to the upload area (you can also drag or paste it). You can add several at once, for example the front and back of your ID.",
                "If the system requires it, change the output format to JPG.",
                "Check the final size and download each image or all of them in a ZIP.",
            ],
        },
        {
            heading: "What can you compress to 100 KB?",
            bullets: [
                "Official IDs, front and back.",
                "Photographed proof of address, bills and bank statements.",
                "Scanned certificates, transcripts and official records.",
                "Photos for school or employment files.",
                "Screenshots of payments or bank transfers.",
            ],
        },
        {
            heading: "Tricks to keep the document readable",
            paragraphs: [
                "The final quality depends a lot on the original photo. Place the document on a dark, smooth surface, in good natural light without flash, and shoot it straight on so it isn't skewed. Crop off any extra edges: the less background there is, the more detail is left for the text.",
                "If the document has very small print and it isn't readable at 100 KB, check whether the portal accepts PDF or a higher limit. You can also try JPG output instead of PNG, since JPG usually preserves text better in document photos when the limit is tight.",
            ],
        },
        {
            heading: "Your documents stay safe",
            paragraphs: [
                "We know personal documents are sensitive. Dorfic doesn't upload them to the internet: compression runs in your own browser and the files never leave your device. The result doesn't keep the location or camera data either. You can process up to 50 files per batch, up to 50 MB each.",
            ],
        },
        {
            heading: "What does 100 KB really mean?",
            paragraphs: [
                "A kilobyte (KB) equals 1,024 bytes, so 100 KB is about 102,400 bytes. Some portals count the limit using 1,000 bytes per KB; that's why Dorfic always leaves the file slightly below the target, so it's accepted no matter how they do the math. If your computer shows a slightly different number from the page, that rounding difference is the reason.",
                "For reference, an untouched phone photo weighs between 2,000 and 5,000 KB. Bringing it down to 100 KB means reducing its size by more than 95%, which Dorfic achieves by combining smart compression and, only when needed, a moderate reduction of the dimensions.",
            ],
        },
    ],
    faqs: [
        {
            q: "How do I reduce an image to 100 KB?",
            a: "Select your image on this page and wait a few seconds. The 100 KB limit is already set; just download it when the green check mark appears.",
        },
        {
            q: "Can a document compressed to 100 KB still be read?",
            a: "In most cases yes, especially if the photo is well lit and cropped. Dorfic keeps the highest possible quality within the limit.",
        },
        {
            q: "Can I compress the front and back of my ID at the same time?",
            a: "Yes. Select both images at once; each one will end up at 100 KB or less.",
        },
        {
            q: "What if my image is already under 100 KB?",
            a: "It's left as is so it doesn't lose quality. You'll see the notice “Already small enough, left as is”.",
        },
        {
            q: "Does it work on my phone?",
            a: "Yes, it's designed to be used on a phone. You can pick photos straight from your gallery or take a new one.",
        },
        {
            q: "Does Dorfic keep copies of my documents?",
            a: "No. We never receive your files: everything is processed on your device and disappears when you close the page.",
        },
    ],
    related: ["comprimir-imagen-a-200kb", "comprimir-imagen-a-50kb", "comprimir-imagen", "heic-a-jpg", "redimensionar-imagen", "png-a-jpg"],
};

export default content;
