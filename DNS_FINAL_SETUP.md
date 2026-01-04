# MUNI 網站 DNS 設定指南

## 網站狀態

- **Vercel 預設網址**：https://muni-oracle.vercel.app ✅ 正常運作
- **自訂域名**：munione.co（DNS 設定中）

## Vercel 建議的 DNS 記錄

根據 Vercel 的建議，請在 Spaceship 設定以下 DNS 記錄：

| Type | Name | Value |
|------|------|-------|
| **CNAME** | www | `e3d8b6e59f6864d9.vercel-dns-017.com.` |

### 注意事項

- 舊的記錄 `cname.vercel-dns.com` 和 `76.76.21.21` 仍然可以使用
- Vercel 建議使用新的記錄以獲得更好的效能
- DNS 傳播可能需要幾分鐘到數小時

## 當前設定狀態

- **munione.co**：Invalid Configuration（需要設定 A 記錄）
- **www.munione.co**：DNS Change Recommended（建議更新 CNAME）
- **muni-oracle.vercel.app**：Valid Configuration ✅
