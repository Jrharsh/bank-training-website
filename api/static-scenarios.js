// api/static-scenarios.js
// 5 static tabletop scenarios.
// Each scenario: 21 questions (3 per department).

function buildChoices(aText, aImpact, bText, bImpact, cText, cImpact, dText, dImpact) {
  return [
    { text: aText, impact: aImpact, score: 2 },
    { text: bText, impact: bImpact, score: 1 },
    { text: cText, impact: cImpact, score: -1 },
    { text: dText, impact: dImpact, score: -2 }
  ];
}

function q(department, questionText, choices) {
  return { department, questionText, choices };
}

/* ------------------------- SCENARIO 1 ------------------------- */
const SCENARIO_RANSOMWARE = {
  key: "ransomware-core-ach",
  title: "Ransomware Disrupts Core + Online Banking + ACH",
  description:
    "A ransomware event encrypts key servers supporting core processing and online banking. ACH files are delayed and customers report failed logins. Incident Command is activated.",
  questions: [
    q("CEO/SVPs", "What is leadership’s first move in the first 30 minutes?", buildChoices(
      "Activate Incident Command + name a spokesperson", "Fast alignment and controlled messaging.",
      "Hold internal meeting first, then decide", "Slower, but may improve clarity.",
      "Stay silent until IT confirms scope", "Rumors spread; trust drops.",
      "Let vendor/third-party lead comms", "Loss of control and inconsistent info."
    )),
    q("CEO/SVPs", "Do we pay the ransom if restoration is slow?", buildChoices(
      "Do not pay; focus on restore + law enforcement + legal", "Avoids funding criminals; defensible posture.",
      "Evaluate as last resort with legal/regulatory guidance", "Keeps optionality; still risky.",
      "Pay immediately to restore quickly", "Encourages repeat targeting; no guarantee.",
      "Ignore and hope it resolves", "Worsens damage; weak governance."
    )),
    q("CEO/SVPs", "What should leadership communicate to customers today?", buildChoices(
      "Acknowledge outage + steps + update cadence", "Builds trust; reduces call volume.",
      "Minimal holding statement only", "May be okay briefly; less helpful.",
      "Blame a specific vendor publicly", "Legal/reputation risk; not constructive.",
      "Say “all is normal” to avoid panic", "If false, major credibility damage."
    )),
    q("IT/Security", "What is the first containment action?", buildChoices(
      "Isolate impacted hosts + disable lateral movement paths", "Limits spread; preserves evidence.",
      "Increase monitoring and wait", "Gathers data but doesn’t stop spread.",
      "Disable logging to reduce load", "Destroys forensic trail; bad practice.",
      "Reboot everything to 'clear it'", "Can worsen encryption/data loss."
    )),
    q("IT/Security", "How do you handle backups and restoration?", buildChoices(
      "Validate clean backups + restore in phases (canary)", "Controlled recovery; reduces reinfection risk.",
      "Restore everything at once", "Faster but higher reinfection/instability risk.",
      "Skip backup validation", "Risk restoring infected state.",
      "Ignore backups and rebuild later", "Unnecessary downtime; business damage."
    )),
    q("IT/Security", "How should customer-facing systems be brought back online?", buildChoices(
      "Staged restore with integrity checks + rollback plan", "Stable recovery; protects data.",
      "Bring all channels online immediately", "Customer access returns but unstable risky.",
      "Bypass change controls to patch quickly", "Introduces new vulnerabilities.",
      "Share admin credentials widely to speed work", "Security breakdown; audit failures."
    )),
    q("HR", "What guidance should HR send staff today?", buildChoices(
      "Clear comms + phishing reminder + reporting steps", "Reduces mistakes; supports incident response.",
      "Tell managers to handle it locally", "Inconsistent messaging; confusion.",
      "Allow personal email/file sharing to keep work moving", "Data leakage and compliance risk.",
      "No guidance until it’s fixed", "Rumors/anxiety increase; errors rise."
    )),
    q("HR", "What staffing policy is appropriate during incident response?", buildChoices(
      "Documented overtime/coverage plan + breaks", "Reduces burnout and errors.",
      "Unlimited overtime without tracking", "Fatigue and HR risk.",
      "No overtime allowed", "Response slows; service impact grows.",
      "Force extended shifts with no relief", "High burnout; safety issues."
    )),
    q("HR", "Remote-work policy if office systems are degraded?", buildChoices(
      "Remote allowed with VPN/MFA and approved tools", "Keeps productivity with controls.",
      "Remote allowed with minimal controls", "Convenient but increases risk.",
      "Office-only mandate", "Reduces flexibility; delays work.",
      "Stop all work entirely", "Unnecessary disruption."
    )),
    q("Finance", "What’s the first finance control during disruption?", buildChoices(
      "Track incident costs + approve critical spend", "Prevents surprises; supports audit trail.",
      "Spend now; reconcile later", "Fast but weak controls.",
      "Freeze all vendor payments", "May break critical services.",
      "Ignore costs until month-end", "No visibility; governance risk."
    )),
    q("Finance", "How should liquidity be monitored during service disruption?", buildChoices(
      "Increase liquidity monitoring + contingency planning", "Reduces risk of cash stress.",
      "Normal monitoring only", "May miss rapid changes.",
      "Assume deposits won’t move", "Risky assumption.",
      "Stop monitoring because systems are down", "Governance failure."
    )),
    q("Finance", "How do you manage critical vendor payments (security/infra)?", buildChoices(
      "Prioritize critical vendors per continuity plan", "Keeps recovery moving.",
      "Pay lowest invoices first", "Not aligned to criticality.",
      "Let each dept decide independently", "Inconsistent priorities; conflict.",
      "Stop paying until incident ends", "Service disruption and penalties."
    )),
    q("Loans", "How should loan operations continue if core is degraded?", buildChoices(
      "Use manual playbook + prioritize time-sensitive cases", "Maintains service with controls.",
      "Pause all new loan activity", "Reduces risk but harms customers.",
      "Proceed without documentation", "Compliance and fraud risk.",
      "Cancel in-flight loans broadly", "Reputation damage."
    )),
    q("Loans", "What controls apply to manual underwriting/processing?", buildChoices(
      "Dual review + checklist + secure document storage", "Preserves audit trail and accuracy.",
      "Verbal approvals only", "Weak evidence; audit failures.",
      "Skip checklists to move faster", "Higher error rate and rework.",
      "Email PII freely between staff", "Privacy/compliance breach risk."
    )),
    q("Loans", "How should borrower communications be handled?", buildChoices(
      "Standard scripts + factual updates + escalation path", "Consistent and defensible.",
      "Let each lender communicate however they want", "Inconsistent; risk statements.",
      "No communication until full restoration", "Complaints and confusion grow.",
      "Promise timelines you can’t confirm", "Credibility and legal risk."
    )),
    q("Accounting", "How should accounting handle posting delays/partial data?", buildChoices(
      "Provisional close + enhanced reconciliations", "Transparency with control.",
      "Delay all closes indefinitely", "Uncertainty and backlog grows.",
      "Skip reconciliations due to time", "Misstatements likely.",
      "Adjust entries to 'smooth' the impact", "Fraud/misrepresentation risk."
    )),
    q("Accounting", "Which reconciliations are top priority?", buildChoices(
      "Cash + customer balances + inter-system breaks", "Covers material risk areas.",
      "Cosmetic reports first", "Misses material exposure.",
      "Wait until systems stable", "Backlog compounds risk.",
      "Manual overrides with no logs", "No audit trail."
    )),
    q("Accounting", "How do you preserve audit trail during manual workarounds?", buildChoices(
      "Central log of approvals/changes + evidence retention", "Defensible record for auditors/regulators.",
      "Rely on staff memory and email threads", "Weak evidence; inconsistent.",
      "Disable logging to move faster", "Evidence destroyed.",
      "Share credentials for speed", "Breaks segregation of duties."
    )),
    q("Deposits", "How do you preserve customer access during online banking disruption?", buildChoices(
      "Branch/ATM continuity + status page + scripts", "Maintains access and reduces panic.",
      "ATM-only approach", "Partial access; higher branch pressure.",
      "Shut all access channels", "Triggers panic and complaints.",
      "No updates to customers", "Call volume and distrust spike."
    )),
    q("Deposits", "What is an appropriate withdrawal strategy during the incident?", buildChoices(
      "Temporary limits + clear explanation", "Manages liquidity and fairness.",
      "Unlimited withdrawals for everyone", "Cash/liquidity risk.",
      "Close branches to reduce load", "Access failure; reputational hit.",
      "Staff make up rules per branch", "Inconsistent; escalations increase."
    )),
    q("Deposits", "How often should the public status page be updated?", buildChoices(
      "Regular cadence with factual progress", "Builds trust; reduces speculation.",
      "Only when fixed", "Too little transparency.",
      "Constant unvetted updates", "Noise, confusion, mistakes.",
      "Internal-only updates", "Customers left uninformed."
    ))
  ]
};

/* ------------------------- SCENARIO 2 ------------------------- */
const SCENARIO_LIQUIDITY = {
  key: "liquidity-stress",
  title: "Liquidity Stress During Market Volatility",
  description:
    "Rapid withdrawals and unsettled settlements increase liquidity risk. Contingency funding plans and capital monitoring must be activated.",
  questions: [
    q("CEO/SVPs", "What is leadership’s first public stance?", buildChoices(
      "Transparent update cadence with contingency plan noted", "Builds confidence; reduces speculation.",
      "Minimal holding statement only", "Less clarity for stakeholders.",
      "Blame market conditions publicly", "Deflects accountability; may harm trust.",
      "Remain silent until resolved", "Rumors and complaints rise."
    )),
    q("CEO/SVPs", "Who should lead triage governance?", buildChoices(
      "Crisis command center with named leads", "Coordinates cross-functional decisions.",
      "Ad-hoc meetings by team", "Inconsistent and slow.",
      "Executive-only huddle", "Misses operational detail.",
      "Vendor-only coordination", "Lacks bank priorities."
    )),
    q("CEO/SVPs", "Should non-critical initiatives be paused?", buildChoices(
      "Pause discretionary initiatives and focus resources", "Concentrates effort on stability.",
      "Continue everything as normal", "Dilutes response.",
      "Pause only IT work", "Misaligned prioritization.",
      "Pause only branch work", "Customer impact worsens."
    )),

    q("IT/Security", "How should systems be validated for stability?", buildChoices(
      "Integrity checks + canary changes + rollback plan", "Controlled and observable.",
      "Full-scale changes immediately", "Unverified; may break again.",
      "Disable logging to reduce load", "Destroys forensic evidence.",
      "Hot reboot production broadly", "Risk of corruption."
    )),
    q("IT/Security", "What is the priority for status reporting?", buildChoices(
      "Health dashboards with incident SLOs", "Improves signal for leaders.",
      "Email threads only", "Untracked; fragmented.",
      "Chat messages without records", "Weak audit trail.",
      "Manual calls per team", "Inconsistent; slow."
    )),
    q("IT/Security", "Access controls under pressure?", buildChoices(
      "Maintain MFA and least-privilege overrides", "Security preserved.",
      "Share credentials to speed work", "Breaks segregation of duties.",
      "Disable MFA temporarily", "High risk exposure.",
      "Grant admin broadly", "Audit and security risk."
    )),

    q("HR", "How should staffing be managed?", buildChoices(
      "Documented overtime plan + breaks + support", "Reduces burnout and errors.",
      "Unlimited overtime without tracking", "Fatigue and HR risk.",
      "No overtime allowed", "Response slows.",
      "Force extended shifts", "Morale and safety issues."
    )),
    q("HR", "What guidance should HR send?", buildChoices(
      "Clear scripts + escalation path + wellbeing", "Consistency and care.",
      "Manager improvisation only", "Inconsistent; confusing.",
      "No guidance until fixed", "Rumors and anxiety rise.",
      "Public social posts by staff", "Unvetted information risk."
    )),
    q("HR", "Remote work policy during high call volume?", buildChoices(
      "Remote with VPN/MFA and approved tools", "Productivity with controls.",
      "Remote with minimal controls", "Convenient but risky.",
      "Office-only mandate", "Reduces flexibility.",
      "Suspend all work", "Unnecessary disruption."
    )),

    q("Finance", "How should contingency funding be activated?", buildChoices(
      "Per playbook; monitor ratios and exposures", "Preserves stability and compliance.",
      "Ad-hoc draws without tracking", "Weak controls; audit issues.",
      "Ignore capital triggers temporarily", "Governance failure.",
      "Freeze all payments broadly", "Breaks critical services."
    )),
    q("Finance", "Vendor payments prioritization?", buildChoices(
      "Security/infra vendors first per continuity plan", "Keeps core operations viable.",
      "Pay lowest invoices first", "Misaligned to criticality.",
      "Delegate to each team independently", "Fragmented prioritization.",
      "Stop all payments", "Service outages likely."
    )),
    q("Finance", "External disclosures for ratio changes?", buildChoices(
      "Coordinate with Risk/Regulatory for timely updates", "Transparency and compliance.",
      "Share internally only", "Stakeholders uninformed.",
      "Publish unaudited numbers widely", "Accuracy risk.",
      "Delay all disclosures", "Regulatory risk."
    )),

    q("Loans", "Manual processing controls under strain?", buildChoices(
      "Dual review + checklist + secure storage", "Preserves audit trail.",
      "Verbal approvals only", "Weak evidence.",
      "Skip checklists to move faster", "Higher error rate.",
      "Email PII between staff", "Privacy/compliance risk."
    )),
    q("Loans", "Prioritization of pending loans?", buildChoices(
      "Critical/time-sensitive customers first", "Optimizes impact.",
      "FIFO only", "Ignores urgency.",
      "Executive requests only", "Bias issues.",
      "Random order", "Inefficient."
    )),
    q("Loans", "Borrower communications approach?", buildChoices(
      "Standard scripts + factual updates", "Consistent and defensible.",
      "Ad-hoc per lender", "Inconsistent messaging.",
      "Silence until restoration", "Complaints grow.",
      "Promise timelines without confidence", "Credibility risk."
    )),

    q("Accounting", "Accounting approach for partial postings?", buildChoices(
      "Provisional close + targeted reconciliations", "Transparency with control.",
      "Delay close indefinitely", "Backlog and uncertainty.",
      "Skip reconciliations due to time", "Misstatements likely.",
      "Alter entries to smooth impact", "Fraud risk."
    )),
    q("Accounting", "Which reconciliations to prioritize?", buildChoices(
      "Cash, customer balances, inter-system breaks", "Material risk areas.",
      "Cosmetic reports first", "Misses material exposure.",
      "Wait until stable", "Compounds errors.",
      "Manual overrides with no logs", "No audit trail."
    )),
    q("Accounting", "Preserve audit trail integrity?", buildChoices(
      "Central approvals/changes log + evidence", "Defensible record.",
      "Rely on memory/email threads", "Weak evidence.",
      "Disable logging to move faster", "Evidence destroyed.",
      "Share credentials", "Breaks segregation of duties."
    )),

    q("Deposits", "Preserve customer access during strain?", buildChoices(
      "Branch/ATM continuity + status page", "Maintains access and trust.",
      "ATM-only", "Partial access; higher branch pressure.",
      "Shut all channels", "Triggers panic.",
      "No customer updates", "Complaints and distrust spike."
    )),
    q("Deposits", "Withdrawal strategy in high demand?", buildChoices(
      "Temporary limits + explanation", "Balances demand and supply.",
      "Unlimited withdrawals", "Liquidity risk.",
      "Close branches broadly", "Access failure.",
      "Different rules per branch", "Inconsistency; escalations."
    )),
    q("Deposits", "Public status page cadence?", buildChoices(
      "Regular factual updates", "Builds trust; reduces speculation.",
      "Only when fixed", "Insufficient transparency.",
      "Constant unvetted updates", "Noise and confusion.",
      "Internal-only updates", "Customers uninformed."
    ))
  ]
};

/* ------------------------- SCENARIO 3 ------------------------- */
const SCENARIO_FRAUD = {
  key: "fraud-ring-customer-accounts",
  title: "Fraud Ring Targeting Customer Accounts",
  description:
    "Coordinated account takeover attempts are detected across channels. Controls, communications, and reconciliations must be tightened immediately.",
  questions: [
    q("CEO/SVPs", "Public stance on fraud activity?", buildChoices(
      "Acknowledge attempts; outline protections and cadence", "Builds trust; deters speculation.",
      "Minimal holding statement only", "Less clarity.",
      "Blame social media publicly", "Deflection harms credibility.",
      "Remain silent", "Rumors and panic rise."
    )),
    q("IT/Security", "Immediate containment action?", buildChoices(
      "Increase auth friction + monitor anomalies", "Reduces takeover success.",
      "Disable logging to reduce load", "Destroys evidence.",
      "Open all filters for convenience", "Risk skyrockets.",
      "Broad reboot of prod", "Disruption without benefit."
    )),
    q("HR", "Staff guidance for fraud response?", buildChoices(
      "Standard scripts + escalation + phishing reminders", "Consistency; fewer errors.",
      "Ad-hoc manager guidance", "Inconsistent.",
      "No guidance", "Rumors/anxiety.",
      "Personal social posts", "Disclosure risk."
    )),
    q("Finance", "Vendor spend prioritization?", buildChoices(
      "Security/monitoring vendors prioritized", "Supports incident response.",
      "Lowest invoices first", "Misaligned.",
      "Freeze all spend", "Breaks services.",
      "Department-led ad-hoc", "Inconsistent."
    )),
    q("Loans", "Manual verification during suspected takeovers?", buildChoices(
      "Dual review + secure storage of evidence", "Audit trail maintained.",
      "Verbal approvals only", "Weak evidence.",
      "Skip checks to move faster", "Error/fraud risk.",
      "Email PII", "Privacy risk."
    )),
    q("Accounting", "Reconciliation focus during fraud attempts?", buildChoices(
      "Cash + customer balances + exception queues", "Material exposure.",
      "Cosmetic reports", "Misses real risk.",
      "Defer until next close", "Errors compound.",
      "Manual overrides w/o logs", "No audit trail."
    )),
    q("Deposits", "Customer communications cadence?", buildChoices(
      "Regular factual updates + guidance", "Trust and clarity.",
      "Only when fixed", "Insufficient transparency.",
      "Continuous unvetted updates", "Noise.",
      "Internal-only updates", "Customers uninformed."
    ))
  ]
};

/* ------------------------- SCENARIO 4 ------------------------- */
const SCENARIO_REG_EXAM = {
  key: "regulatory-exam-findings",
  title: "Regulatory Exam Findings Requiring Rapid Remediation",
  description:
    "Supervisory findings require timely remediation across operations, technology, and reporting. Governance and communication must be coordinated.",
  questions: [
    q("CEO/SVPs", "Leadership stance on remediation?", buildChoices(
      "Transparent plan with milestones and cadence", "Trust with accountability.",
      "Minimal holding statement", "Limited clarity.",
      "Downplay findings publicly", "Credibility risk.",
      "Silence", "Speculation increases."
    )),
    q("IT/Security", "Validation of remediation changes?", buildChoices(
      "Canary deployments + rollback plan", "Controlled outcomes.",
      "All changes at once", "Unverified risk.",
      "Disable logging", "Evidence lost.",
      "Bypass change controls", "Governance failure."
    )),
    q("HR", "Staff training approach?", buildChoices(
      "Targeted training + tracking", "Consistency and evidence.",
      "Optional guidance", "Inconsistent uptake.",
      "No training", "Process breaks recur.",
      "Unvetted materials", "Quality risk."
    )),
    q("Finance", "Budgeting for remediation work?", buildChoices(
      "Approve critical spend with tracking", "Controls preserved.",
      "Spend first; reconcile later", "Weak controls.",
      "Freeze all spend", "Blocks remediation.",
      "Ad-hoc per team", "Inconsistent prioritization."
    )),
    q("Accounting", "Reporting integrity during remediation?", buildChoices(
      "Enhanced reconciliations for impacted areas", "Accuracy and control.",
      "Skip reconciliations", "Misstatements risk.",
      "Delay reporting indefinitely", "Uncertainty.",
      "Manual overrides without logs", "No audit trail."
    )),
    q("Deposits", "Customer-facing updates if service changes?", buildChoices(
      "Regular factual updates with impact", "Trust maintained.",
      "No updates", "Confusion and complaints.",
      "Unvetted frequent updates", "Noise.",
      "Internal-only updates", "Customers uninformed."
    ))
  ]
};

/* ------------------------- SCENARIO 5 ------------------------- */
const SCENARIO_WEATHER = {
  key: "severe-weather-disruption",
  title: "Severe Weather Disrupts Branch Operations",
  description:
    "Extreme weather disrupts branch access and power. Continuity plans, customer communications, and staffing adjustments are required.",
  questions: [
    q("CEO/SVPs", "Public communication on branch availability?", buildChoices(
      "Status page with schedules and cadence", "Reduces speculation; guides customers.",
      "Minimal holding statement only", "Limited clarity.",
      "Let rumors spread", "Trust erodes.",
      "Silence until restoration", "Complaints spike."
    )),
    q("IT/Security", "Support for remote operations?", buildChoices(
      "VPN/MFA capacity + health checks", "Secure continuity.",
      "Disable controls to ease access", "Security risk.",
      "Manual credentials sharing", "Breaks duties.",
      "No remote support", "Productivity loss."
    )),
    q("HR", "Staff safety policy?", buildChoices(
      "Follow safety playbook + flexible schedules", "Protects staff; maintains service.",
      "Require office work regardless", "Safety concerns.",
      "No guidance", "Confusion; risk.",
      "Untracked ad-hoc decisions", "Inconsistency."
    )),
    q("Finance", "Vendor priority during outages?", buildChoices(
      "Power/infra/security vendors first", "Keeps operations viable.",
      "Lowest invoices first", "Misaligned.",
      "Freeze all payments", "Breaks services.",
      "Dept decides independently", "Fragmented."
    )),
    q("Accounting", "Handling cash variances and delayed postings?", buildChoices(
      "Targeted reconciliations + evidence logs", "Accuracy preserved.",
      "Skip reconciliations", "Misstatements risk.",
      "Manual overrides without logs", "No audit trail.",
      "Delay closes indefinitely", "Backlog grows."
    )),
    q("Deposits", "Customer access strategy?", buildChoices(
      "Open branches where safe; ATM limits + status", "Balances service and safety.",
      "ATM-only with no comms", "Partial access; confusion.",
      "Close all channels", "Triggers panic.",
      "No updates", "Distrust rises."
    ))
  ]
};

const SCENARIOS = [
  SCENARIO_RANSOMWARE,
  SCENARIO_LIQUIDITY,
  SCENARIO_FRAUD,
  SCENARIO_REG_EXAM,
  SCENARIO_WEATHER
];

export function getScenarios() {
  return SCENARIOS;
}

export function getScenarioByKey(key) {
  if (!key) return null;
  const k = String(key).toLowerCase().trim();
  return SCENARIOS.find(s => s.key.toLowerCase() === k) || null;
}

export function getRandomScenario() {
  const i = Math.floor(Math.random() * SCENARIOS.length);
  return SCENARIOS[i];
}

export function getSpecialScenarios() {
  return [];
}

export default getRandomScenario;
