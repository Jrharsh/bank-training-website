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
            role: 'user',
            content: `You are an AI for generating realistic training content for a crisis management simulation at a major financial institution.

Create one unique, realistic bank-specific crisis scenario. Examples: cyberattacks, system outages, internal fraud, regulatory breaches, or PR crises. Ensure the scenario is complex enough that each of the following departments must contribute to resolving it:

- CEO/SVPs
- IT/Security
- HR
- Finance
- Loans
- Accounting
- Deposits

Then generate exactly 21 questions, grouped as 3 per department. Each question should:
- Clearly reference the current scenario
- Be targeted to one department (cycle through all 7)
- Have 4 distinct answer choices
- Include the correct answer
- Output JSON only (no markdown or explanation):

{
  "title": "...",
  "description": "...",
  "questions": [
    {
      "department": "...",
      "questionText": "...",
      "choices": ["...", "...", "...", "..."],
      "answer": "..."
    }
  ]
}`
          }
        ],
        max_tokens: 2500,
        temperature: 0.85
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
