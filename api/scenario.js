export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Force a truly random selection
  const randomValue = Math.random();
  console.log('Random value generated:', randomValue);

  const scenarios = [
    {
      title: "Cybersecurity Breach with Customer Data Exposure",
      description: "A ransomware attack has encrypted critical systems and exposed 75,000 customer records including SSNs and account numbers. The attackers are demanding $500,000 and threatening to release data publicly in 48 hours. Systems are down, customers can't access accounts, and media is starting to report the story.",
      questions: [
        {
          department: "CEO/SVPs",
          questionText: "The FBI advises against paying ransom, but your cyber insurance may cover it. What's your decision?",
          choices: [
            {"text": "Pay the ransom immediately to protect customer data", "type": "neutral", "explanation": "May stop data release but encourages future attacks and may not guarantee data deletion"},
            {"text": "Refuse to pay and focus on system recovery", "type": "correct", "explanation": "Follows FBI guidance and doesn't fund criminal activity, though data may be released"},
            {"text": "Negotiate with attackers for more time while deciding", "type": "neutral", "explanation": "Buys time but engaging with criminals can complicate legal situation"},
            {"text": "Pay half the amount as a compromise", "type": "wrong", "explanation": "Still funds criminals without guarantee of protection, worst of both approaches"}
          ]
        },
        {
          department: "IT/Security",
          questionText: "Recovery will take 5 days with backups vs 2 days if you pay ransom for decryption keys. Customers need access urgently.",
          choices: [
            {"text": "Use backups despite longer timeline", "type": "correct", "explanation": "Maintains security principles and ensures clean systems, though customers suffer longer"},
            {"text": "Recommend paying ransom for faster recovery", "type": "wrong", "explanation": "Compromises security principles and may result in backdoors or reinfection"},
            {"text": "Attempt to break the encryption independently", "type": "neutral", "explanation": "May waste valuable time with low probability of success"},
            {"text": "Partially restore from backups while negotiating", "type": "neutral", "explanation": "Hybrid approach but may signal willingness to pay"}
          ]
        }
      ]
    },
    {
      title: "Suspected Money Laundering Investigation",
      description: "Federal agents have seized records related to suspicious wire transfers totaling $12 million through seemingly legitimate business accounts. Three employees are under investigation, customers are asking questions, and you must balance cooperation with protecting innocent customers and employees while maintaining operations.",
      questions: [
        {
          department: "CEO/SVPs",
          questionText: "Agents want employee personal information beyond what's legally required. Your lawyer says you can refuse but it might appear uncooperative.",
          choices: [
            {"text": "Provide all requested information to show cooperation", "type": "wrong", "explanation": "May violate employee privacy rights and set bad precedent"},
            {"text": "Only provide legally required information", "type": "correct", "explanation": "Balances cooperation with legal obligations and employee rights"},
            {"text": "Negotiate a middle ground with partial information", "type": "neutral", "explanation": "May satisfy both sides but could confuse legal boundaries"},
            {"text": "Ask agents to get a warrant for additional information", "type": "neutral", "explanation": "Legal right but may strain relationship with investigators"}
          ]
        },
        {
          department: "Finance",
          questionText: "You must decide whether to freeze $50M in related accounts. Innocent customers will be hurt, but money might disappear.",
          choices: [
            {"text": "Freeze all potentially related accounts immediately", "type": "neutral", "explanation": "Protects evidence but harms innocent customers severely"},
            {"text": "Only freeze accounts with direct evidence of wrongdoing", "type": "correct", "explanation": "More targeted approach balancing investigation with customer impact"},
            {"text": "Wait for law enforcement guidance before freezing any accounts", "type": "wrong", "explanation": "Money may disappear while waiting for guidance"},
            {"text": "Secretly monitor accounts without freezing them", "type": "neutral", "explanation": "Gathers intelligence but allows potential money movement"}
          ]
        }
      ]
    },
    {
      title: "Economic Crisis and Loan Defaults",
      description: "A major local employer has declared bankruptcy, affecting 15% of your loan portfolio. Commercial real estate values are dropping 30%, unemployment is spiking to 12%, and you're facing potential $25 million in loan losses. Regulators are increasing scrutiny and depositors are nervous about bank stability.",
      questions: [
        {
          department: "Loans",
          questionText: "Customers are requesting payment deferrals on $50M in loans. Approving helps customers but may violate lending agreements.",
          choices: [
            {"text": "Approve all deferral requests to help struggling customers", "type": "wrong", "explanation": "May violate loan terms and create regulatory issues"},
            {"text": "Evaluate each request individually based on hardship and ability to pay", "type": "correct", "explanation": "Balances customer needs with prudent risk management"},
            {"text": "Deny all deferrals to maintain loan performance metrics", "type": "wrong", "explanation": "May force unnecessary foreclosures and damage community relations"},
            {"text": "Offer deferrals only to customers with perfect payment history", "type": "neutral", "explanation": "Conservative but may not help those who need it most"}
          ]
        },
        {
          department: "Finance",
          questionText: "You can raise capital now at unfavorable terms, or wait and hope conditions improve but risk regulatory intervention.",
          choices: [
            {"text": "Raise capital immediately despite poor terms", "type": "correct", "explanation": "Ensures stability but dilutes existing shareholders significantly"},
            {"text": "Wait for better market conditions", "type": "wrong", "explanation": "Risks regulatory action if losses mount quickly"},
            {"text": "Implement aggressive cost-cutting instead", "type": "neutral", "explanation": "Helps but may not be sufficient for large loan losses"},
            {"text": "Seek government assistance programs", "type": "neutral", "explanation": "May help but comes with restrictions and stigma"}
          ]
        }
      ]
    }
  ];

  // Use a simple random selection
  const selectedIndex = Math.floor(randomValue * scenarios.length);
  const selectedScenario = scenarios[selectedIndex];

  // Log which scenario was selected
  console.log(`Selected scenario index: ${selectedIndex}`);
  console.log(`Selected scenario title: ${selectedScenario.title}`);

  // Add debugging info to response
  const response = {
    ...selectedScenario,
    debug: {
      randomValue: randomValue,
      selectedIndex: selectedIndex,
      timestamp: Date.now(),
      scenarioTitle: selectedScenario.title
    }
  };

  // Aggressive anti-caching headers
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '-1');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  res.status(200).json(response);
}