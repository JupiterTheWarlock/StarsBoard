# StarsBoard

> **GitHub Stars 自动标注与 README 生成系统**
>
> **Automated GitHub Stars Tagging and README Generation System**

StarsBoard 是一个自动化工具，可以获取你的 GitHub Stars，使用 AI 为每个仓库生成智能标签，并生成按标签分类的精美 README。

StarsBoard is an automated tool that fetches your GitHub Stars, uses AI to generate intelligent tags for each repository, and creates a beautifully organized README grouped by tags.

## 功能特点 / Features

- **自动获取 Stars / Auto-fetch Stars** - 通过 GitHub API 自动获取所有标星的仓库 / Automatically fetch all starred repositories via GitHub API
- **AI 智能标注 / AI-powered Tagging** - 使用 OpenAI API (或兼容接口) 为每个仓库生成 3-5 个描述性标签 / Generate 3-5 descriptive tags for each repository using OpenAI API (or compatible endpoints)
- **关键词预匹配 / Keyword Pre-matching** - 基于仓库名、描述、语言进行关键词预匹配，提高标注准确性 / Pre-match tags based on repo name, description, and language for improved accuracy
- **增量更新 / Incremental Updates** - 支持断点续传，只处理新增或未完成的仓库 / Resume from interruptions, only process new or incomplete repositories
- **批量处理 / Batch Processing** - 可配置批量大小，高效处理大量仓库 / Configurable batch size for efficient processing of large repositories
- **灵活配置 / Flexible Configuration** - 支持自定义标签列表、关键词映射、AI 模型等 / Support custom tag lists, keyword mappings, AI models, and more
- **多语言支持 / Multi-language Support** - 支持中英文标签生成 / Support Chinese and English tag generation
- **GitHub Actions** - 每天自动运行，保持 README 最新 / Runs daily to keep your README up-to-date

## 快速开始 / Quick Start

### 1. 使用模板创建仓库 / Use this template

点击仓库页面右上角的 **"Use this template"** 按钮，创建一个新的仓库。

Click the **"Use this template"** button in the top-right corner of this repository to create a new repository.

### 2. 配置 GitHub Secrets / Configure Secrets

在新仓库的 **Settings → Secrets and variables → Actions** 中，添加以下 Secret：

In your new repository, go to **Settings → Secrets and variables → Actions** and add the following Secret:

| Secret | 说明 / Description | 必填 / Required |
|--------|-------------------|----------------|
| `OPENAI_API_KEY` | OpenAI API Key (或兼容接口) / OpenAI API Key (or compatible endpoint) | 是 / Yes |

> **注意 / Note**: `GITHUB_TOKEN` 由 GitHub 自动提供，无需配置。/ `GITHUB_TOKEN` is automatically provided by GitHub, no configuration needed.

### 3. 配置 Variables (可选) / Configure Variables (Optional)

在 **Settings → Secrets and variables → Actions → Variables** 中，可以添加以下变量自定义行为：

In **Settings → Secrets and variables → Actions → Variables**, you can add the following variables to customize behavior:

| Variable | 说明 / Description | 默认值 / Default |
|----------|-------------------|------------------|
| `LANGUAGE` | 标签语言 (en=英文, zh=中文) / Tag language (en=English, zh=Chinese) | `en` |
| `OPENAI_BASE_URL` | AI API 基础 URL / AI API base URL | `https://api.openai.com/v1` |
| `AI_MODEL` | AI 模型名称 / AI model name | `gpt-4o` |
| `TAG_COUNT_MIN` | 每个仓库最少标签数 / Minimum tags per repo | `3` |
| `TAG_COUNT_MAX` | 每个仓库最多标签数 / Maximum tags per repo | `5` |
| `ENABLE_NEW_TAGS` | 是否允许创建新标签 / Allow creating new tags | `true` |
| `ENABLE_THINKING` | 是否启用 AI 思考模式 / Enable AI thinking mode | `false` |
| `BATCH_SIZE` | 批处理大小 / Batch processing size | `5` |

### 4. 启用并运行工作流 / Enable and Run Workflow

1. 进入 **Actions** 页面 / Go to the **Actions** page
2. 点击 **"I understand my workflows, go ahead and enable them"** / Click **"I understand my workflows, go ahead and enable them"**
3. 在左侧选择 **"Update Stars README"** workflow，点击 **"Run workflow"** 进行手动测试 / Select **"Update Stars README"** workflow on the left, click **"Run workflow"** to test manually

工作流将在每天 UTC 0:00 自动运行。/ The workflow will run automatically every day at UTC 0:00.

## 自定义标签 / Custom Tags

你可以通过编辑仓库中的文件来自定义标签行为：

You can customize tag behavior by editing files in your repository:

### 标签列表 / Tag List

编辑 `datas/tags.txt` 来管理你的标签列表（每行一个标签）：

Edit `datas/tags.txt` to manage your tag list (one tag per line):

```
frontend
backend
ai
tool
library
tutorial
devops
database
testing
docs
Uncategorized
```

### 关键词映射 / Keyword Mapping

编辑 `datas/tag-keywords.json` 来配置关键词到标签的映射：

Edit `datas/tag-keywords.json` to configure keyword-to-tag mappings:

```json
{
  "frontend": ["react", "vue", "angular", "ui", "component"],
  "backend": ["express", "api", "server", "microservice"],
  "ai": ["machine learning", "neural", "tensorflow", "llm"]
}
```

## 项目结构 / Project Structure

```
StarsBoard/
├── src/
│   ├── ai.js              # AI 标签生成 / AI tag generation
│   ├── config.js          # 配置管理 / Configuration management
│   ├── github.js          # GitHub API 客户端 / GitHub API client
│   ├── keyword.js         # 关键词匹配 / Keyword matching
│   ├── readme.js          # README 生成 / README generation
│   ├── tag.js             # 标签管理 / Tag management
│   └── index.js           # 入口文件 / Entry point
├── datas/                 # 数据文件 / Data files
├── tests/                 # 测试文件 / Test files
├── .github/
│   └── workflows/
│       └── daily-stars.yml  # GitHub Actions
├── .env.example           # 环境变量模板 / Environment variable template
├── package.json
├── tsconfig.json
└── README.md
```

## 本地开发 / Local Development

如果你想本地运行或贡献代码：

If you want to run locally or contribute:

```bash
# 安装依赖 / Install dependencies
npm install

# 配置环境变量 / Configure environment variables
cp .env.example .env
# 编辑 .env 文件 / Edit .env file

# 开发模式 / Development mode
npm run dev

# 构建并运行 / Build and run
npm run build
npm run start

# 类型检查 / Type check
npm run type-check

# 运行测试 / Run tests
npm test
```

## 许可证 / License

[MIT](LICENSE)

---

## 部署 / Deployment

详细部署指南请参阅 [部署文档](DEPLOYMENT.md) / For detailed deployment guide, see [Deployment Documentation](DEPLOYMENT.md)
