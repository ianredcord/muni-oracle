// 驗證 78 張牌的花精對應（規格 §8 第 1 點）。
//   node scripts/verify-correspondences.ts [--json src/data/MUNI_78Cards_Content_v4.1.json]
// 檢查：78 張；L1（大秘儀＋宮廷）38 支無重複；L2（數字牌）38 支無重複＋2 急救；
//       兩層花精集合相等；systemL2Echo 76 張雙向一致；tarot.generated.ts 與 JSON 產出一致；
//       （若存在）handoff/data/cards_v4_patched.json 與產出逐欄相同。
import fs from "node:fs";
import { buildCards, renderTs } from "./generate-tarot.mjs";

type Card = {
  id: number; nameZh: string; nameEn: string; suit: string; number?: string;
  bachFlowerEn?: string; systemL2Echo?: string; [k: string]: unknown;
};

const argv = process.argv.slice(2);
const opt = (n: string, d: string) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d; };
const JSON_PATH = opt("--json", "src/data/MUNI_78Cards_Content_v4.1.json");
const TS_PATH = "src/data/tarot.generated.ts";
const PATCHED_PATH = "handoff/data/cards_v4_patched.json";

const cards = buildCards(JSON_PATH, "src/data/tarot.meta.json") as unknown as Card[];
const kind = (c: Card) => (c.suit === "major" ? "major" : c.number ? "pip" : "court");
const layer = (c: Card) => (kind(c) === "pip" ? "L2" : "L1");
const isRescue = (c: Card) => (c.bachFlowerEn ?? "").includes("Rescue");

let failures = 0;
const check = (ok: boolean, label: string, detail = "") => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}${detail ? `  ${detail}` : ""}`);
  if (!ok) failures++;
};

check(cards.length === 78, "78 張", `${cards.length}`);

const L1 = cards.filter((c) => layer(c) === "L1");
const L2 = cards.filter((c) => layer(c) === "L2");
const dup = (xs: string[]) => xs.filter((x, i) => xs.indexOf(x) !== i);
const l1 = L1.map((c) => c.bachFlowerEn ?? "");
check(L1.length === 38 && new Set(l1).size === 38 && !L1.some(isRescue), "L1 38 支無重複、無急救", `${L1.length} 張，重複：${dup(l1).join(",") || "無"}`);
const l2single = L2.filter((c) => !isRescue(c)).map((c) => c.bachFlowerEn ?? "");
const rescue = L2.filter(isRescue);
check(L2.length === 40 && l2single.length === 38 && new Set(l2single).size === 38 && rescue.length === 2,
  "L2 38 支無重複＋2 急救", `${L2.length} 張，急救：${rescue.map((c) => c.nameZh).join("、")}，重複：${dup(l2single).join(",") || "無"}`);
const s1 = new Set(l1), s2 = new Set(l2single);
const only1 = [...s1].filter((x) => !s2.has(x)), only2 = [...s2].filter((x) => !s1.has(x));
check(only1.length === 0 && only2.length === 0, "兩層花精集合相等", `僅 L1：${only1.join(",") || "無"}；僅 L2：${only2.join(",") || "無"}`);

// systemL2Echo：以牌名中文（nameZh）出現在 echo 字串中解析目標牌
const byZh = new Map(cards.map((c) => [c.nameZh, c]));
const resolveEcho = (echo: string): Card | undefined => {
  const tokens = echo.split(/\s+/);
  for (const t of tokens) if (byZh.has(t)) return byZh.get(t);
  return undefined;
};
const echoProblems: string[] = [];
for (const c of cards) {
  if (isRescue(c)) { if (c.systemL2Echo !== "—") echoProblems.push(`${c.nameZh} 急救牌 echo 應為 —`); continue; }
  const t = c.systemL2Echo ? resolveEcho(c.systemL2Echo) : undefined;
  if (!t) { echoProblems.push(`${c.nameZh} echo「${c.systemL2Echo}」無法解析`); continue; }
  if (t.bachFlowerEn !== c.bachFlowerEn) echoProblems.push(`${c.nameZh}(${c.bachFlowerEn}) → ${t.nameZh}(${t.bachFlowerEn}) 花精不同`);
  if (layer(t) === layer(c)) echoProblems.push(`${c.nameZh} → ${t.nameZh} 同層`);
  const back = t.systemL2Echo ? resolveEcho(t.systemL2Echo) : undefined;
  if (back?.id !== c.id) echoProblems.push(`${c.nameZh} → ${t.nameZh} 回指「${t.systemL2Echo}」≠ ${c.nameZh}`);
}
check(echoProblems.length === 0, "systemL2Echo 76 張雙向一致", echoProblems.join("；") || `${cards.length - rescue.length} 張`);

// tarot.generated.ts 與 JSON 一致（忽略兩行標頭）
const strip = (s: string) => s.split("\n").slice(2).join("\n");
const rendered = renderTs(cards, "", "");
check(strip(fs.readFileSync(TS_PATH, "utf8")) === strip(rendered), `${TS_PATH} 由 ${JSON_PATH} 產出一致`);

if (fs.existsSync(PATCHED_PATH)) {
  const patched = JSON.parse(fs.readFileSync(PATCHED_PATH, "utf8")) as Card[];
  const diffs: string[] = [];
  cards.forEach((c, i) => {
    const p = patched[i];
    for (const k of new Set([...Object.keys(c), ...Object.keys(p ?? {})])) if (c[k] !== p?.[k]) diffs.push(`#${c.id} ${k}`);
  });
  check(diffs.length === 0, `${PATCHED_PATH} 與產出逐欄相同`, diffs.slice(0, 10).join("，") || "78 張");
}

console.log(failures ? `\n${failures} 項失敗` : "\n全部通過");
process.exit(failures ? 1 : 0);
