#!/bin/sh
# 將已完成的「經絡觀察室」靜態 viewer（PRO 完整版 + 簡易版）複製到 public/meridian-viewer/。
# 只複製可運行網頁與必要授權；排除 source/、開發說明、啟動腳本與系統檔。
# 素材約 285 MB，不納入 git（見 .gitignore），部署前執行本腳本即可。
# 來源資料夾不會被修改；簡易版的站內連結只在部署副本中改寫。
#
# 用法：sh scripts/sync-meridian-viewer.sh [來源資料夾]
set -eu

SRC="${1:-/Users/apple/Documents/Codex/2026-09-25/new-chat/outputs/meridian-preview}"
DEST="$(cd "$(dirname "$0")/.." && pwd)/public/meridian-viewer"

for f in index.html pro.html app.js style.css extended.css lite.html lite.js lite.css assets licenses; do
  [ -e "$SRC/$f" ] || { echo "找不到 $SRC/$f" >&2; exit 1; }
done

mkdir -p "$DEST"
rsync -a --delete \
  --exclude ".DS_Store" \
  --exclude "*.apk" \
  --exclude "node_modules" \
  "$SRC/index.html" "$SRC/pro.html" "$SRC/app.js" "$SRC/style.css" "$SRC/extended.css" \
  "$SRC/lite.html" "$SRC/lite.js" "$SRC/lite.css" \
  "$SRC/assets" "$SRC/licenses" \
  "$DEST/"

# 簡易版的「返回 MUNI」「進入 PRO」改為在最外層開啟 MUNI 外框頁，並依語系（/en）導向，
# 避免在 iframe 內再嵌一層 MUNI 外框。lite.js 另外注入的「進入 PRO」連結以事件委派一併處理。
python3 - "$DEST/lite.html" <<'PY'
import sys
path = sys.argv[1]
s = open(path, encoding="utf-8").read()
subs = [
    ('<a href="https://www.munione.co/" target="_top">', '<a href="/" target="_top" data-muni-home>'),
    ('<a href="pro.html" id="pro-link">', '<a href="/meridian-observatory" id="pro-link" target="_top">'),
]
for old, new in subs:
    if old not in s:
        sys.exit("lite.html 找不到預期連結：" + old)
    s = s.replace(old, new, 1)
script = """<script>(function(){
function prefix(){try{if(new URLSearchParams(location.search).get("lang")==="en")return"/en";if(window.top!==window&&/^\\/en(\\/|$)/.test(window.top.location.pathname))return"/en"}catch(e){}return""}
var p=prefix(),home=p||"/",pro=p+"/meridian-observatory";
function fix(){document.querySelectorAll("a[data-muni-home]").forEach(function(a){a.href=home});document.querySelectorAll('a[href="pro.html"],#pro-link').forEach(function(a){a.href=pro;a.target="_top"})}
document.addEventListener("click",function(ev){var a=ev.target.closest&&ev.target.closest("a");if(!a)return;var h=a.getAttribute("href");if(h==="pro.html"||a.id==="pro-link"){ev.preventDefault();window.top.location.href=pro}else if(a.hasAttribute("data-muni-home")){ev.preventDefault();window.top.location.href=home}},true);
document.addEventListener("DOMContentLoaded",fix);window.addEventListener("load",fix);
})();</script>"""
anchor = '<script src="lite.js'
if anchor not in s:
    sys.exit("lite.html 找不到 lite.js 載入點")
s = s.replace(anchor, script + anchor, 1)
open(path, "w", encoding="utf-8").write(s)
PY

echo "已同步至 $DEST"
du -sh "$DEST"
