#!/bin/sh
# 將已完成的「經絡觀察室」靜態 viewer 複製到 public/meridian-viewer/。
# 只複製可運行網頁與必要授權；排除 source/、開發說明、啟動腳本與系統檔。
# 素材約 266 MB，不納入 git（見 .gitignore），部署前執行本腳本即可。
#
# 用法：sh scripts/sync-meridian-viewer.sh [來源資料夾]
set -eu

SRC="${1:-/Users/apple/Documents/Codex/2026-09-25/new-chat/outputs/meridian-preview}"
DEST="$(cd "$(dirname "$0")/.." && pwd)/public/meridian-viewer"

for f in index.html app.js style.css extended.css assets licenses; do
  [ -e "$SRC/$f" ] || { echo "找不到 $SRC/$f" >&2; exit 1; }
done

mkdir -p "$DEST"
rsync -a --delete \
  --exclude ".DS_Store" \
  --exclude "*.apk" \
  --exclude "node_modules" \
  "$SRC/index.html" "$SRC/app.js" "$SRC/style.css" "$SRC/extended.css" \
  "$SRC/assets" "$SRC/licenses" \
  "$DEST/"

echo "已同步至 $DEST"
du -sh "$DEST"
