// i18n 設定：中文為預設語言（無前綴），英文走 /en 子路徑。

export const LOCALES = ["zh", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "zh";

/** <html lang> 使用的 BCP 47 標籤 */
export const HTML_LANG: Record<Locale, string> = {
  zh: "zh-TW",
  en: "en",
};

/** OpenGraph locale */
export const OG_LOCALE: Record<Locale, string> = {
  zh: "zh_TW",
  en: "en_US",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * 產生帶語言前綴的路徑。
 * 中文為預設語言不加前綴：localeHref("zh", "/flowers") => "/flowers"
 * 英文加上 /en：localeHref("en", "/flowers") => "/en/flowers"
 */
export function localeHref(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (locale === DEFAULT_LOCALE) {
    return normalized;
  }

  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

/**
 * 從 pathname 取出語言，並回傳去掉前綴後的路徑。
 * 同時處理內部改寫路徑（/zh/flowers）與對外網址（/flowers），
 * 兩者都會正規化成 { locale: "zh", path: "/flowers" }，避免 SSR 與 client 不一致。
 */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (first && isLocale(first)) {
    const rest = `/${segments.slice(1).join("/")}`;
    return { locale: first, path: rest === "/" ? "/" : rest };
  }

  return { locale: DEFAULT_LOCALE, path: pathname || "/" };
}
