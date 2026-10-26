// §8 第 5、6、9、10、11 點：決定性、示範組、重播、近期排除、鏡像退回。
import assert from "node:assert/strict";
import fs from "node:fs";
import { describe, it } from "node:test";
import { candidates, compose, computeState, expandFull, recentFrom, replay, toAnnotatedText, type Library, type MirrorText, type ReadingRecord, type SlotName, type SlotTemplate, type TriggerValue } from "../../src/lib/threeCard/index";
import { composeDemo, DATE, lib, USER } from "./helpers";

const demoRecords = JSON.parse(fs.readFileSync("handoff/data/demo_reading_records.json", "utf8")) as ReadingRecord[];
const demoTexts = JSON.parse(fs.readFileSync("tests/three-card/fixtures/python-demo-texts.json", "utf8")) as { reading_id: string; brief: string; full: string }[];

const SAMPLES: [number, number, number][] = [[41, 1, 18], [20, 32, 48], [59, 64, 45], [5, 70, 33], [12, 13, 14], [30, 44, 58], [77, 2, 9], [66, 51, 36]];

describe("§8.5 決定性", () => {
  it("同 (user, date, cards, recent) 兩次 selections 完全相同", () => {
    for (const ids of SAMPLES) {
      const a = composeDemo(ids), b = composeDemo(ids);
      assert.deepEqual(a.record.selections, b.record.selections);
      assert.deepEqual(a.record.state, b.record.state);
    }
  });
  it("不同 date 至少在一個槽產生差異（抽樣）", () => {
    const dates = ["2026-10-25", "2026-10-26", "2026-10-27", "2026-11-01", "2026-12-31"];
    let differing = 0;
    for (const ids of SAMPLES) {
      const sels = dates.map((d) => JSON.stringify(compose(lib, ids, { userId: USER, createdAt: d }).record.selections));
      if (new Set(sels).size > 1) differing++;
    }
    assert.ok(differing >= SAMPLES.length - 1, `${differing}/${SAMPLES.length}`);
  });
  it("brief 的每一句都出現在 full 中（cta 除外）", () => {
    for (const ids of SAMPLES) for (const mode of ["A", "C"] as const) {
      const c = compose(lib, ids, { userId: USER, createdAt: DATE, mode });
      const full = replay(lib, c.record, "full").segments.map((s) => s.text);
      for (const s of replay(lib, c.record, "brief").segments) {
        if (s.kind === "template" && s.slot === "cta_brief") continue;
        assert.ok(full.includes(s.text), `${ids} ${mode}: 「${s.text.slice(0, 20)}」不在 full`);
      }
    }
  });
});

describe("§8.6 示範組與 Python 基準逐欄相同", () => {
  demoRecords.forEach((r, i) => {
    it(`${r.reading_id} ${r.cards.join("→")} ${r.mode}/${r.initial_variant}`, () => {
      const recent = i === 7 ? { arc: [demoRecords[0].selections.arc!] } : undefined;
      const c = compose(lib, r.cards, { userId: r.user_id, createdAt: r.created_at, mode: r.mode, variant: r.initial_variant, recent, readingId: r.reading_id });
      assert.deepEqual({ ...c.record.state, mbti_relation: null }, { ...r.state, mbti_relation: null });
      assert.deepEqual(c.record.selections, r.selections);
      assert.deepEqual(c.record.chars, r.chars);
      assert.equal(toAnnotatedText(replay(lib, c.record, "brief")), demoTexts[i].brief);
      assert.equal(toAnnotatedText(replay(lib, c.record, "full")), demoTexts[i].full);
      assert.deepEqual(c.warnings, []);
    });
  });
  it("太陽 → 權杖十 → 聖杯騎士 不得共振；寶劍九 → 寶劍國王 → 聖杯九 共振且複方 2 支", () => {
    assert.equal(composeDemo([20, 32, 48]).record.state.resonance, "none");
    const c = composeDemo([59, 64, 45]);
    assert.equal(c.record.state.resonance, "pair");
    assert.match(c.text, /共 2 支/);
  });
});

describe("§8.9 重播穩定", () => {
  const FAKE_SLOTS: [SlotName, Record<string, TriggerValue>][] = [["arc", { arc: "resolve" }], ["structure", { major_count: 2 }], ["rel_12", { rel_12: "neutral" }], ["rel_23", { rel_23: "same" }], ["opening", { mode: "A" }]];
  const fakes: SlotTemplate[] = Array.from({ length: 10 }, (_, i) => ({
    template_id: `FAKE_${i}`, slot: FAKE_SLOTS[i % 5][0], trigger: FAKE_SLOTS[i % 5][1],
    exclude: {}, text: { zh: `假模板 ${i}，如果你允許它存在，它只用來測試重播是否不受新增影響。` },
    register: ["收", "持", "開"], weight: 3, tone_tags: [], length_chars: { zh: 30 }, status: "approved", version: "test", note: "",
  }));
  const lib2: Library = { ...lib, templates: [...lib.templates, ...fakes] };
  it("新增 10 筆模板後，同一紀錄重播文字完全相同", () => {
    for (const ids of SAMPLES) {
      const c = composeDemo(ids);
      assert.equal(replay(lib2, c.record, "full").text, replay(lib, c.record, "full").text);
      assert.equal(replay(lib2, c.record, "brief").text, replay(lib, c.record, "brief").text);
    }
  });
  it("新增模板確實會改變新抽牌的選取（至少一組）", () => {
    const changed = SAMPLES.some((ids) => JSON.stringify(compose(lib2, ids, { userId: USER, createdAt: DATE }).record.selections) !== JSON.stringify(composeDemo(ids).record.selections));
    assert.ok(changed);
  });
  it("retired 模板仍可重播，但不再被選取", () => {
    const c = composeDemo([41, 1, 18]);
    const arcId = c.record.selections.arc!;
    const lib3: Library = { ...lib, templates: lib.templates.map((t) => (t.template_id === arcId ? { ...t, status: "retired" } : t)) };
    assert.equal(replay(lib3, c.record, "full").text, replay(lib, c.record, "full").text);
    assert.notEqual(compose(lib3, [41, 1, 18], { userId: USER, createdAt: DATE }).record.selections.arc, arcId);
  });
  it("展開完整版不重新選取，只 append expanded_full", () => {
    const c = composeDemo([41, 1, 18], { variant: "brief" });
    const { rendered, record } = expandFull(lib, c.record, "2026-10-25T10:00:00Z");
    assert.equal(rendered.text, replay(lib, c.record, "full").text);
    assert.deepEqual(record.selections, c.record.selections);
    assert.deepEqual(record.events.map((e) => e.type), ["expanded_full"]);
  });
});

describe("§8.10 近期排除", () => {
  it("同一狀態連續 k 篇，每槽 template_id 互不相同；超過候選數後允許重複但特異層不降", () => {
    const ids: [number, number, number] = [41, 1, 18];
    const s = computeState(...(ids.map((id) => lib.cards.find((c) => c.id === id)!) as [never, never, never]));
    const records: ReadingRecord[] = [];
    const seenPerSlot = new Map<string, string[]>();
    for (let k = 0; k < 7; k++) {
      const recent = recentFrom(records.slice(-5));
      const c = compose(lib, ids, { userId: USER, createdAt: `2026-11-${String(k + 1).padStart(2, "0")}`, recent });
      records.push(c.record);
      for (const [slot, id] of Object.entries(c.record.selections)) {
        const { pool } = candidates(lib, slot as SlotName, s);
        const spec = Math.max(...pool.map((t) => Object.keys(t.trigger).length));
        const chosen = lib.templates.find((t) => t.template_id === id)!;
        assert.equal(Object.keys(chosen.trigger).length, spec, `${slot} 第 ${k + 1} 篇降到較低特異層`);
        const seen = seenPerSlot.get(slot) ?? [];
        const limit = Math.min(pool.length, 5);
        if (k < limit) assert.ok(!seen.includes(id), `${slot} 第 ${k + 1} 篇重複 ${id}（候選 ${pool.length}）`);
        seen.push(id); seenPerSlot.set(slot, seen);
      }
    }
  });
});

describe("§8.11 鏡像退回", () => {
  const mk = (cardId: number, mirror: MirrorText["mirror"], status: MirrorText["status"]): MirrorText => ({
    cardId, mirror, status,
    text: { zh: mirror === "persona"
      ? "此刻你拿出來的樣子是先感受再行動——角樹（Hornbeam）陪你讓身體先動。允許句：我允許自己在還沒準備好的感覺裡，先踏出一小步。"
      : mirror === "archetype" ? "這一面在你身上是對未知的信任，不是定義你，而是你每次重新開始時的那種輕。" : "你所在的場有一股剛點燃的張力。如果你允許它從小處開始，起點會自己長出方向。" },
  });
  it("三張皆 approved → 整篇用鏡像短文；任一 draft → 整篇退回位置短文", () => {
    const ids: [number, number, number] = [1, 48, 23];
    const libM: Library = { ...lib, mirrorText: [mk(1, "archetype", "approved"), mk(48, "persona", "approved"), mk(23, "situation", "approved")] };
    const a = compose(libM, ids, { userId: USER, createdAt: DATE, mode: "C" });
    assert.deepEqual(a.rendered.segments.filter((x) => x.kind === "position").map((x) => (x as { source: string }).source), ["mirror", "mirror", "mirror"]);
    const libD: Library = { ...libM, mirrorText: libM.mirrorText.map((m) => (m.cardId === 23 ? { ...m, status: "draft" } : m)) };
    const b = compose(libD, ids, { userId: USER, createdAt: DATE, mode: "C" });
    assert.deepEqual(b.rendered.segments.filter((x) => x.kind === "position").map((x) => (x as { source: string }).source), ["position", "position", "position"]);
    assert.deepEqual(a.record.selections, b.record.selections, "鏡像有無不影響選取");
  });
});
