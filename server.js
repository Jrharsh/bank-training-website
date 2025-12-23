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
app.get('/game.html', (req, res) => {
  // Serve a minimal Under-Construction shell to avoid any stale cached JS
  res.set('Cache-Control', 'no-store');
  res.type('html').send(`<!DOCTYPE html>
  <html lang="en"><head><meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Crisis Management Game — Under Construction</title>
  <link rel="stylesheet" href="/css/style.css?v=uc" />
  </head><body>
    <div class="header">
      <img src="/images/bank-logo.png" alt="SSBTX Logo" />
      <div class="title">Crisis Management Game <span style="font-size:12px;background:#ffe08a;color:#6b5d15;padding:2px 6px;border-radius:6px;margin-left:8px;">UC-Server</span></div>
    </div>
    <div class="scenario-box" style="text-align:center;">
      <h2>Scenario</h2>
      <p>We are rebuilding this training. No scenarios will load right now.</p>
    </div>
    <div class="question-box">
      <div class="uc-box">
        <h3>Under Construction</h3>
        <p>The Crisis Management Game content is being rebuilt. Please check back soon.</p>
      </div>
    </div>
    <div class="controls">
      <button disabled>Generate New Crisis Scenario</button>
      <button onclick="location.href='/'">Back to Home</button>
    </div>
    <script>console.log('[BUILD] UC-Server Shell');</script>
  </body></html>`);
});
app.get('/discussion.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'discussion.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Bank training site running at http://localhost:${port}`);
});
