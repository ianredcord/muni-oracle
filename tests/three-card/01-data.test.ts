// §8 第 1、2、3 點：資料完整、位置短文、模板。
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { isRescue, kind, layer, type Card } from "../../src/lib/threeCard/index";
import { lintPositionText, lintTemplate } from "../../src/lib/threeCard/lint";
import { exhaustiveOnce, KNOWN_GAP_SLOTS, lib } from "./helpers";

/**
 * 規格與既有資料的衝突，待使用者裁決（Phase 1 報告）。
 * 在裁決前這些 id 不列入失敗；「已知衝突應為空」另以 todo 標記。
 */
const KNOWN_CONFLICTS = new Set<string>([
  "REL23_SAME_02", "REL23_SAME_03", "REL23_FRIENDLY_03", "REL23_NEUTRAL_01", "REL23_NEUTRAL_02", "REL23_NEUTRAL_03", // rel_23 缺「如果／允許」
  "寶劍國王/now", // 「判決」不在「不是」之後（v4.1 新稿）
]);

describe("§8.1 資料完整", () => {
  const cards = lib.cards;
  const byZh = new Map(cards.map((c) => [c.nameZh, c]));
  it("78 張", () => assert.equal(cards.length, 78));
  it("L1 38 支無重複、L2 38 支無重複＋2 急救、兩層集合相等", () => {
    const L1 = cards.filter((c) => layer(c) === "L1"), L2 = cards.filter((c) => layer(c) === "L2");
    assert.equal(L1.length, 38); assert.equal(L2.length, 40);
    const s1 = new Set(L1.map((c) => c.bachFlowerEn)); assert.equal(s1.size, 38);
    const l2 = L2.filter((c) => !isRescue(c)).map((c) => c.bachFlowerEn); assert.equal(new Set(l2).size, 38); assert.equal(L2.filter(isRescue).length, 2);
    assert.deepEqual([...s1].sort(), [...new Set(l2)].sort());
  });
  it("systemL2Echo 76 張雙向一致", () => {
    const resolve = (echo: string): Card | undefined => echo.split(/\s+/).map((t) => byZh.get(t)).find(Boolean);
    for (const c of cards) {
      if (isRescue(c)) { assert.equal(c.systemL2Echo, "—"); continue; }
      const t = resolve(c.systemL2Echo);
      assert.ok(t, `${c.nameZh} echo 無法解析`);
      assert.equal(t.bachFlowerEn, c.bachFlowerEn, `${c.nameZh}→${t.nameZh}`);
      assert.notEqual(layer(t), layer(c));
      assert.equal(resolve(t.systemL2Echo)?.id, c.id, `${c.nameZh} 回指錯誤`);
    }
  });
  it("宮廷牌 16 張都有 MBTI、彼此不同", () => {
    const courts = cards.filter((c) => kind(c) === "court");
    assert.equal(courts.length, 16);
    assert.equal(new Set(courts.map((c) => c.mbti)).size, 16);
    for (const c of courts) assert.match(c.mbti!, /^[EI][SN][TF][JP]$/);
  });
});

describe("§8.2 位置短文", () => {
  it("234 筆、(card, position) 唯一、文字無重複", () => {
    assert.equal(lib.positionText.length, 234);
    assert.equal(new Set(lib.positionText.map((p) => `${p.cardId}|${p.position}`)).size, 234);
    assert.equal(new Set(lib.positionText.map((p) => p.text.zh)).size, 234);
  });
  it("全部 approved 並通過 §6（已知衝突除外）", () => {
    const byId = new Map(lib.cards.map((c) => [c.id, c]));
    const errors = lib.positionText.flatMap((p) => lintPositionText(p, byId.get(p.cardId)!)).filter((i) => i.level === "error" && !KNOWN_CONFLICTS.has(i.id));
    assert.deepEqual(errors, []);
    assert.ok(lib.positionText.every((p) => p.status === "approved"));
  });
});

describe("§8.3 模板", () => {
  it("77 筆既有模板通過 §6（已知衝突除外）", () => {
    const errors = lib.templates.flatMap(lintTemplate).filter((i) => i.level === "error" && !KNOWN_CONFLICTS.has(i.id));
    assert.deepEqual(errors, []);
  });
  it("已知規格衝突清單應為空", { todo: "待使用者裁決 rel_23 六筆與寶劍國王「判決」" }, () => {
    assert.equal(KNOWN_CONFLICTS.size, 0);
  });
  it("每個必要槽在每個可達狀態都有 ≥ 1 筆可選模板（模式 A）", () => {
    const st = exhaustiveOnce("A");
    const missing = [...st.missingRequired].filter(([slot]) => !KNOWN_GAP_SLOTS.includes(slot));
    assert.deepEqual(missing, []);
  });
  it("cta_brief 每個狀態都有模板", { skip: "Phase 2 補 cta_brief 2 筆後啟用" }, () => {
    assert.equal(exhaustiveOnce("A").missingRequired.get("cta_brief") ?? 0, 0);
  });
});
