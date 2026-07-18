/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: true },
      { source: "/index.html", destination: "/en", permanent: true },
      {
        source: "/social-engineering.html",
        destination: "/en/services/social-engineering-readiness",
        permanent: true,
      },
      {
        source: "/services/social-engineering-training",
        destination: "/en/services/social-engineering-readiness",
        permanent: true,
      },
      {
        source: "/services/social-engineering-readiness",
        destination: "/en/services/social-engineering-readiness",
        permanent: true,
      },
      {
        source: "/services/pentesting",
        destination: "/en/services/pentesting",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
