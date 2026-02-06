import { verifySession } from './session-manager.js';

export default async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        valid: false, 
        message: 'No valid authorization header'
      });
    }

    const token = authHeader.substring(7); // Remove "Bearer " prefix
    const session = verifySession(token);

    if (session) {
      return res.status(200).json({
        valid: true,
        username: session.username,
        lastAccess: session.lastAccess
      });
    } else {
      return res.status(401).json({
        valid: false,
        message: 'Invalid or expired session'
      });
    }

  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(500).json({ 
      valid: false,
      message: 'Internal server error' 
    });
  }
};