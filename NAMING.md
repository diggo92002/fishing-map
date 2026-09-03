# 命名規則

## 1. GitHub Repository
- 固定名稱：`fishing-log-pwa`
- 規則：全小寫英文 + `-`，不使用空白、中文或版本號。
- 原因：GitHub Pages 網址固定，之後升級不需要換網址。

## 2. 專案內檔名
- 首頁：`index.html`
- PWA：`manifest.webmanifest`
- Service Worker：`sw.js`
- iOS 圖示：`assets/icons/apple-touch-icon.png`
- PWA 圖示：`assets/icons/icon-192.png`、`icon-512.png`、`icon-maskable-512.png`
- 原則：專案內正式檔名不加 V25/V26，避免網址與快取一直改。

## 3. 版本
目前測試版：`v0.25.0`

建議：
- 新功能：`v0.26.0`、`v0.27.0`
- 小修正：`v0.25.1`、`v0.25.2`
- 確認穩定正式使用：`v1.0.0`
- 正式版小修：`v1.0.1`
- 正式版新增功能：`v1.1.0`

## 4. ZIP / Release 檔名
格式：`fishing-log-pwa_v版本_YYYYMMDD.zip`

本次：`fishing-log-pwa_v0.25.0_20260903.zip`

## 5. Git Commit 建議
- `feat: 新增釣點文字分享`
- `fix: 修正 iPhone GPS 定位顯示`
- `ui: 調整釣獲紀錄排序`
- `chore: 更新 PWA 圖示與版本`
