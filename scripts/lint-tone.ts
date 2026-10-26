// §6 語氣 lint CLI：對位置短文、模板、鏡像短文一起跑。
//   node --import ./scripts/ts-loader.mjs scripts/lint-tone.ts [--warnings]
// 有 error 即 exit 1；--warnings 時 warning 也列出。
import { defaultLibrary } from "../src/lib/threeCard/index";
import { lintLibrary } from "../src/lib/threeCard/lint";

const showWarnings = process.argv.includes("--warnings");
const lib = defaultLibrary();
const { issues, counts } = lintLibrary(lib);
const errors = issues.filter((i) => i.level === "error");
const warnings = issues.filter((i) => i.level === "warning");
for (const i of errors) console.log(`ERROR    ${i.id}  [${i.rule}] ${i.message}`);
if (showWarnings) for (const i of warnings) console.log(`warning  ${i.id}  [${i.rule}] ${i.message}`);
console.log(`\n模板 ${counts.templates}、位置短文 ${counts.positionText}、鏡像短文 ${counts.mirrorText}：${errors.length} errors，${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
