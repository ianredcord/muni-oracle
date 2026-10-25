# MUNI slot_templates 第二批：結構句、特異關係句、共振、宮廷牌、開場收尾、三面鏡

munione.co 三牌系統 V2　版本 2026-10　本批 37 筆，累計 77 筆

---

## 一、批次說明

- 範圍：`structure` 9、`rel_12`／`rel_23` 高特異性覆蓋 6、`resonance` 3、`court` 10、`opening` 2、`deep_cta` 3、`closing` 1、`mirror_synthesis` 3。
- 至此規則模板層全部到位；剩下的是 234 段位置短文與上線後補的例外整段（≤ 20）。
- 語氣檢查：37 筆全部通過。本批新增禁用詞「註定」「應該」；「判決」「定義你」只允許出現在三字內有「不是」的否定句。
- 模板總量 77 筆，比報告第七章估算的約 70 筆多 7 筆，差異來自大小秘儀相鄰句依方向拆成 4 筆、宮廷牌多了本命牌精確命中 1 筆。

## 二、本批引入的兩條判定規則

### 2.1 特異性優先（specificity）

同一槽位可能同時命中多筆模板（例如 rel_12 的元素類「same」與「同花色」）。選取規則：

1. 先取 trigger 鍵數最多的候選（同花色 2 鍵 ＞ 大小秘儀相鄰 1 鍵 ＝ 元素類 1 鍵）。
2. 鍵數相同時依固定優先序：`same_suit` ＞ `kinds`（大小秘儀相鄰）＞ 元素類。
3. 同一候選集內再依 weight 做決定性加權抽樣。

同花色必然同元素，所以同花色句是「same」的細化；大小秘儀相鄰句則會覆蓋元素句——元素資訊仍會透過 arc 與 structure 間接呈現，不會遺失。

### 2.2 宮廷牌與本命 MBTI 的關係分類

| mbti_relation | 判定 | 說明 |
|---|---|---|
| exact | 四個字母全同 | 本命牌，優先於其他三類 |
| same_temperament | 同一 Keirsey 氣質群（NT／NF／SJ／SP） | 熟悉的那一面 |
| opposite | 相同字母 ≤ 1 個 | 補位的那一面 |
| adjacent | 其餘 | 有、但不常用的那一面 |

多張宮廷牌時只取一張：此刻位優先，其次來處，再其次去向。使用者未填 MBTI 時整槽省略。


## 三、結構句 `structure`（第 1 槽）

依大秘儀張數定調這次抽牌的「重量」。模式 C 固定 1 張大秘儀，此槽由 mirror_synthesis 取代。

| ID | 文字 | 字數 | 觸發 |
|---|---|---|---|
| STRUCT_M0_01 | 今天三張牌都來自日常層——課題很具體，也很可調整。不是小事，而是正好在你手搆得到的地方。 | 44 | {"major_count": 0} |
| STRUCT_M0_02 | 沒有大秘儀出現。這表示今天的訊息不在人生命題，而在生活現場：一個習慣、一段對話、一個下午。 | 45 | {"major_count": 0} |
| STRUCT_M0_03 | 三張都是小秘儀——像是今天只需要處理眼前的事，不用急著給它更大的意義。 | 35 | {"major_count": 0} |
| STRUCT_M1_01 | 三張牌裡有一張大秘儀：底下有一條深層的河流，表面的事件只是它的浪花。 | 34 | {"major_count": 1} |
| STRUCT_M1_02 | 一張原型牌、兩張日常牌——今天的具體事件背後，有一個比較大的主題在安靜地推動。 | 39 | {"major_count": 1} |
| STRUCT_M1_03 | 有一張大秘儀出現，像在日常的對話裡，忽然有人說了一句比較深的話。先聽聽它說什麼。 | 40 | {"major_count": 1} |
| STRUCT_M2_01 | 兩張大秘儀——這段時期有分量。花精可以多陪自己幾天，不必在今天就把一切想清楚。 | 39 | {"major_count": 2} |
| STRUCT_M2_02 | 三張牌裡有兩張是原型層：這不只是一件事，是一段正在成形的篇幅。慢一點讀。 | 36 | {"major_count": 2} |
| STRUCT_M3_01 | 三張都是大秘儀，這很少見——今天看的不是一週的事，而是一個人生章節的輪廓。它不是判決，是地圖。 | 47 | {"major_count": 3} |

## 四、關係句高特異性覆蓋（rel_12／rel_23）

同花色與大小秘儀相鄰的專屬句，命中時取代第一批的元素類模板。rel_23 的四筆都保留「如果」的條件語法位置。

| ID | 文字 | 字數 | 觸發 |
|---|---|---|---|
| REL12_SAMESUIT_01 | ——來處與此刻是同一個花色：同一個生活領域在重複出現，不是卡住，是這個領域還有話要說。 | 43 | {"rel_12": "same", "same_suit_12": true} |
| REL23_SAMESUIT_01 | ——此刻與去向是同一個花色：方向就在同一個生活領域裡，如果你允許此刻的鬆動，不需要換場地就能走過去。 | 50 | {"rel_23": "same", "same_suit_23": true} |
| REL12_MAJOR_PIP_01 | ——來處是一張大牌，此刻是一張日常牌：深層的主題已經在那裡很久了，今天它以一件具體的事來到你面前。 | 49 | {"kinds_12": "major-pip"} |
| REL12_PIP_MAJOR_01 | ——來處是日常的事，此刻卻翻出一張大牌：表面的事件把一個更深的主題帶到了現場。這是此刻這張牌值得多停一下的原因。 | 56 | {"kinds_12": "pip-major"} |
| REL23_MAJOR_PIP_01 | ——此刻是一張大牌，去向是一張日常牌：如果你允許深層的鬆動發生，它會以一件很具體、很小的事長出來。 | 49 | {"kinds_23": "major-pip"} |
| REL23_PIP_MAJOR_01 | ——此刻是日常的事，去向卻是一張大牌：如果順著現在這件小事往下走，前面連著的是一個比較大的主題。 | 48 | {"kinds_23": "pip-major"} |

## 五、雙層共振 `resonance`（第 9 槽，條件槽）

同一支花精在 L1 與 L2 同時出現（3.8%）。變數 `{essence_zh}` `{essence_en}` 代入花精名稱。命中時合成規則同步把複方縮為 2 支。

| ID | 文字 | 字數 |
|---|---|---|
| RES_PAIR_01 | {essence_zh}（{essence_en}）在原型層與情境層同時出現——這是今天最核心的一支花精。複方因此收成兩支，焦點更清楚。 | 68 |
| RES_PAIR_02 | 同一支花精在兩層各出現一次：{essence_zh}。它不是巧合的重複，而是同一個訊息用兩種語言說了兩次。今天就以它為主。 | 61 |
| RES_PAIR_03 | 三張牌裡有兩張指向同一支花精——{essence_zh}。這種雙層共振二十幾次抽牌才會遇到一次，值得把它放在今天的中心。 | 60 |

## 六、宮廷牌 MBTI 張力 `court`（第 8 槽，條件槽）

變數 `{court_name}` `{court_type}` `{user_type}`。語氣原則：不說「你就是這樣」，只說「今天來的是哪一面」。

| ID | 文字 | 字數 | 觸發 |
|---|---|---|---|
| COURT_SAME_TEMPERAMENT_01 | {court_name}（{court_type}）和你的本命 {user_type} 是同一種氣質——今天抽到的是自己熟悉的那一面。它想問的是：這個方式，此刻還合身嗎？ | 85 | {"court_present": true, "user_mbti": true, "mbti_relation": "same_temperament"} |
| COURT_SAME_TEMPERAMENT_02 | 這張宮廷牌與你的本命氣質相近。不是在告訴你「你就是這樣」，而是提醒你，今天用的正是你最順手的那套工具。 | 51 | {"court_present": true, "user_mbti": true, "mbti_relation": "same_temperament"} |
| COURT_SAME_TEMPERAMENT_03 | 宮廷牌 {court_name} 與你的 {user_type} 同屬一個氣質群——像照鏡子，看見的是自己平常的樣子。看看鏡子裡有沒有一點你平常不注意的表情。 | 79 | {"court_present": true, "user_mbti": true, "mbti_relation": "same_temperament"} |
| COURT_ADJACENT_01 | {court_name}（{court_type}）與你的本命 {user_type} 有一部分重疊——它是你有、但不常拿出來用的那一面。今天可以試著讓它多說一點話。 | 83 | {"court_present": true, "user_mbti": true, "mbti_relation": "adjacent"} |
| COURT_ADJACENT_02 | 這張宮廷牌和你的本命氣質相鄰：既不陌生，也不是你的預設。它像一位熟識但不常聯絡的朋友，今天來訪有它的原因。 | 53 | {"court_present": true, "user_mbti": true, "mbti_relation": "adjacent"} |
| COURT_ADJACENT_03 | 宮廷牌與你的本命有一半相似、一半不同——同一個人，換了一個站的位置。試著從這個位置看看此刻的課題。 | 49 | {"court_present": true, "user_mbti": true, "mbti_relation": "adjacent"} |
| COURT_OPPOSITE_01 | {court_name}（{court_type}）幾乎是你本命 {user_type} 的反面——不是衝突，是補位。今天來的是你最少用的那一面，帶著你平常沒有的角度。 | 84 | {"court_present": true, "user_mbti": true, "mbti_relation": "opposite"} |
| COURT_OPPOSITE_02 | 這張宮廷牌與你的本命氣質相對。這種張力不需要解決，只需要被看見：你平常怎麼做，它就提醒你有另一種做法存在。 | 53 | {"court_present": true, "user_mbti": true, "mbti_relation": "opposite"} |
| COURT_OPPOSITE_03 | 宮廷牌站在你本命的對面。塔羅裡的對立不是敵意，是互補——如果你允許自己借用一點它的方式，此刻的課題會多出一條路。 | 56 | {"court_present": true, "user_mbti": true, "mbti_relation": "opposite"} |
| COURT_EXACT_01 | 你抽到了自己的本命牌 {court_name}。這不是在定義你，而是今天的課題直接關於你怎麼當自己——不用扮演，也不用修正。 | 62 | {"court_present": true, "user_mbti": true, "mbti_relation": "exact"} |

## 七、開場、深度解析引導、固定結語

`opening` 依模式 A／B 各 1 筆；`deep_cta` 3 筆輪替；`closing` 權重 99 代表不輪替。

| ID | 文字 | 字數 | 觸發 |
|---|---|---|---|
| OPEN_A_01 | 三張牌由左至右：來處、此刻、去向。先逐張看，再把它們連成一條線。 | 32 | {"mode": "A"} |
| OPEN_B_01 | 三張牌由左至右：處境、卡點、下一步。最後一張是行動，不是結論。 | 31 | {"mode": "B"} |
| CTA_DEEP_01 | 想多停一下？展開深度解析，看每一張牌完整的三步。 | 24 | {} |
| CTA_DEEP_02 | 一分鐘的讀法到這裡。如果還想往下，深度解析在下面。 | 25 | {} |
| CTA_DEEP_03 | 這是三秒鐘的版本。想知道每支花精為什麼在這裡，往下展開。 | 28 | {} |
| CLOSE_01 | 三張牌是三面鏡子，不是三個判決。 | 16 | {} |

## 八、三面鏡合成 `mirror_synthesis`（模式 C）

模式 C 不套元素尊嚴，以「原型 × 人格 × 情境」三句公式取代 structure、rel_12、rel_23 三槽；arc 仍適用。變數 `{archetype}` `{persona}` `{situation}` 代入三張牌名。

| ID | 文字 | 字數 |
|---|---|---|
| MIRROR_C_01 | 原型層給了{archetype}（我是誰），人格層給了{persona}（我怎麼表現），情境層給了{situation}（我在哪裡）。三面鏡子各照一個角度——同一個你，今天從三個方向被看見。 | 95 |
| MIRROR_C_02 | 今天的三面鏡：{archetype}是底色，{persona}是你拿出來的樣子，{situation}是你站的地方。它們不必一致；不一致的地方，就是最值得看的地方。 | 82 |
| MIRROR_C_03 | {archetype}在深處，{persona}在表面，{situation}在周圍。如果三者剛好和諧，今天是整合的一天；如果彼此拉扯，也不是錯——那只是你同時是好幾種樣子。 | 87 |


## 九、累計狀態與下一步

| 槽位 | 筆數 | 狀態 |
|---|---|---|
| arc | 14 | 完成 |
| rel_12／rel_23／rel_both | 32 | 完成 |
| structure | 9 | 完成 |
| resonance | 3 | 完成 |
| court | 10 | 完成 |
| opening／deep_cta／closing | 6 | 完成 |
| mirror_synthesis | 3 | 完成 |
| 合計 | 77 | 規則模板層齊備 |
| position_text | 0／234 | 待寫 |
| exceptions | 0／≤20 | 上線後補 |

下一步是 234 段位置短文。建議先以愚者（Clematis）寫出「來處・此刻・去向」三段當模板，確認每段 40–60 字、來處只寫陰影、此刻含允許句與主花精、去向用「如果…就會…」條件句，再以同一格式鋪完 78 張。隨附 `slot_templates_all.csv` 是兩批合併後的 77 筆，可直接覆蓋 Google Sheet 的 slot_templates 分頁。
