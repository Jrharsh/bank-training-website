import { getRandomScenario } from "./static-scenarios.js";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Under Construction: return minimal discussion payload with no points
  const base = getRandomScenario();
  const { department = 'General', complexity = 'intermediate' } = req.body || {};
  res.set('Cache-Control', 'no-store');
  return res.status(200).json({
    title: `${base.title} — ${department}`,
    description: base.description,
    discussionPoints: [],
    complexity,
    department
  });
}
