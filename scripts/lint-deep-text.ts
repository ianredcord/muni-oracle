// 深度層文字 lint：§6 共用規則＋必含「如果」與「允許」＋字數 120–240。
//   node --import ./scripts/ts-loader.mjs scripts/lint-deep-text.ts [path]
import fs from "node:fs";
import { countChars } from "../src/lib/threeCard/assemble";
import { lintFreeText } from "../src/lib/threeCard/lint";

const path = process.argv[2] ?? "handoff/data/deep_text.v2.json";
const rows = JSON.parse(fs.readFileSync(path, "utf8")) as { deep_id: string; kind: "arc" | "relation" | "blend"; text: { zh: string } }[];
/** 各類字數範圍（deep-layer-design §2.2–2.4） */
const RANGE = { arc: [120, 240], relation: [100, 180], blend: [70, 130] } as const;
let errors = 0;
for (const r of rows) {
  const z = r.text.zh;
  const issues = lintFreeText(r.deep_id, z).filter((i) => i.level === "error").map((i) => i.message);
  if (!(z.includes("如果") && z.includes("允許"))) issues.push("必含「如果」與「允許」");
  const n = countChars(z);
  const [lo, hi] = RANGE[r.kind] ?? [70, 240];
  if (n < lo || n > hi) issues.push(`字數 ${n}，須在 ${lo}–${hi}`);
  if (issues.length) { errors += issues.length; console.log(`ERROR ${r.deep_id}: ${issues.join("；")}`); }
}
console.log(`${rows.length} 段：${errors} errors`);
process.exit(errors ? 1 : 0);
