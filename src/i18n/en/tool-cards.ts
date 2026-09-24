import type { ToolSlug } from "@/config/paths";
import type { ToolCard } from "../types";

export const toolCards: Record<ToolSlug, ToolCard> = {
    "heic-a-jpg": { name: "HEIC to JPG", description: "Convert your iPhone photos to JPG so they open anywhere." },
    "comprimir-imagen": { name: "Compress image", description: "Shrink your JPG, PNG or WebP files to the exact KB size you need." },
    "redimensionar-imagen": { name: "Resize image", description: "Change width and height in pixels or by percentage without distortion." },
    "png-a-jpg": { name: "PNG to JPG", description: "Convert PNG to JPG so files are lighter and accepted everywhere." },
    "jpg-a-png": { name: "JPG to PNG", description: "Turn your JPGs into PNG so they don't lose more quality when edited." },
    "webp-a-jpg": { name: "WebP to JPG", description: "Convert WebP images downloaded from the web into compatible JPG." },
    "jpg-a-webp": { name: "JPG to WebP", description: "Convert to WebP so your website loads faster." },
    "comprimir-imagen-a-20kb": { name: "Compress to 20 KB", description: "For forms that require very small photos, like ID pictures." },
    "comprimir-imagen-a-50kb": { name: "Compress to 50 KB", description: "Ideal for signatures, profile photos and online registrations." },
    "comprimir-imagen-a-100kb": { name: "Compress to 100 KB", description: "For scanned documents and applications with size limits." },
    "comprimir-imagen-a-200kb": { name: "Compress to 200 KB", description: "Good quality at a small size for email and school platforms." },
    "comprimir-jpg": { name: "Compress JPG", description: "Reduce the size of your JPG photos without a visible difference." },
    "comprimir-png": { name: "Compress PNG", description: "Lighten PNG screenshots and graphics while keeping transparency." },
    "heic-a-png": { name: "HEIC to PNG", description: "Convert iPhone photos to lossless PNG for editing." },
    "webp-a-png": { name: "WebP to PNG", description: "Turn WebP images into PNG and keep the transparent background." },
    "png-a-webp": { name: "PNG to WebP", description: "Much lighter transparent images for your website." },
    "comprimir-imagen-a-10kb": { name: "Compress to 10 KB", description: "For signatures and photos on systems with extreme limits." },
    "comprimir-imagen-a-30kb": { name: "Compress to 30 KB", description: "Application and ID photos that stay sharp." },
    "comprimir-imagen-a-500kb": { name: "Compress to 500 KB", description: "Almost original quality at a fraction of the size." },
};
