import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/i18n/config";

// 內部系統與靜態資源不做語言改寫
const EXCLUDED_PREFIXES = ["/internal", "/api", "/_next", "/_vercel"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (EXCLUDED_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  // /zh/... 是內部改寫用的路徑，對外一律導回無前綴版本，避免重複內容
  if (first === DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    const rest = `/${segments.slice(1).join("/")}`;
    url.pathname = rest === "/" ? "/" : rest;
    return NextResponse.redirect(url, 308);
  }

  // 已經帶有非預設語言前綴（例如 /en）就直接放行
  if (first && (LOCALES as readonly string[]).includes(first)) {
    return NextResponse.next();
  }

  // 其餘路徑改寫到預設語言，網址維持不變
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // 排除帶副檔名的靜態檔案與 Next.js 內部路徑
    "/((?!_next/|_vercel/|.*\\.[^/]+$).*)",
  ],
};
