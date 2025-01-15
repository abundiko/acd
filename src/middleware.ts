import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  
  const pathname = request.nextUrl.pathname;
  const hasAccessToken = request.cookies.has("token");

  if (
    pathname.startsWith('/admin') &&
    !adminAuthPaths.map((item) => pathname.startsWith(item)).includes(true)
  ) {
    if (!hasAccessToken)
      return NextResponse.redirect(new URL("/admin/login", request.url));
  }else return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

const adminAuthPaths = ["/admin/login", "/admin/signup", "/admin/forgot-password", "/admin/reset-password"];
