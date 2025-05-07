import { pipeline } from '@xenova/transformers';

const extractorPromise = pipeline('feature-extraction', 'jina-embeddings-v2-base-en', {
  quantized: true,
});

export async function getEmbedding(input: string) {
  const extractor = await extractorPromise;
  const result = await extractor(input, { pooling: 'mean', normalize: true });
  return result.data as number[];
}
