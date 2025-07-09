export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Working scenarios - no AI complexity
  const scenarios = [
    {
      title: "Cybersecurity Data Breach",
      description: "A sophisticated cyberattack has compromised customer data including social security numbers, account details, and transaction history. The breach was discovered this morning and affects approximately 50,000 customers.",
      questions: [
        {
          department: "IT/Security",
          questionText: "What should be the immediate first priority?",
          choices: [
            {"text": "Isolate all affected systems immediately", "type": "correct", "explanation": "Containing the breach prevents further data loss and system compromise"},
            {"text": "Call all affected customers first", "type": "wrong", "explanation": "Customer notification should come after containment to prevent panic"},
            {"text": "Assess the total scope of damage", "type": "neutral", "explanation": "Important but containment must happen first"},
            {"text": "Contact law enforcement", "type": "neutral", "explanation": "Required but not the immediate first step"}
          ]
        },
        {
          department: "HR",
          questionText: "How should HR communicate with employees about the breach?",
          choices: [
            {"text": "Hold immediate all-hands meeting with facts", "type": "correct", "explanation": "Employees need accurate information to avoid rumors and mistakes"},
            {"text": "Tell employees everything is under control", "type": "wrong", "explanation": "False reassurance can damage trust and credibility"},
            {"text": "Only brief department managers", "type": "neutral", "explanation": "A start but all employees should be informed"},
            {"text": "Wait until more details are available", "type": "neutral", "explanation": "May allow rumors to spread"}
          ]
        },
        {
          department: "Finance",
          questionText: "What financial controls should Finance implement?",
          choices: [
            {"text": "Freeze all electronic transactions temporarily", "type": "correct", "explanation": "Prevents fraudulent transactions while systems are compromised"},
            {"text": "Continue normal transaction processing", "type": "wrong", "explanation": "Could result in significant financial losses"},
            {"text": "Monitor transactions for unusual patterns", "type": "neutral", "explanation": "Good but may not prevent all fraud"},
            {"text": "Require dual approval for all transactions", "type": "neutral", "explanation": "Adds security but may slow operations"}
          ]
        },
        {
          department: "Loans",
          questionText: "How should Loans handle customer applications during the crisis?",
          choices: [
            {"text": "Verify all customer identities through phone calls", "type": "correct", "explanation": "Essential when digital verification systems may be compromised"},
            {"text": "Process applications normally", "type": "wrong", "explanation": "High risk of fraud with compromised systems"},
            {"text": "Suspend all new applications", "type": "neutral", "explanation": "Safe but impacts customer service"},
            {"text": "Only process existing customer loans", "type": "neutral", "explanation": "Reduces risk but limits service"}
          ]
        },
        {
          department: "Accounting",
          questionText: "What should Accounting prioritize during the incident?",
          choices: [
            {"text": "Document all incident response costs immediately", "type": "correct", "explanation": "Critical for insurance claims and regulatory reporting"},
            {"text": "Focus only on regular daily operations", "type": "wrong", "explanation": "Incident costs must be tracked for recovery"},
            {"text": "Estimate costs at the end of the incident", "type": "neutral", "explanation": "May lose important details"},
            {"text": "Only track costs over $5,000", "type": "neutral", "explanation": "Better than nothing but incomplete"}
          ]
        },
        {
          department: "CEO/SVPs",
          questionText: "What should leadership focus on first?",
          choices: [
            {"text": "Coordinate emergency response across all departments", "type": "correct", "explanation": "Unified leadership is essential for effective crisis management"},
            {"text": "Prepare public statements immediately", "type": "wrong", "explanation": "Internal coordination should come before external communication"},
            {"text": "Meet with the board of directors", "type": "neutral", "explanation": "Important but operational response takes priority"},
            {"text": "Review insurance policies", "type": "neutral", "explanation": "Will be needed but not the immediate priority"}
          ]
        },
        {
          department: "Deposits",
          questionText: "How should Deposits handle customer concerns?",
          choices: [
            {"text": "Verify customer identity before discussing accounts", "type": "correct", "explanation": "Prevents social engineering attacks during the crisis"},
            {"text": "Reassure customers that all accounts are safe", "type": "wrong", "explanation": "Cannot guarantee safety during active breach"},
            {"text": "Direct all calls to customer service", "type": "neutral", "explanation": "May help but customers need immediate assistance"},
            {"text": "Provide general updates only", "type": "neutral", "explanation": "Safe but may not address specific concerns"}
          ]
        },
        {
          department: "IT/Security",
          questionText: "After containment, what should IT focus on next?",
          choices: [
            {"text": "Conduct forensic analysis to understand the attack", "type": "correct", "explanation": "Understanding how the breach occurred prevents future incidents"},
            {"text": "Restore all systems to normal operation", "type": "wrong", "explanation": "May reintroduce vulnerabilities"},
            {"text": "Change all employee passwords", "type": "neutral", "explanation": "Good security practice but may not address root cause"},
            {"text": "Install additional firewalls", "type": "neutral", "explanation": "May help but forensics should come first"}
          ]
        },
        {
          department: "HR",
          questionText: "What should HR do about employee system access?",
          choices: [
            {"text": "Review and temporarily limit access to critical systems", "type": "correct", "explanation": "Reduces insider threat risk during the crisis"},
            {"text": "Maintain all current access levels", "type": "wrong", "explanation": "Could allow compromised accounts to cause more damage"},
            {"text": "Remove access for all temporary employees", "type": "neutral", "explanation": "Reduces some risk but may be too broad"},
            {"text": "Require additional authentication for all users", "type": "neutral", "explanation": "Adds security but may slow response efforts"}
          ]
        },
        {
          department: "Finance",
          questionText: "How should Finance handle vendor payments during the crisis?",
          choices: [
            {"text": "Verify all payment requests through phone confirmation", "type": "correct", "explanation": "Prevents fraudulent payments when email systems may be compromised"},
            {"text": "Continue automated payment processing", "type": "wrong", "explanation": "Automated systems may be compromised"},
            {"text": "Delay all vendor payments", "type": "neutral", "explanation": "Safe but may damage vendor relationships"},
            {"text": "Only pay critical vendors", "type": "neutral", "explanation": "Balances risk and operations"}
          ]
        }
      ]
    }
  ];

  // Return the scenario
  res.status(200).json(scenarios[0]);
}