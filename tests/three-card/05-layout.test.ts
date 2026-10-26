// 體驗流程 v2：segments → 區塊分配無遺漏；精簡版／完整版各自完整；此刻位允許句可拆出。
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { replay } from "../../src/lib/threeCard/index";
import { blendRows, layoutReading, splitAllow } from "../../src/lib/threeCard/layout";
import { composeDemo, lib } from "./helpers";

const SAMPLES_A: [number, number, number][] = [[41, 1, 18], [20, 32, 48], [59, 64, 45], [12, 13, 14], [46, 60, 23]];
const SAMPLES_C: [number, number, number][] = [[1, 48, 23], [12, 63, 53], [20, 36, 74], [22, 50, 46]];

describe("layoutReading", () => {
  it("每個模板 slot 都被分配，三段短文齊全，此刻位拆出允許句", () => {
    for (const [ids, mode] of [...SAMPLES_A.map((x) => [x, "A"] as const), ...SAMPLES_C.map((x) => [x, "C"] as const)]) {
      const c = composeDemo(ids, { mode });
      for (const variant of ["brief", "full"] as const) {
        const segs = replay(lib, c.record, variant).segments;
        const L = layoutReading(segs);
        const slots = segs.filter((s) => s.kind === "template").map((s) => (s as { slot: string }).slot);
        assert.deepEqual(L.assigned, slots);
        assert.deepEqual(L.positions.map((p) => p.position), ["origin", "now", "direction"]);
        const now = L.positions[1];
        assert.ok(now.allow && now.allow.length > 0, `${ids} ${mode} 此刻位缺允許句`);
        assert.ok(!now.lead.includes("允許句："));
        assert.ok(L.arc || L.exception, "arc 或 exception 至少一個");
        assert.ok(L.closing && L.cta);
        if (variant === "full") { assert.ok(L.blend && L.body); assert.ok(L.rel12 || L.relBoth || mode === "C"); }
        else { assert.equal(L.blend, undefined); assert.equal(L.rel12, undefined); }
      }
    }
  });
  it("splitAllow 去掉前綴與句號", () => {
    assert.deepEqual(splitAllow("此刻可以放下——葡萄藤（Vine）陪你。允許句：我允許自己放下。"), { lead: "此刻可以放下——葡萄藤（Vine）陪你。", allow: "我允許自己放下" });
    assert.deepEqual(splitAllow("沒有允許句"), { lead: "沒有允許句", allow: null });
  });
  it("blendRows 與引擎去重一致（同支合併為 2 支）", () => {
    const rows = blendRows(["Pine", "Pine", "Gorse"]);
    assert.deepEqual(rows.map((r) => [r.role, r.cardIndex, r.merged]), [["main", 1, false], ["release", 0, true], ["support", 2, false]]);
    const c = composeDemo([59, 64, 45]);
    assert.match(c.rendered.text, /共 2 支/);
  });
});
