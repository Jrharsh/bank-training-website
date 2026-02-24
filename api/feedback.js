const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzH9rQPhdj7gJkLmrikwyGNZr3ItNEuqQX3ZEpH4sBBpWp6dM4e4yMfQz3BaclP-7GRcw/exec';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  // ── POST: forward feedback to Google Sheets ────────────────────────────────
  if (req.method === 'POST') {
    const body = req.body;
    if (!body || !body.rating) {
      return res.status(400).json({ error: 'Invalid feedback: rating is required' });
    }
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(body),
        redirect: 'follow'
      });
    } catch (err) {
      console.error('Google Script POST error:', err);
      return res.status(500).json({ error: 'Failed to save feedback' });
    }
    return res.json({ success: true });
  }

  // ── GET: fetch all feedback from Google Sheets (proxied, no CORS issue) ────
  if (req.method === 'GET') {
    if (req.query.password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
      const gsRes = await fetch(
        `${SCRIPT_URL}?password=${encodeURIComponent(ADMIN_PASSWORD)}`,
        { redirect: 'follow' }
      );
      const data = await gsRes.json();
      return res.json(data);
    } catch (err) {
      console.error('Google Script GET error:', err);
      return res.status(500).json({ error: 'Failed to load feedback' });
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
}
