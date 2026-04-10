# CLAUDE.md — MUNI Oracle 專案規範

## 專案概述
MUNI 品牌官網（munione.co），使用 Next.js 16 + TypeScript + Tailwind CSS。
包含公開頁面（花精、塔羅、牟尼香等）與內部知識系統（/internal/flow-system）。

## 關鍵目錄 — 請勿刪除
以下目錄是手動建立的核心功能，不可刪除或覆蓋：
- `src/components/flow-system/` — 內部系統共用元件（卡片、Badge、圖表等）
- `src/data/flow-system/` — 內部系統資料（穴位、情緒、臨床、卦象）
- `src/app/internal/flow-system/` — 內部系統所有頁面與子頁面

## 修改規範
1. **不要重建專案結構** — 這是已運作的生產專案，不要重新初始化或重組目錄
2. **不要刪除未被你修改的檔案** — 即使看起來沒被引用，可能在動態路由中使用
3. **修改前先確認檔案存在** — 用 `git status` 確認你的基底是最新的
4. **只改你需要改的檔案** — 不要做全站重構，scope 限制在被要求的範圍內

## Lint 與 Build
- `npm run lint` — ESLint，必須 0 errors 才能部署
- `npm run build` — Next.js production build，必須通過才能部署
- React 19 規則：不要在 render/useMemo 中呼叫 Math.random()，改用 useState lazy init
- 不要在 useEffect 中同步呼叫 setState 來初始化狀態，改用 useState 初始值

## 部署
- 平台：Vercel
- 域名：munione.co / www.munione.co
- 部署方式：`NPM_CONFIG_CACHE=/tmp/npm-cache npx vercel --prod`

## 設計系統
- 背景：`#F9F7F2`（暖米色）
- 主文字：`#4a5548`（鼠尾草綠）
- 金色強調：`#9A7B4F`
- 藍洩色：`#006494`（Somaniks drain）
- 橘補色：`#da7101`（Somaniks tonify）
- 字體：標題用 `font-serif`，正文用系統 sans-serif
- 卡片：`rounded-2xl bg-white/80 backdrop-blur-sm` + `hover:-translate-y-1 hover:shadow-lg`
- 按鈕：`rounded-full`（膠囊形）

## Git 規範
- 不要用 `--force` push 除非明確被要求
- Commit message 用中文，描述改了什麼
- 不要壓縮（squash）既有的 commit 歷史
