import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const feedbackDir = path.join(path.dirname(__dirname), 'feedback');
    
    // Check if feedback directory exists
    if (!fs.existsSync(feedbackDir)) {
      return res.status(200).json({ 
        feedback: [],
        count: 0,
        message: 'No feedback directory found'
      });
    }

    // Read all feedback files
    const files = fs.readdirSync(feedbackDir).filter(file => file.endsWith('.json'));
    const feedback = [];

    for (const file of files) {
      try {
        const filepath = path.join(feedbackDir, file);
        const content = fs.readFileSync(filepath, 'utf8');
        const feedbackData = JSON.parse(content);
        feedback.push(feedbackData);
      } catch (error) {
        console.error(`Error reading feedback file ${file}:`, error);
        // Continue with other files even if one fails
      }
    }

    // Sort by timestamp (newest first)
    feedback.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    console.log(`Retrieved ${feedback.length} feedback submissions`);

    return res.status(200).json({
      feedback: feedback,
      count: feedback.length,
      message: `Retrieved ${feedback.length} feedback submissions`
    });

  } catch (error) {
    console.error('Error retrieving feedback:', error);
    return res.status(500).json({ 
      error: 'Failed to retrieve feedback',
      feedback: [],
      count: 0
    });
  }
};