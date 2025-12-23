// api/scenarios.js
import { getScenarios, getRandomScenario } from './static-scenarios.js';

export default function handler(req, res) {
  try {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store');

    // POST = return one random scenario for the game
    if (req.method === 'POST') {
      const scenario = getRandomScenario();
      return res.status(200).end(JSON.stringify(scenario));
    }

    // GET = return all scenarios (useful for debugging)
    if (req.method === 'GET') {
      const scenarios = getScenarios();
      return res.status(200).end(JSON.stringify(scenarios));
    }

    // Anything else
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end(JSON.stringify({
      error: 'method_not_allowed',
      allowed: ['GET', 'POST']
    }));
  } catch (err) {
    return res.status(500).end(JSON.stringify({
      error: 'scenarios_api_failed',
      message: String(err?.message || err)
    }));
  }
}
