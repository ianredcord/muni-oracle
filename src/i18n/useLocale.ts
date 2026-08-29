"use client";

import { usePathname } from "next/navigation";
import { splitLocale, type Locale } from "./config";
import { getDictionary, type Dictionary } from "./dictionaries";

/**
 * Client 端取得目前語言與去除語言前綴後的路徑。
 * SSR 時 pathname 是 /zh/xxx、瀏覽器端是 /xxx，splitLocale 會把兩者正規化成同一結果。
 */
export function useLocalePath(): { locale: Locale; path: string; dict: Dictionary } {
  const pathname = usePathname();
  const { locale, path } = splitLocale(pathname ?? "/");

  return { locale, path, dict: getDictionary(locale) };
}
