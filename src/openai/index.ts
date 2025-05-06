import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY!;
export const openai = new OpenAI({ apiKey: openaiApiKey });

export async function getEmbedding(input: string) {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: input,
    encoding_format: 'float',
  });

  return response.data[0].embedding;
}
