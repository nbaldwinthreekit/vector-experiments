import express from 'express';
import cors from 'cors';
import router from './routes';
import http from 'http';

const app = express();
const server = http.createServer(app);

server.setTimeout(20 * 60 * 1000);

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/api', router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
