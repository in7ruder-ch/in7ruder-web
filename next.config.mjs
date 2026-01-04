/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Canonical-ish: /index.html -> /
      {
        source: "/index.html",
        destination: "/",
        permanent: true, // 301
      },

      // If your old HTML had service pages:
      {
        source: "/social-engineering.html",
        destination: "/services/social-engineering-training",
        permanent: true, // 301
      },

      // Add more mappings here ONLY if you want to preserve equivalents.
      // For old blog pages you are removing, we return 410 via middleware.
    ];
  },
};

export default nextConfig;
