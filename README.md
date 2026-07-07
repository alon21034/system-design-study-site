# System Design Primer 一個月面試讀書計劃

這是一個純靜態網站，適合部署到 Vercel、GitHub Pages、Netlify、Cloudflare Pages 或 Supabase Static Hosting。

## 內容

- System Design 一個月讀書計劃
- 每日 repo 閱讀與英文延伸閱讀
- AI / vibe coding 補充能力
- 每週小 project
- 一個月後檢核表
- 延伸閱讀資源

## 本機預覽

```bash
python3 -m http.server 8000
```

然後打開：

```text
http://localhost:8000
```

## 部署到 Vercel

1. 到 Vercel Dashboard。
2. 點選 **Add New Project**。
3. Import Git Repository，選擇這個 repo。
4. Framework Preset 選 **Other**。
5. Build Command 留空。
6. Output Directory 留空或填 `.`。
7. 點選 Deploy。

## 檔案結構

```text
index.html
styles.css
script.js
vercel.json
README.md
```

## 參考

- https://github.com/donnemartin/system-design-primer
- https://blog.bytebytego.com/
