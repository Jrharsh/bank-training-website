export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { department, complexity } = req.body;
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
          content: `Create a realistic ${complexity} level banking scenario for the ${department} department. Include specific details and 4-5 discussion questions. Return as JSON: {"title": "...", "description": "...", "discussionPoints": [...]}`
        }],
        max_tokens: 1500,
        temperature: 0.8
      })
    });

    const data = await response.json();
    console.log('OpenAI API response:', data);

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      return res.status(500).json({ error: 'Invalid response from OpenAI API', data });
    }

    const content = data.choices[0].message.content.trim().replace(/```json/g, '').replace(/```/g, '');
    let scenario;
    try {
      scenario = JSON.parse(content);
    } catch (parseError) {
      console.error('Error parsing scenario JSON:', parseError, content);
      return res.status(500).json({ error: 'Failed to parse scenario JSON', content });
    }

    res.status(200).json(scenario);
  } catch (error) {
    console.error('Error generating discussion scenario:', error);
    res.status(500).json({ error: 'Failed to generate scenario' });
  }
}
