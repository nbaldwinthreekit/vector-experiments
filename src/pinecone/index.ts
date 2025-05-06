import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.PINECONE_API_KEY!;
const indexName = process.env.PINECONE_INDEX!;

const dimension = 1536;

export async function getPineCone() {
  if (!apiKey || !indexName) {
    throw new Error('Missing PINECONE_API_KEY or PINECONE_INDEX in environment');
  }

  const pinecone = new Pinecone({ apiKey });

  // Fetch for existing indexes
  const { indexes } = await pinecone.listIndexes();

  const indexExists = indexes?.some((index) => index.name === indexName);

  if (!indexExists) {
    await pinecone.createIndex({
      name: indexName,
      dimension,
      metric: 'euclidean',
      spec: {
        serverless: {
          cloud: 'aws',
          region: 'us-east-1',
        },
      },
    });

    // Wait until the index is ready
    let ready = false;
    while (!ready) {
      const { status } = await pinecone.describeIndex(indexName);
      if (status?.ready) {
        ready = true;
      } else {
        await new Promise((r) => setTimeout(r, 2000));
      }
    }
  }

  return pinecone.index(indexName);
}
