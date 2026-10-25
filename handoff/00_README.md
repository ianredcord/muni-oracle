# MUNI 三牌陣交接包（2026-10-25）

## 使用步驟

1. 把整個 `handoff/` 資料夾放進 `muni-oracle` 倉庫根目錄。
2. 把 `handoff/CLAUDE.md.three-card` 的內容附加到倉庫根目錄的 `CLAUDE.md`（沒有就新建）。
3. 在倉庫根目錄啟動 Claude Code，貼上 `handoff/PASTE_TO_CLAUDE_CODE.md` 全文。
4. 建議先放行到 Phase 1，確認引擎與八組基準一致後，再放行 Phase 2 的內容製作。

## 檔案索引

| 檔案 | 用途 | 讀者 |
|---|---|---|
| `PASTE_TO_CLAUDE_CODE.md` | 直接貼給 Claude Code 的全文（不含使用說明） | 你貼給 Claude Code |
| `CLAUDE.md.three-card` | 附加到倉庫根目錄 `CLAUDE.md` 的規範段落，讓 Claude Code 每次啟動都讀到硬限制 | 你附加到 CLAUDE.md |
| `01_CLAUDE_CODE_PROMPT.md` | 同上提示詞，含使用說明 | 參考 |
| `02_SPEC_三牌引擎與內容規格.md` | 單一事實來源（v1.2）：狀態向量、六型敘事弧、schema v2、register 相容、選取演算法、鏡像短文、lint、reading 紀錄、精簡版／完整版、驗收測試 | Claude Code 必讀 |
| `03_…組合數與敘事架構分析報告.md` | 為什麼是 456,456 種排列、716 個狀態、壓縮比 1,220:1；設計推理 | 背景 |
| `04_…slot_templates_首批.md` | 敘事弧 14 筆＋關係句 26 筆的審稿版與設計說明 | 背景 |
| `05_…slot_templates_第二批.md` | 結構句、特異關係句、共振、宮廷牌 MBTI、開場收尾、三面鏡 37 筆 | 背景 |
| `06_…position_text_234段_審稿版.md` | 234 段位置短文全文、寫作規則、組裝示範 | 背景；Phase 2 寫新句時對照語氣 |
| `07_…v4_L1花精對應修正補丁.md` | Phase 0 的依據：為何改宮廷牌不改大秘儀、40 筆欄位變更、兩張牌 11 欄位新稿 | Phase 0 必讀 |

## data/

| 檔案 | 內容 |
|---|---|
| `cards_v4_patch_diff.json` | 40 筆 `{card_id, nameZh, field, before, after}`，套用到 `MUNI_78Cards_Content_v4.json` |
| `cards_v4_patched.json` | 套用後的 78 張完整資料（與 `tarot.generated.ts` 欄位相同），供引擎與測試直接讀取 |
| `position_text.v2.json` / `position_text.csv` | 234 段位置短文，schema v2（`text: {zh}`、`status: approved`）；CSV 為審稿用的扁平版 |
| `slot_templates_all.v2.json` / `slot_templates_all.csv` | 77 筆槽模板，schema v2（`text: {zh}`、`register`、`status`）；CSV 為審稿用的扁平版 |
| `mirror_text.v2.json` | 尚不存在；Phase 2 由 Claude Code 產出 78 段模式 C 鏡像短文 |
| `muni_assemble_reference.py` | 參考實作（Python，無相依套件，Spec v1.2）：執行後印出八組示範、通過重播一致性檢查並寫出 `demo_reading_records.json` |
| `demo_reading_records.json` | 八組示範的 reading 紀錄（state ＋ selections，含一組 recent 排除示範），TypeScript 引擎的對照基準 |
| `stats.json` | 456,456 排列的窮舉統計（元素關係、大秘儀張數、敘事弧分布等），供測試比對 |

## 已鎖定的決策（不要重開）

- 位置名「來處・此刻・去向」；模式 C 三面鏡保留敘事弧；V2 無視覺逆位。
- v4.1：大秘儀對應不動，聖杯騎士 → Hornbeam 角樹、寶劍國王 → Pine 松樹；聖杯四回響改為命運之輪。
- 共振須跨 L1／L2 兩層；複方同支自動合併為 2 支。
- 去向永遠條件式「如果…就會…」，絕不「你將會」。
- schema v2：`text` 多語物件、`register` 三值、`status` 閘門；引擎只用 approved。
- 抽牌時一次選完所有槽並寫入 reading 紀錄，重看重播不重算；近期 5 篇同槽排除（同特異層內）。
- 首屏精簡版 A/B ≤ 330、C ≤ 400 字，完整版 ≤ 800 字；模式 C 用 78 段鏡像短文（全有或全無）。
