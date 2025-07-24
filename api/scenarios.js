export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const departments = [
    'CEO/SVPs',
    'IT/Security',
    'HR',
    'Finance',
    'Loans',
    'Accounting',
    'Deposits'
  ];

  const scenarioTemplates = [
    {
      title: "Massive Ransomware Attack Hits Core Systems",
      description: "A ransomware group has encrypted the bank's core systems. Online banking, payroll, and internal networks are all offline. The attackers demand $1 million and threaten to leak customer data and internal emails if unpaid within 48 hours.",
      prompts: {
        'CEO/SVPs': "Do you authorize ransom payment or pursue recovery through backups while risking data leaks?",
        'IT/Security': "How will you respond technically to regain access while ensuring system integrity?",
        'HR': "Employees are panicking and unsure if their personal data was compromised. What communication plan do you deploy?",
        'Finance': "With core systems offline, how do you manage critical financial operations and payroll?",
        'Loans': "Loan processing is down. Customers are calling in frustration. What's your backup plan?",
        'Accounting': "Financial reporting is halted. Regulators expect updates. How do you prepare compliance reports?",
        'Deposits': "ATM and branch systems are down. Customers fear for their money. What's your immediate response?"
      }
    },
    {
      title: "Flash Flood Destroys Main Branch and Data Center",
      description: "A once-in-a-century flood has destroyed your downtown branch and data center. Physical files, hardware, and customer records are lost. Media coverage is intense, and customers demand answers.",
      prompts: {
        'CEO/SVPs': "How will you lead the public response and reassure the market and your community?",
        'IT/Security': "How do you quickly migrate systems to the cloud or another location?",
        'HR': "Many employees lost their homes and are displaced. What support and staffing plan do you launch?",
        'Finance': "How do you assess short-term losses and stabilize operations for investors?",
        'Loans': "How do you ensure continuity for in-progress loans with missing documentation?",
        'Accounting': "What steps will you take to reconstruct financial data and meet audit requirements?",
        'Deposits': "Thousands of deposit customers are locked out of accounts. How do you restore trust and access?"
      }
    },
    {
      title: "Internal Fraud Discovered in Wire Department",
      description: "An employee in the wire transfer department has funneled $2.3 million to offshore accounts over six months. The fraud was just discovered. Auditors and the board are demanding answers.",
      prompts: {
        'CEO/SVPs': "What is your messaging to regulators, board members, and the public?",
        'IT/Security': "What logs and surveillance can help confirm internal access and identify weaknesses?",
        'HR': "How do you address employee morale and handle the disciplinary process?",
        'Finance': "How do you trace funds and account for potential recoveries?",
        'Loans': "Clients involved in related transactions are concerned. What is your communication protocol?",
        'Accounting': "How do you reclassify stolen funds and manage financial impact?",
        'Deposits': "Depositors are nervous about security. How do you handle inbound calls and reassure them?"
      }
    }
  ];

  const selectedScenario = scenarioTemplates[Math.floor(Math.random() * scenarioTemplates.length)];

  const questions = departments.map(dep => {
    return {
      department: dep,
      questionText: selectedScenario.prompts[dep],
      choices: [
        {
          text: "Take proactive action based on department best practice",
          type: "correct",
          explanation: "This reflects industry best practices under pressure."
        },
        {
          text: "Wait and escalate to next level",
          type: "neutral",
          explanation: "Not incorrect, but delays key decision-making."
        },
        {
          text: "Take minimal action to avoid risk",
          type: "wrong",
          explanation: "Fails to address the urgency and may worsen impact."
        },
        {
          text: "Ignore and let other departments handle it",
          type: "wrong",
          explanation: "Lack of engagement can lead to further damage."
        }
      ]
    };
  });

  const response = {
    title: selectedScenario.title,
    description: selectedScenario.description,
    questions,
    debug: {
      selectedTitle: selectedScenario.title,
      timestamp: Date.now()
    }
  };

  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '-1');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  res.status(200).json(response);
}
