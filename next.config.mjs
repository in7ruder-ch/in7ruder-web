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
      { source: "/index.html", destination: "/", permanent: true },
      {
        source: "/social-engineering.html",
        destination: "/services/social-engineering-readiness",
        permanent: true,
      },
      {
        source: "/services/social-engineering-training",
        destination: "/services/social-engineering-readiness",
        permanent: true,
      },
      {
        source: "/services/secure-fullstack",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/work",
        destination: "/#about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
