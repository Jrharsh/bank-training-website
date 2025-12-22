import { getRandomScenario } from './static-scenarios.js';

export default async function handler(req, res) {
  try {
    const scenario = getRandomScenario();
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({
      platform: 'vercel-serverless',
      scenarioTitle: scenario?.title || null,
      questionCount: Array.isArray(scenario?.questions) ? scenario.questions.length : 0,
      timestamp: Date.now()
    });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
}
