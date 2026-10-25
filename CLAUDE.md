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

# MUNI 三牌陣（three-card）工作規範

本段規範適用於 `src/lib/threeCard/`、`src/data/threeCard/`、`handoff/` 相關的所有工作。單一事實來源：`handoff/02_SPEC_三牌引擎與內容規格.md`（Spec v1.2）。

## 絕對限制
- 不改動 22 張大秘儀的花精對應；不改動 `handoff/data/position_text.v2.json` 既有 234 段文字。
- 位置名固定「來處・此刻・去向」；模式 B「處境・卡點・下一步」；模式 C「原型・人格・情境」。禁止「過去・現在・未來」。
- 所有描述未來的句子用條件式「如果…就會…」；禁止「你將會」。
- 禁用詞：你將會、注定、註定、命中注定、警告、必須、一定會、災、凶、厄運、小心、應該。「預言」「判決」「定義你」只能出現在「不是」之後 3 字內。
- 內容為陪伴式文字，不得出現醫療或心理治療效果的斷言。
- 不做視覺逆位；`reversedReminder` 不參與三牌合成。

## 資料與引擎
- schema v2：`text: {zh, en?}`、`register: ("收"|"持"|"開")[]`、`status: draft|approved|retired`。引擎只讀 approved。
- 新寫的所有文字一律 `status: "draft"`，由使用者核准後才改 approved。
- 抽牌時 `selectAll()` 一次選完所有槽並寫入 reading 紀錄；精簡版／完整版只是渲染子集；重看一律重播，不重算。
- 選取順序：status → trigger/exclude → register → specificity → 近期排除（同特異層內）→ 權重 → md5 種子。
- TypeScript 引擎的 state 與 selections 必須與 `handoff/data/demo_reading_records.json` 八組基準逐欄一致（mbti_relation 除外）。

## 工作方式
- 每個 Phase 結束停下來報告並等確認；資料與規格不一致時停下來問，不要猜。
- 新文字以表格呈現（template_id／trigger／register／text／字數）。
- Commit 以 Phase 分開，訊息用中文；不要 push。
