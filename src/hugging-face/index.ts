import { pipeline } from '@xenova/transformers';

const extractorPromise = pipeline('feature-extraction', 'intfloat/e5-base');

export async function getEmbedding(input: string): Promise<number[]> {
  const extractor = await extractorPromise;
  const result = await extractor(input, { pooling: 'mean', normalize: false });
  return result.data as number[];
}
