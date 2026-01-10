// api/static-scenarios.js
// 5 static tabletop scenarios.
// Each scenario: 21 questions (3 per department).
// Scoring per choice: correct = 10, partial = 5, wrong = -5, wrong = -5

function buildChoices(
  aText, aReason, aScore,
  bText, bReason, bScore,
  cText, cReason, cScore,
  dText, dReason, dScore
) {
  return [
    { text: aText, score: aScore, reason: aReason },
    { text: bText, score: bScore, reason: bReason },
    { text: cText, score: cScore, reason: cReason },
    { text: dText, score: dScore, reason: dReason },
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
    // CEO/SVPs (3)
    q("CEO/SVPs", "What is leadership’s first move in the first 30 minutes?", buildChoices(
      "Activate Incident Command and name a single spokesperson", "Fast alignment, clear ownership, consistent messaging.", 10,
      "Hold an internal exec huddle before activating command", "Coordination helps, but delays response structure.", 5,
      "Stay silent until IT confirms full scope", "Creates a vacuum; rumors and confusion grow.", -5,
      "Let a vendor or third party lead communications", "Loss of control and inconsistent public info.", -5
    )),
    q("CEO/SVPs", "How should leadership decide about ransom payment if restoration is slow?", buildChoices(
      "Do not pay; prioritize restore, legal, regulators, and law enforcement", "Most defensible; avoids funding criminals; focuses on recovery.", 10,
      "Evaluate as a last resort with counsel and regulators involved", "Keeps options open, but still risky and must be tightly governed.", 5,
      "Pay immediately to restore quickly", "No guarantee of recovery; invites repeat targeting.", -5,
      "Ignore the issue and hope it resolves", "Worsens operational/reputational damage.", -5
    )),
    q("CEO/SVPs", "What should leadership communicate to customers today?", buildChoices(
      "Acknowledge service impact, what’s known, and provide update cadence", "Builds trust and reduces call volume/speculation.", 10,
      "Issue a brief holding statement with a promise of updates", "Better than silence, but less helpful without cadence/detail.", 5,
      "Publicly blame a specific vendor", "Legal and reputational risk; often premature.", -5,
      "Say “everything is normal” to avoid panic", "If inaccurate, credibility collapses.", -5
    )),

    // IT/Security (3)
    q("IT/Security", "What is the first containment action?", buildChoices(
      "Isolate impacted hosts and stop lateral movement pathways", "Limits spread and preserves evidence.", 10,
      "Increase monitoring while preparing isolation steps", "Helpful, but containment should not wait too long.", 5,
      "Disable logging to reduce load", "Destroys forensic trail and weakens response.", -5,
      "Reboot everything to 'clear it'", "Can worsen encryption/data loss and destroys evidence.", -5
    )),
    q("IT/Security", "How do you handle backups and restoration?", buildChoices(
      "Validate backups are clean; restore in phases with canary systems", "Prevents reinfection and reduces recovery risk.", 10,
      "Restore quickly but validate the most critical backups first", "Faster, but still risks partial reinfection if rushed.", 5,
      "Restore everything at once with no validation", "High reinfection/instability risk.", -5,
      "Ignore backups and rebuild later", "Unnecessary downtime and business impact.", -5
    )),
    q("IT/Security", "How should customer-facing systems return to service?", buildChoices(
      "Staged restore with integrity checks and rollback plan", "Controlled recovery and safer customer impact.", 10,
      "Bring online critical channels first while monitoring closely", "Reasonable if risk-managed, but still can be unstable.", 5,
      "Bypass change controls to patch quickly", "Introduces new vulnerabilities and audit issues.", -5,
      "Share admin credentials widely to speed work", "Security breakdown and major audit failure.", -5
    )),

    // HR (3)
    q("HR", "What guidance should HR send employees today?", buildChoices(
      "Official internal update, phishing reminder, and how to report issues", "Reduces mistakes and improves incident reporting.", 10,
      "Send a short message telling staff to be cautious and await updates", "Some value, but lacks actionable reporting steps.", 5,
      "Allow personal email/file sharing to keep work moving", "Creates data leakage/compliance risk.", -5,
      "No guidance until it’s fixed", "Rumors/anxiety increase and errors rise.", -5
    )),
    q("HR", "What staffing posture is appropriate during incident response?", buildChoices(
      "Documented coverage plan with shifts and breaks", "Reduces burnout and errors; supports continuity.", 10,
      "Ask managers to cover as needed but track overtime centrally", "Works short-term, but may be uneven without structure.", 5,
      "Unlimited overtime without tracking", "Fatigue and HR liability risk.", -5,
      "No overtime allowed", "Slows response and prolongs outage.", -5
    )),
    q("HR", "Remote-work policy if office systems are degraded?", buildChoices(
      "Allow remote work using VPN/MFA and approved tools only", "Maintains productivity while controlling risk.", 10,
      "Allow remote work but restrict high-risk activities", "Better than open access, but still needs strong controls.", 5,
      "Disable MFA so remote access is easier", "Raises compromise risk during an incident.", -5,
      "Stop all work entirely", "Unnecessary disruption and customer impact.", -5
    )),

    // Finance (3)
    q("Finance", "What’s the first finance control during disruption?", buildChoices(
      "Create an incident cost center and approve critical spend", "Maintains visibility and audit trail.", 10,
      "Track only major vendor invoices and estimate the rest", "Some visibility, but can miss key categories.", 5,
      "Spend now; reconcile later without approvals", "Weak controls and audit risk.", -5,
      "Ignore costs until month-end", "No visibility and governance issues.", -5
    )),
    q("Finance", "How should liquidity be monitored during service disruption?", buildChoices(
      "Increase liquidity monitoring cadence and contingency planning", "Reduces risk of cash stress and surprises.", 10,
      "Keep normal monitoring but add a daily exec check-in", "Some improvement but may miss rapid shifts.", 5,
      "Assume deposits won’t move", "Dangerous assumption during instability.", -5,
      "Stop monitoring because systems are down", "Governance failure.", -5
    )),
    q("Finance", "How do you manage critical vendor payments (security/infra)?", buildChoices(
      "Prioritize continuity-critical vendors per plan", "Keeps recovery moving and defensible.", 10,
      "Pay critical vendors case-by-case with executive approval", "Works, but slower and inconsistent.", 5,
      "Pay smallest invoices first", "Not aligned to operational priority.", -5,
      "Stop paying until incident ends", "Risks service disruption and penalties.", -5
    )),

    // Loans (3)
    q("Loans", "How should loan operations continue if the core is degraded?", buildChoices(
      "Use the manual playbook and prioritize time-sensitive items", "Maintains service with controls.", 10,
      "Pause new activity but continue existing commitments manually", "Reduces risk but still protects key customers.", 5,
      "Proceed without documentation to move faster", "Compliance and fraud risk.", -5,
      "Cancel in-flight loans broadly", "Reputation and customer harm.", -5
    )),
    q("Loans", "What controls apply to manual underwriting/processing?", buildChoices(
      "Dual review, checklist, and secure document storage", "Preserves audit trail and accuracy.", 10,
      "Manager review only with checklist", "Better than none, but weaker segregation.", 5,
      "Verbal approvals only", "Weak evidence; audit findings likely.", -5,
      "Email PII freely between staff", "Privacy/compliance breach risk.", -5
    )),
    q("Loans", "How should borrower communications be handled?", buildChoices(
      "Standard scripts with factual updates and escalation path", "Consistent, defensible, reduces complaints.", 10,
      "Let lenders communicate with a general guideline", "Some consistency, but still varies and increases risk.", 5,
      "No communication until restoration", "Confusion and complaint volume grow.", -5,
      "Promise timelines you can’t confirm", "Credibility and legal risk.", -5
    )),

    // Accounting (3)
    q("Accounting", "How should accounting handle posting delays/partial data?", buildChoices(
      "Provisional close with enhanced reconciliations and documentation", "Transparent and controlled.", 10,
      "Delay close briefly while reconciling only material accounts", "Reasonable if time-boxed and documented.", 5,
      "Skip reconciliations due to time pressure", "Misstatements likely.", -5,
      "Adjust entries to 'smooth' the impact", "Fraud/misrepresentation risk.", -5
    )),
    q("Accounting", "Which reconciliations are top priority during the incident?", buildChoices(
      "Cash, customer balances, and inter-system breaks", "Covers highest material risk.", 10,
      "Cash only, then others later", "Partial coverage; may miss systemic breaks.", 5,
      "Cosmetic reports first", "Misses actual risk areas.", -5,
      "Manual overrides with no logs", "No audit trail and high risk.", -5
    )),
    q("Accounting", "How do you preserve audit trail during manual workarounds?", buildChoices(
      "Central log of approvals/changes with evidence retention", "Defensible record for audit/regulators.", 10,
      "Use email threads but require manager approval on each", "Some evidence, but messy and hard to audit.", 5,
      "Disable logging to move faster", "Destroys evidence.", -5,
      "Share credentials for speed", "Breaks segregation of duties.", -5
    )),

    // Deposits (3)
    q("Deposits", "How do you preserve customer access during online banking disruption?", buildChoices(
      "Branch/ATM continuity plan + scripts + status updates", "Maintains access and reduces panic.", 10,
      "ATM-first approach with limited branch support", "Some access, but increases branch pressure.", 5,
      "Shut all access channels", "Triggers panic and complaints.", -5,
      "No updates to customers", "Call volume and distrust spike.", -5
    )),
    q("Deposits", "What withdrawal strategy fits during the incident?", buildChoices(
      "Temporary limits with clear explanation and escalation path", "Balances liquidity and fairness.", 10,
      "Limit only very large withdrawals", "Helps, but can be inconsistent without clear policy.", 5,
      "Unlimited withdrawals for everyone", "Liquidity/cash risk.", -5,
      "Different rules per branch", "Inconsistent and causes escalations.", -5
    )),
    q("Deposits", "How often should the public status page be updated?", buildChoices(
      "Regular cadence with factual progress", "Builds trust; reduces speculation.", 10,
      "Update only when major milestones occur", "Better than silence, but still less predictable.", 5,
      "Constant unvetted updates", "Noise, confusion, mistakes.", -5,
      "Internal-only updates", "Customers remain uninformed.", -5
    )),
  ]
};

/* ------------------------- SCENARIO 7 ------------------------- */
const SCENARIO_VENDOR_OUTAGE = {
  key: "third-party-core-vendor-outage",
  title: "Third-Party Core Vendor Outage",
  description:
    "A nationwide outage at your core processing vendor occurs during business hours. Transactions post late, branches cannot open accounts, and ACH/wires are delayed. Vendor ETAs are vague. Strong customer communications, regulatory thresholds, manual controls, and vendor escalation are required.",
  questions: [
    // CEO/SVPs (3)
    q("CEO/SVPs", "What posture should leadership set in the first hour?", buildChoices(
      "Activate incident command, escalate vendor at exec level, and assign a single spokesperson", "Aligns decisions, speeds vendor response, and keeps messaging consistent.", 10,
      "Wait for vendor’s next ETA before organizing internally", "Delays coordination and confuses staff.", 5,
      "Let vendor lead your response entirely", "Loss of control and accountability.", -5,
      "Publish a public blame statement immediately", "Premature and risky; worsens vendor cooperation.", -5
    )),
    q("CEO/SVPs", "What should customer-facing communications emphasize today?", buildChoices(
      "Transparent status (what’s impacted), workarounds, and predictable update cadence", "Builds trust and reduces call volume.", 10,
      "Promise specific restoration times from the vendor", "Overpromising risks credibility if missed.", 5,
      "Minimize the issue as \"minor\" without details", "Looks evasive and increases confusion.", -5,
      "Share detailed vendor contracts publicly", "Not appropriate; legal and reputational risks.", -5
    )),
    q("CEO/SVPs", "How do you approach regulatory notification thresholds?", buildChoices(
      "Assess materiality (channels, duration, customers) and consult counsel to trigger thresholds", "Defensible governance; avoids late or unnecessary filings.", 10,
      "Notify all regulators immediately for any outage", "May be premature and create noise.", 5,
      "Ignore thresholds until customers complain widely", "Reactive and risky.", -5,
      "Let vendor notify regulators on your behalf", "You own the relationship and obligations.", -5
    )),

    // IT/Security (3)
    q("IT/Security", "What is the first technical continuity action?", buildChoices(
      "Enable read-only/limited modes, confirm failovers, and post status banners", "Preserves access where possible and sets expectations.", 10,
      "Turn off all digital channels to reduce pressure", "Harms access unnecessarily.", 5,
      "Disable logging to reduce system load", "Destroys evidence and observability.", -5,
      "Share admin credentials for faster triage", "Major control failure.", -5
    )),
    q("IT/Security", "How should you work with the vendor’s technical teams?", buildChoices(
      "Establish real-time comms bridge, request telemetry, and align on rollback/restore steps", "Improves coordination and reduces surprises.", 10,
      "Send occasional emails and wait for updates", "Too slow for an active incident.", 5,
      "Publish vendor IOCs/details broadly to all staff", "Unnecessary exposure and confusion.", -5,
      "Route all tech inquiries through branches", "Inefficient and noisy.", -5
    )),
    q("IT/Security", "How do you protect data integrity during backlog posting?", buildChoices(
      "Stage recovery with canary validation and reconciliations before full catch-up", "Reduces error and duplicate posting risk.", 10,
      "Post everything at once and fix later", "High risk of breaks and customer impact.", 5,
      "Let branches manually enter transactions to help", "Inconsistent and risky; audit issues.", -5,
      "Silence alerts during backlog so dashboards look green", "Masks risk and delays detection.", -5
    )),

    // HR (3)
    q("HR", "How do you support front-line staffing during the outage?", buildChoices(
      "Surge staffing/rotation, de-escalation scripts, and scheduled breaks", "Improves safety and service quality.", 10,
      "Keep normal staffing and hope traffic subsides", "Burnout and longer lines.", 5,
      "Forbid breaks during the outage", "Unsafe and counterproductive.", -5,
      "Send staff home to reduce friction", "Service failure and longer recovery.", -5
    )),
    q("HR", "What internal guidance should staff receive about discussing the vendor?", buildChoices(
      "Use approved scripts; avoid speculation; refer questions to official status updates", "Consistent, defensible comms.", 10,
      "Allow staff to explain technical details if they think they know", "Inconsistent and risky.", 5,
      "Encourage venting about the vendor online", "Reputational risk.", -5,
      "Disallow any conversation with customers", "Unrealistic and harmful to service.", -5
    )),
    q("HR", "What work posture helps back-office operations?", buildChoices(
      "Enable approved remote work for backlog processing with access controls", "Preserves productivity with security.", 10,
      "Allow personal tools to speed work until normal", "Policy and data risk.", 5,
      "Require in-office only regardless of conditions", "May slow response and morale.", -5,
      "No guidance; let teams decide ad-hoc", "Inconsistent outcomes.", -5
    )),

    // Finance (3)
    q("Finance", "What should Finance monitor first?", buildChoices(
      "Liquidity, settlement exposure, and cash logistics with increased cadence", "Avoids surprises and supports decisions.", 10,
      "Maintain normal reporting cadence only", "Too slow for an outage.", 5,
      "Stop cash orders to save costs", "Harms service and access.", -5,
      "Ignore exposure until restoration", "Governance failure.", -5
    )),
    q("Finance", "How do you handle incident spend and credits?", buildChoices(
      "Create incident cost center; track vendor credits/SLA claims with documentation", "Audit-ready and recovers value.", 10,
      "Track major invoices only; revisit credits later", "Partial and risks missed recoveries.", 5,
      "Pause all vendor payments universally", "May disrupt critical services.", -5,
      "Hide costs across misc categories", "Reporting integrity risk.", -5
    )),
    q("Finance", "What is the payment prioritization during the outage?", buildChoices(
      "Critical ops, communications, and logistics supporting continuity first", "Aligns spend to stability.", 10,
      "FIFO by invoice date", "Ignores operational criticality.", 5,
      "Pay smallest invoices first", "Not aligned to impact.", -5,
      "Stop all payments until issue resolves", "Service disruption risk.", -5
    )),

    // Loans (3)
    q("Loans", "How do you handle time-sensitive loan disbursements if core is degraded?", buildChoices(
      "Use manual playbook with dual control and evidence until systems return", "Balances service and control.", 10,
      "Pause all disbursements broadly", "Customer harm and reputational impact.", 5,
      "Proceed via email-only approvals", "Weak evidence and fraud risk.", -5,
      "Let lenders bypass controls case-by-case", "Compliance failure.", -5
    )),
    q("Loans", "How should rate-lock/closing timelines be managed?", buildChoices(
      "Proactively communicate impacts with alternatives and document exceptions", "Reduces complaints and preserves trust.", 10,
      "Promise on-time closings regardless", "Sets unrealistic expectations.", 5,
      "Avoid discussing delays to reduce panic", "Backfires when delays occur.", -5,
      "Ask borrowers to sign blank forms to finish later", "High compliance risk.", -5
    )),
    q("Loans", "What control applies to document handling during manual work?", buildChoices(
      "Secure storage, role-based access, and exception logging", "Preserves privacy and audit trail.", 10,
      "Allow personal email for speed", "Privacy and policy breach.", 5,
      "Share credentials to keep work moving", "Segregation failure.", -5,
      "Disable logging temporarily", "Evidence loss.", -5
    )),

    // Accounting (3)
    q("Accounting", "How should posting delays be reflected in reporting?", buildChoices(
      "Provisional reporting with enhanced reconciliations and documentation", "Transparent and controlled.", 10,
      "Report estimates without notes to avoid questions", "Misleading to stakeholders.", 5,
      "Skip reconciliations until month-end", "Breaks and misstatements likely.", -5,
      "Smooth entries to hide outage impact", "Ethics and audit risk.", -5
    )),
    q("Accounting", "What reconciliations are top priority after restoration?", buildChoices(
      "Cash, suspense accounts, and inter-system breaks from backlog posting", "Targets material risk first.", 10,
      "Cash only; do others later", "Partial coverage.", 5,
      "None; assume vendor caught everything", "Risk of undetected breaks.", -5,
      "Manual overrides with no logs", "Audit trail failure.", -5
    )),
    q("Accounting", "How do you preserve evidence during manual processing?", buildChoices(
      "Central log of approvals/changes with links to artifacts", "Defensible and consistent.", 10,
      "Email threads collected later", "Messy and incomplete.", 5,
      "Verbal approvals only", "Weak evidence.", -5,
      "Delete drafts and notes to reduce clutter", "Regulatory risk.", -5
    )),

    // Deposits (3)
    q("Deposits", "What should branches tell customers about delayed postings?", buildChoices(
      "Use scripts: what’s impacted, what customers can do, and where to check status", "Consistent and practical guidance.", 10,
      "Say \"everything is fine\" to avoid panic", "Credibility risk when delays are visible.", 5,
      "Blame vendor staff by name", "Unprofessional and risky.", -5,
      "Share internal emails as proof", "Inappropriate and risky.", -5
    )),
    q("Deposits", "How should holds/fees be handled fairly during the outage?", buildChoices(
      "Temporary policy with clear criteria and escalation path", "Balances fairness and control.", 10,
      "Waive everything universally", "Unsustainable and may create abuse.", 5,
      "No waivers under any condition", "Customer harm and complaints.", -5,
      "Different rules per branch", "Inconsistent and risky.", -5
    )),
    q("Deposits", "What update cadence reduces call volume most effectively?", buildChoices(
      "Regular status cadence with factual progress and ETAs when verified", "Predictable and trust-building.", 10,
      "Update only when there’s big news", "Less predictable; more calls.", 5,
      "Constant unvetted updates from multiple staff", "Noise and errors.", -5,
      "Internal-only updates", "Customers remain uninformed.", -5
    )),
  ]
};

/* ------------------------- SCENARIO 8 ------------------------- */
const SCENARIO_INSIDER_FRAUD = {
  key: "insider-fraud-operations",
  title: "Insider Fraud Discovered in Operations",
  description:
    "Internal audit flags suspicious adjustments tied to a single employee with cross-department access. Losses are unknown, potential customer harm exists, and law enforcement may be involved. Immediate access revocation, evidence preservation, HR/legal coordination, and careful disclosure choices are required.",
  questions: [
    // CEO/SVPs (3)
    q("CEO/SVPs", "What is leadership’s first decision when insider fraud is flagged?", buildChoices(
      "Activate incident governance with Legal/HR and define a preservation-first posture", "Ensures coordinated, defensible actions and preserves evidence.", 10,
      "Quietly let audit handle it and wait for a report", "Too slow; evidence and losses can grow.", 5,
      "Suspend all customer communications until month-end", "Delays can harm customers and trust.", -5,
      "Ask the employee to explain publicly before acting", "Prejudicial and risky; can taint evidence.", -5
    )),
    q("CEO/SVPs", "What disclosure approach is appropriate on day one?", buildChoices(
      "Internal need-to-know only with prepared scripts; external comms only if customers are impacted", "Balances transparency and integrity of investigation.", 10,
      "Public press release naming the employee", "Legal/privacy risk.", 5,
      "Tell branches to improvise answers when asked", "Inconsistent and risky.", -5,
      "Share raw audit workpapers widely", "Uncontrolled and risky.", -5
    )),
    q("CEO/SVPs", "How should leadership engage with law enforcement?", buildChoices(
      "Consult counsel, preserve evidence chain, and coordinate if thresholds met", "Defensible coordination without compromising investigation.", 10,
      "Call local police immediately with partial information", "May compromise evidence handling.", 5,
      "Avoid law enforcement entirely", "Misses recovery/deterrence opportunities.", -5,
      "Let the implicated employee choose whether to involve law enforcement", "Conflict and governance failure.", -5
    )),

    // IT/Security (3)
    q("IT/Security", "What immediate access action is required?", buildChoices(
      "Disable implicated accounts, revoke tokens/keys, and review privileged access paths", "Reduces further loss and closes exposure.", 10,
      "Increase monitoring but leave access active to watch behavior", "Leaves risk window open.", 5,
      "Share admin credentials so teams can move faster", "Segregation failure.", -5,
      "Disable logging to reduce noise", "Destroys forensics.", -5
    )),
    q("IT/Security", "How do you preserve technical evidence?", buildChoices(
      "Snapshot systems, collect relevant logs, and store with chain-of-custody", "Supports legal and recovery steps.", 10,
      "Save screenshots to a shared drive", "Partial but weak forensics.", 5,
      "Delete unneeded logs to save space", "Loss of evidence.", -5,
      "Let staff export data locally for convenience", "Privacy/integrity risk.", -5
    )),
    q("IT/Security", "What controls reduce spread if the employee had cross-department access?", buildChoices(
      "Immediate access review across integrated apps; rotate secrets; validate vendor integrations", "Closes lateral paths quickly.", 10,
      "Focus only on the primary app they used", "Misses other access vectors.", 5,
      "Trust vendor logs to catch everything later", "Over-reliance; delays containment.", -5,
      "Turn off monitoring tools so systems run faster", "Removes visibility.", -5
    )),

    // HR (3)
    q("HR", "What HR step should happen first with the implicated employee?", buildChoices(
      "Admin leave pending investigation; collect assets with Legal/IT present", "Reduces interference and preserves evidence.", 10,
      "Immediate termination without documentation", "May complicate investigation and recovery.", 5,
      "Public shaming to make an example", "Culture and legal risk.", -5,
      "Do nothing until audit proves loss amount", "Delays containment and safety.", -5
    )),
    q("HR", "What guidance goes to staff?", buildChoices(
      "Report concerns via official channel; do not speculate; preserve evidence", "Encourages reporting and consistency.", 10,
      "Encourage discussion in group chats to surface leads", "Uncontrolled and risky.", 5,
      "Threaten discipline for any mention of the case", "Chills reporting.", -5,
      "Share the employee name and rumors for transparency", "Privacy and legal risk.", -5
    )),
    q("HR", "How do you manage safety and coverage?", buildChoices(
      "Coordinate schedules and backups; offer remote options if needed", "Reduces burnout and maintains service.", 10,
      "Keep all normal schedules regardless of incident", "May slow response.", 5,
      "Suspend all operations for the week", "Overreaction and customer harm.", -5,
      "Let teams self-organize with no oversight", "Inconsistent and risky.", -5
    )),

    // Finance (3)
    q("Finance", "How should potential losses be tracked?", buildChoices(
      "Create incident cost center and exposure ledger with approvals", "Accurate and audit-ready.", 10,
      "Estimate later once law enforcement is engaged", "Late and inaccurate.", 5,
      "Record losses in misc expense categories", "Lack of transparency.", -5,
      "Avoid tracking until customers complain", "Reactive and risky.", -5
    )),
    q("Finance", "What spend gets priority during investigation?", buildChoices(
      "Forensics, monitoring, and recovery work aligned to response", "Reduces future loss and speeds clarity.", 10,
      "Freeze all spend to avoid criticism", "Slows investigation and recovery.", 5,
      "Cut security tooling to save money", "Increases risk.", -5,
      "Pay without approvals to be fast", "Control failure.", -5
    )),
    q("Finance", "How do you approach potential restitution or credits?", buildChoices(
      "Document criteria for customer remediation with Legal; track cases centrally", "Fair and defensible.", 10,
      "Handle refunds ad-hoc at branch discretion", "Inconsistent and risky.", 5,
      "Deny all claims until final report", "Trust and reputation risk.", -5,
      "Refund everyone universally immediately", "Encourages abuse and misstatements.", -5
    )),

    // Loans (3)
    q("Loans", "What should Loans do if loan files were accessed?", buildChoices(
      "Restrict access, validate integrity, and log exceptions with dual review", "Protects privacy and audit trail.", 10,
      "Continue normal processing until issues arise", "Reactive and risky.", 5,
      "Allow personal email for backup copies", "Privacy/policy breach.", -5,
      "Share credentials to speed verification", "Segregation failure.", -5
    )),
    q("Loans", "How do you verify changes to borrower payout instructions?", buildChoices(
      "Out-of-band verification using known contacts with evidence", "Prevents misdirection fraud.", 10,
      "Callback to number provided in a recent email", "Weak control; can be attacker-controlled.", 5,
      "Accept emailed instructions from familiar addresses", "Spoofing risk.", -5,
      "Skip checks to move faster", "Loss risk.", -5
    )),
    q("Loans", "What messaging is appropriate to impacted borrowers?", buildChoices(
      "Standard scripts with factual updates and escalation path", "Consistent and defensible.", 10,
      "Let lenders craft custom narratives per case", "Inconsistent and risky.", 5,
      "Promise accelerated approvals as compensation", "Credibility risk.", -5,
      "Avoid communication to reduce noise", "Confusion and churn.", -5
    )),

    // Accounting (3)
    q("Accounting", "How do you handle suspicious adjustments in the GL?", buildChoices(
      "Identify impacted accounts, reverse/segregate entries, and document approvals", "Transparent and auditable.", 10,
      "Net changes to simplify presentation", "Misstatement risk.", 5,
      "Delay entries until the investigation ends", "Late/inaccurate reporting.", -5,
      "Permit manual overrides with no logs", "Audit trail failure.", -5
    )),
    q("Accounting", "Which reconciliations come first after fraud is suspected?", buildChoices(
      "Cash, suspense, and inter-system tie-outs where adjustments occurred", "Targets highest material risk.", 10,
      "Cash only; revisit others next month", "Partial visibility.", 5,
      "Skip reconciliations to avoid attention", "Findings likely.", -5,
      "Adjust entries to match expectations", "Manipulation risk.", -5
    )),
    q("Accounting", "How do you preserve evidence for examiners?", buildChoices(
      "Central evidence index with approvals, timestamps, and artifact links", "Defensible for audit/regulators.", 10,
      "Email threads archived loosely", "Messy and incomplete.", 5,
      "Verbal approvals only", "Weak evidence.", -5,
      "Delete drafts later to reduce storage", "Regulatory risk.", -5
    )),

    // Deposits (3)
    q("Deposits", "How should suspicious customer-impacting activity be handled?", buildChoices(
      "Place holds per policy, escalate cases, and document thoroughly", "Balances protection and fairness.", 10,
      "Allow all activity to avoid complaints", "Loss and compliance risk.", 5,
      "Let branches decide ad-hoc without scripts", "Inconsistent and risky.", -5,
      "Disclose employee identity to explain delays", "Privacy/legal risk.", -5
    )),
    q("Deposits", "What should frontline scripts emphasize?", buildChoices(
      "Verification steps, factual updates, and where customers can get help", "Reduces confusion and escalations.", 10,
      "Tell customers everything is fine without details", "Credibility risk.", 5,
      "Share internal investigation notes if asked", "Inappropriate and risky.", -5,
      "Encourage customers to post online for updates", "Uncontrolled messaging.", -5
    )),
    q("Deposits", "How often should external status be updated if customers are affected?", buildChoices(
      "Regular cadence with confirmed facts and next steps", "Predictable and trust-building.", 10,
      "Only if there is breaking news", "Unpredictable; more calls.", 5,
      "Constant updates with speculation to show action", "Noise and mistakes.", -5,
      "Internal-only updates", "Customers remain uninformed.", -5
    )),
  ]
};

/* ------------------------- SCENARIO 9 ------------------------- */
const SCENARIO_ACH_FAILURE = {
  key: "failed-ach-file-fed",
  title: "Failed ACH File Sent to Federal Reserve",
  description:
    "An incorrect ACH file is transmitted, impacting hundreds of customers. Funds may have posted incorrectly; reversals are time-sensitive; trust is at risk; and regulatory notifications may be required. Rapid error correction, customer remediation, accounting reconciliation, and root cause analysis are essential.",
  questions: [
    // CEO/SVPs (3)
    q("CEO/SVPs", "What is leadership’s immediate posture in the first hour?", buildChoices(
      "Activate incident governance with Payments Ops lead, Legal/Compliance, and Comms", "Aligns decisions, ensures regulatory and customer actions proceed in sync.", 10,
      "Let Operations fix it quietly; avoid formal activation to reduce attention", "Slows cross-functional coordination and increases risk.", 5,
      "Publicly blame a vendor before confirming details", "Premature and risky.", -5,
      "Wait for customers to complain before acting", "Reactive and harmful to trust.", -5
    )),
    q("CEO/SVPs", "What should initial customer messaging emphasize?", buildChoices(
      "What happened in plain language, what’s impacted, expected timing, and where to get updates", "Builds trust and reduces volume.", 10,
      "Promise exact reversal times before confirming with the Fed and counterparties", "Overpromising risks credibility.", 5,
      "Say \"all accounts are safe\" with no specifics", "Looks evasive and frustrates customers.", -5,
      "Share individual account details publicly to demonstrate transparency", "Privacy and legal risk.", -5
    )),
    q("CEO/SVPs", "How do you handle regulatory notification thresholds?", buildChoices(
      "Assess materiality and customer impact with Compliance and counsel; notify per thresholds", "Defensible and timely.", 10,
      "Notify everyone immediately regardless of criteria", "Can be premature and create noise.", 5,
      "Rely on the Fed to notify regulators on your behalf", "You own the obligation.", -5,
      "Ignore thresholds until the next exam", "Governance failure.", -5
    )),

    // IT/Security (3)
    q("IT/Security", "What technical step protects integrity during correction?", buildChoices(
      "Freeze additional outbound ACH batches; preserve logs; enable enhanced monitoring", "Prevents compounding errors and preserves evidence.", 10,
      "Purge logs to improve performance while reconciling", "Destroys forensics.", 5,
      "Share admin credentials to accelerate access for all teams", "Segregation failure.", -5,
      "Disable monitoring alerts to reduce noise", "Removes visibility during a critical period.", -5
    )),
    q("IT/Security", "How should files and interfaces be handled with the Fed and processors?", buildChoices(
      "Open a real-time bridge with counterparties; validate file hashes/IDs; align on reversal windows", "Reduces rework and timing risk.", 10,
      "Email updates periodically and wait for responses", "Too slow for a time-bound correction.", 5,
      "Resend corrected files without coordination", "Duplicate/contradictory postings risk.", -5,
      "Allow branches to upload corrected files directly", "Uncontrolled and risky.", -5
    )),
    q("IT/Security", "How do you prevent repeat errors while investigating?", buildChoices(
      "Implement a temporary two-person review for export jobs and parameter changes", "Adds control while root cause is determined.", 10,
      "Trust the scheduled jobs and focus only on the bad file", "Misses systemic issues.", 5,
      "Disable change management to move faster", "Introduces new errors.", -5,
      "Turn off file validations so jobs don’t fail", "Removes safeguards.", -5
    )),

    // HR (3)
    q("HR", "What guidance supports staff dealing with upset customers?", buildChoices(
      "Scripts, de-escalation tips, and break scheduling; route complex cases to specialists", "Improves safety and consistency.", 10,
      "Let each branch decide how to explain the issue", "Inconsistent and risky.", 5,
      "Disallow any discussion; refer customers to the Fed", "Unhelpful and inaccurate.", -5,
      "Encourage staff to post explanations on social media", "Reputational risk.", -5
    )),
    q("HR", "What staffing posture fits a time-sensitive correction window?", buildChoices(
      "Documented shifts with surge coverage for Payments Ops and Contact Center", "Sustains performance without burnout.", 10,
      "Ask for volunteers to stay late with no plan", "Uneven and unreliable.", 5,
      "Mandatory overtime for all departments", "Burnout and errors.", -5,
      "No overtime regardless of volume", "Backlog grows and trust erodes.", -5
    )),
    q("HR", "What is the appropriate approach with implicated individuals (if any)?", buildChoices(
      "Admin leave pending investigation; asset return and access revocation with IT", "Protects integrity and safety.", 10,
      "Public reprimand while they continue working", "Culture and legal risk.", 5,
      "Ignore until root cause is final", "Leaves risk window open.", -5,
      "Share their name in staff channels for transparency", "Privacy/legal risk.", -5
    )),

    // Finance (3)
    q("Finance", "What must Finance track from the outset?", buildChoices(
      "Customer exposure, provisional entries, fees/credits, and incident costs", "Accurate governance and recovery.", 10,
      "Only vendor invoices; reconcile later", "Partial view; misses true impact.", 5,
      "Do not track to avoid panic", "Non-compliant and risky.", -5,
      "Hide costs in miscellaneous accounts", "Integrity risk.", -5
    )),
    q("Finance", "How should fee waivers/credits be handled?", buildChoices(
      "Criteria-based policy with approvals and evidence per case", "Fair and defensible.", 10,
      "Grant everything universally", "Unsustainable and invites abuse.", 5,
      "Deny all credits to protect revenue", "Trust and complaint risk.", -5,
      "Leave to branch discretion with no logs", "Inconsistent and risky.", -5
    )),
    q("Finance", "What payment/vendor prioritization supports recovery?", buildChoices(
      "Critical ops (processors, comms tools, logistics) first with approvals", "Aligns spend to incident needs.", 10,
      "FIFO only", "Ignores impact.", 5,
      "Pay smallest invoices first", "Not aligned to criticality.", -5,
      "Stop all payments until resolved", "Service disruption risk.", -5
    )),

    // Loans (3)
    q("Loans", "How should automatic loan ACH debits be handled today?", buildChoices(
      "Pause new pulls where appropriate; verify previous postings and communicate proactively", "Prevents compounding errors and complaints.", 10,
      "Continue as normal; fix later if needed", "Creates more reversals and confusion.", 5,
      "Accept borrower emails as proof to skip pulls permanently", "Control weakness and risk.", -5,
      "Bypass controls for VIPs", "Inconsistent and risky.", -5
    )),
    q("Loans", "What verification applies to borrower account change requests during this event?", buildChoices(
      "Out-of-band verification using known contacts and document evidence", "Prevents misdirection or fraud.", 10,
      "Callback to the number provided in the request email", "Weak control.", 5,
      "Accept emailed instructions from familiar addresses", "Spoof risk.", -5,
      "Skip checks to reduce backlog", "Loss risk.", -5
    )),
    q("Loans", "What should lenders communicate to borrowers impacted by mis-posted ACH?", buildChoices(
      "Use scripts with factual status, timing expectations, and escalation path", "Consistency reduces complaints.", 10,
      "Promise resolution by end of day for all", "Overpromise risk.", 5,
      "Avoid communicating to reduce noise", "Confusion and churn.", -5,
      "Share internal notes on reversal files", "Inappropriate and risky.", -5
    )),

    // Accounting (3)
    q("Accounting", "How should mis-posted transactions be reflected immediately?", buildChoices(
      "Provisional entries with clear documentation; separate accounts for adjustments", "Transparent and auditable.", 10,
      "Hold all entries until final correction is known", "Late/inaccurate reporting.", 5,
      "Net differences to hide impact", "Misstatement risk.", -5,
      "Allow manual overrides with no logs", "Audit trail failure.", -5
    )),
    q("Accounting", "What reconciliations are top priority after reversal batches?", buildChoices(
      "Cash, suspense, and inter-system tie-outs focusing on ACH settlements", "Targets material risk early.", 10,
      "Cash only; others next week", "Partial visibility.", 5,
      "Skip reconciliations to move faster", "Findings likely.", -5,
      "Adjust balances to match expectations", "Manipulation risk.", -5
    )),
    q("Accounting", "What evidence preservation supports examiners and recovery?", buildChoices(
      "Central evidence index linking files, approvals, timestamps, and counterpart confirmations", "Defensible and efficient.", 10,
      "Email threads only, organized later", "Messy and incomplete.", 5,
      "Verbal approvals", "Weak evidence.", -5,
      "Delete drafts once the panic passes", "Regulatory risk.", -5
    )),

    // Deposits (3)
    q("Deposits", "What should frontline staff tell customers about incorrect postings?", buildChoices(
      "Explain the issue plainly, next steps, and where/when to check status", "Reduces confusion and repeat calls.", 10,
      "Say balances are fine without explanation", "Credibility risk.", 5,
      "Share internal reversal file names for proof", "Inappropriate.", -5,
      "Refer customers to the Fed for help", "Not how it works and frustrates customers.", -5
    )),
    q("Deposits", "How should holds/fees be managed during correction?", buildChoices(
      "Temporary policy with criteria and escalation path; document waivers", "Fair and controlled.", 10,
      "Waive everything for everyone", "Unsustainable and inconsistent.", 5,
      "No waivers under any condition", "Customer harm and complaints.", -5,
      "Different rules per branch", "Inconsistent and risky.", -5
    )),
    q("Deposits", "What update cadence reduces call volume most?", buildChoices(
      "Predictable cadence with confirmed progress and verified timing windows", "Trust-building and practical.", 10,
      "Only post when there is a milestone", "Less predictable; more calls.", 5,
      "Constant unvetted updates by many staff", "Noise and errors.", -5,
      "Internal-only updates", "Customers remain uninformed.", -5
    )),
  ]
};

/* ------------------------- SCENARIO 2 ------------------------- */
const SCENARIO_LIQUIDITY = {
  key: "liquidity-run-rumor",
  title: "Liquidity Pressure From Rumor + Social Media Spike",
  description:
    "A viral rumor claims the bank is unstable. Customers rapidly move funds and request large cash withdrawals. Call volumes spike and branches see longer lines.",
  questions: [
    // CEO/SVPs (3)
    q("CEO/SVPs", "What is the immediate leadership communication strategy?", buildChoices(
      "Issue calm factual statement with update cadence and channels", "Controls narrative and reduces panic.", 10,
      "Release a brief holding statement and schedule a follow-up", "Better than silence, but less effective without cadence detail.", 5,
      "Threaten legal action publicly first", "Often inflames situation and distracts from reassurance.", -5,
      "Say nothing and close comments", "Looks evasive; rumors grow.", -5
    )),
    q("CEO/SVPs", "How should leadership coordinate governance today?", buildChoices(
      "Activate crisis command with cross-functional leads and checkpoints", "Fast alignment and consistent decisions.", 10,
      "Have daily exec updates but let departments run independently", "Some coordination, but decisions can conflict.", 5,
      "Executive-only huddle with no operational leads", "Misses branch/call center realities.", -5,
      "Vendor-led communications", "Loss of control and misaligned priorities.", -5
    )),
    q("CEO/SVPs", "Do you adjust branch cash policy immediately?", buildChoices(
      "Yes—set temporary limits with escalation path and scripts", "Consistency protects liquidity and service.", 10,
      "Adjust only for unusually large withdrawals", "Helps but may still create inconsistency.", 5,
      "Close branches to reduce cash demand", "Worsens panic and rumor.", -5,
      "Let each branch decide", "Inconsistent; escalations rise.", -5
    )),

    // IT/Security (3)
    q("IT/Security", "What’s the IT priority with traffic spikes?", buildChoices(
      "Monitor/scale online banking and prepare DDoS protections", "Prevents outages and protects access.", 10,
      "Increase monitoring and prepare to scale if thresholds hit", "Helpful, but may be late without proactive scaling.", 5,
      "Disable protections to reduce friction", "Creates security exposure during chaos.", -5,
      "Block all logins temporarily", "Amplifies panic and customer impact.", -5
    )),
    q("IT/Security", "How do you monitor for fraud during chaos?", buildChoices(
      "Increase fraud monitoring, rate limits, and alert triage", "Reduces losses and supports response.", 10,
      "Keep current monitoring but add manual review for high-risk activity", "Better, but slower and less scalable.", 5,
      "Turn off alerts to reduce noise", "Creates blind spots for attacks.", -5,
      "Share admin tools widely to speed up work", "Security breakdown.", -5
    )),
    q("IT/Security", "How should you handle customer status comms technically?", buildChoices(
      "Maintain a single status page with verified updates", "Reduces call volume and misinformation.", 10,
      "Post updates on the website homepage only", "Helpful, but less structured than a status page.", 5,
      "No updates until resolved", "Speculation grows.", -5,
      "Allow anyone to post updates", "Misinformation risk.", -5
    )),

    // HR (3)
    q("HR", "How should staffing be handled at branches today?", buildChoices(
      "Surge staffing/rotation and de-escalation guidance", "Safer environment and better service.", 10,
      "Add a few float staff where possible", "Helps, but may not meet peak demand.", 5,
      "Force overtime with no breaks", "Burnout and safety risk.", -5,
      "Send everyone home to reduce conflict", "Service failure fuels rumor.", -5
    )),
    q("HR", "What should HR tell employees about public rumor discussions?", buildChoices(
      "Remind social policy: do not speculate; refer to official comms", "Prevents misinformation and PR risk.", 10,
      "Suggest staff avoid social media during the incident", "Some benefit, but still lacks clear referral guidance.", 5,
      "Allow staff to respond freely online", "High PR risk; inconsistent info.", -5,
      "Punish anyone who mentions it", "Chills reporting and worsens culture.", -5
    )),
    q("HR", "How should HR support customer-facing staff under stress?", buildChoices(
      "Provide scripts, breaks, escalation support, and safety plan", "Reduces incidents and improves consistency.", 10,
      "Offer scripts but leave breaks to managers", "Some value, but uneven execution.", 5,
      "Tell them to 'handle it'", "Unsafe and inconsistent.", -5,
      "No support until next week", "Burnout and mistakes increase.", -5
    )),

    // Finance (3)
    q("Finance", "What’s the first step to stabilize liquidity management?", buildChoices(
      "Increase liquidity reporting cadence and prep contingency funding", "Enables confident, compliant decisions.", 10,
      "Keep normal cadence but add an exec summary", "Some visibility but may be too slow.", 5,
      "Freeze all outgoing payments", "Operational harm and panic risk.", -5,
      "Stop cash ordering to save money", "Worsens shortages and rumor impact.", -5
    )),
    q("Finance", "How do you prioritize payments today?", buildChoices(
      "Critical ops, cash logistics, security/infra vendors first", "Keeps bank functioning and stable.", 10,
      "Pay critical items as they arise with exec approval", "Works but slower and inconsistent.", 5,
      "Pay smallest invoices first", "Not aligned to criticality.", -5,
      "Stop all payments", "Service collapse risk.", -5
    )),
    q("Finance", "How should you track costs from this event?", buildChoices(
      "Incident cost center with approvals and documentation", "Audit-ready and accurate.", 10,
      "Track only vendor costs and estimate internal hours later", "Partial but may miss true impact.", 5,
      "Track later from memory", "Inaccurate.", -5,
      "Hide costs across misc categories", "Reporting integrity risk.", -5
    )),

    // Loans (3)
    q("Loans", "How should loan disbursements proceed during volatility?", buildChoices(
      "Continue with heightened verification and clear comms", "Balances service and risk.", 10,
      "Pause new disbursements but keep commitments", "Safer, but impacts customers and revenue.", 5,
      "Rush approvals to keep volume up", "Fraud/credit risk increases.", -5,
      "Let lenders bypass controls", "Compliance failure.", -5
    )),
    q("Loans", "What borrower messaging is appropriate?", buildChoices(
      "Use standard message: what to expect + escalation path", "Consistency reduces complaints.", 10,
      "Tell borrowers processing may be delayed", "True but can be too vague without next steps.", 5,
      "Promise faster approvals to calm them", "Overpromise creates credibility risk.", -5,
      "No communication", "Confusion increases churn.", -5
    )),
    q("Loans", "What control do you add during high chaos?", buildChoices(
      "Dual control on exceptions and verification checklist", "Reduces fraud and errors.", 10,
      "Require manager review on exceptions only", "Helps, but may miss process gaps.", 5,
      "Skip controls to move fast", "Losses and findings likely.", -5,
      "Email sensitive docs freely", "Privacy/compliance risk.", -5
    )),

    // Accounting (3)
    q("Accounting", "How do you reflect unusual cash movement in reporting?", buildChoices(
      "Daily cash position with reconciliations and notes", "Accurate visibility for leadership.", 10,
      "Daily summary numbers without full reconciliation", "Some signal, but risk inaccurate decisions.", 5,
      "Weekly reporting only", "Too slow during a run.", -5,
      "Suppress negative indicators", "Governance and ethics risk.", -5
    )),
    q("Accounting", "What’s the priority reconciliation during heavy cash activity?", buildChoices(
      "Branch cash, vault/ATM settlement, GL tie-outs", "Catches material breaks quickly.", 10,
      "Branch cash only", "Partial coverage; may miss settlement issues.", 5,
      "Skip until month-end", "Backlog compounds risk.", -5,
      "Allow unlogged adjustments", "No audit trail.", -5
    )),
    q("Accounting", "How do you maintain documentation for unusual transactions?", buildChoices(
      "Central evidence folder with approvals and index", "Audit-ready and consistent.", 10,
      "Keep notes individually and consolidate later", "Better than nothing, but risk loss/inconsistency.", 5,
      "Only verbal approvals", "Insufficient evidence.", -5,
      "Delete messy records later", "Regulatory risk.", -5
    )),

    // Deposits (3)
    q("Deposits", "How do you manage large withdrawal requests at branches?", buildChoices(
      "Set policy limits and schedule large cash pickups", "Fairness and liquidity control.", 10,
      "Allow withdrawals but require manager approval over a threshold", "Helps, but can still be inconsistent without scripts.", 5,
      "Honor all requests immediately", "Cash depletion risk.", -5,
      "Let each branch decide", "Inconsistent and risky.", -5
    )),
    q("Deposits", "How do you handle call center pressure and messaging?", buildChoices(
      "Recorded message + scripts + status updates", "Reduces load and keeps messaging consistent.", 10,
      "Add scripts but keep the phone tree the same", "Helpful, but still high volume without automation.", 5,
      "Turn phones off", "Worsens panic.", -5,
      "Tell customers 'it’s fine' with no facts", "Credibility risk.", -5
    )),
    q("Deposits", "What is the best customer reassurance tactic?", buildChoices(
      "Transparent updates + what customers can do + where to check status", "Trust-building and practical.", 10,
      "Encourage customers to visit a branch for updates", "Some reassurance, but increases branch load.", 5,
      "Silence", "Speculation grows.", -5,
      "Blame customers for panic", "Reputational harm.", -5
    )),
  ]
};

/* ------------------------- SCENARIO 3 ------------------------- */
const SCENARIO_BEC_WIRE = {
  key: "business-email-compromise-wires",
  title: "Business Email Compromise + Wire Fraud Attempt",
  description:
    "A business customer reports a suspicious wire request that appears to come from their CFO. Similar attempts are detected across branches. Rapid controls and communications are required.",
  questions: [
    // CEO/SVPs (3)
    q("CEO/SVPs", "What leadership posture is appropriate as the fraud escalates?", buildChoices(
      "Treat as a major incident with clear ownership and rapid containment", "Fast coordinated action reduces losses.", 10,
      "Escalate internally but keep it out of formal incident structure", "Some action, but coordination is weaker.", 5,
      "Wait for confirmed losses before acting", "Too slow; loss window stays open.", -5,
      "Downplay externally regardless of impact", "Trust damage and regulatory risk.", -5
    )),
    q("CEO/SVPs", "How should executive communications be coordinated?", buildChoices(
      "Single spokesperson + consistent scripts for staff", "Avoids mixed messaging and reduces risk.", 10,
      "Allow department heads to share updates with their teams only", "Internal alignment helps, but public messaging may still drift.", 5,
      "Let each branch speak externally if asked", "Inconsistent and risky statements.", -5,
      "No communications until investigation ends", "Rumors fill the vacuum.", -5
    )),
    q("CEO/SVPs", "What priority should be set for customer remediation?", buildChoices(
      "Protect customers quickly with a documented, consistent process", "Trust-preserving and defensible.", 10,
      "Help customers quickly but decide case-by-case without a standard", "Good intent, but inconsistent outcomes and risk.", 5,
      "Delay help until the investigation is complete", "Customer harm grows; complaints increase.", -5,
      "Ignore smaller cases", "Patterns expand and become findings.", -5
    )),

    // IT/Security (3)
    q("IT/Security", "What is the first step when wire fraud attempts spike?", buildChoices(
      "Tighten controls, preserve evidence, and increase monitoring immediately", "Reduces loss and supports investigation.", 10,
      "Increase monitoring first, then tighten controls once confirmed", "Some signal, but leaves a longer loss window.", 5,
      "Do nothing until more data arrives", "Loss window stays open.", -5,
      "Disable security controls to reduce friction", "Increases loss risk.", -5
    )),
    q("IT/Security", "How should email compromise indicators be handled internally?", buildChoices(
      "Create/dispatch IOCs, block rules, and staff warning", "Prevents more compromise quickly.", 10,
      "Monitor quietly and only block the worst offenders", "Helps some, but misses spread.", 5,
      "Delete evidence to 'clean up'", "Destroys forensics.", -5,
      "Route requests through personal email to avoid filters", "Greatly increases exposure.", -5
    )),
    q("IT/Security", "How do you validate authenticity of wire instructions?", buildChoices(
      "Out-of-band verification using known contacts + documented callback", "Strongest fraud prevention control.", 10,
      "Callback to a number provided in the email but document it", "Better than nothing, but attacker can control numbers.", 5,
      "Accept email as proof", "Easy to spoof.", -5,
      "Skip verification to move faster", "High loss risk.", -5
    )),

    // HR (3)
    q("HR", "What staff guidance should go out immediately?", buildChoices(
      "Fraud/BEC alert + required escalation steps + no-blame reporting", "Reduces repeat losses and speeds reporting.", 10,
      "Send a reminder to be cautious with wires", "Helps awareness but lacks clear process.", 5,
      "No reminder to avoid panic", "Staff keep falling for it.", -5,
      "Publicly shame mistakes", "Prevents future reporting.", -5
    )),
    q("HR", "How should staffing/coverage be managed while investigating?", buildChoices(
      "Assign SMEs + backups + clear shifts and breaks", "Sustains response without burnout.", 10,
      "Ask teams to stay available as needed", "Works briefly but risks burnout and gaps.", 5,
      "Everyone on-call indefinitely", "Burnout and mistakes rise.", -5,
      "No changes", "Response slows.", -5
    )),
    q("HR", "How should HR handle an employee who clicked a phishing link?", buildChoices(
      "No-blame reporting + policy-based review + coaching/training", "Encourages early reporting and improvement.", 10,
      "Private coaching without documentation", "Helps learning, but weak evidence for repeat issues.", 5,
      "Immediate termination always", "Overly punitive; reduces reporting.", -5,
      "Ignore it", "No improvement; repeated incidents.", -5
    )),

    // Finance (3)
    q("Finance", "What’s the finance action when fraud losses are possible?", buildChoices(
      "Track exposure, coordinate with Legal/Risk, and set reporting path", "Accurate financial governance.", 10,
      "Track vendor costs only and revisit customer loss later", "Partial view; may miss total exposure.", 5,
      "Ignore until month-end", "Understates risk and delays action.", -5,
      "Hide losses in misc categories", "Reporting integrity risk.", -5
    )),
    q("Finance", "How should reimbursements be approached?", buildChoices(
      "Case-by-case with documented criteria and approvals", "Fair and defensible.", 10,
      "Reimburse quickly using manager discretion", "Helps customers but inconsistent and risky.", 5,
      "Refund everyone automatically", "Encourages fraud and losses.", -5,
      "Never reimburse", "Reputational and regulatory risk.", -5
    )),
    q("Finance", "What spend should be prioritized during investigation?", buildChoices(
      "Forensics, monitoring, and fraud tooling aligned to response", "Reduces future losses.", 10,
      "Spend cautiously but approve limited forensic support", "Some benefit, but may be insufficient.", 5,
      "Cut all security spend", "Increases risk.", -5,
      "Spend without approvals", "Control failures.", -5
    )),

    // Loans (3)
    q("Loans", "What risk control is needed for disbursement change requests?", buildChoices(
      "Enhanced out-of-band verification and documented approvals", "Prevents redirection fraud.", 10,
      "Manager review on changes with a quick callback", "Helpful but can be weak if callback isn’t to known contacts.", 5,
      "Approve changes via email only", "High fraud risk.", -5,
      "Bypass controls for VIP customers", "Creates unfair and risky exceptions.", -5
    )),
    q("Loans", "How should staff handle borrower requests to change payout accounts?", buildChoices(
      "Verify using known contact method + log evidence", "Strong control and audit trail.", 10,
      "Verify using the number the borrower provides in the email", "Better than nothing, but attacker can spoof.", 5,
      "Accept emailed instructions", "Easy to manipulate.", -5,
      "Skip validation if urgent", "Loss risk.", -5
    )),
    q("Loans", "What documentation should be collected for suspicious requests?", buildChoices(
      "Preserve emails, call logs, approvals, and timestamps", "Supports investigation and recovery.", 10,
      "Keep brief notes only", "Some record, but insufficient detail.", 5,
      "Delete messages to reduce clutter", "Destroys evidence.", -5,
      "Store PII in unsecured notes", "Privacy risk.", -5
    )),

    // Accounting (3)
    q("Accounting", "How should fraud-related adjustments be recorded?", buildChoices(
      "Separate accounts with documented entries and approvals", "Transparent and auditable.", 10,
      "Record in general expense but keep internal notes", "Some record, but reduces clarity and audit readiness.", 5,
      "Hide in miscellaneous categories", "Misleading reporting.", -5,
      "Delay recording until final resolution", "Late/inaccurate reporting.", -5
    )),
    q("Accounting", "Which reconciliations matter most after wire attempts?", buildChoices(
      "Wire settlements, suspense accounts, and cash ties", "Catches breaks and exposure quickly.", 10,
      "Cash only first, then wires later", "Partial; delays detection of settlement issues.", 5,
      "Skip reconciliations until next month", "Breaks persist.", -5,
      "Allow changes without logs", "No traceability.", -5
    )),
    q("Accounting", "How do you preserve an audit trail for refunds/chargebacks?", buildChoices(
      "Central log + approvals + evidence links per case", "Defensible and consistent.", 10,
      "Branch emails only, collected later", "Some evidence, but messy and incomplete.", 5,
      "Verbal approvals", "Weak evidence.", -5,
      "No tracking; just process quickly", "Control failure.", -5
    )),

    // Deposits (3)
    q("Deposits", "What should deposits do immediately to protect customers?", buildChoices(
      "Enhanced verification, alerts, scripts, and escalation", "Prevents more losses quickly.", 10,
      "Increase verification only for large transfers", "Helps but leaves smaller fraud paths open.", 5,
      "Business as usual", "Fraud window stays open.", -5,
      "Disable transfers entirely without criteria", "Too disruptive; harms customers.", -5
    )),
    q("Deposits", "How should suspicious transfer requests be handled in branches?", buildChoices(
      "Escalate, verify out-of-band, and document evidence", "Strong consistent defense.", 10,
      "Manager approval on suspicious transfers", "Better than none, but can be inconsistent.", 5,
      "Approve quickly to reduce wait times", "Fraud risk rises.", -5,
      "Let tellers decide individually", "Inconsistent and risky.", -5
    )),
    q("Deposits", "What customer communication is appropriate?", buildChoices(
      "Security advisory with steps customers can take", "Educates without panic.", 10,
      "General reminder to 'be careful' without steps", "Some awareness, but not actionable.", 5,
      "Blame customers for fraud", "Reputational harm.", -5,
      "Share investigation details publicly", "Security/legal risk.", -5
    )),
  ]
};

/* ------------------------- SCENARIO 4 ------------------------- */
const SCENARIO_REG_EXAM = {
  key: "short-notice-regulatory-exam",
  title: "Regulatory Exam Announced With 72 Hours Notice",
  description:
    "Regulators announce an exam starting in 72 hours focusing on incident response, customer communications, and financial controls. Teams must prepare evidence quickly.",
  questions: [
    // CEO/SVPs (3)
    q("CEO/SVPs", "What overall strategy should leadership set for exam prep?", buildChoices(
      "Assign owners, prioritize gaps, and create a clear evidence index", "Shows control and realistic execution.", 10,
      "Start collecting documents while discussing priorities", "Helpful, but can drift without owners.", 5,
      "Fix everything at once with no prioritization", "Unrealistic and incomplete.", -5,
      "Hide weaknesses and hope they aren’t noticed", "High risk if discovered.", -5
    )),
    q("CEO/SVPs", "How should regulator communications be handled?", buildChoices(
      "Designate a liaison and maintain an organized artifact tracker", "Efficient and professional.", 10,
      "Allow each area to respond to requests as they come", "Works but can be inconsistent and duplicative.", 5,
      "No comms until day one", "Looks unprepared.", -5,
      "Overpromise remediation completion timelines", "Creates commitment risk.", -5
    )),
    q("CEO/SVPs", "What governance model coordinates preparation best?", buildChoices(
      "Command center with daily checkpoints and status reporting", "Clear accountability and pace.", 10,
      "Weekly meeting with leaders only", "Some visibility, but too slow.", 5,
      "Chat-only coordination", "Hard to track deliverables.", -5,
      "Vendor-led coordination", "Misaligned to bank responsibilities.", -5
    )),

    // IT/Security (3)
    q("IT/Security", "What evidence is essential for security controls?", buildChoices(
      "MFA/IAM proof, logging/retention, and incident runbooks", "Directly supports exam focus areas.", 10,
      "Provide screenshots of settings only", "Some evidence, but often insufficient depth.", 5,
      "Disable logging for performance", "Evidence loss is a finding.", -5,
      "Share raw logs broadly without controls", "Privacy/security risk.", -5
    )),
    q("IT/Security", "How should evidence be organized for exam requests?", buildChoices(
      "Secure portal with an index and access controls", "Audit-ready and controlled.", 10,
      "Central shared drive with basic folders", "Some organization, but weaker access control.", 5,
      "Wait until asked to gather anything", "Appears unprepared.", -5,
      "Dump files without labels", "Delays and confusion.", -5
    )),
    q("IT/Security", "How should known gaps be presented?", buildChoices(
      "Document the gap and provide remediation plan/timeline", "Transparent and constructive.", 10,
      "Acknowledge gaps verbally and fix later", "Some honesty, but weak evidence.", 5,
      "Hide gaps", "High risk finding.", -5,
      "Ignore until after exam", "Likely negative outcome.", -5
    )),

    // HR (3)
    q("HR", "What HR artifacts are typically needed in an exam?", buildChoices(
      "Training records, policy attestations, and role-based requirements", "Demonstrates compliance.", 10,
      "Provide a summary memo describing training", "Some help, but weaker evidence than records.", 5,
      "Verbal confirmations only", "Weak evidence.", -5,
      "No records due to privacy", "Incomplete and raises issues.", -5
    )),
    q("HR", "How should SME availability be managed during the exam?", buildChoices(
      "Schedule SMEs with backups and coverage plans", "Ensures responsiveness.", 10,
      "Ask managers to make SMEs available as needed", "Works but can cause conflicts.", 5,
      "No schedule; respond ad-hoc", "Delays and missed meetings.", -5,
      "No overtime allowed under any condition", "Reduces responsiveness.", -5
    )),
    q("HR", "What guidance should staff receive before exam interactions?", buildChoices(
      "Data handling rules, comms expectations, and escalation paths", "Reduces exam-day mistakes.", 10,
      "Tell staff to be professional and answer questions", "Okay but lacks data handling specifics.", 5,
      "Loosen policies temporarily to move faster", "Compliance risk.", -5,
      "Tell staff to improvise", "Inconsistent behavior.", -5
    )),

    // Finance (3)
    q("Finance", "What evidence should Finance prepare?", buildChoices(
      "Liquidity/capital reporting, approvals, reconciliations, and controls", "Shows control and accuracy.", 10,
      "Prepare current reports but defer supporting evidence until asked", "Some readiness, but can slow responses.", 5,
      "Delay reporting because it’s disruptive", "Non-compliance risk.", -5,
      "Adjust figures to look better", "Misstatement risk.", -5
    )),
    q("Finance", "How should known reporting weaknesses be handled?", buildChoices(
      "Document weakness with remediation plan and timeline", "Defensible and transparent.", 10,
      "Fix issues quickly but don’t document changes", "Some improvement but poor auditability.", 5,
      "Hide weaknesses", "High risk.", -5,
      "Blame vendors and do nothing", "Avoids ownership; bad outcome.", -5
    )),
    q("Finance", "What vendor invoices get priority during prep?", buildChoices(
      "Exam/continuity critical vendors first with approvals", "Supports readiness.", 10,
      "Pay vendors as they come due with manager approval", "Okay but can miss priorities.", 5,
      "Pause all vendor payments", "Breaks services.", -5,
      "Pay without approvals to be fast", "Control failure.", -5
    )),

    // Loans (3)
    q("Loans", "What loan documentation prep is appropriate?", buildChoices(
      "Sample files reviewed with checklist and secure access", "Shows controlled process.", 10,
      "Pull a sample but don’t review unless asked", "Some readiness but risk surprises.", 5,
      "Verbal explanations only", "Insufficient evidence.", -5,
      "Email PII to auditors directly", "Privacy breach risk.", -5
    )),
    q("Loans", "How do you handle exceptions found in samples?", buildChoices(
      "Record and remediate with approvals and evidence", "Shows control and improvement.", 10,
      "Acknowledge exceptions and plan future remediation", "Some honesty, but may be weak without action.", 5,
      "Remove files from the sample", "Manipulation risk.", -5,
      "Alter docs after the fact", "Fraud risk.", -5
    )),
    q("Loans", "What examiner access model is best?", buildChoices(
      "Scoped read-only portal with logging", "Secure and traceable.", 10,
      "Provide limited shared folder access", "Works but weaker auditing.", 5,
      "Shared credentials", "Non-compliant.", -5,
      "USB copies", "Uncontrolled media risk.", -5
    )),

    // Accounting (3)
    q("Accounting", "How should statements be prepared for exam review?", buildChoices(
      "Tie-outs, reconciliations, and an evidence index", "Strong control demonstration.", 10,
      "Provide statements now and reconcile later", "Some readiness but risky.", 5,
      "Estimated numbers without support", "Findings risk.", -5,
      "Unlogged manual overrides", "Audit trail failure.", -5
    )),
    q("Accounting", "What controls must be clearly demonstrated?", buildChoices(
      "Approvals, segregation of duties, and logging", "Core control expectations.", 10,
      "Manager sign-off only", "Weaker than expected control set.", 5,
      "Shared admin rights", "Segregation failure.", -5,
      "No documentation", "Evidence gap.", -5
    )),
    q("Accounting", "How should adjustments be recorded during prep?", buildChoices(
      "Documented entries with approvals and support", "Transparent and auditable.", 10,
      "Track adjustments in a spreadsheet then post later", "Some trail, but higher error risk.", 5,
      "Net out to hide impact", "Misstatement risk.", -5,
      "Skip entries", "Misleading reporting.", -5
    )),

    // Deposits (3)
    q("Deposits", "What evidence should Deposits prepare?", buildChoices(
      "Policies, disclosures, and sampled account reviews", "Demonstrates compliance.", 10,
      "Policies only", "Helpful but weaker without sample evidence.", 5,
      "Provide broad PII access to speed review", "Privacy breach risk.", -5,
      "Exclude difficult cases from samples", "Bias and findings risk.", -5
    )),
    q("Deposits", "How should disclosure delivery be validated?", buildChoices(
      "Confirm current forms and delivery logs/controls", "Traceable and compliant.", 10,
      "Assume disclosures are fine because forms exist", "Risk gaps without proof of delivery.", 5,
      "Update forms without approvals", "Control failure.", -5,
      "Ignore historical changes", "Evidence gaps.", -5
    )),
    q("Deposits", "How should customer comms be handled if service changes occur during exam?", buildChoices(
      "Maintain normal service updates if customers are impacted", "Trust and consistency.", 10,
      "Use branch-only verbal guidance", "Some coverage but inconsistent.", 5,
      "Silence to avoid attention", "Complaints rise.", -5,
      "Mass blast exam details", "Unnecessary noise.", -5
    )),
  ]
};

/* ------------------------- SCENARIO 5 ------------------------- */
const SCENARIO_WEATHER = {
  key: "severe-weather-multi-branch",
  title: "Severe Weather Closes Multiple Branches + Power Outages",
  description:
    "A major storm causes power outages and road closures. Multiple branches close unexpectedly. ATM availability and staffing are disrupted. Customers need access and updates.",
  questions: [
    // CEO/SVPs (3)
    q("CEO/SVPs", "What’s leadership’s first operational decision?", buildChoices(
      "Activate continuity plan and apply consistent closure criteria", "Fast, safe, and consistent decisions.", 10,
      "Ask regional leaders to decide closures but report back", "Some control, but inconsistent decisions may happen.", 5,
      "Wait for full storm impact before acting", "Too slow; confusion grows.", -5,
      "Keep all branches open no matter what", "Safety risk.", -5
    )),
    q("CEO/SVPs", "What customer messaging is most important today?", buildChoices(
      "Clear closure list, alternatives, and update cadence", "Reduces confusion and avoids unnecessary travel.", 10,
      "Post closures on social media only", "Helps some, but misses many customers.", 5,
      "Overpromise reopening times", "Credibility risk.", -5,
      "No messaging until normal", "Customers show up unnecessarily; complaints rise.", -5
    )),
    q("CEO/SVPs", "How do you prioritize service channels?", buildChoices(
      "ATMs, call center, status page, and critical branch coverage", "Maximizes access while branches are disrupted.", 10,
      "Focus only on branches", "Limited reach and slow recovery.", 5,
      "Shut down digital to reduce load", "Harms access when branches are closed.", -5,
      "Leave it entirely to vendors", "Loss of control over customer experience.", -5
    )),

    // IT/Security (3)
    q("IT/Security", "How do you handle power/internet instability at locations?", buildChoices(
      "Monitor connectivity, confirm failover readiness, secure remote access", "Continuity with security.", 10,
      "Wait for tickets, then respond", "Works, but slower and customers feel it.", 5,
      "Disable security controls for convenience", "Increases compromise risk.", -5,
      "Share passwords broadly", "Audit/security failure.", -5
    )),
    q("IT/Security", "How should remote-work access be managed during the storm?", buildChoices(
      "Maintain VPN/MFA and monitor access health", "Secure continuity.", 10,
      "Allow remote work but restrict to low-risk tasks", "Some continuity, but may slow critical work.", 5,
      "Disable MFA to reduce friction", "High compromise risk.", -5,
      "Block remote work entirely", "Operational slowdown.", -5
    )),
    q("IT/Security", "What’s the best approach for customer status updates technically?", buildChoices(
      "Single status page with verified updates and redundancy", "Consistent source of truth.", 10,
      "Homepage banner updated when possible", "Helpful but less structured than a status page.", 5,
      "No updates", "Speculation and complaints grow.", -5,
      "Allow anyone to post updates", "Misinformation risk.", -5
    )),

    // HR (3)
    q("HR", "What is HR’s first priority for staff safety?", buildChoices(
      "Safety guidance, closure policy reminders, and check-ins", "Protects staff and reduces liability.", 10,
      "Tell managers to use judgment and keep HR informed", "Some safety, but inconsistent.", 5,
      "Require attendance regardless of conditions", "High safety risk.", -5,
      "No guidance", "Confusion and risk.", -5
    )),
    q("HR", "How do you handle staffing when some branches are closed?", buildChoices(
      "Reassign staff, enable remote options, and publish schedules", "Maintains coverage and clarity.", 10,
      "Ask managers to reassign as needed", "Some coverage but inconsistent.", 5,
      "Force long shifts for remaining staff", "Burnout and errors.", -5,
      "No reassignments", "Service gaps.", -5
    )),
    q("HR", "How should employee communications run during the storm?", buildChoices(
      "Scheduled updates via official channels", "Predictable and clear.", 10,
      "Manager texts only", "Fragmented and inconsistent.", 5,
      "Public posts by employees", "Unvetted info risk.", -5,
      "Silence", "Rumors and anxiety.", -5
    )),

    // Finance (3)
    q("Finance", "What immediate finance concern needs tracking?", buildChoices(
      "Cash logistics, emergency vendor costs, and incident expenses", "Prevents shortages and surprises.", 10,
      "Track vendor costs only", "Partial view; misses internal/emergency spend.", 5,
      "Freeze spending", "May block critical response.", -5,
      "Stop cash orders to save money", "ATM outages worsen.", -5
    )),
    q("Finance", "How should emergency expenses be handled?", buildChoices(
      "Incident cost center with approvals and documentation", "Audit-ready and controlled.", 10,
      "Allow spending but require after-the-fact receipts", "Some control, but risk of missed approvals.", 5,
      "Deny all emergency spending", "Prevents recovery.", -5,
      "Hide costs", "Reporting integrity risk.", -5
    )),
    q("Finance", "How should vendor priorities be set during outages?", buildChoices(
      "Critical ops, communications, and cash vendors first", "Supports continuity.", 10,
      "Pay invoices as they come due", "May miss critical priorities.", 5,
      "Stop all payments", "Service disruption.", -5,
      "Let each dept decide independently", "Fragmented control.", -5
    )),

    // Loans (3)
    q("Loans", "How should time-sensitive loan closings be handled?", buildChoices(
      "Use remote closing options with documented controls", "Maintains service and compliance.", 10,
      "Reschedule most closings but handle emergencies manually", "Some service, but delays increase.", 5,
      "Proceed with verbal-only approvals", "Compliance risk.", -5,
      "Cancel all closings", "Customer harm and revenue loss.", -5
    )),
    q("Loans", "What documentation control matters most during disruptions?", buildChoices(
      "Secure storage, checklists, and dual review", "Preserves audit trail.", 10,
      "Manager review only", "Some control, but weaker segregation.", 5,
      "Email PII freely", "Privacy risk.", -5,
      "No documentation until later", "Evidence gaps.", -5
    )),
    q("Loans", "How should prioritization be set when staffing is reduced?", buildChoices(
      "Critical/time-sensitive cases first", "Best impact with limited capacity.", 10,
      "FIFO only", "Ignores urgency.", 5,
      "VIPs only", "Fairness and reputation issues.", -5,
      "Random order", "Inefficient.", -5
    )),

    // Accounting (3)
    q("Accounting", "What is the accounting approach during operational disruption?", buildChoices(
      "Provisional close with enhanced reconciliations and documentation", "Control and transparency.", 10,
      "Delay close briefly while reconciling material accounts", "Works if time-boxed and documented.", 5,
      "Skip reconciliations", "Misstatements likely.", -5,
      "Smooth numbers to avoid concern", "Ethics and audit risk.", -5
    )),
    q("Accounting", "Which reconciliations should be prioritized?", buildChoices(
      "Cash, ATM settlements, and inter-system breaks", "Material risk focus.", 10,
      "Cash only first", "Partial; settlement breaks may grow.", 5,
      "Wait until everything is stable", "Errors compound.", -5,
      "Manual changes with no logs", "Audit trail failure.", -5
    )),
    q("Accounting", "How do you preserve audit trail during manual work?", buildChoices(
      "Central log + approvals + evidence retention", "Defensible and consistent.", 10,
      "Email threads with manager approvals", "Some evidence, but messy.", 5,
      "Disable logging", "Evidence destroyed.", -5,
      "Verbal approvals only", "Weak evidence.", -5
    )),

    // Deposits (3)
    q("Deposits", "How do you preserve customer access with branch closures?", buildChoices(
      "ATM/alternate branches + call scripts + status page", "Maintains access and trust.", 10,
      "ATM-first approach only", "Partial access and more confusion.", 5,
      "Close everything to reduce load", "Customer harm and panic.", -5,
      "No updates", "Confusion increases.", -5
    )),
    q("Deposits", "What should ATM strategy be during cash disruption?", buildChoices(
      "Monitor cash, adjust limits, prioritize replenishment", "Balances access and liquidity.", 10,
      "Increase ATM withdrawal limits to reduce branch visits", "May reduce visits but increases cash depletion risk.", 5,
      "Disable ATMs", "Harms access.", -5,
      "No strategy", "Inconsistent outcomes.", -5
    )),
    q("Deposits", "How often should public updates be posted?", buildChoices(
      "Regular cadence with factual progress", "Trust and reduced call volume.", 10,
      "Update only when major changes happen", "Better than silence, but less predictable.", 5,
      "Constant unverified updates", "Noise/confusion.", -5,
      "Internal-only updates", "Customers uninformed.", -5
    )),
  ]
};

/* ------------------------- EXPORTS ------------------------- */

/* ------------------------- SCENARIO 6 ------------------------- */
const SCENARIO_INSIDER = {
  key: "insider-threat-terminated-employee",
  title: "Terminated Employee Causes Insider Disruption",
  description:
    "A disgruntled employee is terminated and retaliates. Suspicious changes appear in systems, files are deleted from shared drives, and threatening messages are sent to staff. Immediate access revocation, evidence preservation, and coordinated communications are required.",
  questions: [
    // CEO/SVPs (3)
    q("CEO/SVPs", "What is leadership’s first move in the first hour?", buildChoices(
      "Activate incident command, assign a single spokesperson, and set update cadence", "Fast alignment and consistent messaging reduces chaos.", 10,
      "Hold an informal huddle and let departments coordinate independently", "Some coordination, but decisions drift and slow containment.", 5,
      "Let IT handle it without executive involvement", "Misses governance and cross-functional needs.", -5,
      "Publicly blame the ex-employee immediately", "Premature and risky legally.", -5
    )),
    q("CEO/SVPs", "How should external communications be handled today?", buildChoices(
      "Provide a factual statement focused on continuity and security steps", "Builds trust without sharing sensitive details.", 10,
      "Say nothing until everything is fixed", "Creates a vacuum; rumors grow.", 5,
      "Share investigation details including the person’s name", "Legal/privacy risk.", -5,
      "Downplay the event as trivial", "Backfires if customers are affected.", -5
    )),
    q("CEO/SVPs", "What policy decision is most important now?", buildChoices(
      "Engage counsel and law enforcement; document all actions", "Defensible response and proper chain of custody.", 10,
      "Handle internally without legal until later", "Delays can harm outcomes.", 5,
      "Let a vendor run everything", "Loss of control and accountability.", -5,
      "Ignore it unless losses occur", "Risk grows and credibility drops.", -5
    )),

    // IT/Security (3)
    q("IT/Security", "What is the immediate technical containment?", buildChoices(
      "Disable accounts, revoke tokens/SSH keys, rotate credentials, and review privileged access", "Closes access paths quickly.", 10,
      "Increase monitoring and wait for more indicators", "Helpful, but leaves a larger window.", 5,
      "Disable logging to reduce load", "Destroys forensics.", -5,
      "Share admin passwords widely so teams can act faster", "Major control failure.", -5
    )),
    q("IT/Security", "How should evidence be preserved?", buildChoices(
      "Snapshot impacted systems, collect logs, and store with chain-of-custody", "Supports investigation and potential legal action.", 10,
      "Save a few screenshots and continue work", "Some evidence but weak for forensic needs.", 5,
      "Delete noisy logs to clean up", "Loses crucial evidence.", -5,
      "Allow staff to export data locally without controls", "Privacy and integrity risk.", -5
    )),
    q("IT/Security", "What is the approach for vendor/integrations access?", buildChoices(
      "Audit all third-party access; revoke unnecessary tokens; validate webhooks", "Prevents additional misuse through integrations.", 10,
      "Ask vendors to check later and report if they see anything", "Some help but slow and inconsistent.", 5,
      "Assume vendors are fine and focus only internally", "Misses common attack paths.", -5,
      "Share logs broadly with all vendors", "Uncontrolled data sharing risk.", -5
    )),

    // HR (3)
    q("HR", "What offboarding control matters most in this scenario?", buildChoices(
      "Documented checklist: access revocation, asset return, exit interview notes", "Reduces residual access and preserves context.", 10,
      "Collect badge and laptop only", "Partial; leaves access/token paths open.", 5,
      "Skip documentation to move quickly", "Evidence and control gaps.", -5,
      "Let managers handle offboarding ad-hoc", "Inconsistent and risky.", -5
    )),
    q("HR", "What guidance should go to staff receiving threatening messages?", buildChoices(
      "Report via official channel; do not engage; preserve evidence; safety plan available", "Consistent and defensible.", 10,
      "Ignore messages unless they escalate", "Delays reporting and increases risk.", 5,
      "Respond firmly to shut it down", "Can inflame and creates evidence issues.", -5,
      "Post screenshots in group chats", "Privacy and investigation risk.", -5
    )),
    q("HR", "How should HR support safety and staffing today?", buildChoices(
      "Coordinate security/law enforcement, offer remote work if needed, schedule coverage", "Reduces risk and burnout.", 10,
      "Ask managers to sort it out", "Uneven, can miss safety needs.", 5,
      "Force normal operations regardless", "Safety/liability risk.", -5,
      "Suspend all work for everyone", "Unnecessary disruption.", -5
    )),

    // Finance (3)
    q("Finance", "What is the first finance control to protect systems/data?", buildChoices(
      "Freeze risky changes; require approvals; monitor for unusual postings", "Prevents manipulation and supports audit.", 10,
      "Keep normal operations and review later", "Some continuity but risk persists.", 5,
      "Share admin credentials with more staff for speed", "Segregation failure.", -5,
      "Disable logging to reduce noise", "Evidence loss.", -5
    )),
    q("Finance", "How should potential incident costs be tracked?", buildChoices(
      "Create incident cost center with documented approvals and invoices", "Accurate, audit-ready tracking.", 10,
      "Track major vendor costs only", "Partial view.", 5,
      "Estimate later from memory", "Inaccurate and weak evidence.", -5,
      "Hide costs in miscellaneous categories", "Reporting integrity risk.", -5
    )),
    q("Finance", "How should vendor communications be handled?", buildChoices(
      "Inform continuity-critical vendors of restricted changes and validation steps", "Aligns priorities and reduces risk.", 10,
      "Let vendors operate normally", "Misses coordination during active incident.", 5,
      "Pause all payments without criteria", "Service disruption risk.", -5,
      "Share sensitive details freely with every vendor", "Security/privacy risk.", -5
    )),

    // Loans (3)
    q("Loans", "How should loan operations respond to suspicious change requests?", buildChoices(
      "Require out-of-band verification using known contacts and document evidence", "Strong fraud prevention.", 10,
      "Callback to the number in the email and proceed", "Better than nothing but weak control.", 5,
      "Accept emailed instructions from familiar addresses", "Easy to spoof.", -5,
      "Bypass controls to avoid delays", "Compliance and loss risk.", -5
    )),
    q("Loans", "How do you protect loan documents and PII during the incident?", buildChoices(
      "Secure storage, role-based access, and logging with dual review on exceptions", "Preserves audit trail and privacy.", 10,
      "Restrict access loosely and fix later", "Some control but risky.", 5,
      "Allow broad downloads to avoid disruption", "Privacy/chain-of-custody risk.", -5,
      "Share via personal email accounts temporarily", "Policy and security failure.", -5
    )),
    q("Loans", "What borrower messaging is appropriate if communications were tampered?", buildChoices(
      "Use standard scripts with factual updates and escalation path", "Consistency reduces complaints.", 10,
      "Let lenders improvise messages case-by-case", "Inconsistent and risky.", 5,
      "Promise accelerated approvals to calm them", "Credibility risk.", -5,
      "Avoid any communication until resolved", "Confusion and churn.", -5
    )),

    // Accounting (3)
    q("Accounting", "What reconciliation step matters first after suspected manipulation?", buildChoices(
      "Validate critical GL accounts, review audit logs, and document exceptions", "Catches material breaks quickly.", 10,
      "Check cash only and review other accounts later", "Partial coverage.", 5,
      "Skip reconciliations to avoid delay", "Misstatements likely.", -5,
      "Allow unlogged manual overrides", "Audit trail failure.", -5
    )),
    q("Accounting", "How should adjustments related to the incident be recorded?", buildChoices(
      "Documented entries with approvals and linked evidence", "Defensible and transparent.", 10,
      "Record in a spreadsheet and post later without approvals", "Some trail but weak control.", 5,
      "Net out changes to hide impact", "Misstatement risk.", -5,
      "Delay entries until it’s all over", "Late/inaccurate reporting.", -5
    )),
    q("Accounting", "What access control is appropriate during the incident?", buildChoices(
      "Least privilege with dual control for sensitive actions and logging", "Prevents misuse and supports audit.", 10,
      "Manager approval only for sensitive actions", "Better than none but weaker segregation.", 5,
      "Shared admin credentials for speed", "Segregation failure.", -5,
      "No changes to access", "Exposure persists.", -5
    )),

    // Deposits (3)
    q("Deposits", "How should you handle suspicious customer account activity tied to the insider?", buildChoices(
      "Increase monitoring, place holds per policy, and escalate with documentation", "Balances protection and fairness.", 10,
      "Monitor only very large transactions", "Partial coverage.", 5,
      "Allow transactions to continue to avoid complaints", "Loss and compliance risk.", -5,
      "Let branches decide individually", "Inconsistent and risky.", -5
    )),
    q("Deposits", "What guidance goes to branches if customers receive odd messages?", buildChoices(
      "Use scripts: verify identity out-of-band; do not act on emailed instructions; escalate", "Reduces fraud and confusion.", 10,
      "Suggest customers visit branches for answers without scripts", "Some reassurance but inconsistent.", 5,
      "Tell customers everything is fine and to ignore it", "Credibility risk.", -5,
      "Share details about the terminated employee", "Legal/privacy risk.", -5
    )),
    q("Deposits", "How often should the public status page be updated?", buildChoices(
      "Regular cadence with factual progress and available services", "Trust-building and practical.", 10,
      "Update only when major milestones occur", "Better than silence but less predictable.", 5,
      "No updates until full resolution", "Speculation grows.", -5,
      "Constant unvetted updates by multiple staff", "Noise and mistakes.", -5
    )),
  ]
};

const SCENARIOS = [
  SCENARIO_RANSOMWARE,
  SCENARIO_LIQUIDITY,
  SCENARIO_BEC_WIRE,
  SCENARIO_REG_EXAM,
  SCENARIO_WEATHER,
  SCENARIO_INSIDER,
  SCENARIO_VENDOR_OUTAGE,
  SCENARIO_INSIDER_FRAUD,
  SCENARIO_ACH_FAILURE
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
  // Only pick scenarios that have a full 21 questions
  const valid = SCENARIOS.filter(s => Array.isArray(s.questions) && s.questions.length === 21);
  const pool = valid.length ? valid : SCENARIOS;

  // Pick a base scenario
  const base = pool[Math.floor(Math.random() * pool.length)];

  // Build a deep-copied questions array and shuffle choices within each question
  const questions = Array.isArray(base.questions)
    ? base.questions.map(q => {
        const choices = Array.isArray(q.choices) ? [...q.choices] : [];
        // Fisher–Yates shuffle for choices so correct isn’t always first
        for (let i = choices.length - 1; i > 0; i--) {
          const r = Math.floor(Math.random() * (i + 1));
          const t = choices[i];
          choices[i] = choices[r];
          choices[r] = t;
        }
        return { ...q, choices };
      })
    : [];

  // Shuffle question order (Fisher–Yates) so it’s not grouped by department
  for (let j = questions.length - 1; j > 0; j--) {
    const k = Math.floor(Math.random() * (j + 1));
    const tmp = questions[j];
    questions[j] = questions[k];
    questions[k] = tmp;
  }

  // Return a scenario copy with shuffled questions and choices
  return { ...base, questions };
}

export function getSpecialScenarios() {
  return [];
}

export default getRandomScenario;
