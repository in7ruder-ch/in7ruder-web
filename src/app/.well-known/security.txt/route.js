const SECURITY_TEXT = `Contact: mailto:matias@in7ruder.com
Expires: 2027-07-31T23:59:59Z
Preferred-Languages: en, de
Canonical: https://in7ruder.com/.well-known/security.txt
`;

export const dynamic = "force-static";

export function GET() {
  return new Response(SECURITY_TEXT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
