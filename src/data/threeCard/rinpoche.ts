// 三牌陣 × 仁波切的話：整局一句的配對（docs/three-card/rinpoche-pairing.md）。
// 只存 52 句箴言的 id；文字與出處在 src/data/mingyur.ts，不在此重複。
import { md5Mod } from "../../lib/threeCard/md5";
import type { Arc, State } from "../../lib/threeCard/types";

/** 走向 × 候選箴言 id（每型 3 句） */
export const ARC_TO_MINGYUR: Record<Arc, number[]> = {
  rupture: [35, 45, 6], // 無常不是失去，是打開
  resolve: [31, 27, 15], // 心轉、覺察與悲心同步、知足即富
  repeat: [37, 24, 19], // 慣性可被看見、可改寫
  advance: [20, 16, 46], // 在路上的語氣
  settle: [10, 44, 29], // 退一步、停頓、放下期待
  hold: [25, 36, 51], // 當下與覺知
};

/** 例外（優先於走向），依序檢查 */
export function rinpocheException(s: State): number | null {
  if (s.rescue_count >= 2) return 22; // 兩張急救：永恆的覺知無法被奪走
  if (s.rescue_at.includes("now")) return 34; // 急救在此刻：專注呼吸
  if (s.resonance === "pair") return 3; // 雙層共振：疾病的因就是藥
  return null;
}

/** 整局一句：例外優先，否則依走向候選以 reading_id 穩定挑一句 */
export function pickRinpocheId(s: State, readingId: string): number {
  const ex = rinpocheException(s);
  if (ex) return ex;
  const c = ARC_TO_MINGYUR[s.arc];
  return c[md5Mod(`${readingId}|rinpoche`, c.length)];
}
