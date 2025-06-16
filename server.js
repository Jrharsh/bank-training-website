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
    res.json({ message: 'Backend is working!' });
});

// Generate FULLY AI-POWERED scenario endpoint
app.post('/api/generate-scenario', async (req, res) => {
    try {
        const apiKey = process.env.OPENAI_API_KEY;
        
        console.log('AI Scenario Generation Request Received');
        console.log('API key exists:', !!apiKey);
        
        if (!apiKey) {
            console.log('No OpenAI API key found');
            return res.status(500).json({ error: 'OpenAI API key not configured' });
        }

        // Generate COMPLETE scenario with AI - title, description AND 21 questions
        const fullPrompt = `Generate a complete banking crisis management scenario for training purposes.

CRISIS TYPE: Choose ONE of these diverse crisis types randomly:
- Cybersecurity breach (ransomware, data theft, system compromise)
- Natural disaster (hurricane, earthquake, flooding, power grid failure)
- Internal threat (disgruntled employee, fraud, embezzlement)
- External threat (robbery, terrorism, physical security breach)
- Technology failure (core system crash, network outage, vendor failure)
- Regulatory crisis (compliance violation, audit findings, investigation)
- Financial crisis (liquidity crisis, market crash, major loan defaults)
- Reputation crisis (social media backlash, negative publicity, scandal)
- Operational crisis (key personnel loss, supply chain disruption)
- Legal crisis (lawsuit, regulatory action, criminal investigation)

Create a realistic financial institution crisis scenario with:

1. A compelling crisis title that reflects the chosen crisis type
2. A detailed crisis description (2-3 paragraphs) with specific details like:
   - Dollar amounts affected
   - Timeline of events
   - Key stakeholders involved
   - Immediate threats and risks
3. Exactly 21 questions - 3 questions for each of these 7 departments:
   - CEO_SVPs (executive leadership)
   - IT_Security (technology and security)
   - HR (human resources)
   - Finance (financial management)
   - Loans (lending operations)
   - Accounting (financial reporting)
   - Deposits (customer deposits and services)

CRITICAL REQUIREMENTS FOR QUESTIONS:
- Each question must have 3 multiple choice options (A, B, C)
- RANDOMLY determine which option (A, B, or C) is correct for each question
- Distribute correct answers across all positions - don't favor any position
- ONLY 1 option is CORRECT (+20 to +25 points)
- The other 2 options are WRONG (-15 to -25 points)
- NO neutral or middle-ground answers
- Make wrong answers clearly poor decisions that would worsen the crisis
- Make the correct answer the best practice response
- Questions should be specific to your chosen crisis type

Format as JSON:
{
  "title": "Crisis Title",
  "description": "Detailed crisis description explaining the situation, timeline, and urgency...",
  "questions": [
    {
      "questionNumber": 1,
      "department": "CEO_SVPs",
      "questionText": "Specific question related to the crisis...",
      "options": [
        {
          "text": "Option A text",
          "points": -20
        },
        {
          "text": "Option B text", 
          "points": 22
        },
        {
          "text": "Option C text",
          "points": -18
        }
      ]
    }
  ]
}

ENSURE VARIETY: Make sure the crisis scenario is completely different from typical banking scenarios. Be creative and specific to the crisis type you choose.`;

        console.log('Requesting FULL AI scenario generation...');
        
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
                        content: `You are an expert banking crisis management consultant. Generate realistic, educational crisis scenarios with varied, challenging questions. 

IMPORTANT: You must randomize which option (A, B, or C) is correct for each question. Do not always make option B correct. Mix it up randomly across all questions.

Always respond with valid JSON only.`
                    },
                    {
                        role: 'user',
                        content: fullPrompt
                    }
                ],
                max_tokens: 4000,
                temperature: 0.9
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
            
            // ADDITIONAL RANDOMIZATION: Shuffle correct answers if AI didn't randomize well
            const gameScenario = convertAIToGameFormat(aiScenario);
            const finalScenario = ensureRandomizedAnswers(gameScenario);
            
            console.log(`AI Generated: "${aiScenario.title}" with ${finalScenario.questions.length} questions`);
            
            res.json(finalScenario);
            
        } catch (parseError) {
            console.error('JSON parse error:', parseError);
            console.log('Raw response that failed:', responseContent.substring(0, 500));
            
            // Fallback to hybrid approach if AI response is malformed
            const fallbackScenario = await generateFallbackScenario(apiKey);
            res.json(fallbackScenario);
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

// NEW: Ensure answers are truly randomized
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

// Fallback scenario generator with diverse crisis types
async function generateFallbackScenario(apiKey) {
    console.log('Using fallback scenario generation...');
    
    // Diverse crisis types
    const crisisTypes = [
        'ransomware cyberattack',
        'hurricane disaster',
        'disgruntled employee fraud',
        'armed robbery',
        'core system failure',
        'regulatory investigation',
        'major loan default crisis',
        'social media reputation crisis',
        'key executive resignation',
        'class action lawsuit'
    ];
    
    const randomCrisisType = crisisTypes[Math.floor(Math.random() * crisisTypes.length)];
    
    // Generate basic scenario with specific crisis type
    const basicResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{
                role: 'user',
                content: `Create a banking crisis scenario about ${randomCrisisType} with title and description in JSON format:
                {
                  "title": "Crisis Title",
                  "description": "Crisis description with specific details, amounts, timeline..."
                }`
            }],
            max_tokens: 300,
            temperature: 0.8
        })
    });
    
    const basicData = await basicResponse.json();
    let basicContent = basicData.choices[0].message.content.trim();
    basicContent = basicContent.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    
    const basicScenario = JSON.parse(basicContent);
    
    // Use enhanced templates with randomization
    return createEnhancedScenario(basicScenario, randomCrisisType);
}

// Enhanced scenario creation with diverse questions and randomized answers
function createEnhancedScenario(basicScenario, crisisType) {
    const departments = ['CEO_SVPs', 'IT_Security', 'HR', 'Finance', 'Loans', 'Accounting', 'Deposits'];
    const questions = [];
    let questionNumber = 1;
    
    // Fallback generic questions
    const genericQuestions = {
        'CEO_SVPs': [
            'How do you inform the board of directors about this crisis?',
            'What is your public communication strategy?', 
            'How do you manage stakeholder relations during this crisis?'
        ],
        'IT_Security': [
            'What immediate technical security measures do you implement?',
            'How do you secure and protect remaining systems?',
            'What is your incident response and recovery plan?'
        ],
        'HR': [
            'How do you communicate with employees about this crisis?',
            'What staffing adjustments do you make?',
            'How do you handle employee safety and support needs?'
        ],
        'Finance': [
            'How do you manage the immediate financial impact?',
            'What emergency funding measures do you implement?',
            'How do you handle financial reporting during the crisis?'
        ],
        'Loans': [
            'How do you manage loan operations during this crisis?',
            'What approach do you take with affected borrowers?',
            'How do you adjust risk assessment procedures?'
        ],
        'Accounting': [
            'How do you handle financial reporting requirements?',
            'What audit and compliance measures do you implement?',
            'How do you manage regulatory reporting obligations?'
        ],
        'Deposits': [
            'How do you reassure and retain depositors?',
            'What customer service measures do you implement?',
            'How do you manage account access during the crisis?'
        ]
    };
    
    departments.forEach(department => {
        const deptQuestions = genericQuestions[department];
        
        for (let i = 0; i < 3; i++) {
            // Generate 3 options with randomized correct answer position
            const correctPosition = Math.floor(Math.random() * 3); // 0, 1, or 2
            const options = [];
            
            for (let j = 0; j < 3; j++) {
                const isCorrect = j === correctPosition;
                const points = isCorrect ? 
                    (20 + Math.floor(Math.random() * 6)) :  // 20-25 for correct
                    (-15 - Math.floor(Math.random() * 11)); // -15 to -25 for wrong
                
                options.push({
                    text: generateOptionText(department, i, j, isCorrect, crisisType),
                    impacts: generateRightWrongImpacts(department, points)
                });
            }
            
            const question = {
                questionNumber: questionNumber,
                department: department,
                questionText: deptQuestions[i],
                options: options
            };
            questions.push(question);
            questionNumber++;
        }
    });
    
    return {
        title: basicScenario.title,
        description: basicScenario.description,
        questions: questions
    };
}

// Generate appropriate option text based on crisis type
function generateOptionText(department, questionIndex, optionIndex, isCorrect, crisisType) {
    const optionSets = {
        correct: [
            'Implement immediate emergency protocols and communicate transparently',
            'Activate crisis management team and follow established procedures',
            'Take immediate action while ensuring regulatory compliance'
        ],
        wrong: [
            'Wait for more information before taking any action',
            'Minimize the situation to avoid panic',
            'Handle internally without external communication',
            'Continue normal operations with minimal changes',
            'Defer decisions to next business day'
        ]
    };
    
    if (isCorrect) {
        return optionSets.correct[optionIndex % optionSets.correct.length];
    } else {
        return optionSets.wrong[Math.floor(Math.random() * optionSets.wrong.length)];
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
        
        // Map department IDs to readable names
        const departmentNames = {
            deposits: 'Deposits',
            tellers: 'Tellers', 
            loans: 'Loans',
            accounting: 'Accounting',
            bookkeeping: 'Bookkeeping',
            loan_servicing: 'Loan Servicing',
            compliance: 'Compliance',
            it: 'IT',
            security: 'Security',
            new_accounts: 'New Accounts'
        };

        const departmentName = departmentNames[department] || department;
        
        // Add crisis type variety to discussion scenarios
        const crisisTypes = [
            'cybersecurity breach', 'natural disaster', 'internal fraud',
            'technology failure', 'regulatory investigation', 'reputation crisis',
            'financial crisis', 'operational disruption', 'legal challenge'
        ];
        
        const randomCrisisType = crisisTypes[Math.floor(Math.random() * crisisTypes.length)];
        
        const prompt = `Generate a realistic banking crisis scenario for a tabletop discussion exercise.

Department: ${departmentName}
Complexity Level: ${complexity}
Crisis Type: ${randomCrisisType}

Create a scenario that includes:
1. A compelling title related to the ${randomCrisisType}
2. A detailed situation description (2-3 paragraphs) specific to this crisis type
3. Specific context details (amounts, timeframes, stakeholders)
4. 5 thought-provoking discussion questions related to the ${randomCrisisType}

The scenario should be:
- Realistic and based on actual banking challenges
- Appropriate for ${complexity} level complexity  
- Focused on ${departmentName} department responsibilities
- Designed for team discussion and learning
- Include specific details like dollar amounts, timeframes, and stakeholder names
- Directly related to the ${randomCrisisType} crisis type

Format the response as valid JSON with this exact structure:
{
  "title": "Specific Scenario Title",
  "description": "Detailed scenario description with specific context...",
  "discussionPoints": [
    "Specific discussion question 1?",
    "Specific discussion question 2?", 
    "Specific discussion question 3?",
    "Specific discussion question 4?",
    "Specific discussion question 5?"
  ]
}`;

        console.log(`Getting ${randomCrisisType} discussion scenario from OpenAI...`);
        
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
                        content: 'You are an expert in banking operations and crisis management. Generate realistic, educational scenarios for bank training exercises. Create diverse crisis scenarios including cyberattacks, natural disasters, fraud, system failures, and other realistic banking challenges. Always respond with valid JSON only.'
                    },
                    {
                        role: 'user', 
                        content: prompt
                    }
                ],
                max_tokens: 1200,
                temperature: 0.9
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
            
            console.log(`Generated ${complexity} ${randomCrisisType} scenario for ${departmentName}:`, jsonResponse.title);
            res.json(jsonResponse);
            
        } catch (parseError) {
            console.error('JSON parse error:', parseError);
            console.log('Raw response that failed to parse:', responseContent);
            
            // Fallback response if JSON parsing fails
            res.json({
                title: `${departmentName} Department ${randomCrisisType.charAt(0).toUpperCase() + randomCrisisType.slice(1)} Crisis Scenario`,
                description: responseContent.replace(/[{}"\[\]]/g, ''), // Strip JSON characters if they exist
                discussionPoints: [
                    `How would the ${departmentName} team handle this ${randomCrisisType}?`,
                    "What are the immediate risks and how can they be mitigated?",
                    "What regulatory or compliance considerations apply?",
                    "How should this be communicated to management and customers?",
                    "What processes can prevent similar issues in the future?"
                ]
            });
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