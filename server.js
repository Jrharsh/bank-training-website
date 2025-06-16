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

Create a realistic financial institution crisis scenario with:

1. A compelling crisis title
2. A detailed crisis description (2-3 paragraphs)
3. Exactly 21 questions - 3 questions for each of these 7 departments:
   - CEO_SVPs (executive leadership)
   - IT_Security (technology and security)
   - HR (human resources)
   - Finance (financial management)
   - Loans (lending operations)
   - Accounting (financial reporting)
   - Deposits (customer deposits and services)

For each question, provide 3 multiple choice options where:
- ONLY 1 option is CORRECT (+20 to +25 points)
- The other 2 options are WRONG (-15 to -25 points)
- NO neutral or middle-ground answers
- Randomize which position (A, B, or C) is the correct answer
- Make wrong answers clearly poor decisions that would worsen the crisis
- Make the correct answer the best practice response

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

Requirements:
- Make ALL content specific to the crisis scenario
- Vary which option (A, B, C) is correct across questions
- Use only RIGHT (+20 to +25) or WRONG (-15 to -25) point values
- NO neutral scores between -10 and +10
- Ensure questions test critical decision-making skills
- Wrong answers should represent poor crisis management
- Correct answers should follow banking best practices`;

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
                        content: 'You are an expert banking crisis management consultant. Generate realistic, educational crisis scenarios with varied, challenging questions. Always respond with valid JSON only.'
                    },
                    {
                        role: 'user',
                        content: fullPrompt
                    }
                ],
                max_tokens: 4000,
                temperature: 0.8
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
            
            // Convert AI format to game format
            const gameScenario = convertAIToGameFormat(aiScenario);
            
            console.log(`AI Generated: "${aiScenario.title}" with ${gameScenario.questions.length} questions`);
            
            res.json(gameScenario);
            
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

// Fallback scenario generator if AI fails
async function generateFallbackScenario(apiKey) {
    console.log('Using fallback scenario generation...');
    
    // Generate basic scenario
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
                content: `Create a banking crisis scenario with title and description in JSON format:
                {
                  "title": "Crisis Title",
                  "description": "Crisis description..."
                }`
            }],
            max_tokens: 300,
            temperature: 0.7
        })
    });
    
    const basicData = await basicResponse.json();
    const basicScenario = JSON.parse(basicData.choices[0].message.content);
    
    // Use enhanced templates with randomization
    return createEnhancedScenario(basicScenario);
}

// Enhanced scenario creation with RIGHT/WRONG answers only
function createEnhancedScenario(basicScenario) {
    const departments = ['CEO_SVPs', 'IT_Security', 'HR', 'Finance', 'Loans', 'Accounting', 'Deposits'];
    const questions = [];
    let questionNumber = 1;
    
    const questionTemplates = {
        'CEO_SVPs': [
            'How do you inform the board of directors about this crisis?',
            'What is your public communication strategy?', 
            'How do you manage investor and stakeholder relations?'
        ],
        'IT_Security': [
            'What immediate technical security measures do you implement?',
            'How do you secure and protect remaining systems?',
            'What is your incident response and recovery plan?'
        ],
        'HR': [
            'How do you communicate with employees about this crisis?',
            'What staffing and workforce adjustments do you make?',
            'How do you handle employee training and support needs?'
        ],
        'Finance': [
            'How do you manage the immediate financial impact?',
            'What budget reallocations and cost controls do you implement?',
            'How do you handle investor relations and financial reporting?'
        ],
        'Loans': [
            'How do you manage your loan portfolio during this crisis?',
            'What approach do you take with borrower communications?',
            'How do you adjust lending policies and risk assessment?'
        ],
        'Accounting': [
            'How do you handle financial reporting and disclosure requirements?',
            'What audit and compliance measures do you implement?',
            'How do you manage regulatory reporting obligations?'
        ],
        'Deposits': [
            'How do you reassure and retain depositors?',
            'What customer service measures do you implement?',
            'How do you manage account access and customer communications?'
        ]
    };
    
    const optionTemplates = {
        'CEO_SVPs': [
            ['Immediate emergency board meeting', 'Scheduled briefing in next regular meeting', 'Written report with follow-up call'],
            ['Immediate public statement and press conference', 'Prepared statement released tomorrow', 'No public comment until investigation complete'],
            ['Host investor call within 24 hours', 'Include update in next quarterly report', 'Private meetings with major stakeholders only']
        ],
        'IT_Security': [
            ['Immediately isolate all affected systems', 'Gradual system shutdown for assessment', 'Continue operations with enhanced monitoring'],
            ['Implement emergency security protocols', 'Upgrade existing security measures', 'Hire external security consulting firm'],
            ['Activate full disaster recovery plan', 'Implement targeted system restoration', 'Focus on business continuity first']
        ],
        'HR': [
            ['All-hands emergency meeting today', 'Department-by-department briefings', 'Email communication with Q&A session'],
            ['Implement temporary staffing adjustments', 'Maintain current staffing levels', 'Bring in additional temporary staff'],
            ['Mandatory crisis management training for all', 'Training for key personnel only', 'Provide optional support resources']
        ],
        'Finance': [
            ['Activate emergency financial reserves', 'Implement immediate cost-cutting measures', 'Secure additional credit lines'],
            ['Reallocate budget priorities immediately', 'Maintain current budget with monitoring', 'Defer non-essential expenditures'],
            ['Emergency investor communication', 'Include in next scheduled reporting', 'Proactive outreach to key financial partners']
        ],
        'Loans': [
            ['Immediately review entire loan portfolio', 'Focus review on high-risk accounts only', 'Continue normal operations with enhanced monitoring'],
            ['Proactive outreach to all borrowers', 'Communicate with affected borrowers only', 'Wait for borrowers to contact us'],
            ['Temporarily tighten lending standards', 'Maintain current lending policies', 'Implement enhanced due diligence procedures']
        ],
        'Accounting': [
            ['Immediate disclosure in next filing', 'Include in quarterly report', 'Consult with auditors on timing'],
            ['Engage external audit firm immediately', 'Enhance internal audit procedures', 'Coordinate with existing audit schedule'],
            ['Accelerate all regulatory reporting', 'Maintain normal reporting schedule', 'Request extensions where possible']
        ],
        'Deposits': [
            ['Personal calls to major depositors', 'Email reassurance to all customers', 'Increase customer service staffing'],
            ['Waive fees and extend service hours', 'Maintain normal service levels', 'Implement enhanced customer support'],
            ['Proactive communication campaign', 'Respond to inquiries as they come', 'Coordinate with marketing for messaging']
        ]
    };
    
    departments.forEach(department => {
        for (let i = 0; i < 3; i++) {
            // RIGHT/WRONG only - no neutral answers
            const rightWrongPatterns = [
                [22, -18, -20],   // A is RIGHT, B&C are WRONG
                [-15, 24, -22],   // B is RIGHT, A&C are WRONG  
                [-19, -17, 23],   // C is RIGHT, A&B are WRONG
                [25, -20, -16],   // A is RIGHT, B&C are WRONG
                [-21, 20, -24],   // B is RIGHT, A&C are WRONG
                [-18, -23, 21]    // C is RIGHT, A&B are WRONG
            ];
            
            const randomScores = rightWrongPatterns[Math.floor(Math.random() * rightWrongPatterns.length)];
            const shuffledOptions = [...optionTemplates[department][i]];
            
            // Sometimes shuffle the option order too
            if (Math.random() > 0.5) {
                shuffledOptions.sort(() => Math.random() - 0.5);
            }
            
            const question = {
                questionNumber: questionNumber,
                department: department,
                questionText: questionTemplates[department][i],
                options: shuffledOptions.map((text, optionIndex) => ({
                    text: text,
                    impacts: generateRightWrongImpacts(department, randomScores[optionIndex])
                }))
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

// Generate impacts with RIGHT/WRONG only (no neutral)
function generateRightWrongImpacts(primaryDept, baseScore) {
    const departments = ['CEO_SVPs', 'IT_Security', 'HR', 'Finance', 'Loans', 'Accounting', 'Deposits'];
    const impacts = {};
    
    departments.forEach(dept => {
        if (dept === primaryDept) {
            // Ensure score stays in RIGHT (+15 to +25) or WRONG (-15 to -25) range
            const variation = Math.random() * 4 - 2; // -2 to +2 variation
            let finalScore = Math.round(baseScore + variation);
            
            // Force into RIGHT/WRONG categories
            if (finalScore > 0 && finalScore < 15) {
                finalScore = 15 + Math.floor(Math.random() * 10); // 15-25
            } else if (finalScore < 0 && finalScore > -15) {
                finalScore = -15 - Math.floor(Math.random() * 10); // -15 to -25
            }
            
            impacts[dept] = Math.max(-30, Math.min(30, finalScore));
        } else {
            impacts[dept] = 0;
        }
    });
    
    return impacts;
}

// NEW: Generate discussion scenario endpoint
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
        
        const prompt = `Generate a realistic banking crisis scenario for a tabletop discussion exercise.

Department: ${departmentName}
Complexity Level: ${complexity}

Create a scenario that includes:
1. A compelling title
2. A detailed situation description (2-3 paragraphs)
3. Specific context details (amounts, timeframes, stakeholders)
4. 5 thought-provoking discussion questions

The scenario should be:
- Realistic and based on actual banking challenges
- Appropriate for ${complexity} level complexity  
- Focused on ${departmentName} department responsibilities
- Designed for team discussion and learning
- Include specific details like dollar amounts, timeframes, and stakeholder names

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

        console.log('Getting discussion scenario from OpenAI...');
        
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
                        content: 'You are an expert in banking operations and crisis management. Generate realistic, educational scenarios for bank training exercises. Always respond with valid JSON only.'
                    },
                    {
                        role: 'user', 
                        content: prompt
                    }
                ],
                max_tokens: 1200,
                temperature: 0.8
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
            
            console.log(`Generated ${complexity} scenario for ${departmentName}:`, jsonResponse.title);
            res.json(jsonResponse);
            
        } catch (parseError) {
            console.error('JSON parse error:', parseError);
            console.log('Raw response that failed to parse:', responseContent);
            
            // Fallback response if JSON parsing fails
            res.json({
                title: `${departmentName} Department Crisis Scenario`,
                description: responseContent.replace(/[{}"\[\]]/g, ''), // Strip JSON characters if they exist
                discussionPoints: [
                    `How would the ${departmentName} team handle this situation?`,
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