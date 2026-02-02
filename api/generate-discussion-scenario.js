import getRandomScenario, { getScenarios } from "./static-scenarios.js";

// Map the new grouped department ids to existing scenario department keys
const departmentKeyMap = {
  'Mortgage-Servicing-Compliance': ['Loan Servicing', 'Compliance', 'Loans'],
  'HR-Accounting-BackOffice': ['HR', 'Accounting', 'Bookkeeping'],
  'Frontline-Operations': ['Tellers', 'New Accounts', 'Deposits'],
  'Executive-Leadership-Loans': ['CEO/SVPs', 'Loans'],
  'IT': ['IT', 'Security', 'IT/Security'],
  'Call-Center': ['Call Center']
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { department = 'General', complexity = 'intermediate' } = req.body || {};

  // Determine which scenario department keys to match
  const mappedKeys = departmentKeyMap[department] || [department];

  // Find scenarios that include questions for any of the mapped keys
  const all = Array.isArray(getScenarios) ? getScenarios() : [];
  const matches = all.filter(s => Array.isArray(s.questions) && s.questions.some(q => mappedKeys.includes(q.department)));

  // Choose a matching scenario or fall back to a random one
  const base = matches.length ? matches[Math.floor(Math.random() * matches.length)] : getRandomScenario();

  res.set('Cache-Control', 'no-store');
  return res.status(200).json({
    key: base.key,
    title: base.title,
    description: base.description,
    department,
    complexity,
  });
}
