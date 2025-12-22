export const maxDuration = 30;
import { getRandomScenario } from './static-scenarios.js';

// Purely static scenario generator: no AI calls
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const scenario = getRandomScenario();
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
