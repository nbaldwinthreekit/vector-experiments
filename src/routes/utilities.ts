export function canonicalize(obj: any): any {
  if (Array.isArray(obj)) return obj.map(canonicalize);
  if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => [k, canonicalize(v)])
    );
  }
  return obj;
}

export function calcVectorSum(embeddings: number[][]): number[] {
  if (embeddings.length === 0) return [];

  const vectorLength = embeddings[0].length;
  const vectorSum = new Array(vectorLength).fill(0);

  for (const embedding of embeddings) {
    if (embedding.length !== vectorLength) {
      throw new Error('Embedding dimension mismatch in input array');
    }
    for (let i = 0; i < vectorLength; i++) {
      vectorSum[i] += embedding[i];
    }
  }

  return vectorSum;
}

export function calcEuclideanDistance(
  attributeVectorSum: number[],
  variantEmbedding: number[]
): number {
  if (attributeVectorSum.length !== variantEmbedding.length) {
    throw new Error('Embedding dimension mismatch');
  }

  let differenceVectorMagnitude = 0;
  for (let i = 0; i < variantEmbedding.length; i++) {
    differenceVectorMagnitude += (variantEmbedding[i] - attributeVectorSum[i]) ** 2;
  }

  return Math.sqrt(differenceVectorMagnitude);
}

export function calcCosineSimilarity(
  attributeVectorSum: number[],
  variantEmbedding: number[]
): number {
  if (attributeVectorSum.length !== variantEmbedding.length) {
    throw new Error('Vector length mismatch');
  }

  let dot = 0;
  let normAttr = 0;
  let normVariant = 0;

  for (let i = 0; i < attributeVectorSum.length; i++) {
    dot += attributeVectorSum[i] * variantEmbedding[i];
    normAttr += attributeVectorSum[i] ** 2;
    normVariant += variantEmbedding[i] ** 2;
  }

  return dot / (Math.sqrt(normAttr) * Math.sqrt(normVariant));
}
