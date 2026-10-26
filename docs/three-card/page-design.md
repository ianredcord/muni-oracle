# 三牌陣頁面：設計與路由提案（2026-10-26，待確認後實作）

目標：讓使用者在網站上選模式、抽三張、看精簡版、展開完整版、進深度解析；紀錄存在裝置上並寫入事件。只用已上線的引擎與資料，不動既有頁面與元件。

## 1. 路由

| 路由 | 類型 | 內容 |
|---|---|---|
| `/tarot/three-card` | 頁面 | 模式選擇 → 抽牌（同頁兩個階段） |
| `/tarot/three-card/reading/[id]` | 頁面 | 結果：精簡版首屏 → 展開完整版 → 深度解析入口；重看一律重播 |
| `/tarot/three-card/history` | 頁面 | 這個裝置的紀錄清單（新到舊），點入即重播 |
| `/en/...` 同上 | 頁面 | 介面英文；解讀內容目前只有中文（`text.en` 尚未翻譯），英文頁顯示中文解讀並註明 |

深度解析不另做：完整版底部三顆按鈕各導向既有的 `/tarot-encyclopedia/[slug]`。

## 2. 資料流（server 選取、client 儲存）

```
client：選模式、抽出三張 id ──► server action drawReading({mode, ids, locale, userId, recent})
                                   compose()：狀態、一次選完所有槽、brief/full 兩種渲染、reading_id 用 server uuid
                              ◄── { record, brief: segments, full: segments, cards: 顯示用欄位 }
client：LocalStorageReadingStore.save(record)，同時快取兩種渲染 ──► 導向 /reading/[id]
重看：讀本機 record ──► server action replayReading(record) ──► segments（依 template_id 取最新文字、忽略 status）
```

- 模板、位置短文、鏡像短文都留在 server，不進前端 bundle（與工作樹中 i18n 改動「完整解讀不進前端」的方向一致）。
- `userId`：匿名裝置 id（localStorage `muni.threeCard.device`），之後可換成會員 id；`ReadingStore` 介面不變。
- 近期排除：抽牌前讀本機最近 5 篇的 selections 傳給 server。
- 抽哪三張由 client 隨機決定（與既有單牌抽牌相同：使用者點牌）；模式 C 分三個牌池。

## 3. 畫面

### 3.1 `/tarot/three-card` 第一階段：選模式
- 標題「三牌陣」，副標為引導句（`MODE_PROMPT` 以日期輪替）。
- 三張模式卡（`rounded-2xl bg-white/80 backdrop-blur-sm`，hover 上浮）：名稱、30 字說明、三個位置問句。
- 底部小字：「三張牌是三面鏡子，不是三個判決。」

### 3.2 第二階段：抽牌
- 模式 A／B：78 張牌背呈扇形，依序點三張；上方三個空位標「來處・此刻・去向」（B 為「處境・卡點・下一步」）。
- 模式 C：三排牌背（22／16／40），各排點一張；空位標「原型・人格・情境」。
- 三張選滿後按「翻開」：牌面翻轉動畫（沿用既有 framer-motion 節奏），呼叫 server action，導向結果頁。

### 3.3 `/reading/[id]` 結果頁
- 頂部：三張牌面並排，各標位置名與牌名（中文主、英文副）。
- 精簡版：依 §10 順序渲染段落（exception／mirror_synthesis／三段短文／arc／cta_brief／closing）；每段一個段落，不顯示 template_id。
- 「展開完整解讀」按鈕（`EXPAND_BUTTON` 以 reading_id 輪替）→ 原地展開完整版（opening、structure、rel 句、resonance、court、花精複方、身體練習、cta_full），寫入 `expanded_full`；不重新選取。
- 完整版底部：過場文字＋三顆膠囊按鈕「深度解析：{牌名}」→ 百科頁，寫入 `opened_deep`。
- 工具列：儲存（寫入 `saved`，紀錄本來就在本機，按鈕作用是標記）、分享（複製三張牌名＋精簡版前三段文字，寫入 `shared`）、再抽一次。
- 進入頁面 `viewed_brief`，離開時 `dwell_ms`。
- `?debug=1` 時每段右側顯示 template_id（審稿用，不進一般流程）。

### 3.4 `/history`
- 清單：日期、模式、三張牌名、首次版本；點入重播。空狀態引導去抽牌。

## 4. 新增檔案（全部在三牌陣範圍內）

```
src/app/[locale]/tarot/three-card/page.tsx              server：metadata、載入模式文字、傳牌卡顯示欄位
src/app/[locale]/tarot/three-card/ThreeCardClient.tsx   模式選擇＋抽牌
src/app/[locale]/tarot/three-card/actions.ts            "use server"：drawReading、replayReading
src/app/[locale]/tarot/three-card/reading/[id]/page.tsx
src/app/[locale]/tarot/three-card/reading/[id]/ReadingClient.tsx
src/app/[locale]/tarot/three-card/history/page.tsx
src/app/[locale]/tarot/three-card/history/HistoryClient.tsx
src/data/threeCard/pageText.ts                           頁面骨架文字 zh／en（標題、按鈕、空狀態），不碰 i18n 字典
src/lib/threeCard/device.ts                              匿名裝置 id
src/lib/threeCard/storage.ts                             瀏覽器端 store 與渲染快取（包 LocalStorageReadingStore）
```

牌卡顯示用欄位（id、slug、nameZh、nameEn、image）由 server 從 `getTarotCards()` 取出後傳給 client；牌背沿用既有抽牌頁的圖。

## 5. 不動的東西與入口問題

- 不改 Header、`/tarot` 首頁、單牌結果頁、i18n 字典、sitemap：這些檔案在工作樹裡都有尚未 commit 的 i18n／會員改動，現在改會造成合併衝突。
- 因此第一版上線後入口只有網址 `/tarot/three-card`。加導覽與 `/tarot` 首頁的入口卡，等那批改動 commit 後再做，或你指示現在直接改（我會只加一行連結，衝突由你合併時處理）。

## 6. 驗收

- 既有 42 項測試不變；新增 server action 的單元測試（draw 回傳的 record 與 replay 一致、近期排除有傳入）。
- 本機 dev server 走完：選模式 → 抽三張 → 精簡版 → 展開 → 深度解析連結 → 歷史重播；三種模式各一次；英文路由一次。
- `npm run lint`、乾淨 worktree `npm run build` 通過後 commit、推 GitHub、Vercel 自動部署、正式站確認。
