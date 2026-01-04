// src/app/robots.js
// Next.js will serve this at /robots.txt

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // If you later add admin/drafts/etc, block them here.
        // disallow: ["/admin", "/api"],
      },
    ],
    sitemap: "https://in7ruder.com/sitemap.xml",
    host: "https://in7ruder.com",
  };
}
