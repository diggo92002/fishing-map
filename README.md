# 釣魚紀錄 PWA

這是純前端、可安裝到手機主畫面的單機版網頁。使用者的魚獲、魚種與釣點資料只儲存在該手機瀏覽器中，不需要資料庫或後端。

## 上傳 GitHub Pages

1. 解壓縮 `fish-map-pwa-upload.zip`，把裡面的檔案上傳到 GitHub 儲存庫根目錄。
2. 在儲存庫的 **Settings → Pages**，選擇 **Deploy from a branch**，分支選 `main`、資料夾選 `/(root)`，再儲存。
3. 開啟 GitHub Pages 顯示的 HTTPS 網址。iPhone 使用 Safari 的「分享 → 加入主畫面」；Android 可在 Chrome 選「安裝應用程式」。

## 離線與定位

第一次開啟時需連網，讓程式、圖示與地圖元件下載並建立離線快取；之後記錄功能可離線使用。地圖圖磚由 OpenStreetMap 提供，離線時不保證能顯示尚未看過的地圖區域。GPS 定位必須從 HTTPS 網址（例如 GitHub Pages）開啟並允許定位權限。
