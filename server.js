// ENHANCED DISCUSSION SCENARIO ENDPOINT - Replace your existing endpoint (lines 443-467)
app.post('/api/generate-discussion-scenario', async (req, res) => {
    try {
        const { department, complexity } = req.body;
        const apiKey = process.env.OPENAI_API_KEY;
        
        console.log(`Discussion scenario request: ${department} - ${complexity}`);
        
        if (!apiKey) {
            return res.status(500).json({ error: 'OpenAI API key not configured' });
        }

        // Enhanced department-specific contexts for discussion scenarios
        const departmentContexts = {
            'Deposits': {
                name: 'Deposits',
                focus: 'BSA/AML compliance, suspicious activity detection, large cash transactions, CTR/SAR requirements, account monitoring',
                realWorldChallenges: 'structuring patterns, source of funds verification, beneficial ownership, international wire transfers, cash-intensive businesses',
                regulatoryAspects: 'Bank Secrecy Act, Anti-Money Laundering, Currency Transaction Reports, Suspicious Activity Reports, OFAC compliance',
                stakeholders: 'customers, compliance officers, BSA officers, regulators, law enforcement'
            },
            'Tellers': {
                name: 'Tellers',
                focus: 'customer service excellence, fraud detection, security procedures, transaction accuracy, daily operational challenges',
                realWorldChallenges: 'counterfeit detection, robbery prevention, elder abuse identification, check fraud, transaction disputes, system outages',
                regulatoryAspects: 'Regulation CC, customer identification, privacy protection, accessibility compliance, security protocols',
                stakeholders: 'customers, security personnel, management, law enforcement, family members of customers'
            },
            'Loans': {
                name: 'Loans',
                focus: 'credit risk assessment, income verification, collateral evaluation, regulatory compliance, portfolio management',
                realWorldChallenges: 'income documentation inconsistencies, collateral valuation disputes, credit history issues, debt-to-income calculations, employment verification',
                regulatoryAspects: 'Truth in Lending, Equal Credit Opportunity Act, Fair Credit Reporting Act, Qualified Mortgage rules, Fair Lending',
                stakeholders: 'borrowers, underwriters, appraisers, credit agencies, regulatory bodies, investors'
            },
            'Accounting': {
                name: 'Accounting',
                focus: 'financial reporting accuracy, regulatory compliance, audit requirements, internal controls, month-end processes',
                realWorldChallenges: 'account reconciliation discrepancies, journal entry corrections, regulatory reporting deadlines, audit findings, system integration issues',
                regulatoryAspects: 'GAAP compliance, regulatory reporting requirements, Sarbanes-Oxley, audit standards, internal control requirements',
                stakeholders: 'external auditors, regulators, management, other departments, investors, board of directors'
            },
            'Bookkeeping': {
                name: 'Bookkeeping',
                focus: 'transaction recording accuracy, account maintenance, daily operations, data integrity, workflow efficiency',
                realWorldChallenges: 'data entry errors, account balancing issues, document management, system updates, process inefficiencies',
                regulatoryAspects: 'record retention requirements, transaction documentation, audit trail maintenance, accuracy standards',
                stakeholders: 'other departments, auditors, customers, management, IT support, compliance'
            },
            'Loan Servicing': {
                name: 'Loan Servicing',
                focus: 'payment processing, customer communication, default management, escrow administration, regulatory compliance',
                realWorldChallenges: 'payment application errors, escrow shortage management, modification requests, foreclosure procedures, insurance claims',
                regulatoryAspects: 'RESPA, TILA, servicing rules, foreclosure regulations, modification guidelines, investor requirements',
                stakeholders: 'borrowers, investors, insurance companies, attorneys, regulators, third-party servicers'
            },
            'Compliance': {
                name: 'Compliance',
                focus: 'regulatory interpretation, policy implementation, examination preparation, risk assessment, training coordination',
                realWorldChallenges: 'regulation changes, examination findings, policy violations, training gaps, inter-agency guidance interpretation',
                regulatoryAspects: 'all banking regulations, examination procedures, enforcement actions, consent orders, regulatory guidance',
                stakeholders: 'regulators, management, all departments, external counsel, board members, examination teams'
            },
            'IT': {
                name: 'IT',
                focus: 'system security, data protection, business continuity, user support, technology infrastructure',
                realWorldChallenges: 'security breaches, system outages, data backup failures, user access issues, software compatibility',
                regulatoryAspects: 'cybersecurity frameworks, data protection regulations, business continuity requirements, vendor management',
                stakeholders: 'all departments, vendors, customers, regulators, security firms, business continuity teams'
            },
            'Security': {
                name: 'Security',
                focus: 'physical security, fraud prevention, incident response, emergency procedures, access control',
                realWorldChallenges: 'robbery attempts, fraud schemes, access violations, emergency response, surveillance management',
                regulatoryAspects: 'security regulations, incident reporting, emergency procedures, fraud prevention requirements',
                stakeholders: 'law enforcement, employees, customers, management, security vendors, emergency responders'
            },
            'New Accounts': {
                name: 'New Accounts',
                focus: 'customer onboarding, identity verification, account setup, compliance documentation, relationship building',
                realWorldChallenges: 'identity verification difficulties, beneficial ownership determination, account type selection, documentation requirements, cross-selling opportunities',
                regulatoryAspects: 'Customer Identification Program, beneficial ownership rules, account opening procedures, privacy notices, fair lending',
                stakeholders: 'new customers, compliance team, other departments, regulators, identity verification services'
            }
        };

        // Scenario type rotation for variety
        const scenarioTypes = [
            'regulatory_compliance_challenge',
            'customer_service_dilemma', 
            'fraud_detection_situation',
            'operational_efficiency_problem',
            'inter_departmental_coordination',
            'technology_related_complication',
            'time_sensitive_decision',
            'stakeholder_communication_challenge',
            'ethical_decision_scenario',
            'crisis_management_situation'
        ];

        const randomScenarioType = scenarioTypes[Math.floor(Math.random() * scenarioTypes.length)];
        const deptContext = departmentContexts[department] || departmentContexts['Deposits']; // fallback

        // Time and customer context for variety
        const timeContexts = [
            "during peak business hours",
            "near closing time on Friday",
            "first thing Monday morning", 
            "during a busy holiday period",
            "while short-staffed",
            "during a system maintenance window",
            "right before a regulatory examination",
            "during month-end processing"
        ];

        const customerTypes = [
            "long-time customer",
            "new business account holder",
            "elderly customer",
            "commercial client",
            "international customer",
            "high-net-worth individual",
            "small business owner",
            "first-time bank customer"
        ];

        const randomTimeContext = timeContexts[Math.floor(Math.random() * timeContexts.length)];
        const randomCustomerType = customerTypes[Math.floor(Math.random() * customerTypes.length)];

        const enhancedPrompt = `You are a senior banking trainer with 20+ years of experience creating realistic, engaging tabletop training scenarios for financial institutions.

CREATE A UNIQUE DISCUSSION SCENARIO FOR: ${department} Department
COMPLEXITY LEVEL: ${complexity.toUpperCase()}
SCENARIO TYPE: ${randomScenarioType.replace(/_/g, ' ')}

DEPARTMENT EXPERTISE:
- Primary Focus: ${deptContext.focus}
- Real-world Challenges: ${deptContext.realWorldChallenges}
- Regulatory Aspects: ${deptContext.regulatoryAspects}
- Key Stakeholders: ${deptContext.stakeholders}

SCENARIO REQUIREMENTS:
1. Set the scenario ${randomTimeContext}
2. Involve a ${randomCustomerType}
3. Include specific, realistic details (exact dollar amounts, timeframes, customer characteristics)
4. Make it feel authentic to actual banking operations
5. Include realistic complications and secondary issues
6. Avoid generic textbook examples
7. Create a situation that requires careful analysis and professional judgment

COMPLEXITY GUIDELINES:
- BASIC: Straightforward situation with clear procedures (2-3 sentences)
- INTERMEDIATE: Multi-layered situation requiring analysis (3-4 sentences with context)
- ADVANCED: Complex situation with regulatory implications (4-5 sentences with rich context)
- CRISIS: Urgent, high-pressure situation requiring immediate action (4-6 sentences with time-critical elements)

DISCUSSION QUESTIONS (exactly 4-5 questions):
Create questions that:
- Progress from immediate actions → analysis → procedures → broader implications
- Are specific to THIS scenario (not generic banking questions)
- Challenge critical thinking and real-world application
- Include varied question starters: "How would you...", "What factors should...", "When is it appropriate to...", "Why might...", "What are the risks of..."
- Include at least one compliance/regulatory question
- Include at least one stakeholder communication question
- Address the specific challenges this department faces in this type of situation

AUTHENTICITY FOCUS:
- Include specific dollar amounts, account types, timeframes
- Reference actual banking procedures and regulations
- Include realistic customer behavior and characteristics
- Add secondary complications that make the scenario more realistic
- Make participants feel like they're handling a real situation

RESPONSE FORMAT (strict JSON):
{
  "title": "Specific, engaging title that captures the scenario essence",
  "description": "Rich, detailed scenario with specific context, amounts, timeframes, realistic complications, and authentic banking details",
  "discussionPoints": [
    "Immediate action question specific to this scenario and department",
    "Analysis/assessment question requiring professional judgment", 
    "Procedure/compliance question with regulatory implications specific to ${department}",
    "Communication/stakeholder management question relevant to the situation",
    "Follow-up/implications question addressing long-term considerations"
  ]
}

CRITICAL: Make this scenario unique, department-specific, and authentically challenging for banking professionals. Include details that make it feel like a real situation they might encounter.`;

        console.log('Requesting enhanced discussion scenario from OpenAI...');
        
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4', // Use GPT-4 for better reasoning if available
                messages: [
                    {
                        role: 'system',
                        content: `You are an expert banking trainer specializing in creating realistic, department-specific training scenarios. Your scenarios are known for their authenticity, specific details, and ability to challenge banking professionals with real-world situations they actually encounter.

CRITICAL INSTRUCTIONS:
- Every scenario must be highly specific to the department and include realistic banking details
- Include exact dollar amounts, specific timeframes, and authentic customer characteristics
- Questions must be directly tied to the specific scenario, not generic banking questions
- Focus on real challenges that department actually faces in day-to-day operations
- Make scenarios memorable and engaging for adult learners
- Always respond with valid JSON only.`
                    },
                    {
                        role: 'user',
                        content: enhancedPrompt
                    }
                ],
                max_tokens: 4000,
                temperature: 0.85, // Good balance of creativity and consistency
                top_p: 0.9
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
        
        console.log('Discussion scenario AI response length:', responseContent.length);
        
        try {
            const aiScenario = JSON.parse(responseContent);
            
            // Validate the response structure
            if (!aiScenario.title || !aiScenario.description || !aiScenario.discussionPoints) {
                throw new Error('Invalid discussion scenario structure from AI');
            }
            
            // Enhance the response if needed
            const enhancedScenario = validateAndEnhanceDiscussionResponse(aiScenario, department, complexity);
            
            console.log(`Enhanced discussion scenario generated: "${enhancedScenario.title}" for ${department} department`);
            
            res.json(enhancedScenario);
            
        } catch (parseError) {
            console.error('JSON parse error:', parseError);
            console.log('Raw response that failed:', responseContent.substring(0, 500));
            
            // Enhanced fallback scenario
            const fallbackScenario = createEnhancedDiscussionFallback(department, complexity, deptContext);
            res.json(fallbackScenario);
        }
        
    } catch (error) {
        console.error('Error generating discussion scenario:', error);
        res.status(500).json({ 
            error: 'Failed to generate discussion scenario',
            details: error.message,
            suggestion: 'Check OpenAI API key and quota limits'
        });
    }
});

// Validate and enhance discussion scenario response
function validateAndEnhanceDiscussionResponse(response, department, complexity) {
    // Ensure required fields exist
    if (!response.title || response.title.length < 10) {
        response.title = `${department} Department ${complexity.charAt(0).toUpperCase() + complexity.slice(1)} Challenge`;
    }
    
    if (!response.description || response.description.length < 50) {
        response.description = `A ${complexity} level scenario for the ${department} department involving realistic banking operations that require careful analysis, regulatory compliance, and stakeholder management.`;
    }
    
    if (!Array.isArray(response.discussionPoints) || response.discussionPoints.length < 4) {
        response.discussionPoints = [
            `What should be your immediate priorities as a ${department} team member in this situation?`,
            `What specific policies, procedures, and regulations apply to this ${department} scenario?`,
            `How should you communicate and coordinate with customers and other stakeholders?`,
            `What are the potential risks and compliance implications of different response options?`,
            `What follow-up actions and preventive measures should be implemented?`
        ];
    }
    
    // Ensure discussion points are substantial and varied
    response.discussionPoints = response.discussionPoints.map((point, index) => {
        if (typeof point === 'string' && point.length > 15) {
            return point;
        }
        // Fallback questions specific to the department
        const fallbackQuestions = [
            `How would the ${department} department handle the immediate aspects of this situation?`,
            `What ${department}-specific regulations and procedures should guide your response?`,
            `How should you communicate with relevant stakeholders about this ${department} issue?`,
            `What are the key risk factors the ${department} team should consider?`,
            `What preventive measures can the ${department} implement for the future?`
        ];
        return fallbackQuestions[index] || `How would you handle this aspect of the ${department} situation?`;
    });
    
    return response;
}

// Enhanced fallback for discussion scenarios
function createEnhancedDiscussionFallback(department, complexity, deptContext) {
    const fallbackScenarios = {
        'Deposits': {
            basic: {
                title: 'Suspicious Cash Deposit Pattern Investigation',
                description: `A small restaurant owner has been making cash deposits of $8,900 every Tuesday for the past six weeks. Today, they arrive with another $8,900 deposit but seem nervous and provide inconsistent explanations when you ask routine questions about their business. The deposits are just under the $10,000 CTR threshold, and you notice they always use different teller windows. As a deposits specialist, you must determine if this represents structuring while maintaining the customer relationship.`,
                discussionPoints: [
                    'What specific red flags indicate potential structuring, and how do you document them?',
                    'How do you balance your BSA/AML obligations with maintaining customer service?',
                    'When should you involve your supervisor or BSA officer in this situation?',
                    'What questions can you appropriately ask without alerting the customer to your suspicions?',
                    'What follow-up monitoring should be implemented for this account?'
                ]
            },
            intermediate: {
                title: 'International Wire Transfer Compliance Challenge',
                description: `A long-time business customer requests to send a $75,000 wire transfer to a company in a high-risk country for "equipment purchase." However, the receiving bank has been flagged in recent OFAC alerts, and the customer cannot provide detailed invoices or contracts. They are pressuring you to process it immediately, claiming the deal will fall through if delayed. The customer's account history shows no previous international activity, and their business type doesn't typically require such overseas transactions.`,
                discussionPoints: [
                    'What enhanced due diligence steps are required for this high-risk international transfer?',
                    'How do you verify the legitimacy of the transaction and receiving party?',
                    'What are your obligations regarding OFAC compliance and sanctions screening?',
                    'How do you communicate delays and requirements to an impatient customer?',
                    'Under what circumstances should you decline to process this wire transfer?'
                ]
            }
        },
        'Tellers': {
            basic: {
                title: 'Elder Customer Exploitation Concerns',
                description: `Mrs. Johnson, an 82-year-old regular customer, arrives with a much younger man who introduces himself as her "financial advisor." He insists on handling all her transactions and wants to withdraw $15,000 from her savings account. Mrs. Johnson seems confused about the amount and purpose, and you notice she has been making unusual large withdrawals over the past month. The man becomes agitated when you suggest speaking with Mrs. Johnson privately and threatens to take their business elsewhere.`,
                discussionPoints: [
                    'What signs of potential elder financial abuse should you be alert for in this situation?',
                    'How can you appropriately separate Mrs. Johnson from her companion to assess the situation?',
                    'What are your legal and ethical obligations when you suspect elder exploitation?',
                    'How do you handle the threatening behavior from the accompanying person?',
                    'What documentation and reporting procedures should you follow?'
                ]
            }
        },
        'Loans': {
            intermediate: {
                title: 'Employment and Income Verification Discrepancies',
                description: `A loan applicant for a $250,000 mortgage has submitted pay stubs showing $95,000 annual income, but their tax returns show only $62,000 for the previous year. When questioned, they claim they started a new higher-paying job six months ago. However, the employment verification reveals they've been with the same employer for three years in the same position. Bank statements show irregular large deposits that don't match the pay stub amounts, and the applicant becomes defensive when asked for additional documentation.`,
                discussionPoints: [
                    'What additional documentation should you require to verify the claimed income increase?',
                    'How do you investigate discrepancies between pay stubs, tax returns, and bank statements?',
                    'What are the fair lending implications of declining a loan based on documentation concerns?',
                    'How do you handle a situation where you suspect income falsification without making accusations?',
                    'What documentation standards must be maintained regardless of the applicant\'s reaction?'
                ]
            }
        }
    };
    
    const deptScenarios = fallbackScenarios[department];
    if (deptScenarios && deptScenarios[complexity]) {
        return deptScenarios[complexity];
    }
    
    // Generic enhanced fallback
    return {
        title: `${department} Department ${complexity.charAt(0).toUpperCase() + complexity.slice(1)} Operational Challenge`,
        description: `A realistic ${complexity} level scenario for the ${department} department that involves ${deptContext.focus}. This situation requires careful analysis of ${deptContext.realWorldChallenges} while ensuring compliance with ${deptContext.regulatoryAspects}. The scenario involves multiple stakeholders including ${deptContext.stakeholders} and requires balancing operational efficiency with regulatory requirements.`,
        discussionPoints: [
            `What immediate actions should the ${department} team take to address this situation effectively?`,
            `How do the specific regulations governing ${department} operations apply to this scenario?`,
            `What communication strategies should be used with the various stakeholders involved?`,
            `What are the potential risks and compliance implications of different response approaches?`,
            `What systemic improvements could prevent similar situations in the future?`
        ]
    };
}