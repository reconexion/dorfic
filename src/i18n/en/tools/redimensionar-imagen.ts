import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "redimensionar-imagen",
    title: "Resize Image",
    metaDescription:
        "Change the size of your images in pixels or by percentage while keeping the aspect ratio. Free, in batches and without uploading your photos to any server.",
    h1: "Resize images for free",
    lead: "Change the width and height of your photos in pixels or by percentage without distorting them. Fast, free and without leaving your browser.",
    sections: [
        {
            heading: "What does resizing an image mean?",
            paragraphs: [
                "Resizing means changing an image's dimensions, that is, how many pixels wide and tall it is. A phone photo usually measures 4000 × 3000 pixels or more, far more than a screen, a document or a post needs. By reducing it to, say, 1080 pixels wide, it looks just as good on screen and weighs much, much less.",
                "With this tool you can enter the exact size in pixels or simply choose a percentage of the original size. The “Keep aspect ratio” option prevents the image from looking stretched or squashed: just type the width or the height and the other value is calculated automatically.",
            ],
        },
        {
            heading: "How to resize an image step by step",
            steps: [
                "Choose whether you want to work “By pixels” or “By percentage”.",
                "In pixels, type the width, the height or both. With “Keep aspect ratio” on, if you type both values the image is fitted inside that box without distortion.",
                "In percentage, move the slider: 50% makes the image half its width and height.",
                "Select, drag or paste your images. They're all processed with the same settings.",
                "Download each image or the whole batch in a ZIP file.",
            ],
        },
        {
            heading: "Common uses",
            bullets: [
                "Social media: 1080 px wide is a standard size for square and vertical posts.",
                "Photos for applications: some portals ask for specific dimensions, such as 600 × 600 px for a passport-style photo.",
                "Websites and blogs: images 1200 to 1600 px wide look sharp and load quickly.",
                "Presentations and documents: shrink photos before inserting them so your Word or PowerPoint file doesn't weigh hundreds of megabytes.",
                "Thumbnails and catalogs: create small versions of your products in a single step.",
            ],
        },
        {
            heading: "Tips for the best result",
            paragraphs: [
                "Making an image smaller always looks good, because information that wasn't needed is discarded. Enlarging it, on the other hand, doesn't add real detail: the browser has to invent pixels and the result will look softer or blurry. Whenever possible, start from the largest image you have.",
                "The image keeps its original format (JPG, PNG or WebP) and, for PNG and WebP, its transparency too. If besides changing the dimensions you need a maximum size in KB, resize first and then use the image compressor. For large reductions, Dorfic scales the image down in stages so edges stay clean and free of “jaggies”.",
            ],
        },
        {
            heading: "Limits",
            paragraphs: [
                "You can choose dimensions of up to 16,384 pixels per side, process up to 50 images per batch and files up to 50 MB. All the work is done on your device, so your photos never leave it. On phones with little memory, huge images may take a bit longer.",
            ],
        },
    ],
    faqs: [
        {
            q: "How do I change a photo's size without distorting it?",
            a: "Keep “Keep aspect ratio” turned on and type only the width or only the height. Dorfic calculates the other value automatically to preserve the original shape.",
        },
        {
            q: "What happens if I type both width and height with the aspect ratio on?",
            a: "The image is fitted inside that box without distortion. That's why one of the sides may end up slightly smaller than the number you typed.",
        },
        {
            q: "Can I make an image bigger?",
            a: "Yes, but enlarging doesn't add real detail and the photo may look blurry. This tool works best for shrinking images.",
        },
        {
            q: "Does resizing also reduce the file size?",
            a: "Yes. Fewer pixels means a lighter file. If you need an exact size in KB, use the compress image tool afterwards.",
        },
        {
            q: "Do my PNGs lose their transparency?",
            a: "No. The image keeps its original format, so PNG and WebP files keep their transparent background.",
        },
        {
            q: "Are my images uploaded to the internet?",
            a: "No. Everything happens in your browser. Your photos never leave your device.",
        },
    ],
    related: ["comprimir-imagen", "comprimir-imagen-a-100kb", "heic-a-jpg", "jpg-a-webp", "png-a-jpg", "comprimir-imagen-a-50kb"],
};

export default content;
