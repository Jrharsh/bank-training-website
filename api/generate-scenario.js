export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'OpenAI API key not configured' });
  }
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are an AI that generates bank-specific crisis scenarios with MCQ questions and coded scoring.
Output a JSON object: {"title": "...", "description": "...", "questions": [ ... ]}.
Each question object:
{
  "department": "...",
  "questionText": "...",
  "choices": [
    {"text": "...", "type": "correct"|"neutral"|"wrong", "explanation": "..."},
    ...
  ]
}
Rules:
- Exactly 4 choices per question
- 1 correct (+10pts), 2 neutral (+5pts each), 1 wrong (–10pts)
- Randomize order, no "all/none of the above"
- Include a brief explanation for each choice.
- Generate questions across departments; stop scenario when a department first reaches 50 points.
- Output *only* valid JSON with no extra text or markdown.`
          }
        ],
        temperature: 0.7,
        max_tokens: 2000
      })
    });
    const data = await response.json();
    const content = data.choices[0].message.content.trim();
    const scenario = JSON.parse(content);
    res.status(200).json(scenario);
  } catch (err) {
    console.error('Error generating scenario:', err);
    res.status(500).json({ error: 'Failed to generate scenario' });
  }
}
