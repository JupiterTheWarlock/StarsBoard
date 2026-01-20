# StarsBoard

> GitHub Stars 自动标注与 README 生成系统

StarsBoard 是一个自动化工具，可以获取你的 GitHub Stars，使用 AI 为每个仓库生成智能标签，并生成按标签分类的精美 README。

## 功能特点

- **自动获取 Stars**: 通过 GitHub API 自动获取所有标星的仓库
- **AI 智能标注**: 使用 OpenAI API (或兼容接口) 为每个仓库生成 3-5 个描述性标签
- **关键词预匹配**: 基于仓库名、描述、语言进行关键词预匹配，提高标注准确性
- **增量更新**: 支持断点续传，只处理新增或未完成的仓库
- **批量处理**: 可配置批量大小，高效处理大量仓库
- **灵活配置**: 支持自定义标签列表、关键词映射、AI 模型等
- **GitHub Actions**: 每天自动运行，保持 README 最新

## 快速开始

### 1. 安装

```bash
# 克隆仓库
git clone https://github.com/your-username/StarsBoard.git
cd StarsBoard

# 安装依赖
npm install
```

### 2. 配置

复制 `.env.example` 为 `.env` 并配置环境变量：

```bash
cp .env.example .env
```

编辑 `.env` 文件：

```env
# GitHub 配置
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_USERNAME=your_github_username

# AI 配置
OPENAI_API_KEY=your_openai_api_key
OPENAI_BASE_URL=https://api.openai.com/v1  # 可选，支持兼容接口
AI_MODEL=gpt-4o

# 标签生成设置
TAG_COUNT_MIN=3
TAG_COUNT_MAX=5
ENABLE_NEW_TAGS=true
ENABLE_THINKING=false

# 处理设置
BATCH_SIZE=5
```

### 3. 运行

```bash
# 开发模式
npm run dev

# 构建并运行
npm run build
npm run start
```

## 配置说明

### 环境变量

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `GITHUB_TOKEN` | GitHub Personal Access Token | 必填 |
| `GITHUB_USERNAME` | GitHub 用户名 | 必填 |
| `OPENAI_API_KEY` | OpenAI API Key | 必填 |
| `OPENAI_BASE_URL` | AI API 基础 URL | `https://api.openai.com/v1` |
| `AI_MODEL` | AI 模型名称 | `gpt-4o` |
| `TAG_COUNT_MIN` | 每个仓库最少标签数 | `3` |
| `TAG_COUNT_MAX` | 每个仓库最多标签数 | `5` |
| `ENABLE_NEW_TAGS` | 是否允许创建新标签 | `true` |
| `ENABLE_THINKING` | 是否启用 AI 思考模式 | `false` |
| `BATCH_SIZE` | 批处理大小 | `5` |

### 自定义标签

编辑 `datas/tags.txt` 来管理你的标签列表（每行一个标签）：

```
frontend
backend
ai
tool
library
tutorial
util
devops
database
testing
docs
Uncategorized
```

### 关键词映射

编辑 `datas/tag-keywords.json` 来配置关键词到标签的映射：

```json
{
  "frontend": ["react", "vue", "angular", "ui", "component"],
  "backend": ["express", "api", "server", "microservice"],
  "ai": ["machine learning", "neural", "tensorflow", "llm"]
}
```

## GitHub Actions 配置

### 1. 设置 Secrets

在仓库设置中添加以下 Secrets：

- `GITHUB_TOKEN`: 自动提供，无需配置
- `OPENAI_API_KEY`: 你的 OpenAI API Key

### 2. 配置 Variables (可选)

在仓库设置中添加以下 Variables：

- `OPENAI_BASE_URL`: 自定义 AI API 地址
- `AI_MODEL`: AI 模型名称
- `TAG_COUNT_MIN`: 最少标签数
- `TAG_COUNT_MAX`: 最多标签数
- `ENABLE_NEW_TAGS`: 是否允许新标签
- `ENABLE_THINKING`: 是否启用思考模式
- `BATCH_SIZE`: 批处理大小

### 3. 启用工作流

推送代码到 `main` 分支后，工作流将：
- 每天 UTC 0:00 自动运行
- 支持手动触发（Actions 页面）
- 在代码更新时自动运行

## 项目结构

```
StarsBoard/
├── src/
│   ├── ai/           # AI 标签生成
│   ├── config/       # 配置管理
│   ├── github/       # GitHub API 客户端
│   ├── keyword/      # 关键词匹配
│   ├── readme/       # README 生成
│   ├── tag/          # 标签管理
│   └── utils/        # 工具函数
├── datas/            # 数据文件
│   ├── tags.txt              # 标签列表
│   ├── tag-keywords.json    # 关键词映射
│   ├── stars.json           # Stars 数据
│   ├── tags.json            # 标签分组数据
│   └── stars-with-tags.json # 带标签的 Stars
├── tests/            # 测试文件
├── .github/
│   └── workflows/
│       └── daily-stars.yml  # GitHub Actions
├── .env.example      # 环境变量模板
├── package.json
├── tsconfig.json
└── README.md
```

## 开发

```bash
# 类型检查
npm run type-check

# 运行测试
npm test

# 测试覆盖率
npm run test:coverage

# 构建生产版本
npm run build
```

## 许可证

MIT License
