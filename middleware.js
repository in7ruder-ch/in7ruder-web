import { NextResponse } from "next/server";

const GONE_PATHS = new Set([
  "/red-team-recon.html",
  "/bypassed-firewall.html",
  "/blog.html",
  "/work",
  "/services/secure-fullstack",
  "/resources/OWASP_Developer_Guide.pdf",
  "/resources/OWASP_Testing_Guide.pdf",
  "/resources/OWASP_Web_Application_Security.pdf",
]);

export function middleware(req) {
  const { pathname } = req.nextUrl;

  if (GONE_PATHS.has(pathname)) {
    return new NextResponse("Gone", {
      status: 410,
      headers: { "Content-Type": "text/plain; charset=utf-8", "X-Robots-Tag": "noindex" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
