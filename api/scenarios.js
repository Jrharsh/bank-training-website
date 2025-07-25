// /pages/api/scenarios.js
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const departments = [
  'CEO/SVPs',
  'IT/Security',
  'HR',
  'Finance',
  'Loans',
  'Accounting',
  'Deposits'
];

const promptBuilder = (scenario) => `
You are a crisis response training AI for banks. A scenario is presented to 7 different departments. Your job is to generate a total of 7 unique, department-specific multiple-choice questions.

Crisis Scenario: ${scenario}

For each department, write:
- A question relevant to their role in this crisis
- 4 answer choices:
  - One clearly best (type: "correct")
  - One neutral (type: "neutral")
  - Two incorrect (type: "wrong")
- Each choice must have a brief explanation

Return format:
[
  {
    department: "CEO/SVPs",
    questionText: "Your question here...",
    choices: [
      { text: "Option A", type: "correct", explanation: "Why it's correct" },
      { text: "Option B", type: "neutral", explanation: "Why it's neutral" },
      { text: "Option C", type: "wrong", explanation: "Why it's wrong" },
      { text: "Option D", type: "wrong", explanation: "Why it's wrong" }
    ]
  },
  ...
]
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const scenarioList = [
    "A ransomware group has encrypted the bank's core systems. Online banking, payroll, and internal networks are offline. Attackers demand $1 million or they will leak customer data.",
    "A flash flood has destroyed the main branch and physical data center. Customer records and hardware are lost.",
    "An employee in the wire department embezzled $2.3 million. The fraud lasted 6 months before detection."
  ];

  const randomScenario = scenarioList[Math.floor(Math.random() * scenarioList.length)];

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an AI that generates crisis management questions for bank departments.'
        },
        {
          role: 'user',
          content: promptBuilder(randomScenario)
        }
      ],
      temperature: 0.7
    });

    const parsed = JSON.parse(completion.data.choices[0].message.content);

    res.status(200).json({
      title: "Bank Crisis: " + randomScenario.slice(0, 50) + '...',
      description: randomScenario,
      questions: parsed
    });
  } catch (error) {
    console.error('OpenAI error:', error?.response?.data || error.message);
    res.status(500).json({ error: 'AI generation failed.' });
  }
}
