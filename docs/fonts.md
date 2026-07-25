# 字體：自架子集化 Noto Serif TC

站內 `font-serif`（標題、卡片名稱、箴言）使用 Noto Serif TC。
完整 CJK 字型約 16 MB / 20,939 字形，因此改為**只保留站內實際用到的字元**並自架。

## 現況

- 檔案：`public/fonts/NotoSerifTC-{regular,bold}.woff2`（400 / 700 兩個字重）
- `@font-face` 宣告於 `src/app/globals.css`
- `src/app/layout.tsx` 對 regular 做 `<link rel="preload">`，避免標題等到 CSS 解析完才開始下載

## ⚠️ 新增中文內容後要重跑

新牌卡、新文案若含目前子集沒有的字，該字會**默默回退成系統襯線體**（同段文字出現兩種字型）。
新增內容後請重新產生：

```bash
python3 -m venv .venv
.venv/bin/pip install fonttools brotli
curl -sL -o /tmp/NotoSerifTC.ttf \
  "https://github.com/google/fonts/raw/main/ofl/notoseriftc/NotoSerifTC%5Bwght%5D.ttf"
.venv/bin/python scripts/build-fonts.py /tmp/NotoSerifTC.ttf
```

腳本會掃描 `src/` 下所有 `.ts/.tsx/.json/.md/.css`，收集全部字元後重新子集化，
最後印出缺字檢查。若回報缺字，代表原始字型本身沒有該字形（例如簡體字、罕用穴位名），
這類字回退到系統字體是正常的。

## 為什麼不用 next/font/google

Google Fonts 依 unicode-range 分片，單頁需下載約 1,300 KB 且換頁可能再抓新分片；
還需對 `fonts.googleapis.com` 與 `fonts.gstatic.com` 各建立一次 DNS + TLS，
且流程是序列的（先抓 CSS 才知道要抓哪些字型檔）。
自架同源 + preload 可省下這段延遲，載入後全站命中快取，不再產生字體請求。

授權：Noto Serif TC 為 SIL Open Font License 1.1，允許重新散布與子集化。
