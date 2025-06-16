// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Test endpoint
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is working!' }

// Shuffle question order to randomize department sequence
function shuffleQuestionOrder(scenario) {
    // Create a copy of the scenario
    const shuffledScenario = { ...scenario };
    
    // Create a copy of questions array and shuffle it
    const shuffledQuestions = [...scenario.questions];
    
    // Fisher-Yates shuffle algorithm for true randomization
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
    
    // Renumber questions to maintain sequential numbering (1-21)
    shuffledQuestions.forEach((question, index) => {
        question.questionNumber = index + 1;
    });
    
    shuffledScenario.questions = shuffledQuestions;
    
    console.log('Questions shuffled - new order:', shuffledQuestions.map(q => `${q.questionNumber}:${q.department}`).join(', '));
    
    return shuffledScenario;
});
});

// ENHANCED Game Scenario Generation
app.post('/api/generate-scenario', async (req, res) => {
    try {
        const apiKey = process.env.OPENAI_API_KEY;
        
        console.log('AI Scenario Generation Request Received');
        console.log('API key exists:', !!apiKey);
        
        if (!apiKey) {
            console.log('No OpenAI API key found');
            return res.status(500).json({ error: 'OpenAI API key not configured' });
        }

        // Enhanced department-specific contexts for the game
        const departmentContexts = {
            'CEO_SVPs': {
                name: 'CEO/SVPs',
                focus: 'Executive leadership, strategic decisions, stakeholder management, crisis communication',
                responsibilities: [
                    'Setting overall crisis response strategy and priorities',
                    'Managing board of directors and investor communications',
                    'Making high-level decisions about business continuity',
                    'Coordinating with regulators and government agencies',
                    'Public relations and media management during crises',
                    'Ensuring adequate resources for crisis response teams'
                ]
            },
            'IT_Security': {
                name: 'IT/Security',
                focus: 'Technology infrastructure, cybersecurity, system recovery, digital threats',
                responsibilities: [
                    'Maintaining and protecting core banking systems',
                    'Implementing cybersecurity measures and incident response',
                    'Managing system outages and recovery procedures',
                    'Coordinating with external security experts and vendors',
                    'Ensuring data backup and disaster recovery capabilities',
                    'Monitoring for additional threats during crisis situations'
                ]
            },
            'HR': {
                name: 'HR',
                focus: 'Employee safety, workforce management, internal communications, staffing',
                responsibilities: [
                    'Ensuring employee safety and wellbeing during crises',
                    'Managing workforce deployment and emergency staffing',
                    'Internal communications and employee morale',
                    'Coordinating with employee assistance programs',
                    'Handling crisis-related personnel issues and policies',
                    'Managing remote work and alternative work arrangements'
                ]
            },
            'Finance': {
                name: 'Finance',
                focus: 'Financial impact assessment, cash flow, funding, cost management',
                responsibilities: [
                    'Assessing immediate financial impact of the crisis',
                    'Managing cash flow and liquidity during emergencies',
                    'Coordinating emergency funding and capital needs',
                    'Cost control and budget reallocation during crisis',
                    'Financial reporting and disclosure requirements',
                    'Insurance claims and recovery cost estimation'
                ]
            },
            'Loans': {
                name: 'Loans',
                focus: 'Loan portfolio management, borrower relations, credit risk, regulatory compliance',
                responsibilities: [
                    'Managing loan portfolio risk during crisis events',
                    'Handling borrower communications and assistance programs',
                    'Implementing emergency lending policies and procedures',
                    'Coordinating with collections and workout teams',
                    'Regulatory compliance for lending operations during crises',
                    'Documentation and reporting of crisis-related loan activities'
                ]
            },
            'Accounting': {
                name: 'Accounting',
                focus: 'Financial reporting, regulatory compliance, audit requirements, record keeping',
                responsibilities: [
                    'Maintaining accurate financial records during crisis events',
                    'Managing regulatory reporting deadlines and requirements',
                    'Coordinating with external auditors during emergencies',
                    'Implementing emergency accounting procedures and controls',
                    'Documentation of crisis-related financial impacts',
                    'Ensuring compliance with accounting standards during disruptions'
                ]
            },
            'Deposits': {
                name: 'Deposits',
                focus: 'Customer deposit protection, account management, customer retention, service delivery',
                responsibilities: [
                    'Protecting customer deposit accounts and maintaining confidence',
                    'Managing customer service delivery during crisis events',
                    'Implementing emergency procedures for deposit operations',
                    'Coordinating with FDIC and deposit insurance processes',
                    'Handling customer communications and retention efforts',
                    'Managing alternative service delivery methods during disruptions'
                ]
            }
        };

        // Diverse crisis scenarios with specific impacts for each department
        const crisisScenarios = [
            {
                type: 'cyberattack_ransomware',
                title: 'Sophisticated Ransomware Attack Cripples Core Banking Systems',
                description: 'A state-sponsored ransomware group has infiltrated the bank\'s network through a phishing email, encrypting critical systems including the core banking platform, loan servicing system, and customer databases. The attackers are demanding $2.5 million in cryptocurrency within 72 hours. Customer online banking is completely down, ATM networks are offline, and branch operations are severely limited. The FBI has been notified and is investigating. Early estimates suggest 85% of digital banking services are compromised, affecting over 150,000 customers. The attack occurred at 3:47 AM on a Monday morning, and markets open in 5 hours.',
                impacts: {
                    'CEO_SVPs': ['Board notification within 2 hours', 'Regulatory disclosure requirements', 'Media and public relations crisis'],
                    'IT_Security': ['System isolation and recovery', 'Forensic investigation coordination', 'Alternative system activation'],
                    'HR': ['Remote work protocols', 'Employee cybersecurity training', 'Crisis team staffing'],
                    'Finance': ['$2.5M ransom decision', 'Cyber insurance claims', 'Revenue impact assessment'],
                    'Loans': ['Manual loan processing', 'Borrower communication', 'Payment processing disruption'],
                    'Accounting': ['Manual transaction recording', 'Audit trail preservation', 'Regulatory reporting delays'],
                    'Deposits': ['Customer deposit protection', 'Branch-only service delivery', 'Deposit run prevention']
                }
            },
            {
                type: 'natural_disaster_hurricane',
                title: 'Category 4 Hurricane Devastates Regional Operations',
                description: 'Hurricane Marina has made landfall as a Category 4 storm, forcing evacuation of 12 of the bank\'s 18 branches across three states. Widespread power outages have affected 450,000 customers in the region, and flooding has damaged two branch locations and a regional operations center. The storm surge has reached 8 feet in coastal areas, and emergency services are overwhelmed. Telecommunications infrastructure is severely damaged, making customer contact difficult. The National Weather Service predicts the area will be inaccessible for 72-96 hours. Local businesses are shut down, and the economic impact is estimated at $800 million. Recovery operations must begin immediately while the storm continues.',
                impacts: {
                    'CEO_SVPs': ['Disaster declaration coordination', 'Community support initiatives', 'Business continuity planning'],
                    'IT_Security': ['Backup data center activation', 'Network infrastructure protection', 'Remote access expansion'],
                    'HR': ['Employee evacuation and safety', 'Emergency staffing from other regions', 'Employee assistance programs'],
                    'Finance': ['Disaster recovery funding', 'Insurance claim coordination', 'Cash delivery to operating branches'],
                    'Loans': ['Payment deferrals for affected borrowers', 'Property damage assessments', 'SBA disaster loan coordination'],
                    'Accounting': ['Financial impact estimation', 'Disaster cost tracking', 'Regulatory reporting modifications'],
                    'Deposits': ['Mobile banking unit deployment', 'Emergency cash access', 'Account access alternatives']
                }
            },
            {
                type: 'regulatory_investigation',
                title: 'Federal Investigation into Alleged Fair Lending Violations',
                description: 'The Department of Justice and CFPB have launched a joint investigation into alleged discriminatory lending practices, focusing on mortgage and small business loans over the past three years. Federal agents have served search warrants and are on-site reviewing records. The investigation stems from a whistleblower complaint alleging systematic bias in loan approvals affecting minority communities. Early reports suggest the bank may face civil penalties exceeding $50 million and potential criminal charges against executives. News of the investigation has leaked to the media, causing the stock price to drop 12% in pre-market trading. Regulators are demanding immediate access to all loan files, internal communications, and training records.',
                impacts: {
                    'CEO_SVPs': ['Legal strategy coordination', 'Investor and stakeholder communications', 'Executive legal exposure'],
                    'IT_Security': ['Electronic discovery preparation', 'Data preservation protocols', 'System access for investigators'],
                    'HR': ['Employee interview coordination', 'Legal hold communications', 'Whistleblower protection'],
                    'Finance': ['Legal cost budgeting', 'Penalty reserve estimates', 'Stock price impact management'],
                    'Loans': ['Loan file production', 'Policy review and revision', 'Training program evaluation'],
                    'Accounting': ['Document preservation', 'Financial impact disclosure', 'Audit coordination'],
                    'Deposits': ['Customer confidence maintenance', 'Account retention strategies', 'Community relations']
                }
            },
            {
                type: 'economic_crisis',
                title: 'Regional Economic Collapse Following Major Employer Bankruptcies',
                description: 'Three major employers in the region, representing 15,000 jobs, have filed for bankruptcy within two weeks, triggering a local economic crisis. Unemployment has spiked from 3.2% to 11.8% almost overnight. The bank is experiencing a surge in loan defaults, with delinquency rates jumping from 2.1% to 7.4% in thirty days. Customer deposits are declining as people withdraw savings to cover expenses. Local real estate values have dropped 15% and continue falling. Small businesses are requesting emergency loans while simultaneously defaulting on existing credit. The local newspaper has published articles questioning the bank\'s stability, leading to increased customer anxiety and deposit withdrawals totaling $45 million in the past week.',
                impacts: {
                    'CEO_SVPs': ['Community leadership role', 'Capital adequacy planning', 'Stakeholder confidence building'],
                    'IT_Security': ['System load management', 'Transaction volume increases', 'Security during high stress'],
                    'HR': ['Workforce reduction planning', 'Employee retention strategies', 'Community volunteer coordination'],
                    'Finance': ['Liquidity management', 'Credit loss provisioning', 'Capital injection planning'],
                    'Loans': ['Default management surge', 'Modification program expansion', 'New lending criteria'],
                    'Accounting': ['Loan loss reserves', 'Impairment assessments', 'Regulatory capital calculations'],
                    'Deposits': ['Deposit retention campaigns', 'Customer reassurance', 'Rate adjustment strategies']
                }
            }
        ];

        // Select a random crisis scenario
        const selectedScenario = crisisScenarios[Math.floor(Math.random() * crisisScenarios.length)];
        
        const fullPrompt = `Generate a complete banking crisis management scenario for training purposes.

CRISIS SCENARIO: ${selectedScenario.title}
CRISIS DESCRIPTION: ${selectedScenario.description}

Create 21 department-specific questions - exactly 3 questions for each of these 7 departments:
- CEO_SVPs (executive leadership)
- IT_Security (technology and security)  
- HR (human resources)
- Finance (financial management)
- Loans (lending operations)
- Accounting (financial reporting)
- Deposits (customer deposits and services)

DEPARTMENT-SPECIFIC CONTEXT:
${Object.entries(departmentContexts).map(([dept, info]) => 
    `${dept}: ${info.focus}\nKey responsibilities: ${info.responsibilities.join(', ')}\nSpecific impacts from this crisis: ${selectedScenario.impacts[dept]?.join(', ') || 'General crisis response'}`
).join('\n\n')}

CRITICAL REQUIREMENTS FOR QUESTIONS:
- Each question must be SPECIFICALLY relevant to that department's role in THIS crisis
- Questions should address the specific impacts listed for each department
- Each question must have 3 multiple choice options (A, B, C)
- RANDOMLY determine which option (A, B, or C) is correct for each question
- Distribute correct answers across all positions - don't favor any position
- ONLY 1 option is CORRECT (+20 to +25 points)
- The other 2 options are WRONG (-15 to -25 points)
- Make wrong answers clearly poor decisions that would worsen the crisis
- Make the correct answer reflect banking best practices and crisis management expertise
- Avoid generic questions - make each question unique to the department and crisis type

Format as JSON:
{
  "title": "${selectedScenario.title}",
  "description": "${selectedScenario.description}",
  "questions": [
    {
      "questionNumber": 1,
      "department": "CEO_SVPs",
      "questionText": "Specific question about ${selectedScenario.impacts['CEO_SVPs']?.[0] || 'executive response'}...",
      "options": [
        {
          "text": "Option A text addressing this specific crisis impact",
          "points": -20
        },
        {
          "text": "Option B text with correct crisis management approach", 
          "points": 22
        },
        {
          "text": "Option C text with poor crisis response",
          "points": -18
        }
      ]
    }
  ]
}

ENSURE VARIETY AND SPECIFICITY: Make every question directly address the department's specific challenges in this exact crisis scenario. Avoid generic banking questions.`;

        console.log('Requesting ENHANCED AI scenario generation...');
        
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
                        content: `You are an expert banking crisis management consultant with deep knowledge of how each bank department operates during specific types of crises. 

CRITICAL INSTRUCTIONS:
- Generate questions that are DEPARTMENT and CRISIS SPECIFIC, not generic banking questions
- Each department has unique responsibilities and challenges during different types of crises
- Questions must address the specific crisis impacts listed for each department
- Randomize which option (A, B, or C) is correct - don't always make the same position correct
- Make wrong answers clearly poor crisis management decisions
- Make correct answers reflect banking industry best practices

Always respond with valid JSON only.`
                    },
                    {
                        role: 'user',
                        content: fullPrompt
                    }
                ],
                max_tokens: 4000,
                temperature: 0.95
            })
        });

        console.log('OpenAI API response status:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.log('OpenAI API error response:', errorText);
            throw new Error(`OpenAI API Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        let responseContent = data.choices[0].message.content.trim();
        
        // Clean up response (remove any markdown formatting)
        responseContent = responseContent.replace(/```json\n?/g, '').replace(/```\n?/g, '');
        
        console.log('Raw AI response length:', responseContent.length);
        
        try {
            const aiScenario = JSON.parse(responseContent);
            
            // Validate the response structure
            if (!aiScenario.title || !aiScenario.description || !aiScenario.questions) {
                throw new Error('Invalid scenario structure from AI');
            }
            
            if (aiScenario.questions.length !== 21) {
                console.warn(`Expected 21 questions, got ${aiScenario.questions.length}`);
            }
            
            // Convert AI format to game format and ensure randomization
            const gameScenario = convertAIToGameFormat(aiScenario);
            const randomizedScenario = ensureRandomizedAnswers(gameScenario);
            const finalScenario = shuffleQuestionOrder(randomizedScenario);
            
            console.log(`AI Generated: "${aiScenario.title}" with ${finalScenario.questions.length} department-specific questions in randomized order`);
            
            res.json(finalScenario);
            
        } catch (parseError) {
            console.error('JSON parse error:', parseError);
            console.log('Raw response that failed:', responseContent.substring(0, 500));
            
            // Fallback to enhanced scenario with specific crisis context
            const fallbackScenario = createEnhancedCrisisScenario(selectedScenario, departmentContexts);
            const shuffledFallback = shuffleQuestionOrder(fallbackScenario);
            res.json(shuffledFallback);
        }
        
    } catch (error) {
        console.error('Error generating AI scenario:', error);
        res.status(500).json({ 
            error: 'Failed to generate scenario', 
            details: error.message 
        });
    }
});

// Convert AI response format to game format
function convertAIToGameFormat(aiScenario) {
    const gameQuestions = aiScenario.questions.map((q, index) => {
        // Convert simple points to impact format
        const impacts = {};
        const departments = ['CEO_SVPs', 'IT_Security', 'HR', 'Finance', 'Loans', 'Accounting', 'Deposits'];
        
        departments.forEach(dept => {
            impacts[dept] = dept === q.department ? 0 : 0; // Other departments get 0
        });
        
        // Create options with impact format
        const gameOptions = q.options.map(option => ({
            text: option.text,
            impacts: {
                ...impacts,
                [q.department]: option.points || 0
            }
        }));
        
        return {
            questionNumber: index + 1,
            department: q.department,
            questionText: q.questionText,
            options: gameOptions
        };
    });
    
    return {
        title: aiScenario.title,
        description: aiScenario.description,
        questions: gameQuestions
    };
}

// Ensure answers are truly randomized
function ensureRandomizedAnswers(scenario) {
    const processedQuestions = scenario.questions.map(question => {
        // Find which option is currently correct (has positive points)
        const correctIndex = question.options.findIndex(option => 
            option.impacts[question.department] > 0
        );
        
        if (correctIndex === -1) {
            // No correct answer found, make one randomly
            const randomCorrectIndex = Math.floor(Math.random() * 3);
            question.options.forEach((option, index) => {
                if (index === randomCorrectIndex) {
                    option.impacts[question.department] = 20 + Math.floor(Math.random() * 6); // 20-25
                } else {
                    option.impacts[question.department] = -15 - Math.floor(Math.random() * 11); // -15 to -25
                }
            });
            return question;
        }
        
        // If correct answer is always in the same position, randomize it
        const targetPosition = Math.floor(Math.random() * 3);
        
        if (correctIndex !== targetPosition) {
            // Swap the correct answer to a random position
            const temp = question.options[correctIndex];
            question.options[correctIndex] = question.options[targetPosition];
            question.options[targetPosition] = temp;
        }
        
        return question;
    });
    
    return {
        ...scenario,
        questions: processedQuestions
    };
}

// Enhanced fallback scenario creation with crisis-specific questions
function createEnhancedCrisisScenario(selectedScenario, departmentContexts) {
    const departments = ['CEO_SVPs', 'IT_Security', 'HR', 'Finance', 'Loans', 'Accounting', 'Deposits'];
    const questions = [];
    let questionNumber = 1;
    
    // Crisis-specific question templates based on scenario type
    const crisisQuestionTemplates = {
        'cyberattack_ransomware': {
            'CEO_SVPs': [
                'How do you handle immediate board notification about the ransomware attack?',
                'What is your strategy for managing media inquiries about the cybersecurity breach?',
                'How do you decide whether to pay the $2.5 million ransom demand?'
            ],
            'IT_Security': [
                'What is your immediate response to isolate the ransomware infection?',
                'How do you prioritize system recovery to restore critical banking functions?',
                'What forensic investigation steps should be taken while systems are compromised?'
            ],
            'HR': [
                'How do you manage employee communications about the cybersecurity incident?',
                'What staffing adjustments are needed when digital systems are down?',
                'How do you handle employees who may have been the phishing email targets?'
            ],
            'Finance': [
                'How do you assess the immediate financial impact of the ransomware attack?',
                'What is your approach to managing the $2.5 million ransom payment decision?',
                'How do you handle cyber insurance claims and coverage during this incident?'
            ],
            'Loans': [
                'How do you maintain loan operations when the loan servicing system is encrypted?',
                'What is your strategy for communicating with borrowers about payment processing delays?',
                'How do you handle time-sensitive loan approvals during the system outage?'
            ],
            'Accounting': [
                'How do you maintain financial record integrity when accounting systems are compromised?',
                'What manual procedures should be implemented for transaction recording?',
                'How do you handle regulatory reporting requirements during the system outage?'
            ],
            'Deposits': [
                'How do you reassure customers about deposit safety during the cyberattack?',
                'What alternative service delivery methods should be implemented immediately?',
                'How do you prevent a deposit run when online banking is completely down?'
            ]
        },
        'natural_disaster_hurricane': {
            'CEO_SVPs': [
                'How do you coordinate with emergency management officials during the hurricane?',
                'What is your strategy for communicating business continuity to stakeholders?',
                'How do you balance employee safety with maintaining critical operations?'
            ],
            'IT_Security': [
                'How do you protect critical IT infrastructure from hurricane damage?',
                'What backup systems should be activated when primary data centers are threatened?',
                'How do you ensure network connectivity when telecommunications are damaged?'
            ],
            'HR': [
                'How do you manage employee evacuation and safety during the hurricane?',
                'What emergency staffing arrangements are needed for continuing operations?',
                'How do you coordinate employee assistance programs for storm-affected staff?'
            ],
            'Finance': [
                'How do you manage cash distribution when branches are closed due to the hurricane?',
                'What emergency funding is needed for disaster recovery operations?',
                'How do you handle insurance claims and disaster-related expenses?'
            ],
            'Loans': [
                'How do you handle loan payment deferrals for hurricane-affected borrowers?',
                'What is your approach to assessing collateral damage from the storm?',
                'How do you coordinate with SBA for disaster lending programs?'
            ],
            'Accounting': [
                'How do you track and account for disaster-related costs and losses?',
                'What modifications are needed for financial reporting during the emergency?',
                'How do you handle audit requirements when records may be damaged?'
            ],
            'Deposits': [
                'How do you provide emergency cash access when branches are closed?',
                'What mobile banking solutions can be deployed for hurricane-affected areas?',
                'How do you maintain deposit operations when ATM networks are down?'
            ]
        }
    };
    
    departments.forEach(department => {
        const deptInfo = departmentContexts[department];
        const crisisQuestions = crisisQuestionTemplates[selectedScenario.type]?.[department] || 
                               [
                                   `How should ${department} respond to this specific crisis situation?`,
                                   `What ${department} procedures should be activated for this emergency?`,
                                   `How should ${department} coordinate with other departments during this crisis?`
                               ];
        
        for (let i = 0; i < 3; i++) {
            // Generate 3 options with randomized correct answer position
            const correctPosition = Math.floor(Math.random() * 3);
            const options = [];
            
            for (let j = 0; j < 3; j++) {
                const isCorrect = j === correctPosition;
                const points = isCorrect ? 
                    (20 + Math.floor(Math.random() * 6)) :  // 20-25 for correct
                    (-15 - Math.floor(Math.random() * 11)); // -15 to -25 for wrong
                
                options.push({
                    text: generateCrisisSpecificOption(department, selectedScenario.type, i, j, isCorrect),
                    impacts: generateRightWrongImpacts(department, points)
                });
            }
            
            const question = {
                questionNumber: questionNumber,
                department: department,
                questionText: crisisQuestions[i] || `How should ${department} handle this specific crisis situation?`,
                options: options
            };
            questions.push(question);
            questionNumber++;
        }
    });
    
    return {
        title: selectedScenario.title,
        description: selectedScenario.description,
        questions: questions
    };
}

// Generate crisis and department-specific option text
function generateCrisisSpecificOption(department, crisisType, questionIndex, optionIndex, isCorrect) {
    const crisisSpecificOptions = {
        'cyberattack_ransomware': {
            correct: [
                'Immediately activate cyber incident response plan and notify all stakeholders',
                'Isolate affected systems and coordinate with cybersecurity experts',
                'Implement manual backup procedures while preserving forensic evidence'
            ],
            wrong: [
                'Wait to assess full damage before taking any action',
                'Pay the ransom immediately to restore operations quickly',
                'Continue normal operations to avoid alarming customers',
                'Restart all systems immediately without investigation'
            ]
        },
        'natural_disaster_hurricane': {
            correct: [
                'Activate disaster response plan and coordinate with emergency management',
                'Prioritize employee safety while maintaining critical operations',
                'Deploy mobile services and alternative delivery channels'
            ],
            wrong: [
                'Keep all branches open to maintain normal service levels',
                'Wait for storm to pass before implementing any changes',
                'Focus only on physical security without considering operational continuity',
                'Delay communications until damage assessment is complete'
            ]
        }
    };
    
    const crisisOptions = crisisSpecificOptions[crisisType];
    if (!crisisOptions) {
        // Generic fallback options
        if (isCorrect) {
            return 'Implement appropriate emergency procedures and communicate transparently';
        } else {
            return ['Wait for more information', 'Minimize the situation', 'Handle internally only'][optionIndex % 3];
        }
    }
    
    if (isCorrect) {
        return crisisOptions.correct[optionIndex % crisisOptions.correct.length];
    } else {
        return crisisOptions.wrong[Math.floor(Math.random() * crisisOptions.wrong.length)];
    }
}

// Generate impacts with RIGHT/WRONG only (no neutral)
function generateRightWrongImpacts(primaryDept, baseScore) {
    const departments = ['CEO_SVPs', 'IT_Security', 'HR', 'Finance', 'Loans', 'Accounting', 'Deposits'];
    const impacts = {};
    
    departments.forEach(dept => {
        if (dept === primaryDept) {
            impacts[dept] = baseScore;
        } else {
            impacts[dept] = 0;
        }
    });
    
    return impacts;
}

// ENHANCED DISCUSSION SCENARIO ENDPOINT
app.post('/api/generate-discussion-scenario', async (req, res) => {
    try {
        const { department, complexity } = req.body;
        const apiKey = process.env.OPENAI_API_KEY;
        
        console.log(`Discussion scenario request: ${department} - ${complexity}`);
        console.log('API key exists:', !!apiKey);
        
        if (!apiKey) {
            console.log('No OpenAI API key found');
            return res.status(500).json({ error: 'OpenAI API key not configured' });
        }
        
        // Enhanced department-specific contexts and responsibilities
        const departmentContexts = {
            deposits: {
                name: 'Deposits',
                focus: 'Customer deposit accounts, savings, checking, CDs, money market accounts',
                responsibilities: [
                    'Managing customer deposit relationships and retention',
                    'Processing deposit transactions and account maintenance',
                    'Handling deposit product compliance and regulations',
                    'Customer service for deposit account holders',
                    'Interest rate management and product pricing',
                    'Deposit insurance (FDIC) compliance and reporting'
                ],
                uniqueChallenges: [
                    'Bank runs and deposit withdrawals during crises',
                    'Interest rate environment changes',
                    'Customer confidence and retention',
                    'Regulatory compliance for deposit products',
                    'Technology failures affecting account access'
                ],
                metrics: 'deposit volumes, customer satisfaction, account growth, retention rates'
            },
            tellers: {
                name: 'Tellers',
                focus: 'Front-line customer service, cash handling, transaction processing',
                responsibilities: [
                    'Processing customer transactions (deposits, withdrawals, transfers)',
                    'Cash management and vault operations',
                    'Customer identification and verification',
                    'Cross-selling bank products and services',
                    'Fraud detection and prevention at transaction level',
                    'Compliance with cash handling procedures'
                ],
                uniqueChallenges: [
                    'Robbery and security threats',
                    'Cash shortages or vault issues',
                    'Counterfeit currency detection',
                    'Long customer wait times during system outages',
                    'Handling upset customers during service disruptions'
                ],
                metrics: 'transaction accuracy, customer wait times, cash balancing, sales conversions'
            },
            loans: {
                name: 'Loans',
                focus: 'Loan origination, underwriting, portfolio management, credit risk',
                responsibilities: [
                    'Evaluating and approving loan applications',
                    'Credit risk assessment and underwriting standards',
                    'Loan portfolio management and monitoring',
                    'Regulatory compliance for lending practices',
                    'Managing loan documentation and legal requirements',
                    'Handling loan modifications and workouts'
                ],
                uniqueChallenges: [
                    'Economic downturns affecting borrower ability to pay',
                    'Rising default rates and credit losses',
                    'Regulatory changes in lending standards',
                    'Fair lending compliance and discrimination issues',
                    'Competition from fintech and online lenders'
                ],
                metrics: 'loan approval rates, default rates, portfolio quality, origination volumes'
            },
            accounting: {
                name: 'Accounting',
                focus: 'Financial reporting, general ledger, regulatory reporting, audit compliance',
                responsibilities: [
                    'Preparing accurate financial statements',
                    'Managing general ledger and chart of accounts',
                    'Regulatory reporting (Call Reports, etc.)',
                    'Supporting external audits and examinations',
                    'Month-end and quarter-end close processes',
                    'Financial analysis and variance reporting'
                ],
                uniqueChallenges: [
                    'Regulatory deadline pressures for financial reporting',
                    'Complex accounting standards changes',
                    'System failures during critical reporting periods',
                    'Audit findings and corrective action requirements',
                    'Reconciliation issues and accounting errors'
                ],
                metrics: 'reporting accuracy, timeliness of closes, audit findings, regulatory compliance'
            },
            bookkeeping: {
                name: 'Bookkeeping',
                focus: 'Daily transaction recording, reconciliations, account maintenance',
                responsibilities: [
                    'Recording daily banking transactions',
                    'Account reconciliations and balancing',
                    'Maintaining accurate customer account records',
                    'Processing journal entries and adjustments',
                    'Supporting month-end closing activities',
                    'Document management and filing'
                ],
                uniqueChallenges: [
                    'High transaction volumes during peak periods',
                    'System errors causing reconciliation issues',
                    'Missing documentation for transactions',
                    'Time-sensitive deadline pressures',
                    'Manual processes prone to human error'
                ],
                metrics: 'reconciliation accuracy, processing speed, error rates, backlogs'
            },
            loan_servicing: {
                name: 'Loan Servicing',
                focus: 'Payment processing, customer account management, collections, modifications',
                responsibilities: [
                    'Processing loan payments and maintaining balances',
                    'Customer service for existing borrowers',
                    'Managing delinquent accounts and collections',
                    'Processing loan modifications and deferrals',
                    'Escrow account management for mortgages',
                    'Investor reporting for sold loans'
                ],
                uniqueChallenges: [
                    'High delinquency rates during economic stress',
                    'Customer hardship and modification requests',
                    'Foreclosure processes and legal requirements',
                    'Investor requirements and reporting deadlines',
                    'System outages affecting payment processing'
                ],
                metrics: 'delinquency rates, customer satisfaction, modification success rates, collections efficiency'
            },
            compliance: {
                name: 'Compliance',
                focus: 'Regulatory adherence, risk management, policy enforcement, training',
                responsibilities: [
                    'Monitoring compliance with banking regulations',
                    'Developing and updating bank policies and procedures',
                    'Conducting compliance training and awareness programs',
                    'Managing regulatory examinations and responses',
                    'Anti-money laundering (AML) and BSA compliance',
                    'Fair lending and consumer protection compliance'
                ],
                uniqueChallenges: [
                    'Rapidly changing regulatory requirements',
                    'Regulatory examination findings and enforcement actions',
                    'Complex multi-jurisdiction compliance requirements',
                    'Staff training and awareness challenges',
                    'Balancing business growth with compliance requirements'
                ],
                metrics: 'examination ratings, violation rates, training completion, policy adherence'
            },
            it: {
                name: 'IT',
                focus: 'Technology infrastructure, cybersecurity, system maintenance, digital banking',
                responsibilities: [
                    'Maintaining core banking systems and infrastructure',
                    'Cybersecurity monitoring and incident response',
                    'System upgrades and technology implementations',
                    'Digital banking platform management',
                    'Data backup and disaster recovery planning',
                    'Vendor management for technology services'
                ],
                uniqueChallenges: [
                    'Cyberattacks and data security breaches',
                    'System outages and technical failures',
                    'Legacy system limitations and upgrade challenges',
                    'Rapid technology changes and innovation pressure',
                    'Balancing security with user convenience'
                ],
                metrics: 'system uptime, security incident rates, project delivery, user satisfaction'
            },
            security: {
                name: 'Security',
                focus: 'Physical security, fraud prevention, investigations, risk assessment',
                responsibilities: [
                    'Physical security of bank premises and assets',
                    'Fraud detection and investigation',
                    'Security risk assessments and threat analysis',
                    'Emergency response and crisis management',
                    'Security training and awareness programs',
                    'Coordination with law enforcement'
                ],
                uniqueChallenges: [
                    'Armed robberies and physical threats',
                    'Sophisticated fraud schemes and scams',
                    'Insider threats and employee misconduct',
                    'Emergency situations requiring evacuation',
                    'Balancing security with customer accessibility'
                ],
                metrics: 'incident rates, response times, loss prevention, investigation success rates'
            },
            new_accounts: {
                name: 'New Accounts',
                focus: 'Account opening, customer onboarding, identity verification, documentation',
                responsibilities: [
                    'Opening new customer accounts efficiently',
                    'Customer identity verification and due diligence',
                    'Know Your Customer (KYC) and CIP compliance',
                    'Account documentation and record keeping',
                    'Cross-selling additional products during onboarding',
                    'Managing account opening backlogs and processing times'
                ],
                uniqueChallenges: [
                    'Identity theft and fraudulent account applications',
                    'Complex KYC requirements for business accounts',
                    'High application volumes during promotional periods',
                    'Technology failures during account opening process',
                    'Regulatory changes affecting documentation requirements'
                ],
                metrics: 'account opening volume, processing time, approval rates, compliance accuracy'
            }
        };

        // Diverse crisis types with specific banking context
        const crisisTypes = [
            {
                type: 'cybersecurity_breach',
                description: 'Major data breach exposing customer information',
                bankingContext: 'Customer data compromised, potential regulatory violations, reputation damage'
            },
            {
                type: 'natural_disaster',
                description: 'Severe weather disrupting operations',
                bankingContext: 'Branch closures, system outages, customer service disruption, business continuity'
            },
            {
                type: 'economic_downturn',
                description: 'Sudden economic recession affecting customers',
                bankingContext: 'Rising loan defaults, deposit withdrawals, decreased lending demand'
            },
            {
                type: 'regulatory_investigation',
                description: 'Government investigation into bank practices',
                bankingContext: 'Potential violations, examination scrutiny, enforcement actions, reputation risk'
            },
            {
                type: 'technology_failure',
                description: 'Critical system outage affecting core operations',
                bankingContext: 'Transaction processing halted, customer access limited, manual workarounds needed'
            },
            {
                type: 'fraud_scheme',
                description: 'Large-scale fraud targeting the bank',
                bankingContext: 'Customer losses, investigation requirements, system vulnerabilities exposed'
            },
            {
                type: 'liquidity_crisis',
                description: 'Unexpected demand for cash and liquidity',
                bankingContext: 'Large deposit withdrawals, funding pressures, capital adequacy concerns'
            },
            {
                type: 'reputation_crisis',
                description: 'Negative publicity affecting customer confidence',
                bankingContext: 'Social media backlash, customer attrition, competitive disadvantage'
            },
            {
                type: 'vendor_failure',
                description: 'Critical third-party vendor experiencing issues',
                bankingContext: 'Service disruptions, compliance gaps, operational dependencies exposed'
            },
            {
                type: 'personnel_crisis',
                description: 'Key staff departure or misconduct incident',
                bankingContext: 'Knowledge gaps, operational disruption, internal control weaknesses'
            }
        ];

        const departmentInfo = departmentContexts[department];
        if (!departmentInfo) {
            return res.status(400).json({ error: 'Invalid department specified' });
        }

        // Select a random crisis type
        const selectedCrisis = crisisTypes[Math.floor(Math.random() * crisisTypes.length)];
        
        const prompt = `Generate a realistic, department-specific banking crisis scenario for tabletop discussion.

TARGET DEPARTMENT: ${departmentInfo.name}
COMPLEXITY LEVEL: ${complexity}
CRISIS TYPE: ${selectedCrisis.type} - ${selectedCrisis.description}

DEPARTMENT CONTEXT:
- Primary Focus: ${departmentInfo.focus}
- Key Responsibilities: ${departmentInfo.responsibilities.join(', ')}
- Unique Challenges: ${departmentInfo.uniqueChallenges.join(', ')}
- Success Metrics: ${departmentInfo.metrics}

CRISIS CONTEXT: ${selectedCrisis.bankingContext}

REQUIREMENTS:
1. Create a scenario that is SPECIFICALLY relevant to ${departmentInfo.name} department operations
2. The crisis should directly impact their day-to-day responsibilities and decision-making
3. Include specific banking industry details (dollar amounts, timeframes, regulatory concerns)
4. Make the scenario realistic based on actual ${departmentInfo.name} department challenges
5. Ensure the discussion points focus on ${departmentInfo.name}-specific actions and decisions

COMPLEXITY GUIDELINES:
- Basic: Simple, single-issue problems with clear solutions
- Intermediate: Multi-faceted challenges requiring coordination
- Advanced: Complex problems with competing priorities and stakeholders
- Crisis: High-pressure, time-sensitive situations with significant consequences

Generate a scenario with:
- A compelling, specific title that reflects both the crisis type and department impact
- 2-3 paragraphs of detailed situation description with specific banking context
- 5 discussion questions that are unique to ${departmentInfo.name} department responsibilities

FORMAT AS JSON:
{
  "title": "Specific scenario title reflecting ${selectedCrisis.type} impact on ${departmentInfo.name}",
  "description": "Detailed scenario with specific banking context, dollar amounts, timeframes, and regulatory implications relevant to ${departmentInfo.name} operations...",
  "discussionPoints": [
    "Specific ${departmentInfo.name} question about immediate actions?",
    "How should ${departmentInfo.name} coordinate with other departments?",
    "What ${departmentInfo.name}-specific risks need immediate attention?",
    "Which ${departmentInfo.name} procedures should be activated?",
    "How does this impact ${departmentInfo.name} compliance and reporting?"
  ]
}

CRITICAL: Make this scenario completely unique to ${departmentInfo.name} department. Avoid generic banking questions. Focus on what ${departmentInfo.name} staff would actually need to do and decide in this specific crisis.`;

        console.log(`Generating ${selectedCrisis.type} scenario for ${departmentInfo.name} department...`);
        
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
                        content: `You are an expert banking operations consultant and crisis management trainer. You have deep knowledge of how different bank departments operate and what specific challenges they face. 

CRITICAL INSTRUCTIONS:
- Generate scenarios that are DEPARTMENT-SPECIFIC, not generic banking scenarios
- Each department has unique responsibilities, challenges, and decision-making requirements
- Avoid repeating similar scenarios - be creative and vary the crisis types and specific impacts
- Include realistic banking industry details like amounts, timeframes, regulations, and procedures
- Make discussion questions focus on department-specific actions, not general management questions

Always respond with valid JSON only.`
                    },
                    {
                        role: 'user', 
                        content: prompt
                    }
                ],
                max_tokens: 1500,
                temperature: 0.95  // High temperature for maximum variety
            })
        });

        console.log('OpenAI API response status:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.log('OpenAI API error response:', errorText);
            throw new Error(`OpenAI API Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        let responseContent = data.choices[0].message.content.trim();
        
        // Clean up response (remove any markdown formatting)
        responseContent = responseContent.replace(/```json\n?/g, '').replace(/```\n?/g, '');
        
        console.log('Raw OpenAI response:', responseContent);
        
        try {
            const jsonResponse = JSON.parse(responseContent);
            
            // Validate the response structure
            if (!jsonResponse.title || !jsonResponse.description || !jsonResponse.discussionPoints) {
                throw new Error('Invalid response structure from OpenAI');
            }
            
            console.log(`Generated ${complexity} ${selectedCrisis.type} scenario for ${departmentInfo.name}:`, jsonResponse.title);
            res.json(jsonResponse);
            
        } catch (parseError) {
            console.error('JSON parse error:', parseError);
            console.log('Raw response that failed to parse:', responseContent);
            
            // Enhanced fallback response with department-specific content
            const fallbackScenario = generateDepartmentSpecificFallback(departmentInfo, selectedCrisis, complexity);
            res.json(fallbackScenario);
        }

    } catch (error) {
        console.error('Error generating discussion scenario:', error);
        res.status(500).json({ 
            error: 'Failed to generate scenario',
            details: error.message,
            department: req.body.department,
            complexity: req.body.complexity
        });
    }
});

// Enhanced fallback with department-specific scenarios
function generateDepartmentSpecificFallback(departmentInfo, selectedCrisis, complexity) {
    const specificScenarios = {
        deposits: {
            cybersecurity_breach: {
                title: "Customer Data Breach Affecting Deposit Accounts",
                description: "A cybersecurity breach has exposed personal information of 15,000 deposit customers, including account numbers and transaction histories. Customers are calling demanding account closures and threatening to withdraw $25 million in deposits. The FDIC has been notified and a regulatory investigation is pending. The breach occurred during peak banking hours on Friday afternoon.",
                questions: [
                    "How should the Deposits team prioritize customer retention vs. allowing immediate account closures?",
                    "What specific steps should Deposits take to secure remaining customer accounts and prevent further withdrawals?",
                    "How should Deposits coordinate with IT to identify which specific deposit accounts were compromised?",
                    "What communication strategy should Deposits use for both affected and unaffected customers?",
                    "How should Deposits handle the expected surge in account closure requests while maintaining service levels?"
                ]
            }
        }
    };

    // Try to find a specific scenario for this department and crisis type
    const deptScenarios = specificScenarios[departmentInfo.name.toLowerCase()] || 
                         specificScenarios[departmentInfo.name.toLowerCase().replace(/[^a-z]/g, '_')];
    
    if (deptScenarios && deptScenarios[selectedCrisis.type]) {
        const scenario = deptScenarios[selectedCrisis.type];
        return {
            title: scenario.title,
            description: scenario.description,
            discussionPoints: scenario.questions
        };
    }

    // Generic fallback if no specific scenario exists
    return {
        title: `${departmentInfo.name} Department ${selectedCrisis.description} Response`,
        description: `The ${departmentInfo.name} department is facing a ${selectedCrisis.description.toLowerCase()} that directly impacts ${departmentInfo.focus}. This situation requires immediate attention to ${departmentInfo.responsibilities[0]} while managing ${departmentInfo.uniqueChallenges[0]}. The crisis is affecting ${departmentInfo.metrics} and requires coordinated response.`,
        discussionPoints: [
            `How should ${departmentInfo.name} immediately address this crisis within their area of responsibility?`,
            `What ${departmentInfo.name}-specific procedures should be activated in response to this situation?`,
            `How should ${departmentInfo.name} coordinate with other departments during this crisis?`,
            `What are the key ${departmentInfo.name} metrics that need monitoring during this situation?`,
            `What lessons can ${departmentInfo.name} learn to prevent similar issues in the future?`
        ]
    };
}

// Serve different pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'game.html'));
});

app.get('/discussion', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'discussion.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Make sure your .env file contains OPENAI_API_KEY');
});