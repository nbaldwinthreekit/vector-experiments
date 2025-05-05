"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const http_1 = __importDefault(require("http"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
server.setTimeout(600000);
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '50mb' }));
app.use('/api', routes_1.default);
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
