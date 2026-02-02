import fs from 'fs';
import vm from 'vm';
import path from 'path';

const file = path.join(process.cwd(), 'public', 'js', 'discussion-scenarios.js');
const src = fs.readFileSync(file, 'utf8');

// Prepare a fake DOM/window environment
const sandbox = { window: {}, console };
vm.createContext(sandbox);

try {
  vm.runInContext(src, sandbox, { filename: 'discussion-scenarios.js' });
} catch (e) {
  console.error('Error evaluating discussion-scenarios.js:', e);
  process.exit(2);
}

const map = {
  'Mortgage-Servicing-Compliance': ['Loan Servicing', 'Compliance', 'Loans'],
  'HR-Accounting-BackOffice': ['HR', 'Accounting', 'Bookkeeping'],
  'Frontline-Operations': ['Tellers', 'New Accounts'],
  'Executive-Leadership-Loans': ['CEO/SVPs', 'Loans'],
  'IT': ['IT', 'Security', 'IT/Security'],
  'Call-Center': ['Call Center', 'Deposits']
};

const out = {};
for (const group of Object.keys(map)) {
  const arr = sandbox.window.discussionScenarios && sandbox.window.discussionScenarios[group];
  out[group] = Array.isArray(arr) ? arr.length : 0;
}

console.log('Scenario counts by group:');
for (const k of Object.keys(out)) {
  console.log(`${k}: ${out[k]}`);
}

// Optionally list a sample title from each group
console.log('\nSample titles (up to 3 per group):');
for (const group of Object.keys(map)) {
  const arr = sandbox.window.discussionScenarios && sandbox.window.discussionScenarios[group] || [];
  const sample = arr.slice(0,3).map(s => s.title || s.key || '(no title)');
  console.log(`${group}: ${sample.join(' | ')}`);
}
