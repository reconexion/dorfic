import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-500kb",
    title: "Compress Image to 500 KB",
    metaDescription:
        "Compress images to 500 KB or less for free while keeping almost the original quality. Ideal for contests, portfolios and email. No uploads.",
    h1: "Compress an image to 500 KB for free",
    lead: "Shrink your photos to half a megabyte while keeping almost all their quality: perfect for portfolios, contests and email.",
    sections: [
        {
            heading: "500 KB: near-original quality at a fraction of the size",
            paragraphs: [
                "Half a megabyte is a generous limit. It lets you keep photographs at high resolution, with enough detail to look perfect on large screens and even in small prints. Still, it's a huge reduction compared with the 3 to 8 MB of an unprocessed phone photo.",
                "That's why it's a common requirement for photo contests, online portfolios, real estate platforms, catalogs and calls for entries that want good-quality images without overloading their servers. This page is already set to bring each image down to 500 KB or less.",
            ],
        },
        {
            heading: "How to compress to 500 KB",
            steps: [
                "Select, drag or paste your images. You can process many at once.",
                "Leave the format on automatic or choose JPG or WebP if you need to.",
                "You'll see the size before and after for each image.",
                "Download them individually or all together in a ZIP.",
            ],
        },
        {
            heading: "Ideal for",
            bullets: [
                "Photo contests and calls for entries with a per-file limit.",
                "Online design, architecture or photography portfolios.",
                "House, apartment or car listings with lots of photos.",
                "Emails with several good-quality photos that don't bounce.",
                "Catalogs and product pages where detail matters.",
            ],
        },
        {
            heading: "Is compression at 500 KB noticeable?",
            paragraphs: [
                "For the vast majority of photos, no. At this size Dorfic usually keeps the original resolution or very close to it and uses a high quality. Only extremely detailed, huge images (for example, 48 megapixels or more) might need a slight reduction in dimensions to fit.",
                "If your image is already under 500 KB, it's left as is so it doesn't lose quality for no reason.",
            ],
        },
        {
            heading: "Tips",
            paragraphs: [
                "If the platform also specifies maximum dimensions (for example, 2000 pixels wide), resize first and then compress: you'll get an even sharper image within the same size. For web-only use, WebP offers even more quality per kilobyte.",
            ],
        },
        {
            heading: "Private and unlimited",
            paragraphs: [
                "Your images are processed in your browser and never uploaded to the internet. You can process up to 50 files per batch, up to 50 MB each, for free and without watermarks.",
            ],
        },
        {
            heading: "Recommended resolution by use",
            paragraphs: [
                "For computer and phone screens, an image 1600 to 2400 pixels on its longest side looks sharp on almost any device. For small prints, like a 4 × 6 inch photo, you need around 1800 × 1200 pixels. Both fit comfortably in 500 KB at high quality.",
                "If you're sending photos to a contest, also check whether they require a specific color space or format. Most accept standard JPG, which is what Dorfic produces by default for photographs. Always keep your originals at maximum quality in case you later need a larger or uncompressed version.",
            ],
        },
        {
            heading: "500 KB as JPG or WebP?",
            paragraphs: [
                "If the image is for your own website, WebP will give you more detail for the same size. If you're sending it to someone else or to an institution, JPG is the safest choice because any program opens it.",
            ],
        },
    ],
    faqs: [
        {
            q: "How much quality does a photo lose at 500 KB?",
            a: "Very little. For most photos the difference from the original is imperceptible.",
        },
        {
            q: "Are the dimensions reduced?",
            a: "Only if the photo is so large that it doesn't fit in 500 KB at high quality. With typical phone photos, a high resolution is almost always kept.",
        },
        {
            q: "What if my image is already under 500 KB?",
            a: "It's left as is. You'll see the notice “Already small enough, left as is”.",
        },
        {
            q: "Can I compress an entire album?",
            a: "Yes, up to 50 images per batch, and you download them in a ZIP.",
        },
        {
            q: "Are my photos uploaded to a server?",
            a: "No. Everything is processed on your device.",
        },
    ],
    related: ["comprimir-imagen-a-200kb", "comprimir-imagen", "comprimir-jpg", "redimensionar-imagen", "jpg-a-webp", "comprimir-imagen-a-100kb"],
};

export default content;
