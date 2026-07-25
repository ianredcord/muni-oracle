#!/usr/bin/env python3
"""
產生自架子集化襯線體（public/fonts/NotoSerifTC-{regular,bold}.woff2）。

用途：站內 font-serif 使用 Noto Serif TC。完整 CJK 字型約 16MB / 20,939 字形，
      這支腳本只保留站內實際會出現的字元，並切出 400 / 700 兩個字重。

⚠️ 新增中文內容（新牌卡、新文案）後請重跑，否則新字會回退成系統襯線體。

用法：
    python3 -m venv .venv && .venv/bin/pip install fonttools brotli
    curl -sL -o /tmp/NotoSerifTC.ttf \
      "https://github.com/google/fonts/raw/main/ofl/notoseriftc/NotoSerifTC%5Bwght%5D.ttf"
    .venv/bin/python scripts/build-fonts.py /tmp/NotoSerifTC.ttf

跑完會印出缺字檢查結果；若有缺字代表原始字型本身沒收錄該字形。
"""
import os
import sys

try:
    from fontTools.ttLib import TTFont
    from fontTools.varLib.instancer import instantiateVariableFont
    from fontTools.subset import Subsetter, Options
except ImportError:
    sys.exit("需要 fonttools 與 brotli：pip install fonttools brotli")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIRS = [os.path.join(ROOT, "src")]
OUT_DIR = os.path.join(ROOT, "public/fonts")
SCAN_EXTS = {".ts", ".tsx", ".json", ".md", ".css"}
SKIP_DIRS = {"node_modules", ".next", ".git", "worktrees"}

# 保底字元：介面可能動態組出、但不一定出現在原始碼的符號
BASELINE = set()
BASELINE.update(chr(c) for c in range(0x20, 0x7F))
BASELINE.update("　、。〈〉《》「」『』【】〔〕〖〗・…‥※§¶")
BASELINE.update("！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～")
BASELINE.update("０１２３４５６７８９")
BASELINE.update("←→↑↓★☆♥♡●○◆◇■□▲△▼▽✕✓✔✗♪†‡")
BASELINE.update("—–‐‑·•‧′″‵〝〞“”‘’")
BASELINE.update("①②③④⑤⑥⑦⑧⑨⑩")
BASELINE.update("αβγδεθλμπσφω")
BASELINE.update("℃℉°％‰±×÷≈≠≤≥∞√∴∵")


def collect_chars() -> set[str]:
    chars: set[str] = set()
    files = 0
    for root in SRC_DIRS:
        for dirpath, dirnames, filenames in os.walk(root):
            dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
            for fn in filenames:
                if os.path.splitext(fn)[1] not in SCAN_EXTS:
                    continue
                try:
                    chars.update(
                        open(os.path.join(dirpath, fn), encoding="utf-8").read()
                    )
                except (UnicodeDecodeError, OSError):
                    continue
                files += 1
    chars |= BASELINE
    chars = {c for c in chars if c.isprintable() or c == " "}
    print(f"掃描 {files} 個檔案，收集 {len(chars)} 個字元")
    return chars


def build(src_ttf: str, chars: set[str]) -> None:
    os.makedirs(OUT_DIR, exist_ok=True)
    for fn in os.listdir(OUT_DIR):
        if fn.endswith(".woff2"):
            os.remove(os.path.join(OUT_DIR, fn))

    unicodes = {ord(c) for c in chars}
    total = 0
    for weight, label in [(400, "regular"), (700, "bold")]:
        font = TTFont(src_ttf)
        if "fvar" in font:
            instantiateVariableFont(
                font, {"wght": weight}, inplace=True, updateFontNames=False
            )
        opts = Options()
        opts.flavor = "woff2"
        opts.hinting = False
        opts.desubroutinize = False
        opts.layout_features = ["kern", "liga", "locl", "ccmp", "mark", "mkmk"]
        opts.name_IDs = [1, 2, 3, 4, 6]
        opts.drop_tables = ["BASE", "vhea", "vmtx"]

        subsetter = Subsetter(options=opts)
        subsetter.populate(unicodes=unicodes)
        subsetter.subset(font)

        out = os.path.join(OUT_DIR, f"NotoSerifTC-{label}.woff2")
        font.flavor = "woff2"
        font.save(out)
        size = os.path.getsize(out)
        total += size
        print(f"  {label} (weight {weight}): {size // 1024} KB / {font['maxp'].numGlyphs} 字形")
        font.close()
    print(f"合計 {total // 1024} KB → {OUT_DIR}")


def verify(chars: set[str]) -> None:
    font = TTFont(os.path.join(OUT_DIR, "NotoSerifTC-regular.woff2"))
    cmap = set(font.getBestCmap().keys())
    cjk = {c for c in chars if "一" <= c <= "鿿"}
    missing = sorted(c for c in cjk if ord(c) not in cmap)
    if missing:
        print(f"\n⚠️ 有 {len(missing)} 個中文字未收錄（原始字型本身缺少字形）：")
        print("   " + "".join(missing))
        print("   這些字會回退到系統襯線體。")
    else:
        print("\n✅ 全站中文字皆已收錄，無缺字。")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    src = sys.argv[1]
    if not os.path.exists(src):
        sys.exit(f"找不到原始字型：{src}")
    site_chars = collect_chars()
    build(src, site_chars)
    verify(site_chars)
