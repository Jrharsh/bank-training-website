// api/static-scenarios.js
// 5 static tabletop scenarios.
// Each scenario: 21 questions (3 per department).
// Scoring per choice: correct = 10, partial = 5, wrong = -5, wrong = -5


// Shuffle array utility
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function buildChoices(
  aText, aReason, aScore,
  bText, bReason, bScore,
  cText, cReason, cScore,
  dText, dReason, dScore
) {
  const choices = [
    { text: aText, score: aScore, reason: aReason },
    { text: bText, score: bScore, reason: bReason },
    { text: cText, score: cScore, reason: cReason },
    { text: dText, score: dScore, reason: dReason },
  ];
  return shuffle(choices);
}

function q(department, questionText, choices) {
  return { department, questionText, choices };
}

/* ------------------------- SCENARIO 1 (REWRITTEN – HARDER) ------------------------- */
const SCENARIO_RANSOMWARE = {
  key: "ransomware-core-ach",
  title: "Ransomware Disrupts Core + Online Banking + ACH",
  description:
    "A ransomware event encrypts systems supporting core processing, online banking, and ACH operations. Customer access is degraded, transaction files are delayed, and incident command is activated amid incomplete technical clarity.",
  questions: [

    /* ================= CEO / SVPs ================= */

    q("CEO/SVPs",
      "In the first 30 minutes, which leadership action best stabilizes the situation while preserving flexibility?",
      buildChoices(
        "Activate incident command, assign roles to key leaders, and set a regular cadence for updates to ensure everyone is aligned and the response is structured and effective throughout the incident. Track all actions, monitor for alignment, and review for effectiveness after restoration.",
        "Creates structure and tempo without locking leadership into premature commitments.",
        10,

        "Meet privately with senior leaders first, then activate a formal response group to coordinate actions and messaging, ensuring all departments are represented and communication is consistent across the organization. Track all meetings, monitor for coordination, and review for effectiveness after restoration.",
        "Improves executive alignment but delays broader coordination and operational clarity.",
        5,

        "Let IT and Security continue their assessment before leadership steps in, keeping technical focus but delaying broader coordination, which may result in slower decision-making and less clarity for other teams involved. Track all assessments, monitor for decision-making speed, and review for effectiveness after restoration.",
        "Avoids distraction but leaves a leadership vacuum during a critical early window.",
        -5,

        "Wait for external advisors to provide input before making coordination decisions, delaying action but seeking outside expertise, which could slow down the response and create uncertainty among staff and stakeholders. Track all advice, monitor for delays, and review for effectiveness after restoration.",
        "Introduces delay and dilutes accountability at the most time-sensitive stage.",
        -5
      )
    ),

    q("CEO/SVPs",
      "If system restoration timelines remain uncertain, how should leadership frame ransom payment discussions?",
      buildChoices(
        "Establish a decision framework with legal, regulators, and law enforcement, focusing on restoration but not committing to payment yet. Track all discussions, monitor for governance, and review for effectiveness after restoration.",
        "Keeps options governed and defensible without signaling intent or panic.",
        10,

        "Privately evaluate ransom payment as a backup plan while restoration continues, keeping options open but risking internal confusion. Track all evaluations, monitor for leakage, and review for effectiveness after restoration.",
        "Maintains optionality but risks internal leakage and moral hazard.",
        5,

        "Authorize payment if restoration goes past set time thresholds to reduce customer impact, acting quickly but risking other issues. Track all authorizations, monitor for risks, and review for effectiveness after restoration.",
        "Creates false certainty and ignores legal, ethical, and recovery risks.",
        -5,

        "Defer the decision until technical teams confirm recovery, waiting for clarity but risking rushed choices later on. Track all decisions, monitor for planning delays, and review for effectiveness after restoration.",
        "Delays strategic planning and may force rushed decisions later.",
        -5
      )
    ),

    q("CEO/SVPs",
      "What customer communication approach best balances transparency with operational uncertainty?",
      buildChoices(
        "Acknowledge disruption, share confirmed impacts, explain next steps, and commit to regular updates for transparency and trust. Track all communications, monitor for trust and transparency, and review for effectiveness after restoration.",
        "Builds trust while avoiding speculation or overpromising.",
        10,

        "Issue a brief holding statement to show awareness and promise updates once more details are confirmed and available. Track all statements, monitor for expectation management, and review for effectiveness after restoration.",
        "Reduces silence risk but may not sufficiently manage expectations.",
        5,

        "Emphasize system security assurances but avoid discussing service impacts, aiming to prevent alarm but risking credibility. Track all assurances, monitor for credibility gaps, and review for effectiveness after restoration.",
        "Creates credibility gaps when customers experience disruptions firsthand.",
        -5,

        "Delay external communication until restoration timelines are fully validated, waiting for certainty but increasing speculation. Track all delays, monitor for speculation and reputational damage, and review for effectiveness after restoration.",
        "Increases speculation, call volume, and reputational damage.",
        -5
      )
    ),

    /* ================= IT / Security ================= */

    q("IT/Security",
      "What containment action most effectively limits further impact while preserving investigative integrity?",
      buildChoices(
        "Isolate affected systems, restrict lateral movement, and preserve logs and memory artifacts for forensics. Track all containment actions, monitor for spread and investigation integrity, and review for effectiveness after restoration.",
        "Limits spread and supports both recovery and investigation.",
        10,

        "Increase monitoring and prepare isolation steps while validating indicators of compromise. Track all monitoring, monitor for containment speed, and review for effectiveness after restoration.",
        "Improves situational awareness but delays decisive containment.",
        5,

        "Temporarily reduce logging verbosity to improve system performance during response. Track all changes, monitor for visibility, and review for effectiveness after restoration.",
        "Appears efficient but reduces visibility during a critical phase.",
        -5,

        "Restart impacted systems to clear malicious processes before further encryption occurs. Track all restarts, monitor for data loss and evidence integrity, and review for effectiveness after restoration.",
        "Risks data loss and destroys forensic evidence.",
        -5
      )
    ),

    q("IT/Security",
      "How should backups be incorporated into the recovery strategy?",
      buildChoices(
        "Check backups offline, restore in steps, and monitor for issues. Track all restores, monitor for reinfection risk and recovery control, and review for effectiveness after restoration.",
        "Reduces reinfection risk and supports controlled recovery.",
        10,

        "Spot-check backups, restore key systems, and watch for problems. Track all spot-checks, monitor for recovery speed and reinfection risk, and review for effectiveness after restoration.",
        "Speeds recovery but increases reinfection risk.",
        5,

        "Restore everything at once, then check for errors and issues. Track all restores, monitor for failure impact, and review for effectiveness after restoration.",
        "Magnifies failure impact if backups are compromised.",
        -5,

        "Wait for full analysis, then restore systems and review results. Track all analyses, monitor for outage length and customer impact, and review for effectiveness after restoration.",
        "Unnecessarily extends outage and customer impact.",
        -5
      )
    ),

    q("IT/Security",
      "What approach best governs the return of customer-facing systems?",
      buildChoices(
        "Restore systems in stages, check each step, and monitor after going live. Track all stages, monitor for speed, stability, and customer protection, and review for effectiveness after restoration.",
        "Balances speed with stability and customer protection.",
        10,

        "Bring key channels online first, fix issues as they come up, and monitor closely. Track all channels, monitor for access and volatility, and review for effectiveness after restoration.",
        "Improves access quickly but increases outage volatility.",
        5,

        "Skip change controls, restore everything fast, and check for problems later. Track all changes, monitor for compounding risk and audit exposure, and review for effectiveness after restoration.",
        "Introduces compounding risk and audit exposure.",
        -5,

        "Give broad access to staff, restore quickly, and review after the fact. Track all access, monitor for security and compliance failures, and review for effectiveness after restoration.",
        "Creates significant security and compliance failures.",
        -5
      )
    ),

    /* ================= HR ================= */

    q("HR",
      "What employee guidance best reduces risk while supporting response efforts?",
      buildChoices(
        "Send an official update, include security reminders, and give reporting steps. Track all communications, monitor for mistakes and alignment, and review for effectiveness after restoration.",
        "Reduces mistakes and aligns staff behavior.",
        10,

        "Tell staff to be cautious and wait for more instructions from managers. Track all instructions, monitor for actionable direction, and review for effectiveness after restoration.",
        "Provides awareness but lacks actionable direction.",
        5,

        "Allow use of alternate tools to keep work moving during outages. Track all tool usage, monitor for data leakage and compliance risk, and review for effectiveness after restoration.",
        "Introduces data leakage and compliance risk.",
        -5,

        "Give no guidance until the incident is fully understood by leadership. Track all decisions, monitor for rumors and unsafe behavior, and review for effectiveness after restoration.",
        "Allows rumors and unsafe behavior to spread.",
        -5
      )
    ),

    q("HR",
      "What staffing approach best sustains response operations over multiple days?",
      buildChoices(
        "Use structured shifts, coverage plans, and required rest for all staff. Track all schedules, monitor for burnout and error rates, and review for effectiveness after restoration.",
        "Reduces burnout and error rates.",
        10,

        "Track overtime, let managers adjust staffing as needed for coverage. Track all overtime, monitor for coverage, and review for effectiveness after restoration.",
        "Provides flexibility but risks uneven coverage.",
        5,

        "Allow unlimited overtime to maximize staff availability during response. Track all overtime, monitor for fatigue and HR risk, and review for effectiveness after restoration.",
        "Increases fatigue-related mistakes and HR risk.",
        -5,

        "Limit overtime strictly to control costs and hours for all staff. Track all limits, monitor for outage and stress, and review for effectiveness after restoration.",
        "Prolongs outage and operational stress.",
        -5
      )
    ),

    q("HR",
      "If remote work is required due to system disruption, what posture best balances access and security?",
      buildChoices(
        "Allow remote work with approved tools, MFA, VPN, and clear security rules. Track all remote work, monitor for continuity and risk, and review for effectiveness after restoration.",
        "Maintains continuity while managing risk.",
        10,

        "Permit some remote work, relax certain controls to make access easier. Track all controls, monitor for access and security posture, and review for effectiveness after restoration.",
        "Improves access but weakens security posture.",
        5,

        "Turn off MFA for now to avoid remote access problems for staff. Track all changes, monitor for compromise risk, and review for effectiveness after restoration.",
        "Significantly increases compromise risk.",
        -5,

        "Stop all work until systems are stable and secure for everyone. Track all work stoppages, monitor for operational disruption, and review for effectiveness after restoration.",
        "Creates unnecessary operational disruption.",
        -5
      )
    ),

    /* ================= Finance ================= */

    q("Finance",
      "What financial control should be established immediately during the incident?",
      buildChoices(
        "Set up a cost center, require approvals, and document all spending decisions. Track all spending, monitor for auditability and discipline, and review for effectiveness after restoration.",
        "Preserves auditability and spending discipline.",
        10,

        "Track big expenses, estimate internal costs, and review after the incident. Track all expenses, monitor for visibility and impact, and review for effectiveness after restoration.",
        "Provides partial visibility but misses true impact.",
        5,

        "Let teams spend as needed, then reconcile and review later on. Track all spending, monitor for governance and audit defense, and review for effectiveness after restoration.",
        "Weakens governance and audit defense.",
        -5,

        "Wait to track costs until normal operations are restored for all departments. Track all delays, monitor for blind spots and reporting risk, and review for effectiveness after restoration.",
        "Creates blind spots and reporting risk.",
        -5
      )
    ),

    q("Finance",
      "How should liquidity be managed amid transaction disruptions?",
      buildChoices(
        "Increase monitoring frequency and activate contingency liquidity planning. Track all monitoring, monitor for risk management, and review for effectiveness after restoration.",
        "Supports proactive risk management.",
        10,

        "Maintain standard monitoring with executive check-ins. Track all monitoring, monitor for awareness and rapid shifts, and review for effectiveness after restoration.",
        "Provides awareness but may miss rapid shifts.",
        5,

        "Assume customer behavior will normalize quickly. Track all assumptions, monitor for volatility, and review for effectiveness after restoration.",
        "Underestimates volatility during outages.",
        -5,

        "Pause liquidity analysis until systems are restored. Track all pauses, monitor for financial risk, and review for effectiveness after restoration.",
        "Creates unacceptable financial risk.",
        -5
      )
    ),

    q("Finance",
      "How should payments to critical vendors be prioritized?",
      buildChoices(
        "Prioritize continuity-critical vendors under executive oversight. Track all payments, monitor for alignment with recovery, and review for effectiveness after restoration.",
        "Aligns spend with recovery objectives.",
        10,

        "Approve vendor payments individually as requests arise. Track all approvals, monitor for control and recovery speed, and review for effectiveness after restoration.",
        "Maintains control but slows recovery.",
        5,

        "Pay invoices based on age or amount to conserve cash. Track all payments, monitor for alignment with operational needs, and review for effectiveness after restoration.",
        "Misaligns payments with operational needs.",
        -5,

        "Suspend all vendor payments during the incident. Track all suspensions, monitor for service degradation and penalties, and review for effectiveness after restoration.",
        "Risks service degradation and penalties.",
        -5
      )
    ),

    /* ================= Loans ================= */

    q("Loans",
      "If the core system is degraded, how should loan operations proceed?",
      buildChoices(
        "Use documented manual procedures, prioritize time-sensitive items, and log all exceptions. Track all procedures, monitor for service and controls, and review for effectiveness after restoration.",
        "Maintains service while preserving controls.",
        10,

        "Pause new originations but manually service existing commitments. Track all originations, monitor for risk and impact, and review for effectiveness after restoration.",
        "Reduces risk but impacts customers and revenue.",
        5,

        "Proceed with manual processing without documentation to maintain speed. Track all processing, monitor for compliance and audit failures, and review for effectiveness after restoration.",
        "Creates compliance and audit failures.",
        -5,

        "Cancel in-flight loans broadly until restoration. Track all cancellations, monitor for customer and contractual impact, and review for effectiveness after restoration.",
        "Harms customers and contractual obligations.",
        -5
      )
    ),

    q("Loans",
      "What control is most critical during manual underwriting?",
      buildChoices(
        "Dual review with standardized checklists and secure document handling. Track all reviews, monitor for accuracy and audit trail, and review for effectiveness after restoration.",
        "Preserves accuracy and audit trail.",
        10,

        "Manager review only for higher-risk loans. Track all reviews, monitor for control and segregation, and review for effectiveness after restoration.",
        "Provides partial control but weaker segregation.",
        5,

        "Verbal approvals to expedite processing. Track all approvals, monitor for evidence and risk, and review for effectiveness after restoration.",
        "Insufficient evidence and high risk.",
        -5,

        "Unrestricted document sharing to keep work moving. Track all sharing, monitor for PII exposure and compliance breaches, and review for effectiveness after restoration.",
        "PII exposure and compliance breaches.",
        -5
      )
    ),

    q("Loans",
      "How should borrower communications be handled during disruption?",
      buildChoices(
        "Use consistent scripts with factual updates and defined escalation paths. Track all communications, monitor for confusion and complaints, and review for effectiveness after restoration.",
        "Reduces confusion and complaints.",
        10,

        "Allow lenders to tailor messages within general guidance. Track all messages, monitor for empathy and inconsistency, and review for effectiveness after restoration.",
        "Improves empathy but risks inconsistency.",
        5,

        "Avoid communication until timelines are certain. Track all delays, monitor for frustration and mistrust, and review for effectiveness after restoration.",
        "Increases frustration and mistrust.",
        -5,

        "Provide optimistic timelines to reassure borrowers. Track all timelines, monitor for credibility loss, and review for effectiveness after restoration.",
        "Credibility loss if missed.",
        -5
      )
    ),

    /* ================= Accounting ================= */

    q("Accounting",
      "How should accounting address incomplete or delayed data?",
      buildChoices(
        "Perform provisional reporting with enhanced reconciliations and documented adjustments. Track all reporting, monitor for transparency and control, and review for effectiveness after restoration. Track all actions, monitor for transparency and control, and review for effectiveness after restoration.",
        "Maintains transparency and control.",
        10,

        "Delay close briefly while reconciling only material accounts. Track all delays, monitor for control and documentation and effectiveness, and review for effectiveness after restoration.",
        "Reasonable if controlled and documented.",
        5,

        "Skip reconciliations to close on time. Track all skips, monitor for misstatement risk and effectiveness, and review for effectiveness after restoration.",
        "Increases misstatement risk.",
        -5,

        "Adjust entries to smooth disruption impact. Track all adjustments, monitor for ethical and audit violations and effectiveness, and review for effectiveness after restoration.",
        "Ethical and audit violations.",
        -5
      )
    ),

    q("Accounting",
      "Which reconciliations should take priority during recovery?",
      buildChoices(
        "Cash, customer balances, and inter-system differences. Track all reconciliations, monitor for financial risk and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for financial risk and effectiveness, and review for effectiveness after restoration.",
        "Targets highest financial risk.",
        10,

        "Cash accounts only initially. Track all reconciliations, monitor for risk coverage and effectiveness, and review for effectiveness after restoration.",
        "Partial risk coverage.",
        5,

        "Focus on non-material accounts to show progress. Track all accounts, monitor for exposure and effectiveness, and review for effectiveness after restoration.",
        "Misses real exposure.",
        -5,

        "Allow undocumented overrides to speed reconciliation. Track all overrides, monitor for audit trail and effectiveness, and review for effectiveness after restoration.",
        "Destroys audit trail.",
        -5
      )
    ),

    q("Accounting",
      "How can audit trail be preserved during manual workarounds?",
      buildChoices(
        "Centralized logs with approvals and retained evidence. Track all logs, monitor for defensibility and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for defensibility and effectiveness, and review for effectiveness after restoration.",
        "Defensible for examiners and auditors.",
        10,

        "Email approvals retained by managers. Track all approvals, monitor for evidence and audit difficulty and effectiveness, and review for effectiveness after restoration.",
        "Provides evidence but is difficult to audit.",
        5,

        "Suspend logging to reduce administrative burden. Track all suspensions, monitor for traceability and effectiveness, and review for effectiveness after restoration.",
        "Eliminates traceability.",
        -5,

        "Share credentials to simplify access. Track all sharing, monitor for segregation of duties and effectiveness, and review for effectiveness after restoration.",
        "Breaks segregation of duties.",
        -5
      )
    ),

    /* ================= Deposits ================= */

    q("Deposits",
      "How should customer access be preserved during online banking disruption?",
      buildChoices(
        "Implement branch and ATM continuity plans with scripts and regular updates. Track all plans, monitor for access and trust and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for access and trust and effectiveness, and review for effectiveness after restoration.",
        "Maintains access and trust.",
        10,

        "Focus on ATM access with limited branch support. Track all access, monitor for support and partial access and effectiveness, and review for effectiveness after restoration.",
        "Provides partial access.",
        5,

        "Suspend all access until systems are stable. Track all suspensions, monitor for panic and reputational damage and effectiveness, and review for effectiveness after restoration.",
        "Triggers panic and reputational damage.",
        -5,

        "Allow customers to discover outages without communication. Track all communications, monitor for complaints and confusion and effectiveness, and review for effectiveness after restoration.",
        "Increases complaints and confusion.",
        -5
      )
    ),

    q("Deposits",
      "What withdrawal policy best balances liquidity and fairness?",
      buildChoices(
        "Temporary limits with clear explanations and escalation paths. Track all limits, monitor for risk and trust and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for risk and trust and effectiveness, and review for effectiveness after restoration.",
        "Controls risk while maintaining trust.",
        10,

        "Restrict only unusually large withdrawals. Track all restrictions, monitor for risk and consistency and effectiveness, and review for effectiveness after restoration.",
        "Reduces some risk but lacks consistency.",
        5,

        "Permit unlimited withdrawals to avoid complaints. Track all withdrawals, monitor for liquidity risk and effectiveness, and review for effectiveness after restoration.",
        "Liquidity risk escalates.",
        -5,

        "Allow each branch to set its own rules. Track all rules, monitor for inconsistency and escalation and effectiveness, and review for effectiveness after restoration.",
        "Creates inconsistency and escalation.",
        -5
      )
    ),

    q("Deposits",
      "How often should public status updates be issued?",
      buildChoices(
        "At a predictable cadence with verified information and next steps. Track all updates, monitor for speculation and call volume and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for speculation and call volume and effectiveness, and review for effectiveness after restoration.",
        "Reduces speculation and call volume.",
        10,

        "Only when major milestones occur. Track all milestones, monitor for predictability and silence and effectiveness, and review for effectiveness after restoration.",
        "Less predictable but better than silence.",
        5,

        "Continuously as staff learn new information. Track all updates, monitor for confusion and misinformation and effectiveness, and review for effectiveness after restoration.",
        "Creates confusion and misinformation.",
        -5,

        "Restrict updates to internal audiences only. Track all restrictions, monitor for customer information and effectiveness, and review for effectiveness after restoration.",
        "Leaves customers uninformed.",
        -5
      )
    ),
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
      "Activate incident command, escalate vendor at exec level, and assign a single spokesperson. Track all actions, monitor for decision alignment, vendor response, and messaging consistency, and review for effectiveness after restoration.", "Aligns decisions, speeds vendor response, and keeps messaging consistent.", 10,
      "Wait for vendor’s next ETA before organizing internally. Track all decisions, monitor for coordination and staff confusion, and review for effectiveness after restoration.", "Delays coordination and confuses staff.", 5,
      "Let vendor lead your response entirely. Track all actions, monitor for control and accountability, and review for effectiveness after restoration.", "Loss of control and accountability.", -5,
      "Publish a public blame statement immediately. Track all communications, monitor for vendor cooperation and risk, and review for effectiveness after restoration.", "Premature and risky; worsens vendor cooperation.", -5
    )),
    q("CEO/SVPs", "What should customer-facing communications emphasize today?", buildChoices(
      "Transparent status (what’s impacted), workarounds, and predictable update cadence. Track all communications, monitor for trust and call volume, and review for effectiveness after restoration.", "Builds trust and reduces call volume.", 10,
      "Promise specific restoration times from the vendor. Track all promises, monitor for credibility risk, and review for effectiveness after restoration.", "Overpromising risks credibility if missed.", 5,
      "Minimize the issue as \"minor\" without details. Track all communications, monitor for evasion and confusion, and review for effectiveness after restoration.", "Looks evasive and increases confusion.", -5,
      "Share detailed vendor contracts publicly. Track all disclosures, monitor for legal and reputational risks, and review for effectiveness after restoration.", "Not appropriate; legal and reputational risks.", -5
    )),
    q("CEO/SVPs", "How do you approach regulatory notification thresholds?", buildChoices(
      "Notify the primary regulator promptly, providing a detailed summary of facts, impacts, and a remediation plan to ensure transparency and compliance throughout the process. Include a timeline of events, anticipated next steps, and request guidance on any additional documentation or follow-up required to maintain regulatory trust. Track all notifications, monitor for governance and filing timeliness, and review for effectiveness after restoration.", "Defensible governance; avoids late or unnecessary filings.", 10,
      "Choose not to notify regulators in order to avoid additional scrutiny, even if the situation escalates and more information becomes available over time. Document all internal discussions and monitor the situation closely, preparing to respond if contacted by regulators or if the issue becomes public. Track all decisions, monitor for reactivity and risk, and review for effectiveness after restoration.", "Reactive and risky.", -5,
      "Immediately blame third parties for the incident and send notifications to regulators, focusing on shifting responsibility rather than addressing the core issues directly. Provide supporting evidence for your claims, outline the impact on your organization, and request that regulators direct inquiries to the third party involved. Track all notifications, monitor for noise and premature action, and review for effectiveness after restoration.", "May be premature and create noise.", 5,
      "Wait to notify regulators until there are widespread customer complaints, then provide a summary of the situation and actions taken, regardless of earlier developments. Prepare a comprehensive report detailing all customer interactions, remediation efforts, and future plans to prevent similar incidents. Track all notifications, monitor for relationship and obligation ownership, and review for effectiveness after restoration.", "You own the relationship and obligations.", -5
    )),

    // IT/Security (3)
    q("IT/Security", "What is the first technical continuity action?", buildChoices(
      "Enable read-only or limited modes across all affected systems, confirm failovers are functioning as intended, and post status banners to inform users of current limitations. Document all actions taken and coordinate with relevant teams to ensure continuity and transparency throughout the process. Track all actions, monitor for access and expectations, and review for effectiveness after restoration.", "Preserves access where possible and sets expectations.", 10,
      "Turn off all digital channels to reduce pressure on the system, including customer-facing portals and internal access points. Notify stakeholders of the shutdown, monitor for any critical impacts, and prepare a plan for gradual restoration once stability is confirmed. Track all actions, monitor for access and impacts, and review for effectiveness after restoration.", "Harms access unnecessarily.", 5,
      "Disable logging to reduce system load during the incident, ensuring that performance is prioritized. Communicate this change to IT and security teams, and establish alternative monitoring methods to track system health and user activity while logs are offline. Track all changes, monitor for evidence and observability, and review for effectiveness after restoration.", "Destroys evidence and observability.", -5,
      "Share admin credentials for faster triage among technical staff, allowing immediate access to all systems. Record who receives credentials, set temporary access controls, and plan to reset all credentials and audit access once the incident is resolved. Track all sharing, monitor for control failures, and review for effectiveness after restoration.", "Major control failure.", -5
    )),
    q("IT/Security", "How should you work with the vendor’s technical teams?", buildChoices(
      "Establish a real-time communications bridge with the vendor’s technical teams, request detailed telemetry data, and align on rollback and restore steps. Schedule regular status updates, document all decisions, and ensure both sides have clear escalation paths for urgent issues. Track all communications, monitor for coordination and surprises, and review for effectiveness after restoration.", "Improves coordination and reduces surprises.", 10,
      "Send occasional emails to the vendor and wait for updates, keeping a log of all correspondence. Inform internal teams of expected delays, monitor for critical changes, and prepare to escalate if responses are not timely or sufficient for incident resolution. Track all communications, monitor for speed and incident resolution, and review for effectiveness after restoration.", "Too slow for an active incident.", 5,
      "Publish vendor indicators of compromise (IOCs) and technical details broadly to all staff, including step-by-step instructions for identifying related issues. Track staff feedback, provide a channel for questions, and update documentation as new information becomes available. Track all communications, monitor for exposure and confusion, and review for effectiveness after restoration.", "Unnecessary exposure and confusion.", -5,
      "Route all technical inquiries through branch offices, instructing staff to collect and forward questions to a central team. Maintain a record of all inquiries, communicate response timelines, and follow up with branches to ensure information is distributed accurately. Track all inquiries, monitor for efficiency and noise, and review for effectiveness after restoration.", "Inefficient and noisy.", -5
    )),
    q("IT/Security", "How do you protect data integrity during backlog posting?", buildChoices(
      "Stage recovery with canary validation and reconciliations before full catch-up, testing a small sample of transactions first. Document all validation steps, monitor for discrepancies, and only proceed to full posting once accuracy is confirmed and reconciliation is complete. Track all actions, monitor for error and duplicate posting risk, and review for effectiveness after restoration.", "Reduces error and duplicate posting risk.", 10,
      "Post everything at once and fix later, prioritizing speed over accuracy. Track all posted transactions, prepare a plan for identifying and correcting errors, and communicate to stakeholders about the risks and expected follow-up actions. Track all actions, monitor for breaks and customer impact, and review for effectiveness after restoration.", "High risk of breaks and customer impact.", 5,
      "Let branches manually enter transactions to help with backlog, providing detailed instructions and temporary access. Monitor for inconsistencies, audit all manual entries, and plan for a comprehensive review and correction process after the backlog is cleared. Track all actions, monitor for risk and audit issues, and review for effectiveness after restoration.", "Inconsistent and risky; audit issues.", -5,
      "Silence alerts during backlog so dashboards look green, suppressing notifications to reduce perceived risk. Keep a record of all suppressed alerts, inform relevant teams, and ensure that a full review of system health is conducted once normal operations resume. Track all actions, monitor for risk and detection delays, and review for effectiveness after restoration.", "Masks risk and delays detection.", -5
    )),

    // HR (3)
    q("HR", "How do you support front-line staffing during the outage?", buildChoices(
      "Implement surge staffing and rotation schedules for front-line employees, provide de-escalation scripts for handling customer frustration, and ensure scheduled breaks are enforced. Track staff well-being, adjust staffing levels as needed, and communicate support resources throughout the outage. Track all actions, monitor for safety and service quality, and review for effectiveness after restoration.", "Improves safety and service quality.", 10,
      "Keep normal staffing levels and hope traffic subsides, maintaining standard shift patterns. Monitor employee stress and customer wait times, offer encouragement, and prepare to make adjustments if conditions worsen or service quality declines. Track all actions, monitor for burnout and lines, and review for effectiveness after restoration.", "Burnout and longer lines.", 5,
      "Forbid breaks during the outage to maximize staff availability, instructing employees to remain at their stations. Monitor for signs of fatigue and stress, document any incidents, and plan to address staff well-being after the outage is resolved. Track all actions, monitor for safety and counterproductivity, and review for effectiveness after restoration.", "Unsafe and counterproductive.", -5,
      "Send staff home to reduce friction and minimize on-site issues, maintaining only essential personnel. Communicate the rationale to all employees, track service impacts, and prepare a plan for rapid re-staffing once normal operations resume. Track all actions, monitor for service failure and recovery, and review for effectiveness after restoration.", "Service failure and longer recovery.", -5
    )),
    q("HR", "What internal guidance should staff receive about discussing the vendor?", buildChoices(
      "Use approved scripts; avoid speculation; refer questions to official status updates. Track all communications, monitor for consistency and defensibility, and review for effectiveness after restoration.", "Consistent, defensible comms.", 10,
      "Allow staff to explain technical details if they think they know. Track all communications, monitor for consistency and risk, and review for effectiveness after restoration.", "Inconsistent and risky.", 5,
      "Encourage venting about the vendor online. Track all communications, monitor for reputational risk, and review for effectiveness after restoration.", "Reputational risk.", -5,
      "Disallow any conversation with customers. Track all communications, monitor for realism and service impact, and review for effectiveness after restoration.", "Unrealistic and harmful to service.", -5
    )),
    q("HR", "What work posture helps back-office operations?", buildChoices(
      "Enable approved remote work for backlog processing with access controls. Track all actions, monitor for productivity and security, and review for effectiveness after restoration.", "Preserves productivity with security.", 10,
      "Allow personal tools to speed work until normal. Track all actions, monitor for policy and data risk, and review for effectiveness after restoration.", "Policy and data risk.", 5,
      "Require in-office only regardless of conditions. Track all actions, monitor for response and morale, and review for effectiveness after restoration.", "May slow response and morale.", -5,
      "No guidance; let teams decide ad-hoc. Track all actions, monitor for outcomes, and review for effectiveness after restoration.", "Inconsistent outcomes.", -5
    )),

    // Finance (3)
    q("Finance", "What should Finance monitor first?", buildChoices(
      "Monitor liquidity, settlement exposure, and cash logistics with increased cadence, reviewing balances and transaction flows frequently. Document all findings, communicate risks to leadership, and adjust monitoring protocols as the outage evolves to avoid surprises and support decision-making. Track all actions, monitor for surprises and decision support, and review for effectiveness after restoration.", "Avoids surprises and supports decisions.", 10,
      "Maintain normal reporting cadence only, continuing with standard schedules and procedures. Track any delays or discrepancies, inform stakeholders of routine updates, and prepare to escalate if issues arise that require more frequent attention. Track all actions, monitor for reporting speed and outage response, and review for effectiveness after restoration.", "Too slow for an outage.", 5,
      "Stop cash orders to save costs during the outage, suspending new requests and communicating the change to branches. Monitor for service impacts, record any access issues, and plan to resume normal operations once stability is restored. Track all actions, monitor for service and access, and review for effectiveness after restoration.", "Harms service and access.", -5,
      "Ignore exposure until restoration, focusing on other priorities during the outage. Document the rationale for this approach, track any resulting risks, and prepare a post-restoration review to address any missed exposures or governance failures. Track all actions, monitor for governance failure, and review for effectiveness after restoration.", "Governance failure.", -5
    )),
    q("Finance", "How do you handle incident spend and credits?", buildChoices(
      "Create incident cost center; track vendor credits/SLA claims with documentation. Track all actions, monitor for audit readiness and value recovery, and review for effectiveness after restoration.", "Audit-ready and recovers value.", 10,
      "Track major invoices only; revisit credits later. Track all actions, monitor for recovery risk, and review for effectiveness after restoration.", "Partial and risks missed recoveries.", 5,
      "Pause all vendor payments universally. Track all actions, monitor for service disruption, and review for effectiveness after restoration.", "May disrupt critical services.", -5,
      "Hide costs across misc categories. Track all actions, monitor for reporting integrity risk, and review for effectiveness after restoration.", "Reporting integrity risk.", -5
    )),
    q("Finance", "What is the payment prioritization during the outage?", buildChoices(
      "Critical ops, communications, and logistics supporting continuity first. Track all actions, monitor for spend alignment and stability, and review for effectiveness after restoration.", "Aligns spend to stability.", 10,
      "FIFO by invoice date. Track all actions, monitor for criticality alignment, and review for effectiveness after restoration.", "Ignores operational criticality.", 5,
      "Pay smallest invoices first. Track all actions, monitor for impact alignment, and review for effectiveness after restoration.", "Not aligned to impact.", -5,
      "Stop all payments until issue resolves. Track all actions, monitor for service disruption risk, and review for effectiveness after restoration.", "Service disruption risk.", -5
    )),

    // Loans (3)
    q("Loans", "How do you handle time-sensitive loan disbursements if core is degraded?", buildChoices(
      "Use a manual playbook with dual control and evidence for each disbursement until systems return, documenting every step and ensuring oversight. Communicate the process to all stakeholders and review transactions for compliance once systems are restored. Track all actions, monitor for service and control, and review for effectiveness after restoration.", "Balances service and control.", 10,
      "Pause all disbursements broadly, notifying customers of the delay and tracking all pending requests. Prepare a plan for rapid processing once systems are operational, and monitor for reputational impacts during the outage. Track all actions, monitor for customer harm and reputation, and review for effectiveness after restoration.", "Customer harm and reputational impact.", 5,
      "Proceed via email-only approvals, collecting all necessary documentation electronically and maintaining a log of approvals. Communicate risks to staff, monitor for fraud, and plan to audit all transactions after the outage. Track all actions, monitor for evidence and fraud risk, and review for effectiveness after restoration.", "Weak evidence and fraud risk.", -5,
      "Let lenders bypass controls on a case-by-case basis, allowing discretion for urgent needs. Record all exceptions, communicate the rationale to compliance teams, and review for policy violations once normal operations resume. Track all actions, monitor for compliance failure, and review for effectiveness after restoration.", "Compliance failure.", -5
    )),
    q("Loans", "How should rate-lock/closing timelines be managed?", buildChoices(
      "Proactively communicate impacts to borrowers, offer alternatives, and document all exceptions to standard timelines. Track customer feedback, update staff on procedures, and review all cases for compliance after the outage. Track all actions, monitor for complaints and trust, and review for effectiveness after restoration.", "Reduces complaints and preserves trust.", 10,
      "Promise on-time closings regardless of the outage, reassuring borrowers and staff. Monitor for missed deadlines, document any issues, and prepare to address complaints or reputational risks if expectations are not met. Track all actions, monitor for expectations, and review for effectiveness after restoration.", "Sets unrealistic expectations.", 5,
      "Avoid discussing delays to reduce panic, instructing staff to minimize mention of timing issues. Track customer reactions, document any confusion, and plan to clarify procedures once normal operations resume. Track all actions, monitor for panic and confusion, and review for effectiveness after restoration.", "Backfires when delays occur.", -5,
      "Ask borrowers to sign blank forms to finish later, expediting the process during the outage. Record all instances, communicate risks to compliance, and review for legal or regulatory issues after restoration. Track all actions, monitor for compliance risk, and review for effectiveness after restoration.", "High compliance risk.", -5
    )),
    q("Loans", "What control applies to document handling during manual work?", buildChoices(
      "Use secure storage, role-based access, and exception logging for all documents handled manually, tracking every access and change. Communicate procedures to staff, review logs regularly, and audit all manual work after the outage.", "Preserves privacy and audit trail.", 10,
      "Allow personal email for speed, instructing staff to use their own accounts for document transfer. Track all communications, inform compliance of the approach, and plan to review for privacy or policy breaches after restoration.", "Privacy and policy breach.", 5,
      "Share credentials to keep work moving, providing access to necessary systems for all involved. Record who receives credentials, monitor for segregation failures, and reset all access once normal operations resume.", "Segregation failure.", -5,
      "Disable logging temporarily to reduce system load, suspending record-keeping for manual work. Document the rationale, inform relevant teams, and plan to restore logging and review for evidence loss after the outage.", "Evidence loss.", -5
    )),

    // Accounting (3)
    q("Accounting", "How should posting delays be reflected in reporting?", buildChoices(
      "Use provisional reporting with enhanced reconciliations and thorough documentation for all posting delays, noting the reasons and impacts. Communicate updates to stakeholders, review for accuracy, and ensure transparency throughout the outage period. Track all reporting, monitor for transparency and control, and review for effectiveness after restoration.", "Transparent and controlled.", 10,
      "Report estimates without notes to avoid questions, providing summary figures only. Track any discrepancies, prepare to address stakeholder concerns, and plan to update reports with full details once the outage is resolved. Track all reporting, monitor for stakeholder impact, and review for effectiveness after restoration.", "Misleading to stakeholders.", 5,
      "Skip reconciliations until month-end, postponing all review and adjustment activities. Document the rationale, monitor for misstatements, and prepare for a comprehensive reconciliation process after restoration. Track all actions, monitor for breaks and misstatements, and review for effectiveness after restoration.", "Breaks and misstatements likely.", -5,
      "Smooth entries to hide outage impact, adjusting figures to minimize visible effects. Record all changes, inform relevant teams, and review for ethics and audit risks once normal operations resume. Track all actions, monitor for ethics and audit risk, and review for effectiveness after restoration.", "Ethics and audit risk.", -5
    )),
    q("Accounting", "What reconciliations are top priority after restoration?", buildChoices(
      "Reconcile cash, suspense accounts, and inter-system breaks from backlog posting first, documenting all findings and actions. Communicate priorities to the team, track progress, and review for material risks before moving to other reconciliations. Track all reconciliations, monitor for material risk, and review for effectiveness after restoration.", "Targets material risk first.", 10,
      "Reconcile cash only and do others later, focusing initial efforts on liquid assets. Document the approach, monitor for issues in other accounts, and plan to address remaining reconciliations as resources allow. Track all reconciliations, monitor for coverage, and review for effectiveness after restoration.", "Partial coverage.", 5,
      "Do not perform any reconciliations, assuming the vendor caught everything. Record the rationale, communicate the decision to stakeholders, and prepare to review for undetected breaks if issues arise. Track all reconciliations, monitor for risk, and review for effectiveness after restoration.", "Risk of undetected breaks.", -5,
      "Use manual overrides with no logs, making adjustments without record-keeping. Track any changes made, inform relevant teams, and plan to restore proper audit trails after the outage. Track all overrides, monitor for audit trail failure, and review for effectiveness after restoration.", "Audit trail failure.", -5
    )),
    q("Accounting", "How do you preserve evidence during manual processing?", buildChoices(
      "Maintain a central log of all approvals and changes during manual processing, including links to supporting artifacts. Communicate procedures to staff, review logs regularly, and ensure consistency and defensibility for future audits. Track all logs, monitor for defensibility and consistency, and review for effectiveness after restoration.", "Defensible and consistent.", 10,
      "Collect email threads later to document manual processing, instructing staff to save relevant communications. Track completeness, inform compliance of the approach, and review for gaps after restoration. Track all documentation, monitor for completeness and gaps, and review for effectiveness after restoration.", "Messy and incomplete.", 5,
      "Use verbal approvals only, allowing decisions to be made without written records. Monitor for weak evidence, document any issues, and plan to strengthen approval processes once normal operations resume. Track all approvals, monitor for evidence and process strength, and review for effectiveness after restoration.", "Weak evidence.", -5,
      "Delete drafts and notes to reduce clutter, removing interim documentation during manual work. Record the rationale, inform relevant teams, and review for regulatory risks after the outage. Track all deletions, monitor for regulatory risk, and review for effectiveness after restoration.", "Regulatory risk.", -5
    )),

    // Deposits (3)
    q("Deposits", "What should branches tell customers about delayed postings?", buildChoices(
      "Use approved scripts to explain what’s impacted, what customers can do, and where to check status updates. Document all customer interactions, provide consistent guidance, and escalate complex cases as needed to maintain trust and clarity. Track all communications, monitor for guidance and trust, and review for effectiveness after restoration.", "Consistent and practical guidance.", 10,
      "Say \"everything is fine\" to avoid panic, reassuring customers without providing details. Track customer reactions, prepare to address concerns if delays become visible, and review communication strategy after the outage. Track all communications, monitor for credibility risk, and review for effectiveness after restoration.", "Credibility risk when delays are visible.", 5,
      "Blame vendor staff by name when discussing delays, identifying individuals responsible. Record all such communications, inform management of the approach, and review for professionalism and risk after restoration. Track all communications, monitor for professionalism and risk, and review for effectiveness after restoration.", "Unprofessional and risky.", -5,
      "Share internal emails as proof of the situation, providing customers with behind-the-scenes information. Document what is shared, communicate risks to staff, and review for appropriateness and confidentiality after the outage. Track all communications, monitor for appropriateness and confidentiality, and review for effectiveness after restoration.", "Inappropriate and risky.", -5
    )),
    q("Deposits", "How should holds/fees be handled fairly during the outage?", buildChoices(
      "Implement a temporary policy with clear criteria and an escalation path for handling holds and fees during the outage. Communicate the policy to all branches, track exceptions, and review for fairness and consistency after restoration. Track all policies, monitor for fairness and control, and review for effectiveness after restoration.", "Balances fairness and control.", 10,
      "Waive all holds and fees universally, applying the same approach to every customer. Document the rationale, monitor for abuse, and prepare to adjust the policy if it becomes unsustainable. Track all waivers, monitor for sustainability and abuse, and review for effectiveness after restoration.", "Unsustainable and may create abuse.", 5,
      "Do not allow waivers under any condition, enforcing standard rules throughout the outage. Track customer complaints, document the impact, and review for reputational risks after normal operations resume. Track all actions, monitor for harm and complaints, and review for effectiveness after restoration.", "Customer harm and complaints.", -5,
      "Apply different rules per branch, allowing each location to decide how to handle holds and fees. Record all decisions, monitor for inconsistencies, and review for fairness and risk after the outage. Track all actions, monitor for inconsistency and risk, and review for effectiveness after restoration.", "Inconsistent and risky.", -5
    )),
    q("Deposits", "What update cadence reduces call volume most effectively?", buildChoices(
      "Provide regular status updates with factual progress and verified ETAs, communicating predictably to customers. Track call volume, adjust cadence as needed, and review effectiveness after the outage. Track all updates, monitor for call volume and trust-building, and review for effectiveness after restoration.", "Predictable and trust-building.", 10,
      "Update customers only when there’s big news, limiting communications to major developments. Monitor for increased call volume, document customer feedback, and review the strategy for future incidents. Track all updates, monitor for predictability and call volume, and review for effectiveness after restoration.", "Less predictable; more calls.", 5,
      "Allow constant unvetted updates from multiple staff, sharing information as it becomes available. Track errors and confusion, inform management of issues, and plan to centralize communications after restoration. Track all updates, monitor for noise and errors, and review for effectiveness after restoration.", "Noise and errors.", -5,
      "Share internal-only updates, keeping customers uninformed during the outage. Record the rationale, monitor for customer frustration, and review for service impacts after normal operations resume. Track all updates, monitor for customer information and service impact, and review for effectiveness after restoration.", "Customers remain uninformed.", -5
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
      "Activate incident governance with Legal and HR, define a preservation-first posture, and coordinate all actions to ensure evidence is protected and decisions are defensible. Communicate the plan to key stakeholders and document every step for future review.", "Ensures coordinated, defensible actions and preserves evidence.", 10,
      "Quietly let audit handle it and wait for a report, minimizing immediate disruption. Track all developments, monitor for additional evidence or losses, and prepare to escalate if the situation worsens or new risks emerge.", "Too slow; evidence and losses can grow.", 5,
      "Suspend all customer communications until month-end, pausing all outreach and updates. Document the rationale, monitor for customer impacts, and plan to resume communications with a full report after the investigation concludes.", "Delays can harm customers and trust.", -5,
      "Ask the employee to explain publicly before acting, requiring a statement in front of staff. Record the process, communicate risks to legal and HR, and review for evidence contamination or prejudicial effects after the fact.", "Prejudicial and risky; can taint evidence.", -5
    )),
    q("CEO/SVPs", "What disclosure approach is appropriate on day one?", buildChoices(
      "Limit disclosure to internal need-to-know only with prepared scripts, and provide external communications only if customers are impacted. Track all communications, review for consistency, and update scripts as the investigation progresses.", "Balances transparency and integrity of investigation.", 10,
      "Issue a public press release naming the employee, sharing details with media and stakeholders. Document the rationale, monitor for legal and privacy risks, and prepare to address any fallout or questions that arise.", "Legal/privacy risk.", 5,
      "Tell branches to improvise answers when asked, allowing staff to respond as they see fit. Track all responses, review for inconsistencies, and plan to standardize communications after the initial phase.", "Inconsistent and risky.", -5,
      "Share raw audit workpapers widely, distributing all findings to staff and stakeholders. Record what is shared, communicate risks to management, and review for uncontrolled information flow after the investigation.", "Uncontrolled and risky.", -5
    )),
    q("CEO/SVPs", "How should leadership engage with law enforcement?", buildChoices(
      "Consult counsel, preserve the evidence chain, and coordinate with law enforcement if thresholds are met. Document all interactions, communicate the plan to stakeholders, and review for legal and investigative integrity throughout the process.", "Defensible coordination without compromising investigation.", 10,
      "Call local police immediately with partial information, providing initial details before a full review. Track all communications, monitor for evidence handling issues, and prepare to follow up with complete documentation as needed.", "May compromise evidence handling.", 5,
      "Avoid law enforcement entirely, handling the matter internally. Document the rationale, monitor for missed recovery or deterrence opportunities, and review for governance risks after the investigation.", "Misses recovery/deterrence opportunities.", -5,
      "Let the implicated employee choose whether to involve law enforcement, allowing them to decide the next steps. Record the process, communicate risks to management, and review for conflicts or governance failures after the fact.", "Conflict and governance failure.", -5
    )),

    // IT/Security (3)
    q("IT/Security", "What immediate access action is required?", buildChoices(
      "Disable implicated accounts, revoke all tokens and keys, and review privileged access paths for any additional exposure. Document every action, communicate changes to IT and security teams, and monitor for further risks after access is removed.", "Reduces further loss and closes exposure.", 10,
      "Increase monitoring but leave access active to watch behavior, tracking all activity in real time. Record findings, communicate risks to management, and prepare to disable access if suspicious actions are detected.", "Leaves risk window open.", 5,
      "Share admin credentials so teams can move faster, providing access to all necessary systems. Track who receives credentials, monitor for segregation failures, and reset all access once the incident is resolved.", "Segregation failure.", -5,
      "Disable logging to reduce noise, suspending record-keeping for the duration of the incident. Document the rationale, inform relevant teams, and plan to restore logging and review for evidence loss after the investigation.", "Destroys forensics.", -5
    )),
    q("IT/Security", "How do you preserve technical evidence?", buildChoices(
      "Snapshot systems, collect all relevant logs, and store them with a documented chain-of-custody. Communicate procedures to staff, review evidence regularly, and ensure support for legal and recovery steps throughout the process.", "Supports legal and recovery steps.", 10,
      "Save screenshots to a shared drive, instructing staff to capture key information. Track completeness, inform compliance of the approach, and review for weak forensics after restoration.", "Partial but weak forensics.", 5,
      "Delete unneeded logs to save space, removing older records during the investigation. Document the rationale, communicate risks to management, and review for evidence loss after the incident is resolved.", "Loss of evidence.", -5,
      "Let staff export data locally for convenience, allowing personal copies of key files. Track all exports, inform compliance, and review for privacy or integrity risks after the investigation.", "Privacy/integrity risk.", -5
    )),
    q("IT/Security", "What controls reduce spread if the employee had cross-department access?", buildChoices(
      "Conduct an immediate access review across all integrated applications, rotate secrets, and validate vendor integrations to close lateral paths quickly. Document all changes, communicate with vendors, and monitor for further risks after containment.", "Closes lateral paths quickly.", 10,
      "Focus only on the primary app they used, reviewing access and activity in that system. Track findings, communicate risks to management, and prepare to expand the review if new evidence emerges.", "Misses other access vectors.", 5,
      "Trust vendor logs to catch everything later, relying on external monitoring for incident detection. Document the rationale, monitor for delays in containment, and review for missed access vectors after the investigation.", "Over-reliance; delays containment.", -5,
      "Turn off monitoring tools so systems run faster, suspending visibility during the incident. Record the rationale, inform relevant teams, and plan to restore monitoring and review for missed activity after the fact.", "Removes visibility.", -5
    )),

    // HR (3)
    q("HR", "What HR step should happen first with the implicated employee?", buildChoices(
      "Place the implicated employee on administrative leave pending investigation, and collect all assets with Legal and IT present. Document every step, communicate the process to staff, and monitor for interference or evidence loss throughout the investigation.", "Reduces interference and preserves evidence.", 10,
      "Immediate termination without documentation, ending employment before a full review. Track all actions, communicate risks to management, and prepare to address complications in investigation and recovery.", "May complicate investigation and recovery.", 5,
      "Public shaming to make an example, announcing the incident to all staff. Record the process, communicate risks to HR and legal, and review for culture and legal impacts after the fact.", "Culture and legal risk.", -5,
      "Do nothing until audit proves loss amount, delaying all action until a full report is available. Document the rationale, monitor for containment and safety risks, and review for missed opportunities after the investigation.", "Delays containment and safety.", -5
    )),
    q("HR", "What guidance goes to staff?", buildChoices(
      "Instruct staff to report concerns via the official channel, avoid speculation, and preserve evidence. Communicate the guidance clearly, track compliance, and review for consistency and effectiveness after the incident.", "Encourages reporting and consistency.", 10,
      "Encourage discussion in group chats to surface leads, allowing open conversation among staff. Track all discussions, monitor for uncontrolled risks, and plan to standardize reporting after the investigation.", "Uncontrolled and risky.", 5,
      "Threaten discipline for any mention of the case, warning staff against discussing the incident. Document the approach, monitor for reporting chills, and review for effectiveness and culture impacts after the fact.", "Chills reporting.", -5,
      "Share the employee name and rumors for transparency, providing details to all staff. Track all communications, inform HR and legal of risks, and review for privacy and legal impacts after the incident.", "Privacy and legal risk.", -5
    )),
    q("HR", "How do you manage safety and coverage?", buildChoices(
      "Coordinate schedules and backups, offer remote work options if needed, and communicate changes to all staff. Track coverage, monitor for burnout, and review for service impacts throughout the incident.", "Reduces burnout and maintains service.", 10,
      "Keep all normal schedules regardless of incident, maintaining standard operations. Track response times, monitor for slowdowns, and prepare to adjust schedules if service quality declines.", "May slow response.", 5,
      "Suspend all operations for the week, pausing all work until the incident is resolved. Document the rationale, monitor for customer harm, and review for overreaction after restoration.", "Overreaction and customer harm.", -5,
      "Let teams self-organize with no oversight, allowing staff to manage coverage independently. Track all decisions, monitor for inconsistencies, and review for risks after the incident.", "Inconsistent and risky.", -5
    )),

    // Finance (3)
    q("Finance", "How should potential losses be tracked?", buildChoices(
      "Create an incident cost center and exposure ledger with approvals, tracking all potential losses as they arise. Communicate the process to finance and audit teams, review for accuracy, and ensure records are audit-ready throughout the investigation.", "Accurate and audit-ready.", 10,
      "Estimate losses later once law enforcement is engaged, waiting for external input before tracking. Document the rationale, monitor for late or inaccurate records, and review for missed exposures after the incident.", "Late and inaccurate.", 5,
      "Record losses in miscellaneous expense categories, spreading costs across unrelated accounts. Track all entries, inform management of the approach, and review for transparency risks after restoration.", "Lack of transparency.", -5,
      "Avoid tracking until customers complain, waiting for external reports before recording losses. Document the rationale, monitor for reactive risks, and review for missed opportunities after the investigation.", "Reactive and risky.", -5
    )),
    q("Finance", "What spend gets priority during investigation?", buildChoices(
      "Prioritize spend on forensics, monitoring, and recovery work aligned to the incident response, tracking all expenditures and approvals. Communicate priorities to finance and management, review for effectiveness, and adjust as the investigation progresses.", "Reduces future loss and speeds clarity.", 10,
      "Freeze all spend to avoid criticism, suspending all payments during the investigation. Track impacts on investigation and recovery, document the rationale, and review for delays after restoration.", "Slows investigation and recovery.", 5,
      "Cut security tooling to save money, reducing investment in protective measures. Track all changes, monitor for increased risk, and review for impacts on investigation and future prevention.", "Increases risk.", -5,
      "Pay without approvals to be fast, expediting payments for incident response. Track all expenditures, inform management of risks, and review for control failures after the investigation.", "Control failure.", -5
    )),
    q("Finance", "How do you approach potential restitution or credits?", buildChoices(
      "Document criteria for customer remediation with Legal, track all cases centrally, and communicate the process to staff. Review for fairness and defensibility, update criteria as needed, and ensure consistency throughout the investigation.", "Fair and defensible.", 10,
      "Handle refunds ad-hoc at branch discretion, allowing each location to decide on restitution. Track all cases, monitor for inconsistencies, and review for risks after the incident is resolved.", "Inconsistent and risky.", 5,
      "Deny all claims until the final report is complete, pausing all remediation until investigation ends. Document the rationale, monitor for trust and reputation risks, and review for missed opportunities after restoration.", "Trust and reputation risk.", -5,
      "Refund everyone universally immediately, providing compensation to all affected customers. Track all payments, monitor for abuse and misstatements, and review for sustainability after the incident.", "Encourages abuse and misstatements.", -5
    )),

    // Loans (3)
    q("Loans", "What should Loans do if loan files were accessed?", buildChoices(
      "Restrict access to loan files, validate integrity, and log all exceptions with dual review. Communicate procedures to staff, track all changes, and review for privacy and audit trail protection throughout the incident.", "Protects privacy and audit trail.", 10,
      "Continue normal processing until issues arise, maintaining standard operations. Track all activity, monitor for new risks, and prepare to escalate if problems are detected.", "Reactive and risky.", 5,
      "Allow personal email for backup copies, instructing staff to use their own accounts for document transfer. Track all communications, inform compliance of the approach, and review for privacy or policy breaches after restoration.", "Privacy/policy breach.", -5,
      "Share credentials to speed verification, providing access to necessary systems for all involved. Record who receives credentials, monitor for segregation failures, and reset all access once normal operations resume.", "Segregation failure.", -5
    )),
    q("Loans", "How do you verify changes to borrower payout instructions?", buildChoices(
      "Verify changes to borrower payout instructions using out-of-band methods with known contacts and documented evidence. Communicate procedures to staff, track all verifications, and review for fraud prevention effectiveness after the incident.", "Prevents misdirection fraud.", 10,
      "Callback to the number provided in a recent email, confirming instructions directly. Track all calls, monitor for weak controls, and review for risks of attacker manipulation after restoration.", "Weak control; can be attacker-controlled.", 5,
      "Accept emailed instructions from familiar addresses, processing changes based on sender recognition. Track all communications, monitor for spoofing risks, and review for effectiveness after the incident.", "Spoofing risk.", -5,
      "Skip checks to move faster, expediting processing without verification. Track all changes, monitor for loss risks, and review for missed opportunities after restoration.", "Loss risk.", -5
    )),
    q("Loans", "What messaging is appropriate to impacted borrowers?", buildChoices(
      "Use standard scripts with factual updates and an escalation path for impacted borrowers, communicating consistently and defensibly. Track all communications, monitor for customer feedback, and review for effectiveness after the incident.", "Consistent and defensible.", 10,
      "Let lenders craft custom narratives per case, allowing personalized messaging for each borrower. Track all communications, monitor for inconsistencies, and review for risks after restoration.", "Inconsistent and risky.", 5,
      "Promise accelerated approvals as compensation, offering expedited service to affected borrowers. Track all promises, monitor for credibility risks, and review for sustainability after the incident.", "Credibility risk.", -5,
      "Avoid communication to reduce noise, pausing all outreach to impacted borrowers. Track all cases, monitor for confusion and churn, and review for missed opportunities after restoration.", "Confusion and churn.", -5
    )),

    // Accounting (3)
    q("Accounting", "How do you handle suspicious adjustments in the GL?", buildChoices(
      "Identify impacted accounts, reverse or segregate entries, and document all approvals for suspicious adjustments in the GL. Communicate procedures to staff, track all changes, and review for transparency and auditability throughout the incident.", "Transparent and auditable.", 10,
      "Net changes to simplify presentation, combining entries for easier review. Track all adjustments, monitor for misstatement risks, and review for accuracy after restoration.", "Misstatement risk.", 5,
      "Delay entries until the investigation ends, postponing all reporting until a full review is complete. Document the rationale, monitor for late or inaccurate records, and review for missed opportunities after the incident.", "Late/inaccurate reporting.", -5,
      "Permit manual overrides with no logs, allowing adjustments without record-keeping. Track all changes, inform management of risks, and review for audit trail failures after restoration.", "Audit trail failure.", -5
    )),
    q("Accounting", "Which reconciliations come first after fraud is suspected?", buildChoices(
      "Reconcile cash, suspense, and inter-system tie-outs where adjustments occurred first, documenting all findings and actions. Communicate priorities to the team, track progress, and review for material risks before moving to other reconciliations.", "Targets highest material risk.", 10,
      "Reconcile cash only and revisit others next month, focusing initial efforts on liquid assets. Document the approach, monitor for partial visibility, and plan to address remaining reconciliations as resources allow.", "Partial visibility.", 5,
      "Skip reconciliations to avoid attention, postponing review to minimize scrutiny. Track all decisions, monitor for findings, and review for missed opportunities after restoration.", "Findings likely.", -5,
      "Adjust entries to match expectations, modifying records to align with anticipated outcomes. Track all changes, monitor for manipulation risks, and review for accuracy after the incident.", "Manipulation risk.", -5
    )),
    q("Accounting", "How do you preserve evidence for examiners?", buildChoices(
      "Maintain a central evidence index with approvals, timestamps, and artifact links for examiners. Communicate procedures to staff, review logs regularly, and ensure defensibility for audit and regulatory review throughout the incident.", "Defensible for audit/regulators.", 10,
      "Archive email threads loosely, instructing staff to save relevant communications. Track completeness, inform compliance of the approach, and review for gaps after restoration.", "Messy and incomplete.", 5,
      "Use verbal approvals only, allowing decisions to be made without written records. Monitor for weak evidence, document any issues, and plan to strengthen approval processes once normal operations resume.", "Weak evidence.", -5,
      "Delete drafts later to reduce storage, removing interim documentation after manual work. Record the rationale, inform relevant teams, and review for regulatory risks after the incident.", "Regulatory risk.", -5
    )),

    // Deposits (3)
    q("Deposits", "How should suspicious customer-impacting activity be handled?", buildChoices(
      "Place holds per policy, escalate cases, and document thoroughly for all suspicious customer-impacting activity. Communicate procedures to staff, track all cases, and review for protection and fairness throughout the incident.", "Balances protection and fairness.", 10,
      "Allow all activity to avoid complaints, permitting transactions without restriction. Track all activity, monitor for loss and compliance risks, and review for effectiveness after restoration.", "Loss and compliance risk.", 5,
      "Let branches decide ad-hoc without scripts, allowing each location to manage cases independently. Track all decisions, monitor for inconsistencies, and review for risks after the incident.", "Inconsistent and risky.", -5,
      "Disclose employee identity to explain delays, sharing personal details with customers. Track all communications, inform management of privacy and legal risks, and review for appropriateness after restoration.", "Privacy/legal risk.", -5
    )),
    q("Deposits", "What should frontline scripts emphasize?", buildChoices(
      "Frontline scripts should emphasize verification steps, factual updates, and where customers can get help. Communicate the guidance to staff, track all customer interactions, and review for confusion and escalation risks throughout the incident.", "Reduces confusion and escalations.", 10,
      "Tell customers everything is fine without details, reassuring them without providing specifics. Track customer reactions, monitor for credibility risks, and review for effectiveness after restoration.", "Credibility risk.", 5,
      "Share internal investigation notes if asked, providing behind-the-scenes information to customers. Track all communications, inform management of risks, and review for appropriateness after the incident.", "Inappropriate and risky.", -5,
      "Encourage customers to post online for updates, directing them to share experiences publicly. Track all posts, monitor for uncontrolled messaging, and review for impacts after restoration.", "Uncontrolled messaging.", -5
    )),
    q("Deposits", "How often should external status be updated if customers are affected?", buildChoices(
      "Provide external status updates at a regular cadence with confirmed facts and next steps if customers are affected. Track all communications, monitor for trust-building, and review for effectiveness after the incident.", "Predictable and trust-building.", 10,
      "Update only if there is breaking news, limiting communications to major developments. Track call volume, monitor for unpredictability, and review for impacts after restoration.", "Unpredictable; more calls.", 5,
      "Provide constant updates with speculation to show action, sharing information as it becomes available. Track all communications, monitor for noise and mistakes, and review for effectiveness after the incident.", "Noise and mistakes.", -5,
      "Share internal-only updates, keeping customers uninformed during the incident. Track all decisions, monitor for customer frustration, and review for service impacts after restoration.", "Customers remain uninformed.", -5
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
      "Activate incident governance with the Payments Ops lead, Legal/Compliance, and Communications, ensuring all decisions are aligned and regulatory and customer actions proceed in sync. Document every step, communicate the plan to stakeholders, and monitor for new developments throughout the first hour. Track all actions, monitor for decision alignment and regulatory/customer actions, and review for effectiveness after restoration.", "Aligns decisions, ensures regulatory and customer actions proceed in sync.", 10,
      "Let Operations fix it quietly and avoid formal activation to reduce attention, allowing the team to work without cross-functional coordination. Track all actions, monitor for increased risk and coordination, and review for effectiveness after restoration.", "Slows cross-functional coordination and increases risk.", 5,
      "Publicly blame a vendor before confirming details, issuing statements to staff and customers. Record the rationale, communicate risks to management, and review for premature or risky impacts after the incident. Track all communications, monitor for risk and premature action, and review for effectiveness after restoration.", "Premature and risky.", -5,
      "Wait for customers to complain before acting, pausing all response until external reports are received. Document the rationale, monitor for trust impacts, and review for missed opportunities after restoration. Track all actions, monitor for trust and missed opportunities, and review for effectiveness after restoration.", "Reactive and harmful to trust.", -5
    )),
    q("CEO/SVPs", "What should initial customer messaging emphasize?", buildChoices(
      "Explain what happened in plain language, what’s impacted, expected timing, and where to get updates, providing clear and consistent information to all customers. Track feedback, update messaging as needed, and review for trust-building effectiveness after the incident. Track all communications, monitor for trust and volume, and review for effectiveness after restoration.", "Builds trust and reduces volume.", 10,
      "Promise exact reversal times before confirming with the Fed and counterparties, reassuring customers with specific timelines. Track all communications, monitor for credibility risks and accuracy, and review for effectiveness after restoration.", "Overpromising risks credibility.", 5,
      "Say \"all accounts are safe\" with no specifics, providing general reassurance without details. Track customer reactions, monitor for frustration and effectiveness, and review for effectiveness after restoration.", "Looks evasive and frustrates customers.", -5,
      "Share individual account details publicly to demonstrate transparency, providing personal information to all customers. Track all disclosures, inform management of privacy and legal risks, and review for appropriateness after restoration. Track all communications, monitor for privacy and legal risk, and review for effectiveness after restoration.", "Privacy and legal risk.", -5
    )),
    q("CEO/SVPs", "How do you handle regulatory notification thresholds?", buildChoices(
      "Assess materiality and customer impact with Compliance and counsel, and notify regulators per established thresholds. Document all decisions, communicate the plan to stakeholders, and review for defensibility and timeliness throughout the incident. Track all notifications, monitor for defensibility and timeliness, and review for effectiveness after restoration.", "Defensible and timely.", 10,
      "Notify everyone immediately regardless of criteria, sending communications to all parties as soon as the incident is discovered. Track all notifications, monitor for premature or noisy impacts, and review for effectiveness after restoration. Track all notifications, monitor for noise and effectiveness, and review for effectiveness after restoration.", "Can be premature and create noise.", 5,
      "Rely on the Fed to notify regulators on your behalf, delegating responsibility for external communications. Document the rationale, monitor for missed obligations, and review for governance risks after the incident. Track all communications, monitor for obligations and governance, and review for effectiveness after restoration.", "You own the obligation.", -5,
      "Ignore thresholds until the next exam, postponing all notifications until a future review. Track all decisions, monitor for governance failures and missed opportunities, and review for effectiveness after restoration.", "Governance failure.", -5
    )),

    // IT/Security (3)
    q("IT/Security", "What technical step protects integrity during correction?", buildChoices(
      "Freeze additional outbound ACH batches, preserve all logs, and enable enhanced monitoring to protect integrity during correction. Document every action, communicate changes to IT and security teams, and monitor for compounding errors and evidence preservation throughout the incident. Track all actions, monitor for integrity and evidence, and review for effectiveness after restoration.", "Prevents compounding errors and preserves evidence.", 10,
      "Purge logs to improve performance while reconciling, removing older records during the correction process. Track all deletions, inform management of risks, and review for forensic impacts after restoration. Track all actions, monitor for forensics and performance, and review for effectiveness after restoration.", "Destroys forensics.", 5,
      "Share admin credentials to accelerate access for all teams, providing immediate entry to necessary systems. Track who receives credentials, monitor for segregation failures, and reset all access once the incident is resolved. Track all actions, monitor for segregation failure, and review for effectiveness after restoration.", "Segregation failure.", -5,
      "Disable monitoring alerts to reduce noise, suspending notifications during the correction process. Document the rationale, inform relevant teams, and plan to restore alerts and review for missed activity after the incident. Track all actions, monitor for visibility and missed activity, and review for effectiveness after restoration.", "Removes visibility during a critical period.", -5
    )),
    q("IT/Security", "How should files and interfaces be handled with the Fed and processors?", buildChoices(
      "Open a real-time bridge with counterparties, validate file hashes and IDs, and align on reversal windows to ensure files and interfaces are handled correctly. Track all communications, monitor for timing risks and rework reduction, and review for effectiveness after restoration.", "Reduces rework and timing risk.", 10,
      "Email updates periodically and wait for responses, sending information to the Fed and processors as needed. Track all responses, monitor for slowdowns and effectiveness, and review for effectiveness after the incident.", "Too slow for a time-bound correction.", 5,
      "Resend corrected files without coordination, transmitting updates independently. Track all postings, monitor for duplicate or contradictory entries and risks, and review for effectiveness after restoration.", "Duplicate/contradictory postings risk.", -5,
      "Allow branches to upload corrected files directly, permitting each location to manage updates. Track all uploads, monitor for uncontrolled risks and effectiveness, and review for effectiveness after the incident.", "Uncontrolled and risky.", -5
    )),
    q("IT/Security", "How do you prevent repeat errors while investigating?", buildChoices(
      "Implement a temporary two-person review for export jobs and parameter changes, adding control while the root cause is determined. Track all reviews, communicate procedures to staff, and monitor for repeat errors throughout the investigation. Track all actions, monitor for control and repeat errors, and review for effectiveness after restoration.", "Adds control while root cause is determined.", 10,
      "Trust the scheduled jobs and focus only on the bad file, maintaining standard operations for all other processes. Track all jobs, monitor for systemic issues and missed opportunities, and review for effectiveness after restoration.", "Misses systemic issues.", 5,
      "Disable change management to move faster, suspending review and approval processes during the investigation. Track all changes, monitor for new errors and effectiveness, and review for effectiveness after restoration.", "Introduces new errors.", -5,
      "Turn off file validations so jobs don’t fail, removing safeguards for the duration of the incident. Track all changes, monitor for risks and missed errors, and review for effectiveness after restoration.", "Removes safeguards.", -5
    )),

    // HR (3)
    q("HR", "What guidance supports staff dealing with upset customers?", buildChoices(
      "Provide scripts, de-escalation tips, and break scheduling for staff dealing with upset customers, and route complex cases to specialists. Track all interactions, monitor for safety and consistency, and review for effectiveness after restoration. Track all actions, monitor for safety and consistency, and review for effectiveness after restoration.", "Improves safety and consistency.", 10,
      "Let each branch decide how to explain the issue, allowing staff to respond as they see fit. Track all communications, monitor for inconsistencies and risks, and review for effectiveness after restoration.", "Inconsistent and risky.", 5,
      "Disallow any discussion and refer customers to the Fed, instructing staff to avoid all explanations. Track all referrals, monitor for unhelpful or inaccurate impacts and effectiveness, and review for effectiveness after restoration.", "Unhelpful and inaccurate.", -5,
      "Encourage staff to post explanations on social media, sharing information publicly. Track all posts, monitor for reputational risks and impacts, and review for effectiveness after restoration.", "Reputational risk.", -5
    )),
    q("HR", "What staffing posture fits a time-sensitive correction window?", buildChoices(
      "Implement documented shifts with surge coverage for Payments Ops and Contact Center, sustaining performance without burnout. Track all schedules, monitor for reliability and burnout, and review for effectiveness after restoration.", "Sustains performance without burnout.", 10,
      "Ask for volunteers to stay late with no plan, relying on staff willingness to cover extra hours. Track all shifts, monitor for uneven or unreliable coverage and effectiveness, and review for effectiveness after restoration.", "Uneven and unreliable.", 5,
      "Mandatory overtime for all departments, requiring extended hours for every team. Track all schedules, monitor for burnout and errors and sustainability, and review for effectiveness after restoration.", "Burnout and errors.", -5,
      "No overtime regardless of volume, maintaining standard hours throughout the incident. Track all schedules, monitor for backlog growth and trust erosion and effectiveness, and review for effectiveness after restoration.", "Backlog grows and trust erodes.", -5
    )),
    q("HR", "What is the appropriate approach with implicated individuals (if any)?", buildChoices(
      "Place implicated individuals on administrative leave pending investigation, collect all assets, and revoke access with IT. Track every step, communicate the process to staff, and review for integrity and safety throughout the incident. Track all actions, monitor for integrity and safety, and review for effectiveness after restoration.", "Protects integrity and safety.", 10,
      "Public reprimand while they continue working, announcing the issue to all staff. Track all communications, monitor for culture and legal risks and effectiveness, and review for effectiveness after restoration.", "Culture and legal risk.", 5,
      "Ignore until root cause is final, delaying all action until a full review is complete. Track all decisions, monitor for risk window impacts and missed opportunities, and review for effectiveness after restoration.", "Leaves risk window open.", -5,
      "Share their name in staff channels for transparency, providing personal details to all staff. Track all communications, monitor for privacy and legal risks and appropriateness, and review for effectiveness after restoration.", "Privacy/legal risk.", -5
    )),

    // Finance (3)
    q("Finance", "What must Finance track from the outset?", buildChoices(
      "Track customer exposure, provisional entries, fees/credits, and incident costs from the outset, documenting every item for accurate governance and recovery. Communicate the process to finance and audit teams, review for completeness, and update records as the incident evolves. Track all actions, monitor for governance and recovery, and review for effectiveness after restoration.", "Accurate governance and recovery.", 10,
      "Track only vendor invoices and reconcile later, focusing on external payments before reviewing internal impacts. Track all invoices, monitor for partial views and true impact, and review for effectiveness after restoration.", "Partial view; misses true impact.", 5,
      "Do not track to avoid panic, suspending all record-keeping during the incident. Track all decisions, monitor for compliance and risk and effectiveness, and review for effectiveness after restoration.", "Non-compliant and risky.", -5,
      "Hide costs in miscellaneous accounts, spreading expenses across unrelated categories. Track all entries, monitor for integrity risks and transparency, and review for effectiveness after restoration.", "Integrity risk.", -5
    )),
    q("Finance", "How should fee waivers/credits be handled?", buildChoices(
      "Implement a criteria-based policy with approvals and evidence per case for fee waivers and credits, documenting every decision for fairness and defensibility. Communicate the policy to all branches, track exceptions, and review for effectiveness after restoration. Track all actions, monitor for fairness and defensibility, and review for effectiveness after restoration.", "Fair and defensible.", 10,
      "Grant everything universally, waiving all fees and credits for every customer. Track all decisions, monitor for abuse and sustainability and effectiveness, and review for effectiveness after restoration.", "Unsustainable and invites abuse.", 5,
      "Deny all credits to protect revenue, suspending all waivers during the incident. Track all decisions, monitor for trust and complaint risks and effectiveness, and review for effectiveness after restoration.", "Trust and complaint risk.", -5,
      "Leave to branch discretion with no logs, allowing each location to decide on waivers independently. Track all decisions, monitor for inconsistencies and risks, and review for effectiveness after restoration.", "Inconsistent and risky.", -5
    )),
    q("Finance", "What payment/vendor prioritization supports recovery?", buildChoices(
      "Prioritize payments for critical operations (processors, comms tools, logistics) first with approvals, aligning spend to incident needs. Track all expenditures, communicate priorities to finance and management, and review for effectiveness after restoration. Track all actions, monitor for spend alignment and recovery, and review for effectiveness after restoration.", "Aligns spend to incident needs.", 10,
      "Pay FIFO only, processing invoices in the order received. Track all payments, monitor for impact misalignment and effectiveness, and review for effectiveness after restoration.", "Ignores impact.", 5,
      "Pay smallest invoices first, prioritizing low-value payments over critical ones. Track all expenditures, monitor for misalignment and effectiveness, and review for effectiveness after restoration.", "Not aligned to criticality.", -5,
      "Stop all payments until resolved, suspending all transactions during the incident. Track all decisions, monitor for service disruption risks and effectiveness, and review for effectiveness after restoration.", "Service disruption risk.", -5
    )),

    // Loans (3)
    q("Loans", "How should automatic loan ACH debits be handled today?", buildChoices(
      "Pause new pulls where appropriate, verify previous postings, and communicate proactively to borrowers about changes to automatic loan ACH debits. Track all actions, monitor for compounding errors and complaints and effectiveness, and review for effectiveness after restoration.", "Prevents compounding errors and complaints.", 10,
      "Continue as normal and fix later if needed, maintaining standard operations for all debits. Track all postings, monitor for reversals and confusion and effectiveness, and review for effectiveness after restoration.", "Creates more reversals and confusion.", 5,
      "Accept borrower emails as proof to skip pulls permanently, allowing customers to opt out via email. Track all communications, monitor for control weakness and risk and effectiveness, and review for effectiveness after restoration.", "Control weakness and risk.", -5,
      "Bypass controls for VIPs, providing special treatment for select borrowers. Track all exceptions, monitor for inconsistency and risk and effectiveness, and review for effectiveness after restoration.", "Inconsistent and risky.", -5
    )),
    q("Loans", "What verification applies to borrower account change requests during this event?", buildChoices(
      "Verify borrower account change requests using out-of-band methods with known contacts and documented evidence during this event. Track all verifications, communicate procedures to staff, and review for fraud prevention effectiveness after restoration. Track all actions, monitor for fraud prevention and effectiveness, and review for effectiveness after restoration.", "Prevents misdirection or fraud.", 10,
      "Callback to the number provided in the request email, confirming instructions directly. Track all calls, monitor for weak controls and risks, and review for effectiveness after restoration.", "Weak control.", 5,
      "Accept emailed instructions from familiar addresses, processing changes based on sender recognition. Track all communications, monitor for spoof risk and effectiveness, and review for effectiveness after restoration.", "Spoof risk.", -5,
      "Skip checks to reduce backlog, expediting processing without verification. Track all changes, monitor for loss risk and missed opportunities, and review for effectiveness after restoration.", "Loss risk.", -5
    )),
    q("Loans", "What should lenders communicate to borrowers impacted by mis-posted ACH?", buildChoices(
      "Use scripts with factual status, timing expectations, and an escalation path for borrowers impacted by mis-posted ACH, communicating consistently to reduce complaints. Track all communications, monitor for customer feedback and effectiveness, and review for effectiveness after restoration.", "Consistency reduces complaints.", 10,
      "Promise resolution by end of day for all, reassuring borrowers with specific timelines. Track all communications, monitor for overpromise risk and effectiveness, and review for effectiveness after restoration.", "Overpromise risk.", 5,
      "Avoid communicating to reduce noise, pausing all outreach to impacted borrowers. Track all cases, monitor for confusion and churn and missed opportunities, and review for effectiveness after restoration.", "Confusion and churn.", -5,
      "Share internal notes on reversal files, providing behind-the-scenes information to borrowers. Track all communications, inform management of risks and appropriateness, and review for effectiveness after restoration.", "Inappropriate and risky.", -5
    )),

    // Accounting (3)
    q("Accounting", "How should mis-posted transactions be reflected immediately?", buildChoices(
      "Reflect mis-posted transactions immediately with provisional entries and clear documentation, using separate accounts for adjustments. Track all changes, communicate procedures to staff, and review for transparency and auditability throughout the incident.", "Transparent and auditable.", 10,
      "Hold all entries until final correction is known, postponing reporting until a full review is complete. Track all decisions, monitor for late or inaccurate records, and review for missed opportunities after restoration.", "Late/inaccurate reporting.", 5,
      "Net differences to hide impact, combining entries to minimize visible effects. Track all adjustments, monitor for misstatement risk, and review for accuracy after restoration.", "Misstatement risk.", -5,
      "Allow manual overrides with no logs, permitting adjustments without record-keeping. Track all changes, inform management of risks, and review for audit trail failure after restoration.", "Audit trail failure.", -5
    )),
    q("Accounting", "What reconciliations are top priority after reversal batches?", buildChoices(
      "Reconcile cash, suspense, and inter-system tie-outs focusing on ACH settlements first after reversal batches, documenting all findings and actions. Communicate priorities to the team, track progress, and review for material risk early in the process.", "Targets material risk early.", 10,
      "Reconcile cash only and others next week, focusing initial efforts on liquid assets. Track all reconciliations, monitor for partial visibility, and plan to address remaining items as resources allow.", "Partial visibility.", 5,
      "Skip reconciliations to move faster, postponing review to minimize delays. Track all decisions, monitor for findings, and review for missed opportunities after restoration.", "Findings likely.", -5,
      "Adjust balances to match expectations, modifying records to align with anticipated outcomes. Track all changes, monitor for manipulation risk, and review for accuracy after restoration.", "Manipulation risk.", -5
    )),
    q("Accounting", "What evidence preservation supports examiners and recovery?", buildChoices(
      "Maintain a central evidence index linking files, approvals, timestamps, and counterpart confirmations to support examiners and recovery. Track all evidence, communicate procedures to staff, and review for defensibility and efficiency throughout the incident.", "Defensible and efficient.", 10,
      "Archive email threads only, organizing communications later for review. Track completeness, inform compliance of the approach, and review for gaps after restoration.", "Messy and incomplete.", 5,
      "Use verbal approvals, allowing decisions to be made without written records. Track all approvals, monitor for weak evidence, and plan to strengthen processes after restoration.", "Weak evidence.", -5,
      "Delete drafts once the panic passes, removing interim documentation after manual work. Track all deletions, inform relevant teams, and review for regulatory risk after restoration.", "Regulatory risk.", -5
    )),

    // Deposits (3)
    q("Deposits", "What should frontline staff tell customers about incorrect postings?", buildChoices(
      "Frontline staff should explain the issue plainly, next steps, and where/when to check status for incorrect postings, providing clear and consistent information to all customers. Track all communications, monitor for confusion and repeat calls, and review for effectiveness after restoration.", "Reduces confusion and repeat calls.", 10,
      "Say balances are fine without explanation, reassuring customers without providing specifics. Track customer reactions, monitor for credibility risk, and review for effectiveness after restoration.", "Credibility risk.", 5,
      "Share internal reversal file names for proof, providing behind-the-scenes information to customers. Track all communications, inform management of risks, and review for appropriateness after restoration.", "Inappropriate.", -5,
      "Refer customers to the Fed for help, directing them to external parties for resolution. Track all referrals, monitor for frustration, and review for effectiveness after restoration.", "Not how it works and frustrates customers.", -5
    )),
    q("Deposits", "How should holds/fees be managed during correction?", buildChoices(
      "Implement a temporary policy with criteria and an escalation path for managing holds and fees during correction, documenting all waivers for fairness and control. Communicate the policy to all branches, track exceptions, and review for effectiveness after restoration.", "Fair and controlled.", 10,
      "Waive everything for everyone, applying the same approach to every customer. Track all decisions, monitor for sustainability and inconsistency, and review for effectiveness after restoration.", "Unsustainable and inconsistent.", 5,
      "No waivers under any condition, enforcing standard rules throughout the correction process. Track all complaints, monitor for customer harm, and review for effectiveness after restoration.", "Customer harm and complaints.", -5,
      "Apply different rules per branch, allowing each location to decide on holds and fees independently. Track all decisions, monitor for inconsistencies and risks, and review for effectiveness after restoration.", "Inconsistent and risky.", -5
    )),
    q("Deposits", "What update cadence reduces call volume most?", buildChoices(
      "Provide updates at a predictable cadence with confirmed progress and verified timing windows to reduce call volume, communicating consistently to all customers. Track call volume, monitor for trust-building and practicality, and review for effectiveness after restoration.", "Trust-building and practical.", 10,
      "Only post when there is a milestone, limiting communications to major developments. Track all updates, monitor for call volume changes, and review for effectiveness after restoration.", "Less predictable; more calls.", 5,
      "Allow constant unvetted updates by many staff, sharing information as it becomes available. Track all communications, monitor for noise and errors, and review for effectiveness after restoration.", "Noise and errors.", -5,
      "Share internal-only updates, keeping customers uninformed during the incident. Track all decisions, monitor for customer frustration, and review for service impacts after restoration.", "Customers remain uninformed.", -5
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
      "Share a calm, factual statement with a clear update schedule and contact information, ensuring all stakeholders are informed and reassured throughout the incident. Track feedback, update messaging as needed, and review for effectiveness after restoration.", "Controls narrative and reduces panic.", 10,
      "Release a short holding statement to acknowledge the situation, followed by a planned, detailed message that outlines next steps and provides contact information for further questions. Track all communications, monitor for effectiveness, and review for improvements after restoration.", "Better than silence, but less effective without cadence detail.", 5,
      "Announce legal action as the first response to rumors, making a public statement that addresses the situation, outlines intended actions, and provides a schedule for future updates to all parties. Track all statements, monitor for impacts, and review for effectiveness after restoration.", "Often inflames situation and distracts from reassurance.", -5,
      "Stay silent and close comments to avoid attention, refraining from any public statements while monitoring the situation and preparing to respond if further developments occur. Track all decisions, monitor for rumor growth, and review for effectiveness after restoration.", "Looks evasive; rumors grow.", -5
    )),
    q("CEO/SVPs", "How should leadership coordinate governance today?", buildChoices(
      "Start a crisis command group with department leads and regular checkpoints, ensuring all decisions are aligned and communicated clearly to every team throughout the incident. Track all meetings, monitor for alignment, and review for effectiveness after restoration.", "Fast alignment and consistent decisions.", 10,
      "Hold daily executive updates and allow departments to act independently, providing a structure for information sharing while letting each group manage its own response and report progress. Track all updates, monitor for conflicts, and review for improvements after restoration.", "Some coordination, but decisions can conflict.", 5,
      "Meet with executives only, without operational leads involved, focusing on high-level strategy and decision-making while relying on department heads to implement actions and communicate with their teams. Track all decisions, monitor for missed realities, and review for effectiveness after restoration.", "Misses branch/call center realities.", -5,
      "Let vendors lead all communications and decisions, giving external partners control over messaging and coordination, while internal teams follow guidance and report outcomes as directed. Track all communications, monitor for misalignment, and review for effectiveness after restoration.", "Loss of control and misaligned priorities.", -5
    )),
    q("CEO/SVPs", "Do you adjust branch cash policy immediately?", buildChoices(
      "Set temporary limits on cash withdrawals, provide scripts for staff, and define escalation steps, ensuring consistency and clear communication with customers at every branch during the incident. Track all transactions, monitor for liquidity and service impacts, and review for effectiveness after restoration.", "Consistency protects liquidity and service.", 10,
      "Adjust policy only for very large withdrawals as needed, allowing flexibility for exceptional cases while maintaining standard procedures for most transactions and providing guidance to staff. Track all exceptions, monitor for inconsistency, and review for effectiveness after restoration.", "Helps but may still create inconsistency.", 5,
      "Close branches to reduce cash demand right away, implementing a shutdown of operations and communicating the decision to customers, with plans for reopening and updates as the situation evolves. Track all closures, monitor for panic and rumor impacts, and review for effectiveness after restoration.", "Worsens panic and rumor.", -5,
      "Let each branch set its own policy for withdrawals, giving managers discretion to respond to local conditions, while providing general guidelines and support for handling customer requests. Track all policies, monitor for escalations, and review for effectiveness after restoration.", "Inconsistent; escalations rise.", -5
    )),

    // IT/Security (3)
    q("IT/Security", "What’s the IT priority with traffic spikes?", buildChoices(
      "Monitor and scale online banking systems, prepare DDoS protections, and ensure all technical teams are ready to respond to increased traffic and potential threats throughout the incident. Track all actions, monitor for outages and access issues, and review for effectiveness after restoration.", "Prevents outages and protects access.", 10,
      "Increase monitoring and prepare to scale if thresholds are hit, coordinating with IT and security teams to address any spikes in activity and maintain system stability as needed. Track all monitoring, monitor for late responses, and review for effectiveness after restoration.", "Helpful, but may be late without proactive scaling.", 5,
      "Disable protections to reduce friction, allowing easier access for users but increasing the risk of security exposure and potential system compromise during high traffic periods. Track all changes, monitor for exposure, and review for effectiveness after restoration.", "Creates security exposure during chaos.", -5,
      "Block all logins temporarily, restricting access for all users while the situation is assessed and technical teams work to resolve issues and restore normal operations. Track all blocks, monitor for panic and customer impact, and review for effectiveness after restoration.", "Amplifies panic and customer impact.", -5
    )),
    q("IT/Security", "How do you monitor for fraud during chaos?", buildChoices(
      "Increase fraud monitoring, implement rate limits, and conduct alert triage, ensuring all suspicious activity is reviewed and addressed promptly by the security team throughout the incident. Track all alerts, monitor for losses and response effectiveness, and review for improvements after restoration.", "Reduces losses and supports response.", 10,
      "Keep current monitoring in place but add manual review for high-risk activity, assigning staff to focus on specific cases and report findings to leadership for further action. Track all reviews, monitor for scalability, and review for effectiveness after restoration.", "Better, but slower and less scalable.", 5,
      "Turn off alerts to reduce noise, minimizing distractions for staff but creating blind spots for potential attacks and increasing the risk of undetected fraudulent activity. Track all changes, monitor for blind spots, and review for effectiveness after restoration.", "Creates blind spots for attacks.", -5,
      "Share admin tools widely to speed up work, giving more staff access to critical systems but increasing the risk of security breakdowns and unauthorized actions during the response. Track all access, monitor for breakdowns, and review for effectiveness after restoration.", "Security breakdown.", -5
    )),
    q("IT/Security", "How should you handle customer status comms technically?", buildChoices(
      "Maintain a single status page with verified updates, ensuring all customers have access to accurate information and regular notifications about the incident and its resolution. Track all updates, monitor for call volume and misinformation, and review for effectiveness after restoration.", "Reduces call volume and misinformation.", 10,
      "Post updates on the website homepage only, providing general information to visitors but lacking the structure and detail of a dedicated status page for ongoing communication. Track all posts, monitor for effectiveness, and review for improvements after restoration.", "Helpful, but less structured than a status page.", 5,
      "No updates until resolved, withholding all information from customers until the incident is fully addressed and normal operations are restored, which may increase speculation and concern. Track all decisions, monitor for speculation, and review for effectiveness after restoration.", "Speculation grows.", -5,
      "Allow anyone to post updates, giving staff and customers the ability to share information freely but increasing the risk of misinformation and confusion during the incident. Track all posts, monitor for misinformation, and review for effectiveness after restoration.", "Misinformation risk.", -5
    )),

    // HR (3)
    q("HR", "How should staffing be handled at branches today?", buildChoices(
      "Implement surge staffing and rotation schedules, provide de-escalation guidance, and ensure all branches have adequate coverage and support throughout the incident. Track all schedules, monitor for safety and service impacts, and review for effectiveness after restoration.", "Safer environment and better service.", 10,
      "Add a few float staff where possible, supplementing regular teams with additional personnel to help meet increased demand and maintain service quality during peak periods. Track all staffing, monitor for peak demand, and review for effectiveness after restoration.", "Helps, but may not meet peak demand.", 5,
      "Force overtime with no breaks, requiring all staff to work extended hours without rest, which may lead to burnout, increased safety risks, and reduced effectiveness over time. Track all schedules, monitor for burnout and safety risk, and review for effectiveness after restoration.", "Burnout and safety risk.", -5,
      "Send everyone home to reduce conflict, closing branches and suspending operations, which may result in service failures and fuel further rumors among customers and staff. Track all closures, monitor for service failure and rumor impacts, and review for effectiveness after restoration.", "Service failure fuels rumor.", -5
    )),
    q("HR", "What should HR tell employees about public rumor discussions?", buildChoices(
      "Remind employees of the social media policy, instructing them not to speculate and to refer all questions to official communications, ensuring consistent messaging and reducing misinformation risk. Track all communications, monitor for PR risk, and review for effectiveness after restoration.", "Prevents misinformation and PR risk.", 10,
      "Suggest staff avoid social media during the incident, recommending that employees limit their online activity and refrain from posting about the situation until further notice. Track all suggestions, monitor for referral guidance, and review for effectiveness after restoration.", "Some benefit, but still lacks clear referral guidance.", 5,
      "Allow staff to respond freely online, giving employees the freedom to share their thoughts and experiences about the incident, which may result in inconsistent information and increased PR risk. Track all posts, monitor for PR risk and inconsistent info, and review for effectiveness after restoration.", "High PR risk; inconsistent info.", -5,
      "Punish anyone who mentions it, enforcing strict disciplinary measures for any employee who discusses the incident publicly, which may chill reporting and worsen organizational culture. Track all disciplinary actions, monitor for reporting chills and culture impacts, and review for effectiveness after restoration.", "Chills reporting and worsens culture.", -5
    )),
    q("HR", "How should HR support customer-facing staff under stress?", buildChoices(
      "Provide scripts for customer interactions, schedule regular breaks, offer escalation support, and implement a safety plan to help staff manage stress and maintain consistency during the incident. Track all support, monitor for incidents and consistency, and review for effectiveness after restoration.", "Reduces incidents and improves consistency.", 10,
      "Offer scripts for customer interactions but leave break scheduling to managers, providing some support while allowing flexibility in how staff manage their workload and stress. Track all schedules, monitor for uneven execution, and review for effectiveness after restoration.", "Some value, but uneven execution.", 5,
      "Tell staff to handle all issues on their own, giving them full responsibility for managing customer interactions and stress without additional support or guidance from HR. Track all issues, monitor for safety and consistency, and review for effectiveness after restoration.", "Unsafe and inconsistent.", -5,
      "Provide no support until next week, delaying all assistance and resources for customer-facing staff, which may lead to increased burnout, mistakes, and dissatisfaction. Track all delays, monitor for burnout and mistakes, and review for effectiveness after restoration.", "Burnout and mistakes increase.", -5
    )),

    // Finance (3)
    q("Finance", "What’s the first step to stabilize liquidity management?", buildChoices(
      "Increase the cadence of liquidity reporting and prepare contingency funding, ensuring all financial teams are aligned and ready to respond to changing conditions throughout the incident. Track all reports, monitor for confident and compliant decisions, and review for effectiveness after restoration.", "Enables confident, compliant decisions.", 10,
      "Keep the normal reporting cadence but add an executive summary, providing additional context and updates to leadership while maintaining standard procedures for financial oversight. Track all summaries, monitor for visibility and speed, and review for effectiveness after restoration.", "Some visibility but may be too slow.", 5,
      "Freeze all outgoing payments, halting all transactions and informing stakeholders of the decision, which may cause operational harm and increase panic among customers and staff. Track all freezes, monitor for harm and panic, and review for effectiveness after restoration.", "Operational harm and panic risk.", -5,
      "Stop cash ordering to save money, suspending all new cash requests and communicating the change to branches, which may worsen shortages and amplify the impact of rumors. Track all changes, monitor for shortages and rumor impact, and review for effectiveness after restoration.", "Worsens shortages and rumor impact.", -5
    )),
    q("Finance", "How do you prioritize payments today?", buildChoices(
      "Prioritize payments for critical operations, cash logistics, and security/infrastructure vendors first, ensuring the bank remains functional and stable throughout the incident. Track all payments, monitor for stability, and review for effectiveness after restoration.", "Keeps bank functioning and stable.", 10,
      "Pay critical items as they arise with executive approval, reviewing each transaction individually and coordinating with leadership to maintain oversight and control. Track all approvals, monitor for speed and consistency, and review for effectiveness after restoration.", "Works but slower and inconsistent.", 5,
      "Pay the smallest invoices first, processing low-value transactions ahead of larger ones and communicating the approach to vendors and staff, regardless of operational impact. Track all payments, monitor for alignment to criticality, and review for effectiveness after restoration.", "Not aligned to criticality.", -5,
      "Stop all payments, suspending all outgoing transactions and notifying stakeholders of the decision, which may result in service collapse and increased risk for the organization. Track all stops, monitor for collapse risk, and review for effectiveness after restoration.", "Service collapse risk.", -5
    )),
    q("Finance", "How should you track costs from this event?", buildChoices(
      "Create an incident cost center with required approvals and thorough documentation, ensuring all expenses are tracked accurately and are audit-ready for future review. Track all costs, monitor for accuracy, and review for effectiveness after restoration.", "Audit-ready and accurate.", 10,
      "Track only vendor costs and estimate internal hours later, maintaining partial records and updating totals as more information becomes available, which may miss the true impact of the event. Track all records, monitor for completeness, and review for effectiveness after restoration.", "Partial but may miss true impact.", 5,
      "Track all costs later from memory, relying on staff recollections to compile expense reports after the incident, which may result in inaccurate and incomplete records. Track all reports, monitor for accuracy, and review for effectiveness after restoration.", "Inaccurate.", -5,
      "Hide costs across miscellaneous categories, dispersing expenses throughout various accounts to avoid scrutiny, which may create reporting integrity risks and complicate future audits. Track all entries, monitor for integrity risk, and review for effectiveness after restoration.", "Reporting integrity risk.", -5
    )),

    // Loans (3)
    q("Loans", "How should loan disbursements proceed during volatility?", buildChoices(
      "Continue loan disbursements with heightened verification and clear communications, ensuring all transactions are reviewed and customers are kept informed throughout the period of volatility. Track all disbursements, monitor for service and risk impacts, and review for effectiveness after restoration.", "Balances service and risk.", 10,
      "Pause new disbursements but keep commitments, temporarily suspending new loans while honoring existing agreements and providing updates to affected customers and staff. Track all commitments, monitor for impacts, and review for effectiveness after restoration.", "Safer, but impacts customers and revenue.", 5,
      "Rush approvals to keep volume up, expediting the loan process and increasing the number of disbursements, which may raise the risk of fraud and credit losses for the institution. Track all approvals, monitor for fraud and credit risk, and review for effectiveness after restoration.", "Fraud/credit risk increases.", -5,
      "Let lenders bypass controls, allowing staff to process loans without standard checks and balances, which may result in compliance failures and increased risk exposure. Track all exceptions, monitor for compliance failure, and review for effectiveness after restoration.", "Compliance failure.", -5
    )),
    q("Loans", "What borrower messaging is appropriate?", buildChoices(
      "Use a standard message that explains what borrowers can expect, provides an escalation path, and ensures all communications are consistent and clear throughout the incident. Track all messages, monitor for complaints, and review for effectiveness after restoration.", "Consistency reduces complaints.", 10,
      "Tell borrowers that processing may be delayed, providing an honest update about potential slowdowns and offering guidance on what steps to take if they have concerns or questions. Track all communications, monitor for vagueness, and review for effectiveness after restoration.", "True but can be too vague without next steps.", 5,
      "Promise faster approvals to calm borrowers, assuring them that their applications will be expedited, even if this creates a risk of overpromising and damaging credibility if delays occur. Track all promises, monitor for credibility risk, and review for effectiveness after restoration.", "Overpromise creates credibility risk.", -5,
      "Provide no communication to borrowers, withholding all updates and information about the status of their loans, which may lead to confusion and increased customer churn. Track all cases, monitor for churn, and review for effectiveness after restoration.", "Confusion increases churn.", -5
    )),
    q("Loans", "What control do you add during high chaos?", buildChoices(
      "Implement dual control on exceptions and use a verification checklist, ensuring all high-risk transactions are reviewed by multiple staff and documented thoroughly during periods of chaos. Track all controls, monitor for fraud and errors, and review for effectiveness after restoration.", "Reduces fraud and errors.", 10,
      "Require manager review on exceptions only, assigning oversight to supervisors for unusual cases while allowing standard transactions to proceed with less scrutiny. Track all reviews, monitor for process gaps, and review for effectiveness after restoration.", "Helps, but may miss process gaps.", 5,
      "Skip controls to move fast, removing standard checks and procedures to expedite processing, which may increase the likelihood of losses and audit findings for the organization. Track all changes, monitor for losses and findings, and review for effectiveness after restoration.", "Losses and findings likely.", -5,
      "Email sensitive documents freely, allowing staff to share confidential information without restrictions, which may create privacy and compliance risks for the institution. Track all emails, monitor for privacy and compliance risk, and review for effectiveness after restoration.", "Privacy/compliance risk.", -5
    )),

    // Accounting (3)
    q("Accounting", "How do you reflect unusual cash movement in reporting?", buildChoices(
      "Report the daily cash position with full reconciliations and detailed notes, providing leadership with accurate visibility and supporting decision-making throughout the incident. Track all reports, monitor for visibility, and review for effectiveness after restoration.", "Accurate visibility for leadership.", 10,
      "Provide daily summary numbers without full reconciliation, offering a general overview of cash movement but risking inaccurate decisions due to incomplete information. Track all summaries, monitor for accuracy, and review for effectiveness after restoration.", "Some signal, but risk inaccurate decisions.", 5,
      "Switch to weekly reporting only, reducing the frequency of updates and potentially delaying the identification of issues during periods of unusual cash movement. Track all reports, monitor for speed, and review for effectiveness after restoration.", "Too slow during a run.", -5,
      "Suppress negative indicators in reports, omitting unfavorable data to present a more positive outlook, which may create governance and ethics risks for the organization. Track all changes, monitor for governance and ethics risk, and review for effectiveness after restoration.", "Governance and ethics risk.", -5
    )),
    q("Accounting", "What’s the priority reconciliation during heavy cash activity?", buildChoices(
      "Reconcile branch cash, vault/ATM settlements, and general ledger tie-outs as a priority, ensuring all material breaks are caught quickly and addressed during periods of heavy cash activity. Track all reconciliations, monitor for material breaks, and review for effectiveness after restoration.", "Catches material breaks quickly.", 10,
      "Reconcile branch cash only, focusing on a single area and providing partial coverage, which may miss settlement issues and create gaps in financial oversight. Track all reconciliations, monitor for coverage, and review for effectiveness after restoration.", "Partial coverage; may miss settlement issues.", 5,
      "Skip reconciliations until month-end, delaying all reviews and allowing the backlog to compound, which may increase risk and make it harder to resolve discrepancies later. Track all delays, monitor for backlog risk, and review for effectiveness after restoration.", "Backlog compounds risk.", -5,
      "Allow unlogged adjustments, permitting staff to make changes without documentation, which may result in no audit trail and increased risk of errors or fraud. Track all adjustments, monitor for audit trail, and review for effectiveness after restoration.", "No audit trail.", -5
    )),
    q("Accounting", "How do you maintain documentation for unusual transactions?", buildChoices(
      "Maintain a central evidence folder with required approvals and a detailed index, ensuring all documentation for unusual transactions is audit-ready and consistent across the organization. Track all documentation, monitor for consistency, and review for effectiveness after restoration.", "Audit-ready and consistent.", 10,
      "Keep notes individually and consolidate them later, allowing staff to maintain their own records before combining them, which may risk loss or inconsistency in documentation. Track all notes, monitor for loss and inconsistency, and review for effectiveness after restoration.", "Better than nothing, but risk loss/inconsistency.", 5,
      "Rely on only verbal approvals for unusual transactions, foregoing written documentation and creating insufficient evidence for future audits or reviews. Track all approvals, monitor for evidence sufficiency, and review for effectiveness after restoration.", "Insufficient evidence.", -5,
      "Delete messy records later, removing incomplete or disorganized documentation after the fact, which may create regulatory risk and hinder future investigations. Track all deletions, monitor for regulatory risk, and review for effectiveness after restoration.", "Regulatory risk.", -5
    )),

    // Deposits (3)
    q("Deposits", "How do you manage large withdrawal requests at branches?", buildChoices(
      "Set policy limits on large cash withdrawals and schedule pickups, ensuring fairness and liquidity control at all branches while communicating procedures to staff and customers. Track all withdrawals, monitor for fairness and liquidity, and review for effectiveness after restoration.", "Fairness and liquidity control.", 10,
      "Allow withdrawals but require manager approval over a set threshold, providing oversight for larger transactions and helping maintain consistency, though some variation may still occur without scripts. Track all approvals, monitor for consistency, and review for effectiveness after restoration.", "Helps, but can still be inconsistent without scripts.", 5,
      "Honor all withdrawal requests immediately, processing every transaction as it comes in, which may increase the risk of cash depletion and create challenges for branch operations. Track all requests, monitor for depletion risk, and review for effectiveness after restoration.", "Cash depletion risk.", -5,
      "Let each branch decide its own approach to large withdrawals, giving managers discretion but increasing the risk of inconsistency and potential issues across locations. Track all policies, monitor for inconsistency and risk, and review for effectiveness after restoration.", "Inconsistent and risky.", -5
    )),
    q("Deposits", "How do you handle call center pressure and messaging?", buildChoices(
      "Use a recorded message, provide scripts for staff, and issue regular status updates, reducing call center load and keeping messaging consistent for all customers during the incident. Track all calls, monitor for load and messaging consistency, and review for effectiveness after restoration.", "Reduces load and keeps messaging consistent.", 10,
      "Add scripts for staff but keep the phone tree the same, offering some support for customer interactions but maintaining the existing call routing, which may result in high volume without automation. Track all calls, monitor for volume and automation, and review for effectiveness after restoration.", "Helpful, but still high volume without automation.", 5,
      "Turn phones off during periods of high pressure, suspending all incoming calls and communications, which may worsen panic and leave customers without support. Track all decisions, monitor for panic, and review for effectiveness after restoration.", "Worsens panic.", -5,
      "Tell customers everything is fine without providing facts, offering vague reassurances that may damage credibility and increase confusion among callers. Track all communications, monitor for credibility risk, and review for effectiveness after restoration.", "Credibility risk.", -5
    )),
    q("Deposits", "What is the best customer reassurance tactic?", buildChoices(
      "Provide transparent updates, explain what customers can do, and direct them to where they can check status, building trust and offering practical support throughout the incident. Track all updates, monitor for trust-building and practicality, and review for effectiveness after restoration.", "Trust-building and practical.", 10,
      "Encourage customers to visit a branch for updates, offering in-person reassurance and information, though this may increase branch load and create additional challenges for staff. Track all visits, monitor for branch load, and review for effectiveness after restoration.", "Some reassurance, but increases branch load.", 5,
      "Maintain silence and provide no updates or information to customers, which may lead to increased speculation, confusion, and dissatisfaction during the incident. Track all decisions, monitor for speculation and confusion, and review for effectiveness after restoration.", "Speculation grows.", -5,
      "Blame customers for panic, attributing the situation to their actions and communications, which may cause reputational harm and damage relationships with the community. Track all communications, monitor for reputational harm, and review for effectiveness after restoration.", "Reputational harm.", -5
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
      "Treat the situation as a major incident, assign clear ownership, and implement rapid containment measures, ensuring all teams are aligned and actions are documented throughout the response.", "Fast coordinated action reduces losses.", 10,
      "Escalate the issue internally, keep it out of the formal incident structure, and coordinate actions among departments, maintaining communication and tracking progress as the situation develops.", "Some action, but coordination is weaker.", 5,
      "Wait for confirmed losses before taking action, monitor the situation closely, and prepare to respond with appropriate measures once the impact is fully understood and documented.", "Too slow; loss window stays open.", -5,
      "Downplay the incident externally regardless of impact, communicate minimal details to stakeholders, and focus on internal management while maintaining records of all decisions and communications.", "Trust damage and regulatory risk.", -5
    )),
    q("CEO/SVPs", "How should executive communications be coordinated?", buildChoices(
      "Appoint a single spokesperson and provide consistent scripts for staff, ensuring all communications are aligned and every team receives the same information throughout the incident.", "Avoids mixed messaging and reduces risk.", 10,
      "Allow department heads to share updates with their teams only, coordinating internal alignment and messaging while monitoring for any drift in public communications and addressing inconsistencies as needed.", "Internal alignment helps, but public messaging may still drift.", 5,
      "Let each branch speak externally if asked, giving local teams the authority to communicate with stakeholders and customers, which may result in inconsistent and risky statements across the organization.", "Inconsistent and risky statements.", -5,
      "Provide no communications until the investigation ends, withholding all updates and information from staff and stakeholders, which may allow rumors to fill the vacuum and increase uncertainty.", "Rumors fill the vacuum.", -5
    )),
    q("CEO/SVPs", "What priority should be set for customer remediation?", buildChoices(
      "Reach out to affected customers, provide guidance, and set up escalation.", "Trust-preserving and defensible.", 10,
      "Wait for all facts before contacting customers.", "Good intent, but inconsistent outcomes and risk.", 5,
      "Let customers discover issues on their own.", "Customer harm grows; complaints increase.", -5,
      "Blame customers for falling for fraud.", "Patterns expand and become findings.", -5
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
      "Provide scheduled updates via official channels, ensuring all employees receive consistent, timely, and accurate information about the storm and its impact on operations.", "Predictable and clear.", 10,
      "Allow managers to send text updates to their teams as needed, giving flexibility but risking fragmented and inconsistent communication across different departments and locations.", "Fragmented and inconsistent.", 5,
      "Permit employees to make public posts about the situation, encouraging real-time sharing but increasing the risk of unvetted information and potential confusion among staff and customers.", "Unvetted info risk.", -5,
      "Maintain complete silence regarding the storm, withholding all updates and information, which may lead to rumors, anxiety, and a lack of clarity for employees during the incident.", "Rumors and anxiety.", -5
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
