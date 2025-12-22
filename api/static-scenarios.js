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
  const list = [...getScenarios(), ...getSpecialScenarios()];
  return list[Math.floor(Math.random() * list.length)];
}

export default getRandomScenario;

// ---- Special, hand-authored scenarios ----

function buildHighDollarOutageScenario() {
  const title = 'Major System Outage During High-Dollar Transactions';
  const description = 'During peak business hours, core banking systems go down while multiple high-value ACH and wire transactions are mid-process. Customer access is degraded; risk of partial postings and duplicate/failed transactions is high. Leadership must balance rapid resumption with error/financial exposure.';
  const impactedSystems = ['Core System', 'ACH', 'Wire'];

  const q = [];

  // CEO/SVPs
  q.push({
    department: 'CEO/SVPs',
    questionText: 'Should the bank halt all high-dollar transactions until stability is confirmed?',
    choices: buildChoices(
      'Pause and communicate clearly to stakeholders', 'Reduces exposure; sets controlled cadence.',
      'Allow limited manual exceptions', 'Helps critical cases but needs controls.',
      'Continue operations as usual', 'High risk of mispostings/errors.',
      'Delegate decisions to each team', 'Fragmented, inconsistent risk-taking.'
    )
  });
  q.push({
    department: 'CEO/SVPs',
    questionText: 'What should leadership communicate publicly during the outage?',
    choices: buildChoices(
      'Transparent status with scheduled updates', 'Builds trust and reduces speculation.',
      'Minimal info until fixed', 'Insufficient clarity for customers.',
      'Blame vendor without details', 'Damages accountability and trust.',
      'Silence until resolution', 'Increases complaints and rumor risk.'
    )
  });
  q.push({
    department: 'CEO/SVPs',
    questionText: 'Which governance structure should lead triage?',
    choices: buildChoices(
      'Crisis command center with named leads', 'Coordinates cross-functional response.',
      'Ad-hoc meetings by team', 'Slow and inconsistent.',
      'Executive-only huddle', 'Misses operational detail.',
      'Vendor-only coordination', 'Lacks bank-specific priorities.'
    )
  });

  // IT/Security
  q.push({
    department: 'IT/Security',
    questionText: 'What is the first containment step for the core outage?',
    choices: buildChoices(
      'Isolate affected components and validate health checks', 'Limits spread and provides signal.',
      'Increase monitoring only', 'Does not restore service.',
      'Disable logging to reduce load', 'Destroys forensic evidence.',
      'Hot reboot production broadly', 'Risk of data loss/corruption.'
    )
  });
  q.push({
    department: 'IT/Security',
    questionText: 'How should in-flight ACH/wire tasks be handled?',
    choices: buildChoices(
      'Quarantine queues and reconcile before restart', 'Prevents duplicates and misposts.',
      'Force-send queued items', 'High chance of duplications.',
      'Discard queues to clear load', 'Loses transaction records.',
      'Bypass change controls to patch', 'Introduces new risks.'
    )
  });
  q.push({
    department: 'IT/Security',
    questionText: 'What validation is needed before restoring services?',
    choices: buildChoices(
      'Integrity checks + canary release + rollback plan', 'Safe, controlled recovery.',
      'Full-scale restart immediately', 'Unverified state may break again.',
      'Patch everything at once', 'May misdiagnose root cause.',
      'Skip DR drills and validations', 'Increases recovery risk.'
    )
  });

  // HR
  q.push({
    department: 'HR',
    questionText: 'How should HR support staff under outage stress?',
    choices: buildChoices(
      'Provide guidance, breaks, and overtime policy', 'Reduces burnout and mistakes.',
      'Ask managers to improvise', 'Inconsistent support.',
      'No formal comms to staff', 'Rumor and anxiety rise.',
      'Mandate extended shifts without support', 'Morale and error risk increase.'
    )
  });
  q.push({
    department: 'HR',
    questionText: 'Which communication cadence should HR set?',
    choices: buildChoices(
      'Scheduled updates via approved channels', 'Consistency and clarity.',
      'Manager texts only', 'Untracked and fragmented.',
      'Public social posts by employees', 'Unvetted information risk.',
      'Silence until resolution', 'Confusion and frustration.'
    )
  });
  q.push({
    department: 'HR',
    questionText: 'What remote-work guidance applies if branches are overwhelmed?',
    choices: buildChoices(
      'Enable remote-work per playbook with secure VPN', 'Maintains productivity securely.',
      'Office-only mandate', 'Reduces flexibility.',
      'Allow personal file sharing', 'Data leakage risk.',
      'Suspend all work', 'Unnecessary disruption.'
    )
  });

  // Finance
  q.push({
    department: 'Finance',
    questionText: 'How should liquidity be managed during partial postings?',
    choices: buildChoices(
      'Activate contingency funding and monitor exposures', 'Preserves stability.',
      'Freeze all payments', 'Disrupts critical services.',
      'Ignore capital triggers', 'Breaches policy.',
      'Delay vendor payments broadly', 'Operational impact increases.'
    )
  });
  q.push({
    department: 'Finance',
    questionText: 'What is the prioritization for high-dollar transactions?',
    choices: buildChoices(
      'Critical customers with validated data first', 'Balances risk and service.',
      'First-in first-out only', 'Ignores urgency and exposure.',
      'Executive requests only', 'Bias issues.',
      'Random order', 'Inefficient.'
    )
  });
  q.push({
    department: 'Finance',
    questionText: 'How should external disclosures be handled?',
    choices: buildChoices(
      'Coordinate with Risk/Regulatory for timely updates', 'Transparency and compliance.',
      'Share internally only', 'Stakeholders uninformed.',
      'Publish unaudited numbers', 'Accuracy risk.',
      'Delay all disclosures', 'Regulatory risk.'
    )
  });

  // Loans
  q.push({
    department: 'Loans',
    questionText: 'How should incomplete loan disbursements be handled?',
    choices: buildChoices(
      'Manual processing checklist + dual review', 'Reduces errors and fraud.',
      'Pause all disbursements', 'Service impact; may be necessary.',
      'Proceed without documentation', 'Compliance risk.',
      'Cancel pending disbursements broadly', 'Reputation damage.'
    )
  });
  q.push({
    department: 'Loans',
    questionText: 'What documentation controls apply during outage?',
    choices: buildChoices(
      'Secure storage + approvals + audit trail', 'Maintains integrity.',
      'Accept verbal approvals only', 'Insufficient evidence.',
      'Email PII between staff', 'Privacy issues.',
      'Skip checklists', 'Higher error rate.'
    )
  });
  q.push({
    department: 'Loans',
    questionText: 'How should prioritization be set for pending loans?',
    choices: buildChoices(
      'Critical/time‑sensitive customers first', 'Optimizes impact.',
      'FIFO only', 'Ignores urgency.',
      'Executive requests only', 'Bias issues.',
      'Random order', 'Inefficient.'
    )
  });

  // Accounting
  q.push({
    department: 'Accounting',
    questionText: 'What is the accounting approach for partial postings?',
    choices: buildChoices(
      'Provisional close with enhanced reconciliations', 'Transparency with control.',
      'Delay close indefinitely', 'Uncertainty increases.',
      'Skip reconciliations', 'Misstatements likely.',
      'Alter entries to smooth impact', 'Fraud risk.'
    )
  });
  q.push({
    department: 'Accounting',
    questionText: 'Which reconciliations are prioritized?',
    choices: buildChoices(
      'Cash, high-value items, and inter‑system breaks', 'Ensures core accuracy.',
      'Cosmetic reports only', 'Misses material issues.',
      'Skip until stable', 'Compounds errors.',
      'Manual overrides without logs', 'No audit trail.'
    )
  });
  q.push({
    department: 'Accounting',
    questionText: 'How should audit trail integrity be preserved?',
    choices: buildChoices(
      'Log approvals/changes centrally', 'Supports review needs.',
      'Allow edits without approvals', 'Control failure.',
      'Disable logging to speed work', 'Evidence lost.',
      'Share credentials', 'Security risk.'
    )
  });

  // Deposits
  q.push({
    department: 'Deposits',
    questionText: 'How should Deposits preserve customer access during outage?',
    choices: buildChoices(
      'Branches/ATMs with limits + status page', 'Maintains access and trust.',
      'ATM only', 'Partial access; comms needed.',
      'Shut all channels', 'Triggers panic.',
      'Provide no updates', 'Creates confusion.'
    )
  });
  q.push({
    department: 'Deposits',
    questionText: 'What is the branch/ATM strategy for high-demand hours?',
    choices: buildChoices(
      'Maintain core services with withdrawal limits', 'Balances demand and supply.',
      'Unlimited withdrawals', 'Liquidity risk.',
      'Close all branches', 'Disrupts access.',
      'No staff guidance', 'Inconsistency risk.'
    )
  });
  q.push({
    department: 'Deposits',
    questionText: 'How often should the public status page be updated?',
    choices: buildChoices(
      'Regular cadence with concrete progress', 'Builds confidence.',
      'Only when fixed', 'Insufficient transparency.',
      'Continuous unvetted updates', 'Noise and confusion.',
      'Internal updates only', 'Customers left uninformed.'
    )
  });

  return {
    title,
    description,
    questions: q
  };
}

export function getSpecialScenarios() {
  return [buildHighDollarOutageScenario(), buildInternalDataBreachScenario()];
}

function buildInternalDataBreachScenario() {
  const title = 'Suspected Internal Data Breach';
  const description = 'Unusual access logs suggest employee credentials may have been misused. Leadership must balance transparency with containment while teams investigate scope, protect customer data, and address privacy and regulatory obligations.';
  const impactedSystems = ['Identity & Access Management', 'Customer PII', 'Collaboration Platform'];

  const q = [];

  // CEO/SVPs
  q.push({
    department: 'CEO/SVPs',
    questionText: 'What public stance should leadership take initially?',
    choices: buildChoices(
      'Acknowledge investigation with facts and cadence', 'Builds trust while avoiding speculation.',
      'Issue a minimal holding statement only', 'Provides limited clarity; ok short-term.',
      'Deny issues until proven', 'Erodes credibility; risky.',
      'Blame a single employee publicly', 'Premature and legally risky.'
    )
  });
  q.push({
    department: 'CEO/SVPs',
    questionText: 'How should regulatory notifications be handled?',
    choices: buildChoices(
      'Coordinate with Legal/Compliance and notify per rules', 'Timely, compliant disclosures.',
      'Wait 24 hours for more facts', 'Short delay may be acceptable but risky.',
      'Notify only after full fix', 'Too late; may breach requirements.',
      'Skip notification due to uncertainty', 'Non-compliant; high risk.'
    )
  });
  q.push({
    department: 'CEO/SVPs',
    questionText: 'What communication cadence should be set?',
    choices: buildChoices(
      'Scheduled, factual updates via status page', 'Consistent and trustworthy.',
      'Ad‑hoc executive posts', 'Inconsistent; confusing.',
      'Silence until resolution', 'Rumors and distrust rise.',
      'Employee social media posts', 'Unvetted information risk.'
    )
  });

  // IT/Security
  q.push({
    department: 'IT/Security',
    questionText: 'What is the first containment step?',
    choices: buildChoices(
      'Isolate accounts/rotate creds; enforce MFA', 'Limits further misuse quickly.',
      'Increase monitoring only', 'Insufficient; exposure continues.',
      'Disable logging to reduce load', 'Destroys forensic evidence.',
      'Reboot production broadly', 'Disruptive; not targeted.'
    )
  });
  q.push({
    department: 'IT/Security',
    questionText: 'How should scope be investigated?',
    choices: buildChoices(
      'Centralize logs; map access; verify anomalies', 'Determines true impact.',
      'Sample a few logs', 'May miss key activity.',
      'Purge logs to start fresh', 'Evidence loss; non-compliant.',
      'Share raw logs to all staff', 'Privacy/security issues.'
    )
  });
  q.push({
    department: 'IT/Security',
    questionText: 'How to assess potential data exposure?',
    choices: buildChoices(
      'Identify accessed PII/systems and preserve artifacts', 'Supports remediation and notices.',
      'Assume minimal exposure', 'Underestimates risk.',
      'Assume no exposure', 'Not evidence-based.',
      'Guess based on past incidents', 'Unreliable approach.'
    )
  });

  // HR
  q.push({
    department: 'HR',
    questionText: 'How should HR address privacy and discipline?',
    choices: buildChoices(
      'Follow policy; preserve evidence; due process', 'Fair and defensible.',
      'Manager discretion case-by-case', 'Inconsistent outcomes.',
      'Name/shame publicly', 'Violates privacy; legal risk.',
      'Immediate termination without review', 'Unfair; risk of challenge.'
    )
  });
  q.push({
    department: 'HR',
    questionText: 'What guidance should staff receive now?',
    choices: buildChoices(
      'Remind data handling, phishing, reporting channels', 'Reduces error and risk.',
      'No guidance to avoid panic', 'Rumors and mistakes grow.',
      'Allow personal storage for speed', 'Data leakage risk.',
      'Ask staff to monitor coworkers', 'Creates hostility; not compliant.'
    )
  });
  q.push({
    department: 'HR',
    questionText: 'How should investigation comms to employees occur?',
    choices: buildChoices(
      'Confidential notice with expectations', 'Balances transparency/privacy.',
      'Generic memo only', 'Limited clarity; ok short-term.',
      'Publish suspect list internally', 'Privacy breach; defamation risk.',
      'No notice at all', 'Confusion and rumor spread.'
    )
  });

  // Finance
  q.push({
    department: 'Finance',
    questionText: 'How to track remediation costs?',
    choices: buildChoices(
      'Incident budget with approvals and tracking', 'Enables transparency.',
      'Estimate later when done', 'Poor control; surprises.',
      'Ignore small invoices', 'Understates true cost.',
      'Spend without controls', 'Fraud/waste risk.'
    )
  });
  q.push({
    department: 'Finance',
    questionText: 'Should a provisional reserve for fines be recorded?',
    choices: buildChoices(
      'Consult Legal/Risk; record provisional reserve', 'Prudent and transparent.',
      'Wait for regulator confirmation', 'Delays may misstate exposure.',
      'No reserve is needed', 'Potential under-reporting.',
      'Hide potential fines', 'Misleading accounting.'
    )
  });
  q.push({
    department: 'Finance',
    questionText: 'Which vendor costs should be prioritized?',
    choices: buildChoices(
      'Security/forensics and IAM services', 'Supports containment and truth-finding.',
      'Cut all vendor spend', 'Breaks critical services.',
      'Delay paying vendors broadly', 'Service disruption risk.',
      'Pay without approvals', 'Control failure.'
    )
  });

  // Loans
  q.push({
    department: 'Loans',
    questionText: 'How to handle potential exposure of borrower data?',
    choices: buildChoices(
      'Restrict access; assess loan files for exposure', 'Reduces risk and supports notices.',
      'Assume files are safe', 'May miss compromised items.',
      'Email files to verify quickly', 'Creates new exposure.',
      'Continue normal processing unchanged', 'Ignores active risk.'
    )
  });
  q.push({
    department: 'Loans',
    questionText: 'What manual processing controls apply now?',
    choices: buildChoices(
      'Checklists + dual controls + secure storage', 'Maintains integrity.',
      'Expedite without full checks', 'Error/fraud risk.',
      'Skip formal approvals', 'Control failure.',
      'Share PII via email for speed', 'Privacy/compliance risk.'
    )
  });
  q.push({
    department: 'Loans',
    questionText: 'How should borrower notifications be managed?',
    choices: buildChoices(
      'Coordinated notices for impacted borrowers', 'Compliant and targeted.',
      'Verbal branch guidance only', 'Inconsistent; untracked.',
      'No notices to avoid panic', 'Non-compliant if impacted.',
      'Publish list of borrowers', 'Severe privacy breach.'
    )
  });

  // Accounting
  q.push({
    department: 'Accounting',
    questionText: 'How should audit trail integrity be preserved?',
    choices: buildChoices(
      'Lock logs; track changes centrally', 'Supports review/regulatory needs.',
      'Preserve later after resolution', 'Evidence may be lost.',
      'Disable logging for speed', 'Evidence destroyed.',
      'Share credentials across staff', 'Security and traceability risk.'
    )
  });
  q.push({
    department: 'Accounting',
    questionText: 'Which reconciliations should be prioritized?',
    choices: buildChoices(
      'Customer balances, GL impacts, inter‑system breaks', 'Ensures core accuracy.',
      'Cosmetic reports only', 'Misses material issues.',
      'Delay until stable', 'Compounds errors.',
      'Manual overrides without logs', 'No audit trail.'
    )
  });
  q.push({
    department: 'Accounting',
    questionText: 'How should incident-related expenses be recorded?',
    choices: buildChoices(
      'Record provisional expenses with documentation', 'Transparency and control.',
      'Record later as a batch', 'Timing/accuracy issues.',
      'Hide expenses in misc accounts', 'Misstatement risk.',
      'Fabricate offsets to smooth impact', 'Fraud risk.'
    )
  });

  // Deposits
  q.push({
    department: 'Deposits',
    questionText: 'How should customer notifications be handled?',
    choices: buildChoices(
      'Notify impacted customers with facts and steps', 'Trust and compliance.',
      'Wait for full confirmation', 'May delay required notices.',
      'Generic mass notice to all', 'Creates confusion; not targeted.',
      'No customer notice', 'Non-compliant if exposure occurred.'
    )
  });
  q.push({
    department: 'Deposits',
    questionText: 'What immediate account security steps apply?',
    choices: buildChoices(
      'Force resets and encourage MFA enrollment', 'Reduces takeover risk.',
      'Optional resets for some', 'Incomplete protection.',
      'Share security tips only', 'Insufficient action.',
      'No changes to accounts', 'Continued exposure risk.'
    )
  });
  q.push({
    department: 'Deposits',
    questionText: 'How often should the public status page be updated?',
    choices: buildChoices(
      'Regular cadence with concrete progress', 'Builds confidence.',
      'Only when fixed', 'Insufficient transparency.',
      'Continuous unvetted updates', 'Noise and confusion.',
      'Internal updates only', 'Customers left uninformed.'
    )
  });

  return {
    title,
    description,
    questions: q
  };
}
