import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

export async function resolve(specifier, context, next) {
  if ((specifier.startsWith("./") || specifier.startsWith("../") || specifier.startsWith("/")) && !/\.(ts|mts|js|mjs|cjs|json)$/.test(specifier) && context.parentURL) {
    const base = new URL(specifier, context.parentURL).href;
    for (const suffix of [".ts", ".mts", "/index.ts"]) {
      if (existsSync(fileURLToPath(base + suffix))) return next(base + suffix, context);
    }
  }
  return next(specifier, context);
}
