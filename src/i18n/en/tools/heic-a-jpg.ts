import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "heic-a-jpg",
    title: "Convert HEIC to JPG",
    metaDescription:
        "Convert iPhone HEIC photos to JPG for free, without installing anything or uploading them. Several at once, choose the quality and download as a ZIP.",
    h1: "Convert HEIC to JPG for free",
    lead: "Turn your iPhone photos into JPG in seconds. Works on your phone or computer, and your photos never leave your device.",
    sections: [
        {
            heading: "What does this HEIC to JPG converter do?",
            paragraphs: [
                "For several years now, iPhones have saved photos in HEIC format (also called HEIF). It's a very efficient format: it takes up almost half the space of a JPG with the same quality. The problem is that many websites, programs and Windows computers still can't open it, and when you try to upload the photo to a form you get the classic “invalid format” error.",
                "This Dorfic tool converts your .heic or .heif files to .jpg, the most compatible image format there is. It does it right in your browser: the photo is read, decoded and saved again as a JPG on your own device, without going through any server. That's why it's fast, free and private.",
            ],
        },
        {
            heading: "How to convert HEIC to JPG step by step",
            steps: [
                "Tap “Select images” and choose one or more HEIC photos. On a computer you can also drag them onto the dotted area or paste them with Ctrl + V.",
                "Adjust the quality if you like. 90% is the default because it keeps the detail and produces a reasonably sized file.",
                "Wait a few seconds: you'll see each photo's progress and a green check mark when it's ready.",
                "Download each JPG separately or all together with the “Download all (ZIP)” button.",
            ],
        },
        {
            heading: "Why convert your photos to JPG?",
            bullets: [
                "Online applications: many government, bank and insurance portals only accept JPG or PNG when you upload IDs, proof documents or photos.",
                "School and university: homework platforms, enrollment systems and online exams often reject HEIC.",
                "Job sites: add your photo to your résumé or professional profile without errors.",
                "Windows computers: open your iPhone photos without installing extensions or paid codecs.",
                "Printing or editing: almost every printer, photo lab and photo editor works with JPG.",
            ],
        },
        {
            heading: "Quality, size and metadata",
            paragraphs: [
                "After converting, the JPG is usually a bit larger than the original HEIC, because JPG is an older, less efficient format. If you need the photo to be small (for example, for a form with a KB limit), lower the quality to 70–80% or, once it's converted, use our image compressor to get it to the exact size required.",
                "The photo is saved with the correct orientation, so it won't appear sideways. The resulting JPG also doesn't include the original file's metadata, such as the GPS location where you took the photo. That's a useful privacy bonus if you're sharing the image with strangers.",
            ],
        },
        {
            heading: "Limits worth knowing",
            paragraphs: [
                "Since all the work is done by your device, the speed depends on its power. On a recent phone each photo takes a second or two; on older devices it may take a little longer. We accept files up to 50 MB and batches of up to 50 photos at a time. Live Photos are converted as a still image, and if a HEIC file contains several images, the main one is used.",
                "If your iPhone allows it, you can also avoid HEIC at the source: in Settings › Camera › Formats, choose “Most Compatible”. Photos you've already taken will still be HEIC, though, and that's what this tool is for.",
            ],
        },
    ],
    faqs: [
        {
            q: "Is converting HEIC to JPG on Dorfic free?",
            a: "Yes, it's completely free and requires no sign-up. There are no watermarks or daily limits. The site is supported by unobtrusive ads.",
        },
        {
            q: "Are my photos uploaded to a server?",
            a: "No. The conversion happens inside your browser, on your own phone or computer. Your photos never leave your device and nobody else can see them.",
        },
        {
            q: "Does it work on iPhone and Android?",
            a: "Yes. It works in up-to-date Safari, Chrome, Edge and Firefox, on both phones and computers. On iPhone, tapping “Select images” lets you pick photos straight from your library.",
        },
        {
            q: "Can I convert several HEIC photos at the same time?",
            a: "Yes, you can select up to 50 photos at once. They're processed as a batch and at the end you can download them all together in a ZIP file called dorfic-images.zip.",
        },
        {
            q: "Do I lose quality going from HEIC to JPG?",
            a: "At 90% quality the difference is practically impossible to see with the naked eye. If you want maximum detail, raise the quality to 100%, although the file will be larger.",
        },
        {
            q: "Why is the JPG larger than the HEIC?",
            a: "Because HEIC compresses better than JPG. It's normal for the JPG to be 1.5 to 2 times larger. If you need a small file, lower the quality or use the compress image tool.",
        },
        {
            q: "Are the location and camera data kept?",
            a: "No. The JPG you download doesn't include the GPS location or other metadata from the original, which protects your privacy when you share the photo.",
        },
    ],
    related: ["comprimir-imagen", "redimensionar-imagen", "comprimir-imagen-a-200kb", "png-a-jpg", "webp-a-jpg", "jpg-a-webp"],
};

export default content;
