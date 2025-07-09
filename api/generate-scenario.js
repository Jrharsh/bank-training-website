export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Test with hardcoded data first
  const testScenario = {
    title: "Test Crisis",
    description: "This is a test cybersecurity breach scenario.",
    questions: [
      {
        department: "IT/Security",
        questionText: "What should be the first priority?",
        choices: [
          { text: "Isolate affected systems", type: "correct", explanation: "This prevents further damage." },
          { text: "Call the press", type: "wrong", explanation: "This is not the immediate priority." },
          { text: "Assess the damage", type: "neutral", explanation: "Important but not first." },
          { text: "Notify customers", type: "neutral", explanation: "Should be done after containment." }
        ]
      }
    ]
  };

  return res.status(200).json(testScenario);
}