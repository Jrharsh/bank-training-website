import { getRandomScenario } from "./static-scenarios.js";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { department = 'General', complexity = 'intermediate' } = req.body || {};

    // Use local static scenarios and adapt for discussion view
    const base = getRandomScenario();
    const title = `${base.title} — ${department}`;
    const description = base.description;
    const discussionPoints = (base.questions || [])
      .map(q => (q && q.questionText) ? q.questionText : null)
      .filter(Boolean)
      .slice(0, 5);

    return res.status(200).json({ title, description, discussionPoints, complexity, department });
  } catch (error) {
    console.error('Static discussion scenario error:', error);
    return res.status(500).json({ error: 'Failed to generate scenario from static data' });
  }
}
