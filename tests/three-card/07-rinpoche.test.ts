// 仁波切的話：六型各 3 句、例外優先、穩定挑選、id 都在 52 句內。
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { ARC_TO_MINGYUR, pickRinpocheId, rinpocheException } from "../../src/data/threeCard/rinpoche";
import { composeDemo } from "./helpers";

describe("仁波切的話配對", () => {
  it("六型各 3 句，id 在 1–52 且不重複", () => {
    const all = Object.values(ARC_TO_MINGYUR).flat();
    assert.equal(all.length, 18);
    assert.equal(new Set(all).size, 18);
    for (const id of all) assert.ok(id >= 1 && id <= 52);
  });
  it("例外優先：共振 → 3、急救在此刻 → 34、兩張急救 → 22", () => {
    assert.equal(pickRinpocheId(composeDemo([23, 1, 18]).record.state, "r"), 3); // 權杖一→愚者→星星 共振
    assert.equal(pickRinpocheId(composeDemo([1, 60, 23]).record.state, "r"), 34); // 寶劍十在此刻
    assert.equal(pickRinpocheId(composeDemo([46, 1, 60]).record.state, "r"), 22); // 兩張急救
    assert.equal(rinpocheException(composeDemo([41, 1, 18]).record.state), null);
  });
  it("無例外時依走向候選，同一 reading_id 穩定，不同 id 會輪替", () => {
    const s = composeDemo([41, 1, 18]).record.state; // resolve
    const a = pickRinpocheId(s, "r-1");
    assert.ok(ARC_TO_MINGYUR.resolve.includes(a));
    assert.equal(pickRinpocheId(s, "r-1"), a);
    assert.ok(new Set(["a", "b", "c", "d", "e", "f"].map((x) => pickRinpocheId(s, x))).size > 1);
  });
});
