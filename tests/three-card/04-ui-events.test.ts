// Phase 3：UI 文字通過 §6、模式說明 ≤ 30 字、位置名固定、事件寫入順序。
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { MODE_DESCRIPTION_MAX_CHARS, MODE_TEXT } from "../../src/data/threeCard/modes";
import { ALL_UI_TEXT, pickVariant } from "../../src/data/threeCard/uiText";
import { countChars, createTracker, MemoryReadingStore } from "../../src/lib/threeCard/index";
import { lintFreeText } from "../../src/lib/threeCard/lint";
import { composeDemo } from "./helpers";

describe("Phase 3 UI 文字", () => {
  it("位置名固定：來處・此刻・去向／處境・卡點・下一步／原型・人格・情境", () => {
    assert.deepEqual(Object.values(MODE_TEXT.A.positions), ["來處", "此刻", "去向"]);
    assert.deepEqual(Object.values(MODE_TEXT.B.positions), ["處境", "卡點", "下一步"]);
    assert.deepEqual(Object.values(MODE_TEXT.C.positions), ["原型", "人格", "情境"]);
    const all = JSON.stringify(MODE_TEXT) + JSON.stringify(ALL_UI_TEXT);
    for (const w of ["過去", "現在", "未來"]) assert.ok(!all.includes(w), `UI 文字含「${w}」`);
  });
  it("模式說明 ≤ 30 字；去向問句為條件式", () => {
    for (const m of Object.values(MODE_TEXT)) {
      assert.ok(countChars(m.description) <= MODE_DESCRIPTION_MAX_CHARS, `${m.mode} 說明 ${countChars(m.description)} 字`);
      if (m.mode !== "C") assert.ok(m.questions.direction.includes("如果"), `${m.mode} 去向問句須含「如果」`);
    }
  });
  it("全部 UI 文字通過 §6 共用規則", () => {
    const issues = [];
    for (const m of Object.values(MODE_TEXT)) {
      issues.push(...lintFreeText(`${m.mode}/description`, m.description));
      for (const [k, q] of Object.entries(m.questions)) issues.push(...lintFreeText(`${m.mode}/${k}`, q));
    }
    for (const g of ALL_UI_TEXT) for (const x of g.variants) issues.push(...lintFreeText(x.id, x.text));
    assert.deepEqual(issues.filter((i) => i.level === "error"), []);
  });
  it("每組至少 2 個變體（引導句 3）；pickVariant 以種子穩定", () => {
    for (const g of ALL_UI_TEXT) assert.ok(g.variants.length >= 2, g.group);
    const g = ALL_UI_TEXT[0].variants;
    assert.equal(pickVariant(g, "r-1").id, pickVariant(g, "r-1").id);
    assert.ok(new Set(["r-1", "r-2", "r-3", "r-4", "r-5"].map((s) => pickVariant(g, s).id)).size > 1);
  });
});

describe("§11 事件寫入", () => {
  it("viewed_brief → expanded_full → opened_deep → shared → saved → dwell_ms 依序 append，不做統計", async () => {
    const store = new MemoryReadingStore();
    const c = composeDemo([41, 1, 18], { variant: "brief", readingId: "r-events" });
    await store.save(c.record);
    let t = 0;
    const tracker = createTracker(store, "r-events", () => `2026-10-26T00:00:0${t++}Z`, () => 1000 * t);
    await tracker.viewedBrief();
    await tracker.expandedFull();
    await tracker.openedDeep();
    await tracker.shared({ channel: "line" });
    await tracker.saved();
    tracker.startDwell();
    const r = await tracker.stopDwell();
    assert.deepEqual(r!.events.map((e) => e.type), ["viewed_brief", "expanded_full", "opened_deep", "shared", "saved", "dwell_ms"]);
    assert.deepEqual(r!.events[3].meta, { channel: "line" });
    assert.equal(typeof r!.events[5].meta?.ms, "number");
    assert.deepEqual(r!.selections, c.record.selections, "事件不改動 selections");
    assert.equal(await tracker.stopDwell(), null, "未 start 時不寫入");
    assert.equal(await createTracker(store, "nope").saved(), null, "不存在的紀錄回傳 null");
  });
});
