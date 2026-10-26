// Node 原生執行 .ts（型別剝除）時，讓無副檔名的相對匯入解析到 .ts／index.ts。
//   node --import ./scripts/ts-loader.mjs --test tests/three-card/*.test.ts
import { register } from "node:module";
register("./ts-resolve-hooks.mjs", import.meta.url);
