import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-jpg",
    title: "Compress JPG",
    metaDescription:
        "Compress JPG photos for free and reduce their size by up to 90% without it showing. Choose KB or quality, process in batches and download as a ZIP. No uploads.",
    h1: "Compress JPG for free",
    lead: "Reduce the size of your JPG photos in seconds, with no visible loss of sharpness and without them leaving your device.",
    sections: [
        {
            heading: "Why are your JPGs so large?",
            paragraphs: [
                "Today's phone cameras save photos of 12, 48 or even 200 megapixels with very light compression, designed to keep every detail in case you decide to print or crop. The result is JPG files of 3 to 8 MB each. To view them on a screen, email them or upload them to a form, that size is unnecessary.",
                "Compressing a JPG means saving it again with more efficient compression and, if needed, fewer pixels. Done well, the photo looks practically the same and weighs 70% to 95% less. Dorfic does it in your browser: you don't install anything and your photos are never uploaded.",
            ],
        },
        {
            heading: "How to compress a JPG step by step",
            steps: [
                "Select your JPG photos, drag them onto the upload area or paste them with Ctrl + V.",
                "Choose “Target size” and tap 20, 50, 100, 200 or 500 KB; or choose “By quality” and move the slider.",
                "Wait for the green check mark: you'll see the size before and after and the percentage saved.",
                "Download each photo or all of them together in a ZIP.",
            ],
        },
        {
            heading: "Target size or quality?",
            paragraphs: [
                "Use “Target size” when someone sets you a limit: a portal that accepts at most 100 KB, an email service that rejects attachments over 10 MB in total, or a school platform with a per-file limit. Dorfic automatically finds the highest quality that fits in that size.",
                "Use “By quality” when what matters is that the photo looks good and you just want to lighten it. 75% to 85% is the sweet spot for most photos: the difference from the original is very hard to notice and the file usually ends up at a quarter of its size.",
            ],
        },
        {
            heading: "Most common uses",
            bullets: [
                "Email lots of photos without exceeding the attachment limit.",
                "Upload photos to job, scholarship or government portals that limit file size.",
                "Speed up your website or online store with lighter images.",
                "Free up space on your phone or in the cloud while keeping your memories.",
                "Share albums on WhatsApp or Telegram using less data.",
            ],
        },
        {
            heading: "Tips for the best quality",
            paragraphs: [
                "Always compress from the original photo, not from one that has already been compressed: every time a JPG is saved again it loses a little detail. If you need specific dimensions, resize first and compress afterwards; that way the size budget goes into the pixels that will actually be seen.",
                "If your photo has skies or smooth gradients, avoid qualities below 60%, because banding can appear. For photos of documents, 70% quality usually keeps the text perfectly readable.",
            ],
        },
        {
            heading: "Privacy and limits",
            paragraphs: [
                "You can compress up to 50 photos at once, up to 50 MB each. All the work is done by your device, so there are no queues or daily limits. The resulting file doesn't include metadata such as GPS location, which is useful if you're going to share your photos publicly.",
            ],
        },
    ],
    faqs: [
        {
            q: "How much can I reduce a JPG's size?",
            a: "With phone photos it's common to cut 70% to 95% of the size. Dorfic shows you the exact saving for each file.",
        },
        {
            q: "Is the compression noticeable?",
            a: "At 75% to 85% quality the difference is practically invisible at screen size. Only with very low limits, like 20 KB, does the photo lose detail.",
        },
        {
            q: "Can I compress several JPG photos at once?",
            a: "Yes, up to 50 per batch. At the end you download them together in dorfic-images.zip.",
        },
        {
            q: "Are my photos uploaded to a server?",
            a: "No. Compression happens in your browser and your photos never leave your device.",
        },
        {
            q: "What's the difference between JPG and JPEG?",
            a: "None: they're the same format. JPEG is the full name and JPG the short extension popularized by Windows.",
        },
        {
            q: "Does compressing a JPG change its dimensions?",
            a: "In quality mode, no. In target size mode, only if the limit is so low that the dimensions must be reduced for the photo to stay sharp.",
        },
    ],
    related: ["comprimir-imagen", "comprimir-imagen-a-100kb", "comprimir-png", "redimensionar-imagen", "jpg-a-webp", "comprimir-imagen-a-200kb"],
};

export default content;
