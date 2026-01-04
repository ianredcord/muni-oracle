# Facebook 偵錯結果分析

## 問題仍然存在

即使重新抓取後，問題仍然存在：
- 輸入網址：`https://www.munione.co/draw/result?card=star-of-bethlehem`
- og:url 中繼標籤：`https://www.munione.co/draw/result?card=agrimony`

## 重新導向路徑（簡化）
| 步驟 | 網址 |
|------|------|
| 輸入網址 | star-of-bethlehem |
| og:url 中繼標籤 | agrimony |

## 問題根源分析

問題不是 Facebook 快取，而是 **Next.js 伺服器端渲染時沒有正確讀取 searchParams**。

可能原因：
1. Next.js 15 的 searchParams 是 Promise，需要 await
2. Vercel 的 Edge Runtime 可能有不同行為
3. 需要確保頁面使用動態渲染而非靜態生成

## 解決方案

需要強制頁面使用動態渲染：
```typescript
export const dynamic = 'force-dynamic';
```

或使用 generateStaticParams 來預生成所有牌卡頁面。
