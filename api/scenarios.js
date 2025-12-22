export const maxDuration = 30;
import { getRandomScenario, getScenarioByKey } from './static-scenarios.js';

// Purely static scenario generator: no AI calls
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  // Under Construction: always return a placeholder scenario with no questions
  const scenario = getRandomScenario();
  res.set('Cache-Control', 'no-store');
  return res.status(200).json(scenario);
}
