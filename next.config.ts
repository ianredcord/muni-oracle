import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // 確保 URL 參數在 SSR 時正確傳遞
  trailingSlash: false,
  // 環境變數
  env: {
    NEXT_PUBLIC_BASE_URL: "https://www.munione.co",
  },
  // 圖片已全部本地化，無需外部域名
};

export default nextConfig;
