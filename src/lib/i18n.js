export const SITE_URL = "https://in7ruder.com";
export const LANGUAGES = ["en", "de"];

export function isLanguage(value) {
  return LANGUAGES.includes(value);
}

export function localizedPath(lang, path = "") {
  const normalized = path && path !== "/" ? `/${path.replace(/^\/+|\/+$/g, "")}` : "";
  return `/${lang}${normalized}`;
}

export function localizedUrl(lang, path = "") {
  return `${SITE_URL}${localizedPath(lang, path)}`;
}

export function alternatesFor(lang, path = "") {
  return {
    canonical: localizedUrl(lang, path),
    languages: {
      "en-CH": localizedUrl("en", path),
      "de-CH": localizedUrl("de", path),
      "x-default": localizedUrl("en", path),
    },
  };
}
