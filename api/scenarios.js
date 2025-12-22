export const maxDuration = 30;
import { getRandomScenario, getScenarioByKey } from './static-scenarios.js';

// Purely static scenario generator: no AI calls
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const key = req.query?.key || req.body?.key;
    let scenario = getScenarioByKey(key) || getRandomScenario();
    // Ensure we always deliver 21 questions
    if (!Array.isArray(scenario.questions)) scenario.questions = [];
    const target = 21;
    if (scenario.questions.length !== target) {
      const merged = [...scenario.questions];
      while (merged.length < target) {
        const extra = getRandomScenario().questions || [];
        for (const q of extra) {
          merged.push(q);
          if (merged.length >= target) break;
        }
        if (extra.length === 0) break; // safety
      }
      scenario.questions = merged.slice(0, target);
    }
    console.log('[API] Scenario key:', key || 'random', 'questions:', scenario.questions.length);
    res.set('Cache-Control', 'no-store');
    return res.status(200).json(scenario);
  } catch (e) {
    console.error('Static scenario error:', e);
    // Minimal deterministic fallback
    return res.status(200).json({
      title: 'Bank Outage — Moderate',
      description: 'A moderate outage impacts online banking and ACH. Incident response is active with cross-functional coordination.',
      questions: [
        { department: 'CEO/SVPs', questionText: 'What public stance should leadership take first?', choices: [
          { text: 'Activate crisis comms + spokesperson', type: 'correct', explanation: 'Sets tone and clarity.' },
          { text: 'Hold for more info', type: 'neutral', explanation: 'Buys limited time.' },
          { text: 'Stay silent', type: 'wrong', explanation: 'Creates speculation.' },
          { text: 'Let vendor speak', type: 'wrong', explanation: 'Misses bank specifics.' }
        ]}
      ]
    });
  }
}
