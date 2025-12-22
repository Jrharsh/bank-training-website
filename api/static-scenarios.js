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
  'SMS Spoofing Campaign',
  'Disgruntled Employee Incident'
  , 'Account Takeover Campaign'
  , 'Catastrophic Core Failure'
  , 'Employee Data Disclosure'
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
  'Data Warehouse',
  'Identity & Access Management'
  , 'Disaster Recovery Site'
  , 'Customer PII'
  , 'Collaboration Platform'
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
    // CEO/SVPs (3)
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
      department: 'CEO/SVPs',
      questionText: `Which channels should leadership use first for stakeholder communications during ${k}?`,
      choices: buildChoices(
        'Internal alert + status page + customer email', 'Coordinated, multi‑channel clarity.',
        'Executive-only chat room', 'Too narrow; misses staff/customers.',
        'Social media only', 'Uncontrolled and incomplete.',
        'Vendor press release', 'Lacks bank‑specific details.'
      )
    },
    {
      department: 'CEO/SVPs',
      questionText: `How often should leadership provide public updates during a ${k} (${s})?`,
      choices: buildChoices(
        'Regular scheduled updates (e.g., hourly) with facts', 'Builds trust; avoids speculation.',
        'Only at resolution', 'Too late; rumors fill the gap.',
        'Continuous ad‑hoc posts', 'Inconsistent and confusing.',
        'Delegate to all managers', 'Fragmented messaging risk.'
      )
    },

    // IT/Security (3)
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
      department: 'IT/Security',
      questionText: `How should forensic logging be handled during ${k}?`,
      choices: buildChoices(
        'Preserve and centralize logs with restricted access', 'Supports investigation and legal needs.',
        'Delete old logs to save space', 'Destroys evidence and traceability.',
        'Share raw logs to all staff', 'Privacy/security risks.',
        'Turn off audit trails', 'Blocks incident reconstruction.'
      )
    },
    {
      department: 'IT/Security',
      questionText: `What recovery approach is appropriate for impacted ${sys}?`,
      choices: buildChoices(
        'Restore from known‑good backups after validation', 'Safe recovery with integrity.',
        'Hot‑swap to untested images', 'Risk of repeating failure.',
        'Bypass change controls', 'Introduces new risks.',
        'Patch everything immediately', 'May misdiagnose root cause.'
      )
    },

    // HR (3)
    {
      department: 'HR',
      questionText: `How should HR guide staff during the ${k}?`,
      choices: buildChoices(
        'Issue safety, remote‑work, and phishing reminders', 'Protects staff and reduces errors.',
        'Ask managers to handle ad‑hoc', 'Inconsistent guidance across teams.',
        'Share impacted customer PII internally', 'Unnecessary exposure risk.',
        'Warn only executives', 'Leaves workforce uninformed.'
      )
    },
    {
      department: 'HR',
      questionText: `What is the remote‑work policy when ${sys} are degraded?`,
      choices: buildChoices(
        'Enable remote‑work per playbook with secure VPN', 'Maintains productivity securely.',
        'Mandate office‑only operations', 'Reduces flexibility, may hinder response.',
        'Allow personal email for files', 'Data leakage risk.',
        'Suspend all work', 'Unnecessary disruption.'
      )
    },
    {
      department: 'HR',
      questionText: `What staff comms cadence should HR set for ${k}?`,
      choices: buildChoices(
        'Scheduled updates via approved channels', 'Consistency reduces anxiety.',
        'Manager texts only', 'Fragmented and untracked.',
        'No updates until fix', 'Rumors and confusion.',
        'Public social posts', 'Unvetted information risk.'
      )
    },

    // Finance (3)
    {
      department: 'Finance',
      questionText: `What liquidity/capital step is prudent under ${k} (${s})?`,
      choices: buildChoices(
        'Activate contingency funding and monitor ratios', 'Preserves stability and compliance.',
        'Reduce discretionary spend only', 'Helps but insufficient in crises.',
        'Ignore capital triggers temporarily', 'Breaches risk policy.',
        'Freeze all vendor payments', 'Can disrupt critical services.'
      )
    },
    {
      department: 'Finance',
      questionText: `How should critical vendor payments be prioritized during ${k}?`,
      choices: buildChoices(
        'Pay security/infra vendors per continuity plan', 'Keeps core operations viable.',
        'Stop all payments immediately', 'Breaks essential services.',
        'Pay lowest invoices first', 'Misaligned with criticality.',
        'Delegate to each team', 'Inconsistent prioritization.'
      )
    },
    {
      department: 'Finance',
      questionText: `How should capital ratio changes be communicated?`,
      choices: buildChoices(
        'Coordinate with Risk/Regulatory for timely disclosures', 'Transparency and compliance.',
        'Delay reporting until month‑end', 'Potential non‑compliance.',
        'Share internally only', 'Stakeholders uninformed.',
        'Publish unaudited numbers widely', 'Accuracy risk.'
      )
    },

    // Loans (3)
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
      department: 'Loans',
      questionText: `What documentation controls apply to manual processing?`,
      choices: buildChoices(
        'Dual review + checklist + secure storage', 'Reduces errors and fraud.',
        'Accept verbal approvals only', 'Insufficient evidence.',
        'Skip checklists', 'Higher error rate.',
        'Email PII between staff', 'Privacy/compliance issues.'
      )
    },
    {
      department: 'Loans',
      questionText: `How should prioritization be set for pending loans during ${k}?`,
      choices: buildChoices(
        'Critical customers and time‑sensitive cases first', 'Optimizes impact.',
        'First‑in first‑out only', 'Ignores urgency.',
        'Executive requests only', 'Bias and fairness issues.',
        'Random order', 'Inefficient response.'
      )
    },

    // Accounting (3)
    {
      department: 'Accounting',
      questionText: `What is the accounting approach during ${k}?`,
      choices: buildChoices(
        'Provisional close with enhanced reconciliations', 'Transparency while controlling risk.',
        'Delay close indefinitely', 'Adds uncertainty.',
        'Skip reconciliations', 'Leads to misstatements.',
        'Alter entries to smooth impact', 'Creates fraud risk.'
      )
    },
    {
      department: 'Accounting',
      questionText: `Which reconciliations should be prioritized if ${sys} are affected?`,
      choices: buildChoices(
        'Cash, customer balances, and inter‑system breaks', 'Ensures core accuracy.',
        'Only cosmetic reports', 'Misses material issues.',
        'Skip until systems stable', 'Compounds errors.',
        'Manual overrides without logs', 'No audit trail.'
      )
    },
    {
      department: 'Accounting',
      questionText: `How should audit trail integrity be preserved during ${k}?`,
      choices: buildChoices(
        'Log approvals and changes centrally', 'Supports review/regulatory needs.',
        'Allow edits without approvals', 'Control failure risk.',
        'Disable logging to speed work', 'Evidence lost.',
        'Share credentials', 'Security and traceability risk.'
      )
    },

    // Deposits (3)
    {
      department: 'Deposits',
      questionText: `How should Deposits preserve customer access amid ${k}?`,
      choices: buildChoices(
        'Branches/ATMs with limits + status page', 'Maintains access and trust.',
        'ATM only', 'Partial access, comms still needed.',
        'Shut all channels', 'Triggers customer panic.',
        'Provide no updates', 'Creates confusion and complaints.'
      )
    },
    {
      department: 'Deposits',
      questionText: `What is the ATM/branch strategy during ${k} (${s})?`,
      choices: buildChoices(
        'Maintain core services with withdrawal limits', 'Balances demand and supply.',
        'Unlimited withdrawals', 'Liquidity risk.',
        'Close all branches', 'Disrupts access.',
        'No staff guidance', 'Creates inconsistency.'
      )
    },
    {
      department: 'Deposits',
      questionText: `How often should the public status page be updated?`,
      choices: buildChoices(
        'At a regular cadence with concrete progress', 'Builds confidence.',
        'Only when fixed', 'Insufficient transparency.',
        'Continuous unvetted updates', 'Noise and confusion.',
        'Update internally only', 'Customers left uninformed.'
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
