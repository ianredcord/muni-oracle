// §8 第 4、7、8 點：窮舉、長度預算、register 覆蓋。
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { candidates } from "../../src/lib/threeCard/index";
import { exhaustiveOnce, lib, median, minMax, requiredSlots } from "./helpers";

describe("§8.4 窮舉 456,456（A）＋ 14,080（C）", () => {
  it("模式 A：無例外、必要槽不空、無未替換佔位符", () => {
    const st = exhaustiveOnce("A");
    assert.equal(st.n, 456456);
    console.log(`  A exception 命中 ${st.exceptions}（${((st.exceptions / st.n) * 100).toFixed(1)}%）`);
    assert.deepEqual(st.errors, []);
    assert.deepEqual(st.unreplaced, []);
    assert.deepEqual([...st.missingRequired].filter(([s]) => s !== "cta_brief"), []);
  });
  it("模式 C：無例外、必要槽不空、無未替換佔位符", () => {
    const st = exhaustiveOnce("C");
    assert.equal(st.n, 14080);
    assert.deepEqual(st.errors, []);
    assert.deepEqual(st.unreplaced, []);
    // opening 在模式 C 無模板（§7 未列 OPEN_C），與 cta_brief 同列已知缺口
    assert.deepEqual([...st.missingRequired].filter(([s]) => s !== "cta_brief" && s !== "opening"), []);
  });
  it("敘事弧分布與 §2.2 參考值相符（±0.2%）", () => {
    const st = exhaustiveOnce("A");
    const ref: Record<string, number> = { rupture: 7.1, resolve: 13.1, repeat: 11.9, advance: 22.5, settle: 29.1, hold: 16.4 };
    for (const [arc, pct] of Object.entries(ref)) {
      const got = ((st.arcs.get(arc) ?? 0) / st.n) * 100;
      assert.ok(Math.abs(got - pct) <= 0.2, `${arc} ${got.toFixed(2)}% vs ${pct}%`);
    }
  });
  it("可達狀態數（分析報告 03 以 v4 資料算出 716；v4.1 修正共振後為 714）", () => {
    assert.equal(exhaustiveOnce("A").states.size, 714);
  });
});

describe("§8.7 長度預算", () => {
  it("A 精簡版 ≤ 330、完整版 ≤ 800（全排列）", () => {
    const st = exhaustiveOnce("A");
    assert.deepEqual(st.overBudget.slice(0, 5), []);
    const b = st.chars.brief, f = st.chars.full;
    console.log(`  A brief min/med/max ${minMax(b)[0]}/${median(b)}/${minMax(b)[1]}；full ${minMax(f)[0]}/${median(f)}/${minMax(f)[1]}`);
  });
  it("C 精簡版 ≤ 400、完整版 ≤ 800（全排列）", () => {
    const st = exhaustiveOnce("C");
    assert.deepEqual(st.overBudget.slice(0, 5), []);
    const b = st.chars.brief, f = st.chars.full;
    console.log(`  C brief min/med/max ${minMax(b)[0]}/${median(b)}/${minMax(b)[1]}；full ${minMax(f)[0]}/${median(f)}/${minMax(f)[1]}`);
  });
});

describe("§8.8 register 覆蓋", () => {
  it("716 個可達狀態中每個必要槽在 register 過濾後 ≥ 1 筆；≥ 2 筆比例列印", () => {
    const st = exhaustiveOnce("A");
    let ok2 = 0, ok2NoClosing = 0, ok2Rotating = 0;
    const fallback: string[] = [];
    const perSlot = new Map<string, { lt2: number }>();
    for (const [key, s] of st.states) {
      let all2 = true, all2NoClosing = true, all2Rotating = true;
      for (const slot of requiredSlots(s, "A")) {
        const { pool, registerFallback } = candidates(lib, slot, s);
        assert.ok(pool.length >= 1, `${key} ${slot} 無候選`);
        if (registerFallback) fallback.push(`${key} ${slot}`);
        if (pool.length < 2) {
          all2 = false;
          if (slot !== "closing") all2NoClosing = false; // closing 為固定句，不輪替
          if (slot !== "closing" && slot !== "opening") all2Rotating = false; // opening 每模式各 1 筆（§7 列為偏少）
          const e = perSlot.get(slot) ?? { lt2: 0 }; e.lt2++; perSlot.set(slot, e);
        }
      }
      if (all2) ok2++;
      if (all2NoClosing) ok2NoClosing++;
      if (all2Rotating) ok2Rotating++;
    }
    assert.deepEqual(fallback, [], "register 退回（覆蓋缺口）");
    const n = st.states.size;
    console.log(`  每槽 ≥ 2 變體的狀態：${ok2}/${n}（${((ok2 / n) * 100).toFixed(1)}%）；不計 closing：${ok2NoClosing}/${n}（${((ok2NoClosing / n) * 100).toFixed(1)}%）；不計 closing＋opening：${ok2Rotating}/${n}（${((ok2Rotating / n) * 100).toFixed(1)}%）；<2 的槽次數：${JSON.stringify(Object.fromEntries([...perSlot].map(([k, v]) => [k, v.lt2])))}`);
  });
});
