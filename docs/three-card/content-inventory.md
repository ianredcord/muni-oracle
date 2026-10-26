# 三牌陣內容盤點（2026-10-26 產生）

## 1. 模板筆數與 status

| slot | approved | draft | retired | 合計 |
|---|---|---|---|---|
| opening | 9 | 0 | 0 | 9 |
| exception | 13 | 0 | 0 | 13 |
| structure | 11 | 0 | 0 | 11 |
| mirror_synthesis | 5 | 0 | 0 | 5 |
| rel_12 | 15 | 0 | 0 | 15 |
| rel_23 | 15 | 0 | 0 | 15 |
| rel_both | 2 | 0 | 0 | 2 |
| arc | 18 | 0 | 0 | 18 |
| resonance | 3 | 0 | 0 | 3 |
| court | 12 | 0 | 0 | 12 |
| court_generic | 4 | 0 | 0 | 4 |
| cta_brief | 2 | 0 | 0 | 2 |
| cta_full | 3 | 0 | 0 | 3 |
| closing | 1 | 0 | 0 | 1 |
| 合計 | 113 | 0 | 0 | 113 |

位置短文 234 筆（approved）；鏡像短文 78 筆（archetype 22、persona 16、situation 40，皆 draft）。

## 2. 每個觸發狀態的變體數

| slot | trigger | exclude | approved | draft |
|---|---|---|---|---|
| opening | {"mode":"A"} |  | 3 | 0 |
| opening | {"mode":"B"} |  | 3 | 0 |
| opening | {"mode":"C"} |  | 3 | 0 |
| exception | {"flags":["all_tens"]} |  | 1 | 0 |
| exception | {"kinds_12":"court-court","kinds_23":"court-court"} |  | 2 | 0 |
| exception | {"kinds_12":"major-major","kinds_23":"major-major","rel_12":"same","rel_23":"same"} |  | 2 | 0 |
| exception | {"rescue_at":["now"]} |  | 2 | 0 |
| exception | {"rescue_count":2} |  | 1 | 0 |
| exception | {"resonance":"pair","arc":"resolve"} |  | 2 | 0 |
| exception | {"resonance":"pair","arc":"rupture"} |  | 1 | 0 |
| exception | {"same_suit_12":true,"same_suit_23":true} |  | 2 | 0 |
| structure | {"major_count":0} | {"mode":["C"]} | 3 | 0 |
| structure | {"major_count":1} | {"mode":["C"]} | 3 | 0 |
| structure | {"major_count":2} | {"mode":["C"]} | 2 | 0 |
| structure | {"major_count":3} | {"mode":["C"]} | 3 | 0 |
| mirror_synthesis | {"mode":"C"} |  | 5 | 0 |
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
| arc | {"arc":"repeat"} |  | 3 | 0 |
| arc | {"arc":"resolve"} |  | 3 | 0 |
| arc | {"arc":"rupture"} |  | 3 | 0 |
| arc | {"arc":"settle"} |  | 3 | 0 |
| resonance | {"resonance":"pair"} |  | 3 | 0 |
| court | {"court_present":true,"user_mbti":true,"mbti_relation":"adjacent"} |  | 3 | 0 |
| court | {"court_present":true,"user_mbti":true,"mbti_relation":"exact"} |  | 3 | 0 |
| court | {"court_present":true,"user_mbti":true,"mbti_relation":"opposite"} |  | 3 | 0 |
| court | {"court_present":true,"user_mbti":true,"mbti_relation":"same_temperament"} |  | 3 | 0 |
| court_generic | {"court_present":true,"user_mbti":false,"court_rank":"侍者"} | {"mode":["C"]} | 1 | 0 |
| court_generic | {"court_present":true,"user_mbti":false,"court_rank":"國王"} | {"mode":["C"]} | 1 | 0 |
| court_generic | {"court_present":true,"user_mbti":false,"court_rank":"皇后"} | {"mode":["C"]} | 1 | 0 |
| court_generic | {"court_present":true,"user_mbti":false,"court_rank":"騎士"} | {"mode":["C"]} | 1 | 0 |
| cta_brief | {} |  | 2 | 0 |
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
