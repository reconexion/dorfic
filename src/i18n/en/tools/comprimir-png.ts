import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-png",
    title: "Compress PNG",
    metaDescription: "Compress PNG images for free: shrink screenshots, logos and graphics, keep the transparency or convert them to JPG or WebP. No uploads.",
    h1: "Compress PNG for free",
    lead: "Lighten your PNG screenshots, logos and graphics. Keep the transparency or switch to a lighter format in one click.",
    sections: [
        {
            heading: "Why a PNG is hard to compress",
            paragraphs: [
                "PNG is a lossless format: it stores every pixel exactly as it is. That makes it perfect for logos, icons, screenshots with text and any image with a transparent background, but it also explains why it's so heavy when it contains photographs or gradients.",
                "Since PNG doesn't discard information, the way to reduce its size is to lower the number of pixels or switch to a format that does compress with loss, like WebP or JPG. Dorfic lets you choose: keep the PNG and adjust its dimensions until it reaches the size you need, or convert it for a much bigger reduction.",
            ],
        },
        {
            heading: "How to compress a PNG step by step",
            steps: [
                "Select or drag your PNG files. You can also paste screenshots with Ctrl + V.",
                "Choose the maximum size in KB or quality mode.",
                "In “Output format”, keep PNG if you need transparency, or choose WebP or JPG to save much more.",
                "Download your images one by one or all in a ZIP.",
            ],
        },
        {
            heading: "Which output format should you choose?",
            bullets: [
                "PNG: keeps transparency and perfect sharpness; to reduce the size, the dimensions are reduced.",
                "WebP: keeps transparency and is usually 60% to 80% smaller. Ideal for websites.",
                "JPG: the most compatible and lightest for photographs, but it fills the transparent background with white.",
            ],
        },
        {
            heading: "Where it helps",
            bullets: [
                "Screenshots that weigh several megabytes and that you want to send by email or chat.",
                "Logos for your website, presentations or email signatures.",
                "Product images with a transparent background for an online store.",
                "Charts and diagrams you'll insert into documents or reports.",
                "PNGs exported from design programs at a higher resolution than needed.",
            ],
        },
        {
            heading: "Tips for screenshots and logos",
            paragraphs: [
                "Screenshots from modern phones have a huge number of pixels. If you'll only view them on a screen, halving their size is barely noticeable and the file ends up at a quarter. For logos, think about the actual size they'll be displayed at: a logo 400 pixels wide is usually enough for the web and weighs a fraction of the original.",
                "If your PNG is actually a photograph without transparency, the automatic mode of the general compressor will switch it to JPG and the saving will be huge. Here, on the other hand, we keep PNG as the default output to respect those who need transparency.",
            ],
        },
        {
            heading: "Private and unlimited",
            paragraphs: [
                "Your images are processed inside your browser and are never sent to any server. You can process up to 50 files per batch, up to 50 MB each, with no sign-up or watermarks.",
            ],
        },
        {
            heading: "8-bit, 24-bit PNG and transparency",
            paragraphs: [
                "PNGs can be saved with different color depths. 24- or 32-bit PNGs support millions of colors and smooth transparency, which makes them ideal for cut-out photos and shadows, but also the heaviest. When browsers save from a canvas they produce 32-bit PNGs, so the practical way to save space here is to reduce the dimensions or switch to WebP.",
                "If you work with lots of icons or flat graphics for a website, consider using SVG whenever possible: it's a vector format that weighs very little and looks sharp at any size. For everything else, WebP with transparency is today's most efficient option.",
            ],
        },
    ],
    faqs: [
        {
            q: "Is the transparent background kept when compressing a PNG?",
            a: "Yes, if you keep PNG or choose WebP as the output format. Only JPG fills the transparency with white.",
        },
        {
            q: "Why does my PNG have fewer pixels now?",
            a: "Because PNG doesn't lose quality when saving; to reach the size you asked for, the only way to keep it as a PNG is to reduce its dimensions.",
        },
        {
            q: "What's the best way to shrink a PNG a lot?",
            a: "Convert it to WebP: it keeps the transparency and is usually 60% to 80% smaller.",
        },
        {
            q: "Can I compress screenshots directly?",
            a: "Yes. Take the screenshot and paste it on this page with Ctrl + V (or Cmd + V on a Mac).",
        },
        {
            q: "Is it free and private?",
            a: "Yes. It's free, with no sign-up, and your images never leave your device.",
        },
    ],
    related: ["png-a-webp", "png-a-jpg", "comprimir-imagen", "comprimir-jpg", "redimensionar-imagen", "comprimir-imagen-a-100kb"],
};

export default content;
