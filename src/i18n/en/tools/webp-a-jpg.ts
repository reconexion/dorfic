import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "webp-a-jpg",
    title: "Convert WebP to JPG",
    metaDescription:
        "Convert WebP images to JPG for free so you can open and upload them anywhere. In batches, with adjustable quality and without uploading your files.",
    h1: "Convert WebP to JPG for free",
    lead: "Downloaded an image and it saved as .webp? Convert it to JPG in seconds to open, edit or upload it wherever you want.",
    sections: [
        {
            heading: "What is WebP and why convert it?",
            paragraphs: [
                "WebP is an image format created to make web pages load fast. Many sites use it, so when you save an image from your browser it often downloads with a .webp extension. The problem comes later: some editors, office programs, older viewers, printers or online forms don't recognize it.",
                "This tool converts your WebP files to JPG, the format accepted by practically any device or platform. Everything happens inside your browser, so it's instant and private.",
            ],
        },
        {
            heading: "How to convert WebP to JPG step by step",
            steps: [
                "Select your WebP images, drag them onto the dotted area or paste them with Ctrl + V.",
                "Choose the JPG quality. At 92% you keep almost all the detail.",
                "Watch each image's progress; when it's done you'll see the final size.",
                "Download the JPGs separately or all in a ZIP.",
            ],
        },
        {
            heading: "Situations where it helps",
            bullets: [
                "You saved an image from the internet and your computer won't open it with a double-click.",
                "You want to insert the image into Word, PowerPoint or a design program that doesn't support WebP.",
                "A school, work or government form asks for a JPG.",
                "You're going to print the image or send it to a photo lab.",
                "You want to share it with someone who uses an older device or app.",
            ],
        },
        {
            heading: "Quality and transparency",
            paragraphs: [
                "WebP is usually more efficient than JPG, so it's normal for the converted file to be a little larger than the original. If you need it to be small, lower the quality to 75–85% or run it through the image compressor afterwards to get an exact size in KB.",
                "Some WebP images have a transparent background. Since JPG doesn't support transparency, those areas will turn white. Animated WebP images are converted using their first frame, because JPG doesn't support animation. Also remember to respect the copyright of images you download from the internet: converting them doesn't change who owns them.",
            ],
        },
        {
            heading: "Limits",
            paragraphs: [
                "We accept up to 50 images per batch and files up to 50 MB. Your device does the conversion, so there are no queues or daily limits, although older devices may take a little longer. Your images are never uploaded to any server.",
            ],
        },
        {
            heading: "JPG or PNG as the target?",
            paragraphs: [
                "For photographs, JPG is the best option: it's universal and keeps the size reasonable. If your WebP image is a logo, an icon or a graphic with a transparent background, you may prefer to keep it as WebP or convert it to PNG so you don't lose the transparency.",
                "One advantage of converting in your browser is speed: you don't wait for the file to upload or for a server to process it, and you can convert dozens of images in a batch. When you're done, download the ZIP and all your images will be ready to open in any program, phone or computer.",
            ],
        },
    ],
    faqs: [
        {
            q: "Why do my images download in WebP format?",
            a: "Because many websites serve their images as WebP to load faster, and the browser saves them as they are. With this tool you can turn them into JPG in seconds.",
        },
        {
            q: "Do I lose quality converting WebP to JPG?",
            a: "Very little if you use high quality (90% or more). To the naked eye the image will look the same.",
        },
        {
            q: "What happens to transparent WebP images?",
            a: "The transparent part turns white, because JPG doesn't handle transparency. If you need to keep it, convert to PNG instead or keep the WebP.",
        },
        {
            q: "Does it work with animated WebP?",
            a: "Only the first frame is converted, because JPG is a still-image format.",
        },
        {
            q: "Do I need to install anything?",
            a: "No. It works in your phone's or computer's browser, with no software or sign-up, and your files never leave your device.",
        },
    ],
    related: ["jpg-a-webp", "png-a-jpg", "comprimir-imagen", "heic-a-jpg", "jpg-a-png", "redimensionar-imagen"],
};

export default content;
