// public/js/static-scenarios.js
// Browser-usable copy of the static scenarios with local randomization.
// This removes any dependency on the /api/scenarios endpoint.

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

    q("HR", "What guidance should HR send employees today?", buildChoices(
      "Official internal update, phishing reminder, and how to report issues", "Reduces mistakes and improves incident reporting.", 10,
      "Send a short message telling staff to be cautious and await updates", "Some value, but lacks actionable reporting steps.", 5,
      "Allow personal email/file sharing to keep work moving", "Creates data leakage/compliance risk.", -5,
      "No guidance until it’s fixed", "Rumors/anxiety increase and errors rise.", -5
    )),
    q("HR", "What staffing posture is appropriate during incident response?", buildChoices(
      "Documented coverage plan with shifts and breaks", "Reduces burnout and errors; supports continuity.", 10,
      "Ask managers to cover as needed but track overtime centrally", "Works short-term, but may be uneven without structure.", 5,
      "Expect staff to work extended hours without documentation", "Burnout, risk of mistakes, and HR issues.", -5,
      "Cancel PTO globally for the week", "Demoralizing and may not be necessary.", -5
    )),
    q("HR", "What should HR coordinate with Legal regarding employee communications?", buildChoices(
      "Review internal memos to ensure accuracy and consistency with public statements", "Prevents confusion and legal risk.", 10,
      "Allow ad-hoc updates by team leads", "Faster but inconsistent and risky.", 5,
      "Share technical forensics broadly", "Unnecessary exposure and leak risk.", -5,
      "No communication until everything is fixed", "Creates uncertainty and rumor spread.", -5
    )),

    q("Finance", "How should the bank manage liquidity during service disruption?", buildChoices(
      "Increase liquidity buffers and monitor daily inflows/outflows", "Prudent response to potential volatility.", 10,
      "Wait a day before adjusting liquidity stance", "Might be okay but could be late if outflows spike.", 5,
      "Ignore liquidity until core is back", "Risky; could exacerbate stress.", -5,
      "Suspend all lending immediately without analysis", "Overreaction; harms business unnecessarily.", -5
    )),
    q("Finance", "What should be prioritized for regulatory notifications?", buildChoices(
      "Notify primary regulator promptly with facts, impacts, and remediation plan", "Maintains credibility and meets expectations.", 10,
      "Notify only if customers complain widely", "Reactive and risky; may be too late.", 5,
      "Do not notify to avoid scrutiny", "Non-compliant and risky.", -5,
      "Blame third parties immediately", "Not helpful; can backfire.", -5
    )),
    q("Finance", "What is a prudent approach to customer fee handling today?", buildChoices(
      "Waive related fees proactively and document criteria", "Builds goodwill; reduces complaints and risk.", 10,
      "Case-by-case waivers with minimal guidance", "OK but inconsistent.", 5,
      "Charge all fees as normal", "Harms reputation during outage.", -5,
      "Disable fee posting system-wide for a week", "May cause reconciliation problems.", -5
    )),

    q("Loans", "How should loan ops handle disbursements while core is impacted?", buildChoices(
      "Prioritize critical disbursements with manual controls and dual verification", "Balances customer needs with risk control.", 10,
      "Pause all disbursements for 24 hours", "Safe but may impact customers significantly.", 5,
      "Proceed as usual", "Increases risk of errors and fraud.", -5,
      "Allow single-approver manual disbursements", "High risk of fraud/errors.", -5
    )),
    q("Loans", "When should loan extensions or forbearance be considered?", buildChoices(
      "Case-by-case where impact is tied to incident; document decisions", "Fair and controlled approach.", 10,
      "Offer blanket extensions immediately", "Goodwill but may be overly broad.", 5,
      "No extensions regardless of impact", "Rigid and can harm customers.", -5,
      "Informal verbal promises only", "Non-compliant and risky.", -5
    )),
    q("Loans", "How do you handle collateral valuations delayed by system outages?", buildChoices(
      "Use interim controls; document manual processes and obtain post-incident validations", "Keeps business moving with control.", 10,
      "Delay all valuations", "Safe but slows business significantly.", 5,
      "Accept any emailed valuations from brokers", "Risky and non-compliant.", -5,
      "Skip valuations for small loans", "Non-compliant.", -5
    )),

    q("Accounting", "What is the best approach to GL reconciliation during incident recovery?", buildChoices(
      "Daily variance tracking with documented exceptions and post-recovery true-up", "Maintains control and audit trail.", 10,
      "Weekly reconciliation only", "Too slow for incident conditions.", 5,
      "Suspend reconciliations until everything is normal", "Risky and creates large backlogs.", -5,
      "Let each branch decide their own approach", "Inconsistent and risky.", -5
    )),
    q("Accounting", "How should manual workarounds be recorded?", buildChoices(
      "Central log of manual entries with approvals and evidence", "Supports audit and later reconciliation.", 10,
      "Local spreadsheets without central oversight", "Inconsistent and error-prone.", 5,
      "No logging for speed", "Creates control gaps and audit issues.", -5,
      "Use personal devices to track", "Data leakage/compliance risks.", -5
    )),
    q("Accounting", "How should variance due to service credits be handled?", buildChoices(
      "Track credits as distinct adjustments with rationale", "Clear audit trail and transparency.", 10,
      "Book lump-sum adjustments later", "Harder to justify.", 5,
      "Ignore until month-end", "Backlog and confusion.", -5,
      "Offset against unrelated accounts", "Non-compliant.", -5
    )),

    q("Deposits", "How should branch teams respond to higher walk-in traffic?", buildChoices(
      "Give staff a script and suggest self-service options", "Reduces frustration and load.", 10,
      "Tell customers to return at a later time", "Not helpful.", 5,
      "Minimize the situation when asked", "Harms trust.", -5,
      "Show customers internal communications", "Leads to confusion and risk.", -5
    )),
    q("Deposits", "What is the immediate guidance for ACH issues?", buildChoices(
      "Communicate expected delays and offer alternatives where possible", "Sets expectations and reduces complaints.", 10,
      "Ask customers to retry throughout the day", "OK but vague.", 5,
      "Promise exact recovery times", "Risky and often wrong.", -5,
      "Suggest using unsecured channels for sensitive info", "Security risk.", -5
    )),
    q("Deposits", "How should debit card disputes be handled today?", buildChoices(
      "Track and escalate incident-related disputes separately with clear guidance", "Supports service quality and audit.", 10,
      "Process normally without flags", "Hard to analyze later.", 5,
      "Suspend all dispute handling", "Unnecessary and harmful.", -5,
      "Share screenshots of internal tools to explain", "Risky and confusing.", -5
    )),
  ]
};

/* ------------------------- SCENARIO 2 ------------------------- */
const SCENARIO_LIQUIDITY = {
  key: "liquidity-stress-event",
  title: "Liquidity Stress Triggered by Market News",
  description:
    "Breaking market news triggers unusual withdrawal activity and increased customer inquiries about the bank’s strength. Leadership activates the Liquidity Playbook.",
  questions: [
    q("CEO/SVPs", "What message should leadership provide publicly today?", buildChoices(
      "Transparent statement about liquidity position and contingency funding, with update cadence", "Builds trust and reduces speculation.", 10,
      "Short statement acknowledging market volatility", "Helpful but light on substance.", 5,
      "No statement to avoid drawing attention", "Rumors can worsen; perceived evasiveness.", -5,
      "Blame competitors for fearmongering", "Unprofessional and risky.", -5
    )),
    q("CEO/SVPs", "What is the near-term governance approach for decisions?", buildChoices(
      "Daily (or twice daily) liquidity council with clear decision logs", "Keeps actions aligned and documented.", 10,
      "Ad-hoc approvals by email", "Inconsistent and harder to track.", 5,
      "Single-person decisions without documentation", "Risky and non-transparent.", -5,
      "Defer decisions to next board meeting", "Too slow in a stress event.", -5
    )),
    q("CEO/SVPs", "Should you release liquidity metrics externally?", buildChoices(
      "Share appropriate, accurate ranges with counsel/regulators aligned", "Balanced transparency.", 10,
      "Share granular daily balances publicly", "May be misleading/risky.", 5,
      "Share nothing at all", "May increase speculation.", -5,
      "Post raw internal dashboards", "Confusing and risky.", -5
    )),

    q("IT/Security", "What monitoring action is most important today?", buildChoices(
      "Enhanced anomaly detection on online banking and large funds transfers", "High-risk fraud and outflow vectors.", 10,
      "Disable all monitoring to reduce noise", "Risky and counterproductive.", -5,
      "Only monitor branch activity", "Misses major channels.", -5,
      "Share logs with third parties freely", "Security and privacy risk.", -5
    )),
    q("IT/Security", "What change management posture fits the situation?", buildChoices(
      "Heightened change control with rollback plans for critical fixes", "Keeps stability while enabling response.", 10,
      "Normal change control", "May be fine but lacks heightened caution.", 5,
      "Freeze all changes for a week", "Overly rigid; can block needed fixes.", -5,
      "Untracked hotfixes across environments", "Risky and non-compliant.", -5
    )),
    q("IT/Security", "Which security comms should go to staff today?", buildChoices(
      "Targeted phishing alerts and MFA reinforcement", "Timely, specific guidance that reduces real incident risk.", 10,
      "Brief security note with general reminders", "Provides baseline awareness but is easy to skim.", 5,
      "Hold broad comms to avoid noise; rely on managers", "Reduces noise but misses critical risk reminders.", -5,
      "Temporarily allow personal devices for expediency", "Improves access but expands the attack surface.", -5
    )),

    q("HR", "How should HR support branch staff handling anxious customers?", buildChoices(
      "Provide talking points, de-escalation tips, and escalation paths", "Practical support.", 10,
      "Ask managers to improvise", "Inconsistent and stressful.", 5,
      "No HR support needed", "Unhelpful and risky.", -5,
      "Share customer PII examples in training", "Privacy risk.", -5
    )),
    q("HR", "What guidance should HR give about overtime?", buildChoices(
      "Pre-approved overtime with central tracking and wellness guidance", "Balances service and staff well-being.", 10,
      "Unlimited overtime if needed", "Burnout and errors.", 5,
      "Ban overtime entirely", "May worsen service levels.", -5,
      "No guidance", "Chaos and inconsistency.", -5
    )),
    q("HR", "How should internal rumor control be handled?", buildChoices(
      "Frequent factual updates; encourage reporting of misinformation", "Reduces confusion and fear.", 10,
      "One update at week’s end", "Too infrequent.", 5,
      "Silence until things calm down", "Rumors flourish.", -5,
      "Allow managers to share all details", "Inconsistent and risky.", -5
    )),

    q("Finance", "What liquidity action should be considered today?", buildChoices(
      "Increase on-balance sheet liquidity and test contingency lines", "Prudent positioning.", 10,
      "Wait and see for a few days", "May be acceptable but risky.", 5,
      "Sell assets immediately at deep discounts", "Value destruction.", -5,
      "Ignore metrics until month-end", "Dangerous.", -5
    )),
    q("Finance", "How should pricing be decided?", buildChoices(
      "Small, targeted pricing adjustments with defined review intervals", "Balances stability and competitiveness.", 10,
      "Large, reactive price swings daily", "Confusing and risky.", 5,
      "No changes regardless of conditions", "May lose deposits.", -5,
      "Let each branch manager change rates", "Inconsistent and risky.", -5
    )),
    q("Finance", "How should vendor dependencies be tracked?", buildChoices(
      "Review critical vendor status and SLAs daily", "Supports stability and planning.", 10,
      "Assume vendors are fine", "Risky.", 5,
      "Blame vendors publicly", "Counterproductive.", -5,
      "Share vendor incident tickets externally", "Confidentiality risk.", -5
    )),

    q("Loans", "How should loan pipeline communications be handled?", buildChoices(
      "Set expectations with borrowers; provide clear timelines and contacts", "Improves trust and reduces churn.", 10,
      "Generic updates only", "Less helpful.", 5,
      "No updates to avoid alarm", "Confusing and harmful.", -5,
      "Promise aggressive timelines without certainty", "Backfires.", -5
    )),
    q("Loans", "What exception handling makes sense today?", buildChoices(
      "Structured exceptions with approvals and documentation", "Keeps control while serving needs.", 10,
      "Ad-hoc exceptions via email", "Inconsistent.", 5,
      "No exceptions allowed", "Rigid.", -5,
      "Unlimited exceptions by team leads", "Risky.", -5
    )),
    q("Loans", "How should collateral reviews proceed?", buildChoices(
      "Continue critical reviews; document delays and mitigation", "Balanced approach.", 10,
      "Pause all reviews", "Too blunt.", 5,
      "Accept informal valuations", "Risky.", -5,
      "Skip reviews for small loans", "Non-compliant.", -5
    )),

    q("Accounting", "How should daily reconciliation be managed?", buildChoices(
      "Tight variance tracking and exception logs", "Maintains control.", 10,
      "Weekly-only recon", "Too slow.", 5,
      "Suspend recon until calm", "Risky.", -5,
      "Local ad-hoc methods", "Inconsistent.", -5
    )),
    q("Accounting", "How should credits/fees be tracked?", buildChoices(
      "Separate tracking with rationale and incident tag", "Good audit trail.", 10,
      "Bulk adjustments later", "Opaque.", 5,
      "Ignore until later", "Backlog.", -5,
      "Mix into unrelated accounts", "Non-compliant.", -5
    )),
    q("Accounting", "What reporting cadence should accounting adopt?", buildChoices(
      "Daily incident metrics to leadership", "Keeps alignment.", 10,
      "Twice weekly updates", "Slower.", 5,
      "Weekly update only", "Too slow.", -5,
      "No updates", "Lack of visibility.", -5
    )),

    q("Deposits", "What branch guidance helps most today?", buildChoices(
      "Clear talking points, escalation paths, and alternatives", "Supports service.", 10,
      "Ask customers to wait", "Weak.", 5,
      "Downplay concerns", "Trust risk.", -5,
      "Share internal dashboards", "Confusing/risky.", -5
    )),
    q("Deposits", "How to handle ACH impact?", buildChoices(
      "Communicate delays with options and timeframes", "Sets expectations.", 10,
      "Tell customers to retry later", "Vague.", 5,
      "Promise exact restore times", "Risky.", -5,
      "Use insecure channels for details", "Risky.", -5
    )),
    q("Deposits", "How to process dispute volume spikes?", buildChoices(
      "Flag incident-related cases and prioritize", "Efficient and traceable.", 10,
      "Treat as normal", "Hard to analyze later.", 5,
      "Suspend dispute handling", "Harmful.", -5,
      "Share screenshots with customers", "Risky.", -5
    )),
  ]
};

/* ------------------------- SCENARIO 3 ------------------------- */
const SCENARIO_BEC_WIRE = {
  key: "wire-bec-fraud",
  title: "Business Email Compromise Attempts a Wire Fraud",
  description:
    "A vendor email account is compromised and requests a large wire change. Dual control detects an anomaly. Leadership must coordinate fraud response and communications.",
  questions: [
    q("CEO/SVPs", "What is the best external communications approach today?", buildChoices(
      "Share verified facts without exposing investigation specifics; notify impacted parties directly", "Transparent and prudent.", 10,
      "Issue a brief public summary with high-level indicators", "Reasonable but can create noise.", 5,
      "Hold external messaging until all facts are final", "Slow and can harm trust.", -5,
      "Signal vendor responsibility before full review", "Premature and unfair.", -5
    )),
    q("CEO/SVPs", "How should leadership support front-line fraud teams?", buildChoices(
      "Provide targeted staffing, clear escalation paths, and fast decisions", "Removes friction.", 10,
      "Request consolidated daily updates and let teams run", "Provides visibility but little support.", 5,
      "Avoid involvement to prevent micromanagement", "Insufficient direction.", -5,
      "Make a strong public stance immediately", "Can backfire operationally.", -5
    )),
    q("CEO/SVPs", "When should law enforcement be engaged?", buildChoices(
      "Promptly upon confirmed attempted fraud; coordinate with counsel", "Supports recovery and deterrence.", 10,
      "Engage only if money has actually moved", "Reactive and late.", 5,
      "Rely solely on internal bank processes", "Limits recovery options.", -5,
      "Permit teams to reach out directly for speed", "Uncoordinated and risky.", -5
    )),

    q("IT/Security", "What email security action is most important now?", buildChoices(
      "Tighten impersonation controls and DMARC; reinforce MFA/phishing training", "Targets the attack vector.", 10,
      "Loosen filters temporarily to inspect manually", "Introduces avoidable risk.", -5,
      "Circulate raw headers broadly for awareness", "Leaks technical details.", -5,
      "Focus only on this case and defer control changes", "Missed hardening opportunity.", -5
    )),
    q("IT/Security", "How should suspicious emails be handled today?", buildChoices(
      "Immediate quarantine and review; communicate to users with curated examples", "Improves detection.", 10,
      "Quietly delete without user education", "Reduces noise but misses learning.", 5,
      "Broadcast suspicious emails to all staff", "Can spread phish.", -5,
      "Let anyone issue ad‑hoc warnings", "Inconsistent and noisy.", -5
    )),
    q("IT/Security", "What change should be avoided?", buildChoices(
      "Temporarily disable external-email banner warnings to reduce noise", "Removes useful signal.", -5,
      "Layer additional URL rewriting in the gateway", "Reasonable but not primary.", 5,
      "Lower impersonation detection thresholds to trigger earlier", "Helpful tuning.", 10,
      "Grant temporary admin rights broadly for speed", "Creates new risk.", -5
    )),

    q("HR", "What training reinforcement helps today?", buildChoices(
      "Micro-reminder on phishing and reporting", "Timely and targeted.", 10,
      "Mandatory 1-hour training today", "Too disruptive.", 5,
      "No reminder", "Missed opportunity.", -5,
      "Share real customer data examples", "Privacy risk.", -5
    )),
    q("HR", "How should HR handle staff who clicked?", buildChoices(
      "Supportive coaching and additional training", "Improves future behavior.", 10,
      "Public shaming", "Counterproductive.", -5,
      "Termination immediately", "Overly punitive.", -5,
      "Ignore entirely", "Missed improvement.", 5
    )),
    q("HR", "What scheduling support might be needed?", buildChoices(
      "Allow flex time for fraud team surges", "Practical support.", 10,
      "No flexibility", "Unhelpful.", 5,
      "Cancel all PTO", "Harmful.", -5,
      "Unlimited overtime", "Burnout.", -5
    )),

    q("Finance", "What is the immediate wire control?", buildChoices(
      "Re-verify all change requests via trusted channels", "Core control.", 10,
      "Allow email-only approvals temporarily", "Risky.", -5,
      "Disable dual control to move faster", "Risky.", -5,
      "Assume previous vendors are safe", "Risky.", 5
    )),
    q("Finance", "How to handle vendor payment delays?", buildChoices(
      "Explain security verification; provide timelines and alternatives", "Maintains trust.", 10,
      "Silence until done", "Frustration.", 5,
      "Promise exact timing", "Risky.", -5,
      "Blame accounting publicly", "Unhelpful.", -5
    )),
    q("Finance", "What reporting is helpful?", buildChoices(
      "Daily metrics on attempts, blocks, and escalations", "Clarity for leadership.", 10,
      "Weekly only", "Slow.", 5,
      "No reporting", "Blind spots.", -5,
      "Share raw case notes externally", "Risky.", -5
    )),

    q("Loans", "How should loan funding changes be verified?", buildChoices(
      "Call-back on trusted numbers and dual approvals", "Prevents fraud.", 10,
      "Email-only confirmations", "Risky.", -5,
      "Single-approver changes", "Risky.", -5,
      "Trust any 'urgent' request", "Risky.", 5
    )),
    q("Loans", "What borrower communication fits best?", buildChoices(
      "Explain fraud-prevention steps and timelines", "Sets expectations.", 10,
      "Say nothing", "Confusing.", 5,
      "Share internal security tooling", "Risky.", -5,
      "Promise instant turnarounds", "Risky.", -5
    )),
    q("Loans", "What to do with suspicious vendor changes?", buildChoices(
      "Escalate to fraud team and freeze changes until verified", "Controls risk.", 10,
      "Allow small changes", "Risky.", 5,
      "Proceed if prior history", "Risky.", -5,
      "Let borrowers self-verify via email", "Risky.", -5
    )),

    q("Accounting", "How to log potential fraud impacts?", buildChoices(
      "Record exposures in a separate incident ledger with clear cross‑references", "Audit‑ready and traceable.", 10,
      "Use a temporary accrual within existing GL with footnotes", "Usable but less clear.", 5,
      "Defer entries until exposure is validated; track in case system only", "Gaps and timing issues.", -5,
      "Distribute detailed working notes widely via email for visibility", "Uncontrolled dissemination.", -5
    )),
    q("Accounting", "What reconciliation priority changes today?", buildChoices(
      "Tighter review of wire-related accounts", "Relevant control.", 10,
      "Normal process only", "May miss issues.", 5,
      "Suspend recon", "Risky.", -5,
      "Local-only methods", "Inconsistent.", -5
    )),
    q("Accounting", "What documentation supports later review?", buildChoices(
      "Centralized exception/case log with approvals, evidence, and timestamps", "Traceable.", 10,
      "Shared recap memo capturing decisions; attach key artifacts later", "Usable but less structured.", 5,
      "Defer documentation until after the incident", "Gaps and audit risk.", -5,
      "Personal notes kept locally without controls", "Inconsistent and risky.", -5
    )),

    q("Deposits", "How should teller verification change?", buildChoices(
      "Enhanced callbacks and ID checks for large transfers", "Reduces risk.", 10,
      "Normal checks only", "Less safe.", 5,
      "Skip checks for trusted customers", "Risky.", -5,
      "Process any 'urgent' request immediately", "Risky.", -5
    )),
    q("Deposits", "What guidance helps customer service?", buildChoices(
      "Talking points on BEC and verification steps", "Educates customers.", 10,
      "Ask to call back later", "Weak.", 5,
      "Promise instant resolutions", "Risky.", -5,
      "Share case details", "Risky.", -5
    )),
    q("Deposits", "How to treat disputed outgoing wires?", buildChoices(
      "Expedite LE/regulator contact and internal review", "Supports recovery.", 10,
      "Treat as normal", "Slow.", 5,
      "Blame customer publicly", "Risky.", -5,
      "Share screenshots with third parties", "Risky.", -5
    )),
  ]
};

/* ------------------------- SCENARIO 4 ------------------------- */
const SCENARIO_REG_EXAM = {
  key: "regulatory-exam-announced",
  title: "Regulatory Exam Announced with Short Notice",
  description:
    "A regulatory agency announces an exam with short notice. Preparation efforts must be coordinated across departments under tight timelines.",
  questions: [
    q("CEO/SVPs", "What is the first leadership action?", buildChoices(
      "Establish exam prep command with owners and timeline", "Creates structure and clarity.", 10,
      "Email managers to start gathering docs", "Less structured.", 5,
      "Wait for more details", "Delays prep.", -5,
      "Assign to a single manager informally", "Too narrow.", -5
    )),
    q("CEO/SVPs", "Should a communication go to the board?", buildChoices(
      "Yes: concise status, risks, and plan with cadence", "Keeps governance aligned.", 10,
      "Only at week’s end", "Slow.", 5,
      "No board comms", "Opaque.", -5,
      "Share raw internal notes", "Messy.", -5
    )),
    q("CEO/SVPs", "How to handle scope questions from regulators?", buildChoices(
      "Central point to triage and ensure consistent answers", "Prevents confusion.", 10,
      "Let managers answer directly", "Inconsistent.", 5,
      "Delay responses for days", "Frustrating.", -5,
      "Share preliminary drafts externally", "Risky.", -5
    )),

    q("IT/Security", "What should be prepared first?", buildChoices(
      "Updated policies, network diagrams, and control evidence", "Foundational materials.", 10,
      "All logs for last year", "Overkill.", 5,
      "New tooling", "Not needed immediately.", -5,
      "Stop all other work", "Impractical.", -5
    )),
    q("IT/Security", "What about vulnerability management evidence?", buildChoices(
      "Recent scans, remediation tracking, and change approvals", "Core exam items.", 10,
      "Only latest scan report", "Insufficient.", 5,
      "None unless requested", "Risky.", -5,
      "Share admin credentials for review", "Never.", -5
    )),
    q("IT/Security", "How to respond to ad-hoc examiner questions?", buildChoices(
      "Central intake with SMEs and quality review", "Consistent/accurate.", 10,
      "Any SME can reply directly", "Inconsistent.", 5,
      "Ask them to wait a week", "Unhelpful.", -5,
      "Provide raw config files", "Risky.", -5
    )),

    q("HR", "What HR evidence is priority?", buildChoices(
      "Training records, org charts, and role-based access reviews", "Core exam materials.", 10,
      "Only org chart", "Insufficient.", 5,
      "No prep", "Risky.", -5,
      "Share PII widely", "Privacy risk.", -5
    )),
    q("HR", "How to coordinate interviews with examiners?", buildChoices(
      "Schedule SMEs with briefing notes and expectations", "Efficient and consistent.", 10,
      "Let examiners ping anyone", "Interrupts work and risky.", 5,
      "Cancel other meetings for a week", "Disruptive.", -5,
      "No coordination", "Chaotic.", -5
    )),
    q("HR", "What staff guidance is useful?", buildChoices(
      "Professional conduct, accurate answers, and escalation paths", "Supports a smooth exam.", 10,
      "Tell staff to avoid examiners", "Unprofessional.", 5,
      "Share everything openly", "Risky.", -5,
      "Silence", "Confusion.", -5
    )),

    q("Finance", "What financial evidence is key?", buildChoices(
      "GL reconciliations, allowance methodologies, and liquidity metrics", "Exam staples.", 10,
      "Only financial statements", "Insufficient.", 5,
      "Future budgets only", "Irrelevant.", -5,
      "Share raw workpapers", "Risky.", -5
    )),
    q("Finance", "How to handle examiner requests that seem off-scope?", buildChoices(
      "Clarify scope politely via central coordinator", "Keeps focus.", 10,
      "Ignore the request", "Risky.", 5,
      "Argue in email", "Unhelpful.", -5,
      "Give everything requested immediately", "May be unnecessary.", -5
    )),
    q("Finance", "What reporting cadence to leadership works?", buildChoices(
      "Daily progress and risk log", "Keeps alignment.", 10,
      "Weekly summary only", "Slow.", 5,
      "No updates", "Opaque.", -5,
      "Raw dump of requests", "Noisy.", -5
    )),

    q("Loans", "How to adjust underwriting during the exam week?", buildChoices(
      "Maintain standards; document any exceptions tightly", "Balanced.", 10,
      "Pause all underwriting", "Too blunt.", 5,
      "Lower standards to keep volume", "Risky.", -5,
      "Allow wide exceptions", "Risky.", -5
    )),
    q("Loans", "What to do with examiner questions to loan officers?", buildChoices(
      "Coordinate via central channel and prep officers", "Consistent and accurate.", 10,
      "Let them reply ad-hoc", "Inconsistent.", 5,
      "Ask examiners to wait days", "Unhelpful.", -5,
      "Share internal private notes", "Risky.", -5
    )),
    q("Loans", "How to handle loan documentation gaps found during prep?", buildChoices(
      "Remediate quickly with evidence and track in a log", "Proactive and transparent.", 10,
      "Ignore until after exam", "Risky.", 5,
      "Hide gaps from examiners", "Very risky.", -5,
      "Blame prior team", "Unhelpful.", -5
    )),

    q("Accounting", "What accounting artifacts should be prepped?", buildChoices(
      "Recent close package, reconciliations, and exception logs", "Core items.", 10,
      "Only monthly statements", "Insufficient.", 5,
      "Future budgets", "Less relevant.", -5,
      "Share editable ledgers", "Risky.", -5
    )),
    q("Accounting", "How to track exam-related adjustments?", buildChoices(
      "Separate log with rationale and approvals", "Audit-ready.", 10,
      "Record within the monthly close workbook on a dedicated tab with annotations", "Usable but harder to audit consistently across periods.", 5,
      "Defer formal tracking until scope stabilizes; retain approvals in email", "Plausible in the moment but creates gaps and rework.", -5,
      "Let each team keep its own tracker and supply weekly snapshots", "Looks organized but produces inconsistency and control gaps.", -5
    )),
    q("Accounting", "What stance on documentation requests?", buildChoices(
      "Provide accurate, curated docs with context", "Efficient and clear.", 10,
      "Dump raw folders", "Noisy.", 5,
      "Delay responses", "Frustrating.", -5,
      "Provide editable templates", "Risky.", -5
    )),

    q("Deposits", "What customer comms might be needed?", buildChoices(
      "None publicly; prepare internal talking points", "Prudent.", 10,
      "Share exam details with customers", "Inappropriate.", 5,
      "Announce potential findings", "Risky.", -5,
      "Post internal schedules", "Not applicable.", -5
    )),
    q("Deposits", "How to keep service steady during prep?", buildChoices(
      "Staff cross-coverage and clear priorities", "Maintains service.", 10,
      "Let service levels drop", "Harmful.", 5,
      "Cancel all other work", "Disruptive.", -5,
      "Share customer PII internally for examples", "Risky.", -5
    )),
    q("Deposits", "What internal guidance helps frontline?", buildChoices(
      "Talking points and escalation paths during examiner presence", "Prepares staff.", 10,
      "Tell them to avoid examiners", "Unprofessional.", 5,
      "No guidance", "Confusion.", -5,
      "Share internal sensitive docs", "Risky.", -5
    )),
  ]
};

/* ------------------------- SCENARIO 5 ------------------------- */
const SCENARIO_WEATHER = {
  key: "severe-weather-branch-closures",
  title: "Severe Weather Causes Branch Closures and Outages",
  description:
    "A severe weather system causes wide power outages and several branch closures. Alternate operations and communications must be coordinated.",
  questions: [
    q("CEO/SVPs", "What’s the right first step?", buildChoices(
      "Activate business continuity and set update cadence", "Provides structure and visibility.", 10,
      "Let branches decide locally", "Inconsistent.", 5,
      "Wait for power company updates", "Slow.", -5,
      "Announce 'open as usual'", "Unrealistic and confusing.", -5
    )),
    q("CEO/SVPs", "What external comms help customers most?", buildChoices(
      "Post closure list, alternative options, and update times", "Sets expectations.", 10,
      "Short 'we're monitoring' post", "Light on details.", 5,
      "No comms until resolved", "Confusion.", -5,
      "Promise full reopen times", "Risky.", -5
    )),
    q("CEO/SVPs", "How to coordinate with emergency services?", buildChoices(
      "Central liaison and resource requests as needed", "Efficient.", 10,
      "Ad-hoc outreach by branches", "Inconsistent.", 5,
      "No outreach", "Missed support.", -5,
      "Share internal maps publicly", "Risky.", -5
    )),

    q("IT/Security", "What infra action is priority?", buildChoices(
      "Failover testing and backup power checks", "Resilience.", 10,
      "New system deployments", "Not now.", 5,
      "Disable monitoring", "Risky.", -5,
      "Unplanned changes", "Risky.", -5
    )),
    q("IT/Security", "What security risk increases?", buildChoices(
      "Phishing and outage-themed scams", "Higher likelihood.", 10,
      "Physical theft only", "Partial view.", 5,
      "None", "Incorrect.", -5,
      "Admin changes widely", "Risky.", -5
    )),
    q("IT/Security", "What comms to staff help most?", buildChoices(
      "Safety guidance, remote work tips, and reporting contacts", "Practical.", 10,
      "Generic weather email", "OK.", 5,
      "None", "Unhelpful.", -5,
      "Share customer outage data", "Risky.", -5
    )),

    q("HR", "How to handle staffing?", buildChoices(
      "Alternate staffing plans and remote options", "Keeps service.", 10,
      "No plan", "Chaos.", 5,
      "Force everyone on-site", "Unsafe.", -5,
      "Cancel PTO across org", "Overly punitive.", -5
    )),
    q("HR", "What guidance should go to employees?", buildChoices(
      "Safety, pay policies, and remote expectations", "Clarity.", 10,
      "'Be careful' only", "Light.", 5,
      "None", "Confusion.", -5,
      "Share customer phone lists", "Risky.", -5
    )),
    q("HR", "What support is useful post-storm?", buildChoices(
      "EAP reminders and supervisor check-ins", "Helpful.", 10,
      "None", "Missed support.", 5,
      "Mandatory office return instantly", "Insensitive.", -5,
      "Publicly rank absences", "Counterproductive.", -5
    )),

    q("Finance", "How to manage cash and liquidity?", buildChoices(
      "Increase cash at open branches and monitor withdrawals", "Practical.", 10,
      "Do nothing", "Weak.", 5,
      "Shut all ATMs", "Too blunt.", -5,
      "Announce unlimited cash", "Risky.", -5
    )),
    q("Finance", "What to track for later claims?", buildChoices(
      "Document expenses and lost revenue with incident tags", "Supports recovery.", 10,
      "Nothing specifically", "Missed opportunity.", 5,
      "Only large costs", "Incomplete.", -5,
      "Share internal numbers publicly", "Risky.", -5
    )),
    q("Finance", "What cadence for leadership updates?", buildChoices(
      "Daily during outage, taper after", "Keeps alignment.", 10,
      "Weekly only", "Slow.", 5,
      "None", "Opaque.", -5,
      "Raw dump", "Noisy.", -5
    )),

    q("Loans", "How to manage loan servicing with closures?", buildChoices(
      "Alternate options and remote servicing where possible", "Customer-friendly.", 10,
      "Pause everything", "Too blunt.", 5,
      "Ignore customer needs", "Harmful.", -5,
      "Promise unrealistic timelines", "Backfires.", -5
    )),
    q("Loans", "What forbearance guidance fits?", buildChoices(
      "Case-by-case for directly impacted customers", "Balanced.", 10,
      "Blanket forbearance", "Overly broad.", 5,
      "None", "Rigid.", -5,
      "Informal promises", "Risky.", -5
    )),
    q("Loans", "How to handle appraisals delayed by outages?", buildChoices(
      "Document delays and use interim measures", "Practical.", 10,
      "Suspend all appraisals", "Too blunt.", 5,
      "Accept unofficial valuations", "Risky.", -5,
      "Skip for small loans", "Non-compliant.", -5
    )),

    q("Accounting", "What is the right accounting posture?", buildChoices(
      "Track manual entries and variances centrally", "Controls/audit.", 10,
      "Local ad-hoc tracking", "Inconsistent.", 5,
      "Ignore differences", "Risky.", -5,
      "Share ledgers externally", "Risky.", -5
    )),
    q("Accounting", "What to do with credits/fees tied to outages?", buildChoices(
      "Record with incident tags and rationale", "Audit-ready.", 10,
      "Lump later", "Opaque.", 5,
      "Ignore", "Backlog.", -5,
      "Offset arbitrarily", "Non-compliant.", -5
    )),
    q("Accounting", "What reporting helps?", buildChoices(
      "Daily incident cost summaries", "Keeps alignment.", 10,
      "Weekly only", "Slow.", 5,
      "None", "Opaque.", -5,
      "Raw expense dumps", "Noisy.", -5
    )),

    q("Deposits", "How to manage branch customer volume?", buildChoices(
      "Clear signage, alternatives, and queue mgmt", "Reduces friction.", 10,
      "Ask to return later", "Weak.", 5,
      "Promise instant service", "Risky.", -5,
      "Share internal maps", "Risky.", -5
    )),
    q("Deposits", "What to communicate on ATM outages?", buildChoices(
      "Status page and alternatives; update cadence", "Sets expectations.", 10,
      "Generic note", "Light.", 5,
      "No comms", "Confusing.", -5,
      "Exact time promises", "Risky.", -5
    )),
    q("Deposits", "How to handle disputes and credits?", buildChoices(
      "Flag incident-related items for faster handling", "Traceable.", 10,
      "Normal processing only", "Slow.", 5,
      "Suspend handling", "Harmful.", -5,
      "Share screenshots", "Risky.", -5
    )),
  ]
};

/* ------------------------- SCENARIO 6 ------------------------- */
const SCENARIO_INSIDER = {
  key: "insider-threat-terminated-employee",
  title: "Insider ThreatTerminated Employee",
  description: "A senior loan operations manager was terminated yesterday for performance issues after 12 years with the bank. At 2:47 AM, Security detected multiple failed VPN login attempts from their personal device, followed by successful authentication using a service account the employee had documented 'for emergencies.' Log analysis shows 340MB of data was downloaded before access was revoked at 3:12 AM. The data includes commercial loan files, customer contact lists, and internal pricing models. The employee's LinkedIn now shows them as 'Consultant' at a competing regional bank that launched last month. Legal has confirmed the employee signed an NDA but no non-compete.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "Legal advises that pursuing the former employee aggressively could trigger a wrongful termination countersuit, as the performance issues were disputed. The employee's attorney has already reached out 'to discuss a mutually agreeable resolution.' What approach is most appropriate?",
      buildChoices(
        "Document all evidence of unauthorized access thoroughly, engage outside counsel specializing in trade secrets, assess the strength of both potential claims, and develop a negotiation strategy that protects critical business interests.",
        "Thorough documentation preserves options; specialized counsel provides expertise; claim assessment informs strategy; negotiation focus addresses business reality.",
        10,
        "Pause legal escalation and engage with their attorney to understand what resolution they're proposing before committing to a confrontational approach.",
        "Understanding their position has value but engaging without full evidence documentation may weaken your position; preparation should precede negotiation.",
        5,
        "Immediately file for injunctive relief to prevent the employee from using any downloaded data, establishing a strong legal posture from the outset.",
        "Aggressive action may be warranted but premature filing without full evidence assessment could be unsuccessful and trigger the countersuit.",
        -5,
        "Accept that the data is likely already shared and focus resources on customer notification rather than futile legal action against a former employee.",
        "Defeatist approach abandons legitimate legal remedies; data may not yet be shared and injunctive relief could prevent future harm.",
        -5
      )),
    q("CEO/SVPs", "The competing bank's CEO calls your CEO directly, claiming they knew nothing about the data access and offering to 'cooperate fully.' They suggest keeping the matter private to avoid 'embarrassing both institutions.' What approach is most appropriate?",
      buildChoices(
        "Thank them for the call, make no commitments about confidentiality, document the conversation thoroughly, and consult with counsel before any substantive response or agreement.",
        "Professional acknowledgment maintains options; no commitments preserve flexibility; documentation creates record; counsel consultation ensures informed decisions.",
        10,
        "Accept their offer of cooperation and agree to handle the matter privately, since public disclosure would harm both banks' reputations and customer confidence.",
        "Private resolution may be appropriate but agreeing without counsel involvement and evidence review could waive important rights or remedies.",
        5,
        "Refuse to speak with them directly and route all communication through attorneys to avoid any appearance of improper coordination between competitors.",
        "Legal channels may ultimately be appropriate but refusing a cooperative outreach without consideration may escalate unnecessarily.",
        -5,
        "Demand they immediately terminate the former employee and return all data, threatening regulatory complaints and public disclosure if they refuse.",
        "Aggressive demands in the initial call may be premature and could damage a potentially cooperative resolution; measured response is more appropriate.",
        -5
      )),
    q("CEO/SVPs", "A board member who championed the terminated employee's hiring 12 years ago calls asking for details about 'what went wrong.' They hint that they may raise concerns about management's handling at the next board meeting. What approach is most appropriate?",
      buildChoices(
        "Provide a factual briefing appropriate for board members, acknowledge this will be formally presented at the board meeting, and avoid relitigating the termination decision in informal conversation.",
        "Factual briefing respects their role; formal presentation commitment ensures proper governance; avoiding termination debate keeps focus on the incident.",
        10,
        "Defer all discussion until the formal board presentation to ensure all directors receive the same information simultaneously.",
        "Equal information is appropriate but stonewalling a board member asking legitimate questions may increase their concerns.",
        5,
        "Provide full details about both the termination reasoning and the data incident to address their concerns comprehensively and prevent board-level conflict.",
        "Full details in informal conversation may create inconsistency with formal presentation; personnel matters warrant careful handling.",
        -5,
        "Remind the board member that operational personnel decisions are management's responsibility and board second-guessing undermines executive authority.",
        "Governance boundaries exist but dismissing board member concerns about a significant incident may escalate rather than resolve the situation.",
        -5
      )),

    // IT/Security
    q("IT/Security", "Forensic analysis reveals the 'emergency' service account was created by the employee 18 months ago with IT management approval for a specific project, but was never decommissioned. The account had broader access than documented. What approach is most appropriate?",
      buildChoices(
        "Immediately audit all service accounts for similar issues, implement mandatory expiration and access reviews, document this gap for the incident record, and assess whether IT management failures contributed to the breach.",
        "Immediate audit addresses systemic risk; mandatory controls prevent recurrence; documentation maintains integrity; management assessment ensures accountability.",
        10,
        "Focus on decommissioning this specific account and strengthening service account procedures going forward without conducting a broader historical audit.",
        "Forward-looking approach addresses future risk but may leave other orphaned accounts with excessive access; broader audit is warranted.",
        5,
        "Treat this as an isolated incident resulting from the employee's deception rather than a systemic control failure, since the original approval was documented.",
        "Original approval doesn't excuse the control gap in decommissioning and access review; systemic issues should be acknowledged.",
        -5,
        "Immediately terminate the IT manager who approved the account creation to demonstrate accountability for the control failure.",
        "Termination may be premature before understanding full context; knee-jerk accountability doesn't address the process failures.",
        -5
      )),
    q("IT/Security", "The downloaded data includes a spreadsheet titled 'Customer_Contacts_Export.xlsx' with 12,000 records. Legal asks whether this constitutes a data breach requiring customer notification. The data includes names, phone numbers, and loan amounts but no SSNs. What approach is most appropriate?",
      buildChoices(
        "Assess notification requirements under applicable state laws (which vary by data elements), document the analysis, consult with privacy counsel, and prepare draft notifications in case they're required.",
        "State-by-state assessment addresses legal variation; documentation supports decisions; counsel consultation ensures compliance; draft preparation enables rapid response if needed.",
        10,
        "Conclude that notification isn't required since SSNs weren't included and the data elements exposed don't meet most breach notification thresholds.",
        "Threshold analysis may be correct in many states but some jurisdictions have broader requirements; full assessment is needed before concluding.",
        5,
        "Notify all 12,000 customers immediately to demonstrate the bank takes data protection seriously, regardless of legal requirements.",
        "Proactive notification sounds responsible but may create unnecessary alarm and legal exposure if notification language is imprecise.",
        -5,
        "Wait to see if the data actually appears publicly before making notification decisions, since notification would only be harmful if misuse occurs.",
        "Waiting for evidence of misuse doesn't satisfy legal notification timelines and may allow preventable harm; proactive assessment is required.",
        -5
      )),
    q("IT/Security", "Security identifies that the employee also had access to the bank's GitHub repository containing proprietary loan pricing algorithms. Download logs are ambiguousthey may or may not have accessed this code. What approach is most appropriate?",
      buildChoices(
        "Assume the code was accessed given their demonstrated intent, rotate any embedded credentials, assess whether the algorithms provide competitive advantage if disclosed, and include this in the legal assessment.",
        "Conservative assumption matches demonstrated behavior; credential rotation addresses immediate risk; competitive assessment informs legal strategy; comprehensive approach is warranted.",
        10,
        "Conclude the code wasn't accessed since logs don't confirm it, and focus investigation resources on the confirmed data exfiltration.",
        "Absence of evidence isn't evidence of absence when dealing with a demonstrated bad actor; conservative assumption is more appropriate.",
        5,
        "Immediately rewrite all loan pricing algorithms to eliminate any competitive value the employee could derive from the potentially stolen code.",
        "Algorithm rewrite may eventually be warranted but immediate rewrite is resource-intensive and may not be necessary if access didn't occur.",
        -5,
        "Disable the GitHub repository entirely until a full code audit can be completed to ensure no backdoors were introduced.",
        "Repository disable is overly disruptive; the concern is data exfiltration, not code modification, given the employee's access pattern.",
        -5
      )),

    // HR
    q("HR", "The terminated employee's former direct reports are asking HR why their manager 'really' left. Rumors are circulating that the termination was unfair and the data incident is being used to justify a bad decision. What approach is most appropriate?",
      buildChoices(
        "Acknowledge that the departure and subsequent incident are being handled appropriately, reinforce that personnel matters are confidential, and provide EAP resources for staff processing the transition.",
        "Appropriate acknowledgment without details respects confidentiality; EAP resources address legitimate employee stress; professional handling maintains trust.",
        10,
        "Share the facts about the unauthorized access to counter the unfair termination narrative and protect the bank's reputation with staff.",
        "Fact-sharing may seem defensive and could violate the former employee's privacy rights; confidentiality should be maintained.",
        5,
        "Tell staff that the rumors are false without providing specifics, trusting that a clear denial will end speculation.",
        "Denial without context may not be credible and could intensify speculation; acknowledgment with confidentiality boundaries is better.",
        -5,
        "Ignore the rumors since engaging with them gives them credibility and they'll die down once the situation is resolved.",
        "Ignoring allows harmful narratives to solidify; appropriate acknowledgment with boundaries is more effective than silence.",
        -5
      )),
    q("HR", "The employee's emergency contacttheir spousecalls HR demanding to know why their husband/wife was 'treated so unfairly' and threatening to 'go to the media' about the bank's 'toxic management.' What approach is most appropriate?",
      buildChoices(
        "Listen respectfully, explain that personnel matters are confidential and you cannot discuss details, provide contact information for the employee's attorney if one is involved, and document the call.",
        "Respectful listening acknowledges their distress; confidentiality explanation is accurate; attorney referral is appropriate; documentation protects the bank.",
        10,
        "Explain that the employee's unauthorized access after termination justifies the bank's position and they should advise their spouse to cooperate with the investigation.",
        "Sharing investigation details with family members is inappropriate and could compromise legal position; confidentiality must be maintained.",
        5,
        "Transfer the call to legal to handle, since this appears to be a precursor to litigation and HR shouldn't be involved.",
        "Legal involvement may be appropriate but abrupt transfer without human acknowledgment may escalate the situation; initial HR response is appropriate.",
        -5,
        "Tell them that media contact would be inadvisable given what the bank knows about their spouse's actions, implying the bank could make counter-disclosures.",
        "Threatening counter-disclosure is inappropriate and potentially defamatory; professional response without implied threats is required.",
        -5
      )),
    q("HR", "Exit interview notes from two months ago show the employee expressed frustration about being 'passed over' for promotion and feeling 'undervalued.' These notes weren't escalated as a potential insider threat indicator. What approach is most appropriate?",
      buildChoices(
        "Review the exit interview process for threat indicators that should trigger escalation, implement enhanced screening procedures, but avoid punishing the HR staff member who conducted the interview for not predicting this outcome.",
        "Process review addresses systemic gap; enhanced procedures improve future detection; avoiding punishment recognizes that hindsight identification is easier than real-time.",
        10,
        "Accept that exit interviews aren't designed to identify insider threats and this indicator wouldn't have been actionable at the time anyway.",
        "Acceptance may be partially accurate but dismissing the learning opportunity misses a chance to improve threat detection.",
        5,
        "Implement mandatory exit interview escalation for any negative sentiment to ensure potential threats are identified, even if this increases false positives significantly.",
        "Mandatory escalation for all negative sentiment would overwhelm security resources and stigmatize normal employee frustrations.",
        -5,
        "Discipline the HR staff member who conducted the exit interview for failing to recognize and escalate the warning signs.",
        "Discipline for not predicting unpredictable behavior is unfair and will discourage thorough exit interviews in the future.",
        -5
      )),

    // Finance
    q("Finance", "The downloaded pricing models could allow the competing bank to undercut your commercial loan pricing. Early analysis suggests potential revenue impact of $2-5M annually if the models are used. Insurance may cover some losses but litigation is required. What approach is most appropriate?",
      buildChoices(
        "Quantify the competitive exposure with documented assumptions, assess insurance coverage and litigation costs, develop pricing response scenarios, and present the board with strategic options including their financial implications.",
        "Quantified exposure informs decisions; insurance assessment identifies recovery options; pricing scenarios address competition; board presentation enables governance.",
        10,
        "Immediately adjust pricing to eliminate the competitive advantage the stolen models could provide, accepting margin compression to protect market position.",
        "Immediate pricing changes may be premature before understanding whether the models will actually be used; reactive changes have their own costs.",
        5,
        "Focus on litigation to recover damages rather than pricing changes, since the competitor's use of stolen models should be stoppable through legal action.",
        "Litigation focus is appropriate but relying solely on legal remedies ignores the business reality that injunctions take time; parallel planning is needed.",
        -5,
        "Accept the revenue loss as a cost of the incident and focus resources on customer retention rather than pricing competition or litigation.",
        "Defeatist approach abandons legitimate remedies and competitive response options; proactive strategy development is appropriate.",
        -5
      )),
    q("Finance", "The former employee had approval authority for fee waivers up to $10,000. Audit wants to review all waivers they approved in the past 12 months for potential patterns that weren't previously flagged. This will require significant staff time. What approach is most appropriate?",
      buildChoices(
        "Approve the review with appropriate scopingfocus on unusual patterns, customer relationships, and waivers near the authority limitrather than examining every transaction with equal depth.",
        "Scoped review balances thoroughness with efficiency; focus areas target highest-risk waivers; risk-based approach is more effective than comprehensive review.",
        10,
        "Conduct a complete review of all waivers regardless of characteristics to ensure nothing is missed and the audit is defensible.",
        "Complete review is thorough but may not be cost-effective; risk-based scoping is more appropriate for this type of review.",
        5,
        "Defer the waiver review until the primary data exfiltration investigation is complete to avoid distracting from the main incident.",
        "Deferral may miss time-sensitive patterns; parallel investigation with appropriate scoping is manageable.",
        -5,
        "Decline the review as outside the scope of the current incident since there's no evidence the employee engaged in fee waiver fraud.",
        "Absence of evidence doesn't mean fraud didn't occur; an employee who stole data may have engaged in other misconduct worth examining.",
        -5
      )),
    q("Finance", "The incident response and potential litigation costs are estimated at $150-300K, which wasn't budgeted. The CFO asks how to account for this and whether board notification of the unbudgeted expense is required. What approach is most appropriate?",
      buildChoices(
        "Fund from operational contingency with documented justification, provide the board finance committee with expense estimates as part of the incident briefing, and update projections to reflect the financial impact.",
        "Contingency funding is appropriate; board notification through normal governance is warranted for this magnitude; updated projections maintain accuracy.",
        10,
        "Absorb the costs within existing department budgets by deferring other planned expenses, avoiding formal contingency usage and board notification.",
        "Absorption may work mechanically but obscures the true cost of the incident and may defer important planned work.",
        5,
        "Request emergency board approval before incurring any costs to ensure proper governance of unbudgeted expenditure.",
        "Emergency approval for incident response costs may delay necessary actions; contingency exists for this purpose with appropriate documentation.",
        -5,
        "Book the costs as incurred and explain the variance in the next regular financial review rather than proactive disclosure.",
        "Reactive disclosure of significant unbudgeted costs may raise governance concerns; proactive communication is more appropriate.",
        -5
      )),

    // Loans
    q("Loans", "The downloaded files include detailed pricing and terms for 47 pending commercial loan proposals. Several of these deals are in competitive situations where the other bank being considered is the one that hired your former employee. What approach is most appropriate?",
      buildChoices(
        "Contact affected prospects to inform them of the situation without disclosing competitive details, offer to re-evaluate their proposals if they have concerns, and assess whether any pricing adjustments are warranted to retain the relationships.",
        "Prospect notification shows transparency; re-evaluation offer demonstrates commitment; pricing assessment addresses competitive reality.",
        10,
        "Immediately match or beat any competing offers from the other bank to prevent losing deals due to the stolen information.",
        "Reactive matching may be premature and could unnecessarily reduce margins on deals that weren't at risk; assessment before action is better.",
        5,
        "Say nothing to prospects since disclosing the incident might cause them to lose confidence in the bank's security and move to competitors anyway.",
        "Non-disclosure may seem protective but prospects who later learn their confidential information was compromised will feel deceived.",
        -5,
        "Withdraw from the competitive situations entirely since you can't compete fairly against your own stolen pricing information.",
        "Withdrawal abandons relationships and revenue without exploring options; competitive response is possible even with information disadvantage.",
        -5
      )),
    q("Loans", "A commercial borrower whose loan file was downloaded calls asking if their information was stolen. They're concerned because they're in the middle of a contentious business dispute and their loan terms are confidential. What approach is most appropriate?",
      buildChoices(
        "Confirm their file was among those accessed, explain what information was included, describe the steps being taken to protect their interests, and offer to discuss any specific concerns they have.",
        "Honest confirmation respects their right to know; information description enables their own assessment; protection steps show action; discussion offer addresses their specific situation.",
        10,
        "Tell them you're not able to confirm or deny specific files but that the bank is taking all appropriate steps to address the situation.",
        "Non-confirmation when you know their file was accessed is misleading; they have a right to know their information was compromised.",
        5,
        "Assure them that even if their file was accessed, it won't be misused because legal action is being taken against the former employee.",
        "Legal action doesn't guarantee non-misuse; false assurance about protection you can't guarantee is inappropriate.",
        -5,
        "Advise them to consult their own attorney about any concerns and that the bank cannot provide legal advice about their situation.",
        "Attorney referral is appropriate but deflecting without first confirming what happened and what the bank is doing appears evasive.",
        -5
      )),
    q("Loans", "The loan operations team asks whether they should change any procedures given what happened. The former employee's access was appropriate for their rolethe problem was post-termination access through the service account. What approach is most appropriate?",
      buildChoices(
        "Acknowledge the access control gap was the primary issue, but also review whether role-based access was appropriately scoped, implement enhanced termination procedures, and use this as a training opportunity.",
        "Gap acknowledgment is accurate; access review may identify improvements; enhanced procedures prevent recurrence; training opportunity strengthens culture.",
        10,
        "Confirm that no operational procedure changes are needed since the employee's pre-termination access was appropriate and the failure was in access deprovisioning.",
        "Deprovisioning was the primary failure but declining any procedure review misses opportunity to strengthen overall controls.",
        5,
        "Implement significant restrictions on loan operations access to prevent any future employee from having this level of data access.",
        "Broad restrictions may impair operations; the issue was termination controls, not excessive operational access.",
        -5,
        "Require dual control for all loan system access to ensure no single employee can access sensitive data without oversight.",
        "Dual control for routine access would significantly impair productivity; the issue was post-termination access, not operational access levels.",
        -5
      )),

    // Accounting
    q("Accounting", "External auditors are on-site and have heard about the incident. They're asking whether it affects their assessment of internal controls over financial reporting. The data stolen was operational, not financial systems. What approach is most appropriate?",
      buildChoices(
        "Explain the incident scope, distinguish between operational and financial system access, provide documentation of the access control gap and remediation, and let auditors draw their own conclusions about control implications.",
        "Transparent explanation enables auditor assessment; scope distinction is relevant; documentation demonstrates responsiveness; auditor independence is respected.",
        10,
        "Assure auditors that the incident has no implications for financial reporting controls since no financial systems were accessed or compromised.",
        "Assurance may be accurate but making the determination for auditors rather than providing facts for their assessment is inappropriate.",
        5,
        "Request auditors defer their control assessment until the incident investigation is complete to avoid drawing conclusions on incomplete information.",
        "Deferral may seem reasonable but auditors have their own timelines; providing available information is more appropriate than requesting delays.",
        -5,
        "Minimize discussion of the incident with auditors since it's an operational matter being handled by security and legal.",
        "Minimizing suggests concealment; auditors should receive appropriate information to make their own assessments.",
        -5
      )),
    q("Accounting", "Legal asks Accounting to track all incident-related costs separately for potential insurance claims and litigation support. The costs are spread across multiple departments and some are staff time that wouldn't normally be tracked. What approach is most appropriate?",
      buildChoices(
        "Establish a dedicated cost code, implement time tracking for key personnel involved in incident response, coordinate with departments on expense coding, and document the methodology for insurance and legal purposes.",
        "Dedicated tracking enables claims; time tracking captures otherwise hidden costs; coordination ensures completeness; methodology documentation supports defensibility.",
        10,
        "Track only direct out-of-pocket costs like legal fees and forensics since staff time is difficult to quantify and may not be recoverable.",
        "Direct costs only may understate true impact; staff time is often recoverable with proper documentation and methodology.",
        5,
        "Begin tracking from today forward and don't attempt to reconstruct costs already incurred since the documentation would be imprecise.",
        "Forward-only tracking misses potentially significant costs already incurred; reasonable reconstruction is better than abandoning past costs.",
        -5,
        "Estimate total costs at a round number based on similar incidents rather than detailed tracking, since precision isn't possible anyway.",
        "Round number estimation may not be supportable for insurance claims; documented actual costs, even if imprecise, are more defensible.",
        -5
      )),
    q("Accounting", "The former employee's final paycheck and accrued PTO payout were processed before the data theft was discovered. Legal asks whether these amounts can be recovered or offset against any claim. What approach is most appropriate?",
      buildChoices(
        "Document the amounts paid, consult with counsel on recovery options under employment law and the pending legal action, but don't assume recovery is possible or initiate offset without legal guidance.",
        "Documentation preserves options; counsel consultation addresses legal complexities; avoiding assumptions prevents inappropriate actions.",
        10,
        "Place a hold on any future payments to the employee and offset the final paycheck amounts against any damages claimed in litigation.",
        "Unilateral offset may violate employment law regardless of the employee's misconduct; legal guidance is required before any recovery action.",
        5,
        "Write off the amounts as unrecoverable since pursuing recovery of routine final payments would appear petty and complicate settlement negotiations.",
        "Write-off may be premature; the amounts may be legitimately recoverable as part of broader litigation resolution.",
        -5,
        "Demand immediate repayment of all amounts paid after the misconduct began, since the employee obtained them through continued employment they should have forfeited.",
        "Repayment demands without legal basis could create additional claims; employment law doesn't generally work this way.",
        -5
      )),

    // Deposits
    q("Deposits", "A branch manager reports that the terminated employee came into a branch yesterday (before the data theft was discovered) and withdrew $5,000 from their personal account. The manager wonders if this should have been flagged. What approach is most appropriate?",
      buildChoices(
        "Confirm the withdrawal was from the employee's own funds which they were entitled to access, document the inquiry, and use this as a teaching moment about the difference between suspicious activity and normal banking.",
        "Entitlement confirmation is accurate; documentation creates record; teaching moment addresses the confusion without criticism.",
        10,
        "Review all of the former employee's personal account activity for potential patterns that might indicate advance planning or illicit funds.",
        "Activity review may be warranted but should be done through proper channels, not triggered by a routine personal withdrawal.",
        5,
        "Criticize the branch manager for not flagging the visit of a recently terminated employee as suspicious activity.",
        "Criticism is unfair since personal banking by former employees is normal; the manager had no way to know about the later data theft.",
        -5,
        "Place a hold on the former employee's personal accounts pending investigation to preserve any potential assets.",
        "Account holds without legal basis could expose the bank to liability; personal accounts aren't related to the employment dispute.",
        -5
      )),
    q("Deposits", "Customer-facing staff are asking what to say if customers mention seeing news coverage of the 'data breach' at the bank. Local media has picked up the story with some inaccuracies. What approach is most appropriate?",
      buildChoices(
        "Provide staff with accurate talking points that acknowledge the incident involved a former employee and internal data, clarify it wasn't a hacking or system breach, and emphasize customer account security wasn't compromised.",
        "Talking points ensure consistency; acknowledgment shows transparency; clarification corrects inaccuracies; customer security emphasis addresses their likely concern.",
        10,
        "Instruct staff to say they can't comment on matters under investigation and direct customers to the bank's official statement.",
        "Investigation deflection may seem safe but comes across as evasive for a story already in the news; prepared talking points are better.",
        5,
        "Tell staff to explain that media coverage is inaccurate and the bank's systems were never breached by hackers.",
        "Correction focus may come across as defensive; leading with acknowledgment and then clarification is more effective.",
        -5,
        "Advise staff to avoid the topic entirely and redirect conversations to the customer's banking needs.",
        "Topic avoidance when customers raise concerns appears dismissive; addressing their questions maintains trust.",
        -5
      )),
    q("Deposits", "A customer who runs a small business asks whether their confidential financial information could have been accessed. They're not a commercial loan customertheir relationship is deposit-only. The downloaded data was from the loan system. What approach is most appropriate?",
      buildChoices(
        "Confirm that the accessed data was from the commercial loan system and their deposit relationship information wasn't included, while offering to answer any other questions they have about the incident.",
        "Accurate confirmation addresses their specific concern; scope clarification is reassuring; question offer demonstrates openness.",
        10,
        "Tell them you can't confirm or deny what specific data was accessed but their deposits are safe and FDIC insured.",
        "Non-confirmation when you can provide accurate reassurance is unnecessarily evasive; deposit safety is different from data access.",
        5,
        "Explain that you can't discuss the incident with customers due to the ongoing investigation and legal proceedings.",
        "Blanket refusal to discuss with a customer asking legitimate questions appears secretive and may damage the relationship.",
        -5,
        "Suggest they review their account statements and credit reports to check for any signs of identity theft or fraud.",
        "Identity theft monitoring advice implies their data may have been compromised when it wasn't; this creates unnecessary alarm.",
        -5
      )),
  ]
};

/* ------------------------- SCENARIO 7 ------------------------- */
const SCENARIO_VENDOR_OUTAGE = {
  key: "third-party-core-vendor-outage",
  title: "Third-Party Core Vendor Outage",
  description: "A critical core vendor experiences a prolonged outage affecting core processing, online banking, and debit card authorizations. The bank must coordinate response with limited control over restoration timelines.",
  questions: [
    q("CEO/SVPs", "What’s the leadership posture on day one?", buildChoices(
      "Activate incident command with vendor liaison and update cadence", "Provides structure and clear comms.", 10,
      "Let vendor lead entirely without internal structure", "Loss of control and slower internal response.", 5,
      "Stay silent until vendor resolves everything", "Creates confusion and harms trust.", -5,
      "Promise recovery times publicly based on vendor guesses", "High risk and often wrong.", -5
    )),
    q("CEO/SVPs", "How to handle media inquiries about the vendor?", buildChoices(
      "Acknowledge impact and steps; avoid blaming; focus on customer options", "Professional and credible.", 10,
      "Blame vendor by name and share ticket details", "Risky and unprofessional.", 5,
      "Say nothing at all", "Perceived evasiveness.", -5,
      "Promise credits before analysis", "Risky.", -5
    )),
    q("CEO/SVPs", "What board comms cadence fits?", buildChoices(
      "Daily concise updates on status, risks, and actions", "Keeps governance aligned.", 10,
      "Weekly only", "Too slow.", 5,
      "No updates", "Opaque.", -5,
      "Raw vendor tickets forwarded", "Noisy and risky.", -5
    )),

    q("IT/Security", "What technical focus is key?", buildChoices(
      "Monitor interfaces, failovers, and fraud vectors; prepare staged restore", "Manages risk proactively.", 10,
      "Turn off monitoring to reduce noise", "Risky.", -5,
      "Large config changes ad-hoc", "Risky.", -5,
      "Share admin access with vendor widely", "Risky.", -5
    )),
    q("IT/Security", "What should be logged carefully?", buildChoices(
      "Manual workarounds and exceptions with approvals", "Supports later reconciliation.", 10,
      "Nothing beyond normal", "Missed traceability.", 5,
      "Raw system dumps to external parties", "Risky.", -5,
      "Disable logs for performance", "Risky.", -5
    )),
    q("IT/Security", "How to handle customer data shared with vendor?", buildChoices(
      "Ensure minimum necessary data and proper agreements", "Reduces risk.", 10,
      "Share freely for speed", "Risky.", -5,
      "Refuse any sharing", "May block recovery.", 5,
      "Use personal channels", "Risky.", -5
    )),

    q("HR", "How to support customer-facing staff?", buildChoices(
      "Talking points, escalation paths, and wellness guidance", "Practical support.", 10,
      "No support; let managers handle", "Inconsistent.", 5,
      "Daily mandatory townhalls", "Disruptive.", -5,
      "Public blame messaging", "Risky.", -5
    )),
    q("HR", "What scheduling guidance helps?", buildChoices(
      "Pre-approved overtime with central tracking and breaks", "Balances service and well-being.", 10,
      "Unlimited overtime", "Burnout.", 5,
      "Ban overtime", "Service suffers.", -5,
      "No guidance", "Chaotic.", -5
    )),
    q("HR", "How to address misinformation internally?", buildChoices(
      "Frequent factual updates; encourage reporting rumors", "Reduces confusion.", 10,
      "Weekly summary only", "Slow.", 5,
      "Silence to avoid panic", "Rumors grow.", -5,
      "Share vendor details widely", "Risky.", -5
    )),

    q("Finance", "How to treat fee credits?", buildChoices(
      "Define criteria and track incident-related credits separately", "Audit-ready.", 10,
      "Case-by-case only", "Inconsistent.", 5,
      "No credits regardless", "Reputation risk.", -5,
      "Promise blanket credits", "Risky.", -5
    )),
    q("Finance", "What liquidity stance fits?", buildChoices(
      "Increase buffers; monitor outflows/inflows closely", "Prudent.", 10,
      "No changes", "Risky.", 5,
      "Sell assets at discount immediately", "Value loss.", -5,
      "Ignore liquidity for a week", "Dangerous.", -5
    )),
    q("Finance", "What reporting helps leadership?", buildChoices(
      "Daily status on impacts, credits, and risks", "Alignment.", 10,
      "Weekly only", "Slow.", 5,
      "None", "Opaque.", -5,
      "Raw logs", "Noisy.", -5
    )),

    q("Loans", "How should LOS operations adjust?", buildChoices(
      "Prioritize critical funding with dual verification", "Balances service and risk.", 10,
      "Pause everything", "Too blunt.", 5,
      "Proceed normally", "Risky.", -5,
      "Single-approver overrides", "Risky.", -5
    )),
    q("Loans", "How to handle vendor-dependent steps?", buildChoices(
      "Use interim controls; track exceptions", "Practical.", 10,
      "Ignore vendor impact", "Risky.", 5,
      "Accept emailed docs without validation", "Risky.", -5,
      "Promise instant funding", "Risky.", -5
    )),
    q("Loans", "What borrower comms fit?", buildChoices(
      "Explain outage impacts and options", "Sets expectations.", 10,
      "Generic updates only", "Light.", 5,
      "None", "Confusing.", -5,
      "Share internal vendor data", "Risky.", -5
    )),

    q("Accounting", "How to track manual workarounds?", buildChoices(
      "Central log with approvals and evidence", "Audit trail.", 10,
      "Local spreadsheets only", "Inconsistent.", 5,
      "No tracking", "Risky.", -5,
      "Share ledgers externally", "Risky.", -5
    )),
    q("Accounting", "What to do with variances tied to the outage?", buildChoices(
      "Track separately with incident tags and rationale", "Transparent.", 10,
      "Book lump-sum later", "Opaque.", 5,
      "Ignore until month-end", "Backlog.", -5,
      "Offset arbitrarily", "Non-compliant.", -5
    )),
    q("Accounting", "What cadence of updates helps?", buildChoices(
      "Daily incident cost/variance summaries", "Keeps alignment.", 10,
      "Weekly only", "Slow.", 5,
      "None", "Opaque.", -5,
      "Raw dumps", "Noisy.", -5
    )),

    q("Deposits", "How to support branches during outage?", buildChoices(
      "Talking points, alternatives, and queue mgmt", "Reduces friction.", 10,
      "Ask customers to return later", "Weak.", 5,
      "Promise normal service", "Risky.", -5,
      "Share vendor tickets", "Risky.", -5
    )),
    q("Deposits", "What to communicate about debit authorizations?", buildChoices(
      "Explain intermittent declines and alternatives; updates cadence", "Sets expectations.", 10,
      "Say it's fine", "Often wrong.", 5,
      "No comms", "Confusing.", -5,
      "Exact time promises", "Risky.", -5
    )),
    q("Deposits", "How to process dispute volume?", buildChoices(
      "Flag incident-related disputes and prioritize", "Traceable.", 10,
      "Normal processing only", "Slow.", 5,
      "Suspend handling", "Harmful.", -5,
      "Share screenshots", "Risky.", -5
    )),
  ]
};

/* ------------------------- SCENARIO: Regulatory Inquiry ------------------------- */
const SCENARIO_REGULATORY_INQUIRY = {
  key: "regulatory-inquiry-customer-complaints",
  title: "Regulatory Inquiry Triggered by Customer Complaints",
  description:
    "Regulators contact the bank after receiving multiple customer complaints about delays, fees, and inconsistent explanations — before the bank has formally escalated an incident.",
  questions: [

    // CEO/SVPs
    q(
      "CEO/SVPs",
      "Regulators reached out before the bank formally escalated. What is the most defensible leadership approach in the first response?",
      buildChoices(
        "Acknowledge receipt promptly, share verified facts and current scope, describe immediate controls, and set a specific update cadence with a single point of contact.",
        "Shows control, reduces speculation, and prevents contradictions later.",
        10,

        "Acknowledge promptly, explain that validation is in progress, and provide a near-term checkpoint time before sharing details beyond confirmed facts.",
        "Buys time without going silent, but can look thin if overused.",
        5,

        "Provide limited information and redirect detailed questions to individual departments until an internal summary is assembled.",
        "Creates inconsistent narratives and signals weak governance.",
        -5,

        "Wait for a formal written request before responding so the bank is not committed to any early narrative.",
        "Appears evasive and increases scrutiny and urgency.",
        -5
      )
    ),

    // IT/Security
    q(
      "IT/Security",
      "Regulators want a timeline explaining what customers experienced versus what systems recorded. How should IT/Security reconstruct it most credibly?",
      buildChoices(
        "Correlate system logs, ticketing/contact-center data, change records, and staff interviews into a single timeline, clearly labeling what is confirmed vs inferred.",
        "Builds a defensible narrative and avoids overstating certainty.",
        10,

        "Use system-generated logs as the primary source and supplement gaps with SME recollection and incident chat notes.",
        "Often workable, but recollection can be inconsistent under scrutiny.",
        5,

        "Send raw system logs and dashboards without interpretation to avoid claims that could later change.",
        "Lacks context; regulators still need a coherent story and accountability.",
        -5,

        "Delay building a timeline until regulators ask specific questions so effort is not wasted on the wrong format.",
        "Looks reactive and can miss time-sensitive preservation needs.",
        -5
      )
    ),

    // HR
    q(
      "HR",
      "Complaints cite inconsistent explanations at branches and the contact center. What HR action best demonstrates control without implying fault prematurely?",
      buildChoices(
        "Issue interim scripts and escalation rules, run short refresher huddles for frontline roles, and document distribution/acknowledgment for exam defensibility.",
        "Addresses inconsistency fast and creates evidence of corrective action.",
        10,

        "Reinforce existing scripts and ask managers to coach teams while HR collects examples of where messaging diverged.",
        "May help, but risks uneven execution across locations.",
        5,

        "Pause updates to scripts until root cause is fully confirmed so staff are not re-trained multiple times.",
        "Leaves inconsistency in place and increases complaint volume.",
        -5,

        "Address complaints primarily through disciplinary reminders to ensure staff take customer messaging seriously.",
        "Chills reporting and encourages staff to avoid helping customers.",
        -5
      )
    ),

    // Finance
    q(
      "Finance",
      "Customer complaints include fees tied to delays. How should Finance handle reversals while maintaining both fairness and defensibility?",
      buildChoices(
        "Implement a temporary, criteria-based waiver/reversal policy with audit logging, approvals, and reporting so totals and rationale can be explained externally.",
        "Balances customer remediation with control and traceability.",
        10,

        "Handle reversals case-by-case with manager discretion and track totals centrally for later analysis.",
        "Flexible, but inconsistent decisions can create new complaints.",
        5,

        "Pause all reversals until the bank confirms whether the incident qualifies for any remediation policy.",
        "Escalates frustration and increases regulator interest in customer harm.",
        -5,

        "Reverse all fees automatically to reduce complaints quickly, then reconcile later once the incident is understood.",
        "Creates abuse risk and weakens the bank’s ability to justify decisions.",
        -5
      )
    ),

    // Loans
    q(
      "Loans",
      "Loan customers report delayed postings and conflicting guidance. What approach keeps remediation consistent while operations are still stabilizing?",
      buildChoices(
        "Use a standard remediation playbook (scripts, decision criteria, documentation), route exceptions through an approval path, and proactively identify impacted loan segments.",
        "Reduces inconsistency and creates defensible records.",
        10,

        "Provide general guidance and allow lenders to tailor remediation to the customer relationship while tracking outcomes.",
        "Some consistency, but relationship-based exceptions can look unfair.",
        5,

        "Only address issues when customers complain to avoid creating additional workload during stabilization.",
        "Misses silent impacts and increases regulator concern about harm.",
        -5,

        "Delay remediation until regulators provide explicit expectations to avoid rework or second-guessing.",
        "Signals lack of customer-first controls and increases scrutiny.",
        -5
      )
    ),

    // Accounting
    q(
      "Accounting",
      "Regulators request support for fee reversals, posting corrections, and customer impact. What documentation posture best holds up under review?",
      buildChoices(
        "Compile reconciliations, exception logs, and credit rationales with a clear timeline and approvals.",
        "Defensible record of actions and rationale.",
        10,

        "Provide summarized reconciliations first, then add details as requested.",
        "Usable but thinner at the outset.",
        5,

        "Wait to produce documentation until operational recovery is complete so the record can be finalized once.",
        "Reactive and will look opaque during the incident.",
        -5,

        "Rely on verbal explanations from SMEs supported by a few key reports rather than building full documentation.",
        "Weak audit position and easy to challenge.",
        -5
      )
    )

  ]
};

/* ------------------------- SCENARIO: Data Unverifiable ------------------------- */
const SCENARIO_DATA_UNVERIFIABLE = {
  key: "customer-data-correct-unverifiable",
  title: "Customer Data Appears Correct but Cannot Be Fully Verified",
  description:
    "Customers report incorrect balances and transaction histories. Core systems reconcile internally, but supporting logs needed to independently verify accuracy are incomplete due to a prior retention misconfiguration.",
  questions: [

    // CEO / SVPs
    q(
      "CEO/SVPs",
      "How should leadership balance confidence in internal data with the inability to fully prove accuracy to customers and regulators?",
      buildChoices(
        "Acknowledge the verification gap, explain validation steps underway, avoid definitive claims, and commit to remediation if discrepancies are identified.",
        "Maintains credibility by separating confidence from proof.",
        10,

        "State that systems reconcile internally and emphasize confidence in accuracy while additional validation work continues.",
        "Reassuring, but risks appearing dismissive of evidentiary gaps.",
        5,

        "Delay external communication until validation work is complete and evidence gaps are resolved.",
        "Reduces retraction risk but allows speculation to grow.",
        -5,

        "Assert that the data is correct and treat the lack of logs as an internal documentation issue.",
        "Overconfidence increases regulatory and reputational exposure.",
        -5
      )
    ),

    // IT / Security
    q(
      "IT/Security",
      "What is the most defensible way to validate data integrity when primary logs are incomplete?",
      buildChoices(
        "Correlate alternative system records, reconstruct timelines where possible, and document both findings and validation limits.",
        "Demonstrates diligence despite incomplete evidence.",
        10,

        "Rely on system reconciliation results and anomaly detection outputs to support data accuracy.",
        "Technically sound but weaker without independent corroboration.",
        5,

        "Pause validation until missing logs can be recovered or recreated.",
        "Delays resolution without guaranteeing better evidence.",
        -5,

        "Conclude validation is unnecessary since no active discrepancies are visible.",
        "Creates exposure if later inconsistencies emerge.",
        -5
      )
    ),

    // HR
    q(
      "HR",
      "How should HR respond to employee stress and accountability concerns arising from customer-facing uncertainty?",
      buildChoices(
        "Clarify expectations, reinforce escalation paths, and provide support resources while investigations continue.",
        "Reduces fear-driven errors and protects morale.",
        10,

        "Remind staff to follow existing procedures and direct questions to management.",
        "Maintains order but may not address anxiety.",
        5,

        "Limit communication to avoid distracting staff during remediation work.",
        "Silence increases uncertainty and rumor.",
        -5,

        "Emphasize disciplinary consequences for errors to reinforce accountability.",
        "Erodes trust and discourages transparency.",
        -5
      )
    ),

    // Finance
    q(
      "Finance",
      "How should Finance assess financial exposure when transaction accuracy cannot be fully substantiated?",
      buildChoices(
        "Develop estimated exposure ranges with documented assumptions and clear limitations.",
        "Balances decision-making needs with defensibility.",
        10,

        "Provide point estimates based on reconciled balances and adjust if discrepancies emerge.",
        "Useful operationally but weaker for audit scrutiny.",
        5,

        "Avoid quantifying exposure until full verification is possible.",
        "Limits misstatement risk but delays risk awareness.",
        -5,

        "Assume no exposure exists until errors are proven.",
        "Creates blind spots and regulatory concern.",
        -5
      )
    ),

    // Loans
    q(
      "Loans",
      "How should loan payoff disputes be handled when supporting transaction history cannot be fully verified?",
      buildChoices(
        "Review available records, disclose verification limits, and offer structured dispute escalation.",
        "Balances fairness with operational control.",
        10,

        "Allow lenders discretion to resolve disputes using their judgment.",
        "Flexible but inconsistent across customers.",
        5,

        "Address disputes only if customers escalate beyond first contact.",
        "Misses silent or less assertive customers.",
        -5,

        "Defer all dispute resolution until validation is complete.",
        "Increases customer frustration and complaint risk.",
        -5
      )
    ),

    // Accounting
    q(
      "Accounting",
      "How should Accounting support auditability when transaction evidence is incomplete?",
      buildChoices(
        "Compile available documentation, clearly identify evidence gaps, and explain compensating controls.",
        "Strengthens audit defensibility despite limitations.",
        10,

        "Provide summarized reconciliations without detailing validation gaps.",
        "Technically accurate but lacks transparency.",
        5,

        "Wait for auditors to request specific documentation before acting.",
        "Appears reactive and unprepared.",
        -5,

        "Rely on verbal explanations supported by system confidence.",
        "Weakens audit position and credibility.",
        -5
      )
    )

  ]
};
/* ------------------------- SCENARIO 8 ------------------------- */
const SCENARIO_INSIDER_FRAUD = {
  key: "insider-fraud-discovered-operations",
  title: "Insider Fraud Discovered in Operations",
  description: "Unusual reconciliation variances reveal a potential insider fraud scheme in Operations. Leadership must coordinate investigation, controls, and communications while maintaining service.",
  questions: [
    q("CEO/SVPs", "What is leadership’s first move?", buildChoices(
      "Activate incident governance with legal and define comms cadence", "Provides structure and control.", 10,
      "Quiet internal huddle only", "Less structured.", 5,
      "Silence until everything is known", "Rumors and risk.", -5,
      "Publicly blame a department", "Unprofessional and risky.", -5
    )),
    q("CEO/SVPs", "How should public communication be handled?", buildChoices(
      "Share nothing publicly unless customer impact exists; coordinate with counsel/regulators", "Balanced.", 10,
      "Issue a press release", "Likely premature.", 5,
      "Detail the suspected employee actions", "Risky.", -5,
      "Promise law enforcement arrests", "Premature.", -5
    )),
    q("CEO/SVPs", "What support should be given to impacted teams?", buildChoices(
      "Resources, approvals, and immediate risk mitigations", "Keeps operations safe.", 10,
      "Request weekly summaries only", "Slow.", 5,
      "No support", "Unhelpful.", -5,
      "Public finger-pointing", "Counterproductive.", -5
    )),

    q("IT/Security", "What controls are critical now?", buildChoices(
      "Access review and logging for accounts tied to the scheme", "Targets risk.", 10,
      "No changes until confirmed", "Late.", 5,
      "Disable broad systems", "Overly disruptive.", -5,
      "Share logs widely", "Risky.", -5
    )),
    q("IT/Security", "How to preserve evidence?", buildChoices(
      "Forensic imaging and chain-of-custody procedures", "Essential.", 10,
      "Delete suspicious data", "Destroys evidence.", -5,
      "Let staff copy data to review", "Risky.", -5,
      "Share images externally without agreements", "Risky.", -5
    )),
    q("IT/Security", "What monitoring should be added?", buildChoices(
      "Targeted alerts on relevant transactions and access", "Focused.", 10,
      "None", "Missed detection.", 5,
      "Everything everywhere", "Noisy.", -5,
      "Disable logs to reduce noise", "Risky.", -5
    )),

    q("HR", "What HR actions are appropriate?", buildChoices(
      "Coordinate with legal; place individuals on leave if warranted", "Balanced.", 10,
      "Public shaming", "Inappropriate.", -5,
      "Immediate terminations without process", "Risky.", -5,
      "Ignore until concluded", "Risky.", 5
    )),
    q("HR", "What communications to staff are helpful?", buildChoices(
      "Facts-only internal note about enhanced controls and reporting paths", "Sets expectations.", 10,
      "Detailed allegations", "Risky.", 5,
      "No communication", "Rumors grow.", -5,
      "Share PII widely", "Risky.", -5
    )),
    q("HR", "How to support team morale?", buildChoices(
      "Manager check-ins and EAP reminders", "Helpful.", 10,
      "Ignore concerns", "Missed support.", 5,
      "Mandate overtime", "Burnout.", -5,
      "Accuse teams broadly", "Harmful.", -5
    )),

    q("Finance", "What financial controls should tighten immediately?", buildChoices(
      "Dual control and enhanced approvals on affected processes", "Reduces risk.", 10,
      "No change", "Risky.", 5,
      "Single person overrides", "Risky.", -5,
      "Pause all operations", "Too blunt.", -5
    )),
    q("Finance", "What reporting cadence helps leadership?", buildChoices(
      "Daily metrics on affected accounts and exceptions", "Keeps alignment.", 10,
      "Weekly only", "Slow.", 5,
      "None", "Opaque.", -5,
      "Raw ledger dumps", "Noisy.", -5
    )),
    q("Finance", "How to coordinate with law enforcement/regulators?", buildChoices(
      "Through counsel, sharing necessary facts and documentation", "Prudent.", 10,
      "Direct sharing by any staff", "Risky.", 5,
      "No coordination", "Risky.", -5,
      "Promise arrests publicly", "Premature.", -5
    )),

    q("Loans", "What LOS changes are appropriate?", buildChoices(
      "Restrict risky functions and add reviews", "Focused.", 10,
      "No change", "Risk remains.", 5,
      "Disable LOS entirely", "Too blunt.", -5,
      "Grant broader admin rights", "Risky.", -5
    )),
    q("Loans", "How should borrower comms be treated?", buildChoices(
      "Only if impacted; coordinated with counsel", "Prudent.", 10,
      "Proactive mass notice", "Overkill.", 5,
      "No notice regardless", "Risky.", -5,
      "Share internal allegations", "Risky.", -5
    )),
    q("Loans", "What to do with suspicious adjustments?", buildChoices(
      "Freeze and review with dual approvals", "Controls risk.", 10,
      "Allow small adjustments", "Risky.", 5,
      "Proceed with history-based trust", "Risky.", -5,
      "Let borrowers self-verify", "Risky.", -5
    )),

    q("Accounting", "How to log potential losses?", buildChoices(
      "Track separately; preserve evidence and approvals", "Audit-ready.", 10,
      "Mix into normal expenses", "Opaque.", 5,
      "Ignore until confirmed", "Late.", -5,
      "Share broadly", "Risky.", -5
    )),
    q("Accounting", "What reconciliation changes are needed?", buildChoices(
      "Tighter review on impacted accounts/processes", "Focused.", 10,
      "Normal cadence only", "May miss issues.", 5,
      "Suspend recon entirely", "Risky.", -5,
      "Local-only tracking", "Inconsistent.", -5
    )),
    q("Accounting", "What documentation posture helps later reviews?", buildChoices(
      "Central exception logs and case notes", "Traceable.", 10,
      "Emails only", "Messy.", 5,
      "No docs", "Risky.", -5,
      "Personal notebooks", "Inconsistent.", -5
    )),

    q("Deposits", "What changes to account maintenance are warranted?", buildChoices(
      "Dual review on high-risk changes and freeze suspicious activity", "Reduces risk.", 10,
      "No changes", "Risk remains.", 5,
      "Disable account maintenance entirely", "Too blunt.", -5,
      "Allow wide exceptions", "Risky.", -5
    )),
    q("Deposits", "How to respond to customer inquiries?", buildChoices(
      "Only if impacted; provide factual guidance", "Professional.", 10,
      "Proactive mass statements", "Overkill.", 5,
      "No responses", "Harmful.", -5,
      "Share internal details", "Risky.", -5
    )),
    q("Deposits", "What internal guidance helps branches?", buildChoices(
      "Facts-only talking points and escalation paths", "Prepares staff.", 10,
      "Let branches improvise", "Inconsistent.", 5,
      "No guidance", "Confusing.", -5,
      "Share sensitive case info", "Risky.", -5
    )),
  ]
};

/* ------------------------- SCENARIO 9 ------------------------- */
const SCENARIO_ACH_FAILURE = {
  key: "failed-ach-file-sent-to-fed",
  title: "Failed ACH File Sent to Federal Reserve",
  description: "At 6:47 AM, the overnight ACH origination file transmitted to the Federal Reserve contained corrupted batch headers affecting 4,200 transactions worth $12.3M. The Fed rejected the file at 7:15 AM but 847 transactions from a prior window had already settled with incorrect effective dates. Payroll credits for 23 commercial clients are delayed, consumer bill payments are failing at merchant endpoints, and your call center is experiencing 340% normal volume. The Fed's next processing window closes in 90 minutes.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "The Fed operations desk calls asking whether you want to resubmit before the 9:00 AM window closes or wait for the afternoon window. Your operations team says they can prepare a corrected file in 60 minutes but hasn't identified root cause. What approach is most appropriate?",
      buildChoices(
        "Request the afternoon window to allow time for root cause identification and file validation, while implementing manual processing for time-critical payrolls through Fedwire.",
        "Afternoon window provides validation time; Fedwire backup addresses urgent items; root cause knowledge prevents repeat failure.",
        10,
        "Submit the corrected file for the 9:00 AM window since the 60-minute timeline allows for basic validation and delays compound customer impact.",
        "Speed addresses customer urgency but submitting without root cause understanding risks another rejection and greater reputational damage.",
        5,
        "Split the file—submit validated low-risk transactions for the 9:00 AM window and hold higher-value items for afternoon processing.",
        "Splitting seems efficient but creates reconciliation complexity and the validation that cleared low-risk items may not have caught the original error.",
        -5,
        "Request the Fed extend the 9:00 AM window deadline given the circumstances to allow more time for correction and validation.",
        "Extension requests are rarely granted for operational errors; the ask may damage the relationship without providing benefit.",
        -5
      )),
    q("CEO/SVPs", "A board member calls after seeing social media complaints about 'bounced paychecks.' They want to know why they're learning about this from Twitter instead of management. What approach is most appropriate?",
      buildChoices(
        "Acknowledge the communication gap, provide a concise situation briefing, explain that formal board notification was being prepared, and commit to a defined update schedule going forward.",
        "Acknowledgment accepts responsibility; briefing addresses their immediate need; explanation provides context; schedule prevents recurrence.",
        10,
        "Explain that the incident command was focused on resolution and board communication was queued after customer notification priorities.",
        "Prioritization explanation is accurate but may sound defensive; acknowledging the gap while explaining is more appropriate.",
        5,
        "Remind the board member that operational incidents are management matters and board involvement at this stage could slow decision-making.",
        "Governance boundary argument may be technically correct but dismisses a legitimate concern about communication during a visible incident.",
        -5,
        "Immediately convene an emergency board call to ensure all directors receive simultaneous briefing before any further external developments.",
        "Emergency call may seem responsive but diverts leadership attention from resolution; structured update is more appropriate than real-time board involvement.",
        -5
      )),
    q("CEO/SVPs", "Your largest payroll client—a hospital system with 2,400 employees—calls the CEO directly. Their employees didn't receive direct deposits and the hospital's HR director is demanding to know when staff will be paid. What approach is most appropriate?",
      buildChoices(
        "Commit to same-day resolution through Fedwire for their payroll specifically, assign a dedicated contact for the relationship, and have treasury confirm completion directly with their CFO.",
        "Specific commitment with backup method addresses their urgent need; dedicated contact shows relationship priority; CFO confirmation closes the loop appropriately.",
        10,
        "Assure them the file will be corrected and resubmitted in the afternoon window, putting them at the front of the processing queue.",
        "Afternoon resubmission may resolve the issue but doesn't guarantee same-day availability depending on their employees' banks; manual backup is more certain.",
        5,
        "Explain that all affected clients are being treated equally and prioritizing one client over others would be unfair to the remaining 22 impacted payrolls.",
        "Equal treatment sounds principled but relationship size and employee impact warrant differentiated response; rigid equality may lose a key client.",
        -5,
        "Transfer the call to the treasury operations manager who can provide technical details about the correction timeline.",
        "Technical transfer may seem efficient but CEO-to-CEO escalation warrants CEO-level response; transfer appears to diminish the relationship.",
        -5
      )),

    // IT/Security
    q("IT/Security", "Initial analysis shows the file corruption occurred after the ACH origination system handed off to the file transfer platform. The transfer platform vendor claims their logs show a clean handoff. Your logs are ambiguous. What approach is most appropriate?",
      buildChoices(
        "Capture forensic snapshots of both systems immediately, engage the vendor in joint log analysis with timestamps correlated to the microsecond, and document the chain of custody for any dispute resolution.",
        "Forensic preservation protects evidence; joint analysis addresses the ambiguity; timestamp correlation identifies the actual failure point; documentation supports any needed escalation.",
        10,
        "Accept the vendor's position for now and focus internal investigation on the origination system since that's within your direct control.",
        "Internal focus is practical but accepting vendor claims without verification may miss the actual cause and leave you exposed to repeat failures.",
        5,
        "Escalate to the vendor's executive team and demand they prove their system wasn't responsible before you'll continue joint investigation.",
        "Executive escalation may be needed eventually but adversarial posture before completing joint analysis damages the working relationship.",
        -5,
        "Implement additional validation checks between the systems to prevent recurrence while continuing to investigate root cause in parallel.",
        "Preventive controls are appropriate but implementing changes before understanding the cause may not address the actual vulnerability.",
        -5
      )),
    q("IT/Security", "The corrected file is ready for the afternoon window. Your standard change management process requires 24-hour review for production file changes. The business is pressing for immediate submission. What approach is most appropriate?",
      buildChoices(
        "Invoke emergency change procedures with documented justification, require sign-off from both IT and business leadership, implement enhanced monitoring for the submission, and schedule post-incident review.",
        "Emergency procedures exist for this situation; dual sign-off maintains accountability; enhanced monitoring catches issues quickly; post-incident review addresses process improvement.",
        10,
        "Follow standard 24-hour review since the process exists to prevent exactly this kind of error, and another day's delay is preferable to another failed file.",
        "Process adherence is generally correct but emergency procedures exist for genuine emergencies; rigid adherence causes unnecessary customer harm.",
        5,
        "Submit the file with business leadership approval only, since the change management delay is an IT bureaucracy issue that shouldn't impact customers.",
        "Business-only approval bypasses IT controls that exist for good reason; emergency procedures should involve both functions.",
        -5,
        "Have a developer manually validate the file contents and submit directly, bypassing the automated pipeline that may have caused the original issue.",
        "Manual bypass avoids the suspected system but introduces human error risk and creates an undocumented process that can't be repeated reliably.",
        -5
      )),
    q("IT/Security", "During the incident, you discover the ACH origination system has been running on an unsupported operating system version for 8 months due to a delayed upgrade project. This wasn't the root cause but could complicate regulatory discussions. What approach is most appropriate?",
      buildChoices(
        "Document the finding in the incident record, assess whether it contributed to the failure, accelerate the upgrade project timeline, and prepare talking points for potential regulatory questions.",
        "Transparent documentation maintains integrity; contribution assessment is appropriate due diligence; accelerated upgrade addresses the gap; preparation enables consistent response.",
        10,
        "Note the finding internally but keep the incident report focused on the actual root cause since the unsupported OS wasn't a contributing factor.",
        "Root cause focus is appropriate but omitting a relevant system condition from the record could appear as concealment if discovered later.",
        5,
        "Immediately prioritize the OS upgrade over incident remediation to close the vulnerability before regulators ask questions.",
        "Upgrade urgency is understandable but diverting resources from active incident remediation creates customer harm; sequencing should address both.",
        -5,
        "Delay documenting the OS finding until the upgrade is complete so the incident record shows the issue was already being addressed.",
        "Documentation timing manipulation could be viewed as concealment; contemporaneous documentation of what was known when is more defensible.",
        -5
      )),

    // HR
    q("HR", "Operations staff have been working since 5:00 AM when the rejection was discovered. It's now 2:00 PM and the afternoon file has been submitted. The team wants to know if they can go home, but reconciliation work remains and tomorrow's file needs preparation. What approach is most appropriate?",
      buildChoices(
        "Release non-critical staff with instructions to be available by phone, keep a core team for reconciliation with commitment to relief by a specific time, and bring in fresh staff for tomorrow's file preparation.",
        "Tiered release addresses fatigue while maintaining capability; specific relief commitment provides certainty; fresh staff for new work prevents errors.",
        10,
        "Keep the full team until reconciliation is complete since they understand the situation and handoff to fresh staff would take time to brief.",
        "Continuity has value but fatigued staff make errors; structured handoff with documentation is preferable to exhausted experts.",
        5,
        "Tell staff that everyone needs to stay until the situation is fully resolved, but authorize dinner delivery and promise compensatory time off later.",
        "Meals and comp time don't address fatigue-related error risk; staggered release is more appropriate than indefinite retention.",
        -5,
        "Let individuals decide whether they can continue working based on their own assessment of their fatigue levels.",
        "Self-assessment sounds respectful but fatigued people often misjudge their own impairment; management should make staffing decisions.",
        -5
      )),
    q("HR", "A call center supervisor reports that two representatives broke down crying during difficult customer calls. Call volume remains elevated and the representatives want to continue working. What approach is most appropriate?",
      buildChoices(
        "Rotate the affected representatives to back-office support tasks, ensure manager check-ins occur, make EAP resources visible to all call center staff, and monitor overall team stress indicators.",
        "Task rotation provides relief while keeping staff productive; check-ins show care; EAP visibility addresses broader need; monitoring prevents cascade.",
        10,
        "Allow the representatives to decide whether they want to continue taking calls since they know their own capacity best.",
        "Autonomy sounds respectful but staff in distress may not make optimal decisions; supportive reassignment protects them and customers.",
        5,
        "Send both representatives home for the day with pay and bring in backup staff to maintain call center capacity.",
        "Home release may be appropriate but doesn't address the broader team stress or provide alternatives; rotation is more proportionate.",
        -5,
        "Thank the representatives for their dedication and encourage them to take a short break before returning to the phones.",
        "Short breaks don't address the underlying stress; returning to the same triggering environment without role change is unlikely to help.",
        -5
      )),
    q("HR", "An operations employee posts on LinkedIn that the bank 'had a major ACH meltdown due to management cutting corners on system upgrades.' The post is factually inaccurate but gaining traction. What approach is most appropriate?",
      buildChoices(
        "Have the employee's manager address the post privately, remind all staff of social media policies without singling anyone out, and assess whether legitimate concerns underlie the inaccurate claims.",
        "Private conversation addresses the specific issue; general reminder prevents escalation; concern assessment may surface valid feedback.",
        10,
        "Request the employee remove the post immediately and document the policy violation for later performance discussion.",
        "Removal request is appropriate but documenting for discipline during an active incident may chill future issue reporting.",
        5,
        "Have corporate communications post a public response correcting the factual errors in the employee's claims.",
        "Public response engages with an employee dispute publicly, amplifying the story and creating an adversarial dynamic.",
        -5,
        "Ignore the post since engaging with it draws more attention and the employee has free speech rights outside of work.",
        "Ignoring allows misinformation to spread; employees have speech rights but not to make false public statements about their employer.",
        -5
      )),

    // Finance
    q("Finance", "The Fed settlement for the rejected file didn't occur, but your correspondent bank funded customer accounts based on expected settlement. You now have a $12.3M position mismatch that will correct with the afternoon file, but your correspondent is calling about the daylight overdraft. What approach is most appropriate?",
      buildChoices(
        "Explain the situation to the correspondent with expected resolution timing, confirm you'll cover any overdraft charges incurred, document the arrangement, and escalate internally if the position extends beyond today.",
        "Transparent explanation maintains relationship; charge coverage addresses their concern; documentation supports reconciliation; escalation protocol addresses extended exposure.",
        10,
        "Transfer $12.3M from your Fed account to the correspondent immediately to clear the position, then reconcile when the afternoon settlement completes.",
        "Immediate transfer clears their position but may create your own Fed account issues depending on balances; explanation with commitment is cleaner.",
        5,
        "Remind the correspondent that they funded based on their own processes and the position will clear with afternoon settlement as normal.",
        "Technically accurate but dismissive of a legitimate concern from a key partner; relationship maintenance warrants more engagement.",
        -5,
        "Escalate to your treasurer to handle the correspondent call since this is a treasury relationship matter, not an incident management issue.",
        "Treasury involvement is appropriate but the escalation framing suggests avoidance; incident management includes managing financial impacts.",
        -5
      )),
    q("Finance", "Commercial clients are asking for fee credits due to the delayed payrolls. Some are demanding compensation for their own costs—employee complaints, HR overtime, manual check processing. Total credit requests are approaching $180,000. What approach is most appropriate?",
      buildChoices(
        "Establish a tiered credit framework: automatic credits for direct bank fees, documented review process for reasonable consequential costs, and clear criteria for what qualifies—with authority limits for approvals.",
        "Framework provides consistency; tiered approach addresses different claim types appropriately; criteria and authority limits maintain control.",
        10,
        "Credit all direct bank fees automatically and tell clients that consequential damages require legal review before any commitment.",
        "Automatic fee credits are appropriate but legal framing for all other costs may seem adversarial; reasonable cost review is more customer-friendly.",
        5,
        "Offer standardized credits based on transaction volume without requiring documentation, to resolve claims quickly and avoid prolonged disputes.",
        "Speed has value but undocumented credits may over-compensate some and under-compensate others; reasonable documentation supports fairness.",
        -5,
        "Deny consequential damage claims categorically since the bank's service agreement limits liability to direct damages only.",
        "Legal position may be defensible but rigid enforcement during a service failure damages relationships; goodwill has value.",
        -5
      )),
    q("Finance", "The CFO asks for a financial impact summary for the board. Direct costs are clear but reputational impact and potential client attrition are uncertain. The board meeting is in 4 hours. What approach is most appropriate?",
      buildChoices(
        "Present quantified direct costs, describe potential indirect impacts with ranges and assumptions, identify metrics to track for actual impact measurement, and commit to updated analysis as data emerges.",
        "Quantified directs provide concrete information; ranged indirects acknowledge uncertainty appropriately; metrics enable tracking; update commitment maintains engagement.",
        10,
        "Present only the direct costs that can be quantified and note that indirect impacts will be assessed over the coming weeks as patterns emerge.",
        "Direct-only focus is conservative but board may want some indication of potential magnitude even if uncertain; ranges with caveats are appropriate.",
        5,
        "Delay the financial summary until more data is available since presenting uncertain numbers could mislead the board about actual impact.",
        "Delay leaves board without financial context for a material incident; presenting with appropriate caveats is preferable to silence.",
        -5,
        "Present a comprehensive estimate including projected client attrition and reputational damage to ensure the board understands worst-case exposure.",
        "Comprehensive projection sounds thorough but speculative worst-case numbers may alarm unnecessarily; ranges with assumptions are more appropriate.",
        -5
      )),

    // Loans
    q("Loans", "Several auto loan payments that were in the failed file have now missed their due dates. The loan system has automatically assessed late fees and sent notices to borrowers who thought they had paid. What approach is most appropriate?",
      buildChoices(
        "Immediately reverse all late fees for affected accounts, send corrected notices explaining the bank error, suppress any negative credit reporting, and document the remediation for compliance purposes.",
        "Immediate reversal addresses customer harm; corrected notices explain the situation; credit reporting suppression prevents lasting damage; documentation supports audit trail.",
        10,
        "Reverse late fees upon customer request and expedite the complaint process for affected borrowers who contact the bank.",
        "Request-based reversal helps those who call but misses borrowers who don't realize the bank erred; proactive reversal is more appropriate.",
        5,
        "Wait until the corrected file settles to confirm which payments actually post, then assess remediation based on final payment status.",
        "Waiting provides certainty but leaves late fees and notices in place longer than necessary; parallel remediation is possible.",
        -5,
        "Send a general communication to all loan customers about the ACH issue without specifically identifying affected accounts.",
        "General communication is vague; affected borrowers deserve specific notification that their account was impacted and remediated.",
        -5
      )),
    q("Loans", "A mortgage payment in the failed file was for a borrower on a loss mitigation plan with strict payment timing requirements. Missing the payment deadline could technically default them out of the program. What approach is most appropriate?",
      buildChoices(
        "Document that the bank's operational error caused the timing issue, maintain the borrower's loss mitigation status, ensure the payment posts with the original intended date for program purposes, and note the exception.",
        "Bank-error documentation establishes cause; maintained status protects borrower; backdated posting for program purposes is appropriate given circumstances; exception notation maintains records.",
        10,
        "Contact the borrower immediately to explain the situation and have them make a replacement payment today through an alternative channel to meet the deadline.",
        "Borrower contact is appropriate but asking them to pay again shifts the burden for the bank's error; internal remediation is more appropriate.",
        5,
        "Process the payment when the corrected file settles and evaluate at that point whether the borrower remains eligible for loss mitigation.",
        "Standard processing may technically default the borrower for the bank's error; proactive protection is warranted.",
        -5,
        "Flag the account for supervisor review once the file settles since loss mitigation decisions require careful documentation.",
        "Supervisor review is appropriate but waiting until after settlement may be too late to prevent program default; immediate action is needed.",
        -5
      )),
    q("Loans", "The failed file included escrow disbursements for property tax payments with a county deadline of today. If taxes aren't received by the county by 5:00 PM, borrowers will incur penalties. What approach is most appropriate?",
      buildChoices(
        "Identify all escrow disbursements with today's deadline, initiate wire transfers to the relevant taxing authorities immediately, absorb the wire costs, and reconcile against the corrected ACH file when it settles.",
        "Wire transfer meets the deadline; bank absorbs costs appropriately for its error; reconciliation maintains accounting integrity.",
        10,
        "Contact the county tax offices to explain the situation and request deadline extensions for the affected payments.",
        "Extension requests may help but counties may not accommodate; wire transfer backup ensures deadlines are met regardless.",
        5,
        "Include the tax payments in the corrected afternoon file and communicate with borrowers if penalties are incurred about remediation.",
        "Afternoon file may not settle at county in time for deadline; penalties create customer harm that proactive wire prevents.",
        -5,
        "Advise affected borrowers to pay their property taxes directly today and the bank will reimburse them when the escrow payment clears.",
        "Borrower payment shifts the burden for bank's error and requires them to have funds available; bank should solve its own problem.",
        -5
      )),

    // Accounting
    q("Accounting", "The failed and corrected files will create reconciliation complexity—some transactions will appear twice, some once, some with different effective dates. The suspense account is already growing. What approach is most appropriate?",
      buildChoices(
        "Create a dedicated reconciliation workspace for incident-related transactions, establish clear matching rules for the various scenarios, assign specific staff ownership, and set a target clearance date with daily progress tracking.",
        "Dedicated workspace isolates complexity; matching rules ensure consistency; ownership creates accountability; target date with tracking ensures completion.",
        10,
        "Process all transactions through normal reconciliation procedures since existing processes handle exceptions and special handling creates additional complexity.",
        "Normal procedures may work eventually but don't account for the volume and complexity; dedicated handling accelerates resolution.",
        5,
        "Hold all incident-related transactions in suspense until the full picture is clear, then reconcile in a single pass once all settlements complete.",
        "Single-pass approach seems efficient but extended suspense creates audit concerns and delays identifying specific issues.",
        -5,
        "Assign the reconciliation to whoever is available and let them work through it at their own pace since it will eventually clear.",
        "Unstructured assignment may result in inconsistent treatment and extended timelines; structured approach is necessary for this volume.",
        -5
      )),
    q("Accounting", "External auditors are currently on-site for quarterly procedures. They've heard about the incident and are asking for documentation. The incident is still being resolved. What approach is most appropriate?",
      buildChoices(
        "Provide auditors with current documentation including the incident timeline, remediation actions taken, and financial impacts identified so far, noting that the situation is ongoing and updates will follow.",
        "Current documentation demonstrates transparency; timeline and actions show control; ongoing status with update commitment sets expectations.",
        10,
        "Ask auditors to defer their documentation requests until the incident is resolved so they can receive a complete and accurate package.",
        "Deferral may seem practical but auditors have legitimate need for timely information; ongoing status can be communicated with current documents.",
        5,
        "Provide auditors with the incident summary only and note that detailed documentation will be available after internal review is complete.",
        "Summary-only may appear to limit auditor access; underlying documentation should be available subject to completion status.",
        -5,
        "Refer auditor requests to legal counsel since incident documentation may have litigation implications that require privilege review.",
        "Legal involvement may be appropriate for some documents but routing routine auditor requests through legal appears obstructive.",
        -5
      )),
    q("Accounting", "Late in the day, you discover that the original file and the corrected file both partially settled for a subset of transactions, creating duplicate credits for approximately $890,000 across 340 customer accounts. What approach is most appropriate?",
      buildChoices(
        "Identify all duplicate credit accounts immediately, assess the reversal process and customer notification requirements, consult with compliance on Reg E implications, and develop a remediation plan before initiating reversals.",
        "Immediate identification establishes scope; process assessment ensures correct approach; compliance consultation addresses regulatory requirements; planned remediation prevents ad-hoc errors.",
        10,
        "Initiate reversals for all duplicate credits immediately to correct the bank's balance sheet position before end of day.",
        "Speed seems appropriate but customer notification requirements and regulatory considerations should be addressed before reversals.",
        5,
        "Wait until tomorrow to address the duplicates since staff are fatigued and errors in the reversal process could compound the problem.",
        "Fatigue concern is valid but unresolved duplicates create overnight exposure; fresh staff can handle the reversals today.",
        -5,
        "Post a journal entry to record the expected reversal and process the actual reversals through normal procedures over the next few days.",
        "Accrual addresses accounting but doesn't resolve the customer-facing issue; reversals need timely processing with appropriate notices.",
        -5
      )),

    // Deposits
    q("Deposits", "Branch managers report that customers whose bill payments failed are bringing in disconnect notices from utilities and demanding the bank fix the situation. Some customers have been charged late fees and reconnection fees by their billers. What approach is most appropriate?",
      buildChoices(
        "Empower branch managers to provide immediate credits for documented biller fees up to a defined limit, establish an escalation path for larger amounts, and provide talking points for customer conversations.",
        "Immediate authority enables resolution at point of contact; limits maintain control; escalation path handles exceptions; talking points ensure consistency.",
        10,
        "Have customers submit documentation of fees incurred and process credits through the normal dispute resolution process with expedited handling.",
        "Documentation is reasonable but normal dispute process may seem bureaucratic during the bank's service failure; faster resolution is appropriate.",
        5,
        "Explain that the bill payment failed due to the ACH issue and customers should contact their billers to request fee waivers given the bank's error.",
        "Biller contact may work but shifts the burden to customers for the bank's error; bank should make customers whole directly.",
        -5,
        "Provide customers with a letter documenting the bank's error that they can use with their billers to request fee refunds.",
        "Letters may help but don't address customers' immediate out-of-pocket costs; direct credits are more appropriate.",
        -5
      )),
    q("Deposits", "A small business customer whose payroll was in the failed file is at the branch with employees who can't access their pay. The business owner is demanding cash to pay employees manually. The amount requested is $47,000. What approach is most appropriate?",
      buildChoices(
        "Verify the business's payroll amount against records, confirm their available balance supports the withdrawal, process the cash withdrawal with appropriate documentation, and note the exceptional circumstance.",
        "Verification protects both parties; balance confirmation ensures funds availability; documented exception is appropriate given circumstances.",
        10,
        "Explain that the afternoon file should credit employee accounts by end of day and ask the business owner to have employees return tomorrow.",
        "Tomorrow resolution doesn't help employees who need funds today; the business owner's urgent request warrants accommodation.",
        5,
        "Process the withdrawal but require the business owner to sign an indemnification agreement acknowledging the bank isn't responsible for the delay.",
        "Indemnification seems defensive during the bank's service failure and doesn't change the business owner's legal position anyway.",
        -5,
        "Decline the large cash withdrawal citing branch cash limits and offer a cashier's check instead that can be cashed at their bank.",
        "Branch limits may exist but the customer's urgent need warrants exception handling; check doesn't help employees needing immediate cash.",
        -5
      )),
    q("Deposits", "Call center representatives report that some customers are threatening to close accounts and 'go to the press' about the failed payroll deposits. Volume of these calls is increasing as the day progresses. What approach is most appropriate?",
      buildChoices(
        "Provide representatives with retention talking points that acknowledge the error and specific remediation steps, authorize modest retention offers within guidelines, and escalate media threats to communications team for monitoring.",
        "Talking points enable consistent response; authorized offers address retention; media threat escalation enables preparation without over-reacting.",
        10,
        "Have supervisors take over calls from customers threatening media contact to prevent representatives from making commitments the bank can't keep.",
        "Supervisor escalation is appropriate for difficult calls but media-threat criteria may route too many calls and not address the underlying frustration.",
        5,
        "Document all customers threatening media contact and have relationship managers call them back to address concerns and prevent escalation.",
        "Callback list may be appropriate but treating media threats as the escalation trigger may miss equally upset customers who don't threaten.",
        -5,
        "Remind representatives that customers threatening media contact are trying to manipulate the situation and should be treated like any other complaint.",
        "Standard treatment dismisses the legitimate anger; customers affected by bank errors warrant acknowledgment and remediation regardless of tactics.",
        -5
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
  SCENARIO_REGULATORY_INQUIRY,
  SCENARIO_DATA_UNVERIFIABLE,
  SCENARIO_INSIDER_FRAUD,
  SCENARIO_ACH_FAILURE,
];

// Rephrase choices so distractors sound plausible without changing scoring.
function rewriteChoiceText(text, score) {
  const t = String(text || '').trim();
  if (!t) return t;
  const soft = [
    [/Activate Incident Command and name a single spokesperson/i, 'Stand up a coordinated response with clear ownership'],
    [/Acknowledge service impact, what’s known, and provide update cadence/i, 'Provide a factual update and outline near-term next steps'],
    [/Re-verify all change requests via trusted channels/i, 'Reconfirm change requests using trusted channels and dual control'],
    [/Staged restore with integrity checks and rollback plan/i, 'Restore services in phases with checks and contingency'],
  ];
  const plausible = [
    [/No comms[^.,]*/i, 'Limit external messaging until facts stabilize'],
    [/Promise( exact)? (recovery|restore|reopen|fix|timelines|times)/i, 'Offer firm timelines to reassure stakeholders'],
    [/Share screenshots[^.,]*/i, 'Provide visual examples to increase transparency'],
    [/Blame [^.,]*/i, 'Be explicit about external responsibility to set expectations'],
    [/Suspend handling/i, 'Temporarily pause processing to avoid compounding issues'],
    [/Treat as normal/i, 'Maintain standard processing to avoid confusion'],
    [/Downplay concerns/i, 'Reassure customers that impact is limited'],
    [/Ask to (call back|return) later/i, 'Advise customers to follow up as capacity allows'],
    [/Skip checks for trusted customers/i, 'Streamline checks for trusted customers to improve experience'],
    [/Unlimited overtime/i, 'Maximize availability through broad overtime flexibility'],
    [/Disable logging/i, 'Reduce non‑essential telemetry temporarily to manage noise'],
    [/Disable dual control/i, 'Relax dual checks to expedite work'],
    [/Share admin (access|credentials) with (vendor )?widely/i, 'Broaden administrative access to speed changes'],
    [/Reboot everything/i, 'Perform sweeping resets quickly to restore service'],
    [/Large config changes ad-hoc/i, 'Implement broad configuration changes quickly to accelerate recovery'],
    [/Silence until/i, 'Minimize messaging until details are clearer'],
    [/Promise instant( resolutions| fixes)?/i, 'Offer firm commitments on immediate resolution'],
    [/Share internal (dashboards|tools|maps)/i, 'Increase transparency by sharing high‑level internal views'],
    [/Mass notice/i, 'Proactively notify broadly to ensure consistent awareness'],
    [/No tracking until later/i, 'Defer formal tracking until scope stabilizes; keep approvals in email'],
    [/Local spreadsheets only/i, 'Allow team-level trackers with periodic snapshots to Accounting'],
    [/Mix into monthly file/i, 'Record within the monthly close workbook with annotations'],
    [/Emails only/i, 'Summarize via email recaps; attach artifacts later'],
    [/No docs/i, 'Rely on system reports and institutional knowledge for now'],
    [/Weekly only/i, 'Provide weekly rollups to minimize noise'],
  ];
  let out = t;
  if (score >= 10) {
    soft.forEach(([rx, rep]) => { out = out.replace(rx, rep); });
  } else if (score <= 0) {
    plausible.forEach(([rx, rep]) => { out = out.replace(rx, rep); });
  } else {
    // mid‑score: mild neutralization only
    out = out.replace(/Generic/i, 'Focused');
  }
  return out;
}

function cloneWithRewrites() {
  return SCENARIOS.map(s => ({
    ...s,
    questions: (s.questions || []).map(q => ({
      ...q,
      choices: (q.choices || []).map(c => ({
        ...c,
        text: rewriteChoiceText(c.text, c.score)
      }))
    }))
  }));
}

export function getScenarios() {
  // Return a deep copy with rewritten labels to keep originals unchanged
  return cloneWithRewrites();
}

export function getScenarioByKey(key) {
  if (!key) return null;
  const k = String(key).toLowerCase().trim();
  return cloneWithRewrites().find(s => s.key.toLowerCase() === k) || null;
}

export function getRandomScenario() {
  const source = cloneWithRewrites();
  const valid = source.filter(s => Array.isArray(s.questions) && s.questions.length === 21);
  const pool = valid.length ? valid : source;
  const base = pool[Math.floor(Math.random() * pool.length)];

  const questions = Array.isArray(base.questions)
    ? base.questions.map(q => {
        const choices = Array.isArray(q.choices) ? [...q.choices] : [];
        for (let i = choices.length - 1; i > 0; i--) {
          const r = Math.floor(Math.random() * (i + 1));
          const t = choices[i];
          choices[i] = choices[r];
          choices[r] = t;
        }
        return { ...q, choices };
      })
    : [];

  for (let j = questions.length - 1; j > 0; j--) {
    const k = Math.floor(Math.random() * (j + 1));
    const tmp = questions[j];
    questions[j] = questions[k];
    questions[k] = tmp;
  }

  return { ...base, questions };
}

export function getSpecialScenarios() {
  return [];
}
