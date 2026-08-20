# Postnatal Care Website

月子中心官网 — 纯静态站点，无需构建步骤。

## 目录结构

```
dist/            ← 正式网站（Vercel 部署的就是这个目录）
  index.html     首页
  about.html     关于我们
  care.html      护理服务
  rooms.html     房型
  meals.html     月子餐
  contact.html   联系我们
  404.html
  site.css / site.js / favicon.ico
  robots.txt / sitemap.xml
  assets/        网站用到的图片（111 张 webp）
  _ds/           设计系统样式与字体

*.dc.html        ← 设计源文件（Claude Design 画布，用来改设计）
assets/          设计源文件用到的图片
_ds/             设计系统源文件
support.js       设计画布运行时
image-slot.js    设计画布图片组件
```

## 本地预览

```bash
cd dist && python3 -m http.server 8000
```

打开 http://localhost:8000

## 部署到 Vercel

1. 把这个文件夹推到 GitHub
2. Vercel → New Project → 导入这个仓库
3. Framework Preset 选 **Other**，其余保持默认
   （`vercel.json` 已经指定 Output Directory = `dist`，不用手动填）
4. Deploy

改完设计后重新导出到 `dist/`，push 到 GitHub 就会自动重新部署。
