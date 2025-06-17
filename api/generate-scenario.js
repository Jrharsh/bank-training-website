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
        messages: [{
          role: 'user',
          content: `You are generating training data for a banking crisis management game. Create one scenario with the following format in strict JSON (no additional text or explanation):

{
  "title": "...",
  "description": "...",
  "questions": [
    {
      "questionText": "...",
      "choices": ["A", "B", "C", "D"],
      "answer": "The correct choice text"
    }
  ]
}

Rules:
- Generate 5 questions.
- Each question must have exactly 4 choices.
- Choices must be distinct, realistic, and plausible.
- Only output the JSON object. Do not include any explanation, markdown, or commentary.`
        }],
        max_tokens: 1500,
        temperature: 0.8
      })
    });

    const data = await response.json();
    const content = data.choices[0].message.content.trim();
    const scenario = JSON.parse(content);

    res.status(200).json(scenario);
  } catch (error) {
    console.error('Error generating scenario:', error);
    res.status(500).json({ error: 'Failed to generate scenario' });
  }
}
