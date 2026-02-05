const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const feedback = req.body;
    
    // Add some basic validation
    if (!feedback.scenarioTitle || !feedback.rating) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create feedback directory if it doesn't exist
    const feedbackDir = path.join(process.cwd(), 'feedback');
    if (!fs.existsSync(feedbackDir)) {
      fs.mkdirSync(feedbackDir, { recursive: true });
    }

    // Create filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `feedback-${timestamp}.json`;
    const filepath = path.join(feedbackDir, filename);

    // Save feedback to file
    fs.writeFileSync(filepath, JSON.stringify(feedback, null, 2));

    console.log(`Feedback saved: ${filename}`);
    console.log(`Scenario: ${feedback.scenarioTitle}, Rating: ${feedback.rating}/5`);

    return res.status(200).json({ 
      success: true, 
      message: 'Feedback submitted successfully' 
    });

  } catch (error) {
    console.error('Error saving feedback:', error);
    return res.status(500).json({ error: 'Failed to save feedback' });
  }
};