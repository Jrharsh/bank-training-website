import crypto from 'crypto';

// Simple session storage - shared across admin endpoints
const activeSessions = new Map();

// Session management functions
function createSession(username) {
  const token = crypto.randomBytes(32).toString('hex');
  
  activeSessions.set(token, {
    username,
    createdAt: new Date(),
    lastAccess: new Date()
  });
  
  // Clean up old sessions (older than 24 hours)
  cleanupSessions();
  
  return token;
}

function verifySession(token) {
  const session = activeSessions.get(token);
  if (session) {
    session.lastAccess = new Date();
    return session;
  }
  return null;
}

function cleanupSessions() {
  const oneDay = 24 * 60 * 60 * 1000;
  for (const [sessionToken, session] of activeSessions) {
    if (Date.now() - session.createdAt.getTime() > oneDay) {
      activeSessions.delete(sessionToken);
    }
  }
}

function revokeSession(token) {
  return activeSessions.delete(token);
}

function getActiveSessionCount() {
  cleanupSessions();
  return activeSessions.size;
}

export {
  createSession,
  verifySession,
  cleanupSessions,
  revokeSession,
  getActiveSessionCount
};