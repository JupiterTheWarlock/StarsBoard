# StarsBoard

GitHub Stars 自动标注与可视化系统。Fork 后配置即可使用，每日自动运行。

> [!NOTE]
> 这是一个 **Template** 仓库。点击上方 **"Use this template"** 即可创建你自己的 StarsBoard。
>
> **Live Demo**: [stars.jthewl.cc](https://stars.jthewl.cc/) — [作者的 StarsBoard 实例](https://github.com/JupiterTheWarlock/myStarsBoard)

---

## Features

- **自动收集** — 每日通过 GitHub API 获取所有 Stars
- **AI 智能 Tag** — 为每个仓库生成 3-5 个分类标签，支持中英文
- **README 生成** — 按 Tag 分组生成结构化的 Markdown 列表
- **增量更新** — 只处理新增/变更的仓库，高效运行
- **Web UI** — React + Tailwind 构建的浏览界面，支持搜索、筛选
- **关键词预匹配** — 基于关键词配置辅助 AI 决策
- **断点续传** — 保存处理进度，中断后可恢复
- **GitHub Actions** — 全自动运行，每日 UTC 0:00 触发

## Quick Start

### 1. Use this template

点击仓库右上角 **"Use this template"** → **"Create a new repository"**，命名为 `my-stars`（或任意名称）。

### 2. 配置 Secrets

进入仓库 **Settings → Secrets and variables → Actions**，添加：

| Secret | 必填 | 说明 |
|--------|------|------|
| `STAR_TOKEN` | 是 | GitHub Personal Access Token（需要 `repo` scope，[点此创建](https://github.com/settings/tokens/new)） |
| `OPENAI_API_KEY` | 是 | OpenAI API Key（兼容 DeepSeek、Azure OpenAI 等服务） |

### 3. 启用 Workflow

进入 **Actions** 页面，启用 **"Update Stars README"** workflow。

### 4. 运行

手动点击 **"Run workflow"** 触发首次运行，或等待每日自动运行。完成后刷新仓库主页即可看到生成的 README。

## Configuration

### 可选 Variables

在 **Settings → Secrets and variables → Variables** 中配置：

| Variable | 默认值 | 说明 |
|----------|--------|------|
| `LANGUAGE` | `en` | Tag 语言（`en` / `zh`） |
| `OPENAI_BASE_URL` | `https://api.openai.com/v1` | AI API 地址 |
| `AI_MODEL` | `gpt-4o` | 使用的模型 |
| `TAG_COUNT_MIN` | `3` | 最少 Tag 数量 |
| `TAG_COUNT_MAX` | `5` | 最多 Tag 数量 |
| `ENABLE_NEW_TAGS` | `true` | 是否允许 AI 创建新 Tag |
| `BATCH_SIZE` | `5` | AI 批量处理大小 |
| `STARSBOARD_TITLE` | - | Web UI 标题 |
| `STARSBOARD_FAVICON` | - | Web UI Favicon URL |

### 自定义 Tag

- `datas/tags.txt` — 管理 Tag 列表（一行一个）
- `datas/tag-keywords.json` — 关键词到 Tag 的映射

## Web UI

项目包含一个 React + Tailwind CSS 构建的浏览界面，支持：

- 按 Tag 分组浏览
- 搜索仓库
- Tag 侧边栏筛选

部署方式：
- **Vercel** — 直接导入仓库，`vercel.json` 已配置好
- **GitHub Pages** — workflow 自动部署到 `gh-pages` 分支

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJupiterTheWarlock%2FStarsBoard)

## Tech Stack

- **Runtime**: Node.js 24
- **Language**: TypeScript
- **AI**: OpenAI API (compatible)
- **CI/CD**: GitHub Actions
- **Web UI**: React + Vite + Tailwind CSS
- **Deploy**: Vercel / GitHub Pages

## License

[MIT](LICENSE)
