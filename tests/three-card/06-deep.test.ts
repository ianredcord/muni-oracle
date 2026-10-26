// 深度層：六型走向各 ≥ 1 筆 approved、依 reading_id 穩定、文字通過規則。
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { defaultDeepText, pickBlendDeep, pickDeep, pickRelationDeep, type Arc } from "../../src/lib/threeCard/index";
import { lintFreeText } from "../../src/lib/threeCard/lint";
import { composeDemo } from "./helpers";

describe("深度層走向解說", () => {
  const rows = defaultDeepText();
  it("六型各 ≥ 1 筆 approved，且都含「如果」與「允許」", () => {
    for (const arc of ["rupture", "resolve", "repeat", "advance", "settle", "hold"] as Arc[]) {
      const c = rows.filter((r) => r.kind === "arc" && r.status === "approved" && r.trigger.arc === arc);
      assert.ok(c.length >= 1, arc);
      for (const r of c) {
        assert.ok(r.text.zh.includes("如果") && r.text.zh.includes("允許"), r.deepId);
        assert.deepEqual(lintFreeText(r.deepId, r.text.zh).filter((i) => i.level === "error"), []);
      }
    }
  });
  it("同一 reading_id 兩次結果相同；不同 id 會輪替", () => {
    const c = composeDemo([41, 1, 18]);
    const a = pickDeep(rows, "arc", c.record.state, "r-1"), b = pickDeep(rows, "arc", c.record.state, "r-1");
    assert.ok(a && b && a.deepId === b.deepId);
    const ids = new Set(["r-1", "r-2", "r-3", "r-4", "r-5", "r-6"].map((s) => pickDeep(rows, "arc", c.record.state, s)!.deepId));
    assert.ok(ids.size > 1);
    assert.equal(pickDeep(rows, "relation", c.record.state, "r-1"), null, "尚無關係解說");
  });
});

describe("深度層關係與複方解說", () => {
  const rows = defaultDeepText();
  it("四種元素關係、兩種大牌小牌相鄰、同花色、三個複方角色各 ≥ 1 筆 approved", () => {
    for (const rel of ["same", "friendly", "hostile", "neutral"]) assert.ok(rows.some((r) => r.kind === "relation" && r.status === "approved" && r.trigger.rel === rel), rel);
    for (const k of ["major-pip", "pip-major"]) assert.ok(rows.some((r) => r.kind === "relation" && r.status === "approved" && r.trigger.kinds === k), k);
    assert.ok(rows.some((r) => r.kind === "relation" && r.status === "approved" && r.trigger.same_suit === true));
    for (const role of ["main", "release", "support"]) assert.ok(rows.some((r) => r.kind === "blend" && r.status === "approved" && r.trigger.role === role), role);
    for (const r of rows) assert.deepEqual(lintFreeText(r.deepId, r.text.zh).filter((i) => i.level === "error"), [], r.deepId);
  });
  it("關係解說優先序：同花色 > 大牌小牌 > 元素關係", () => {
    const sameSuit = composeDemo([23, 24, 1]).record.state; // 權杖一→權杖二 同花色
    assert.match(pickRelationDeep(rows, "12", sameSuit, "r")!.deepId, /SAME_SUIT/);
    const pipMajor = composeDemo([41, 1, 18]).record.state; // 聖杯五→愚者
    assert.match(pickRelationDeep(rows, "12", pipMajor, "r")!.deepId, /PIP_MAJOR/);
    assert.match(pickRelationDeep(rows, "23", pipMajor, "r")!.deepId, /DEEP_REL_(SAME|FRIENDLY|HOSTILE|NEUTRAL)_/); // 愚者→星星 皆大秘儀 → 退回元素關係
  });
  it("複方角色三筆可取且穩定", () => {
    for (const role of ["main", "release", "support"] as const) {
      const a = pickBlendDeep(rows, role, "x"), b = pickBlendDeep(rows, role, "x");
      assert.ok(a && b && a.deepId === b.deepId);
    }
  });
});
