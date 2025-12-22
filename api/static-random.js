import { getRandomScenario } from "./static-scenarios.js";

export default async function handler(req, res) {
  // Under Construction: same placeholder as /api/scenarios
  const scenario = getRandomScenario();
  res.set('Cache-Control', 'no-store');
  return res.status(200).json(scenario);
}
