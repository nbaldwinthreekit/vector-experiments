"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openai = void 0;
exports.getEmbedding = getEmbedding;
const openai_1 = require("openai");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const openaiApiKey = process.env.OPENAI_API_KEY;
exports.openai = new openai_1.OpenAI({ apiKey: openaiApiKey });
async function getEmbedding(input) {
    const response = await exports.openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: input,
        encoding_format: 'float',
    });
    return response.data[0].embedding;
}
