# Facebook 分享預覽問題分析

## 問題描述
- 輸入網址：`https://www.munione.co/draw/result?card=star-of-bethlehem`
- 但 OG 標籤顯示的是 `agrimony` 的資訊

## Facebook 偵錯工具顯示的重新導向路徑

| 步驟 | 網址 |
|------|------|
| 輸入網址 | https://www.munione.co/draw/result?card=star-of-bethlehem |
| og:url 中繼標籤 | https://munione.co/draw/result?card=agrimony |
| 307 HTTP 重新導向 | https://www.munione.co/draw/result?card=agrimony |
| og:url 中繼標籤 | https://munione.co/draw/result?card=agrimony |

## 問題根源
**og:url 標籤被設定為 agrimony**，這導致 Facebook 認為這是 agrimony 頁面。

## 解決方案
需要檢查 Next.js 的 metadata 生成邏輯，確保 `og:url` 使用正確的 card 參數。

目前 layout.tsx 中的程式碼：
```typescript
const pageUrl = `${baseUrl}/draw/result?card=${flower.slug}`;
```

問題可能是：
1. searchParams 沒有正確傳遞到 generateMetadata
2. 預設值 agrimony 被使用了
