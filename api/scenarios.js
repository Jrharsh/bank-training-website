import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const systemPrompt = `
You are a banking crisis simulation AI.

Your task:
1. Generate one realistic crisis scenario (title + 1–3 sentences description).
2. Then generate 7 unique questions, one per department:
   - CEO/SVPs
   - IT/Security
   - HR
   - Finance
   - Loans
   - Accounting
   - Deposits

Each question must include:
- questionText relevant to both the scenario and department’s responsibilities.
- An array of choices with exactly 4 elements, each object containing:
  - text: Answer text.
  - type: One of "correct", "neutral", "wrong" (1 correct, 1 neutral, 2 wrong).
  - explanation: Brief rationale.

Return only valid JSON in this exact structure:

{
  "title": "Your scenario title",
  "description": "Your scenario description",
  "questions": [
    {
      "department": "CEO/SVPs",
      "questionText": "...",
      "choices": [
        { "text": "...", "type": "correct", "explanation": "..." },
        { "text": "...", "type": "neutral", "explanation": "..." },
        { "text": "...", "type": "wrong", "explanation": "..." },
        { "text": "...", "type": "wrong", "explanation": "..." }
      ]
    }
  ]
}
`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: 'Generate one crisis scenario with seven department‑specific questions.' }
      ],
      temperature: 0.8
    });

    const json = JSON.parse(completion.choices[0].message.content);
    res.status(200).json(json);
  } catch (error) {
    console.error('OpenAI error:', error.message);
    res.status(500).json({ error: 'Scenario generation failed.' });
  }
}
