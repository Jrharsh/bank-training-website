import { createSession } from './session-manager.js';

// Simple in-memory storage for demo purposes
// In production, you'd use a proper database and hashed passwords
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'bankadmin123' // Change this to your preferred password
};

export default async (req, res) => {
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
    const { username, password } = req.body;

    // Basic validation
    if (!username || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Username and password are required' 
      });
    }

    // Check credentials
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      const token = createSession(username);
      
      console.log(`Admin login successful for user: ${username}`);
      
      return res.status(200).json({
        success: true,
        message: 'Authentication successful',
        token: token
      });
    } else {
      console.log(`Failed login attempt for username: ${username}`);
      
      // Add a small delay to prevent brute force attacks
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      });
    }

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ 
      success: false,
      message: 'Internal server error' 
    });
  }
};