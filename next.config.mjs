const contentSecurityPolicyReportOnly = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://vitals.vercel-insights.com https://*.vercel-insights.com",
  "worker-src 'self' blob:",
  "media-src 'none'",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "in7ruder.vercel.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "Content-Security-Policy-Report-Only", value: contentSecurityPolicyReportOnly },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: true },
      { source: "/index.html", destination: "/en", permanent: true },
      { source: "/security.txt", destination: "/.well-known/security.txt", permanent: true },
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
