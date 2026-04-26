# 日本修士募集要项检索系统

一个本地静态网页项目，用于按学校、研究科和专业方向检索日本大学修士募集要项、申请时间、考试内容、英语/日语要求和对应 PDF。

## 使用方法

直接用浏览器打开 `index.html`。

首页按学校检索，进入 `schools/` 下的单校页面后，可以在该校内搜索专业方向。PDF 文件保存在 `工学募集要项/` 目录中。

## 目录结构

- `index.html`：首页
- `schools/`：每所学校的独立页面
- `assets/`：公共样式、脚本和结构化数据
- `工学募集要项/`：各校 PDF 资料

## GitHub 上传说明

项目包含大量 PDF，且部分文件超过 GitHub 普通文件 100MB 限制。请使用 Git LFS 上传 PDF：

```bash
git lfs install
git lfs track "*.pdf"
git add .gitattributes
```

之后再正常 `git add`、`git commit`、`git push`。
