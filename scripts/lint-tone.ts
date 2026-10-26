// §6 語氣 lint CLI：對位置短文、模板、鏡像短文一起跑。
//   node --import ./scripts/ts-loader.mjs scripts/lint-tone.ts [--warnings] [--only-extra]
//        [--extra-templates <json>] [--extra-mirror <json>] [--lengths]
// 有 error 即 exit 1；--warnings 時 warning 也列出；--extra-* 把草稿檔一併檢查（mirror 檔為 handoff 格式 card_id）；
// --only-extra 只檢查草稿；--lengths 列出每筆字數。
import fs from "node:fs";
import { defaultLibrary } from "../src/lib/threeCard/index";
import { estimateChars, lintLibrary } from "../src/lib/threeCard/lint";
import type { MirrorText, SlotTemplate } from "../src/lib/threeCard/types";

const argv = process.argv.slice(2);
const opt = (n: string) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : undefined; };
const showWarnings = argv.includes("--warnings");
const base = defaultLibrary();
const extraT = opt("--extra-templates") ? (JSON.parse(fs.readFileSync(opt("--extra-templates")!, "utf8")) as SlotTemplate[]) : [];
const extraM = opt("--extra-mirror")
  ? (JSON.parse(fs.readFileSync(opt("--extra-mirror")!, "utf8")) as { card_id: number; mirror: MirrorText["mirror"]; text: MirrorText["text"]; status: MirrorText["status"] }[])
      .map((r) => ({ cardId: r.card_id, mirror: r.mirror, text: r.text, status: r.status }))
  : [];
const lib = argv.includes("--only-extra")
  ? { ...base, templates: extraT, positionText: [], mirrorText: extraM }
  : { ...base, templates: [...base.templates, ...extraT], mirrorText: [...base.mirrorText, ...extraM] };
if (argv.includes("--lengths")) {
  const byId = new Map(base.cards.map((c) => [c.id, c]));
  for (const t of extraT) console.log(`${t.template_id.padEnd(24)} ${t.slot.padEnd(16)} ${estimateChars(t.text.zh)} 字`);
  for (const m of extraM) console.log(`${(byId.get(m.cardId)?.nameZh ?? m.cardId).toString().padEnd(24)} ${m.mirror.padEnd(16)} ${estimateChars(m.text.zh)} 字`);
}
const { issues, counts } = lintLibrary(lib);
const errors = issues.filter((i) => i.level === "error");
const warnings = issues.filter((i) => i.level === "warning");
for (const i of errors) console.log(`ERROR    ${i.id}  [${i.rule}] ${i.message}`);
if (showWarnings) for (const i of warnings) console.log(`warning  ${i.id}  [${i.rule}] ${i.message}`);
console.log(`\n模板 ${counts.templates}、位置短文 ${counts.positionText}、鏡像短文 ${counts.mirrorText}：${errors.length} errors，${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
