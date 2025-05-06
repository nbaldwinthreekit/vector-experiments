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

export function calcVectorNorm(a: number[]): number {
  let res = 0;

  for (let i = 0; i < a.length; i++) {
    res += a[i] ** 2;
  }

  return Math.sqrt(res);
}

export function calcVectorSum(embeddings: number[][]): number[] {
  if (embeddings.length === 0) return [];

  const vectorLength = embeddings[0].length;
  const vectorSum = new Array(vectorLength).fill(0);

  for (const embedding of embeddings) {
    for (let i = 0; i < embedding.length; i++) {
      vectorSum[i] += embedding[i];
    }
  }

  return vectorSum;
}

export function calcEuclideanDistance(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Embedding dimension mismatch');
  }

  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff += (b[i] - a[i]) ** 2;
  }

  return Math.sqrt(diff);
}

export function calcCosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vector length mismatch');
  }

  let dot = 0;
  let normAttr = 0;
  let normVariant = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normAttr += a[i] ** 2;
    normVariant += b[i] ** 2;
  }

  return dot / (Math.sqrt(normAttr) * Math.sqrt(normVariant));
}
