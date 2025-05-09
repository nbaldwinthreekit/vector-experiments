import { pipeline } from '@xenova/transformers';

const extractorPromise = pipeline('feature-extraction', 'Xenova/bge-small-en-v1.5');

export async function getEmbedding(input: string): Promise<number[]> {
  const extractor = await extractorPromise;

  const result = await extractor(input, {
    pooling: 'mean',
    normalize: false,
  });

  return Array.from(result.data);
}
