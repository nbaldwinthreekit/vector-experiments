"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPineCone = getPineCone;
const pinecone_1 = require("@pinecone-database/pinecone");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const apiKey = process.env.PINECONE_API_KEY;
const indexName = process.env.PINECONE_INDEX;
const dimension = 1536;
async function getPineCone() {
    if (!apiKey || !indexName) {
        throw new Error('Missing PINECONE_API_KEY or PINECONE_INDEX in environment');
    }
    const pinecone = new pinecone_1.Pinecone({ apiKey });
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
            }
            else {
                await new Promise((r) => setTimeout(r, 2000));
            }
        }
    }
    return pinecone.index(indexName);
}
