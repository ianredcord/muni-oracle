# MUNI 網站 DNS 設定指南

## 網站已成功部署！

**Vercel 預設網址**: https://muni-oracle.vercel.app

## 自訂域名設定

要讓 **munione.co** 指向您的網站，請在您的域名註冊商（DNS 管理介面）添加以下記錄：

### www.munione.co 設定

| Type | Name | Value |
|------|------|-------|
| CNAME | www | e3d8b6e59f6864d9.vercel-dns-017.com. |

### munione.co (根域名) 設定

根域名會自動重定向到 www.munione.co

## 設定步驟

1. 登入您的域名註冊商（如 GoDaddy、Namecheap、Cloudflare 等）
2. 找到 DNS 管理或域名設定頁面
3. 添加上述 CNAME 記錄
4. 等待 DNS 傳播（通常需要幾分鐘到 48 小時）
5. 回到 Vercel 點擊 Refresh 確認設定

## 注意事項

- DNS 記錄生效可能需要一些時間
- 設定完成後，Vercel 會自動為您的域名配置 SSL 憑證
