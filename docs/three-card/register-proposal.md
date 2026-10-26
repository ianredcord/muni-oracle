# register 窄化提案（Phase 2 第 7 項，送審用）

> **裁決（2026-10-26）：不套用。** 使用者決定既有模板的 register 維持「收・持・開」三值；本文件保留作為日後若要窄化的參考，資料未改。

對象：既有 77 筆中非 arc 槽的 63 筆模板。目前除 arc 外一律標「收・持・開」三值相容；以下逐筆檢視句子的溫度，提出不宜相容的值。**未改 approved 資料**，核准後由我批次改 `register`。

判準：
- 收（rupture／settle）：收攏、沉下、回落、換軌。
- 持（hold／repeat）：持平、延續、熟悉。
- 開（advance／resolve）：推進、長出、整合、打開。
- 句子沒有明顯溫度（只描述結構或關係）→ 維持三值。

## 提議窄化（14 筆）

| template_id | slot | 現值 | 提案 | 理由 |
|---|---|---|---|---|
| REL23_SAME_01 | rel_23 | 收持開 | 持・開 | 「同一股能量更成熟的樣子」是成長語，配回落／換軌不合 |
| REL23_SAME_02 | rel_23 | 收持開 | 收・持 | 「繼續往深處走」是沉降語，配推進／整合偏離 |
| REL23_SAME_03 | rel_23 | 收持開 | 持・開 | 「不需要轉彎，只需要繼續」與斷裂型的換軌矛盾 |
| REL23_FRIENDLY_02 | rel_23 | 收持開 | 持・開 | 「自然被延續下去」是延續語 |
| REL23_NEUTRAL_01 | rel_23 | 收持開 | 持・開 | 「開放的位置」偏開；回落時方向多半已被現狀帶著走 |
| REL23_MAJOR_PIP_01 | rel_23 | 收持開 | 持・開 | 「會以一件很具體的事長出來」是生長語 |
| STRUCT_M1_01 | structure | 收持開 | 收・持 | 「深層的河流」是沉降意象，配推進／整合偏離（你舉的例） |
| STRUCT_M2_01 | structure | 收持開 | 收・持 | 「多陪自己幾天，不必在今天想清楚」是放慢語 |
| STRUCT_M3_01 | structure | 收持開 | 收・持 | 「一個人生章節的輪廓」偏沉、偏慢 |
| REL12_HOSTILE_02 | rel_12 | 收持開 | 持・開 | 「鬆動的開始」是開端語，斷裂／回落時讀起來過於樂觀 |
| COURT_OPPOSITE_03 | court | 收持開 | 持・開 | 「會多出一條路」是打開語 |
| CTA_DEEP_01 | cta_full | 收持開 | 維持三值 | 中性；列出只為說明 CTA 類全部不窄化 |
| RES_PAIR_03 | resonance | 收持開 | 維持三值 | 「放在今天的中心」三值皆可（你舉的例） |
| MIRROR_C_03 | mirror_synthesis | 收持開 | 維持三值 | 「如果彼此拉扯，也不是錯」在三種溫度下都成立 |

## 維持三值（49 筆）

REL12_SAME_01–03、REL12_FRIENDLY_01–03、REL12_HOSTILE_01／03、REL12_NEUTRAL_01–03、REL23_FRIENDLY_01／03、REL23_HOSTILE_01–03、REL23_NEUTRAL_02／03、REL_BOTH_HOSTILE_01／02、STRUCT_M0_01–03、STRUCT_M1_02／03、STRUCT_M2_02、REL12_SAMESUIT_01、REL23_SAMESUIT_01、REL12_MAJOR_PIP_01、REL12_PIP_MAJOR_01、REL23_PIP_MAJOR_01、RES_PAIR_01／02、COURT_SAME_TEMPERAMENT_01–03、COURT_ADJACENT_01–03、COURT_OPPOSITE_01／02、COURT_EXACT_01、OPEN_A_01、OPEN_B_01、CTA_DEEP_02／03、CLOSE_01、MIRROR_C_01／02。

理由：這些句子描述的是結構（元素關係、大秘儀張數、宮廷與本命的關係）或導引，本身沒有溫度。

## 窄化後的覆蓋影響（預估）

窄化的 11 筆都屬於每個觸發值有 ≥ 3 變體的槽（rel_23 各關係 3 筆、structure M1 3 筆、M2 2 筆、M3 1 筆）。需要留意：
- STRUCT_M2 只有 2 筆，窄化 M2_01 後「開」只剩 M2_02 一筆；
- STRUCT_M3 目前 1 筆，窄化後「開」會退回未過濾（register 退回 warning）——Phase 2 已排定補 STRUCT_M3 到 ≥ 3 筆，其中至少 1 筆需相容「開」；
- REL23_SAME 窄化後「收」只剩 SAME_02 一筆、「開」剩 SAME_01／03。

核准後我會重跑 register 覆蓋測試並回報每槽 ≥ 2 的比例變化。
