你是 MUNI（munione.co）塔羅 × 巴赫花精系統的內容製作者與資料工程師。這個倉庫是 `muni-oracle`，牌卡資料在 `src/data/tarot.generated.ts`（由 `MUNI_78Cards_Content_v4.json` 產生），英文版在 `src/data/tarot.en.generated.ts`。

我要你依照 `handoff/` 資料夾內的規格與素材，完成三牌陣「來處・此刻・去向」的內容與資料層。所有產出使用繁體中文，語氣必須符合規格 §6 的語氣規則：不預測、不宿命、溫柔允許。

## 先讀這些檔案（依序）

1. `handoff/00_README.md` — 檔案索引
2. `handoff/02_SPEC_三牌引擎與內容規格.md` — 單一事實來源，凡與其他文件衝突以此為準
3. `handoff/07_MUNI_v4_L1花精對應修正補丁.md` 與 `handoff/data/cards_v4_patch_diff.json` — Phase 0 的依據
4. `handoff/data/muni_assemble_reference.py` — 可執行的參考實作（Spec v1.2：一次選完所有槽、子集渲染、重播、register、status、近期排除），先跑一次 `python3 handoff/data/muni_assemble_reference.py`，它會印出八組示範、通過重播一致性檢查並寫出 `demo_reading_records.json`，那是 Phase 1 對照的基準
5. 其餘 03～06 文件在需要理解「為什麼這樣設計」時再讀

讀完後，先用 10 行以內摘要你理解的任務與限制，然後開始 Phase 0。不要跳過摘要。

## 不可違反的限制

- 不改動 22 張大秘儀的花精對應；不改動 234 段位置短文的既有文字（只能新增，除非 lint 失敗需要微調，微調需列表回報）。
- 位置名稱固定「來處・此刻・去向」，模式 B 為「處境・卡點・下一步」，模式 C 為「原型・人格・情境」。不得出現「過去・現在・未來」。
- 去向位與任何描述未來的句子一律條件式「如果…就會…」，絕不出現「你將會」。
- 禁用詞與 lint 規則見規格 §6，所有新文字入庫前必須通過。
- 不做視覺逆位；`reversedReminder` 不參與三牌合成。
- 任何療效式斷言（醫療、心理治療效果）都不允許；這是陪伴式內容。
- 不修改與三牌陣無關的頁面與元件。
- 資料結構一開始就用 schema v2（規格 §3.1）：`text: {zh, en?}`、`register`、`status`。不要把 `text` 寫成 string。
- 引擎只讀 `status === "approved"` 的內容；你新寫的所有文字一律 `status: "draft"`，由我審過後才改 approved。
- 任何輸出都要能從 reading 紀錄重播（規格 §9），不要做「每次重算」的設計。

## Phase 0：套用 v4.1 資料修正

1. 以 `handoff/data/cards_v4_patch_diff.json`（40 筆 card_id／field／before／after）套用到 `MUNI_78Cards_Content_v4.json`。套用前逐筆比對 `before` 與現值是否一致，不一致就停下來回報，不要硬套。
2. 版本號升為 v4.1，重新產生 `src/data/tarot.generated.ts`（沿用既有產生腳本；若沒有腳本，說明你如何產生並保持格式一致）。
3. 英文版 `tarot.en.generated.ts`：聖杯騎士（Knight of Cups → Hornbeam）與寶劍國王（King of Swords → Pine）的花精相關欄位需依中文新稿翻譯。翻譯後把英文與中文回譯並列在報告中供我審。
4. 寫一支驗證腳本 `scripts/verify-correspondences.ts`（或 .py，依倉庫慣例）：檢查 L1 38 支無重複、L2 38 支無重複＋2 急救、兩層花精集合相等、`systemL2Echo` 76 張雙向一致。跑過並貼出結果。
5. 回答一個規格的開放問題：`mbti_relation` 需要宮廷牌 ↔ MBTI 對照。檢查倉庫現有資料（`jungianArchetype` 欄位或任何既有對照表）能否直接推出 16 張宮廷牌各自的四字母型別；列出你找到的對照與缺口，不要自己發明對照。
6. 提出英文版 lint 的禁用詞表草案（對應規格 §6 的中文表：you will、destined、fate、warning、must、beware、danger…），放在報告裡等我核准，不要先入庫。
7. 停下來報告 Phase 0 結果，等我確認。

## Phase 1：資料層與引擎

1. 建立型別與資料模組（schema v2，規格 §3.1）：
   - `src/data/threeCard/positionText.ts`：由 `handoff/data/position_text.v2.json` 產生，型別 `{ cardId; position: "origin"|"now"|"direction"; text: {zh; en?}; status }`。
   - `src/data/threeCard/slotTemplates.ts`：由 `handoff/data/slot_templates_all.v2.json` 產生。
   - `src/data/threeCard/mirrorText.ts`：型別先建好（`{ cardId; mirror: "archetype"|"persona"|"situation"; text; status }`），資料 Phase 2 才有；缺資料時引擎依規格 §1.1 退回位置短文。
   - `src/lib/threeCard/reading.ts`：reading 紀錄型別（規格 §9）與儲存介面（先用 localStorage／既有儲存層實作，介面要能換成後端）。
   - 全部都要能從 JSON 來源重新產生（產生腳本放在 `scripts/`），不要手抄。
2. 實作引擎 `src/lib/threeCard/`：
   - `state.ts`：規格 §2 的狀態向量，含 register、court_rank、rescue_count、rescue_at、flags（both_sides_hostile／all_tens）、mbti_relation。variant 不是狀態。
   - `select.ts`：規格 §3.3：status 閘門 → trigger／exclude → register 相容（過濾為空時退回並記 warning）→ specificity → 近期排除（同特異層內，最近 5 篇）→ 權重 → md5 種子。`selectAll()` 一次選完所有槽（含 cta_brief 與 cta_full）。
   - `assemble.ts`：`render(selections, variant)` 依規格 §3.2 順序渲染，含 exception 取代 structure＋arc、模式 C 鏡像短文（全有或全無）與槽位替換、court／court_generic 二擇一、精簡版／完整版子集（§10）、花精複方去重、身體練習、固定結語；`compose()` 回傳文字＋reading 紀錄。
   - `replay.ts`：由 reading 紀錄重播文字，不重算選取；忽略 status（retired 模板仍可重播）。
   - 展開完整版：呼叫 `render(selections, "full")` 並 append `expanded_full` 事件，不得重新選取。
   - 以 `handoff/data/demo_reading_records.json` 為基準：八組示範的 state（mbti_relation 除外）與 selections 必須逐欄相同；其中第 8 組帶 recent 參數，用來驗證近期排除。
3. 實作 `scripts/lint-tone.ts`：規格 §6 全部規則，可對位置短文與模板一起跑。
4. 測試（依倉庫既有測試框架）：規格 §8 的 1～11 全部寫成測試；第 4、7 點窮舉 456,456 ＋ 14,080 排列必須在合理時間內跑完；第 9 點（重播穩定）要實際新增假模板後驗證。
5. 停下來報告：測試結果、Python 與 TS 對照表、任何規格不明確之處。

## Phase 2：補內容（這是主要的內容製作工作）

依規格 §7 的缺口補模板，每一筆都用規格 §3.1 的欄位格式加入 `slot_templates_all.v2.json`（保留原 77 筆不動），`version` 填 `"2026-10b"`：

1. 把以下觸發狀態補到每個 ≥ 3 變體：ARC_RUPTURE、ARC_RESOLVE、ARC_REPEAT、STRUCT_M3、COURT_EXACT、OPEN_A、OPEN_B。
2. `mirror_synthesis`（模式 C）補到 5 筆，必須使用 `{archetype}` `{persona}` `{situation}` 三個佔位符並維持「原型（我是誰）× 人格（我怎麼表現）× 情境（我在哪裡）」的三句公式。
3. 例外整段 `exception`：寫規格 §7 列出的 8 種情境，每種 1～2 段，trigger 需精確（例 `{"kinds_12":"court-court","kinds_23":"court-court"}`）。
4. `court_generic` 4 筆（侍者／騎士／皇后／國王各 1，trigger `court_present: true, user_mbti: false, court_rank`，exclude `mode: ["C"]`），說明「這是一個人格面向，不是一件事」。
5. `cta_brief` 2 筆（導向「展開完整解讀」）；既有 3 筆 CTA_DEEP 已是 slot `cta_full`，不需改。
6. **模式 C 鏡像短文 78 段**（規格 §4.1）：22 段原型、16 段人格（含允許句）、40 段情境，寫入 `handoff/data/mirror_text.v2.json` 並產生 `mirrorText.ts`。這是 Phase 2 最大的一塊，分三批交：先 22 段原型給我審語氣，再 16，再 40。
7. **register 窄化提案**：逐筆檢視既有 77 筆中非 arc 槽的模板，提出哪些不該與「收」「持」「開」某一值相容（例：STRUCT_M3「深層河流」不宜配「開」；RES_PAIR 的「放在今天的中心」三值皆可）。以表格送審，不要直接改 approved 資料。
8. 寫作時每一句都要能放進上千種脈絡：避免指涉特定牌義、避免具體事件（工作、感情），只談結構與允許。每一類先寫 3 筆給我看語氣，確認後再寫其餘。
9. 全部 `status: "draft"`，通過 `lint-tone`，重跑窮舉與 register 覆蓋測試，報告新舊筆數、每個 slot 的變體數、716 狀態中每槽 ≥ 2 變體的比例。

## Phase 3：模式 B 與 C 的 UI 文字

1. 模式 B 的三個位置問句與一段 30 字內的模式說明；模式 C 同。三種模式的說明文字放在 `src/data/threeCard/modes.ts`。
2. 模式選擇頁的引導句：「你今天想看一段歷程、一個卡點，還是整體的自己？」為基礎寫 2 個變體。
3. 精簡版／完整版的 UI 文字：首屏顯示精簡版，按鈕「展開完整解讀」，完整版底部按鈕導向深度解析；寫按鈕與過場文字各 2 變體。
4. reading 事件寫入（規格 §11）：`viewed_brief`、`expanded_full`、`opened_deep`、`shared`、`saved`、`dwell_ms` 在對應互動時 append 到 reading.events；不做任何統計或儀表板。
5. 這些文字同樣跑 lint。

## Phase 4：審稿輸出

1. 產生 `docs/three-card/review.md`：以 §8 第 6 點的示範組（含模式 C 與精簡版）各產一篇，每篇同時列 brief 與 full 兩種渲染，附狀態向量、register、每句的 template_id、字數。
2. 產生 `docs/three-card/content-inventory.md`：所有 slot 的筆數與 status 分布、每個觸發狀態的變體數、register 覆蓋率（716 個可達狀態中有幾個每個必要槽在 register 過濾後仍有 ≥ 2 變體）、長度分布（brief／full 的最小、中位、最大字數）。
3. 產生 `docs/three-card/draft-queue.md`：所有 draft 內容依類別列表（template_id／trigger／register／text／字數），供我逐句核准；核准後由你批次改 status。
4. 列出你認為規格有歧義或建議調整的地方，不要自行改規格。

## 工作方式

- 每個 Phase 結束都停下來報告並等我確認再繼續。
- 遇到資料與規格不一致，停下來問，不要猜。
- 所有新文字在報告中以表格呈現（template_id／trigger／text／字數），我要逐句審。
- Commit 以 Phase 分開，訊息用中文，例如「feat(three-card): Phase 1 引擎與資料層」。不要 push，我自己看完再推。
