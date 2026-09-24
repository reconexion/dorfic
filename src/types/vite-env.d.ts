/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly SITE_URL?: string;
    readonly VITE_CONTACT_EMAIL?: string;
    readonly VITE_CF_BEACON_TOKEN?: string;
    readonly VITE_GOOGLE_SITE_VERIFICATION?: string;
    readonly VITE_BING_SITE_VERIFICATION?: string;
    readonly VITE_ADSENSE_CLIENT?: string;
    readonly VITE_ADSENSE_SLOT_DOWNLOAD?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
