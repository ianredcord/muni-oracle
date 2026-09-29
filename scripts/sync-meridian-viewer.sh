#!/bin/sh
# 將已完成的「經絡觀察室」靜態 viewer（PRO 完整版、核對頁 + 簡易版）複製到 public/meridian-viewer/。
# 只複製可運行網頁與必要授權；排除 source/、開發說明與工作紀錄（*.md、*.py）、啟動腳本與系統檔。
# 素材約 340 MB，不納入 git（見 .gitignore），部署前執行本腳本即可。
# 來源資料夾不會被修改；簡易版的站內連結只在部署副本中改寫。
#
# 用法：sh scripts/sync-meridian-viewer.sh [來源資料夾]
set -eu

SRC="${1:-/Users/apple/Documents/Codex/2026-09-25/new-chat/outputs/meridian-preview}"
DEST="$(cd "$(dirname "$0")/.." && pwd)/public/meridian-viewer"

# PRO 引用的筋膜核對頁
REVIEW_PAGES="fascia-reference-review.html fascia-review.html fascia-review.js arm-fascia-review.html arm-fascia-review.js trunk-fascia-review.html trunk-fascia-review.js sbl-layer-review.html sbl-layer-review.js"

for f in index.html pro.html app.js style.css extended.css lite.html lite.js lite.css $REVIEW_PAGES assets licenses; do
  [ -e "$SRC/$f" ] || { echo "找不到 $SRC/$f" >&2; exit 1; }
done

mkdir -p "$DEST"
# --delete-excluded：已存在於公開副本中、但屬於排除規則的檔案（例如工作紀錄 .md）也一併移除。
rsync -a --delete --delete-excluded \
  --exclude ".DS_Store" \
  --exclude "*.apk" \
  --exclude "node_modules" \
  --exclude "*.py" \
  --exclude "/assets/**.md" \
  "$SRC/index.html" "$SRC/pro.html" "$SRC/app.js" "$SRC/style.css" "$SRC/extended.css" \
  "$SRC/lite.html" "$SRC/lite.js" "$SRC/lite.css" \
  $(for f in $REVIEW_PAGES; do printf '%s/%s ' "$SRC" "$f"; done) \
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
    ('<a href="pro.html" id="pro-link">', '<a href="/meridian-observatory/pro" id="pro-link" target="_top">'),
]
for old, new in subs:
    if old not in s:
        sys.exit("lite.html 找不到預期連結：" + old)
    s = s.replace(old, new, 1)
script = """<script>(function(){
function prefix(){try{if(new URLSearchParams(location.search).get("lang")==="en")return"/en";if(window.top!==window&&/^\\/en(\\/|$)/.test(window.top.location.pathname))return"/en"}catch(e){}return""}
var p=prefix(),home=p||"/",pro=p+"/meridian-observatory/pro";
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

# 核對頁連到的 *.md 是本機工作紀錄，不公開；部署副本中改為純文字，避免失效連結。
python3 - "$DEST" $REVIEW_PAGES <<'PY'
import re, sys, os
dest = sys.argv[1]
for name in sys.argv[2:]:
    if not name.endswith(".html"):
        continue
    path = os.path.join(dest, name)
    s = open(path, encoding="utf-8").read()
    s = re.sub(r'<a\s+href="(?!https?:)[^"]*\.md(?:#[^"]*)?"[^>]*>(.*?)</a>', r"<span>\1</span>", s, flags=re.S)
    open(path, "w", encoding="utf-8").write(s)
PY

echo "已同步至 $DEST"
du -sh "$DEST"
