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
export function convertToNaturalLanguage(
  productName: string,
  variantConfiguration: Record<string, string>
) {
  const productNamePrefix = `The product is called the ${productName}. It has customizeable parts.`;
  let naturalLanguageConfiguration = productNamePrefix;
  for (const [attribute, attributeValue] of Object.entries(variantConfiguration)) {
    naturalLanguageConfiguration += ` This product has ${attributeValue} for its ${attribute}.`;
  }
  return naturalLanguageConfiguration;
}

export function standardizeFormatting(input: string) {
  return input.trim().toLowerCase();
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

export function calcCosineSimilarity(
  a: number[],
  b: number[],
  normA: number,
  normB: number
): number {
  if (a.length !== b.length) {
    throw new Error('Vector length mismatch');
  }

  let dot = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
  }

  return dot / (normA * normB);
}

export function calcMeanOfArray(a: number[]) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum / a.length;
}

export function normalizeVector(a: number[]): number[] {
  const norm = calcVectorNorm(a);
  if (norm === 0) throw new Error('Cannot normalize a zero vector');
  return a.map((v) => v / norm);
}

export function calcAverageVector(a: number[]): number[] {
  return a.map((x) => x / a.length);
}
