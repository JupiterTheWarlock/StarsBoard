import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const client = new OpenAI({
  baseURL: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1',
  apiKey: process.env.OPENAI_API_KEY
});

const { AI_MODEL = 'gpt-4o' } = process.env;

export async function generateTags(repo) {
  const prompt = `根据以下仓库信息生成3-5个标签（用逗号分隔）：
仓库名: ${repo.fullName}
描述: ${repo.description}
语言: ${repo.language}

只返回标签名称，用逗号分隔，不要包含其他内容。例如: frontend,tool,library`;

  try {
    const response = await client.chat.completions.create({
      model: AI_MODEL,
      messages: [
        {
          role: 'system',
          content: '你是一个专业的代码仓库标签生成助手。根据仓库信息，生成简洁准确的标签。'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.5,
      max_tokens: 50
    });

    const content = response.choices[0]?.message?.content || '';
    const tags = content.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    return tags;
  } catch (error) {
    console.error(`Error generating tags for ${repo.fullName}:`, error.message);
    return [];
  }
}

export async function generateTagsBatch(repos, batchSize = 5) {
  const results = [];
  const total = repos.length;

  for (let i = 0; i < total; i += batchSize) {
    const batch = repos.slice(i, i + batchSize);
    console.log(`Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(total / batchSize)}...`);

    const batchResults = await Promise.all(
      batch.map(async (repo) => {
        const tags = await generateTags(repo);
        return { ...repo, tags };
      })
    );

    results.push(...batchResults);
  }

  return results;
}
