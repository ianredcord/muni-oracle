// 深度層：六型走向各 ≥ 1 筆 approved、依 reading_id 穩定、文字通過規則。
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { defaultDeepText, pickDeep, type Arc } from "../../src/lib/threeCard/index";
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
