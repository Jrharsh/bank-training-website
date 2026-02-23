import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import scenariosHandler from './api/scenarios.js';
import discussionHandler from './api/generate-discussion-scenario.js';
import fs from 'fs';
// Removed legacy static scenarios; keep server independent of that file

const app = express();
app.use(cors());
app.use(express.json());

// ── Feedback persistence ──────────────────────────────────────────────────────
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

function getFeedbackFile() {
  const __filename2 = fileURLToPath(import.meta.url);
  const __dirname2 = path.dirname(__filename2);
  return path.join(__dirname2, 'feedback.json');
}

function readFeedback() {
  const file = getFeedbackFile();
  if (!fs.existsSync(file)) return [];
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return []; }
}

function writeFeedback(data) {
  fs.writeFileSync(getFeedbackFile(), JSON.stringify(data, null, 2));
}

// Anyone can submit feedback
app.post('/api/feedback', (req, res) => {
  const feedback = req.body;
  if (!feedback || !feedback.rating) {
    return res.status(400).json({ error: 'Invalid feedback: rating is required' });
  }
  const all = readFeedback();
  all.push({ ...feedback, created_at: feedback.timestamp || new Date().toISOString() });
  writeFeedback(all);
  res.json({ success: true });
});

// Password-protected: GET /api/feedback?password=admin123
app.get('/api/feedback', (req, res) => {
  if (req.query.password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  res.json(readFeedback());
});
// ─────────────────────────────────────────────────────────────────────────────

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from /public with no-store to avoid stale HTML/JS/CSS
app.use(express.static(path.join(__dirname, 'public'), {
  cacheControl: true,
  etag: false,
  lastModified: false,
  maxAge: 0,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
      res.setHeader('Cache-Control', 'no-store');
    }
  }
}));

// API routes
app.post('/api/scenarios', (req, res) => scenariosHandler(req, res));
// Discussion page generator  
app.post('/api/generate-discussion-scenario', (req, res) => discussionHandler(req, res));

// Diagnostics endpoint to verify active code and file mtimes
app.get('/api/__debug', (req, res) => {
  try {
    const stat = (rel) => {
      try {
        const full = path.join(__dirname, rel);
        const s = fs.statSync(full);
        return { exists: true, mtime: s.mtimeMs, size: s.size };
      } catch {
        return { exists: false };
      }
    };
    res.set('Cache-Control', 'no-store');
    res.json({
      cwd: __dirname,
      scenarioTitle: null,
      questionCount: 0,
      files: {
        'api/static-scenarios.js': stat('api/static-scenarios.js'),
        'api/scenarios.js': stat('api/scenarios.js'),
        'public/game.html': stat('public/game.html')
      },
      timestamp: Date.now()
    });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

// HTML routes (optional convenience)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Serve static game page from /public
// Removing the UC shell so the updated game loads correctly
app.get('/discussion.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'discussion.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Bank training site running at http://localhost:${port}`);
});
