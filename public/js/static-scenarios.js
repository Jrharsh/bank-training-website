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
      "Provide clear talking points and self-service alternatives", "Reduces frustration and load.", 10,
      "Ask customers to call later", "Not helpful.", 5,
      "Downplay the issue", "Harms trust.", -5,
      "Share internal emails with customers", "Leads to confusion and risk.", -5
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
      "Targeted phishing alerts and MFA reinforcement", "High-value reminders during stress.", 10,
      "Generic security email", "OK but easy to ignore.", 5,
      "No comms to avoid distractions", "Increases risk.", -5,
      "Allow personal devices for expediency", "Risky.", -5
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
      "Share facts without exposing investigation details; inform impacted parties directly", "Transparent and prudent.", 10,
      "Post detailed forensics publicly", "Too much detail.", 5,
      "Say nothing and hope it fades", "Risky.", -5,
      "Blame the vendor immediately", "Premature.", -5
    )),
    q("CEO/SVPs", "How should leadership support front-line fraud teams?", buildChoices(
      "Provide staffing help, escalation paths, and quick decisions", "Removes friction.", 10,
      "Ask for daily summaries only", "Less helpful.", 5,
      "Stay hands-off", "Unhelpful.", -5,
      "Announce zero tolerance publicly now", "Risky.", -5
    )),
    q("CEO/SVPs", "When should law enforcement be engaged?", buildChoices(
      "Promptly upon confirmed attempted fraud; coordinate with counsel", "Supports recovery and deterrence.", 10,
      "Wait until funds are lost", "Too late.", 5,
      "Never engage", "Misses recovery.", -5,
      "Let any employee contact LE directly", "Uncoordinated.", -5
    )),

    q("IT/Security", "What email security action is most important now?", buildChoices(
      "Tighten impersonation controls and DMARC, and reinforce MFA/phishing training", "Targets attack vector.", 10,
      "Disable spam filtering to inspect manually", "Risky.", -5,
      "Share headers widely", "Unnecessary exposure.", -5,
      "Ignore because caught in time", "Missed hardening opportunity.", -5
    )),
    q("IT/Security", "How should suspicious emails be handled today?", buildChoices(
      "Immediate quarantine and review; communicate to users with examples", "Improves detection.", 10,
      "Delete silently", "Less learning.", 5,
      "Forward broadly", "Spreads phish.", -5,
      "Allow any user to send warnings", "Inconsistent.", -5
    )),
    q("IT/Security", "What change should be avoided?", buildChoices(
      "Turning off banner warnings on external email", "Removes useful signal.", -5,
      "Adding additional URL rewriting", "Potentially fine.", 5,
      "Increasing impersonation detection thresholds", "Helpful.", 10,
      "Adding admin rights widely", "Risky.", -5
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
      "Track potential exposures separately with clear notes", "Audit-ready.", 10,
      "Mix into normal expense lines", "Opaque.", 5,
      "Ignore until confirmed loss", "Late.", -5,
      "Share details broadly", "Risky.", -5
    )),
    q("Accounting", "What reconciliation priority changes today?", buildChoices(
      "Tighter review of wire-related accounts", "Relevant control.", 10,
      "Normal process only", "May miss issues.", 5,
      "Suspend recon", "Risky.", -5,
      "Local-only methods", "Inconsistent.", -5
    )),
    q("Accounting", "What documentation supports later review?", buildChoices(
      "Centralized case/exception logs with approvals", "Traceable.", 10,
      "Email threads only", "Messy.", 5,
      "No documentation", "Risky.", -5,
      "Personal notebooks", "Risky.", -5
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
      "Mix into monthly file", "Opaque.", 5,
      "No tracking until later", "Risky.", -5,
      "Local spreadsheets only", "Inconsistent.", -5
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
  title: "Insider Threat—Terminated Employee",
  description: "A recently terminated employee with elevated access attempted to log in remotely and may have retained customer data. Security, legal, and HR must coordinate response.",
  questions: [
    q("CEO/SVPs", "What should leadership do in the first hour?", buildChoices(
      "Activate incident response, appoint a spokesperson, and align with legal", "Sets structure and reduces missteps.", 10,
      "Let Security run it and wait for a summary", "Slower alignment and comms.", 5,
      "Say nothing until forensics is complete", "Creates rumor risk and confusion.", -5,
      "Tell teams to change all passwords immediately", "Disruptive and may hinder forensics.", -5
    )),
    q("CEO/SVPs", "What’s the correct external stance today?", buildChoices(
      "Share facts only if customer data exposure is likely; align with counsel/regulators", "Balanced and compliant.", 10,
      "Say nothing regardless of exposure", "Risky.", 5,
      "Blame the ex-employee publicly", "Risky and potentially defamatory.", -5,
      "Provide technical details of detection tooling", "Unnecessary and risky.", -5
    )),
    q("CEO/SVPs", "How should leadership support teams?", buildChoices(
      "Provide resources, approvals, and remove blockers with clear cadence", "Keeps momentum.", 10,
      "Request daily email summaries only", "Less helpful.", 5,
      "No involvement", "Unhelpful.", -5,
      "Mandate all-hands daily townhalls", "Disruptive.", -5
    )),

    q("IT/Security", "What immediate controls are needed?", buildChoices(
      "Disable all accounts, revoke tokens/keys, and review access logs", "Core containment.", 10,
      "Only disable the main AD account", "Incomplete.", 5,
      "Wait to confirm activity before revoking", "Risky.", -5,
      "Share logs widely for review", "Privacy/risk.", -5
    )),
    q("IT/Security", "What data handling action is key?", buildChoices(
      "Inventory potential data exfil paths and enable DLP blocks", "Focuses on the highest risk.", 10,
      "Turn off logging to reduce noise", "Destroys evidence.", -5,
      "Assume encryption solves it", "False sense of security.", 5,
      "Perform laptop wipe without imaging", "Destroys evidence.", -5
    )),
    q("IT/Security", "How should MFA/SSO be handled?", buildChoices(
      "Invalidate all tokens and check for registered personal devices", "Closes gaps.", 10,
      "Leave tokens active for a day", "Risky.", 5,
      "Disable MFA temporarily for speed", "Risky.", -5,
      "Share admin creds for quick changes", "Never.", -5
    )),

    q("HR", "What should HR coordinate with IT and Legal?", buildChoices(
      "Exit checklist validation, access confirmation, and NDAs acknowledgment", "Reduces gaps.", 10,
      "Assume standard exit was done", "Risky.", 5,
      "Share personnel file widely", "Privacy risk.", -5,
      "Conduct public blame messaging", "Inappropriate.", -5
    )),
    q("HR", "What staff communications are most helpful?", buildChoices(
      "Guidance on reporting suspicious activity and confidentiality reminders", "Practical.", 10,
      "Generic note about the termination", "Light.", 5,
      "No comms", "Rumors spread.", -5,
      "Share details about the individual", "Privacy risk.", -5
    )),
    q("HR", "What support might be needed for impacted teams?", buildChoices(
      "EAP reminders and manager check-ins", "Helps morale.", 10,
      "None", "Missed support.", 5,
      "Public 'lessons learned' naming individual", "Inappropriate.", -5,
      "Mandatory overtime", "Burnout.", -5
    )),

    q("Finance", "What financial controls are relevant today?", buildChoices(
      "Review high-risk transactions for the individual’s access window", "Targets potential impacts.", 10,
      "Normal monthly review only", "Slow.", 5,
      "Freeze unrelated GL accounts", "Unnecessary.", -5,
      "Share customer data for analysis widely", "Risky.", -5
    )),
    q("Finance", "How to handle vendor access tied to the user?", buildChoices(
      "Verify and revoke any third-party access the user managed", "Closes gaps.", 10,
      "Assume vendors are fine", "Risky.", 5,
      "Disable all vendors", "Too blunt.", -5,
      "Share contract details externally", "Risky.", -5
    )),
    q("Finance", "What reporting cadence helps leadership?", buildChoices(
      "Daily status with risks and actions", "Keeps alignment.", 10,
      "Weekly summary only", "Slow.", 5,
      "None", "Opaque.", -5,
      "Forward raw logs", "Noisy.", -5
    )),

    q("Loans", "What should be verified for loan systems?", buildChoices(
      "Confirm recent changes to loan terms and rates", "Targets fraud risks.", 10,
      "Take no additional verification steps", "Misses risk.", 5,
      "Pause all loan processing activities", "Too blunt.", -5,
      "Permit one person to approve changes", "Risky.", -5
    )),
    q("Loans", "How should borrower communications be handled?", buildChoices(
      "Only if directly impacted; coordinated and factual", "Prudent.", 10,
      "Mass notices to all borrowers", "Overkill.", 5,
      "No notices even if impacted", "Risky.", -5,
      "Promise specific details prematurely", "Risky.", -5
    )),
    q("Loans", "What to do about privileged screens in LOS?", buildChoices(
      "Limit to need-to-know and enhance monitoring", "Reduces risk.", 10,
      "Leave as is", "Risk remains.", 5,
      "Give more admins to speed checks", "Risky.", -5,
      "Disable logging for performance", "Risky.", -5
    )),

    q("Accounting", "How to log potential financial impact?", buildChoices(
      "Track suspected exposure separately with approvals", "Audit-ready.", 10,
      "Mix into normal ops", "Opaque.", 5,
      "Ignore until proven", "Late.", -5,
      "Share data widely", "Risky.", -5
    )),
    q("Accounting", "What reconciliation posture helps?", buildChoices(
      "Enhanced review of accounts user could affect", "Focused.", 10,
      "Normal only", "May miss issues.", 5,
      "Suspend recon", "Risky.", -5,
      "Local-only tracking", "Inconsistent.", -5
    )),
    q("Accounting", "What documentation is important?", buildChoices(
      "Central case log with approvals and actions", "Traceable.", 10,
      "Email chains only", "Messy.", 5,
      "No documentation", "Risky.", -5,
      "Personal notes", "Inconsistent.", -5
    )),

    q("Deposits", "How should high-risk account changes be reviewed?", buildChoices(
      "Secondary review for changes initiated by the individual", "Reduces risk.", 10,
      "No changes", "Too blunt.", 5,
      "Trust prior activity", "Risky.", -5,
      "Allow ad-hoc exceptions", "Risky.", -5
    )),
    q("Deposits", "What customer communications are appropriate?", buildChoices(
      "Only if specific customers are impacted and with counsel", "Prudent.", 10,
      "Mass notice to all", "Overkill.", 5,
      "No notice even if impacted", "Risky.", -5,
      "Share investigative details", "Risky.", -5
    )),
    q("Deposits", "What to do with branch gossip?", buildChoices(
      "Reinforce confidentiality and facts-only guidance", "Reduces risk.", 10,
      "Ignore it", "Rumors spread.", 5,
      "Name the individual in examples", "Risky.", -5,
      "Discuss performance publicly", "Inappropriate.", -5
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
  description: "An ACH file was transmitted to the Fed with errors, causing settlement issues and customer confusion. Teams must coordinate remediation, notifications, and reconciliation.",
  questions: [
    q("CEO/SVPs", "What should leadership do first?", buildChoices(
      "Activate incident coordination and define external/internal comms cadence", "Provides structure.", 10,
      "Hold off until ACH returns", "Too slow.", 5,
      "Announce exact fix times", "Risky.", -5,
      "Blame Ops publicly", "Unhelpful.", -5
    )),
    q("CEO/SVPs", "What external posture is appropriate today?", buildChoices(
      "Acknowledge issue, what is known, and provide updates; avoid exact times", "Credible.", 10,
      "Silence to avoid panic", "Rumors spread.", 5,
      "Share detailed file errors", "Unnecessary.", -5,
      "Promise blanket credits immediately", "Premature.", -5
    )),
    q("CEO/SVPs", "How should law enforcement/regulator comms be handled?", buildChoices(
      "Through counsel and compliance with factual summaries", "Prudent.", 10,
      "Any staff can reach out directly", "Inconsistent.", 5,
      "No outreach", "Risky.", -5,
      "Publicly share regulator feedback", "Risky.", -5
    )),

    q("IT/Security", "What technical action is key?", buildChoices(
      "Identify root-cause and validate resend logic in a sandbox", "Prevents repeat.", 10,
      "Resend immediately without validation", "Risky.", -5,
      "Disable logging", "Risky.", -5,
      "Share logs externally without agreements", "Risky.", 5
    )),
    q("IT/Security", "How to prevent recurrence?", buildChoices(
      "Add validation checks and dual control on file creation", "Strengthens process.", 10,
      "Trust manual checks only", "Error-prone.", 5,
      "No changes", "Risk remains.", -5,
      "Allow personal scripts", "Risky.", -5
    )),
    q("IT/Security", "What comms to staff are useful?", buildChoices(
      "Clear steps for reporting anomalies and temporary workarounds", "Practical.", 10,
      "Generic note", "Light.", 5,
      "None", "Confusion.", -5,
      "Share sensitive logs widely", "Risky.", -5
    )),

    q("HR", "How should staffing be managed during reconciliation surge?", buildChoices(
      "Temporary reassignments and pre-approved overtime with wellness guidance", "Balances needs.", 10,
      "No changes", "Strain.", 5,
      "Mandatory extended hours for all", "Burnout.", -5,
      "Cancel all PTO indefinitely", "Overreach.", -5
    )),
    q("HR", "What employee guidance helps most?", buildChoices(
      "Talking points, do/don'ts, and escalation contacts", "Reduces errors.", 10,
      "Ask teams to figure it out", "Inconsistent.", 5,
      "Share customer account examples", "Privacy risk.", -5,
      "Silence", "Rumors.", -5
    )),
    q("HR", "How to support impacted teams?", buildChoices(
      "Manager check-ins and EAP reminders", "Helpful.", 10,
      "Ignore concerns", "Missed support.", 5,
      "Public blame messaging", "Counterproductive.", -5,
      "Mandatory overtime", "Burnout.", -5
    )),

    q("Finance", "What financial controls are needed now?", buildChoices(
      "Track exposure and credits separately with approvals", "Audit-ready.", 10,
      "Normal processing only", "Slow.", 5,
      "Pause all postings", "Too blunt.", -5,
      "Share ledgers externally", "Risky.", -5
    )),
    q("Finance", "How to communicate with customers with returned ACH?", buildChoices(
      "Explain issue, next steps, and credits where applicable", "Builds trust.", 10,
      "Generic 'working on it'", "Vague.", 5,
      "Exact fix times", "Risky.", -5,
      "Share internal error codes", "Confusing.", -5
    )),
    q("Finance", "What reporting cadence helps?", buildChoices(
      "Daily status on counts, credits, and backlog", "Keeps alignment.", 10,
      "Weekly only", "Slow.", 5,
      "None", "Opaque.", -5,
      "Raw dumps", "Noisy.", -5
    )),

    q("Loans", "How to handle loan payments impacted by the file?", buildChoices(
      "Identify and correct; communicate options to borrowers", "Customer-friendly.", 10,
      "Wait for customers to complain", "Reactive.", 5,
      "Reverse everything broadly", "Over-correction.", -5,
      "Share borrower data widely", "Risky.", -5
    )),
    q("Loans", "What borrower comms are appropriate?", buildChoices(
      "If impacted, provide specific steps and timelines", "Professional.", 10,
      "Mass notice to all borrowers", "Overkill.", 5,
      "No notice even if impacted", "Risky.", -5,
      "Promise exact dates", "Risky.", -5
    )),
    q("Loans", "What changes to LOS controls are helpful?", buildChoices(
      "Temporary restrictions on automated postings tied to ACH until validated", "Reduces risk.", 10,
      "None", "Risk remains.", 5,
      "Disable LOS entirely", "Too blunt.", -5,
      "Give more admins", "Risky.", -5
    )),

    q("Accounting", "How to reconcile the error efficiently?", buildChoices(
      "Central exception log and daily true-up plan", "Controls and speed.", 10,
      "Normal cadence only", "Slow.", 5,
      "Suspend reconciliation", "Risky.", -5,
      "Local ad-hoc methods", "Inconsistent.", -5
    )),
    q("Accounting", "What documentation should be produced?", buildChoices(
      "Incident summary with controls, impacts, and approvals", "Supports later review.", 10,
      "Only GL entries", "Thin.", 5,
      "No documentation", "Risky.", -5,
      "Share sensitive docs externally", "Risky.", -5
    )),
    q("Accounting", "How to handle service credits?", buildChoices(
      "Track separately with rationale and incident tags", "Transparent.", 10,
      "Lump later", "Opaque.", 5,
      "Ignore", "Backlog.", -5,
      "Offset arbitrarily", "Non-compliant.", -5
    )),

    q("Deposits", "What to tell customers at branches?", buildChoices(
      "Provide talking points, alternatives, and expected next steps", "Reduces friction.", 10,
      "Ask to come back later", "Weak.", 5,
      "Promise instant fixes", "Risky.", -5,
      "Share internal error codes", "Confusing.", -5
    )),
    q("Deposits", "How to handle debit card/ACH confusion?", buildChoices(
      "Explain differences and what was impacted; provide options", "Educates.", 10,
      "Say everything is fine", "Often wrong.", 5,
      "No guidance", "Confusing.", -5,
      "Share screenshots", "Risky.", -5
    )),
    q("Deposits", "What dispute handling approach fits?", buildChoices(
      "Flag incident-related disputes and prioritize", "Traceable.", 10,
      "Treat as normal", "Slow.", 5,
      "Suspend handling", "Harmful.", -5,
      "Share internal screens", "Risky.", -5
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
  SCENARIO_ACH_FAILURE,
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
  const valid = SCENARIOS.filter(s => Array.isArray(s.questions) && s.questions.length === 21);
  const pool = valid.length ? valid : SCENARIOS;
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
