# StarsBoard

A GitHub Stars board with AI-powered tagging and a searchable web UI.

StarsBoard automatically fetches your GitHub starred repositories, tags them using LLM, generates embeddings for semantic search, and presents everything in a beautiful terminal-themed web interface.

![StarsBoard Screenshot](stars-screenshot.png)

## Features

- **Auto-tagging** — AI (OpenAI-compatible) categorizes your stars into meaningful tags
- **Semantic search** — Find repos by meaning, not just keywords (via embeddings)
- **Daily auto-update** — GitHub Actions workflow keeps everything fresh
- **Terminal-themed Web UI** — Dark retro aesthetic with CRT effects, tag filtering, and responsive design
- **Static deployment** — Data is embedded at build time for fast, free hosting on GitHub Pages or Vercel

## Quick Start

### 1. Fork or use this template

Click **Use this template** on GitHub to create your own repo.

### 2. Configure secrets & variables

In your repo **Settings > Secrets and variables > Actions**:

**Secrets:**
- `STAR_TOKEN` — GitHub Personal Access Token (needs `read:user` scope)
- `OPENAI_API_KEY` — API key for the LLM provider

**Variables (optional):**
- `GITHUB_USERNAME` — your GitHub username (defaults to repo owner)
- `OPENAI_BASE_URL` — custom API base URL (for non-OpenAI providers)
- `AI_MODEL` — model name (default: `gpt-4o-mini`)
- `LANGUAGE` — tag language: `en` or `zh` (default: `en`)
- `STARSBOARD_TITLE` — custom page title
- `STARSBOARD_FAVICON` — custom favicon emoji

### 3. Enable GitHub Pages

Go to **Settings > Pages**, set source to `gh-pages` branch.

### 4. Trigger the workflow

The workflow runs daily at UTC 00:00. To run immediately, go to **Actions > Update Stars Data** and click **Run workflow**.

## How it works

```
GitHub Stars API → AI Tagging → Embedding Generation → Web UI Build → Deploy
```

1. Fetches all your starred repos via GitHub API
2. Tags repos in batches using an LLM
3. Generates vector embeddings for semantic search
4. Bakes data into the Web UI at build time
5. Deploys static site to GitHub Pages

## Tech Stack

- **Backend:** Node.js + TypeScript (tsup)
- **Frontend:** React + Vite + Tailwind CSS
- **AI:** OpenAI-compatible API for tagging + embeddings
- **CI/CD:** GitHub Actions (daily schedule + push trigger)
- **Deploy:** GitHub Pages / Vercel

## Deploy with Vercel

StarsBoard also supports Vercel deployment with a serverless API for semantic search. See [DEPLOYMENT_en.md](DEPLOYMENT_en.md) for details.

## License

[MIT](LICENSE)
