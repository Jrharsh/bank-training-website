import { getRandomScenario } from "./static-scenarios.js";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get a random scenario and return only metadata (no questions/answers)
  const base = getRandomScenario();
  const { department = 'General', complexity = 'intermediate' } = req.body || {};
  res.set('Cache-Control', 'no-store');
  return res.status(200).json({
    key: base.key,
    title: base.title,
    description: base.description,
    department,
    complexity,
    // No questions or answers included
  });
}
