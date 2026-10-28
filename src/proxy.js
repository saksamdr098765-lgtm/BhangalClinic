import { NextResponse } from "next/server";

export function proxy(request) {
  const host = request.headers.get("host") || "";
  // Check if non-www dkbhangallab.com
  if (host === "dkbhangallab.com" || host.startsWith("dkbhangallab.com:")) {
    const url = request.nextUrl.clone();
    url.host = "www.dkbhangallab.com";
    url.port = "";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
