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

// Random helpers for variety
function randPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function sample(arr, n) {
  const copy = [...arr];
  const out = [];
  while (copy.length && out.length < n) {
    out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  }
  return out;
}

function buildChoices(correctText, correctExplanation, neutralText, neutralExplanation, wrongA, wrongAExp, wrongB, wrongBExp) {
  return [
    { text: correctText, type: 'correct', explanation: correctExplanation },
    { text: neutralText, type: 'neutral', explanation: neutralExplanation },
    { text: wrongA, type: 'wrong', explanation: wrongAExp },
    { text: wrongB, type: 'wrong', explanation: wrongBExp }
  ];
}

// Build choices with phrasing variety
function buildChoicesVar(cTexts, cExpls, nTexts, nExpls, wATexts, wAExpls, wBTexts, wBExpls) {
  return buildChoices(
    randPick(cTexts), randPick(cExpls),
    randPick(nTexts), randPick(nExpls),
    randPick(wATexts), randPick(wAExpls),
    randPick(wBTexts), randPick(wBExpls)
  );
}

function buildQuestions(kind, sev, systems, seed) {
  const k = kind;
  const s = sev;
  const sys = systems.join(', ');

  // Template pools per department
  const templates = {
    'CEO/SVPs': [
      () => ({
        department: 'CEO/SVPs',
        questionText: `What executive stance should be taken during the ${k} (${s}) affecting ${sys}?`,
        choices: buildChoicesVar(
          [
            'Activate crisis communications and designate a spokesperson',
            'Stand up a command center with a single voice'
          ],
          ['Sets tone and avoids confusion.', 'Clear ownership reduces mixed messaging.'],
          ['Issue a brief holding statement', 'Short-term clarity while details firm up.'],
          ['Buys time for fuller details.', 'Avoids speculation temporarily.'],
          ['Stay silent until resolved', 'Silence fuels speculation.'],
          ['Creates uncertainty and rumor risk.'],
          ['Assign comms to multiple leaders', 'Mixed messaging increases risk.'],
          ['Fragmented communications cause confusion.']
        )
      }),
      () => ({
        department: 'CEO/SVPs',
        questionText: `Which channels should leadership use first for stakeholder updates?`,
        choices: buildChoicesVar(
          ['Internal alert + status page + customer email', 'Status page + branch scripts + customer email'],
          ['Coordinated, multi‑channel clarity.', 'Consistent messaging across audiences.'],
          ['Executive-only chat room', 'Leads to narrow visibility.'],
          ['Too narrow; misses staff/customers.'],
          ['Social media only', 'Uncontrolled and incomplete.'],
          ['High risk of misinterpretation.'],
          ['Vendor press release', 'Lacks bank‑specific details.'],
          ['Misses context customers need.']
        )
      }),
      () => ({
        department: 'CEO/SVPs',
        questionText: `What public update cadence should be set for the ${k}?`,
        choices: buildChoicesVar(
          ['Hourly factual updates with progress and next steps', 'Regular scheduled updates with concrete milestones'],
          ['Builds trust; avoids speculation.', 'Predictable cadence reduces anxiety.'],
          ['Only at resolution', 'Too late; rumors fill the gap.'],
          ['Infrequent updates increase uncertainty.'],
          ['Continuous ad‑hoc posts', 'Inconsistent and confusing.'],
          ['Noise without clarity.'],
          ['Delegate to all managers', 'Fragmented messaging risk.'],
          ['Inconsistent statements undermine trust.']
        )
      }),
      () => ({
        department: 'CEO/SVPs',
        questionText: `What governance structure should lead triage for ${k}?`,
        choices: buildChoicesVar(
          ['Crisis command center with named leads', 'Cross-functional incident bridge with roles'],
          ['Coordinates cross-functional response.', 'Improves accountability and speed.'],
          ['Executive-only huddle', 'Lacks operational detail.'],
          ['Too high-level to drive execution.'],
          ['Vendor-only coordination', 'Misses bank-specific priorities.'],
          ['External-only focus lacks context.'],
          ['Ad-hoc meetings by team', 'Slow and inconsistent.'],
          ['No single source of truth.']
        )
      })
    ],

    'IT/Security': [
      () => ({
        department: 'IT/Security',
        questionText: `What is the first technical action for ${k} (${s})?`,
        choices: buildChoicesVar(
          ['Isolate affected systems and begin triage', 'Block risky traffic; isolate components; start triage'],
          ['Containment limits further impact.', 'Reduces blast radius quickly.'],
          ['Increase monitoring only', 'May help but impact continues.'],
          ['Observation without action is insufficient.'],
          ['Disable all logging', 'Destroys forensic evidence.'],
          ['Eliminates audit trail.'],
          ['Reboot production indiscriminately', 'May worsen outage/lose data.'],
          ['Risk of corruption and extended downtime.']
        )
      }),
      () => ({
        department: 'IT/Security',
        questionText: `How should forensic logging be handled during ${k}?`,
        choices: buildChoicesVar(
          ['Preserve and centralize logs with restricted access', 'Ship logs to secure central store with access controls'],
          ['Supports investigation and legal needs.', 'Enables accurate timeline reconstruction.'],
          ['Delete old logs to save space', 'Destroys evidence and traceability.'],
          ['Evidence loss harms investigation.'],
          ['Share raw logs to all staff', 'Privacy/security risks.'],
          ['Excess access increases leakage risk.'],
          ['Turn off audit trails', 'Blocks incident reconstruction.'],
          ['No visibility into changes.']
        )
      }),
      () => ({
        department: 'IT/Security',
        questionText: `What recovery approach is appropriate for impacted ${sys}?`,
        choices: buildChoicesVar(
          ['Restore from known‑good backups after validation', 'Canary release from validated backups'],
          ['Safe recovery with integrity.', 'Reduces chance of reintroducing issues.'],
          ['Hot‑swap to untested images', 'Risk of repeating failure.'],
          ['Unvalidated images may break again.'],
          ['Bypass change controls', 'Introduces new risks.'],
          ['Compliance and stability issues.'],
          ['Patch everything immediately', 'May misdiagnose root cause.'],
          ['Broad changes without analysis add risk.']
        )
      }),
      () => ({
        department: 'IT/Security',
        questionText: `How should in‑flight jobs be handled on ${sys}?`,
        choices: buildChoicesVar(
          ['Quarantine queues and reconcile before restart', 'Hold queues; validate and replay once safe'],
          ['Prevents duplicates and misposts.', 'Controls integrity of transactions.'],
          ['Force-send queued items', 'High chance of duplications.'],
          ['Creates double-post risk.'],
          ['Discard queues to clear load', 'Loses transaction records.'],
          ['Data loss and customer impact.'],
          ['Bypass change controls to patch', 'Introduces new risks.'],
          ['Uncontrolled fixes increase instability.']
        )
      })
    ],

    'HR': [
      () => ({
        department: 'HR',
        questionText: `How should HR guide staff during the ${k}?`,
        choices: buildChoicesVar(
          ['Issue safety, remote‑work, and phishing reminders', 'Publish outage guidance and phishing reminders'],
          ['Protects staff and reduces errors.', 'Reduces mistakes under stress.'],
          ['Ask managers to handle ad‑hoc', 'Inconsistent guidance across teams.'],
          ['Different messages cause confusion.'],
          ['Share impacted customer PII internally', 'Unnecessary exposure risk.'],
          ['Privacy breach potential.'],
          ['Warn only executives', 'Leaves workforce uninformed.'],
          ['Insufficient reach to staff.']
        )
      }),
      () => ({
        department: 'HR',
        questionText: `What is the remote‑work policy when ${sys} are degraded?`,
        choices: buildChoicesVar(
          ['Enable remote‑work per playbook with secure VPN', 'Allow remote‑work with MFA and VPN per policy'],
          ['Maintains productivity securely.', 'Keeps operations moving securely.'],
          ['Mandate office‑only operations', 'Reduces flexibility, may hinder response.'],
          ['Can slow incident recovery.'],
          ['Allow personal email for files', 'Data leakage risk.'],
          ['Privacy/compliance issues.'],
          ['Suspend all work', 'Unnecessary disruption.'],
          ['Halts productivity without need.']
        )
      }),
      () => ({
        department: 'HR',
        questionText: `What staff comms cadence should HR set for ${k}?`,
        choices: buildChoicesVar(
          ['Scheduled updates via approved channels', 'Regular updates via official channels'],
          ['Consistency reduces anxiety.', 'Predictable communication helps staff.'],
          ['Manager texts only', 'Fragmented and untracked.'],
          ['No system of record for comms.'],
          ['No updates until fix', 'Rumors and confusion.'],
          ['Creates uncertainty.'],
          ['Public social posts', 'Unvetted information risk.'],
          ['Potential disclosure issues.']
        )
      })
    ],

    'Finance': [
      () => ({
        department: 'Finance',
        questionText: `What liquidity/capital step is prudent under ${k} (${s})?`,
        choices: buildChoicesVar(
          ['Activate contingency funding and monitor ratios', 'Activate contingency lines and monitor capital'],
          ['Preserves stability and compliance.', 'Supports resilience under stress.'],
          ['Reduce discretionary spend only', 'Helps but insufficient in crises.'],
          ['Minor cuts rarely solve exposure.'],
          ['Ignore capital triggers temporarily', 'Breaches risk policy.'],
          ['Could violate governance rules.'],
          ['Freeze all vendor payments', 'Can disrupt critical services.'],
          ['Breaks essential operations.']
        )
      }),
      () => ({
        department: 'Finance',
        questionText: `How should critical vendor payments be prioritized during ${k}?`,
        choices: buildChoicesVar(
          ['Pay security/infra vendors per continuity plan', 'Prioritize critical ops and security vendors'],
          ['Keeps core operations viable.', 'Supports stability during incident.'],
          ['Stop all payments immediately', 'Breaks essential services.'],
          ['Service outages likely.'],
          ['Pay lowest invoices first', 'Misaligned with criticality.'],
          ['Weak prioritization strategy.'],
          ['Delegate to each team', 'Inconsistent prioritization.'],
          ['Fragmented decisions raise risk.']
        )
      }),
      () => ({
        department: 'Finance',
        questionText: `How should capital ratio changes be communicated?`,
        choices: buildChoicesVar(
          ['Coordinate with Risk/Regulatory for timely disclosures', 'Work with Compliance to disclose changes'],
          ['Transparency and compliance.', 'Meets regulatory expectations.'],
          ['Delay reporting until month‑end', 'Potential non‑compliance.'],
          ['Risk of findings or penalties.'],
          ['Share internally only', 'Stakeholders uninformed.'],
          ['External trust suffers.'],
          ['Publish unaudited numbers widely', 'Accuracy risk.'],
          ['Confusion and potential restatements.']
        )
      })
    ],

    'Loans': [
      () => ({
        department: 'Loans',
        questionText: `How should Loans maintain continuity if ${sys} are degraded?`,
        choices: buildChoicesVar(
          ['Use manual processing playbook and prioritize critical loans', 'Manual processing playbook for critical loans'],
          ['Maintains service with controls.', 'Keeps pipeline moving safely.'],
          ['Pause all new applications', 'Avoids complexity but harms customers.'],
          ['Impacts growth and service.'],
          ['Cancel active applications', 'Damages reputation and revenue.'],
          ['Harms customer relationships.'],
          ['Proceed without documentation', 'Creates compliance risk.'],
          ['Audit issues likely.']
        )
      }),
      () => ({
        department: 'Loans',
        questionText: `What documentation controls apply to manual processing?`,
        choices: buildChoicesVar(
          ['Dual review + checklist + secure storage', 'Dual controls, checklists, secure file handling'],
          ['Reduces errors and fraud.', 'Maintains integrity under stress.'],
          ['Accept verbal approvals only', 'Insufficient evidence.'],
          ['Weak audit trail.'],
          ['Skip checklists', 'Higher error rate.'],
          ['Increases defects and rework.'],
          ['Email PII between staff', 'Privacy/compliance issues.'],
          ['Creates data leakage risk.']
        )
      }),
      () => ({
        department: 'Loans',
        questionText: `How should prioritization be set for pending loans during ${k}?`,
        choices: buildChoicesVar(
          ['Critical customers and time‑sensitive cases first', 'Prioritize critical/time‑sensitive customers'],
          ['Optimizes impact.', 'Best use of limited capacity.'],
          ['First‑in first‑out only', 'Ignores urgency.'],
          ['Fairness but poor impact.'],
          ['Executive requests only', 'Bias and fairness issues.'],
          ['Can distort priorities.'],
          ['Random order', 'Inefficient response.'],
          ['Wastes time; poor outcomes.']
        )
      })
    ],

    'Accounting': [
      () => ({
        department: 'Accounting',
        questionText: `What is the accounting approach during ${k}?`,
        choices: buildChoicesVar(
          ['Provisional close with enhanced reconciliations', 'Provisional close with targeted reconciliations'],
          ['Transparency while controlling risk.', 'Shows control amid disruption.'],
          ['Delay close indefinitely', 'Adds uncertainty.'],
          ['Stakeholders lack clarity.'],
          ['Skip reconciliations', 'Leads to misstatements.'],
          ['Accuracy and control issues.'],
          ['Alter entries to smooth impact', 'Creates fraud risk.'],
          ['Misrepresentation risk.']
        )
      }),
      () => ({
        department: 'Accounting',
        questionText: `Which reconciliations should be prioritized if ${sys} are affected?`,
        choices: buildChoicesVar(
          ['Cash, customer balances, and inter‑system breaks', 'Cash, GL ties, inter‑system breaks'],
          ['Ensures core accuracy.', 'Focuses on material items.'],
          ['Only cosmetic reports', 'Misses material issues.'],
          ['Superficial work hides problems.'],
          ['Skip until systems stable', 'Compounds errors.'],
          ['Backlog and misstatements grow.'],
          ['Manual overrides without logs', 'No audit trail.'],
          ['Untraceable changes create findings.']
        )
      }),
      () => ({
        department: 'Accounting',
        questionText: `How should audit trail integrity be preserved during ${k}?`,
        choices: buildChoicesVar(
          ['Log approvals and changes centrally', 'Centralized approval logs and change tracking'],
          ['Supports review/regulatory needs.', 'Provides evidence of control.'],
          ['Allow edits without approvals', 'Control failure risk.'],
          ['Weakens governance.'],
          ['Disable logging to speed work', 'Evidence lost.'],
          ['No traceability under pressure.'],
          ['Share credentials', 'Security and traceability risk.'],
          ['Breaks segregation of duties.']
        )
      })
    ],

    'Deposits': [
      () => ({
        department: 'Deposits',
        questionText: `How should Deposits preserve customer access amid ${k}?`,
        choices: buildChoicesVar(
          ['Branches/ATMs with limits + status page', 'Branch scripts + ATM limits + status page'],
          ['Maintains access and trust.', 'Balances service with stability.'],
          ['ATM only', 'Partial access, comms still needed.'],
          ['Limited channels frustrate customers.'],
          ['Shut all channels', 'Triggers customer panic.'],
          ['Severe reputation impact.'],
          ['Provide no updates', 'Creates confusion and complaints.'],
          ['Silence increases call volume.']
        )
      }),
      () => ({
        department: 'Deposits',
        questionText: `What is the ATM/branch strategy during ${k} (${s})?`,
        choices: buildChoicesVar(
          ['Maintain core services with withdrawal limits', 'Branch core services; set withdrawal limits'],
          ['Balances demand and supply.', 'Controls cash usage responsibly.'],
          ['Unlimited withdrawals', 'Liquidity risk.'],
          ['Can cause shortages.'],
          ['Close all branches', 'Disrupts access.'],
          ['Customer access collapses.'],
          ['No staff guidance', 'Creates inconsistency.'],
          ['Different answers per branch.']
        )
      }),
      () => ({
        department: 'Deposits',
        questionText: `How often should the public status page be updated?`,
        choices: buildChoicesVar(
          ['At a regular cadence with concrete progress', 'Regular factual updates with progress'],
          ['Builds confidence.', 'Trust via transparency.'],
          ['Only when fixed', 'Insufficient transparency.'],
          ['Long gaps fuel speculation.'],
          ['Continuous unvetted updates', 'Noise and confusion.'],
          ['Too much chatter without facts.'],
          ['Update internally only', 'Customers left uninformed.'],
          ['External trust erodes.']
        )
      })
    ]
  };

  // Assemble 3 random questions per department
  const out = [];
  Object.keys(templates).forEach(dep => {
    const selected = sample(templates[dep], 3);
    selected.forEach(fn => out.push(fn()));
  });
  return out;
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
  return [
    buildHighDollarOutageScenario(),
    buildInternalDataBreachScenario(),
    buildRegulatoryAuditScenario()
  ];
}

export function getScenarioByKey(key) {
  if (!key) return null;
  switch (String(key).toLowerCase()) {
    case 'high-dollar-outage':
    case 'outage-high-dollar':
      return buildHighDollarOutageScenario();
    case 'internal-breach':
    case 'suspected-internal-breach':
      return buildInternalDataBreachScenario();
    case 'reg-audit':
    case 'regulatory-audit':
      return buildRegulatoryAuditScenario();
    default:
      return null;
  }
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

function buildRegulatoryAuditScenario() {
  const title = 'Regulatory Audit With Short Notice';
  const description = 'Regulators announce an audit starting in 72 hours. Teams must rapidly prepare evidence, confirm controls, and decide whether to remediate immediately or transparently disclose weaknesses.';
  const impactedSystems = ['Core System', 'Data Warehouse', 'Identity & Access Management'];

  const q = [];

  // CEO/SVPs
  q.push({
    department: 'CEO/SVPs',
    questionText: 'What overall audit strategy should leadership set?',
    choices: buildChoices(
      'Transparent readiness plan with prioritized fixes', 'Builds trust and focuses effort.',
      'Fix everything immediately without triage', 'Unrealistic; risks incomplete work.',
      'Disclose nothing and hope for best', 'Damaging; non-compliant.',
      'Delegate entirely to departments', 'Lacks coordinated governance.'
    )
  });
  q.push({
    department: 'CEO/SVPs',
    questionText: 'How should communications with regulators be handled?',
    choices: buildChoices(
      'Assign liaison; provide schedule and artifacts list', 'Shows control and cooperation.',
      'Ad-hoc emails from managers', 'Fragmented and inconsistent.',
      'No communication until day one', 'Appears disorganized.',
      'Overpromise full remediation', 'Creates commitments risk.'
    )
  });
  q.push({
    department: 'CEO/SVPs',
    questionText: 'What governance should coordinate the audit?',
    choices: buildChoices(
      'Audit command center with daily checkpoints', 'Ensures progress and alignment.',
      'Informal chat group only', 'Poor tracking and accountability.',
      'Vendor-led only', 'Misses bank-specific controls.',
      'Executive-only huddle', 'Too high-level; misses details.'
    )
  });

  // IT/Security
  q.push({
    department: 'IT/Security',
    questionText: 'What access/log preparations are essential?',
    choices: buildChoices(
      'Confirm IAM, MFA, and central log retention', 'Demonstrates effective controls.',
      'Disable logging to improve performance', 'Evidence lost; non-compliant.',
      'Share raw logs broadly', 'Privacy/security issues.',
      'Ignore stale access lists', 'Findings likely.'
    )
  });
  q.push({
    department: 'IT/Security',
    questionText: 'How should evidence be organized for regulators?',
    choices: buildChoices(
      'Curate artifacts in a secured portal with index', 'Efficient and auditable.',
      'Dump files via email attachments', 'Uncontrolled and messy.',
      'Provide screenshots only', 'Insufficient evidence.',
      'Delay evidence until questions arise', 'Appears unprepared.'
    )
  });
  q.push({
    department: 'IT/Security',
    questionText: 'How to handle known control gaps?',
    choices: buildChoices(
      'Document and begin remediation with timelines', 'Shows ownership and progress.',
      'Hide gaps from the scope', 'Risk of significant findings.',
      'Patch without change control', 'Introduces new risk.',
      'Ignore gaps until after audit', 'Likely negative findings.'
    )
  });

  // HR
  q.push({
    department: 'HR',
    questionText: 'What training evidence should be prepared?',
    choices: buildChoices(
      'Policy attestations and recent training records', 'Demonstrates compliance.',
      'Verbal confirmation from managers', 'Insufficient documentation.',
      'Future training plan only', 'Does not show past compliance.',
      'No records due to privacy', 'Non-compliant; incomplete.'
    )
  });
  q.push({
    department: 'HR',
    questionText: 'How to manage staff availability during the audit?',
    choices: buildChoices(
      'Schedule SMEs with backup coverage', 'Ensures continuity and access.',
      'Require all staff to be on call', 'Inefficient and disruptive.',
      'No scheduling—respond ad hoc', 'Misses key people; delays.',
      'Disallow overtime entirely', 'Reduces responsiveness.'
    )
  });
  q.push({
    department: 'HR',
    questionText: 'What policy communication should be issued?',
    choices: buildChoices(
      'Remind code of conduct and data handling rules', 'Reduces audit-day errors.',
      'Ask staff to improvise', 'Inconsistency and risk.',
      'Silence to avoid panic', 'Confusion likely.',
      'Loosen policies temporarily', 'Creates compliance risk.'
    )
  });

  // Finance
  q.push({
    department: 'Finance',
    questionText: 'How to validate capital and liquidity reporting?',
    choices: buildChoices(
      'Reconcile ratios and source data with evidence', 'Accuracy and traceability.',
      'Publish unaudited numbers', 'Accuracy risk.',
      'Delay reports until after audit', 'Non-compliance risk.',
      'Adjust figures to look better', 'Misstatement; fraud risk.'
    )
  });
  q.push({
    department: 'Finance',
    questionText: 'Which vendor invoices should be prioritized?',
    choices: buildChoices(
      'Audit-related and critical operations vendors', 'Supports audit and continuity.',
      'Pause all vendor payments', 'Breaks essential services.',
      'Pay lowest invoices first', 'Misaligned prioritization.',
      'Pay without approvals', 'Control failure.'
    )
  });
  q.push({
    department: 'Finance',
    questionText: 'How to approach known reporting weaknesses?',
    choices: buildChoices(
      'Document weaknesses with remediation plan', 'Transparent and constructive.',
      'Hide weaknesses from regulators', 'High risk if discovered.',
      'Fix quietly without evidence', 'No audit trail of improvement.',
      'Blame vendors broadly', 'Avoids ownership; weak response.'
    )
  });

  // Loans
  q.push({
    department: 'Loans',
    questionText: 'What documentation prep is needed for underwriting?',
    choices: buildChoices(
      'Sampling with checklists and secure access', 'Shows process control.',
      'Provide random files unreviewed', 'Findings likely.',
      'Verbal explanations only', 'Insufficient evidence.',
      'Email borrower PII to auditors', 'Privacy/compliance breach.'
    )
  });
  q.push({
    department: 'Loans',
    questionText: 'How to handle exceptions found in samples?',
    choices: buildChoices(
      'Record and remediate with approvals', 'Demonstrates control.',
      'Ignore minor exceptions', 'Pattern risk.',
      'Alter documents post-fact', 'Fraud risk.',
      'Remove files from sample', 'Manipulation risk.'
    )
  });
  q.push({
    department: 'Loans',
    questionText: 'What is the access model for auditors?',
    choices: buildChoices(
      'Scoped, read-only access via audit portal', 'Security and traceability.',
      'Full write access for speed', 'High risk.',
      'Shared credentials', 'Non-compliant.',
      'USB copies of files', 'Uncontrolled media risk.'
    )
  });

  // Accounting
  q.push({
    department: 'Accounting',
    questionText: 'How to prepare financial statements for the audit?',
    choices: buildChoices(
      'Tie-outs with reconciliations and evidence index', 'Shows control and accuracy.',
      'Estimated numbers to save time', 'Findings and restatements risk.',
      'Manual overrides without logs', 'No audit trail.',
      'Exclude complex areas from scope', 'Not acceptable.'
    )
  });
  q.push({
    department: 'Accounting',
    questionText: 'Which controls should be demonstrated?',
    choices: buildChoices(
      'Approvals, segregation of duties, and logs', 'Core control set.',
      'Manager sign-off only', 'Weak control environment.',
      'Shared admin rights', 'Segregation failure.',
      'Unlogged spreadsheet changes', 'Evidence gap.'
    )
  });
  q.push({
    department: 'Accounting',
    questionText: 'How to record audit-related adjustments?',
    choices: buildChoices(
      'Documented journal entries with approvals', 'Transparent and controlled.',
      'Post entries after audit quietly', 'Timing/accuracy issues.',
      'Net out adjustments to hide impact', 'Misstatement risk.',
      'No entries; present as-is', 'Potentially misleading.'
    )
  });

  // Deposits
  q.push({
    department: 'Deposits',
    questionText: 'What evidence is needed for account handling?',
    choices: buildChoices(
      'Policies, disclosures, and sampled account reviews', 'Demonstrates control and compliance.',
      'Verbal process description only', 'Insufficient evidence.',
      'Provide customer PII broadly for speed', 'Privacy breach.',
      'Exclude difficult cases from sample', 'Bias; risk of findings.'
    )
  });
  q.push({
    department: 'Deposits',
    questionText: 'How should disclosures be validated?',
    choices: buildChoices(
      'Confirm current forms and delivery logs', 'Traceable and compliant.',
      'Assume disclosures are fine', 'Risk of gaps.',
      'Update forms without approvals', 'Control failure.',
      'Ignore historical changes', 'Evidence gaps.'
    )
  });
  q.push({
    department: 'Deposits',
    questionText: 'How to communicate with customers during the audit?',
    choices: buildChoices(
      'Provide routine service updates if impacted', 'Maintains trust.',
      'Silence to avoid attention', 'Rumors and complaints.',
      'Mass blast about audit details', 'Unnecessary noise.',
      'Branch-only verbal guidance', 'Inconsistent; untracked.'
    )
  });

  return {
    title,
    description,
    questions: q
  };
}
