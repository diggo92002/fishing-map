# 釣魚紀錄 iPhone PWA

版本：**v0.25.0（測試版）**  
建置日期：**2026-09-03**

這個資料夾已整理成可直接上傳 GitHub Pages 的 PWA 網頁。iPhone 建議使用 Safari 開啟後加入主畫面。

## GitHub 建議名稱

**Repository：`fishing-log-pwa`**

不要把 V25、日期或中文放進 Repository 名稱；版本改用 Git Tag / Release 管理。完整規則請看 `NAMING.md`。

## 上傳 GitHub

1. GitHub 新增 Repository：`fishing-log-pwa`
2. 解壓本 ZIP。
3. 把 **解壓後 `fishing-log-pwa` 資料夾裡的全部檔案** 上傳到 Repository 根目錄。
4. Commit 到 `main`。
5. GitHub：**Settings → Pages → Build and deployment → Deploy from a branch**。
6. Branch 選 **`main`**，Folder 選 **`/ (root)`**，儲存。
7. 等 GitHub Pages 發布完成。

網址通常會是：

`https://你的GitHub帳號.github.io/fishing-log-pwa/`

## iPhone 使用

1. 用 **Safari** 開啟 GitHub Pages 網址。
2. 第一次使用定位時選擇允許位置權限。
3. Safari 下方「分享」→ **加入主畫面**。
4. 主畫面會顯示「釣魚紀錄」圖示，之後可像 App 一樣開啟。

## iOS / GPS 注意事項

- GPS 定位請使用 **HTTPS** 網址；GitHub Pages 本身是 HTTPS。
- 直接從 iPhone「檔案」App 開 `index.html` 時，Service Worker 與定位可能無法正常使用，正式測試請用 GitHub Pages 網址。
- 網頁資料目前存於瀏覽器 `localStorage`。同一個 GitHub Pages 網址更新版本，原本紀錄可繼續保留；清除 Safari 網站資料會清掉本機紀錄。
- 地圖使用 OpenStreetMap 圖磚，地圖內容仍需網路。PWA 會快取網頁本身與必要介面資產。

## 專案檔案

```text
fishing-log-pwa/
├─ index.html
├─ manifest.webmanifest
├─ sw.js
├─ VERSION
├─ NAMING.md
├─ README.md
├─ .nojekyll
├─ .gitignore
└─ assets/
   └─ icons/
      ├─ apple-touch-icon.png
      ├─ icon-192.png
      ├─ icon-512.png
      └─ icon-maskable-512.png
```

## 更新版本

後續不要把 `index.html` 改成 `index_V26.html`。維持 `index.html`，只更新內容與 `VERSION` / Git Tag。這樣 iPhone 主畫面網址不會改。
