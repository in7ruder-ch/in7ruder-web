// src/app/sitemap.js
// Next.js will serve this at /sitemap.xml

const BASE_URL = "https://in7ruder.com";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/secure-fullstack`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/services/social-engineering-training`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/services/pentesting`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
