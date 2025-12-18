import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import scenariosHandler from './api/scenarios.js';

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.post('/api/scenarios', (req, res) => scenariosHandler(req, res));

// HTML routes (optional convenience)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/game.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'game.html'));
});
app.get('/discussion.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'discussion.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Bank training site running at http://localhost:${port}`);
});
