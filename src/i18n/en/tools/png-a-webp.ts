import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "png-a-webp",
    title: "Convert PNG to WebP",
    metaDescription: "Convert PNG to WebP for free: images up to 80% smaller that keep their transparency. Ideal for websites and online stores. No uploads.",
    h1: "Convert PNG to WebP for free",
    lead: "Make your PNGs much lighter without losing transparency. Perfect for a fast-loading website.",
    sections: [
        {
            heading: "The best way to lighten a PNG",
            paragraphs: [
                "PNG is excellent for logos, icons and images with a transparent background, but it produces heavy files. WebP offers the best of both worlds: it supports transparency just like PNG and compresses like JPG. In practice, a PNG converted to WebP is usually 60% to 80% smaller and looks practically the same.",
                "For a website or online store with lots of images, that saving means shorter load times, better PageSpeed scores and a better experience on phones with limited data.",
            ],
        },
        {
            heading: "How to convert PNG to WebP step by step",
            steps: [
                "Select your PNG files, drag them or paste them with Ctrl + V.",
                "Adjust the quality. 80% to 90% is ideal for graphics with transparency.",
                "Check the saving for each image.",
                "Download the WebPs or the whole batch in a ZIP.",
            ],
        },
        {
            heading: "Who is it for?",
            bullets: [
                "Online store owners with background-free product photos.",
                "Designers and developers optimizing assets for the web.",
                "Blogs and sites on WordPress, Shopify or Wix that want to load faster.",
                "Anyone who needs to share illustrations or stickers with transparency in little space.",
            ],
        },
        {
            heading: "Compatibility",
            paragraphs: [
                "Every modern browser displays WebP, including Chrome, Safari, Edge and Firefox, on desktop and mobile. Some older desktop programs or official forms still don't accept it; for those cases, keep your original PNG as a backup.",
                "If you use an old browser that can't create WebP, Dorfic will show you a clear message. In that case, update your browser or use Chrome, Edge or Firefox.",
            ],
        },
        {
            heading: "Optimization tips",
            paragraphs: [
                "Before converting, check the size each image will be displayed at. A logo shown 200 pixels wide doesn't need to be 2000 pixels. Resizing first and converting afterwards multiplies the saving. For images with very thin edges or small text, raise the quality to 90% to keep outlines clean.",
            ],
        },
        {
            heading: "Privacy",
            paragraphs: [
                "The conversion happens in your browser and your files are never uploaded to the internet. You can process up to 50 images per batch, up to 50 MB each.",
            ],
        },
        {
            heading: "How to use your WebPs on a website",
            paragraphs: [
                "Once converted, upload them to your content management system like any image. If you build your own site, you can use the picture element to serve WebP to modern browsers and keep the PNG as a fallback. It's also a good idea to set each image's width and height in the HTML to avoid layout shifts while the page loads.",
                "Remember that load speed affects your visitors' experience and how Google evaluates your site. Converting your PNGs to WebP is one of the simplest and most effective improvements you can make, especially for online stores with lots of product photos.",
            ],
        },
        {
            heading: "When WebP isn't the best choice",
            paragraphs: [
                "If you're going to send the image to an institution, print it or edit it in an older program, stick with PNG or JPG: they're more compatible. WebP shines on the web, where every kilobyte counts, but it isn't always the best option for exchanging files.",
            ],
        },
    ],
    faqs: [
        {
            q: "Does WebP keep the PNG's transparency?",
            a: "Yes. WebP supports transparency, so your transparent backgrounds are kept.",
        },
        {
            q: "How much smaller does it get?",
            a: "Usually 60% to 80% smaller than the original PNG, depending on the image and the chosen quality.",
        },
        {
            q: "What quality should I use?",
            a: "80% to 90% for logos and illustrations; for product photos, 85% is a good starting point.",
        },
        {
            q: "Can I use WebP on WordPress or Shopify?",
            a: "Yes, both platforms accept WebP natively.",
        },
        {
            q: "Are my images uploaded to a server?",
            a: "No. Everything is processed on your device.",
        },
    ],
    related: ["webp-a-png", "jpg-a-webp", "comprimir-png", "png-a-jpg", "redimensionar-imagen", "comprimir-imagen"],
};

export default content;
