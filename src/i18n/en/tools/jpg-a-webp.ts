import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "jpg-a-webp",
    title: "Convert JPG to WebP",
    metaDescription: "Convert JPG to WebP for free and make your website load faster. Images up to 30% smaller, in batches and without uploading your files.",
    h1: "Convert JPG to WebP for free",
    lead: "Convert your photos to WebP and get lighter images at the same quality. Ideal for websites and online stores.",
    sections: [
        {
            heading: "What do you gain by converting your images to WebP?",
            paragraphs: [
                "WebP is a modern format that compresses better than JPG: at the same visual quality, a WebP is usually 25% to 35% smaller. On a page with lots of photos, that difference means shorter load times, less data used by your visitors and better scores in tools like PageSpeed Insights, which Google takes into account.",
                "With Dorfic you convert your JPGs to WebP right in your browser, without uploading the images to an external service. You can process a whole batch of product or blog photos in a few seconds.",
            ],
        },
        {
            heading: "How to convert JPG to WebP step by step",
            steps: [
                "Choose your JPG images, drag them or paste them onto the upload area.",
                "Adjust the quality. A value between 80% and 85% offers a great balance between sharpness and size for the web.",
                "Check how much you saved on each file.",
                "Download the WebPs one by one or all in a ZIP to upload them to your site.",
            ],
        },
        {
            heading: "Who is it useful for?",
            bullets: [
                "Online store owners who want faster product pages.",
                "People with a blog or website on WordPress, Wix, Shopify or similar.",
                "Developers and designers who optimize images before publishing them.",
                "Anyone who wants to save space when storing lots of photos, as long as their programs support WebP.",
            ],
        },
        {
            heading: "Compatibility and recommendations",
            paragraphs: [
                "Today every modern browser (Chrome, Safari, Edge and Firefox) displays WebP images without any problem. However, some desktop programs, older viewers and official forms still don't accept them. That's why WebP is excellent for publishing online, but for sending documents to an institution JPG is the safer choice.",
                "If your browser is old and can't create WebP (this happens with some old versions of Safari), Dorfic will show you a message. In that case, update your browser or use Chrome, Edge or Firefox. We recommend keeping your original JPGs as a backup.",
            ],
        },
        {
            heading: "Limits",
            paragraphs: [
                "You can convert up to 50 images per batch, up to 50 MB each. Everything is processed on your device: no daily limits, no watermarks, and your images never leave your computer or phone.",
            ],
        },
        {
            heading: "How to use your WebP images on your site",
            paragraphs: [
                "Once converted, you can upload them to your content management system like any other image. WordPress, Shopify, Wix and most modern platforms accept WebP natively. If you build your own site, you can use the <picture> element to serve WebP to browsers that support it and JPG as a fallback.",
                "For the best performance, combine the format change with the right dimensions: there's no point publishing a photo 4000 pixels wide if it will be displayed in an 800-pixel space. Use the resize tool first and then convert to WebP. Your pages will load much faster, especially on phones with slow connections.",
            ],
        },
    ],
    faqs: [
        {
            q: "How much smaller is a WebP than a JPG?",
            a: "On average 25% to 35% smaller at similar visual quality, although it depends on each image. Dorfic shows you the exact saving.",
        },
        {
            q: "What quality should I choose for my website?",
            a: "Between 80% and 85% is a good starting point. For product photos where detail matters a lot, try 90%.",
        },
        {
            q: "Do all browsers display WebP?",
            a: "Yes, every modern browser supports it. Only very old browsers or programs might not open them.",
        },
        {
            q: "Can I use WebP for online applications?",
            a: "It's not ideal: many official portals only accept JPG or PNG. For applications and forms, use JPG.",
        },
        {
            q: "Are my images uploaded to convert them?",
            a: "No. The conversion happens in your browser and your files never leave your device.",
        },
    ],
    related: ["webp-a-jpg", "comprimir-imagen", "redimensionar-imagen", "png-a-jpg", "jpg-a-png", "comprimir-imagen-a-100kb"],
};

export default content;
