# 三牌陣內容盤點（2026-10-26 產生）

## 1. 模板筆數與 status

| slot | approved | draft | retired | 合計 |
|---|---|---|---|---|
| opening | 2 | 7 | 0 | 9 |
| exception | 0 | 13 | 0 | 13 |
| structure | 9 | 2 | 0 | 11 |
| mirror_synthesis | 3 | 2 | 0 | 5 |
| rel_12 | 15 | 0 | 0 | 15 |
| rel_23 | 15 | 0 | 0 | 15 |
| rel_both | 2 | 0 | 0 | 2 |
| arc | 14 | 4 | 0 | 18 |
| resonance | 3 | 0 | 0 | 3 |
| court | 10 | 2 | 0 | 12 |
| court_generic | 0 | 4 | 0 | 4 |
| cta_brief | 0 | 2 | 0 | 2 |
| cta_full | 3 | 0 | 0 | 3 |
| closing | 1 | 0 | 0 | 1 |
| 合計 | 77 | 36 | 0 | 113 |

位置短文 234 筆（approved）；鏡像短文 78 筆（archetype 22、persona 16、situation 40，皆 draft）。

## 2. 每個觸發狀態的變體數

| slot | trigger | exclude | approved | draft |
|---|---|---|---|---|
| opening | {"mode":"A"} |  | 1 | 2 |
| opening | {"mode":"B"} |  | 1 | 2 |
| opening | {"mode":"C"} |  | 0 | 3 |
| exception | {"flags":["all_tens"]} |  | 0 | 1 |
| exception | {"kinds_12":"court-court","kinds_23":"court-court"} |  | 0 | 2 |
| exception | {"kinds_12":"major-major","kinds_23":"major-major","rel_12":"same","rel_23":"same"} |  | 0 | 2 |
| exception | {"rescue_at":["now"]} |  | 0 | 2 |
| exception | {"rescue_count":2} |  | 0 | 1 |
| exception | {"resonance":"pair","arc":"resolve"} |  | 0 | 2 |
| exception | {"resonance":"pair","arc":"rupture"} |  | 0 | 1 |
| exception | {"same_suit_12":true,"same_suit_23":true} |  | 0 | 2 |
| structure | {"major_count":0} | {"mode":["C"]} | 3 | 0 |
| structure | {"major_count":1} | {"mode":["C"]} | 3 | 0 |
| structure | {"major_count":2} | {"mode":["C"]} | 2 | 0 |
| structure | {"major_count":3} | {"mode":["C"]} | 1 | 2 |
| mirror_synthesis | {"mode":"C"} |  | 3 | 2 |
| rel_12 | {"kinds_12":"major-pip"} | {"flags":["both_sides_hostile"]} | 1 | 0 |
| rel_12 | {"kinds_12":"pip-major"} | {"flags":["both_sides_hostile"]} | 1 | 0 |
| rel_12 | {"rel_12":"friendly"} | {"flags":["both_sides_hostile"]} | 3 | 0 |
| rel_12 | {"rel_12":"hostile"} | {"flags":["both_sides_hostile"]} | 3 | 0 |
| rel_12 | {"rel_12":"neutral"} | {"flags":["both_sides_hostile"]} | 3 | 0 |
| rel_12 | {"rel_12":"same","same_suit_12":true} | {"flags":["both_sides_hostile"]} | 1 | 0 |
| rel_12 | {"rel_12":"same"} | {"flags":["both_sides_hostile"]} | 3 | 0 |
| rel_23 | {"kinds_23":"major-pip"} | {"flags":["both_sides_hostile"]} | 1 | 0 |
| rel_23 | {"kinds_23":"pip-major"} | {"flags":["both_sides_hostile"]} | 1 | 0 |
| rel_23 | {"rel_23":"friendly"} | {"flags":["both_sides_hostile"]} | 3 | 0 |
| rel_23 | {"rel_23":"hostile"} | {"flags":["both_sides_hostile"]} | 3 | 0 |
| rel_23 | {"rel_23":"neutral"} | {"flags":["both_sides_hostile"]} | 3 | 0 |
| rel_23 | {"rel_23":"same","same_suit_23":true} | {"flags":["both_sides_hostile"]} | 1 | 0 |
| rel_23 | {"rel_23":"same"} | {"flags":["both_sides_hostile"]} | 3 | 0 |
| rel_both | {"flags":["both_sides_hostile"]} |  | 2 | 0 |
| arc | {"arc":"advance"} |  | 3 | 0 |
| arc | {"arc":"hold"} |  | 3 | 0 |
| arc | {"arc":"repeat"} |  | 2 | 1 |
| arc | {"arc":"resolve"} |  | 2 | 1 |
| arc | {"arc":"rupture"} |  | 1 | 2 |
| arc | {"arc":"settle"} |  | 3 | 0 |
| resonance | {"resonance":"pair"} |  | 3 | 0 |
| court | {"court_present":true,"user_mbti":true,"mbti_relation":"adjacent"} |  | 3 | 0 |
| court | {"court_present":true,"user_mbti":true,"mbti_relation":"exact"} |  | 1 | 2 |
| court | {"court_present":true,"user_mbti":true,"mbti_relation":"opposite"} |  | 3 | 0 |
| court | {"court_present":true,"user_mbti":true,"mbti_relation":"same_temperament"} |  | 3 | 0 |
| court_generic | {"court_present":true,"user_mbti":false,"court_rank":"侍者"} | {"mode":["C"]} | 0 | 1 |
| court_generic | {"court_present":true,"user_mbti":false,"court_rank":"國王"} | {"mode":["C"]} | 0 | 1 |
| court_generic | {"court_present":true,"user_mbti":false,"court_rank":"皇后"} | {"mode":["C"]} | 0 | 1 |
| court_generic | {"court_present":true,"user_mbti":false,"court_rank":"騎士"} | {"mode":["C"]} | 0 | 1 |
| cta_brief | {} |  | 0 | 2 |
| cta_full | {} |  | 3 | 0 |
| closing | {} |  | 1 | 0 |

## 3. register 覆蓋率與長度分布

714 個可達狀態（分析報告以 v4 資料算出 716，v4.1 修正共振後為 714）。

### 目前（僅 approved）

| 指標 | 值 |
|---|---|
| 可達狀態（模式 A） | 714 |
| 每個必要槽 ≥ 1 筆 | 714/714（100.0%） |
| 每個必要槽 ≥ 2 筆 | 0/714（0.0%） |
| 每個必要槽 ≥ 2 筆（不計固定的 closing 與每模式 1–3 筆的 opening） | 501/714（70.2%） |
| register 退回（覆蓋缺口）次數 | 0 |
| < 2 筆的槽次數 | {"opening":714,"structure":44,"closing":714,"arc":32,"rel_23":105,"rel_12":42} |
| exception 命中（A） | 0（0.0%） |
| 必要槽空缺（A） | {"cta_brief":456456} |
| 必要槽空缺（C） | {"opening":14080,"cta_brief":14080} |
| A 精簡版 min／中位／max（預算 330） | 177／210／246 |
| A 完整版 min／中位／max（預算 800） | 425／508／622 |
| C 精簡版 min／中位／max（預算 400） | 245／274／306 |
| C 完整版 min／中位／max（預算 800） | 374／419／504 |
| 超出預算的排列 | 0 |
| 敘事弧分布（A） | hold 16.4%、rupture 7.1%、advance 22.5%、repeat 11.9%、resolve 13.1%、settle 29.1% |

### 草稿核准後預覽（draft 視為 approved）

| 指標 | 值 |
|---|---|
| 可達狀態（模式 A） | 714 |
| 每個必要槽 ≥ 1 筆 | 714/714（100.0%） |
| 每個必要槽 ≥ 2 筆 | 0/714（0.0%） |
| 每個必要槽 ≥ 2 筆（不計固定的 closing 與每模式 1–3 筆的 opening） | 573/714（80.3%） |
| register 退回（覆蓋缺口）次數 | 0 |
| < 2 筆的槽次數 | {"closing":714,"rel_23":105,"rel_12":42} |
| exception 命中（A） | 27375（6.0%） |
| 必要槽空缺（A） | {} |
| 必要槽空缺（C） | {} |
| A 精簡版 min／中位／max（預算 330） | 213／247／287 |
| A 完整版 min／中位／max（預算 800） | 428／541／677 |
| C 精簡版 min／中位／max（預算 400） | 284／355／387 |
| C 完整版 min／中位／max（預算 800） | 460／506／590 |
| 超出預算的排列 | 0 |
| 敘事弧分布（A） | hold 16.4%、rupture 7.1%、advance 22.5%、repeat 11.9%、resolve 13.1%、settle 29.1% |
