import { NextResponse } from "next/server";

const GONE_PATHS = new Set([
  "/red-team-recon.html",
  "/bypassed-firewall.html",
  "/blog.html",
]);

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // 410 for explicitly removed legacy pages
  if (GONE_PATHS.has(pathname)) {
    return new NextResponse("Gone", { status: 410 });
  }

  // Optional safety net:
  // If you want ANY legacy .html page to be treated as gone (unless redirected in next.config.js),
  // uncomment this block.
  //
  // if (pathname.endsWith(".html")) {
  //   return new NextResponse("Gone", { status: 410 });
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
