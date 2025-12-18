// Generates 60+ deterministic bank crisis scenarios with 7 department questions each.

const departments = [
  'CEO/SVPs',
  'IT/Security',
  'HR',
  'Finance',
  'Loans',
  'Accounting',
  'Deposits'
];

const crisisTypes = [
  'Ransomware Attack',
  'Core Banking Outage',
  'Payment Network Disruption',
  'Data Breach',
  'Phishing Campaign',
  'Branch Network Outage',
  'ATM Cash Shortage',
  'DDoS Attack',
  'Wire Fraud Attempt',
  'Regulatory Audit Finding',
  'Vendor Cloud Outage',
  'Natural Disaster Impact',
  'Insider Threat',
  'Misdirected ACH',
  'Card Skimming Incident',
  'Mortgage Processing Backlog',
  'Deposit Run Rumor',
  'OFAC Screening Failure',
  'Check Fraud Spike',
  'SMS Spoofing Campaign'
];

const severities = ['Low', 'Moderate', 'High', 'Critical'];
const impacted = [
  'Online Banking',
  'Core System',
  'ACH',
  'Wire',
  'Cards',
  'Phone Banking',
  'Branches',
  'ATMs',
  'CRM',
  'Data Warehouse'
];

function pick(arr, idx) {
  return arr[idx % arr.length];
}

function buildChoices(correctText, correctExplanation, neutralText, neutralExplanation, wrongA, wrongAExp, wrongB, wrongBExp) {
  return [
    { text: correctText, type: 'correct', explanation: correctExplanation },
    { text: neutralText, type: 'neutral', explanation: neutralExplanation },
    { text: wrongA, type: 'wrong', explanation: wrongAExp },
    { text: wrongB, type: 'wrong', explanation: wrongBExp }
  ];
}

function buildQuestions(kind, sev, systems, seed) {
  const k = kind;
  const s = sev;
  const sys = systems.join(', ');

  return [
    {
      department: 'CEO/SVPs',
      questionText: `What is the immediate executive stance to the ${k} (${s}) impacting ${sys}?`,
      choices: buildChoices(
        'Activate crisis comms and designate spokesperson', 'Sets tone and avoids confusion.',
        'Issue a brief holding statement', 'Buys time for fuller details.',
        'Stay silent until resolved', 'Silence fuels speculation.',
        'Assign comms to multiple leaders', 'Mixed messaging increases risk.'
      )
    },
    {
      department: 'IT/Security',
      questionText: `What is the first technical action for ${k} (${s})?`,
      choices: buildChoices(
        'Isolate affected systems and begin triage', 'Containment limits further impact.',
        'Increase monitoring only', 'May help but impact continues.',
        'Disable all logging', 'Destroys forensic evidence.',
        'Reboot production indiscriminately', 'May worsen outage/lose data.'
      )
    },
    {
      department: 'HR',
      questionText: `How should HR guide staff during the ${k}?`,
      choices: buildChoices(
        'Issue safety, remote-work, and phishing reminders', 'Protects staff and reduces errors.',
        'Ask managers to handle ad-hoc', 'Inconsistent guidance across teams.',
        'Share impacted customer PII internally', 'Unnecessary exposure risk.',
        'Warn only executives', 'Leaves workforce uninformed.'
      )
    },
    {
      department: 'Finance',
      questionText: `What liquidity/capital step is prudent under ${k} (${s})?`,
      choices: buildChoices(
        'Activate contingency funding and monitor ratios', 'Preserves stability and regulatory compliance.',
        'Reduce discretionary spend only', 'Helps but not enough during crises.',
        'Ignore capital triggers temporarily', 'Breaches risk management policy.',
        'Freeze all vendor payments', 'Can disrupt critical services.'
      )
    },
    {
      department: 'Loans',
      questionText: `How should Loans maintain continuity if ${sys} are degraded?`,
      choices: buildChoices(
        'Use manual processing playbook and prioritize critical loans', 'Maintains service with controls.',
        'Pause all new applications', 'Avoids complexity but harms customers.',
        'Cancel active applications', 'Damages reputation and revenue.',
        'Proceed without documentation', 'Creates compliance risk.'
      )
    },
    {
      department: 'Accounting',
      questionText: `What is the accounting approach during ${k}?`,
      choices: buildChoices(
        'Provisional close with enhanced reconciliations', 'Transparency while controlling risk.',
        'Delay close indefinitely', 'May be necessary but adds uncertainty.',
        'Skip reconciliations', 'Leads to misstatements.',
        'Alter entries to smooth impact', 'Creates fraud risk.'
      )
    },
    {
      department: 'Deposits',
      questionText: `How should Deposits preserve customer access amid ${k}?`,
      choices: buildChoices(
        'Branches/ATMs with limits + status page', 'Maintains access and trust.',
        'ATM only', 'Partial access, comms still needed.',
        'Shut all channels', 'Triggers customer panic.',
        'Provide no updates', 'Creates confusion and complaints.'
      )
    }
  ];
}

function buildScenario(index) {
  const type = pick(crisisTypes, index);
  const sev = pick(severities, Math.floor(index / 2));
  const sysA = pick(impacted, index);
  const sysB = pick(impacted, index + 3);
  const affected = [sysA, sysB].filter((v, i, a) => a.indexOf(v) === i);
  const customers = 500 + (index % 10) * 250;
  const minutes = 30 + (index % 5) * 15;

  const title = `${type} - ${sev}`;
  const description = `A ${sev.toLowerCase()}-severity ${type.toLowerCase()} is impacting ${affected.join(' and ')}. Approximately ${customers}+ customers report issues in the last ${minutes} minutes. Incident response has been activated with cross-functional coordination.`;

  return {
    title,
    description,
    questions: buildQuestions(type, sev, affected, index)
  };
}

export function getScenarios(total = 60) {
  const scenarios = [];
  for (let i = 0; i < total; i++) scenarios.push(buildScenario(i));
  return scenarios;
}

export function getRandomScenario() {
  const list = getScenarios();
  return list[Math.floor(Math.random() * list.length)];
}

export default getRandomScenario;
