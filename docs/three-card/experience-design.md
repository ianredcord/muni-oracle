# 三牌陣體驗流程設計 v2（2026-10-26，待確認後實作）

## 0. 問題

第一版結果頁把引擎輸出的段落直接疊在一起：位置短文、關係句、敘事弧、CTA 全部長得一樣，使用者不知道「這一段在講哪張牌、為什麼接在這裡」。單張塔羅與花精的結果頁之所以好讀，是因為每一段都有名字（快速解讀、正位核心訊息、辨識／允許／身體覺察）、有順序、有圖，而且先告訴你接下來會看到什麼。

三牌陣要做到同樣的事：**每一段都有標籤、每張牌都有臉、每一步都有前情提要。** 引擎與資料不改，改的是把引擎的 segments 重新編排成有導引的閱讀流程。

## 1. 流程總覽（五幕）

```
① 認識三牌陣 ──► ② 選模式 ──► ③ 抽牌（帶位置提示） ──► ④ 逐張揭示（引導式）──► ⑤ 整篇解讀（有標籤的精簡版 → 完整版 → 深度解析）
```

與單張抽牌對照：單張是「洗牌 → 選一張 → 結果頁六區塊」；三牌陣多了「位置」這個概念，所以在③④兩幕把位置教給使用者，⑤才能讀得懂。

## 2. 各幕設計

### ① 認識三牌陣（`/tarot/three-card` 首屏，第一次來才展開，之後摺疊成一行）

- 標題「三牌陣」，副標引導句。
- 一張「怎麼讀」卡（三行，每行一個小圖示）：
  - **三個位置**：三張牌各站一個位置，位置決定它在說什麼。
  - **一句允許**：此刻那張牌會給你一句允許句，那是今天帶走的一句話。
  - **三面鏡子**：三張牌是三面鏡子，不是三個判決。
- 下方才是三張模式卡（維持第一版）。模式卡上多一行「適合：想看一段路／卡在一件事／想看整體的自己」。

### ② 選模式

- 點模式卡後，卡片展開成「位置說明條」：三個位置名＋各一句問句（已有 MODE_TEXT），停 1.5 秒再進抽牌，讓使用者先讀到位置。
- 右上角「怎麼讀」可隨時打開①的卡。

### ③ 抽牌

- 三個空位改成三張「位置卡」：位置名、問句、第幾張。目前要選的位置會發亮，旁邊提示「現在選的是：此刻——此刻，你站在什麼位置？」
- 選到一張，空位翻成牌背並顯示「已選」，提示換到下一個位置。
- 模式 C 三排牌池各自標「原型 22 張／人格 16 張／情境 40 張」。
- 按鈕「翻開三張牌」。

### ④ 逐張揭示（新增；結果頁的第一段）

結果頁不再一次倒出全文，而是像單張一樣**一張一張翻**：

```
[位置標籤：來處]  問句「你是帶著什麼走到這裡的？」
   ┌────────┐
   │ 牌面  │   審判 Judgement
   └────────┘   花精 甜栗花 Sweet Chestnut ｜ 原型 自性的召喚
   ▶ 位置短文（這張牌在這個位置的一段話）
   [下一張 →]
```

- 來處 → 此刻 → 去向 各一屏，進度點 1/3、2/3、3/3；可往回。
- **此刻**那一屏特別處理：位置短文分成兩塊呈現——前半「此刻可以……」，後半「允許句」獨立成一張淡金色卡片（和單張頁的「允許」步驟同款），標籤「今天帶走的一句」。
- 模式 C 的標籤改成「原型／我是誰」「人格／我怎麼表現」「情境／我在哪裡」，短文來源為鏡像短文。
- 第三張翻完後出現「把三張連起來」按鈕 → 進入⑤。

### ⑤ 整篇解讀

#### 5.1 精簡版（首屏）

| 區塊 | 標籤（新 UI 文字） | 內容來源 | 呈現 |
|---|---|---|---|
| 三張牌總覽 | — | cards | 三張小圖並排＋位置名＋牌名，點任一張回到④該屏 |
| 開場 | 「這一局在看什麼」 | opening | 一行淡字 |
| 例外（若有） | 「這一局比較特別」 | exception | 淡金底卡片 |
| 三面鏡總綱（模式 C） | 「三面鏡子怎麼合起來」 | mirror_synthesis | 卡片 |
| 三段短文 | 位置名＋牌名當小標（「來處｜審判」） | position／mirror | 每段前加位置小標與牌名，此刻段的允許句獨立標示 |
| 走向 | 「三張牌連起來的走向」＋走向名（例「回落・收」） | arc | 卡片，左側一條三點連線圖示（↗ ↘ → 等六型各一圖） |
| 帶走的一句 | 「今天帶走的一句」 | c2.step2Allow | 大字、可複製 |
| CTA | — | cta_brief | 按鈕上方一行 |
| 結語 | — | closing | 置中小字 |

走向名對照：rupture 轉折／收、resolve 收攏／開、repeat 重複／持、advance 推進／開、settle 回落／收、hold 持平／持（顯示給使用者的是前兩字，register 不顯示）。

#### 5.2 完整版（展開後，插在精簡版對應位置之間）

| 區塊 | 標籤 | 內容來源 | 呈現 |
|---|---|---|---|
| 結構 | 「這一局的分量」 | structure | 一行，帶大秘儀張數圖示（0–3 顆星） |
| 來處→此刻關係 | 「來處與此刻之間」 | rel_12／rel_both | 放在來處段與此刻段之間，左邊一個連接符號（同／友／斥／中各一圖） |
| 此刻→去向關係 | 「此刻與去向之間」 | rel_23 | 同上，放在此刻與去向之間 |
| 共振（若有） | 「同一支花精出現了兩次」 | resonance | 淡金卡片，標出那支花精 |
| 宮廷牌 | 「這張宮廷牌是一個面向」 | court／court_generic | 卡片，顯示那張宮廷牌的小圖 |
| 花精複方 | 「今天的花精複方」 | 合成 | 三列：主（此刻）／釋放（來處）／支持（去向），各列顯示牌名＋花精中英名＋一句角色說明（主：今天的中心／釋放：放下來處的／支持：往去向走時扶一把）；同支合併時顯示「與主花精同支，已合併」 |
| 身體練習 | 「身體覺察」 | c3.step3Body | 與單張頁第三步同款卡片 |
| 深度解析 | 「每一張牌單獨看」 | — | 三顆按鈕到百科頁，加一行說明「每張牌的完整三步、呼吸法、香氣與日常練習都在百科頁」 |
| CTA／結語 | — | cta_full／closing | |

#### 5.3 右側／底部工具
- 儲存、分享、再抽一次、我的紀錄（維持）。
- 分享文字改成「三張牌名＋今天帶走的一句＋結語」，不再貼整段短文。

## 3. 新增 UI 文字（draft，須過 lint）

| id | zh | en |
|---|---|---|
| GUIDE_TITLE | 怎麼讀三牌陣 | How to read |
| GUIDE_1 | 三張牌各站一個位置，位置決定它在說什麼。 | Each card stands in a position; the position decides what it says. |
| GUIDE_2 | 此刻那張牌會給你一句允許句，那是今天帶走的一句話。 | The card in the Now position gives you one permission line to take with you. |
| GUIDE_3 | 三張牌是三面鏡子，不是三個判決。 | Three cards are three mirrors, not three verdicts. |
| NOW_PICKING | 現在選的是：{position}——{question} | Now choosing: {position} — {question} |
| CONNECT | 把三張連起來 | Connect the three |
| LABEL_OPENING | 這一局在看什麼 | What this spread looks at |
| LABEL_EXCEPTION | 這一局比較特別 | This spread is unusual |
| LABEL_MIRROR | 三面鏡子怎麼合起來 | How the three mirrors fit |
| LABEL_STRUCTURE | 這一局的分量 | The weight of this spread |
| LABEL_REL_12 | 來處與此刻之間 | Between origin and now |
| LABEL_REL_23 | 此刻與去向之間 | Between now and direction |
| LABEL_REL_BOTH | 此刻被兩邊夾著 | Now, held from both sides |
| LABEL_ARC | 三張牌連起來的走向 | The line the three cards make |
| LABEL_RESONANCE | 同一支花精出現了兩次 | The same essence, twice |
| LABEL_COURT | 這張宮廷牌是一個面向 | This court card is a facet |
| LABEL_TAKEAWAY | 今天帶走的一句 | The line to take with you |
| LABEL_BLEND | 今天的花精複方 | Today's flower blend |
| BLEND_MAIN | 主｜此刻：今天的中心 | Main — Now: today's centre |
| BLEND_RELEASE | 釋放｜來處：放下帶來的 | Release — Origin: what to set down |
| BLEND_SUPPORT | 支持｜去向：往前走時扶一把 | Support — Direction: a hand on the way |
| BLEND_MERGED | 與主花精同支，已合併 | Same essence as the main; merged |
| LABEL_BODY | 身體覺察 | Body awareness |
| LABEL_DEEP | 每一張牌單獨看 | Each card on its own |
| DEEP_NOTE | 每張牌的完整三步、呼吸法、香氣與日常練習都在百科頁。 | Each card's full three steps, breathing, aroma and daily practice are on its encyclopedia page. |
| ARC_NAMES | 轉折／收攏／重複／推進／回落／持平 | Turning / Gathering / Repeating / Advancing / Settling / Holding |
| MODE_FIT_A/B/C | 適合：想看一段路／卡在一件事／想看整體的自己 | For: a passage / one stuck thing / the whole of you |

## 4. 技術上要改什麼（引擎與資料不動）

- `render()` 已回傳帶 slot／position 的 segments，結果頁改成「依 slot 分配到對應區塊」而不是依序平鋪；允許句由 c2.step2Allow 另外取（server action 回傳 cards 時多帶 flower、archetype、step2Allow、arcName）。
- `ReadingClient` 拆成：`RevealWalkthrough`（④）、`ReadingBrief`（5.1）、`ReadingFull`（5.2）、`SegmentCard`（帶標籤的段落）。
- `ThreeCardClient` 加「怎麼讀」卡與位置卡提示。
- 事件維持；④的每一屏不另記事件。
- 新 UI 文字放 `pageText.ts`／`uiText.ts`，跑 lint。
- 單元測試：segments → 區塊分配函數（每個 slot 都有歸屬、精簡版／完整版各自完整）。

## 5. 不做的事

- 不改模板文字、位置短文、鏡像短文（內容已核准）。
- 不加「牌義解釋」長文：深度解析交給百科頁。
- 不做逆位、不做分數或評等。
