const SCENARIO_OPS_ERROR_FRAUD = {
  key: "operational-error-looks-like-fraud",
  title: "Operational Error That Looks Like Fraud",
  description:
    "An internal posting error mimics fraud behavior (duplicate debits, missing credits). Customers freeze accounts, assuming compromise.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "How should leadership frame the incident publicly when the error looks like fraud?", buildChoices(
      "Acknowledge the issue clearly, explain that it is an operational error and not a malicious act, and commit to rapid correction and transparent updates for all stakeholders. Provide regular status reports and ensure all communications are consistent and reviewed for effectiveness after restoration.", "Builds trust and controls the narrative.", 10,
      "Delay public communication until all facts are confirmed, focusing on internal investigation and preparing a comprehensive statement before addressing the public. Provide updates only after internal review and ensure all communications are consistent and reviewed for effectiveness after restoration.", "Reduces misinformation but risks rumor spread.", 5,
      "Emphasize only technical details in all communications, avoiding discussion of customer impact or broader narrative, and provide updates focused solely on system status. Ensure all communications are consistent and reviewed for effectiveness after restoration.", "Misses the public narrative and increases confusion.", -5,
      "Deny any issue exists until external pressure forces a response, refusing to comment or provide updates until absolutely necessary. Only communicate after being compelled and ensure all communications are consistent and reviewed for effectiveness after restoration.", "Destroys trust and increases speculation.", -5
    )),
    // IT/Security
    q("IT/Security", "How should IT/Security prove the error is not malicious?", buildChoices(
      "Collect and review all relevant logs, system records, and staff actions, document the timeline, and communicate findings to stakeholders. Provide a detailed report and ensure all actions are reviewed for accuracy and defensibility after restoration.", "Ensures accuracy and supports defensibility.", 10,
      "Rely on system consistency checks and staff statements, assuming no malicious activity if no discrepancies are found. Prepare a summary of findings and ensure all actions are reviewed for accuracy and defensibility after restoration.", "May miss hidden issues and reduce defensibility.", 5,
      "Delay investigation until more evidence is found, postponing action in hopes of finding more proof. Provide updates only when new information is available and ensure all actions are reviewed for accuracy and defensibility after restoration.", "Delays resolution and increases risk.", -5,
      "Ignore the incident and assert it is not malicious without investigation. Make no effort to collect evidence and ensure all actions are reviewed for accuracy and defensibility after restoration.", "Reduces trust and increases risk of findings.", -5
    )),
    // HR
    q("HR", "How should HR support staff morale when employees are accused of fraud?", buildChoices(
      "Provide clear communication about the nature of the error, offer support resources, and reinforce a culture of accountability and learning. Ensure regular updates and monitor staff morale and stress reduction, reviewing effectiveness after restoration.", "Improves morale and reduces stress.", 10,
      "Survey staff for feedback and make minor adjustments to support, updating only where issues are reported. Provide periodic updates and monitor staff morale and stress reduction, reviewing effectiveness after restoration.", "Some improvement but may miss systemic issues.", 5,
      "Rely on existing support and assume staff are coping, making no changes unless required. Offer minimal updates and monitor staff morale and stress reduction, reviewing effectiveness after restoration.", "Misses opportunity to address root causes.", -5,
      "Blame staff for the error and issue warnings, focusing on discipline rather than improvement. Communicate only when necessary and monitor staff morale and stress reduction, reviewing effectiveness after restoration.", "Damages morale and increases turnover.", -5
    )),
    // Finance
    q("Finance", "How should Finance manage temporary liquidity distortion from the error?", buildChoices(
      "Monitor liquidity closely, communicate with leadership, and prepare contingency plans for cash flow needs. Provide regular updates and ensure all actions are reviewed for liquidity and risk management after restoration.", "Balances risk and supports stability.", 10,
      "Estimate liquidity impact based on best guesses, updating numbers as new information emerges. Share periodic updates and ensure all actions are reviewed for liquidity and risk management after restoration.", "Some flexibility but may appear inconsistent.", 5,
      "Deny any liquidity impact exists, refusing to estimate or communicate possible effects. Provide minimal updates and ensure all actions are reviewed for liquidity and risk management after restoration.", "Risks regulatory findings and trust loss.", -5,
      "Provide no estimates until all entries are corrected, delaying communication indefinitely. Only update after full correction and ensure all actions are reviewed for liquidity and risk management after restoration.", "Increases anxiety and regulatory scrutiny.", -5
    )),
    // Loans
    q("Loans", "How should Loans address auto-pay confusion caused by the error?", buildChoices(
      "Communicate proactively with affected customers, clarify the nature of the error, and provide remediation or escalation paths. Give regular updates and ensure all actions are reviewed for accuracy and fairness after restoration.", "Ensures fairness and reduces repeat complaints.", 10,
      "Allow each lender to decide how to handle confusion, providing general guidance but no standardization. Share periodic updates and ensure all actions are reviewed for accuracy and fairness after restoration.", "May create inconsistency and confusion.", 5,
      "Remediate only when customers escalate, addressing issues reactively rather than proactively. Provide minimal updates and ensure all actions are reviewed for accuracy and fairness after restoration.", "Misses silent or less vocal customers.", -5,
      "Delay all action until the error is fully corrected, taking no steps to resolve confusion until more data is found. Only update after full correction and ensure all actions are reviewed for accuracy and fairness after restoration.", "Increases risk of findings and customer loss.", -5
    )),
    // Accounting
    q("Accounting", "How should Accounting correct entries without causing misstatement?", buildChoices(
      "Document all corrections, reconcile accounts, and communicate changes to auditors and stakeholders. Provide regular updates and ensure all actions are reviewed for accuracy and defensibility after restoration.", "Ensures accuracy and reduces risk of misstatement.", 10,
      "Make corrections as needed without full documentation, updating records as issues are found. Share periodic updates and ensure all actions are reviewed for accuracy and defensibility after restoration.", "May raise questions about thoroughness.", 5,
      "Delay corrections until specifically requested, taking no proactive steps. Provide minimal updates and ensure all actions are reviewed for accuracy and defensibility after restoration.", "Appears unprepared and reactive.", -5,
      "Rely on verbal explanations instead of written records, providing only staff recollections. Only update after full correction and ensure all actions are reviewed for accuracy and defensibility after restoration.", "Weakens audit trail and defensibility.", -5
    )),
    // Deposits
    q("Deposits", "How should Deposits manage call center overload during the incident?", buildChoices(
      "Implement surge staffing, provide scripts for common questions, and issue regular status updates to reduce call volume. Give regular updates and ensure all actions are reviewed for load and messaging consistency after restoration.", "Reduces load and keeps messaging consistent.", 10,
      "Add scripts for staff but keep the phone tree the same, offering some support for customer interactions but maintaining the existing call routing. Share periodic updates and ensure all actions are reviewed for load and messaging consistency after restoration.", "Helpful, but still high volume without automation.", 5,
      "Turn phones off during periods of high pressure, suspending all incoming calls and communications. Provide minimal updates and ensure all actions are reviewed for load and messaging consistency after restoration.", "Worsens panic and leaves customers without support.", -5,
      "Tell customers everything is fine without providing facts, offering vague reassurances that may damage credibility and increase confusion among callers. Track all communications, monitor for credibility risk and effectiveness, and review for effectiveness after restoration.", "Credibility risk and confusion.", -5
    )),
  ]
};
const SCENARIO_DATA_UNVERIFIABLE = {
  key: "customer-data-correct-unverifiable",
  title: "Customer Data Correct but Unverifiable",
  description:
    "Customers report incorrect balances and transaction histories. Internal systems appear consistent, but logs required to prove accuracy are incomplete due to a prior retention misconfiguration.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "How should leadership address the trust vs truth dilemma with customers and regulators?", buildChoices(
      "Acknowledge the evidence gap, explain the steps being taken to validate data, and offer transparent updates while committing to remediation if errors are found. Provide regular status reports and ensure all communications are consistent and reviewed for effectiveness after restoration.", "Builds trust and manages regulatory risk.", 10,
      "Emphasize system consistency and assert data is correct, downplaying the lack of evidence. Share periodic updates and ensure all communications are consistent and reviewed for effectiveness after restoration.", "May appear evasive and risk trust.", 5,
      "Delay communication until more evidence is found, waiting for further investigation before addressing customers or regulators. Provide minimal updates and ensure all communications are consistent and reviewed for effectiveness after restoration.", "Increases speculation and anxiety.", -5,
      "Deny any issues and refuse to discuss evidence gaps, insisting that all data is correct without explanation. Only communicate if required and ensure all communications are consistent and reviewed for effectiveness after restoration.", "Destroys trust and increases regulatory scrutiny.", -5
    )),
    // IT/Security
    q("IT/Security", "How should IT address logging gaps and validate data integrity?", buildChoices(
      "Conduct a full review of available logs, use alternative validation methods, and document all findings and gaps. Provide a detailed report and ensure all actions are reviewed for integrity and completeness after restoration.", "Maximizes defensibility and transparency.", 10,
      "Rely on system consistency checks alone, assuming data is correct if no discrepancies are found. Prepare a summary of findings and ensure all actions are reviewed for integrity and completeness after restoration.", "May miss hidden issues and reduce defensibility.", 5,
      "Delay validation until more logs are recovered, postponing action in hopes of finding more evidence. Provide updates only when new information is available and ensure all actions are reviewed for integrity and completeness after restoration.", "Delays resolution and increases risk.", -5,
      "Ignore the logging gap and assert that all data is correct, refusing to investigate further. Make no effort to collect evidence and ensure all actions are reviewed for integrity and completeness after restoration.", "Reduces trust and increases risk of findings.", -5
    )),
    // HR
    q("HR", "How should HR address training gaps and staff stress from unverifiable data?", buildChoices(
      "Provide targeted training on evidence handling, offer stress management resources, and clarify accountability expectations. Ensure regular updates and monitor staff readiness and stress reduction, reviewing effectiveness after restoration.", "Improves readiness and reduces stress.", 10,
      "Survey staff for feedback and make minor adjustments to training, updating only where issues are reported. Provide periodic updates and monitor staff readiness and stress reduction, reviewing effectiveness after restoration.", "Some improvement but may miss systemic issues.", 5,
      "Rely on existing training and assume staff are prepared, making no changes unless required. Offer minimal updates and monitor staff readiness and stress reduction, reviewing effectiveness after restoration.", "Misses opportunity to address root causes.", -5,
      "Blame staff for customer complaints and issue warnings, focusing on discipline rather than improvement. Communicate only when necessary and monitor staff readiness and stress reduction, reviewing effectiveness after restoration.", "Damages morale and increases turnover.", -5
    )),
    // Finance
    q("Finance", "How should Finance estimate exposure without complete evidence?", buildChoices(
      "Use available data, document all assumptions, and provide a range of possible exposures with clear caveats. Provide regular updates and ensure all actions are reviewed for accuracy and defensibility after restoration.", "Balances accuracy and defensibility.", 10,
      "Estimate exposure based on best guesses, updating numbers as new information emerges. Share periodic updates and ensure all actions are reviewed for accuracy and defensibility after restoration.", "Some flexibility but may appear inconsistent.", 5,
      "Deny any exposure exists without evidence, refusing to estimate or communicate possible impacts. Provide minimal updates and ensure all actions are reviewed for accuracy and defensibility after restoration.", "Risks regulatory findings and trust loss.", -5,
      "Provide no estimates until all evidence is recovered, delaying communication indefinitely. Only update after full evidence is recovered and ensure all actions are reviewed for accuracy and defensibility after restoration.", "Increases anxiety and regulatory scrutiny.", -5
    )),
    // Loans
    q("Loans", "How should Loans handle payoff accuracy and disputes with unverifiable data?", buildChoices(
      "Review all available records, communicate limitations to customers, and offer remediation or escalation paths for disputes. Give regular updates and ensure all actions are reviewed for accuracy and fairness after restoration.", "Ensures fairness and reduces repeat complaints.", 10,
      "Allow each lender to decide how to handle disputes, providing general guidance but no standardization. Share periodic updates and ensure all actions are reviewed for accuracy and fairness after restoration.", "May create inconsistency and confusion.", 5,
      "Remediate only when customers escalate, addressing issues reactively rather than proactively. Provide minimal updates and ensure all actions are reviewed for accuracy and fairness after restoration.", "Misses silent or less vocal customers.", -5,
      "Delay all action until evidence is complete, taking no steps to resolve disputes until more data is found. Only update after full evidence is recovered and ensure all actions are reviewed for accuracy and fairness after restoration.", "Increases risk of findings and customer loss.", -5
    )),
    // Accounting
    q("Accounting", "How should Accounting address audit trail sufficiency with incomplete logs?", buildChoices(
      "Compile all available records, document gaps, and provide a clear explanation to auditors and regulators. Provide regular updates and ensure all actions are reviewed for completeness and defensibility after restoration.", "Supports defensibility and reduces findings.", 10,
      "Provide only summary reports without supporting detail, limiting documentation to high-level overviews. Share periodic updates and ensure all actions are reviewed for completeness and defensibility after restoration.", "May raise questions about thoroughness.", 5,
      "Delay documentation until specifically requested, taking no proactive steps. Provide minimal updates and ensure all actions are reviewed for completeness and defensibility after restoration.", "Appears unprepared and reactive.", -5,
      "Rely on verbal explanations instead of written records, providing only staff recollections. Only update after regulatory review and ensure all actions are reviewed for completeness and defensibility after restoration.", "Weakens audit trail and defensibility.", -5
    )),
  ]
};
const SCENARIO_REGULATORY_INQUIRY = {
  key: "regulatory-inquiry-customer-complaints",
  title: "Regulatory Inquiry Triggered by Customer Complaints",
  description:
    "Regulators contact the bank after receiving multiple customer complaints about delays, fees, and inconsistent explanations — before the bank has formally escalated an incident.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "How should leadership manage the regulator relationship after being contacted first?", buildChoices(
      "Respond promptly with transparency, provide a summary of known facts, outline steps being taken, and commit to regular updates. Provide regular status reports and ensure all communications are consistent and reviewed for effectiveness after restoration.", "Builds trust and manages expectations.", 10,
      "Delay response until more information is gathered, preparing a comprehensive report before engaging. Share periodic updates and ensure all communications are consistent and reviewed for effectiveness after restoration.", "May appear evasive and risk trust.", 5,
      "Deflect responsibility to departments or vendors, providing only minimal information and waiting for further regulator requests. Provide minimal updates and ensure all communications are consistent and reviewed for effectiveness after restoration.", "Risks credibility and escalates scrutiny.", -5,
      "Ignore the inquiry until a formal request is received, taking no action until required. Only communicate if required and ensure all communications are consistent and reviewed for effectiveness after restoration.", "Destroys trust and increases risk of penalties.", -5
    )),
    // IT/Security
    q("IT/Security", "How should IT reconstruct the incident timeline for regulators?", buildChoices(
      "Gather logs, emails, and system records, interview key staff, and create a detailed, evidence-based timeline. Provide a detailed report and ensure all actions are reviewed for completeness and accuracy after restoration.", "Ensures accuracy and supports defensibility.", 10,
      "Rely on memory and informal notes from staff, compiling a timeline based on recollections. Prepare a summary of findings and ensure all actions are reviewed for completeness and accuracy after restoration.", "May miss key details and reduce defensibility.", 5,
      "Provide only system-generated logs without context or explanation, omitting staff input. Provide minimal updates and ensure all actions are reviewed for completeness and accuracy after restoration.", "Lacks context and may raise questions.", -5,
      "Delay timeline creation until specifically requested by regulators, taking no proactive steps. Only update if required and ensure all actions are reviewed for completeness and accuracy after restoration.", "Appears unprepared and reactive.", -5
    )),
    // HR
    q("HR", "How should HR address training adequacy and scripts after complaints?", buildChoices(
      "Review and update training materials and scripts, provide refresher sessions, and document all changes. Ensure regular updates and monitor staff readiness and complaint reduction, reviewing effectiveness after restoration.", "Improves readiness and reduces future complaints.", 10,
      "Survey staff for feedback and make minor adjustments to scripts, updating only where issues are reported. Provide periodic updates and monitor staff readiness and complaint reduction, reviewing effectiveness after restoration.", "Some improvement but may miss systemic issues.", 5,
      "Rely on existing materials and assume staff are following procedures, making no changes unless required. Offer minimal updates and monitor staff readiness and complaint reduction, reviewing effectiveness after restoration.", "Misses opportunity to address root causes.", -5,
      "Blame staff for complaints and issue warnings, focusing on discipline rather than improvement. Communicate only when necessary and monitor staff readiness and complaint reduction, reviewing effectiveness after restoration.", "Damages morale and increases turnover.", -5
    )),
    // Finance
    q("Finance", "How should Finance handle fee reversals and cost impact after complaints?", buildChoices(
      "Implement a clear fee reversal policy, document all reversals, and analyze cost impact for reporting. Provide regular updates and ensure all actions are reviewed for fairness and cost control after restoration.", "Balances fairness and cost control.", 10,
      "Review fee reversals case-by-case without a formal policy, allowing discretion but risking inconsistency. Share periodic updates and ensure all actions are reviewed for fairness and cost control after restoration.", "Some flexibility but may appear inconsistent.", 5,
      "Deny all fee reversals to protect revenue, regardless of complaint validity. Provide minimal updates and ensure all actions are reviewed for fairness and cost control after restoration.", "Risks regulatory findings and customer churn.", -5,
      "Reverse all fees automatically, regardless of context or policy. Only update after all reversals are processed and ensure all actions are reviewed for fairness and cost control after restoration.", "Unsustainable and may encourage abuse.", -5
    )),
    // Loans
    q("Loans", "How should Loans ensure customer remediation is consistent?", buildChoices(
      "Standardize remediation steps, document all actions, and communicate clearly with affected customers. Give regular updates and ensure all actions are reviewed for consistency and fairness after restoration.", "Ensures fairness and reduces repeat complaints.", 10,
      "Allow each lender to decide remediation steps, providing general guidance but no standardization. Share periodic updates and ensure all actions are reviewed for consistency and fairness after restoration.", "May create inconsistency and confusion.", 5,
      "Remediate only when customers escalate, addressing issues reactively rather than proactively. Provide minimal updates and ensure all actions are reviewed for consistency and fairness after restoration.", "Misses silent or less vocal customers.", -5,
      "Delay remediation until after regulatory review, taking no action until required. Only update after regulatory review and ensure all actions are reviewed for consistency and fairness after restoration.", "Increases risk of findings and customer loss.", -5
    )),
    // Accounting
    q("Accounting", "How should Accounting support documentation after a regulatory inquiry?", buildChoices(
      "Compile all relevant records, reconcile discrepancies, and provide a clear audit trail for regulators. Provide regular updates and ensure all actions are reviewed for completeness and defensibility after restoration.", "Supports defensibility and reduces findings.", 10,
      "Provide only summary reports without supporting detail, limiting documentation to high-level overviews. Share periodic updates and ensure all actions are reviewed for completeness and defensibility after restoration.", "May raise questions about thoroughness.", 5,
      "Delay documentation until specifically requested, taking no proactive steps. Provide minimal updates and ensure all actions are reviewed for completeness and defensibility after restoration.", "Appears unprepared and reactive.", -5,
      "Rely on verbal explanations instead of written records, providing only staff recollections. Only update after regulatory review and ensure all actions are reviewed for completeness and defensibility after restoration.", "Weakens audit trail and defensibility.", -5
    )),
    // Deposits
    q("Deposits", "How should Deposits handle complaints and identify root cause?", buildChoices(
      "Log all complaints, analyze trends, and implement corrective actions to address root causes. Communicate findings to staff and customers, and review for effectiveness after restoration. Track all actions, monitor for complaint reduction and root cause resolution and effectiveness, and review for effectiveness after restoration.", "Reduces complaints and addresses root causes.", 10,
      "Address complaints individually without trend analysis, resolving issues as they arise. Track all actions, monitor for complaint reduction and root cause resolution and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for complaint reduction and root cause resolution and effectiveness, and review for effectiveness after restoration.", "May miss systemic issues and repeat complaints.", 5,
      "Minimize complaints and discourage escalation, focusing on quick resolution rather than analysis. Track all actions, monitor for complaint reduction and root cause resolution and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for complaint reduction and root cause resolution and effectiveness, and review for effectiveness after restoration.", "Risks missing root causes and regulatory findings.", -5,
      "Ignore complaints unless required by regulators, taking no action until formally requested. Track all actions, monitor for complaint reduction and root cause resolution and effectiveness, and review for effectiveness after restoration. Track all actions, monitor for complaint reduction and root cause resolution and effectiveness, and review for effectiveness after restoration.", "Increases risk of findings and customer loss.", -5
    )),
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
    )),
    /* ================= SCENARIO 7 ------------------------- */
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

          "Do not perform any reconciliations, assuming the vendor caught everything. Record the rationale, communicate the decision to stakeholders, and prepare to review for undetected breaks if issues arise. Track all reconciliations, monitor for risk, and review for effectiveness after restoration.",
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

        // Deposits (3)
        q("Deposits", "If suspicious customer-impacting activity is detected during an insider fraud incident, what is the most effective and fair way to handle these cases?", buildChoices(
          "Place holds on affected accounts per established policy, escalate all suspicious cases to the incident response team, and document every action thoroughly. Communicate updated procedures to all Deposits staff, track each case in a central system, and review for protection and fairness throughout the incident. Ensure all actions are audit-ready and defensible for regulatory review.",
          "Balances protection, fairness, and regulatory compliance.",
          10,

          "Allow all customer activity to proceed without restriction to avoid complaints, permitting transactions even if suspicious. Track all activity, monitor for loss and compliance risks, and review for effectiveness after restoration.",
          "Loss and compliance risk; may result in regulatory penalties and customer harm.",
          5,

          "Let each branch decide how to handle cases ad-hoc, allowing locations to manage suspicious activity independently without scripts or guidance. Track all decisions, monitor for inconsistencies, and review for risks after the incident.",
          "Inconsistent and risky; may create fairness and compliance issues.",
          -5,

          "Disclose the implicated employee’s identity to customers to explain delays or issues, sharing personal details as justification. Track all communications, inform management of privacy and legal risks, and review for appropriateness after restoration.",
          "Privacy/legal risk; may violate confidentiality and create reputational harm.",
          -5
        )),
        q("Deposits", "What should frontline staff tell customers about delayed postings?", buildChoices(
          "Use approved scripts to explain what’s impacted, what customers can do, and where to check status updates. Document all customer interactions, provide consistent guidance, and escalate complex cases as needed to maintain trust and clarity. Track all communications, monitor for guidance and trust, and review for effectiveness after restoration.",
          "Consistent and practical guidance.",
          10,

          "Say \"everything is fine\" to avoid panic, reassuring customers without providing details. Track customer reactions, prepare to address concerns if delays become visible, and review communication strategy after the outage. Track all communications, monitor for credibility risk, and review for effectiveness after restoration.",
          "Credibility risk when delays are visible.",
          5,

          "Blame vendor staff by name when discussing delays, identifying individuals responsible. Record all such communications, inform management of the approach, and review for professionalism and risk after restoration. Track all communications, monitor for professionalism and risk, and review for effectiveness after restoration.",
          "Unprofessional and risky.",
          -5,

          "Share internal emails as proof of the situation, providing customers with behind-the-scenes information. Document what is shared, communicate risks to staff, and review for appropriateness and confidentiality after the outage. Track all communications, monitor for appropriateness and confidentiality, and review for effectiveness after restoration.",
          "Inappropriate and risky.",
          -5
        )),
        q("Deposits", "How should holds/fees be handled fairly during the outage?", buildChoices(
          "Implement a temporary policy with clear criteria and an escalation path for handling holds and fees during the outage. Communicate the policy to all branches, track exceptions, and review for fairness and consistency after restoration. Track all actions, monitor for fairness and control, and review for effectiveness after restoration.",
          "Balances fairness and control.",
          10,

          "Waive all holds and fees universally, applying the same approach to every customer. Document the rationale, monitor for abuse, and prepare to adjust the policy if it becomes unsustainable. Track all waivers, monitor for sustainability and abuse, and review for effectiveness after restoration.",
          "Unsustainable and may create abuse.",
          5,

          "Do not allow waivers under any condition, enforcing standard rules throughout the outage. Track customer complaints, document the impact, and review for reputational risks after normal operations resume. Track all actions, monitor for harm and complaints, and review for effectiveness after restoration.",
          "Customer harm and complaints.",
          -5,

          "Apply different rules per branch, allowing each location to decide how to handle holds and fees. Record all decisions, monitor for inconsistencies, and review for fairness and risk after the outage. Track all actions, monitor for inconsistency and risk, and review for effectiveness after restoration.",
          "Inconsistent and risky.",
          -5
        )),
        q("Deposits", "What update cadence reduces call volume most effectively?", buildChoices(
          "Provide regular status updates with factual progress and verified ETAs, communicating predictably to customers. Track call volume, adjust cadence as needed, and review effectiveness after the outage. Track all updates, monitor for call volume and trust-building, and review for effectiveness after restoration.",
          "Predictable and trust-building.",
          10,

          "Update customers only when there’s big news, limiting communications to major developments. Monitor for increased call volume, document customer feedback, and review the strategy for future incidents. Track all updates, monitor for predictability and call volume, and review for effectiveness after restoration.",
          "Less predictable; more calls.",
          5,

          "Allow constant unvetted updates from multiple staff, sharing information as it becomes available. Track errors and confusion, inform management of issues, and plan to centralize communications after restoration. Track all updates, monitor for noise and errors, and review for effectiveness after restoration.",
          "Noise and errors.",
          -5,

          "Share internal-only updates, keeping customers uninformed during the outage. Record the rationale, monitor for customer frustration, and review for service impacts after normal operations resume. Track all updates, monitor for customer information and service impact, and review for effectiveness after restoration.",
          "Customers remain uninformed.",
          -5
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
        q("CEO/SVPs", "Upon learning that insider fraud has been flagged by internal audit, what is the first comprehensive action leadership should take to ensure the organization responds effectively and lawfully?", buildChoices(
          "Immediately convene the incident response team, including Legal, HR, IT, and Audit, to establish a coordinated governance structure. Set a preservation-first posture, assign clear roles for evidence protection, and ensure all actions are documented in real time. Communicate the plan to executive stakeholders, initiate a timeline for key decisions, and prepare for regulatory and law enforcement engagement as needed.",
          "Ensures coordinated, defensible actions and preserves evidence while preparing for all downstream requirements.",
          10,

          "Allow the audit department to continue its review in isolation, instructing other departments to avoid involvement until a final report is issued. Monitor for new developments, but avoid any immediate disruption to business operations or staff routines. Prepare to escalate only if the situation appears to worsen or if additional risks are identified.",
          "Too slow; evidence and losses can grow, and lack of coordination may compromise the response.",
          5,

          "Suspend all customer-facing communications and marketing activities until the end of the month, pausing outreach and updates to avoid premature disclosure. Document the rationale for the blackout, monitor for customer impacts, and plan to resume communications with a comprehensive report after the investigation concludes.",
          "Delays can harm customers and trust, and may create confusion or suspicion.",
          -5,

          "Require the implicated employee to make a public statement to all staff before any formal action is taken, recording the process for transparency. Communicate the risks to Legal and HR, and review for evidence contamination or prejudicial effects after the fact.",
          "Prejudicial and risky; can taint evidence and create legal exposure.",
          -5
        )),
        q("CEO/SVPs", "On the first day of the incident, what is the most appropriate and defensible approach to disclosing the situation both internally and externally?", buildChoices(
          "Limit disclosure strictly to those with a need-to-know, using carefully prepared scripts for internal communication. For external parties, provide information only if customers are directly impacted, and ensure all messaging is reviewed by Legal and Communications. Track every communication, update scripts as the investigation progresses, and document the rationale for all disclosure decisions.",
          "Balances transparency, privacy, and the integrity of the investigation while reducing legal risk.",
          10,

          "Issue a public press release naming the employee and describing the incident in detail to media, customers, and stakeholders. Document the rationale for full transparency, monitor for legal and privacy risks, and prepare to address any fallout or questions that arise from the disclosure.",
          "Legal/privacy risk; may expose the organization to liability and reputational harm.",
          5,

          "Instruct all branch staff to improvise answers if asked by customers or the public, allowing each location to respond as they see fit. Track all responses, review for inconsistencies, and plan to standardize communications after the initial phase if needed.",
          "Inconsistent and risky; increases the chance of misinformation and legal exposure.",
          -5,

          "Distribute raw audit workpapers and findings widely to all staff and stakeholders, providing full transparency from the outset. Record what is shared, communicate risks to management, and review for uncontrolled information flow after the investigation.",
          "Uncontrolled and risky; may compromise the investigation and privacy obligations.",
          -5
        )),
        q("CEO/SVPs", "What is the most effective and legally sound way for leadership to engage with law enforcement when insider fraud is suspected?", buildChoices(
          "Consult with legal counsel to determine the appropriate timing and method for law enforcement engagement. Preserve the chain of custody for all evidence, coordinate with law enforcement only if legal thresholds are met, and document every interaction. Communicate the engagement plan to executive stakeholders and ensure investigative integrity is maintained throughout the process.",
          "Defensible coordination that protects the investigation and meets legal obligations.",
          10,

          "Contact local police immediately with preliminary information, providing initial details before a full internal review is conducted. Track all communications, monitor for evidence handling issues, and prepare to follow up with complete documentation as needed.",
          "May compromise evidence handling and the integrity of the investigation.",
          5,

          "Decide to handle the matter entirely internally, avoiding any law enforcement involvement regardless of the scale of the fraud. Document the rationale, monitor for missed recovery or deterrence opportunities, and review for governance risks after the investigation.",
          "Misses recovery/deterrence opportunities and may violate legal or regulatory requirements.",
          -5,

          "Allow the implicated employee to decide whether law enforcement should be involved, deferring to their preference for next steps. Record the process, communicate risks to management, and review for conflicts or governance failures after the fact.",
          "Conflict and governance failure; abdicates leadership responsibility and creates legal risk.",
          -5
        )),

        // IT/Security (3)
        q("IT/Security", "When insider fraud is suspected, what is the most effective immediate action IT/Security should take regarding system access, and how should this be executed?", buildChoices(
          "Promptly disable all accounts, tokens, and privileged credentials associated with the implicated employee, including any shared or cross-departmental access. Conduct a rapid review of all privileged access logs, coordinate with HR and Legal to ensure no access is overlooked, and document every step. Notify IT and security teams of the changes, and implement enhanced monitoring for any attempted access or privilege escalation post-removal.",
          "Reduces further loss, closes exposure, and ensures a defensible access trail.",
          10,

          "Increase monitoring of the employee’s accounts but leave access active to observe behavior, tracking all activity in real time. Record findings, communicate risks to management, and prepare to disable access if suspicious actions are detected during the monitoring period.",
          "Leaves risk window open and may allow further loss or evidence tampering.",
          5,

          "Distribute admin credentials to all IT and security staff to expedite investigation and remediation, providing broad access to necessary systems. Track who receives credentials, monitor for segregation failures, and plan to reset all access once the incident is resolved.",
          "Segregation failure; increases risk of further compromise and audit issues.",
          -5,

          "Disable all system logging to reduce noise and improve performance during the incident, suspending record-keeping for the duration. Document the rationale, inform relevant teams, and plan to restore logging and review for evidence loss after the investigation.",
          "Destroys forensics and undermines the investigation.",
          -5
        )),
        q("IT/Security", "What are the best practices for preserving technical evidence in an insider fraud investigation, and how should this be communicated and maintained?", buildChoices(
          "Immediately snapshot all relevant systems, collect comprehensive logs (including access, transaction, and security logs), and store them in a secure, access-controlled repository with a documented chain-of-custody. Communicate preservation procedures to all technical staff, conduct regular reviews of evidence integrity, and ensure all actions support legal, regulatory, and recovery requirements throughout the process.",
          "Supports legal, regulatory, and recovery steps with strong forensics.",
          10,

          "Instruct staff to save screenshots and key files to a shared drive, relying on manual capture of evidence. Track completeness, inform compliance of the approach, and review for weak or incomplete forensics after restoration.",
          "Partial but weak forensics; may miss critical evidence.",
          5,

          "Delete older or unneeded logs to save storage space during the investigation, removing records that are not immediately relevant. Document the rationale, communicate risks to management, and review for evidence loss after the incident.",
          "Loss of evidence; may compromise the investigation and legal defense.",
          -5,

          "Allow staff to export data locally for convenience, permitting personal copies of key files and logs. Track all exports, inform compliance, and review for privacy or integrity risks after the investigation.",
          "Privacy/integrity risk; increases chance of data leakage or tampering.",
          -5
        )),
        q("IT/Security", "If the implicated employee had access to multiple departments and integrated systems, what controls should be implemented immediately to prevent further spread or lateral movement?", buildChoices(
          "Conduct an urgent, organization-wide access review across all integrated applications and systems, immediately rotate all shared secrets and privileged credentials, and validate the integrity of vendor integrations. Communicate all changes to internal and external stakeholders, document every action, and implement continuous monitoring for any signs of lateral movement or unauthorized access attempts after containment.",
          "Closes lateral paths quickly and reduces risk of further compromise.",
          10,

          "Focus only on the primary application the employee used, reviewing access and activity in that system while deferring review of other systems. Track findings, communicate risks to management, and prepare to expand the review if new evidence emerges.",
          "Misses other access vectors and may allow undetected spread.",
          5,

          "Rely solely on vendor logs and external monitoring to detect any further issues, assuming that third-party systems will alert to suspicious activity. Document the rationale, monitor for delays in containment, and review for missed access vectors after the investigation.",
          "Over-reliance; delays containment and may miss internal threats.",
          -5,

          "Turn off all monitoring tools to improve system performance during the incident, suspending visibility until the investigation is complete. Record the rationale, inform relevant teams, and plan to restore monitoring and review for missed activity after the fact.",
          "Removes visibility and increases risk of undetected activity.",
          -5
        )),

        // HR (3)
        q("HR", "When an employee is implicated in insider fraud, what is the most appropriate first HR action, and how should it be executed to protect both the investigation and the organization?", buildChoices(
          "Place the implicated employee on immediate administrative leave pending investigation, ensuring Legal and IT are present for all communications and asset collection. Secure all company property, access cards, and devices, and document every step with signed acknowledgments. Communicate the process to relevant staff, monitor for any attempts at interference or evidence loss, and coordinate with security for physical and digital access control.",
          "Reduces interference, preserves evidence, and protects the organization from further risk.",
          10,

          "Terminate the employee’s employment immediately without full documentation or review, ending their access and relationship with the company on the spot. Track all actions, communicate risks to management, and prepare to address complications in investigation, recovery, and potential legal claims.",
          "May complicate investigation, recovery, and expose the organization to legal risk.",
          5,

          "Announce the incident and the employee’s involvement to all staff as a warning, making an example of the situation to deter future misconduct. Record the process, communicate risks to HR and Legal, and review for culture and legal impacts after the fact.",
          "Culture and legal risk; may create a hostile environment and legal exposure.",
          -5,

          "Take no action until the audit team provides a final loss amount, delaying all HR involvement until a full report is available. Document the rationale, monitor for containment and safety risks, and review for missed opportunities after the investigation.",
          "Delays containment and safety, and may allow further harm.",
          -5
        )),
        q("HR", "What is the most effective guidance HR should provide to staff during an insider fraud investigation, and how should it be delivered?", buildChoices(
          "Instruct all staff to report any concerns or relevant information through the official whistleblower or incident reporting channel, emphasizing the importance of avoiding speculation and preserving evidence. Deliver the guidance in writing and in person, track compliance, and review for consistency and effectiveness after the incident. Reinforce confidentiality and the organization’s commitment to a fair process.",
          "Encourages reporting, consistency, and protects the investigation.",
          10,

          "Encourage open discussion about the incident in group chats and informal meetings to surface potential leads, allowing staff to share information freely. Track all discussions, monitor for uncontrolled risks, and plan to standardize reporting after the investigation.",
          "Uncontrolled and risky; may spread rumors and compromise evidence.",
          5,

          "Threaten disciplinary action for any mention of the case, warning staff against discussing the incident under any circumstances. Document the approach, monitor for reporting chills, and review for effectiveness and culture impacts after the fact.",
          "Chills reporting and may suppress important information.",
          -5,

          "Share the implicated employee’s name and details of the case with all staff for transparency, providing full information to the workforce. Track all communications, inform HR and Legal of risks, and review for privacy and legal impacts after the incident.",
          "Privacy and legal risk; may violate confidentiality and create legal exposure.",
          -5
        )),
        q("HR", "How should HR manage staff safety, morale, and operational coverage during an ongoing insider fraud investigation?", buildChoices(
          "Coordinate schedules and designate backup personnel for all critical roles, offering remote work or flexible arrangements as needed to reduce stress. Communicate all changes clearly to staff, provide access to support resources (such as counseling or EAP), and monitor for signs of burnout or morale issues. Track coverage and review for service impacts throughout the incident, adjusting as necessary to maintain both safety and business continuity.",
          "Reduces burnout, maintains service, and supports staff well-being.",
          10,

          "Maintain all normal schedules and routines regardless of the incident, instructing staff to continue standard operations without adjustment. Track response times, monitor for slowdowns, and prepare to adjust schedules only if service quality declines significantly.",
          "May slow response and increase stress, risking service quality and morale.",
          5,

          "Suspend all operations for the week, pausing all work until the incident is fully resolved. Document the rationale, monitor for customer harm, and review for overreaction after restoration.",
          "Overreaction and customer harm; disrupts business continuity.",
          -5,

          "Allow teams to self-organize coverage with no oversight or direction from HR, letting staff manage their own schedules and responsibilities. Track all decisions, monitor for inconsistencies, and review for risks after the incident.",
          "Inconsistent and risky; may lead to gaps in coverage and increased stress.",
          -5
        )),

        // Finance (3)
        q("Finance", "What is the most effective way for Finance to track potential losses during an insider fraud investigation, and how should this process be managed?", buildChoices(
          "Establish a dedicated incident cost center and a detailed exposure ledger, requiring approvals for all entries. Track every potential loss as it arises, categorize exposures by type (e.g., direct loss, legal, remediation), and communicate the process to Finance, Audit, and Executive teams. Review records for accuracy and audit readiness throughout the investigation, and ensure all documentation is retained for regulatory review.",
          "Accurate, transparent, and audit-ready; supports recovery and regulatory needs.",
          10,

          "Wait to estimate losses until law enforcement or external investigators are engaged, deferring tracking until official input is received. Document the rationale, monitor for late or inaccurate records, and review for missed exposures after the incident.",
          "Late and inaccurate; may miss timely recovery or reporting opportunities.",
          5,

          "Record all losses in miscellaneous or general expense categories, spreading costs across unrelated accounts to avoid drawing attention. Track all entries, inform management of the approach, and review for transparency and audit risks after restoration.",
          "Lack of transparency; may create audit and regulatory issues.",
          -5,

          "Avoid tracking losses until customers or external parties complain, waiting for outside reports before recording any exposures. Document the rationale, monitor for reactive risks, and review for missed opportunities after the investigation.",
          "Reactive and risky; may result in missed recovery and reputational harm.",
          -5
        )),
        q("Finance", "During the investigation, what spending should Finance prioritize, and how should these priorities be communicated and controlled?", buildChoices(
          "Prioritize spending on forensics, enhanced monitoring, legal support, and recovery work directly aligned to the incident response. Require approvals for all expenditures, communicate priorities to Finance and management, and review spending for effectiveness and alignment with investigation goals. Adjust priorities as the investigation progresses, and document all decisions for transparency and audit purposes.",
          "Reduces future loss, speeds clarity, and ensures spending is defensible.",
          10,

          "Freeze all spending to avoid criticism or scrutiny, suspending all payments and reimbursements during the investigation. Track impacts on investigation and recovery, document the rationale, and review for delays or missed opportunities after restoration.",
          "Slows investigation and recovery; may hinder response efforts.",
          5,

          "Cut security and monitoring tooling to save money, reducing investment in protective measures during the incident. Track all changes, monitor for increased risk, and review for impacts on investigation and future prevention.",
          "Increases risk and may compromise the investigation.",
          -5,

          "Authorize payments for incident response without any approvals to expedite the process, bypassing normal controls. Track all expenditures, inform management of risks, and review for control failures after the investigation.",
          "Control failure; may result in fraud or waste.",
          -5
        )),
        q("Finance", "How should Finance approach customer restitution or credits if losses or harm are identified during the insider fraud investigation?", buildChoices(
          "Work with Legal to document clear, defensible criteria for customer remediation or credits, and track all cases centrally in a secure system. Communicate the process and criteria to all relevant staff, review for fairness and consistency, and update criteria as new information emerges. Ensure all remediation actions are documented and audit-ready throughout the investigation.",
          "Fair, consistent, and defensible; protects customers and the organization.",
          10,

          "Allow each branch or department to handle refunds and credits at their own discretion, making ad-hoc decisions based on local judgment. Track all cases, monitor for inconsistencies, and review for risks after the incident is resolved.",
          "Inconsistent and risky; may create fairness and reputational issues.",
          5,

          "Deny all customer claims until the final investigation report is complete, pausing all remediation or credits until the process ends. Document the rationale, monitor for trust and reputation risks, and review for missed opportunities after restoration.",
          "Trust and reputation risk; may harm customer relationships.",
          -5,

          "Issue universal refunds or credits to all potentially affected customers immediately, regardless of actual impact. Track all payments, monitor for abuse and misstatements, and review for sustainability after the incident.",
          "Encourages abuse and misstatements; may not be financially sustainable.",
          -5
        )),

        // Loans (3)
        q("Loans", "If loan files were accessed during the insider fraud incident, what should the Loans department do to protect privacy, integrity, and auditability?", buildChoices(
          "Immediately restrict access to all affected loan files, validate the integrity of each file, and require dual review for any exceptions or changes. Communicate new procedures to all Loans staff, track every access and modification, and review for privacy and audit trail protection throughout the incident. Document all actions for regulatory and audit purposes.",
          "Protects privacy, integrity, and audit trail; supports regulatory compliance.",
          10,

          "Continue normal loan processing and file access until specific issues or complaints arise, maintaining standard operations. Track all activity, monitor for new risks, and prepare to escalate only if problems are detected.",
          "Reactive and risky; may allow further harm or loss of evidence.",
          5,

          "Allow staff to use personal email accounts for backup copies of loan documents, instructing them to transfer files as needed for convenience. Track all communications, inform compliance of the approach, and review for privacy or policy breaches after restoration.",
          "Privacy/policy breach; increases risk of data leakage and non-compliance.",
          -5,

          "Share system credentials among all involved staff to speed up verification and review, providing broad access to necessary systems. Record who receives credentials, monitor for segregation failures, and reset all access once normal operations resume.",
          "Segregation failure; undermines security and auditability.",
          -5
        )),
        q("Loans", "What is the most secure and effective way to verify changes to borrower payout instructions during an insider fraud investigation?", buildChoices(
          "Require all changes to borrower payout instructions to be verified using out-of-band methods with known contacts and documented evidence. Communicate the verification procedures to all staff, track every verification, and review for fraud prevention effectiveness after the incident. Ensure all steps are documented for audit and regulatory review.",
          "Prevents misdirection fraud and supports auditability.",
          10,

          "Call back to the phone number provided in a recent email or document to confirm instructions, relying on the most recent contact information. Track all calls, monitor for weak controls, and review for risks of attacker manipulation after restoration.",
          "Weak control; can be attacker-controlled and may not prevent fraud.",
          5,

          "Accept emailed instructions from familiar or previously used addresses, processing changes based on sender recognition alone. Track all communications, monitor for spoofing risks, and review for effectiveness after the incident.",
          "Spoofing risk; may allow fraudulent changes.",
          -5,

          "Skip all verification checks to expedite processing, making changes to payout instructions without additional review. Track all changes, monitor for loss risks, and review for missed opportunities after restoration.",
          "Loss risk; exposes the organization to fraud and regulatory penalties.",
          -5
        )),
        q("Loans", "How should the Loans department communicate with borrowers whose accounts may have been impacted by the insider fraud incident?", buildChoices(
          "Use standardized scripts that provide factual updates, outline the steps being taken, and offer a clear escalation path for impacted borrowers. Communicate consistently and defensibly, track all borrower communications, monitor for feedback, and review for effectiveness after the incident. Ensure all messaging is approved by Legal and Communications.",
          "Consistent, defensible, and supports customer trust.",
          10,

          "Allow each lender to craft custom narratives for their borrowers, providing personalized messaging for each case. Track all communications, monitor for inconsistencies, and review for risks after restoration.",
          "Inconsistent and risky; may create confusion and legal exposure.",
          5,

          "Promise accelerated loan approvals or special compensation as a remedy, offering expedited service to affected borrowers. Track all promises, monitor for credibility risks, and review for sustainability after the incident.",
          "Credibility risk; may create unrealistic expectations and reputational harm.",
          -5,

          "Avoid all communication with impacted borrowers to reduce noise, pausing outreach until the incident is resolved. Track all cases, monitor for confusion and customer churn, and review for missed opportunities after restoration.",
          "Confusion and churn; damages trust and may violate regulatory requirements.",
          -5
        )),

        // Accounting (3)
        q("Accounting", "If suspicious adjustments are discovered in the General Ledger (GL) during an insider fraud incident, what is the most transparent and defensible way to handle them?", buildChoices(
          "Promptly identify all impacted accounts, reverse or segregate suspicious entries, and require documented approvals for every adjustment. Communicate new procedures to all Accounting staff, track every change in a central log, and review for transparency and auditability throughout the incident. Ensure all actions are documented for regulatory and audit review.",
          "Transparent, auditable, and supports regulatory compliance.",
          10,

          "Net all suspicious changes together to simplify the presentation, combining multiple entries for easier review. Track all adjustments, monitor for misstatement risks, and review for accuracy after restoration.",
          "Misstatement risk; may obscure the true impact and create audit issues.",
          5,

          "Delay all entries and adjustments until the investigation is complete, postponing reporting until a full review is finished. Document the rationale, monitor for late or inaccurate records, and review for missed opportunities after the incident.",
          "Late/inaccurate reporting; may violate regulatory requirements.",
          -5,

          "Allow manual overrides and adjustments with no logging or documentation, permitting changes without record-keeping. Track all changes, inform management of risks, and review for audit trail failures after restoration.",
          "Audit trail failure; creates significant regulatory and audit risk.",
          -5
        )),
        q("Accounting", "After insider fraud is suspected, which reconciliations should Accounting prioritize, and how should this be managed?", buildChoices(
          "Prioritize reconciliation of cash, suspense, and inter-system tie-outs where suspicious adjustments occurred, documenting all findings and actions in detail. Communicate these priorities to the team, track progress in a central log, and review for material risks before moving to other reconciliations. Ensure all steps are audit-ready and defensible.",
          "Targets highest material risk and supports auditability.",
          10,

          "Reconcile cash only and defer other reconciliations to the next month, focusing on liquid assets first. Document the approach, monitor for issues in other accounts, and plan to address remaining reconciliations as resources allow. Track all reconciliations, monitor for coverage, and review for effectiveness after restoration.",
          "Partial coverage; may miss material risks in other accounts.",
          5,

          "Skip all reconciliations to avoid drawing attention to the incident, postponing review to minimize scrutiny. Track all decisions, monitor for findings, and review for missed opportunities after restoration.",
          "Findings likely; increases risk of undetected issues.",
          -5,

          "Adjust entries to match expected outcomes or management preferences, modifying records to align with anticipated results. Track all changes, monitor for manipulation risks, and review for accuracy after the incident.",
          "Manipulation risk; undermines integrity and auditability.",
          -5
        )),
        q("Accounting", "What is the best way to preserve evidence for examiners and recovery during an insider fraud investigation?", buildChoices(
          "Maintain a central evidence index linking files, approvals, timestamps, and counterpart confirmations to support examiners and recovery. Track all evidence, communicate procedures to staff, and review for defensibility and efficiency throughout the incident.",
          "Defensible and efficient.",
          10,

          "Archive email threads only, organizing communications later for review. Track completeness, inform compliance of the approach, and review for gaps after restoration.",
          "Messy and incomplete; may result in missing or disorganized evidence.",
          5,

          "Rely on verbal approvals, allowing decisions to be made without written records. Track all approvals, monitor for weak evidence, and plan to strengthen processes after restoration.",
          "Weak evidence; may not withstand audit or legal scrutiny.",
          -5,

          "Delete drafts once the panic passes, removing interim documentation after manual work. Track all deletions, inform relevant teams, and review for regulatory risk after restoration.",
          "Regulatory risk; may result in loss of critical evidence.",
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
  SCENARIO_BACKUP_COMPROMISE,
  SCENARIO_REGULATORY_INQUIRY,
  SCENARIO_DATA_UNVERIFIABLE,
  SCENARIO_OPS_ERROR_FRAUD,
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
