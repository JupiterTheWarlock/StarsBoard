# 部署指南 / Deployment Guide

本指南将帮助您使用 StarsBoard 模板创建仓库并配置自动化工作流。

This guide will help you create a repository using the StarsBoard template and configure the automated workflow.

---

## 1. 使用模板创建仓库 / Use this Template

### 中文

1. 访问 [StarsBoard 仓库](https://github.com/JtheWL/StarsBoard)
2. 点击右上角的 **"Use this template"** 按钮
3. 选择 **"Create a new repository"**
4. 输入仓库名称（例如：`my-stars`），选择公开或私有
5. 点击 **"Create repository"**

### English

1. Visit the [StarsBoard repository](https://github.com/JtheWL/StarsBoard)
2. Click the **"Use this template"** button in the top-right corner
3. Select **"Create a new repository"**
4. Enter a repository name (e.g., `my-stars`), choose public or private
5. Click **"Create repository"**

---

## 2. 配置 GitHub Secrets / Configure GitHub Secrets

### 必需配置 / Required

在新创建的仓库中，你需要配置 OpenAI API Key：

In your newly created repository, you need to configure the OpenAI API Key:

#### 中文

1. 进入仓库的 **Settings**（设置）页面
2. 在左侧菜单中点击 **Secrets and variables** → **Actions**
3. 点击 **"New repository secret"** 按钮
4. Name（名称）填入：`OPENAI_API_KEY`
5. Secret（密钥）填入你的 OpenAI API Key
6. 点击 **"Add secret"**

#### English

1. Go to your repository's **Settings** page
2. Click **Secrets and variables** → **Actions** in the left sidebar
3. Click the **"New repository secret"** button
4. Enter **Name**: `OPENAI_API_KEY`
5. Paste your OpenAI API Key in **Secret**
6. Click **"Add secret"**

> **提示 / Tip**: 如果你使用兼容 OpenAI 的其他 API 服务（如 DeepSeek、Azure OpenAI 等），只需填入对应的 API Key，并在下一步中配置 `OPENAI_BASE_URL`。
>
> **Tip**: If you use other OpenAI-compatible API services (such as DeepSeek, Azure OpenAI, etc.), simply enter the corresponding API Key and configure `OPENAI_BASE_URL` in the next step.

---

## 3. 配置 Variables (可选) / Configure Variables (Optional)

你可以通过配置 Variables 来自定义工作流行为。如果不配置，将使用默认值。

You can customize workflow behavior by configuring Variables. If not configured, default values will be used.

### 可选变量列表 / Optional Variables List

| 变量名 / Variable | 说明 / Description | 默认值 / Default |
|-------------------|-------------------|------------------|
| `LANGUAGE` | 标签语言 / Tag language | `en` |
| `OPENAI_BASE_URL` | AI API 地址 / AI API endpoint | `https://api.openai.com/v1` |
| `AI_MODEL` | AI 模型 / AI model | `gpt-4o` |
| `TAG_COUNT_MIN` | 最少标签数 / Minimum tags | `3` |
| `TAG_COUNT_MAX` | 最多标签数 / Maximum tags | `5` |
| `ENABLE_NEW_TAGS` | 允许新标签 / Allow new tags | `true` |
| `ENABLE_THINKING` | 思考模式 / Thinking mode | `false` |
| `BATCH_SIZE` | 批量大小 / Batch size | `5` |

### 配置步骤 / Configuration Steps

#### 中文

1. 进入 **Settings** → **Secrets and variables** → **Variables**
2. 点击 **"New repository variable"** 按钮
3. 填入 **Name** 和 **Value**
4. 点击 **"Add variable"**

#### English

1. Go to **Settings** → **Secrets and variables** → **Variables**
2. Click the **"New repository variable"** button
3. Enter **Name** and **Value**
4. Click **"Add variable"**

### 常用配置示例 / Common Configuration Examples

#### 使用中文标签 / Use Chinese Tags

```yaml
Name: LANGUAGE
Value: zh
```

#### 使用 DeepSeek API / Use DeepSeek API

```yaml
Name: OPENAI_BASE_URL
Value: https://api.deepseek.com/v1

Name: AI_MODEL
Value: deepseek-chat
```

#### 使用 Azure OpenAI / Use Azure OpenAI

```yaml
Name: OPENAI_BASE_URL
Value: https://your-resource.openai.azure.com/

Name: AI_MODEL
Value: gpt-4o
```

---

## 4. 启用工作流 / Enable Workflow

### 中文

1. 进入仓库的 **Actions** 页面
2. 如果提示 "Actions are disabled"，点击 **"I understand my workflows, go ahead and enable them"**
3. 在左侧选择 **"Update Stars README"** workflow

### English

1. Go to your repository's **Actions** page
2. If prompted "Actions are disabled", click **"I understand my workflows, go ahead and enable them"**
3. Select **"Update Stars README"** workflow on the left

---

## 5. 手动触发测试 / Manual Trigger

### 中文

1. 在 **Actions** 页面，选择 **"Update Stars README"**
2. 点击右侧的 **"Run workflow"** 按钮
3. 确认分支为 **main**，点击绿色的 **"Run workflow"** 按钮
4. 等待工作流执行完成（可能需要几分钟，取决于 Stars 数量）
5. 执行完成后，刷新主页查看生成的 README

### English

1. On the **Actions** page, select **"Update Stars README"**
2. Click the **"Run workflow"** button on the right
3. Confirm the branch is **main**, click the green **"Run workflow"** button
4. Wait for the workflow to complete (may take several minutes depending on the number of Stars)
5. After completion, refresh the main page to see the generated README

---

## 6. 自动化运行 / Automated Run

### 中文

工作流配置为每天 **UTC 0:00** 自动运行，确保你的 README 始终是最新的。

### English

The workflow is configured to run automatically every day at **UTC 0:00**, ensuring your README is always up-to-date.

---

## 7. 查看工作流日志 / View Workflow Logs

### 中文

如果工作流运行失败，可以查看日志排查问题：

1. 进入 **Actions** 页面
2. 点击失败的工作流运行记录
3. 展开各个步骤查看详细日志

### English

If the workflow fails, you can view the logs to troubleshoot:

1. Go to the **Actions** page
2. Click on the failed workflow run
3. Expand each step to view detailed logs

---

## 8. 自定义标签 / Customize Tags

### 中文

你可以通过编辑仓库中的文件来自定义标签：

- **`datas/tags.txt`** - 管理可用标签列表
- **`datas/tag-keywords.json`** - 配置关键词到标签的映射

### English

You can customize tags by editing files in your repository:

- **`datas/tags.txt`** - Manage the list of available tags
- **`datas/tag-keywords.json`** - Configure keyword-to-tag mappings

---

## 故障排查 / Troubleshooting

### 问题：工作流失败，提示 "Resource not accessible" / Issue: Workflow fails with "Resource not accessible"

**原因 / Cause**: `GITHUB_TOKEN` 权限不足 / Insufficient `GITHUB_TOKEN` permissions

**解决 / Solution**: 确保 GitHub Actions 有读写权限：
- Go to **Settings** → **Actions** → **General**
- 在 **Workflow permissions** 下选择 **Read and write permissions**

### 问题：标签生成失败 / Issue: Tag generation fails

**原因 / Cause**: `OPENAI_API_KEY` 无效或 API 配额不足 / Invalid `OPENAI_API_KEY` or insufficient API quota

**解决 / Solution**:
1. 检查 API Key 是否正确 / Check if the API Key is correct
2. 检查 API 配额是否充足 / Check if you have sufficient API quota
3. 如果使用兼容接口，检查 `OPENAI_BASE_URL` 和 `AI_MODEL` 配置 / If using a compatible endpoint, check `OPENAI_BASE_URL` and `AI_MODEL` configuration

### 问题：标签语言不正确 / Issue: Tags are in the wrong language

**原因 / Cause**: `LANGUAGE` 变量未配置或配置错误 / `LANGUAGE` variable is not configured or incorrectly configured

**解决 / Solution**:
- 添加变量 `LANGUAGE`，值为 `en`（英文）或 `zh`（中文）/ Add variable `LANGUAGE` with value `en` (English) or `zh` (Chinese)

---

## 需要帮助？/ Need Help?

- 提交 [Issue](https://github.com/JtheWL/StarsBoard/issues) / Submit an [Issue](https://github.com/JtheWL/StarsBoard/issues)
- 查看 [项目文档](README.md) / Check [Project Documentation](README.md)
