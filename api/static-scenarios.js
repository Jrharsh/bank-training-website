q(
  "CEO/SVPs",
  "How should leadership frame the incident publicly while the root cause is still being validated?",
  buildChoices(

    // Correct (10) — balanced, but not verbose
    "Acknowledge customer impact, state that anomalous activity is under investigation, avoid confirming cause prematurely, and commit to time-bound updates.",
    "Balances transparency with uncertainty and avoids statements that may later require correction.",
    10,

    // Partial (5) — defensible but incomplete
    "Delay public statements until internal teams confirm whether the activity is operational or malicious, focusing first on internal alignment.",
    "Reduces risk of retraction but allows external speculation to grow unchecked.",
    5,

    // Wrong (-5) — tempting but risky
    "Frame the issue as a system processing problem without addressing customer concerns about account security.",
    "Technically accurate but fails to address the trust implications driving customer behavior.",
    -5,

    // Wrong (-5) — sounds reassuring but dangerous
    "Reassure customers that there is no fraud risk while remediation is underway.",
    "Creates exposure if later findings contradict the statement and undermines credibility.",
    -5
  )
);


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
        "Create an evidence index tying each action to approvals, source records, reconciliations, and customer impact summaries, noting any gaps and compensating controls.",
        "Provides traceability and reduces follow-up churn from examiners.",
        10,

        "Provide summarized reconciliations and add supporting detail only for material categories or when specifically requested.",
        "Efficient, but can appear incomplete if regulators expect full traceability.",
        5,

        "Wait to produce documentation until operational recovery is complete so the record can be finalized once.",
        "Delays increase suspicion and can miss retention deadlines.",
        -5,

        "Rely on verbal explanations from SMEs supported by a few key reports rather than building full documentation.",
        "Weak evidence trail and high risk of findings.",
        -5
      )
    ),

    // Deposits
    q(
      "Deposits",
      "Complaints cite delays, fee issues, and inconsistent explanations. What is the strongest Deposits approach to reduce complaints and surface root cause quickly?",
      buildChoices(
        "Centralize complaint intake, tag by issue type/channel/location, review daily for patterns, and issue interim scripts + corrective actions tied to measurable outcomes.",
        "Turns complaints into signals and creates defensible corrective action evidence.",
        10,

        "Resolve complaints as they arrive and ask teams to flag unusual themes to management for later review.",
        "Can work short-term, but trends are easy to miss without structure.",
        5,

        "Prioritize rapid closure of complaints to reduce volume, even if categorization and root cause review happen later.",
        "Improves metrics temporarily but fails to address systemic drivers.",
        -5,

        "Treat complaints as isolated events unless regulators request a formal trend review and root cause analysis.",
        "Appears dismissive and increases regulatory escalation likelihood.",
        -5
      )
    )

  ]
};

const SCENARIO_BACKUP_COMPROMISE = {
  key: "backup-compromise-mid-incident",
  title: "Backup Compromise Discovered Mid-Incident",
  description:
    "During a ransomware recovery, IT discovers that several 'known-good' backups show indicators of compromise. Restoration timelines extend dramatically, and leadership must reassess communications, regulatory notifications, and customer assurances already made.",
  questions: [
    // CEO/SVPs (3)
    q("CEO/SVPs", "Do you retract public statements about recovery timelines?", buildChoices(
      "Issue an immediate update clarifying the new findings, explain the impact on recovery timelines, and commit to further updates as the situation evolves. Provide regular status reports and ensure all communications are consistent and reviewed for effectiveness after restoration.", "Maintains trust and transparency.", 10,
      "Wait for more technical clarity before updating public statements, monitoring the situation internally and preparing a communication plan for when more is known. Share periodic updates and ensure all communications are consistent and reviewed for effectiveness after restoration.", "Reduces risk of misinformation but may appear evasive.", 5,
      "Downplay the new findings and continue with the original messaging, only updating if directly questioned by stakeholders. Provide minimal updates and ensure all communications are consistent and reviewed for effectiveness after restoration.", "Risks credibility if discovered later.", -5,
      "Retract all previous statements without explanation, removing prior updates and refusing to comment further until the incident is resolved. Only communicate if required and ensure all communications are consistent and reviewed for effectiveness after restoration.", "Destroys trust and increases speculation.", -5
    )),
    q("CEO/SVPs", "Do you pause restoration already in progress?", buildChoices(
      "Pause all restoration activities, conduct a full review of backup integrity, and communicate the reason for the pause to all stakeholders. Provide regular updates and ensure all actions are reviewed for risk and recovery effectiveness after restoration.", "Reduces risk of reinfection and ensures integrity.", 10,
      "Continue restoration for unaffected systems while reviewing compromised backups, balancing progress with caution. Share periodic updates and ensure all actions are reviewed for risk and recovery effectiveness after restoration.", "Balances progress and caution but may miss hidden risks.", 5,
      "Ignore the new findings and proceed with the original restoration plan, assuming the risk is minimal. Provide minimal updates and ensure all actions are reviewed for risk and recovery effectiveness after restoration.", "Risks reinfection and further delays.", -5,
      "Let each department decide whether to pause or continue restoration, providing general guidance but no centralized decision. Only update if required and ensure all actions are reviewed for risk and recovery effectiveness after restoration.", "Creates inconsistency and confusion.", -5
    )),
    q("CEO/SVPs", "How do you message uncertainty without causing panic?", buildChoices(
      "Acknowledge the new uncertainty, explain what is being done to resolve it, and provide a clear schedule for updates. Provide regular status reports and ensure all communications are consistent and reviewed for trust and panic after restoration.", "Builds trust and manages expectations.", 10,
      "Provide only minimal updates until more is known, focusing on facts and avoiding speculation. Share periodic updates and ensure all communications are consistent and reviewed for trust and panic after restoration.", "Reduces risk of misinformation but may increase anxiety.", 5,
      "Reassure stakeholders that everything is under control without sharing details, aiming to prevent panic but withholding key information. Provide minimal updates and ensure all communications are consistent and reviewed for trust and panic after restoration.", "May backfire if new issues arise.", -5,
      "Avoid all communication until the situation is fully resolved, providing no updates or information. Only communicate if required and ensure all communications are consistent and reviewed for trust and panic after restoration.", "Increases speculation and panic.", -5
    )),
  ]
};
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
          "Activate incident command, assign roles to key leaders, and set a regular cadence for updates to ensure everyone is aligned and the response is structured and effective throughout the incident. Provide regular status reports and ensure all communications are consistent and reviewed for effectiveness after restoration.",
          "Creates structure and tempo without locking leadership into premature commitments.",
          10,

          "Meet privately with senior leaders first, then activate a formal response group to coordinate actions and messaging, ensuring all departments are represented and communication is consistent across the organization. Share periodic updates and ensure all communications are consistent and reviewed for effectiveness after restoration.",
          "Improves executive alignment but delays broader coordination and operational clarity.",
          5,

          "Let IT and Security continue their assessment before leadership steps in, keeping technical focus but delaying broader coordination, which may result in slower decision-making and less clarity for other teams involved. Provide minimal updates and ensure all communications are consistent and reviewed for effectiveness after restoration.",
          "Avoids distraction but leaves a leadership vacuum during a critical early window.",
          -5,

          "Wait for external advisors to provide input before making coordination decisions, delaying action but seeking outside expertise, which could slow down the response and create uncertainty among staff and stakeholders. Only communicate if required and ensure all communications are consistent and reviewed for effectiveness after restoration.",
          "Introduces delay and dilutes accountability at the most time-sensitive stage.",
          -5
        )
    ),

    q("CEO/SVPs",
      "If system restoration timelines remain uncertain, how should leadership frame ransom payment discussions?",
      buildChoices(
        "Establish a decision framework with legal, regulators, and law enforcement, focusing on restoration but not committing to payment yet. Provide regular status reports and ensure all communications are consistent and reviewed for governance and effectiveness after restoration.",
        "Keeps options governed and defensible without signaling intent or panic.",
        10,

        "Privately evaluate ransom payment as a backup plan while restoration continues, keeping options open but risking internal confusion. Share periodic updates and ensure all communications are consistent and reviewed for governance and effectiveness after restoration.",
        "Maintains optionality but risks internal leakage and moral hazard.",
        5,

        "Authorize payment if restoration goes past set time thresholds to reduce customer impact, acting quickly but risking other issues. Provide minimal updates and ensure all communications are consistent and reviewed for governance and effectiveness after restoration.",
        "Creates false certainty and ignores legal, ethical, and recovery risks.",
        -5,

        "Defer the decision until technical teams confirm recovery, waiting for clarity but risking rushed choices later on. Only communicate if required and ensure all communications are consistent and reviewed for governance and effectiveness after restoration.",
        "Delays strategic planning and may force rushed decisions later.",
        -5
      )
    ),

    q("CEO/SVPs",
      "What customer communication approach best balances transparency with operational uncertainty?",
      buildChoices(
        "Acknowledge disruption, share confirmed impacts, explain next steps, and commit to regular updates for transparency and trust. Provide regular status reports and ensure all communications are consistent and reviewed for trust and transparency after restoration.",
        "Builds trust while avoiding speculation or overpromising.",
        10,

        "Issue a brief holding statement to show awareness and promise updates once more details are confirmed and available. Share periodic updates and ensure all communications are consistent and reviewed for trust and transparency after restoration.",
        "Reduces silence risk but may not sufficiently manage expectations.",
        5,

        "Emphasize system security assurances but avoid discussing service impacts, aiming to prevent alarm but risking credibility. Provide minimal updates and ensure all communications are consistent and reviewed for trust and transparency after restoration.",
        "Creates credibility gaps when customers experience disruptions firsthand.",
        -5,

        "Delay external communication until restoration timelines are fully validated, waiting for certainty but increasing speculation. Only communicate if required and ensure all communications are consistent and reviewed for trust and transparency after restoration.",
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

    q("Accounting", "How to log potential financial impact?", buildChoices(
      "Establish a dedicated ledger to track all suspected financial exposures related to the incident, require documented approvals for each entry, and ensure that all records are reviewed regularly by both accounting and management teams for accuracy and completeness.", "This approach ensures transparency, accountability, and audit readiness for any potential losses.", 10,
      "Integrate all suspected financial exposures from the incident into standard operational accounting processes, recording them alongside routine transactions and following existing review procedures for all entries.", "This method may obscure incident-related losses and reduce visibility for management oversight.", 5,
      "Distribute detailed financial exposure data to all relevant departments and staff, encouraging broad awareness and input on the potential impact, and collect feedback to refine the ongoing assessment process.", "While this increases awareness, it may risk confidentiality and create confusion about responsibilities.", -5,
      "Delay logging any potential financial impact until there is definitive proof of loss, and only record exposures once they have been fully substantiated through investigation and confirmation.", "This approach may result in missed opportunities for early intervention and risk mitigation.", -5
    )),
    q("Accounting",
      "What reporting helps?",
      buildChoices(
        "Provide daily incident cost summaries that include a breakdown of all expenses, resource allocations, and any financial impacts related to branch closures and outages, ensuring leadership receives timely and actionable information for decision-making.", "Daily reporting gives leadership timely visibility and supports rapid decision-making.", 10,
        "Distribute raw expense dumps to leadership and relevant teams, presenting all transaction details and exception items in a comprehensive format, and include instructions for interpreting the data and a channel for questions or clarifications.", "Raw data provides transparency but may overwhelm leadership and slow decision-making.", 5,
        "Do not provide regular reports, relying instead on ad-hoc updates only when major changes occur, and communicate significant developments as needed without maintaining a structured reporting cadence.", "Lack of regular reporting can leave leadership unaware of emerging risks and trends.", -5,
        "Send weekly summary reports that include a review of all incident-related expenses, exception trends, and any significant changes, sharing these with leadership and relevant teams and collecting feedback to refine future reports.", "Weekly reporting is less timely but can still support oversight and planning.", -5
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

/* ------------------------- EXPORTS ------------------------- */

/* ------------------------- SCENARIO 6 ------------------------- */
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

const SCENARIO_INSIDER = {
  key: "insider-threat-terminated-employee",
  title: "Terminated Employee Causes Insider Disruption",
  description:
    "A disgruntled employee is terminated and retaliates. Suspicious changes appear in systems, files are deleted from shared drives, and threatening messages are sent to staff. Immediate access revocation, evidence preservation, and coordinated communications are required.",
  questions: [
    // CEO/SVPs (3)
    q("CEO/SVPs", "What is leadership’s first move in the first hour?", buildChoices(
      "Activate incident command, assign a single spokesperson, and set update cadence",
      "Fast alignment and consistent messaging reduces chaos.",
      10,

      "Hold an informal huddle and let departments coordinate independently",
      "Some coordination, but decisions drift and slow containment.",
      5,

      "Let IT handle it without executive involvement",
      "Misses governance and cross-functional needs.",
      -5,

      "Publicly blame the ex-employee immediately",
      "Premature and risky legally.",
      -5
    )),
    q("CEO/SVPs", "How should external communications be handled today?", buildChoices(
      "Provide a factual statement focused on continuity and security steps",
      "Builds trust without sharing sensitive details.",
      10,

      "Say nothing until everything is fixed",
      "Creates a vacuum; rumors grow.",
      5,

      "Share investigation details including the person’s name",
      "Legal/privacy risk.",
      -5,

      "Downplay the event as trivial",
      "Backfires if customers are affected.",
      -5
    )),
    q("CEO/SVPs", "What policy decision is most important now?", buildChoices(
      "Engage counsel and law enforcement; document all actions",
      "Defensible response and proper chain of custody.",
      10,

      "Handle internally without legal until later",
      "Delays can harm outcomes.",
      5,

      "Let a vendor run everything",
      "Loss of control and accountability.",
      -5,

      "Ignore it unless losses occur",
      "Risk grows and credibility drops.",
      -5
    )),

    // IT/Security (3)
    q("IT/Security", "What is the immediate technical containment?", buildChoices(
      "Disable accounts, revoke tokens/SSH keys, rotate credentials, and review privileged access",
      "Closes access paths quickly.",
      10,

      "Increase monitoring and wait for more indicators",
      "Helpful, but leaves a larger window.",
      5,

      "Disable logging to reduce load",
      "Destroys forensics.",
      -5,

      "Share admin passwords widely to speed up work",
      "Major control failure.",
      -5
    )),
    q("IT/Security", "How should evidence be preserved?", buildChoices(
      "Snapshot impacted systems, collect logs, and store with chain-of-custody",
      "Supports investigation and potential legal action.",
      10,

      "Save a few screenshots and continue work",
      "Some evidence but weak for forensic needs.",
      5,

      "Delete noisy logs to clean up",
      "Loses crucial evidence.",
      -5,

      "Allow staff to export data locally without controls",
      "Privacy and integrity risk.",
      -5
    )),
    q("IT/Security", "What is the approach for vendor/integrations access?", buildChoices(
      "Audit all third-party access; revoke unnecessary tokens; validate webhooks",
      "Prevents additional misuse through integrations.",
      10,

      "Ask vendors to check later and report if they see anything",
      "Some help but slow and inconsistent.",
      5,

      "Assume vendors are fine and focus only internally",
      "Misses common attack paths.",
      -5,

      "Share logs broadly with all vendors",
      "Uncontrolled data sharing risk.",
      -5
    )),

    // HR (3)
    q("HR", "What offboarding control matters most in this scenario?", buildChoices(
      "Documented checklist: access revocation, asset return, exit interview notes",
      "Reduces residual access and preserves context.",
      10,

      "Collect badge and laptop only",
      "Partial; leaves access/token paths open.",
      5,

      "Skip documentation to move quickly",
      "Evidence and control gaps.",
      -5,

      "Let managers handle offboarding ad-hoc",
      "Inconsistent and risky.",
      -5
    )),
    q("HR", "What guidance should go to staff receiving threatening messages?", buildChoices(
      "Report via official channel; do not engage; preserve evidence; safety plan available",
      "Consistent and defensible.",
      10,

      "Ignore messages unless they escalate",
      "Delays reporting and increases risk.",
      5,

      "Respond firmly to shut it down",
      "Can inflame and creates evidence issues.",
      -5,

      "Post screenshots in group chats",
      "Privacy and investigation risk.",
      -5
    )),
    q("HR", "How should HR support safety and staffing today?", buildChoices(
      "Coordinate security/law enforcement, offer remote work if needed, schedule coverage",
      "Reduces risk and burnout.",
      10,

      "Ask managers to sort it out",
      "Uneven, can miss safety needs.",
      5,

      "Force normal operations regardless",
      "Safety/liability risk.",
      -5,

      "Suspend all work for everyone",
      "Unnecessary disruption.",
      -5
    )),

    // Finance (3)
    q("Finance", "What is the first finance control to protect systems/data?", buildChoices(
      "Freeze risky changes; require approvals; monitor for unusual postings",
      "Prevents manipulation and supports audit.",
      10,

      "Keep normal operations and review later",
      "Some continuity but risk persists.",
      5,

      "Share admin credentials with more staff for speed",
      "Segregation failure.",
      -5,

      "Disable logging to reduce noise",
      "Evidence loss.",
      -5
    )),
    q("Finance", "How should potential incident costs be tracked?", buildChoices(
      "Create incident cost center with documented approvals and invoices",
      "Accurate, audit-ready tracking.",
      10,

      "Track major vendor costs only",
      "Partial view.",
      5,

      "Estimate later from memory",
      "Inaccurate and weak evidence.",
      -5,

      "Hide costs in miscellaneous categories",
      "Reporting integrity risk.",
      -5
    )),
    q("Finance", "How should vendor communications be handled?", buildChoices(
      "Inform continuity-critical vendors of restricted changes and validation steps",
      "Aligns priorities and reduces risk.",
      10,

      "Let vendors operate normally",
      "Misses coordination during active incident.",
      5,

      "Pause all payments without criteria",
      "Service disruption risk.",
      -5,

      "Share sensitive details freely with every vendor",
      "Security/privacy risk.",
      -5
    )),

    // Loans (3)
    q("Loans", "How should loan operations respond to suspicious change requests?", buildChoices(
      "Require out-of-band verification using known contacts and document evidence",
      "Strong fraud prevention.",
      10,

      "Callback to the number in the email and proceed",
      "Better than nothing but weak control.",
      5,

      "Accept emailed instructions from familiar addresses",
      "Easy to spoof.",
      -5,

      "Bypass controls to avoid delays",
      "Compliance and loss risk.",
      -5
    )),
    q("Loans", "How do you protect loan documents and PII during the incident?", buildChoices(
      "Secure storage, role-based access, and logging with dual review on exceptions",
      "Preserves audit trail and privacy.",
      10,

      "Restrict access loosely and fix later",
      "Some control but risky.",
      5,

      "Allow broad downloads to avoid disruption",
      "Privacy/chain-of-custody risk.",
      -5,

      "Share via personal email accounts temporarily",
      "Policy and security failure.",
      -5
    )),
        q("Loans", "What borrower messaging is appropriate if communications were tampered?", buildChoices(
          "Use standard scripts with factual updates and escalation path",
          "Consistency reduces complaints.",
          10,
    
          "Let lenders improvise messages case-by-case",
          "Inconsistent and risky.",
          5,
    
          "Promise accelerated approvals to calm them",
          "Credibility risk.",
          -5,
    
          "Avoid any communication until resolved",
          "Confusion and churn.",
          -5
        ))
      ]
    };
    
    const SCENARIO_VENDOR_OUTAGE = {
      key: "third-party-core-vendor-outage",
      title: "Third-Party Core Vendor Outage",
      description:
        "A nationwide outage at your core processing vendor occurs during business hours. Transactions post late, branches cannot open accounts, and ACH/wires are delayed. Vendor ETAs are vague. Strong customer communications, regulatory thresholds, manual controls, and vendor escalation are required.",
      questions: [
        // CEO/SVPs (3)
        q("CEO/SVPs", "What posture should leadership set in the first hour?", buildChoices(
          "Activate incident command, escalate vendor at exec level, and assign a single spokesperson. Track all actions, monitor for decision alignment, vendor response, and messaging consistency and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for decision alignment, vendor response, and messaging consistency and effectiveness, and review for effectiveness after restoration.", "Aligns decisions, speeds vendor response, and keeps messaging consistent.", 10,
          "Wait for vendor’s next ETA before organizing internally. Track all decisions, monitor for coordination and staff confusion and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for decision alignment, vendor response, and messaging consistency and effectiveness, and review for effectiveness after restoration.", "Delays coordination and confuses staff.", 5,
          "Let vendor lead your response entirely. Track all actions, monitor for control and accountability and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for decision alignment, vendor response, and messaging consistency and effectiveness, and review for effectiveness after restoration.", "Loss of control and accountability.", -5,
          "Publish a public blame statement immediately. Track all communications, monitor for vendor cooperation and risk and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for decision alignment, vendor response, and messaging consistency and effectiveness, and review for effectiveness after restoration.", "Premature and risky; worsens vendor cooperation.", -5
        )),
        q("CEO/SVPs", "What should customer-facing communications emphasize today?", buildChoices(
          "Transparent status (what’s impacted), workarounds, and predictable update cadence. Track all communications, monitor for trust and call volume and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for trust and call volume and effectiveness, and review for effectiveness after restoration.", "Builds trust and reduces call volume.", 10,
          "Promise specific restoration times from the vendor. Track all promises, monitor for credibility risk and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for trust and call volume and effectiveness, and review for effectiveness after restoration.", "Overpromising risks credibility if missed.", 5,
          "Minimize the issue as \"minor\" without details. Track all communications, monitor for evasion and confusion and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for trust and call volume and effectiveness, and review for effectiveness after restoration.", "Looks evasive and increases confusion.", -5,
          "Share detailed vendor contracts publicly. Track all disclosures, monitor for legal and reputational risks and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for trust and call volume and effectiveness, and review for effectiveness after restoration.", "Not appropriate; legal and reputational risks.", -5
        )),
        q("CEO/SVPs", "How do you approach regulatory notification thresholds?", buildChoices(
          "Notify the primary regulator promptly, providing a detailed summary of facts, impacts, and a remediation plan to ensure transparency and compliance throughout the process. Include a timeline of events, anticipated next steps, and request guidance on any additional documentation or follow-up required to maintain regulatory trust. Track all notifications, monitor for governance and filing timeliness and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for governance and filing timeliness and effectiveness, and review for effectiveness after restoration.", "Defensible governance; avoids late or unnecessary filings.", 10,
          "Choose not to notify regulators in order to avoid additional scrutiny, even if the situation escalates and more information becomes available over time. Document all internal discussions and monitor the situation closely, preparing to respond if contacted by regulators or if the issue becomes public. Track all decisions, monitor for reactivity and risk and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for governance and filing timeliness and effectiveness, and review for effectiveness after restoration.", "Reactive and risky.", -5,
          "Immediately blame third parties for the incident and send notifications to regulators, focusing on shifting responsibility rather than addressing the core issues directly. Provide supporting evidence for your claims, outline the impact on your organization, and request that regulators direct inquiries to the third party involved. Track all notifications, monitor for noise and premature action and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for governance and filing timeliness and effectiveness, and review for effectiveness after restoration.", "May be premature and create noise.", 5,
          "Wait to notify regulators until there are widespread customer complaints, then provide a summary of the situation and actions taken, regardless of earlier developments. Prepare a comprehensive report detailing all customer interactions, remediation efforts, and future plans to prevent similar incidents. Track all notifications, monitor for relationship and obligation ownership and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for governance and filing timeliness and effectiveness, and review for effectiveness after restoration.", "You own the relationship and obligations.", -5
        )),

        // IT/Security (3)
        q("IT/Security", "What is the first technical continuity action?", buildChoices(
          "Enable read-only or limited modes across all affected systems, confirm failovers are functioning as intended, and post status banners to inform users of current limitations. Document all actions taken and coordinate with relevant teams to ensure continuity and transparency throughout the process. Track all actions, monitor for access and expectations, and review for effectiveness after restoration.",
          "Preserves access where possible and sets expectations.",
          10,

          "Turn off all digital channels to reduce pressure on the system, including customer-facing portals and internal access points. Notify stakeholders of the shutdown, monitor for any critical impacts, and prepare a plan for gradual restoration once stability is confirmed. Track all actions, monitor for access and impacts, and review for effectiveness after restoration.",
          "Harms access unnecessarily.",
          5,

          "Disable logging to reduce system load during the incident, ensuring that performance is prioritized. Communicate this change to IT and security teams, and establish alternative monitoring methods to track system health and user activity while logs are offline. Track all changes, monitor for evidence and observability, and review for effectiveness after restoration.",
          "Destroys evidence and observability.",
          -5,

          "Share admin credentials for faster triage among technical staff, allowing immediate access to all systems. Record who receives credentials, set temporary access controls, and plan to reset all credentials and audit access once the incident is resolved. Track all sharing, monitor for control failures, and review for effectiveness after restoration.",
          "Major control failure.",
          -5
        )),
        q("IT/Security", "How should you work with the vendor’s technical teams?", buildChoices(
          "Establish a real-time communications bridge with the vendor’s technical teams, request detailed telemetry data, and align on rollback and restore steps. Schedule regular status updates, document all decisions, and ensure both sides have clear escalation paths for urgent issues. Track all communications, monitor for coordination and surprises, and review for effectiveness after restoration.",
          "Improves coordination and reduces surprises.",
          10,

          "Send occasional emails to the vendor and wait for updates, keeping a log of all correspondence. Inform internal teams of expected delays, monitor for critical changes, and prepare to escalate if responses are not timely or sufficient for incident resolution. Track all communications, monitor for speed and incident resolution, and review for effectiveness after restoration.",
          "Too slow for an active incident.",
          5,

          "Publish vendor indicators of compromise (IOCs) and technical details broadly to all staff, including step-by-step instructions for identifying related issues. Track staff feedback, provide a channel for questions, and update documentation as new information becomes available. Track all communications, monitor for exposure and confusion, and review for effectiveness after restoration.",
          "Unnecessary exposure and confusion.",
          -5,

          "Route all technical inquiries through branch offices, instructing staff to collect and forward questions to a central team. Maintain a record of all inquiries, communicate response timelines, and follow up with branches to ensure information is distributed accurately. Track all inquiries, monitor for efficiency and noise, and review for effectiveness after restoration.",
          "Inefficient and noisy.",
          -5
        )),
        q("IT/Security", "How do you protect data integrity during backlog posting?", buildChoices(
          "Stage recovery with canary validation and reconciliations before full catch-up, testing a small sample of transactions first. Document all validation steps, monitor for discrepancies, and only proceed to full posting once accuracy is confirmed and reconciliation is complete. Track all actions, monitor for error and duplicate posting risk, and review for effectiveness after restoration.",
          "Reduces error and duplicate posting risk.",
          10,

          "Post everything at once and fix later, prioritizing speed over accuracy. Track all posted transactions, prepare a plan for identifying and correcting errors, and communicate to stakeholders about the risks and expected follow-up actions. Track all actions, monitor for breaks and customer impact, and review for effectiveness after restoration.",
          "High risk of breaks and customer impact.",
          5,

          "Let branches manually enter transactions to help with backlog, providing detailed instructions and temporary access. Monitor for inconsistencies, audit all manual entries, and plan for a comprehensive review and correction process after the backlog is cleared. Track all actions, monitor for risk and audit issues, and review for effectiveness after restoration.",
          "Inconsistent and risky; audit issues.",
          -5,

          "Silence alerts during backlog so dashboards look green, suppressing notifications to reduce perceived risk. Keep a record of all suppressed alerts, inform relevant teams, and ensure that a full review of system health is conducted once normal operations resume. Track all actions, monitor for risk and detection delays, and review for effectiveness after restoration.",
          "Masks risk and delays detection.",
          -5
        )),

        // HR (3)
        q("HR", "How do you support front-line staffing during the outage?", buildChoices(
          "Implement surge staffing and rotation schedules for front-line employees, provide de-escalation scripts for handling customer frustration, and ensure scheduled breaks are enforced. Track staff well-being, adjust staffing levels as needed, and communicate support resources throughout the outage. Track all actions, monitor for safety and service quality, and review for effectiveness after restoration.",
          "Improves safety and service quality.",
          10,

          "Keep normal staffing levels and hope traffic subsides, maintaining standard shift patterns. Monitor employee stress and customer wait times, offer encouragement, and prepare to make adjustments if conditions worsen or service quality declines. Track all actions, monitor for burnout and lines, and review for effectiveness after restoration.",
          "Burnout and longer lines.",
          5,

          "Forbid breaks during the outage to maximize staff availability, instructing employees to remain at their stations. Monitor for signs of fatigue and stress, document any incidents, and plan to address staff well-being after the outage is resolved. Track all actions, monitor for safety and counterproductivity, and review for effectiveness after restoration.",
          "Unsafe and counterproductive.",
          -5,

          "Send staff home to reduce friction and minimize on-site issues, maintaining only essential personnel. Communicate the rationale to all employees, track service impacts, and prepare a plan for rapid re-staffing once normal operations resume. Track all actions, monitor for service failure and recovery, and review for effectiveness after restoration.",
          "Service failure and longer recovery.",
          -5
        )),
        q("HR", "What internal guidance should staff receive about discussing the vendor?", buildChoices(
          "Use approved scripts; avoid speculation; refer questions to official status updates. Track all communications, monitor for consistency and defensibility, and review for effectiveness after restoration.",
          "Consistent, defensible comms.",
          10,

          "Allow staff to explain technical details if they think they know. Track all communications, monitor for consistency and risk, and review for effectiveness after restoration.",
          "Inconsistent and risky.",
          5,

          "Encourage venting about the vendor online. Track all communications, monitor for reputational risk, and review for effectiveness after restoration.",
          "Reputational risk.",
          -5,

          "Disallow any conversation with customers. Track all communications, monitor for realism and service impact, and review for effectiveness after restoration.",
          "Unrealistic and harmful to service.",
          -5
        )),
        q("HR", "What work posture helps back-office operations?", buildChoices(
          "Enable approved remote work for backlog processing with access controls. Track all actions, monitor for productivity and security, and review for effectiveness after restoration.",
          "Preserves productivity with security.",
          10,

          "Allow personal tools to speed work until normal. Track all actions, monitor for policy and data risk, and review for effectiveness after restoration.",
          "Policy and data risk.",
          5,

          "Require in-office only regardless of conditions. Track all actions, monitor for response and morale, and review for effectiveness after restoration.",
          "May slow response and morale.",
          -5,

          "No guidance; let teams decide ad-hoc. Track all actions, monitor for outcomes, and review for effectiveness after restoration.",
          "Inconsistent outcomes.",
          -5
        )),

        // Finance (3)
        q("Finance", "What should Finance monitor first?", buildChoices(
          "Monitor liquidity, settlement exposure, and cash logistics with increased cadence, reviewing balances and transaction flows frequently. Document all findings, communicate risks to leadership, and adjust monitoring protocols as the outage evolves to avoid surprises and support decision-making. Track all actions, monitor for surprises and decision support, and review for effectiveness after restoration.",
          "Avoids surprises and supports decisions.",
          10,

          "Maintain normal reporting cadence only, continuing with standard schedules and procedures. Track any delays or discrepancies, inform stakeholders of routine updates, and prepare to escalate if issues arise that require more frequent attention. Track all actions, monitor for reporting speed and outage response, and review for effectiveness after restoration.",
          "Too slow for an outage.",
          5,

          "Stop cash orders to save costs during the outage, suspending new requests and communicating the change to branches. Monitor for service impacts, record any access issues, and plan to resume normal operations once stability is restored. Track all actions, monitor for service and access, and review for effectiveness after restoration.",
          "Harms service and access.",
          -5,

          "Ignore exposure until restoration, focusing on other priorities during the outage. Document the rationale for this approach, track any resulting risks, and prepare a post-restoration review to address any missed exposures or governance failures. Track all actions, monitor for governance failure, and review for effectiveness after restoration.",
          "Governance failure.",
          -5
        )),
        q("Finance", "How do you handle incident spend and credits?", buildChoices(
          "Create incident cost center; track vendor credits/SLA claims with documentation. Track all actions, monitor for audit readiness and value recovery, and review for effectiveness after restoration.",
          "Audit-ready and recovers value.",
          10,

          "Track major invoices only; revisit credits later. Track all actions, monitor for recovery risk, and review for effectiveness after restoration.",
          "Partial and risks missed recoveries.",
          5,

          "Pause all vendor payments universally. Track all actions, monitor for service disruption, and review for effectiveness after restoration.",
          "May disrupt critical services.",
          -5,

          "Hide costs across misc categories. Track all actions, monitor for reporting integrity risk, and review for effectiveness after restoration.",
          "Reporting integrity risk.",
          -5
        )),
        q("Finance", "What is the payment prioritization during the outage?", buildChoices(
          "Critical ops, communications, and logistics supporting continuity first. Track all actions, monitor for spend alignment and stability, and review for effectiveness after restoration.",
          "Aligns spend to stability.",
          10,

          "FIFO by invoice date. Track all actions, monitor for criticality alignment, and review for effectiveness after restoration.",
          "Ignores operational criticality.",
          5,

          "Pay smallest invoices first. Track all actions, monitor for impact alignment, and review for effectiveness after restoration.",
          "Not aligned to impact.",
          -5,

          "Stop all payments until issue resolves. Track all actions, monitor for service disruption risk, and review for effectiveness after restoration.",
          "Service disruption risk.",
          -5
        )),

        // Loans (3)
        q("Loans", "How do you handle time-sensitive loan disbursements if core is degraded?", buildChoices(
          "Use a manual playbook with dual control and evidence for each disbursement until systems return, documenting every step and ensuring oversight. Communicate the process to all stakeholders and review transactions for compliance once systems are restored. Track all actions, monitor for service and control, and review for effectiveness after restoration.",
          "Balances service and control.",
          10,

          "Pause all disbursements broadly, notifying customers of the delay and tracking all pending requests. Prepare a plan for rapid processing once systems are operational, and monitor for reputational impacts during the outage. Track all actions, monitor for customer harm and reputation, and review for effectiveness after restoration.",
          "Customer harm and reputational impact.",
          5,

          "Proceed via email-only approvals, collecting all necessary documentation electronically and maintaining a log of approvals. Communicate risks to staff, monitor for fraud, and plan to audit all transactions after the outage. Track all actions, monitor for evidence and fraud risk, and review for effectiveness after restoration.",
          "Weak evidence and fraud risk.",
          -5,

          "Let lenders bypass controls on a case-by-case basis, allowing discretion for urgent needs. Record all exceptions, communicate the rationale to compliance teams, and review for policy violations once normal operations resume. Track all actions, monitor for compliance failure, and review for effectiveness after restoration.",
          "Compliance failure.",
          -5
        )),
        q("Loans", "How should rate-lock/closing timelines be managed?", buildChoices(
          "Proactively communicate impacts to borrowers, offer alternatives, and document all exceptions to standard timelines. Track customer feedback, update staff on procedures, and review all cases for compliance after the outage. Track all actions, monitor for complaints and trust, and review for effectiveness after restoration.", "Reduces complaints and preserves trust.", 10,
          "Promise on-time closings regardless of the outage, reassuring borrowers and staff. Monitor for missed deadlines, document any issues, and prepare to address complaints or reputational risks if expectations are not met. Track all actions, monitor for expectations, and review for effectiveness after restoration.", "Sets unrealistic expectations.", 5,
          "Avoid discussing delays to reduce panic, instructing staff to minimize mention of timing issues. Track customer reactions, document any confusion, and plan to clarify procedures once normal operations resume. Track all actions, monitor for panic and confusion, and review for effectiveness after restoration.", "Backfires when delays occur.", -5,
          "Ask borrowers to sign blank forms to finish later, expediting the process during the outage. Record all instances, communicate risks to compliance, and review for legal or regulatory issues after restoration. Track all actions, monitor for compliance risk, and review for effectiveness after restoration.", "High compliance risk.", -5
        )),
        q("Loans", "What control applies to document handling during manual work?", buildChoices(
          "Use secure storage, role-based access, and exception logging for all documents handled manually, tracking every access and change. Communicate procedures to staff, review logs regularly, and audit all manual work after the outage.",
          "Preserves privacy and audit trail.",
          10,

          "Allow personal email for speed, instructing staff to use their own accounts for document transfer. Track all communications, inform compliance of the approach, and plan to review for privacy or policy breaches after restoration.",
          "Privacy/policy breach; increases risk of data leakage and non-compliance.",
          5,

          "Share credentials to keep work moving, providing access to necessary systems for all involved. Record who receives credentials, monitor for segregation failures, and reset all access once normal operations resume.",
          "Segregation failure; undermines security and auditability.",
          -5,

          "Disable logging temporarily to reduce system load, suspending record-keeping for manual work. Document the rationale, inform relevant teams, and plan to restore logging and review for evidence loss after the outage.",
          "Evidence loss.",
          -5
        )),

        // Accounting (3)
        q("Accounting", "How should posting delays be reflected in reporting?", buildChoices(
          "Use provisional reporting with enhanced reconciliations and thorough documentation for all posting delays, noting the reasons and impacts. Communicate updates to stakeholders, review for accuracy, and ensure transparency throughout the outage period. Track all reporting, monitor for transparency and control, and review for effectiveness after restoration.",
          "Transparent and controlled.",
          10,

          "Report estimates without notes to avoid questions, providing summary figures only. Track any discrepancies, prepare to address stakeholder concerns, and plan to update reports with full details once the outage is resolved. Track all reporting, monitor for stakeholder impact, and review for effectiveness after restoration.",
          "Misleading to stakeholders.",
          5,

          "Skip reconciliations until month-end, postponing all review and adjustment activities. Document the rationale, monitor for misstatements, and prepare for a comprehensive reconciliation process after restoration. Track all actions, monitor for breaks and misstatements, and review for effectiveness after restoration.",
          "Breaks and misstatements likely.",
          -5,

          "Smooth entries to hide outage impact, adjusting figures to minimize visible effects. Record all changes, inform relevant teams, and review for ethics and audit risks once normal operations resume. Track all actions, monitor for ethics and audit risk, and review for effectiveness after restoration.",
          "Ethics and audit risk.",
          -5
        )),
        q("Accounting", "Which reconciliations should take priority after restoration?", buildChoices(
          "Reconcile cash, suspense accounts, and inter-system tie-outs where suspicious adjustments occurred, documenting all findings and actions in detail. Communicate these priorities to the team, track progress in a central log, and review for material risks before moving to other reconciliations. Ensure all steps are audit-ready and defensible.",
          "Targets highest material risk and supports auditability.",
          10,

          "Reconcile cash only and defer other reconciliations to the next month, focusing on liquid assets first. Document the approach, monitor for issues in other accounts, and plan to address remaining reconciliations as resources allow. Track all reconciliations, monitor for coverage, and review for effectiveness after restoration.",
          "Partial coverage.",
          5,

          "Do not perform any reconciliations, assuming the vendor caught everything. Record the rationale, communicate the decision to stakeholders, and prepare for review for undetected breaks if issues arise. Track all reconciliations, monitor for risk, and review for effectiveness after restoration.",
          "Risk of undetected breaks.",
          -5,

          "Use manual overrides with no logs, making adjustments without record-keeping. Track any changes made, inform relevant teams, and plan to restore proper audit trails after the outage. Track all overrides, monitor for audit trail failure, and review for effectiveness after restoration.",
          "Audit trail failure.",
          -5
        )),
        q("Accounting", "What is the best way to preserve evidence for examiners and auditors during and after an insider fraud investigation?", buildChoices(
          "Maintain a central, access-controlled evidence index with documented approvals, timestamps, and direct links to all relevant artifacts for examiners and auditors. Communicate evidence preservation procedures to all staff, review logs regularly for completeness, and ensure all documentation is defensible for audit and regulatory review throughout the incident.",
          "Defensible for audit/regulators; supports transparency and compliance.",
          10,

          "Archive relevant email threads and documents loosely, instructing staff to save communications in shared folders without a formal structure. Track completeness, inform compliance of the approach, and review for gaps after restoration.",
          "Messy and incomplete; may result in missing or disorganized evidence.",
          5,

          "Rely on verbal approvals and undocumented decisions for evidence handling, allowing key actions to be made without written records. Monitor for weak evidence, document any issues, and plan to strengthen approval processes once normal operations resume.",
          "Weak evidence; may not withstand audit or legal scrutiny.",
          -5,

          "Delete all drafts and interim documentation after manual work is completed, removing temporary records to reduce storage needs. Record the rationale, inform relevant teams, and review for regulatory risks after the incident.",
          "Regulatory risk; may result in loss of critical evidence.",
          -5
        )),
      ]
    };


const SCENARIOS = [
  SCENARIO_RANSOMWARE,
  SCENARIO_LIQUIDITY,
  SCENARIO_BACKUP_COMPROMISE,
  SCENARIO_REGULATORY_INQUIRY,
  SCENARIO_DATA_UNVERIFIABLE,
  SCENARIO_INSIDER,
  SCENARIO_VENDOR_OUTAGE
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
