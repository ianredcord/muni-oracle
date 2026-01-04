import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 確保 URL 參數在 SSR 時正確傳遞
  trailingSlash: false,
  // 環境變數
  env: {
    NEXT_PUBLIC_BASE_URL: "https://www.munione.co",
  },
};

export default nextConfig;
