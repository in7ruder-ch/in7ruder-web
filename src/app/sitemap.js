import { localizedUrl } from "@/lib/i18n";

const LAST_CONTENT_UPDATE = new Date("2026-08-03T00:00:00.000Z");
const paths = ["", "services/social-engineering-readiness", "services/pentesting", "privacy", "legal"];

export default function sitemap() {
  return paths.flatMap((path) => {
    const languages = {
      "en-CH": localizedUrl("en", path),
      "de-CH": localizedUrl("de", path),
      "x-default": localizedUrl("en", path),
    };
    return ["en", "de"].map((lang) => ({
      url: localizedUrl(lang, path),
      lastModified: LAST_CONTENT_UPDATE,
      alternates: { languages },
    }));
  });
}
