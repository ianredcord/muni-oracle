# MUNI 三牌引擎與內容規格（Spec v1.2，2026-10-25）

> v1.2 變更（結構矛盾檢查後修正）：variant 移出 state，抽牌時一次選完所有槽、渲染時取子集；deep_cta 拆為 cta_brief／cta_full；選取順序改為 register → specificity → 近期排除；鏡像短文全有或全無；court_generic 排除模式 C；exception 需含「如果／允許」；新增 rescue_at 與 all_tens；模式 C 精簡版含 mirror_synthesis、預算 ≤ 400；reading_id 用 server uuid；近期排除測試改寫。
>
> v1.1 變更：schema v2（多語 text、register、status）、register 相容規則、reading 紀錄與重播、近期排除、精簡版／完整版、模式 C 鏡像短文、court_generic、exception 槽、長度預算、分析保留欄位。

本文件是給實作者的「單一事實來源」。四份審稿文件（03～07）提供背景與推理過程；凡與本文件衝突，以本文件為準。參考實作 `data/muni_assemble_reference.py` 是本規格的可執行版本，可直接對照。

---

## 1. 名詞與資料層

| 名詞 | 定義 |
|---|---|
| 牌卡資料 | `data/cards_v4_patched.json`，78 張，欄位與 `src/data/tarot.generated.ts` 的 `TarotCard` 相同；已套用 v4.1 修正（見 07） |
| id | 1–22 大秘儀；23–36 權杖；37–50 聖杯；51–64 寶劍；65–78 錢幣。每個花色前 10 張為數字牌（一～十），後 4 張為宮廷牌（侍者、騎士、皇后、國王） |
| kind | `major`（suit 為 major）／`pip`（number 欄位非空的小秘儀）／`court`（number 為空的小秘儀） |
| 層 layer | L1 = major + court（38 張，原型層）；L2 = pip（40 張，情境層）。38 支巴赫單方在 L1、L2 各出現一次；聖杯十、寶劍十為急救花精（Rescue），不屬任何單方 |
| 元素 element | 取 `element` 欄位第一個字：火／水／風／地。宮廷牌形式為「火中之地」，第一字即花色元素。大秘儀依黃金黎明占星對應（已寫在資料內） |
| 位置 position | `origin`（來處）／`now`（此刻）／`direction`（去向）。顯示名稱固定「來處・此刻・去向」，不得改成「過去・現在・未來」 |
| 位置短文 | `data/position_text.v2.json`，234 筆（schema v2），鍵為 (card_id, position)，每張牌每個位置唯一 |
| 槽模板 slot_templates | `data/slot_templates_all.v2.json`，77 筆，依狀態向量觸發（schema v2） |
| 鏡像短文 mirror_text | `data/mirror_text.v2.json`（Phase 2 產出），78 筆，模式 C 專用：大秘儀 22 段「原型」、宮廷 16 段「人格」、數字牌 40 段「情境」，每張牌一段 |
| reading 紀錄 | 每次抽牌的持久化物件，見 §9 |

### 1.1 模式

| 模式 | 名稱 | 三個位置的問句 | 抽牌池 | 排列數 |
|---|---|---|---|---|
| A | 旅程 | 來處・此刻・去向 | 78 張全牌隨機、不重複 | 456,456 |
| B | 卡點 | 處境・卡點・下一步 | 78 張全牌隨機、不重複 | 456,456 |
| C | 三面鏡 | 原型（我是誰）・人格（我怎麼表現）・情境（我在哪裡） | 來處只抽大秘儀 22、此刻只抽宮廷牌 16、去向只抽數字牌 40 | 14,080 |

模式 A 與 B 共用 234 段位置短文；B 只改變 UI 的位置問句與 `opening`。模式 C 的三個位置不是時間，而是「我是誰・我怎麼表現・我在哪裡」，因此改用 78 段鏡像短文（§4.1）取代位置短文；三張牌的鏡像短文須全部 approved 才使用；任一缺稿則整篇退回位置短文（全有或全無，避免同篇混用兩種框架），並由 `mirror_synthesis` 重新框架。三種模式共用同一套合成規則。

V2 不做視覺逆位；`reversedReminder` 欄位只在深度解析中呈現，不參與三牌合成。

---

## 2. 狀態向量（state）

對一組有序三張牌 (c1, c2, c3) 計算以下欄位。所有判定皆為純函數，無隨機。

### 2.1 元素尊嚴 rel(a, b)

| 結果 | 條件 |
|---|---|
| same | 元素相同 |
| friendly | {火, 風} 或 {水, 地} |
| hostile | {火, 水} 或 {風, 地} |
| neutral | 其餘（火–地、水–風） |

`rel_12 = rel(elem(c1), elem(c2))`，`rel_23 = rel(elem(c2), elem(c3))`。

### 2.2 敘事弧 arc（六型，依序判定，先命中先得）

整合型牌集合 INTEG（11 張）＝ 節制、星星、世界、四張「十」、四張「國王」。

正規化位階 nr(c)：大秘儀 ＝ 羅馬數字 ÷ 21（愚者 0）；數字牌 ＝ (點數 − 1) ÷ 13（一＝0、十＝9/13）；宮廷牌 侍者 11、騎士 12、皇后 13、國王 14，取 (值 − 1) ÷ 13。

1. `rupture` 斷裂：rel(elem(c1), elem(c3)) 為 hostile 且 c2 為大秘儀。
2. `resolve` 化解：c3 ∈ INTEG。
3. `repeat` 重複：c1 與 c3 同花色（皆為小秘儀）；或 c1、c3 皆為大秘儀且元素相同。
4. `advance` 推進：nr(c3) − nr(c1) ≥ 0.15。
5. `settle` 回落：nr(c3) − nr(c1) ≤ −0.15。
6. `hold` 持平：其餘。

全排列分布（供測試參考）：rupture 7.1%、resolve 13.1%、repeat 11.9%、advance 22.5%、settle 29.1%、hold 16.4%。

### 2.3 其他欄位

| 欄位 | 值 | 說明 |
|---|---|---|
| major_count | 0–3 | 大秘儀張數 |
| same_suit_12 / same_suit_23 | bool | 兩張皆小秘儀且同花色 |
| kinds_12 / kinds_23 | `"{kind1}-{kind2}"` | 例 `major-pip`、`pip-court` |
| flags | 陣列 | `both_sides_hostile`（rel_12 與 rel_23 皆 hostile）、`all_tens`（三張皆數字牌「十」） |
| resonance | `pair` / `none` | 三張中任兩張 `bachFlowerEn` 相同、且分屬 L1 與 L2、且非 Rescue → `pair`。同層同花精在 v4.1 已不可能出現；若出現視為資料錯誤 |
| court_present | bool | 任一張為宮廷牌 |
| user_mbti | bool | 使用者是否填了 MBTI |
| mbti_relation | exact / same_temperament / opposite / adjacent | 只在 court_present 且 user_mbti 時計算；多張宮廷牌只取一張：此刻優先、其次來處、再其次去向 |
| mode | A / B / C | |
| register | 收 / 持 / 開 | 由 arc 決定：rupture、settle → 收；hold、repeat → 持；advance、resolve → 開。全篇的溫度，其他槽依此過濾 |
| court_rank | 侍者 / 騎士 / 皇后 / 國王 / null | 被選中的那張宮廷牌（優先序同 mbti_relation）的位階 |
| rescue_count | 0–2 | 急救牌（聖杯十、寶劍十）張數 |
| rescue_at | position[] | 急救牌所在位置，例 `["now"]`；供 exception 觸發 |

`variant`（brief／full）不是狀態：它只決定渲染哪些槽（§10），不影響選取。

mbti_relation 判定：宮廷牌對應的 MBTI 類型（資料欄位 `jungianArchetype` 或既有宮廷牌 ↔ MBTI 對照表）與使用者本命比較：四字母全同 → exact；同 Keirsey 氣質群（NT／NF／SJ／SP）→ same_temperament；相同字母 ≤ 1 → opposite；其餘 → adjacent。

---

## 3. 模板結構與選取

### 3.1 模板欄位

```
template_id   string            例 ARC_RUPTURE_01；與語言無關
slot          string            見 §3.2
trigger       object            狀態鍵 → 值；flags 為陣列（全部需命中）
exclude       object            狀態鍵 → 值陣列；任一命中即排除
text          { zh: string; en?: string }   各語言獨立；可含佔位符；缺某語言時該語言引擎視為不存在
register      ("收"|"持"|"開")[]  相容的全篇溫度；arc 槽只有一個值，其他槽可多值
weight        int               抽樣權重；99 表示固定不輪替
tone_tags     string[]
length_chars  { zh: number; en?: number }
status        "draft" | "approved" | "retired"   引擎只用 approved
version       string            "2026-10"
note          string
```

位置短文與鏡像短文同樣採 `text: {zh, en?}` 與 `status`。所有 lint 依語言分別執行；英文另有自己的禁用詞表（Phase 0 由實作者提出，使用者核准）。

### 3.2 槽位與出場順序

模式 A／B 的輸出順序（固定，不可調換）：

1. `opening`（trigger mode）
2. `exception`（例外整段；命中時取代 structure／mirror_synthesis，且 arc 省略）；未命中則 `structure`（trigger major_count；exclude mode C）
3. **origin 位置短文**
4. `rel_12`，或當 flags 含 both_sides_hostile 時改用 `rel_both`（此時 rel_23 省略）
5. **now 位置短文**（= now_lead ＋「允許句：」＋ 該牌 step2Allow ＋「。」，已預先合成在 position_text 內）
6. `rel_23`
7. **direction 位置短文**
8. `arc`
9. `resonance`（僅 resonance = pair）
10. `court`（court_present 且 user_mbti），否則 `court_generic`（court_present 且 user_mbti=false，trigger court_rank；exclude mode C——模式 C 的人格鏡面已說明宮廷牌是人格面向，不重複）
11. 〔花精複方〕（合成，見 §5）
12. 〔身體練習〕＝ c3 的 `step3Body`
13. `cta_brief`（只在精簡版渲染，導向完整版）／`cta_full`（只在完整版渲染，導向深度解析）；兩者都在抽牌時選定
14. `closing`（固定：「三張牌是三面鏡子，不是三個判決。」）

模式 C 的差異：第 3、5、7 步改用鏡像短文（§4.1；此刻位仍附允許句）；第 2 步改用 `mirror_synthesis`（模式 C 的核心重框句，精簡版也渲染）；第 4、6 步（rel_12／rel_23／rel_both）全部省略——模式 C 不套用元素尊嚴；其餘順序相同，`arc` 保留（使用者已確認）。

### 3.3 選取演算法

```
candidates = 該 slot 中 status == approved、trigger 全部命中、exclude 皆未命中的模板
若為空 → 該槽省略（允許省略的槽：exception、resonance、court、court_generic、rel_both；其餘為空代表模板庫缺口，測試應失敗）
register 過濾：只保留 register 含 state.register 的模板；若過濾後為空，退回未過濾的 candidates，並記錄 warning（測試中列為覆蓋缺口）
specificity = max(len(trigger))；只保留 trigger 鍵數等於 specificity 的模板
近期排除（在同一特異層內）：若剩餘 > 1，排除此使用者最近 N=5 篇 reading 在此槽選中的 template_id；若排除後為空則不排除（允許重複，不降級到較不特定的模板）
pool = 依 weight 展開
seed = md5(f"{user_id}|{YYYY-MM-DD}|{id1}|{id2}|{id3}|{slot}")
選 pool[int(seed,16) % len(pool)]
```

順序的理由：register 是全篇溫度，先於一切；specificity 保證特定情境的句子不被通用句蓋掉；近期排除只在同一特異層內輪替，不會為了避免重複而選到較不貼切的句子。

**一次選完**：抽牌當下對所有可能出場的槽（含 cta_brief 與 cta_full）各選一筆並寫入 reading 紀錄；精簡版／完整版只是同一組 selections 的兩種渲染子集。使用者從精簡版展開完整版時不重新選取，因此不會出現「展開後句子換掉」或近期排除基準不一致的情形。

決定性與穩定性：同 (user, date, cards, recent) 必得同一組 selections。但 pool 長度會隨新增變體改變，所以**之後重看一律從紀錄重播**，不重算；重播依 template_id 取最新文字、忽略 status（retired 的模板仍須保留在資料中以供重播）。這同時讓錯字修正可以安全上線。

### 3.4 佔位符

`{elem_1}` `{elem_2}` `{elem_3}`（火／水／風／地）、`{essence_zh}` `{essence_en}`（共振那支花精）、`{court_name}` `{court_type}` `{user_type}`（court 槽）、`{archetype}` `{persona}` `{situation}`（模式 C 三張牌名）。

---

## 4. 位置短文規格（234 段）

| 位置 | 字數 | 必要條件 |
|---|---|---|
| origin 來處 | 35–70 | 以「你一路…」或等價的回顧語氣開頭；描述狀態，不評價 |
| now 此刻 | 45–95（含允許句） | now_lead 必含「此刻」與該牌花精中文名＋（英文名）；以「允許句：」接 step2Allow |
| direction 去向 | 38–70 | 必含「如果」與「允許」；條件句「如果…就會／會…」；絕不出現「你將會」 |

每段都是「特定牌 × 特定位置」唯一；任兩種排列只要任一位置的牌不同，整篇即不同。

### 4.1 模式 C 鏡像短文（78 段）

| 池 | 鏡面 | 張數 | 字數 | 寫法 |
|---|---|---|---|---|
| 大秘儀 | 原型（我是誰） | 22 | 35–70 | 描述這張原型「在你身上的那一面」，不是給人格貼標籤；可用「不是定義你」 |
| 宮廷牌 | 人格（我怎麼表現） | 16 | 45–95（含允許句） | 描述表現方式與他人感受到的樣子；必含花精中文名＋（英文名）；以「允許句：」接 step2Allow |
| 數字牌 | 情境（我在哪裡） | 40 | 38–70 | 描述所在的場與它的張力；結尾仍用條件式「如果你允許…」，不預測 |

鏡像短文不用時間框架：不出現「一路」「過去」「將來」；原型與人格句不用「如果…就會」，情境句保留。其餘語氣規則與 §6 相同。

---

## 5. 合成規則（零文案）

| 項目 | 規則 |
|---|---|
| 花精複方 | 主 = c2 花精；釋放 = c1 花精；支持 = c3 花精。同支花精只列一次（標「與上同支，已合併」），複方縮為 2 支；共振命中時由 `resonance` 槽說明。急救花精照常列出 |
| 允許句 | 直接用 c2 的 `step2Allow`，已併入 now 短文 |
| 身體練習 | 直接用 c3 的 `step3Body` |
| 收尾 | `closing` 固定句 |
| 精簡版 | 渲染：exception（若命中）、mirror_synthesis（模式 C）、三段位置短文（或鏡像短文）、arc、cta_brief、closing；不渲染複方與身體練習 |

---

## 6. 語氣規則（lint，入庫前必跑）

適用於所有位置短文與模板文字。

- 禁用詞（出現即失敗）：你將會、注定、註定、命中注定、警告、必須、一定會、災、凶、厄運、小心、應該。
- 條件允許：「預言」「判決」「定義你」只能出現在「不是」之後 3 字內（例「不是預言」「不是三個判決」）。
- 結構：`rel_12`／`rel_23`／`rel_both` 文字以「——」或「而」開頭；`arc`、`exception` 與 `rel_23` 必含「如果」或「允許」（exception 取代 arc，承接同一條件句義務）。
- 去向短文：必含「如果」且含「允許」；不得以肯定未來式陳述結果。
- 此刻短文：必含「此刻」與花精名。
- 字數：見 §4；模板 24–90 字。
- 語氣三原則：不預測、不宿命、溫柔允許。所有內容為陪伴式文字，不是療效宣稱，不得出現醫療或心理治療效果的斷言。

---

## 7. 既有數量與缺口

既有 77 筆已轉為 schema v2、status=approved；register 除 arc 槽外一律標為「收・持・開」三值相容（尚未人工窄化）。Phase 2 需逐筆提議窄化（例：STRUCT_M3 深層河流句不宜配「開」），以 draft 狀態送審。

目前 77 筆模板分布：arc 14、rel_12 15、rel_23 15、rel_both 2、structure 9、resonance 3、court 10、opening 2、cta_full 3（原 deep_cta）、closing 1、mirror_synthesis 3。

已知偏少（建議補到每個觸發狀態 ≥ 3 變體）：ARC_RUPTURE（1）、ARC_RESOLVE（2）、ARC_REPEAT（2）、STRUCT_M3（1）、COURT_EXACT（1）、OPEN_A／OPEN_B（各 1）。

新增槽：`court_generic` 4 筆（trigger court_present=true、user_mbti=false、court_rank；exclude mode C）；`cta_brief` 2 筆（trigger 空，導向完整版）。

例外整段 `exception`（≤ 20 段，整段取代 structure＋arc；trigger 需精確）：三張皆宮廷、三張皆大秘儀且同元素、三張同花色、共振＋化解型、共振＋斷裂型、三張皆「十」（flags all_tens）、急救牌落在此刻位（rescue_at 含 now）、兩張急救同時出現（rescue_count 2）。模式 C 下 kinds 固定為 major-court／court-pip，前三種情境不可能發生，不必為 C 另寫。

---

## 8. 驗收測試

1. 資料完整：78 張；L1 38 支無重複；L2 38 支無重複＋2 急救；兩層集合相等；`systemL2Echo` 雙向一致（76 張）。
2. 位置短文：234 筆、無重複、全部通過 §6。
3. 模板：全部通過 §6；每個 slot 的每個可達狀態至少有 1 筆可選模板（exception／resonance／court／court_generic／rel_both 除外）。
4. 窮舉：對 456,456 種排列（模式 A）與 14,080 種（模式 C）跑組裝，無例外、無空的必要槽、無未替換的佔位符。
5. 決定性：同 (user, date, cards, recent) 兩次 selections 完全相同；不同 date 至少在一個槽產生差異（抽樣檢查）。同一 selections 渲染 brief 與 full，brief 的每一句都出現在 full 中（cta 除外）。
6. 示範組：「聖杯五 → 愚者 → 星星」「星星 → 愚者 → 聖杯五」「權杖一 → 愚者 → 星星」（共振）「太陽 → 權杖十 → 聖杯騎士」（不得共振）「寶劍九 → 寶劍國王 → 聖杯九」（共振、複方 2 支）；模式 C「愚者 → 聖杯騎士 → 權杖一」；精簡版「聖杯五 → 愚者 → 星星」。參考實作執行後會把這些寫入 `demo_reading_records.json`，TS 的 state 與 selections 必須逐欄相同（mbti_relation 除外）。
7. 長度預算：模式 A／B 精簡版 ≤ 330 字、模式 C 精簡版 ≤ 400 字（含 mirror_synthesis）、完整版 ≤ 800 字（含複方與身體練習、不含 template_id 註記），對全部排列窮舉皆成立。現有資料的理論上限：完整版 741、A/B 精簡版 277、C 精簡版 372。
8. register 覆蓋：716 個可達狀態中，每個必要槽在 register 過濾後仍有 ≥ 1 筆；目標 ≥ 2 筆的比例列入 content-inventory。
9. 重播：同一 reading 紀錄在模板庫新增 10 筆後重播，文字完全相同。
10. 近期排除：對同一狀態連續產生 k 篇 reading（k ≤ 該槽同特異層內 register 相容的候選數），每槽 k 篇的 template_id 互不相同；k 超過候選數後允許重複，但不得選到較低特異層的模板。
11. 鏡像退回：三張中任一張鏡像短文為 draft 時，模式 C 整篇使用位置短文；三張皆 approved 時整篇使用鏡像短文。

---

## 9. reading 紀錄與持久化

每次抽牌產生一筆不可變紀錄；重看、分享、歷史頁一律重播，不重算。

```
reading_id        string   server 端 uuid（不可由 seed 推導：同人同日重抽同一組牌是兩筆紀錄）
user_id           string | null（匿名可為裝置 id）
created_at        ISO 日期時間
mode              A | B | C
initial_variant   brief | full（首次呈現的版本；展開完整版以 event 記錄）
locale            zh | en
cards             [id, id, id]（有序）
state             §2 的完整狀態向量
selections        { slot: template_id }（抽牌時一次選完，含 cta_brief 與 cta_full；渲染時依 variant 取子集）
content_version   模板庫版本（例 "2026-10"）
engine_version    引擎版本
chars             { brief: number; full: number }（不含註記）
events            [{ type, at, meta? }]   保留欄位，見 §11
```

近期排除所需的「最近 N 篇」即由此表查詢：`SELECT selections FROM reading WHERE user_id=? ORDER BY created_at DESC LIMIT 5`。

## 10. 精簡版與完整版

| 版本 | 內容 | 字數預算 | 用途 |
|---|---|---|---|
| brief 精簡版 | exception（若命中）＋mirror_synthesis（僅模式 C）＋三段位置／鏡像短文＋arc＋cta_brief＋closing | A/B ≤ 330；C ≤ 400 | 預設首屏，「一分鐘讀法」 |
| full 完整版 | §3.2 全部槽（cta_brief 除外）＋花精複方＋身體練習 | ≤ 800 | 點「展開完整解讀」後 |
| 深度解析 | 既有單牌頁的三步內容（step1／2／3、呼吸、香氣、日常練習等） | 不限 | 由 full 的 deep_cta 導入 |

CTA 分兩個槽：`cta_brief` 導向完整版（「展開完整解讀」），`cta_full` 導向深度解析。既有 3 筆 CTA_DEEP 已改為 slot `cta_full`；Phase 2 需為 `cta_brief` 補 2 筆。兩者都在抽牌時選定、寫入 selections。

## 11. 分析與回饋（保留欄位，V2 不實作分析）

`reading.events[].type` 保留值：`viewed_brief`、`expanded_full`、`opened_deep`、`shared`、`saved`、`dwell_ms`（meta.ms）。權重調整、弱變體淘汰與 A/B 測試日後以此為基礎；V2 只需正確寫入事件，不做任何計算。
