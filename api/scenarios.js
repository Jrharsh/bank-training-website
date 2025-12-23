import getRandomScenario, { getScenarios } from './static-scenarios.js';

export default function handler(req, res) {
  try {
    res.setHeader('Content-Type', 'application/json');

    // POST -> one random scenario
    if (req.method === 'POST') {
      const s = getRandomScenario();
      return res.status(200).end(JSON.stringify(s));
    }

    // GET -> full list
    const list = getScenarios();
    return res.status(200).end(JSON.stringify(list));
  } catch (err) {
    return res.status(500).end(JSON.stringify({
      error: 'scenarios_api_failed',
      message: String(err?.message || err),
      stack: err?.stack
    }));
  }
}
