export default async function handler(req, res) {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    return res.status(500).json({
      error: 'Server not configured. Add SUPABASE_URL and SUPABASE_SERVICE_KEY to Vercel environment variables.'
    });
  }

  const supabaseHeaders = {
    'apikey': SUPABASE_SERVICE_KEY,
    'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
    'Content-Type': 'application/json'
  };

  // ── POST: submit feedback ──────────────────────────────────────────────────
  if (req.method === 'POST') {
    const body = req.body;

    if (!body || !body.rating) {
      return res.status(400).json({ error: 'Invalid feedback: rating is required' });
    }

    const row = {
      type: body.type || null,
      rating: body.rating,
      enjoyed: !!body.enjoyed,
      learned: !!body.learned,
      realistic: !!body.realistic,
      recommend: !!body.recommend,
      comment: body.comment || '',
      department: body.department || null,
      scenario_title: body.scenarioTitle || null,
      game_results: body.gameResults || null,
      session_id: body.sessionId || null
    };

    const supaRes = await fetch(`${SUPABASE_URL}/rest/v1/feedback`, {
      method: 'POST',
      headers: { ...supabaseHeaders, 'Prefer': 'return=minimal' },
      body: JSON.stringify(row)
    });

    if (!supaRes.ok) {
      const err = await supaRes.text();
      console.error('Supabase insert error:', err);
      return res.status(500).json({ error: err });
    }

    return res.json({ success: true });
  }

  // ── GET: admin reads all feedback ──────────────────────────────────────────
  if (req.method === 'GET') {
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

    if (req.query.password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const supaRes = await fetch(
      `${SUPABASE_URL}/rest/v1/feedback?order=created_at.desc`,
      { headers: supabaseHeaders }
    );

    if (!supaRes.ok) {
      const err = await supaRes.text();
      console.error('Supabase select error:', err);
      return res.status(500).json({ error: err });
    }

    const data = await supaRes.json();
    return res.json(data);
  }

  res.status(405).json({ error: 'Method not allowed' });
}
