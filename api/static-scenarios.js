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
    "Three days into ransomware recovery, your forensics team discovers that backup tapes from the past 90 days contain dormant malware. Your 'clean' restore point is now 4 months oldbefore a major system upgrade. Previous recovery timeline estimates given to regulators and customers are invalid.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "You previously told the board restoration would complete by Friday. It's now Wednesday and the new timeline is 2-3 weeks. The board chair asks for a call. What approach is most appropriate?",
      buildChoices(
        "Schedule the call immediately, explain the backup compromise findings directly, present revised timeline ranges with assumptions, and outline decision points the board should prepare for.",
        "Direct communication maintains trust; presenting assumptions enables board to track progress against expectations.",
        10,
        "Request a delay until Thursday to finalize the revised timeline before briefing the board on the change.",
        "Refinement has value but delay may appear as though you're managing information rather than sharing it promptly.",
        5,
        "Have the CIO or CISO brief the board on the technical findings while you focus on operational continuity.",
        "Technical briefing is needed but CEO absence from significant governance update signals avoidance.",
        -5,
        "Provide the board a written update with the new timeline, making yourself available for questions only if needed.",
        "Written update feels arms-length for a major setback; board will expect direct engagement on material changes.",
        -5
      )),
    q("CEO/SVPs", "Your initial press statement said customer data was protected. Forensics now can't confirm that statement for the compromised backup period. What approach is most appropriate?",
      buildChoices(
        "Issue a clarifying statement explaining that additional findings require expanded investigation, without confirming or denying data exposure until facts are established.",
        "Honest update addresses the uncertainty without premature conclusions; positions bank for either outcome.",
        10,
        "Wait for forensic confirmation before any additional public statement to avoid multiple corrections.",
        "Reduces correction risk but leaves prior confident statement standing while facts are uncertain.",
        5,
        "Proactively notify all customers whose data existed during the compromised period as a precaution.",
        "Precautionary notification may be appropriate eventually but premature action before facts are established creates unnecessary alarm.",
        -5,
        "Stand by the original statement since there's no evidence yet that data was actually accessed.",
        "Absence of evidence isn't evidence of absence; maintaining confident statements despite new uncertainty creates credibility risk.",
        -5
      )),
    q("CEO/SVPs", "The examiner-in-charge calls asking whether the backup compromise changes your previously submitted incident report. What approach is most appropriate?",
      buildChoices(
        "Confirm you'll submit an amended report with updated scope and timeline, provide key facts verbally now, and commit to written submission within 24 hours.",
        "Immediate acknowledgment with rapid written follow-up demonstrates control and regulatory responsiveness.",
        10,
        "Explain you're still assessing the implications and will submit an amended report once the full impact is understood.",
        "Assessment may be needed but regulator expects prompt notification of material changes; delay may raise concerns.",
        5,
        "Indicate the backup issue is an internal operational matter separate from the original incident report scope.",
        "Characterization as separate may be technically arguable but appears to minimize a material development.",
        -5,
        "Defer to legal counsel to determine what regulatory disclosure is required before committing to any update.",
        "Legal input is appropriate but deferring the conversation suggests uncertainty about obligations that should be clear.",
        -5
      )),

    // IT/Security
    q("IT/Security", "The 4-month-old clean backup predates a major core system upgrade. Restoring it means losing 4 months of configuration changes, patches, and integrations. What approach is most appropriate?",
      buildChoices(
        "Document all post-upgrade changes, assess which can be safely reapplied versus which require fresh implementation, and build a phased restoration plan that restores core function first.",
        "Systematic documentation enables controlled restoration; phased approach gets services running while refinements continue.",
        10,
        "Attempt to extract and validate clean data from compromised backups to reduce the configuration gap.",
        "Extraction may be possible but introduces reinfection risk; clean restoration is more defensible.",
        5,
        "Restore the old backup and work overtime to manually reconfigure all changes from the past 4 months.",
        "Overtime intensity may help speed but manual reconstruction from memory is error-prone and burns out staff.",
        -5,
        "Build forward from current compromised state with enhanced monitoring rather than rolling back 4 months of progress.",
        "Avoiding rollback preserves recent work but accepting compromised foundation creates ongoing risk.",
        -5
      )),
    q("IT/Security", "Forensics identifies the malware strain but external threat intelligence suggests the attackers may have data exfiltration capabilities you haven't detected. What approach is most appropriate?",
      buildChoices(
        "Expand forensic scope to specifically hunt for exfiltration indicators across network logs, endpoint telemetry, and cloud access patterns for the compromised period.",
        "Targeted hunt addresses the specific threat; expanded scope may find evidence or increase confidence in negative findings.",
        10,
        "Note the intelligence in the investigation file and continue with current forensic scope unless evidence of exfiltration emerges.",
        "Efficiency-focused but may miss exfiltration that doesn't surface through normal investigation methods.",
        5,
        "Assume exfiltration occurred and begin breach notification planning while forensics continues.",
        "Precautionary approach may be prudent eventually but premature notification without evidence creates unnecessary harm.",
        -5,
        "Engage the threat actor through back-channels to determine whether they have exfiltrated data.",
        "Actor engagement is extremely risky; validates their leverage and may trigger data release or increased demands.",
        -5
      )),
    q("IT/Security", "The security team is exhaustedincident response has run 72+ hours. A junior analyst asks whether they should continue working or rest. What approach is most appropriate?",
      buildChoices(
        "Implement mandatory rotation with relief staff, ensure each person gets minimum rest periods, and adjust investigation timeline expectations to sustainable pace.",
        "Sustainable operations prevent errors and maintain longer-term capacity; adjusted timelines are more accurate.",
        10,
        "Let individuals decide their own capacity while making clear that rest is available and encouraged.",
        "Respects autonomy but exhausted staff often don't recognize their own impairment; leadership should mandate rest.",
        5,
        "Ask the team to push through the next critical milestone before implementing rotations.",
        "Milestone focus is understandable but arbitrary checkpoints don't address cumulative exhaustion.",
        -5,
        "Bring in outside contractors immediately to take over investigation so internal staff can fully disengage.",
        "External support is valuable but complete handoff loses institutional knowledge; integration is better than replacement.",
        -5
      )),

    // HR
    q("HR", "An IT staff member posts on social media that 'our backups are infected and management doesn't know what they're doing.' The post is public and gaining attention. What approach is most appropriate?",
      buildChoices(
        "Have the employee's manager request removal of the post privately, remind all staff of social media policies, and address any legitimate concerns the post reflects.",
        "Private conversation addresses the immediate issue; policy reminder prevents escalation; addressing concerns shows responsiveness.",
        10,
        "Issue a formal written warning to the employee and require post removal as a condition of continued employment.",
        "Formal discipline may be warranted but escalating immediately during a crisis may leak and become part of the story.",
        5,
        "Ignore the post since responding draws more attention to it and the employee has a right to their opinion.",
        "Ignoring allows misinformation to spread; employee opinions about confidential matters have limits.",
        -5,
        "Have corporate communications issue a public response refuting the employee's characterization.",
        "Public response amplifies the story and engages in employee dispute publicly; private resolution is preferable.",
        -5
      )),
    q("HR", "Staff morale is deterioratingrecovery setbacks mean weekends are cancelled again. Several key employees mention job hunting. What approach is most appropriate?",
      buildChoices(
        "Acknowledge the burden explicitly, commit to specific recovery milestones that will restore normal schedules, and provide retention incentives for critical personnel.",
        "Explicit acknowledgment validates frustration; specific commitments provide hope; incentives address flight risk.",
        10,
        "Remind staff that incident response is a team effort and express confidence that the situation will improve soon.",
        "Encouragement has value but vague optimism without specifics may feel dismissive of real concerns.",
        5,
        "Focus all management attention on the technical recoveryonce systems are restored, morale will naturally improve.",
        "Technical focus is understandable but ignoring morale during crisis may result in departures that slow recovery.",
        -5,
        "Identify employees who are complaining and document performance concerns in case disciplinary action is needed.",
        "Documentation shifts to adversarial posture; complaining during crisis is normal and punishing it worsens morale.",
        -5
      )),
    q("HR", "The incident commander asks HR to identify employees who can be redeployed from non-critical functions to support recovery operations. What approach is most appropriate?",
      buildChoices(
        "Identify employees with relevant skills and willingness to contribute, provide basic training for recovery roles, and ensure their normal responsibilities are covered.",
        "Voluntary redeployment with training expands capacity; coverage ensures redeployed staff aren't double-loaded.",
        10,
        "Mandate redeployment for employees in non-critical roles, prioritizing recovery needs over normal job duties.",
        "Mandates may be necessary but voluntary participation generates better engagement; mandates should be last resort.",
        5,
        "Decline redeployment since moving employees outside their job descriptions creates labor law and safety concerns.",
        "Legal caution is appropriate but emergency redeployment is generally permissible with appropriate safeguards.",
        -5,
        "Offer overtime pay for any employee willing to help regardless of their skills or relevant experience.",
        "Willingness helps but unskilled helpers may slow recovery rather than accelerate it; skills matching matters.",
        -5
      )),

    // Finance
    q("Finance", "Insurance carrier asks for a revised loss estimate given the backup compromise. Your initial estimate was $2M; actual losses may reach $8M. What approach is most appropriate?",
      buildChoices(
        "Provide the revised estimate with clear documentation of changed assumptions, maintaining communication trail that demonstrates good faith effort to keep carrier informed.",
        "Transparent revision with documented rationale maintains claim integrity; good faith communication supports carrier relationship.",
        10,
        "Provide a range of $4M-$10M to ensure the final number falls within your estimate regardless of how recovery proceeds.",
        "Range approach hedges but very wide ranges may appear uncertain; better to explain specific drivers of uncertainty.",
        5,
        "Hold the original $2M estimate until recovery completes and actual costs are known to avoid multiple revisions.",
        "Holding outdated estimates may breach policy notification requirements and create claim complications.",
        -5,
        "Negotiate with the carrier about how the revised estimate affects coverage before submitting the update.",
        "Negotiation before disclosure appears to prioritize coverage strategy over honest reporting.",
        -5
      )),
    q("Finance", "The CFO asks whether the backup compromise requires adjustment to quarterly financial statements being finalized this week. What approach is most appropriate?",
      buildChoices(
        "Consult with external auditors on disclosure requirements, prepare disclosure language addressing the incident and estimate uncertainty, and adjust statements if materiality thresholds are met.",
        "Auditor guidance ensures compliance; prepared language enables timely disclosure; materiality focus is appropriate.",
        10,
        "Disclose the original incident in the financials but defer backup compromise details to a subsequent filing once facts are clearer.",
        "Deferral may be acceptable but omitting known material information from current filing creates risk.",
        5,
        "Finalize statements as planned since the backup compromise is an operational matter not requiring financial disclosure.",
        "Operational characterization may understate materiality; auditors and regulators may disagree.",
        -5,
        "Delay the quarterly filing until the investigation concludes to avoid disclosure of incomplete information.",
        "Filing delays are significant and may not be justified; disclosure with appropriate caveats is usually preferable.",
        -5
      )),
    q("Finance", "Vendor invoices for emergency forensics and recovery services are arriving faster than normal approval processes can handle. Staff ask whether to expedite payments without full documentation. What approach is most appropriate?",
      buildChoices(
        "Implement emergency payment procedures with appropriate senior approvals, document the rationale, and plan for post-incident reconciliation and documentation cleanup.",
        "Emergency procedures address timing needs; documentation and reconciliation maintain control and audit trail.",
        10,
        "Pay invoices as they arrive to maintain vendor relationships and deal with documentation when the crisis passes.",
        "Vendor relationships matter but paying without documentation creates reconciliation challenges and control gaps.",
        5,
        "Require full documentation before any payment regardless of emergency circumstances to maintain control standards.",
        "Control standards are important but rigid adherence during crisis may delay critical services or damage vendor relationships.",
        -5,
        "Have vendors submit directly to the insurance carrier for payment to avoid processing through bank systems.",
        "Direct vendor-carrier payment is unusual and may complicate claims; bank should manage its own vendor relationships.",
        -5
      )),

    // Loans
    q("Loans", "Loan closings scheduled for this week cannot proceed because underwriting systems won't be restored in time. Borrowers have rate locks expiring. What approach is most appropriate?",
      buildChoices(
        "Contact all affected borrowers to explain the situation, extend rate locks at no cost, and offer alternatives for those with time-critical closings.",
        "Proactive communication manages expectations; free extensions protect customers; alternatives address urgent cases.",
        10,
        "Extend rate locks automatically and notify borrowers that closings will be rescheduled when systems are restored.",
        "Extension is protective but notification without conversation may not address borrowers with urgent needs.",
        5,
        "Let rate locks expire and offer affected borrowers the better of their locked rate or current market rate when systems restore.",
        "Make-good approach is reasonable but expiration creates unnecessary anxiety; proactive extension is cleaner.",
        -5,
        "Advise borrowers to seek financing elsewhere if their timeline is critical since you can't guarantee restoration timing.",
        "Honest about uncertainty but sending customers away during crisis damages relationships and may not be necessary.",
        -5
      )),
    q("Loans", "A commercial borrower facing their own operational difficulties asks to draw their full line of credit as a precaution during your outage. What approach is most appropriate?",
      buildChoices(
        "Process the draw request normally per line terms, document the request and timing, and use alternative verification methods if systems are unavailable.",
        "Honoring commitments is required; documentation protects both parties; alternative verification addresses system limitations.",
        10,
        "Ask the borrower to delay the draw until systems are restored so proper processing can occur.",
        "Delay request may be reasonable but borrower has contractual rights; your operational issues shouldn't restrict their access.",
        5,
        "Decline the draw citing operational difficulties and offer to process it once systems are fully restored.",
        "Declining committed facilities breaches the agreement and may trigger borrower claims or regulatory concerns.",
        -5,
        "Suggest the borrower seek alternative financing sources given the uncertainty about your restoration timeline.",
        "Directing borrower elsewhere may breach your commitment and damages the relationship.",
        -5
      )),
    q("Loans", "Mortgage payments received during the outage are in manual holding accounts. Some payments may be misapplied when systems restore. What approach is most appropriate?",
      buildChoices(
        "Implement reconciliation procedures to match payments to accounts before posting, waive any fees from processing delays, and proactively contact borrowers if discrepancies can't be resolved.",
        "Pre-posting reconciliation prevents errors; fee waiver addresses customer harm; proactive contact resolves issues.",
        10,
        "Post payments as received and rely on customers to report any misapplications for correction.",
        "Post-and-correct approach may work but places burden on customers for operational issues; proactive reconciliation is better.",
        5,
        "Hold all payments until systems are fully restored and tested to ensure accurate posting.",
        "Extended holding delays customer account credits; timely posting with reconciliation is preferable.",
        -5,
        "Post payments using best-guess account matching to clear the backlog and address errors as they surface.",
        "Best-guess posting will create errors that are harder to find and fix than proper reconciliation.",
        -5
      )),

    // Accounting
    q("Accounting", "Month-end close deadline is in 3 days. Critical systems for close won't be restored in time. What approach is most appropriate?",
      buildChoices(
        "Assess which close activities can proceed with available data, document gaps and estimates used, communicate the situation to auditors, and request extension if needed.",
        "Partial close with documentation maintains momentum; auditor communication and extension request are appropriate.",
        10,
        "Request a blanket extension to avoid any close activities until systems are restored and normal procedures can be followed.",
        "Extension may be needed but blanket approach may be more than necessary; targeted assessment is better.",
        5,
        "Complete the close using available data and estimates, planning to restate if necessary once systems are restored.",
        "Completion with restatement risk is aggressive; documented estimates with auditor coordination is cleaner.",
        -5,
        "Skip this month's close entirely and do a combined close for two months once systems are restored.",
        "Skipping close creates significant reporting gaps; even a delayed or estimated close is better than none.",
        -5
      )),
    q("Accounting", "Auditors ask whether the backup compromise affects the integrity of financial records for the compromised period. What approach is most appropriate?",
      buildChoices(
        "Explain what's known about the compromise scope, describe validation steps being taken, and commit to reporting findings as the investigation progresses.",
        "Transparency about known facts and ongoing validation maintains auditor confidence; commitment to updates shows good faith.",
        10,
        "Assure auditors that financial systems and records were not affected, based on current forensic findings.",
        "Assurance may be premature if investigation is ongoing; better to describe what's known with appropriate caveats.",
        5,
        "Decline to discuss investigation details with auditors until findings are finalized to avoid speculation.",
        "Auditors have legitimate need for information affecting financial statement integrity; declining raises concerns.",
        -5,
        "Suggest auditors wait until next year's audit when the full picture will be available for review.",
        "Deferral to next year ignores current period obligations and may trigger auditor withdrawal or qualification.",
        -5
      )),
    q("Accounting", "Controllers identify manual journal entries made during the outage that lack normal documentation. Total impact is $3.2M across multiple accounts. What approach is most appropriate?",
      buildChoices(
        "Reconstruct documentation where possible, identify entries that cannot be adequately supported, and determine appropriate treatment with auditor input.",
        "Documentation reconstruction with auditor coordination addresses control gaps while maintaining financial integrity.",
        10,
        "Reverse all undocumented entries and re-enter them with proper documentation once systems support normal procedures.",
        "Reversal ensures documentation but may create timing issues or customer impact; reconstruction is less disruptive.",
        5,
        "Accept the entries based on staff attestation that they were appropriate, documenting the emergency circumstances.",
        "Attestation has some value but $3.2M without documentation creates audit findings; better controls are needed.",
        -5,
        "Distribute the undocumented amounts across multiple accounts to reduce the visible concentration of unsupported entries.",
        "Distribution is manipulation that conceals control issues rather than addressing them.",
        -5
      )),

    // Deposits
    q("Deposits", "Customer complaints are escalating because the incident timeline keeps extending. Some customers post on social media that the bank 'lied' about recovery. What approach is most appropriate?",
      buildChoices(
        "Acknowledge that previous timelines proved inaccurate, explain what changed, apologize for the uncertainty, and commit to more frequent updates with clearer caveats.",
        "Acknowledgment addresses the credibility issue; explanation provides context; apology shows accountability; better updates prevent recurrence.",
        10,
        "Respond to individual complaints without broader public communication to avoid amplifying the 'lied' narrative.",
        "Individual responses are appropriate but leaving public narrative unaddressed allows it to spread.",
        5,
        "Explain that timeline changes were based on new technical discoveries, not dishonesty, and that the term 'lied' is unfair.",
        "Defensive explanation may be factually accurate but doesn't acknowledge the customer impact or rebuild trust.",
        -5,
        "Ignore social media complaints since engaging with upset customers online often makes the situation worse.",
        "Ignoring allows narrative to spread unchallenged; appropriate engagement can demonstrate responsiveness.",
        -5
      )),
    q("Deposits", "A large commercial depositor asks whether their funds are safe given the ongoing incident. They're considering moving $15M to another institution. What approach is most appropriate?",
      buildChoices(
        "Have a senior executive call them directly to explain the situation, answer their questions honestly, and respect whatever decision they make about their funds.",
        "Senior engagement shows the relationship matters; honest answers maintain trust; respecting their choice preserves long-term relationship.",
        10,
        "Provide written materials about FDIC coverage and the bank's financial strength, treating them like other concerned customers.",
        "Consistent treatment is fair but major depositor asking about fund safety warrants more personalized response.",
        5,
        "Offer rate incentives or fee waivers to encourage them to keep their funds with the bank during the difficult period.",
        "Incentives may help retention but don't address their actual concern about safety; may appear desperate.",
        -5,
        "Explain that moving funds during an incident actually increases their risk compared to staying with a known institution.",
        "Risk argument may backfire; they're asking about their safety and you're arguing they should stay.",
        -5
      )),
    q("Deposits", "Branch staff report that some customers are hostile, blaming tellers personally for the extended outage. Two tellers have been reduced to tears. What approach is most appropriate?",
      buildChoices(
        "Implement de-escalation support, give managers authority to intervene with hostile customers, rotate affected staff to back-office duties temporarily, and document incidents.",
        "Multi-layered support addresses immediate distress; rotation provides relief; documentation supports any needed follow-up.",
        10,
        "Remind tellers that customers are frustrated with the situation, not with them personally, and that patience is appreciated.",
        "Reminder has truth but doesn't provide practical help; staff need concrete support, not just perspective.",
        5,
        "Close branches experiencing the worst customer behavior to protect staff safety.",
        "Closure protects staff but penalizes other customers and may spread the problem to remaining locations.",
        -5,
        "Instruct tellers to refer hostile customers to a manager and not engage further to protect themselves.",
        "Referral to manager is appropriate but manager capacity may be limited; systemic support is needed.",
        -5
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
        "In the first 30 minutes, technical teams report conflicting information about the scope. What leadership action is most appropriate?",
        buildChoices(
          "Activate incident command with rotating 90-minute briefing cycles, assigning decision authority to a core group while technical assessment continues in parallel.",
          "Establishes governance rhythm without waiting for perfect information, allowing rapid iteration as facts emerge.",
          10,

          "Convene an extended executive session to align on facts before establishing formal incident structure, ensuring leadership consensus precedes operational activation.",
          "Prioritizes alignment but may consume the critical early window when containment decisions have highest leverage.",
          5,

          "Direct IT to complete a full systems inventory and impact assessment before activating broader incident protocols to avoid acting on incomplete data.",
          "Thoroughness appeal is reasonable but cedes the initiative during the period when attacker lateral movement is most active.",
          -5,

          "Immediately engage external counsel and forensics vendors before taking internal action to ensure legal defensibility of all subsequent decisions.",
          "Vendor coordination is necessary but front-loading it delays containment and creates dependency on external calendars.",
          -5
        )
    ),

    q("CEO/SVPs",
      "The board requests a position on ransom payment. Technical teams estimate 5-7 days for independent restoration. How should leadership respond?",
      buildChoices(
        "Present a decision framework that includes legal constraints, OFAC screening requirements, insurance coordination, and restoration progress triggers—without recommending payment yet.",
        "Positions the board to make an informed choice if needed while maintaining focus on independent recovery.",
        10,

        "Recommend the board pre-authorize payment contingent on restoration failure at the 72-hour mark to avoid rushed decision-making later.",
        "Reduces future time pressure but may signal internally that payment is likely, weakening commitment to restoration efforts.",
        5,

        "Advise the board to delegate ransom decisions entirely to management given the operational nature of the issue and need for speed.",
        "Board delegation is efficient but may create governance exposure for a decision with significant legal and reputational implications.",
          -5,

        "Recommend categorically ruling out payment to maintain moral clarity and focus all resources on restoration.",
        "Clear stance, but eliminates optionality if restoration encounters unexpected obstacles or customer harm accelerates.",
        -5
      )
    ),

    q("CEO/SVPs",
      "Media inquiries are increasing and the communications team proposes several approaches. What strategy is most appropriate?",
      buildChoices(
        "Acknowledge the service disruption with specific affected channels, provide estimated next update timing, and route customers to alternative access points while investigation continues.",
        "Addresses the customer experience directly without speculating about cause or making restoration promises that may slip.",
        10,

        "Release a brief statement confirming awareness of technical issues and commit to providing substantive updates within 24 hours once facts are clearer.",
        "Buys time for assessment but creates an information vacuum that customers and media may fill with speculation.",
        5,

        "Proactively disclose the ransomware attack to demonstrate transparency and position the bank as a victim of criminal activity rather than appearing to hide the incident.",
        "Transparency is valued, but premature disclosure of attack type may complicate law enforcement coordination and invite follow-on attacks.",
        -5,

        "Decline all media inquiries and focus communications exclusively on direct customer channels to maintain control of the narrative.",
        "Reduces media exposure but journalists will write stories regardless, likely with less accurate information and a more critical tone.",
        -5
      )
    ),

    /* ================= IT / Security ================= */

    q("IT/Security",
      "Initial analysis shows ransomware spreading via compromised service accounts. Forensics vendor ETA is 4 hours. What containment approach is most appropriate?",
      buildChoices(
        "Immediately segment affected network zones and disable compromised service accounts, accepting potential business disruption while preserving memory state on key systems for forensic analysis.",
        "Prioritizes stopping spread over operational continuity; memory preservation maintains investigation options despite the vendor delay.",
        10,

        "Implement enhanced monitoring on lateral movement indicators while awaiting forensics expertise, quarantining only systems showing active encryption behavior.",
        "Minimizes business disruption but allows potential attacker persistence in systems not yet exhibiting symptoms.",
        5,

        "Power down all potentially affected servers immediately to halt encryption and preserve disk state for forensic imaging.",
        "Stops encryption spread but loses volatile memory artifacts and may trigger ransomware deadman switches on some variants.",
        -5,

        "Focus containment on perimeter controls and block external C2 communications while keeping internal systems running to minimize customer impact.",
        "Maintains operations but assumes attacker requires external connectivity; many ransomware variants operate autonomously once deployed.",
        -5
      )
    ),

    q("IT/Security",
      "Backup validation reveals that 80% of recent backups are clean, but the remaining 20% show potential indicators of compromise from before the ransomware triggered. What restoration approach is most appropriate?",
      buildChoices(
        "Restore validated clean backups to isolated environments first, establishing baseline services while conducting deeper analysis on the questionable 20% in parallel.",
        "Balances restoration speed with risk management; parallel analysis prevents the questionable backups from blocking progress.",
        10,

        "Extend validation procedures to all backups before any restoration begins to ensure complete confidence in the restore point integrity.",
        "Maximizes confidence but extends outage duration significantly while customer impact continues.",
        5,

        "Restore the most recent backups for critical systems regardless of indicator status, relying on endpoint detection to catch any reinfection post-restoration.",
        "Prioritizes recency over known risk; endpoint detection may not catch the same compromise that evaded initial detection.",
        -5,

        "Discard all backups from the potentially compromised window and restore from older validated images, accepting increased data loss for certainty.",
        "Achieves restoration confidence but may result in unacceptable transaction data loss depending on the time window involved.",
        -5
      )
    ),

    q("IT/Security",
      "Online banking restoration is technically possible, but security hasn't completed full environment validation. Customer complaints are escalating. What approach is most appropriate?",
      buildChoices(
        "Implement a staged restoration with enhanced monitoring, transaction limits, and clear customer communication about temporary restrictions while validation continues.",
        "Restores critical access with compensating controls that limit blast radius if issues emerge.",
        10,

        "Restore full online banking functionality immediately given technical readiness, then accelerate security validation as a parallel workstream.",
        "Addresses customer impact quickly but assumes restored systems are trustworthy despite incomplete validation.",
        5,

        "Maintain systems offline until security provides unconditional clearance to avoid any possibility of customer exposure to residual compromise.",
        "Eliminates technical risk but prolongs customer impact and may not account for diminishing returns of extended validation.",
        -5,

        "Restore online banking with a published disclaimer noting that customers use services at their own risk during the recovery period.",
        "Shifts liability but signals lack of confidence that may trigger deposit flight and regulatory concern.",
        -5
      )
    ),

    /* ================= HR ================= */

    q("HR",
      "Staff are receiving phishing attempts exploiting the incident. Branch managers are asking if employees can use personal phones to access work email. What guidance is most appropriate?",
      buildChoices(
        "Prohibit personal device email access, issue targeted phishing warnings with specific examples, and establish a dedicated reporting channel for suspicious messages.",
        "Tightens controls during elevated threat period while giving staff clear action paths for suspicious activity.",
        10,

        "Allow personal device access with enhanced vigilance reminders, trusting trained employees to identify threats while maintaining operational continuity.",
        "Maintains productivity but expands attack surface during a period of known attacker activity.",
        5,

        "Temporarily disable email access for all non-essential personnel until the phishing campaign subsides.",
        "Reduces exposure but significantly impacts branch operations and may not be sustainable beyond a few hours.",
        -5,

        "Issue a general reminder about phishing awareness without changing access policies to avoid disrupting operations further.",
        "Minimal disruption but doesn't address the specific elevated threat environment or device security concerns.",
        -5
      )
    ),

    q("HR",
      "The incident is now in day three. Key IT staff have been working 16+ hour shifts. Two critical engineers report feeling unwell. What approach is most appropriate?",
      buildChoices(
        "Implement mandatory rest rotations for all response staff, cross-train backup personnel on critical tasks, and accept some slowdown in restoration pace.",
        "Protects against cascading failures from exhaustion while building depth; short-term pace reduction prevents longer-term personnel losses.",
        10,

        "Allow affected engineers to take breaks while keeping other critical staff engaged, monitoring closely for additional fatigue issues as they arise.",
        "Addresses immediate health concerns but doesn't proactively prevent similar issues across the response team.",
        5,

        "Bring in contractor support immediately to maintain response intensity while giving internal staff rest, even without full knowledge transfer.",
        "Addresses fatigue quickly but contractors without context may make errors or require significant onboarding time.",
        -5,

        "Encourage affected staff to power through the critical phase with the understanding that extended rest will follow once systems are stable.",
        "Prioritizes speed but fatigued personnel make more errors, and health issues could remove them entirely at a worse moment.",
        -5
      )
    ),

    q("HR",
      "Core systems remain down and staff need to process customer requests manually. IT proposes enabling VPN access from personal devices as a temporary measure. What HR position is most appropriate?",
      buildChoices(
        "Support limited VPN access only for pre-approved roles with enhanced logging, manager verification, and explicit prohibition on storing customer data locally.",
        "Enables critical work with compensating controls that address the highest-risk scenarios.",
        10,

        "Approve broad VPN access from personal devices given the exceptional circumstances, trusting staff to follow existing acceptable use policies.",
        "Maximizes operational flexibility but assumes existing policies adequately address unmanaged device risks.",
        5,

        "Oppose personal device access entirely and recommend staff work from branch locations only, even if this reduces processing capacity.",
        "Maintains security standards but may create unacceptable service delays and doesn't account for staff transportation or facility capacity constraints.",
        -5,

        "Defer to IT's judgment on technical security matters since this falls outside HR's core expertise.",
        "Abdicates HR's responsibility for policy implications affecting workforce and potentially customer data handling.",
        -5
      )
    ),

    /* ================= Finance ================= */

    q("Finance",
      "Leadership asks for a preliminary financial impact estimate. Data is incomplete and changing. What approach is most appropriate?",
      buildChoices(
        "Provide a range-based estimate with explicit assumptions, identified gaps, and a clear statement that figures will change as information improves.",
        "Gives leadership actionable information while protecting against false precision in a dynamic situation.",
        10,

        "Provide a conservative point estimate based on available data, noting it represents a minimum and will likely increase.",
        "Offers a concrete number but single-point estimates can anchor expectations inappropriately when uncertainty is high.",
        5,

        "Decline to provide estimates until data stabilizes to avoid creating misleading figures that may be quoted externally.",
        "Protects against misquotation but leaves leadership without financial context for decisions that can't wait.",
        -5,

        "Compile costs from similar industry incidents and use those as a proxy until internal data is available.",
        "Provides a benchmark but external incidents may have vastly different scope and may not reflect your specific situation.",
        -5
      )
    ),

    q("Finance",
      "ACH processing is delayed and the bank may miss settlement windows. Treasury identifies three options. What approach is most appropriate?",
      buildChoices(
        "Pre-position excess liquidity at the Fed and correspondent banks, coordinate with ACH operator on extended windows, and prepare customer communications about potential delays.",
        "Addresses multiple failure modes simultaneously while maintaining stakeholder awareness.",
        10,

        "Focus on restoring ACH processing capability as the priority, since having systems operational eliminates the need for alternative settlement arrangements.",
        "Addresses root cause but doesn't account for the time needed for restoration; settlements may fail before systems return.",
        5,

        "Request emergency Fed discount window access to ensure liquidity availability regardless of settlement timing.",
        "Provides liquidity backstop but discount window usage may trigger supervisory attention and market signal concerns.",
        -5,

        "Delay outgoing ACH files until processing capacity is confirmed to avoid initiating transactions that can't be completed.",
        "Prevents partial processing failures but may cause customer payments to miss deadlines, creating downstream issues.",
        -5
      )
    ),

    q("Finance",
      "The forensics vendor requires a $500K retainer before beginning work. Normal procurement approval would take 48 hours. What approach is most appropriate?",
      buildChoices(
        "Invoke emergency procurement authority with CFO and CEO sign-off, document the justification, and initiate vendor engagement immediately while formalizing the contract.",
        "Balances speed with governance by using established emergency protocols and maintaining documentation for audit.",
        10,

        "Accelerate the standard approval process by convening an emergency procurement committee meeting within 4 hours.",
        "Maintains normal governance but may delay vendor engagement during the most critical investigation window.",
        5,

        "Have the CEO verbally authorize the engagement and sort out procurement documentation after the incident when there's more time.",
        "Prioritizes speed but verbal-only authorization creates audit and contract enforceability concerns.",
        -5,

        "Seek competitive bids from multiple forensics firms to ensure value despite the emergency, since a 24-hour delay is acceptable.",
        "Follows prudent sourcing practice but response time is critical for evidence preservation and attacker tracking.",
        -5
      )
    ),

    /* ================= Loans ================= */

    q("Loans",
      "A commercial loan closing scheduled for today requires wire transfer of $2.3M. Core systems are unavailable but the borrower faces contractual deadlines. What approach is most appropriate?",
      buildChoices(
        "Execute the closing using documented manual procedures with dual authorization, secure the signed documents physically, and reconcile to the system immediately upon restoration.",
        "Maintains customer commitment while preserving control structure; physical documentation provides audit trail until system entry.",
        10,

        "Contact the borrower to request a 48-hour extension, explaining the situation and offering to cover any extension fees or penalties they incur.",
        "Protects operational integrity but may not be acceptable to the borrower or their counterparty depending on deal terms.",
        5,

        "Proceed with the wire transfer using available channels but defer documentation completion until systems return to avoid creating incomplete records.",
        "Completes the financial transaction but creates a gap between funds movement and documentation that complicates audit and reconciliation.",
        -5,

        "Postpone all closings until systems are fully operational to ensure complete documentation and avoid any exceptions.",
        "Eliminates operational risk but may cause customer losses and breach commitments where timing is contractually fixed.",
        -5
      )
    ),

    q("Loans",
      "Credit analysts discover they can't access the automated underwriting system or credit bureau feeds. Loan applications are queuing. What approach is most appropriate?",
      buildChoices(
        "Implement tiered manual underwriting: expedite renewals and low-risk applications using cached credit data, hold higher-risk decisions until feeds restore.",
        "Maintains throughput for lower-risk decisions while appropriately deferring items requiring fresh credit data.",
        10,

        "Use the most recent available credit reports from completed applications to proxy creditworthiness for similar applicants.",
        "Enables continued processing but using another applicant's credit data introduces fair lending and accuracy concerns.",
        5,

        "Request applicants provide their own credit reports from consumer services as a temporary alternative source.",
        "Shifts burden to applicants and introduces document authenticity concerns; consumer reports may differ from bureau feeds.",
        -5,

        "Continue underwriting using only internal deposit and payment history data, since existing customers have demonstrated creditworthiness.",
        "Maintains processing but ignores external obligations that may have changed; internal data alone may not meet regulatory requirements.",
        -5
      )
    ),

    q("Loans",
      "Several borrowers have called about automatic payment failures during the outage. Some are worried about credit reporting impacts. What approach is most appropriate?",
      buildChoices(
        "Document all affected accounts, suppress negative credit reporting for the outage period, proactively communicate resolution to impacted borrowers, and waive any late fees assessed.",
        "Addresses customer harm comprehensively: financial relief, credit protection, and proactive communication reduce complaint and regulatory risk.",
        10,

        "Instruct customer service to handle complaints reactively, waiving fees and correcting credit for borrowers who call to report issues.",
        "Addresses complaints received but misses borrowers who don't call; reactive approach may result in inconsistent treatment.",
        5,

        "Send a mass communication acknowledging the issue and advising borrowers to manually submit payments to avoid late status.",
        "Informs customers but shifts the burden to them during the bank's system failure; some may miss the message or lack alternative payment means.",
        -5,

        "Wait until systems restore to assess the full scope before taking action, since premature remediation might over-correct.",
        "Delays customer relief while harm continues; borrowers may experience credit damage during the assessment period.",
        -5
      )
    ),

    /* ================= Accounting ================= */

    q("Accounting",
      "Month-end close is in 3 days. Transaction data from the past 48 hours is incomplete due to the incident. What approach is most appropriate?",
      buildChoices(
        "Close with provisional entries for affected accounts, document estimation methodology, disclose the uncertainty to auditors, and commit to true-up reconciliation once data is complete.",
        "Maintains reporting timeline while preserving integrity through transparency about limitations.",
        10,

        "Request a 5-day close extension from the CFO to allow time for data reconstruction before booking entries.",
        "Ensures data completeness but may trigger regulatory notification requirements and stakeholder concern about operational resilience.",
        5,

        "Use the last known good balances and assume minimal change during the disruption period to close on schedule.",
        "Maintains timeline but introduces potential misstatement if significant activity occurred during the gap period.",
        -5,

        "Close all unaffected entities on time and leave affected entities open until data is reconstructed, creating a staggered close.",
        "Addresses data gaps but creates consolidation timing issues and may complicate intercompany eliminations.",
        -5
      )
    ),

    q("Accounting",
      "The incident response team is incurring significant expenses: vendor fees, overtime, emergency equipment. Invoices are arriving without normal procurement documentation. What approach is most appropriate?",
      buildChoices(
        "Create a dedicated incident cost center, accept invoices with manager attestation during the emergency, and schedule formal documentation completion within 30 days.",
        "Enables rapid expense processing while maintaining traceability and committing to documentation catch-up.",
        10,

        "Process all incident expenses through the standard AP workflow, escalating approvals as needed for missing documentation.",
        "Maintains normal controls but may delay vendor payments critical to ongoing response efforts.",
        5,

        "Have department heads verbally authorize expenses and sort out documentation after the incident concludes.",
        "Minimizes documentation burden during crisis but creates audit trail gaps and potential approval authority issues.",
        -5,

        "Establish a petty cash fund for incident expenses to streamline purchasing and reduce procurement bottlenecks.",
        "Simplifies small purchases but petty cash is inappropriate for the expense scale involved and lacks adequate controls.",
        -5
      )
    ),

    q("Accounting",
      "External auditors request documentation of transactions processed during the incident period. Some records exist only in manual logs that haven't been entered into systems yet. What approach is most appropriate?",
      buildChoices(
        "Provide auditors access to both manual logs and system records, walk them through the reconciliation process, and highlight items still pending system entry with expected completion dates.",
        "Full transparency about the current state demonstrates control awareness and provides auditors the complete picture.",
        10,

        "Request a brief delay to complete system entry of manual transactions so auditors receive a cleaner, more complete data set.",
        "Improves data presentation but may appear to be managing auditor access; delays could conflict with their timeline.",
        5,

        "Provide system records only and note that manual processing documentation will be available after full reconciliation.",
        "Presents an incomplete picture that may cause auditors to question what's missing and expand their testing scope.",
        -5,

        "Summarize manual transactions in a memo rather than providing raw logs to avoid overwhelming auditors with disorganized documentation.",
        "Reduces auditor burden but summaries lack the detail auditors need for transaction testing and may raise concerns about completeness.",
        -5
      )
    ),

    q("Accounting",
      "Staff are processing transactions using paper forms and spreadsheets. Multiple people need access to shared files. What approach to maintaining audit trail is most appropriate?",
      buildChoices(
        "Establish a controlled shared location with versioning, require initialer and reviewer sign-off on each document, and log all access with timestamps.",
        "Maintains segregation and traceability despite manual processes; versioning prevents overwrites from destroying evidence.",
        10,

        "Have each processor maintain their own logs and consolidate them daily into a master record for review.",
        "Captures activity but distributed logging increases reconciliation burden and risk of gaps or inconsistencies.",
        5,

        "Use a shared spreadsheet with concurrent editing enabled so everyone can see real-time updates and changes.",
        "Improves visibility but concurrent editing without version control makes it difficult to trace who changed what and when.",
        -5,

        "Focus on processing speed during the emergency and reconstruct audit documentation from transaction records after systems restore.",
        "Prioritizes throughput but after-the-fact reconstruction may miss context and approvals that weren't captured in the transaction itself.",
        -5
      )
    ),

    /* ================= Deposits ================= */

    q("Deposits",
      "Online banking is down and branches are experiencing 3x normal foot traffic. Wait times exceed 45 minutes. Some customers are becoming agitated. What approach is most appropriate?",
      buildChoices(
        "Deploy additional staff from back office to branches, implement queue management with estimated wait times, and proactively offer alternatives like ATM deposits and phone banking where applicable.",
        "Addresses capacity while managing expectations; alternatives divert volume where possible.",
        10,

        "Open additional teller windows by reducing break coverage and request staff work overtime to increase processing capacity.",
        "Increases throughput but reduces staff resilience for what may be a multi-day event and doesn't manage customer expectations.",
        5,

        "Implement a ticket system and encourage customers to leave and return when their number is called to reduce lobby crowding.",
        "Reduces immediate crowding but customers may not return on time, creating inefficiency and frustration when numbers are skipped.",
        -5,

        "Post signage explaining the situation and apologizing for delays while maintaining normal staffing levels to avoid burnout.",
        "Communicates appropriately but doesn't address the capacity mismatch; customers will continue experiencing excessive waits.",
        -5
      )
    ),

    q("Deposits",
      "Social media shows customers posting about being unable to access funds. Some posts suggest the bank may be failing. What approach is most appropriate?",
      buildChoices(
        "Issue a public statement acknowledging the technical disruption, clearly distinguish it from financial condition, provide alternative access channels, and commit to regular updates.",
        "Addresses the misinformation directly while providing actionable guidance and demonstrating responsiveness.",
        10,

        "Respond individually to each social media post with factual corrections and helpful information about alternative access.",
        "Provides accurate information but one-by-one responses may not reach the broader audience seeing the misinformation.",
        5,

        "Avoid engaging on social media to prevent amplifying the narrative and focus communications on direct customer channels.",
        "Reduces risk of social media escalation but allows misinformation to spread unchallenged to a potentially larger audience.",
        -5,

        "Have the CEO post a video message emphasizing the bank's financial strength and dismissing the concerns as unfounded.",
        "Executive visibility is valuable but dismissive framing may backfire if customers feel their access concerns aren't being taken seriously.",
        -5
      )
    ),

    q("Deposits",
      "A business customer needs to make payroll today and can't access online banking or get through on phone lines. They arrive at a branch demanding immediate wire transfer of $180K. Normal verification processes require system access. What approach is most appropriate?",
      buildChoices(
        "Verify identity using available branch records and secondary authentication, process the wire using manual procedures with dual authorization, and document the exception thoroughly.",
        "Serves the customer's legitimate urgent need while applying compensating controls appropriate to the risk level.",
        10,

        "Explain that the wire cannot be processed until systems restore and offer to prioritize their transaction when access returns.",
        "Maintains normal controls but the customer's employees may not be paid on time, creating potential legal and relationship issues.",
        5,

        "Process the wire immediately based on the customer's assurance of identity and the branch manager's recognition to prevent payroll failure.",
        "Addresses urgency but relationship-based verification alone may not meet regulatory requirements or protect against sophisticated fraud.",
        -5,

        "Offer to issue a cashier's check for the amount so the customer can physically transport funds as an alternative to the wire.",
        "Provides an alternative but physical transport of $180K creates security risks and may not meet the timing needs of electronic payroll.",
        -5
      )
    ),
  ]
};

/* ------------------------- SCENARIO 2: LIQUIDITY STRESS (UPDATED) ------------------------- */
const SCENARIO_LIQUIDITY = {
  key: "liquidity-stress-event",
  title: "Liquidity Stress Triggered by Market News",
  description:
    "Breaking news about regional bank failures triggers a 300% spike in withdrawal activity. Social media sentiment is deteriorating, large depositors are asking questions, and your liquidity ratios remain above minimums but the trajectory is concerning.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "Regional news outlets request interviews. Your communications team is divided on approach. What is most appropriate?",
      buildChoices(
        "Accept interviews with prepared talking points addressing your specific liquidity position, FDIC coverage, and concrete differences from failed institutions.",
        "Direct engagement shapes the narrative with facts; prepared messaging reduces risk of misstatement while reaching concerned customers.",
        10,
        "Decline interviews but issue a written statement emphasizing strong capital ratios and the bank's long operating history in the community.",
        "Provides information safely but written statements may not reach anxious customers as effectively as broadcast media coverage.",
        5,
        "Proactively release detailed financial metrics including real-time deposit flow data to demonstrate complete transparency.",
        "Transparency is valued but granular real-time data during stress may accelerate concerns rather than calm them.",
        -5,
        "Maintain silence to avoid associating your bank with troubled institutions in the news cycle.",
        "Avoids direct association but silence allows speculation to fill the void; customers may interpret no response as concerning.",
        -5
      )),
    q("CEO/SVPs", "The board chair asks whether to draw on committed credit facilities as a precaution. Current ratios are above regulatory minimums. What do you recommend?",
      buildChoices(
        "Draw a portion of available facilities to build an on-balance-sheet cushion while preserving remaining capacity, documenting rationale for examiners.",
        "Balances precaution against exhausting backup capacity; documentation demonstrates prudent governance to regulators.",
        10,
        "Wait until ratios approach regulatory thresholds to avoid carrying costs on borrowings that may prove unnecessary.",
        "Cost-conscious approach but accessing facilities during peak stress may face less favorable terms or availability questions.",
        5,
        "Draw the full committed amount immediately to maximize available liquidity and eliminate any availability risk.",
        "Maximizes short-term cushion but may signal panic to counterparties and exhausts backup capacity if stress extends.",
        -5,
        "Avoid drawing since facility usage may leak to the market and be interpreted as a distress signal.",
        "Leakage risk exists but prioritizing perception over liquidity positioning could leave the bank vulnerable.",
        -5
      )),
    q("CEO/SVPs", "A $45M municipal depositor with funds exceeding FDIC limits is asking questions about their exposure. Treasury flags this as urgent. What approach is most appropriate?",
      buildChoices(
        "Have a senior executive contact the depositor directly to discuss the bank's position and explore collateralization or sweep arrangements for their uninsured portion.",
        "High-touch response acknowledges legitimate concerns and offers structural solutions rather than dismissive reassurance.",
        10,
        "Provide written materials about financial strength and FDIC coverage, treating them consistently with other concerned customers.",
        "Fair treatment but may not adequately address a depositor whose departure could trigger others and whose loss would be material.",
        5,
        "Offer to immediately return funds above FDIC limits so they can place them elsewhere for full insurance coverage.",
        "Addresses their concern but proactively returning deposits during stress accelerates outflows and may signal distress.",
        -5,
        "Explain that providing preferential treatment or non-public information to individual depositors isn't appropriate during market stress.",
        "Legally careful but may lose a significant relationship whose departure could itself become a negative signal.",
        -5
      )),

    // IT/Security
    q("IT/Security", "Online banking logins have spiked 400% and the platform is slowing. Some customers report timeout errors checking balances. What approach is most appropriate?",
      buildChoices(
        "Implement graduated rate limiting prioritizing balance inquiries and small transfers while queuing large transfers for additional verification.",
        "Maintains access for anxiety-driven balance checks while managing capacity; large transfer verification adds fraud protection.",
        10,
        "Scale infrastructure immediately by activating all available capacity and engaging cloud overflow to eliminate constraints.",
        "Addresses capacity but unlimited scaling during stress is costly and could facilitate rapid outflows rather than just inquiries.",
        5,
        "Limit online access to existing sessions only, blocking new logins until load normalizes to prevent system crashes.",
        "Prevents crashes but blocking logins during a confidence crisis may drive customers to branches or competitors.",
        -5,
        "Post a degradation notice encouraging customers to call or visit branches while systems recover.",
        "Provides alternatives but redirecting digital customers to high-cost channels during peak stress increases operational burden.",
        -5
      )),
    q("IT/Security", "Fraud reports a 250% increase in social engineering calls where scammers pose as bank security asking customers to verify account details. What approach is most appropriate?",
      buildChoices(
        "Issue immediate customer alerts through authenticated channels about specific scam patterns, emphasizing that the bank never calls requesting passwords or transfers.",
        "Timely warning through trusted channels helps customers recognize attacks without amplifying general anxiety about the bank.",
        10,
        "Increase internal fraud monitoring and account lockout thresholds but avoid external communications that might further concern customers.",
        "Protects through detection but leaves customers vulnerable to attacks they could avoid with information.",
        5,
        "Temporarily suspend all outbound customer calls to eliminate confusion between legitimate contacts and fraudster attempts.",
        "Reduces confusion but eliminates an important communication channel during a period requiring high customer engagement.",
        -5,
        "Require additional authentication for all interactions including branch visits until the social engineering campaign subsides.",
        "Increases security but added friction during a confidence crisis frustrates legitimate customers seeking access.",
        -5
      )),
    q("IT/Security", "Business continuity asks whether to pre-activate DR systems in case primary systems fail under sustained load. Activation is expensive and diverts resources. What approach is most appropriate?",
      buildChoices(
        "Warm DR systems to ready state without full activation, positioning for rapid failover while minimizing cost and confirming runbooks with staff.",
        "Balances preparedness against cost; ready state enables faster activation than cold start if conditions deteriorate.",
        10,
        "Maintain standard monitoring and activate DR only if primary systems show actual degradation requiring failover.",
        "Cost-efficient but cold-start activation during active stress may take longer than conditions allow.",
        5,
        "Fully activate DR and run active-active to maximize capacity and eliminate single points of failure.",
        "Maximum resilience but active-active during short-term stress introduces synchronization complexity and unnecessary cost.",
        -5,
        "Defer DR considerations to focus all technical resources on primary system stability during the stress period.",
        "Concentrates resources but leaves no backup position if primary systems fail under sustained high load.",
        -5
      )),

    // HR
    q("HR", "Branch managers report tellers struggling with aggressive customers demanding large withdrawals and questioning bank stability. Two employees request to go home. What approach is most appropriate?",
      buildChoices(
        "Deploy de-escalation support to high-volume branches, provide specific scripts, authorize managers to rotate stressed staff, and ensure visible security presence.",
        "Addresses employee safety while maintaining capacity; scripts and security reduce individual burden on frontline staff.",
        10,
        "Distribute talking points and remind managers of de-escalation training, letting them handle their teams as they see fit.",
        "Provides resources but leaves managers to handle a systemic issue individually; response quality will vary.",
        5,
        "Honor all requests to leave and backfill with available staff to prioritize employee well-being during the crisis.",
        "Employee-focused but freely granting departures may cascade as others see colleagues leaving, reducing capacity.",
        -5,
        "Require all scheduled staff to complete shifts, emphasizing the importance of maintaining normal operations.",
        "Maintains capacity but forcing distressed employees to stay risks poor customer interactions and retention issues.",
        -5
      )),
    q("HR", "Several employees posted on social media about the 'crazy day' including photos of long lines. One post mentions overhearing management discuss deposit outflows. What approach is most appropriate?",
      buildChoices(
        "Remind all staff of social media policies through managers, specifically request removal of posts with operational details, and brief employees on boundaries.",
        "Addresses the issue while providing clear guidance; manager conversations are more effective than mass emails.",
        10,
        "Issue a company-wide reminder about social media policies and confidentiality without singling out specific posts.",
        "Reinforces expectations but generic reminders may not prompt removal of existing problematic posts.",
        5,
        "Have IT monitor employee social media and flag any posts mentioning the bank for communications review.",
        "Addresses future posts but monitoring during stress may damage trust and morale when engagement is critical.",
        -5,
        "Take disciplinary action against employees who posted operational details to establish clear consequences.",
        "Creates accountability but visible discipline during a crisis may leak and create additional negative narrative.",
        -5
      )),
    q("HR", "The contact center is overwhelmed. Managers ask if staff from other departments can be redeployed to answer customer calls. What approach is most appropriate?",
      buildChoices(
        "Redeploy staff with prior customer service experience, provide abbreviated training on key talking points, and pair them with experienced agents.",
        "Expands capacity with appropriate preparation; pairing manages quality while supplemental staff get oriented.",
        10,
        "Allow any willing employees to volunteer for contact center duty after reviewing the standard FAQ document.",
        "Quick capacity increase but untrained staff may provide inconsistent information during a sensitive period.",
        5,
        "Maintain contact center staffing and implement longer hold messaging rather than risk inconsistent responses.",
        "Protects quality but extended hold times during a confidence crisis may worsen customer anxiety.",
        -5,
        "Outsource overflow to an external contact center to scale capacity with professional agents.",
        "Adds capacity but external agents lack bank-specific knowledge needed for this situation's unique concerns.",
        -5
      )),

    // Finance
    q("Finance", "Deposit outflows are running $12M per hour—elevated but sustainable. Treasury asks whether to adjust deposit pricing to stem outflows. What approach is most appropriate?",
      buildChoices(
        "Implement modest, targeted rate increases on sticky products (CDs, money markets) to retain flight-risk funds without repricing the entire book.",
        "Balances retention incentive against margin impact; targeted approach addresses outflow-prone segments efficiently.",
        10,
        "Maintain current pricing to avoid signaling distress, relying on relationship management to retain depositors.",
        "Avoids price signal but may lose rate-sensitive deposits to competitors offering better terms.",
        5,
        "Aggressively match or exceed competitor rates across all products to stop outflows regardless of cost.",
        "May stem outflows but dramatic repricing signals desperation and significantly damages net interest margin.",
        -5,
        "Lower rates to discourage new hot money deposits during the volatile period.",
        "May deter hot money but will accelerate outflows from existing stable depositors seeking better returns.",
        -5
      )),
    q("Finance", "ALM asks about selling securities to raise liquidity. The portfolio has unrealized losses from rate increases. What approach is most appropriate?",
      buildChoices(
        "Sell shorter-duration securities with smaller unrealized losses to raise liquidity while preserving longer-duration positions.",
        "Raises needed liquidity while minimizing capital impact; shorter positions mature soon anyway.",
        10,
        "Avoid securities sales entirely to prevent realizing losses that would reduce regulatory capital ratios.",
        "Protects capital ratios but may leave liquidity inadequate if outflows continue or accelerate.",
        5,
        "Sell the entire AFS portfolio immediately to maximize liquidity and eliminate future interest rate risk.",
        "Maximizes liquidity but crystallizes all losses at once and eliminates future interest income.",
        -5,
        "Pledge securities as FHLB collateral rather than selling to raise liquidity without realizing losses.",
        "Avoids loss recognition but reduces borrowing capacity for future needs; advances may have less favorable terms.",
        -5
      )),
    q("Finance", "The CFO needs an updated liquidity forecast. Conditions are changing hourly and prior assumptions may not hold. What approach is most appropriate?",
      buildChoices(
        "Produce scenario-based projections with multiple outflow assumptions (current pace, 2x acceleration, stabilization), updating as conditions evolve.",
        "Scenario approach acknowledges uncertainty while providing decision-relevant information across plausible outcomes.",
        10,
        "Provide a single best-estimate projection based on current rates, updating when conditions materially change.",
        "Simpler to communicate but single-point estimates may anchor expectations inappropriately during high uncertainty.",
        5,
        "Delay forecasts until conditions stabilize enough to produce reliable projections with reasonable confidence.",
        "Avoids false precision but leaves leadership without financial context for time-sensitive decisions.",
        -5,
        "Use regulatory stress test scenarios as the baseline since they were designed for this type of situation.",
        "Provides structure but regulatory scenarios may not reflect the specific dynamics of the current situation.",
        -5
      )),

    // Loans
    q("Loans", "A construction loan draw is scheduled today—the borrower needs $2.3M to pay contractors or face project delays. Normal funding comes from deposits. What approach is most appropriate?",
      buildChoices(
        "Fund the draw as committed after confirming inspection requirements, using wholesale funding if necessary to preserve deposit liquidity.",
        "Honors commitments maintaining reputation and legal standing; wholesale substitution manages liquidity appropriately.",
        10,
        "Contact the borrower to request a short delay, explaining circumstances and offering to cover any extension fees they incur.",
        "Preserves liquidity but may breach the agreement and create project delays harming borrower and collateral value.",
        5,
        "Fund only the portion needed for immediate contractor payments, holding the remainder until conditions improve.",
        "Partial funding may not meet needs and could breach terms requiring full draw availability.",
        -5,
        "Defer all discretionary funding including construction draws until deposit outflows stabilize.",
        "Preserves liquidity but breaching commitments may trigger defaults and damage market reputation.",
        -5
      )),
    q("Loans", "The mortgage pipeline has $8M in rate-locked loans closing this week. Warehouse funding is available but reduces other liquidity. What approach is most appropriate?",
      buildChoices(
        "Honor rate locks and close as scheduled—these sell into secondary markets within days; refusing creates regulatory and reputation risk.",
        "Closings generate near-term proceeds; breaching rate locks creates regulatory exposure and customer harm.",
        10,
        "Offer borrowers the option to delay closing in exchange for free rate lock extensions, letting them choose based on their needs.",
        "Provides flexibility but many borrowers have timing constraints and may view the offer as concerning.",
        5,
        "Close only loans with confirmed secondary market takeout and defer others until liquidity improves.",
        "Reduces exposure but rate-locked loans without immediate takeout still carry commitment obligations.",
        -5,
        "Suspend all mortgage closings temporarily, communicating that market conditions require a brief pause.",
        "Preserves liquidity but mass suspension during a confidence crisis generates regulatory and reputational damage.",
        -5
      )),
    q("Loans", "Commercial RMs report business customers asking to draw credit lines preemptively. Committed lines total $45M with $12M currently drawn. What approach is most appropriate?",
      buildChoices(
        "Honor draw requests complying with line terms and covenants while proactively reaching out to large line holders to understand their intentions.",
        "Meeting commitments is legally required; proactive outreach may address concerns before draws occur.",
        10,
        "Require enhanced documentation and approval for draws above normal patterns to ensure full compliance with terms.",
        "Within rights but appears to be avoiding commitments; customers may escalate or pursue legal remedies.",
        5,
        "Contact borrowers considering draws to discuss alternatives and express concern about the timing of their requests.",
        "Opens dialogue but may be perceived as discouraging legitimate use of committed facilities.",
        -5,
        "Review all lines for technical defaults or covenant issues that would permit line reduction before draws occur.",
        "Legally aggressive approach may breach good faith obligations and damages customer relationships.",
        -5
      )),

    // Accounting
    q("Accounting", "Controllers ask whether to accelerate month-end close given the dynamic situation. Normal close takes 5 business days. What approach is most appropriate?",
      buildChoices(
        "Implement daily flash reporting on key metrics (deposits, liquidity, large transactions) while maintaining normal close timeline for full financials.",
        "Flash reporting provides real-time visibility without compromising quality of formal close procedures.",
        10,
        "Accelerate close to 2 days by deferring non-critical reconciliations, giving leadership faster access to formal financials.",
        "Faster financials have value but deferred reconciliations may miss issues emerging from the stress period.",
        5,
        "Maintain normal timeline and avoid changes that might introduce errors during an already stressful period.",
        "Protects quality but leadership may lack visibility into the rapidly changing financial position.",
        -5,
        "Pause non-essential accounting to focus resources on cash monitoring and liquidity management support.",
        "Supports immediate needs but creates backlogs that complicate future periods.",
        -5
      )),
    q("Accounting", "Finance is waiving fees and offering rate incentives to retain depositors. Documentation is incomplete as staff prioritize customer interactions. What approach is most appropriate?",
      buildChoices(
        "Accept temporary documentation gaps with manager attestation, create a tracking log for cleanup, and establish pre-approved criteria for common incentives.",
        "Enables rapid response while maintaining traceability; pre-approved criteria reduce individual decision burden.",
        10,
        "Require full documentation before processing any fee waiver or rate exception to maintain normal controls.",
        "Maintains standards but slows customer response during time-sensitive retention efforts.",
        5,
        "Allow staff to waive fees freely during stress and reconcile total impact after conditions normalize.",
        "Maximum flexibility but undefined discretion creates inconsistent treatment and difficult-to-explain totals.",
        -5,
        "Suspend all waivers and exceptions until normal documentation processes can be followed.",
        "Protects controls but eliminates tools that help retain valuable depositors during stress.",
        -5
      )),
    q("Accounting", "External auditors have a scheduled interim visit next week. Given conditions, they ask if the bank prefers to reschedule. What approach is most appropriate?",
      buildChoices(
        "Proceed with the visit but brief auditors on the stress situation and any documentation gaps; transparency supports the audit relationship.",
        "Proceeding demonstrates resilience; proactive briefing on gaps prevents surprises and maintains auditor confidence.",
        10,
        "Request a 2-week delay to allow normalization and ensure documentation is complete before auditors arrive.",
        "Improves readiness but postponement may appear to be avoiding scrutiny during stress.",
        5,
        "Proceed but limit auditor access to areas and records not affected by current stress activities.",
        "Reduces disruption but limiting access may raise concerns about what's being withheld.",
        -5,
        "Request indefinite postponement until the situation fully resolves to avoid diverting staff from crisis response.",
        "Focuses resources but extended postponement concerns auditors and may trigger additional questions.",
        -5
      )),

    // Deposits
    q("Deposits", "Branch managers need guidance on customers wanting withdrawals exceeding teller drawer limits ($10K). Vault access is limited by armored car schedules. What approach is most appropriate?",
      buildChoices(
        "Authorize larger drawer limits for high-volume branches, increase vault delivery frequency, and offer alternatives like official checks or wire transfers.",
        "Addresses operational constraints while providing options; customers access funds through multiple channels.",
        10,
        "Enforce existing limits and ask customers wanting more to return tomorrow when vault supplies are replenished.",
        "Maintains procedures but asking customers to return may worsen anxiety and push them to try other institutions.",
        5,
        "Remove all drawer and daily limits to demonstrate confidence and ensure no customer feels restricted.",
        "Signals confidence but unlimited access creates operational challenges and may accelerate outflows beyond sustainable levels.",
        -5,
        "Pre-position large cash amounts at all branches via emergency courier even if it draws attention.",
        "Ensures availability but visible large cash deliveries may attract attention and create security concerns.",
        -5
      )),
    q("Deposits", "A local radio station runs a segment with callers expressing concern about regional banks. One caller names your bank specifically. Marketing asks for guidance. What approach is most appropriate?",
      buildChoices(
        "Offer a spokesperson for a brief interview providing factual context about your institution without dismissing caller concerns.",
        "Direct engagement on the platform where concerns are discussed reaches the relevant audience with accurate information.",
        10,
        "Request a correction from the station if factually incorrect statements were made about the bank.",
        "Addresses misinformation but correction requests may draw more attention to the original comments.",
        5,
        "Purchase advertising time with confidence-building messages about bank strength and FDIC coverage.",
        "Gets message out but paid advertising during stress may appear defensive or desperate.",
        -5,
        "Monitor but avoid engagement that might elevate the bank's profile in a negative news context.",
        "Avoids amplification but unanswered concerns continue reaching listeners who may be customers.",
        -5
      )),
    q("Deposits", "Online banking shows customers setting up external transfers totaling $2.1M to larger national banks, scheduled for tomorrow. What approach is most appropriate?",
      buildChoices(
        "Process scheduled transfers normally while having relationship managers contact larger depositors to understand concerns and discuss the bank's position.",
        "Honoring instructions maintains trust; proactive outreach may retain some customers and provides intelligence.",
        10,
        "Implement a 24-hour delay on external transfers above $50K to allow customer outreach before funds leave.",
        "Creates retention window but restricting transfers may accelerate concerns and invite regulatory attention.",
        5,
        "Expedite all pending transfers to demonstrate confidence in the bank's liquidity position.",
        "Shows confidence but proactively accelerating outflows worsens the immediate liquidity situation.",
        -5,
        "Contact customers with large pending transfers to explain why community banks are better than large institutions.",
        "May retain some but the framing suggests concern and may reinforce customer worries.",
        -5
      )),
  ]
};


const SCENARIO_INSIDER = {
  key: "insider-threat-terminated-employee",
  title: "Terminated Employee Causes Insider Disruption",
  description:
    "A senior loan processor was terminated for cause this morning. Within hours, suspicious activity appears: wire transfer templates are modified, files vanish from shared drives, and staff report threatening messages. The employee had broad system access and knew the bank's security gaps.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "The terminated employee's supervisor wants to send an explanatory email to the team about the termination circumstances. HR advises against it. What approach is most appropriate?",
      buildChoices(
        "Decline the detailed email; instead issue a brief factual notice that the employee has departed and that concerns should be directed to HR.",
        "Protects against defamation claims while acknowledging the departure; centralizing inquiries ensures consistent messaging.",
        10,
        "Allow the supervisor to send a general message noting the departure without discussing circumstances, letting them handle their team.",
        "Balances team communication needs but risks inconsistent messaging if supervisor adds editorial content.",
        5,
        "Permit the supervisor to explain the termination reasons since the team needs to understand what happened.",
        "Creates significant defamation exposure; even factual statements about termination for cause carry legal risk.",
        -5,
        "Block all communication about the departure to prevent any possible legal exposure.",
        "Complete silence fuels speculation; staff will fill the information void with rumors that may be worse.",
        -5
      )),
    q("CEO/SVPs", "Law enforcement indicates they can pursue criminal charges if the bank files a report, but warns that prosecution will take months and may result in public disclosure. What approach is most appropriate?",
      buildChoices(
        "File the report while coordinating with counsel on parallel civil remedies and preparing for potential media inquiries.",
        "Filing preserves criminal remedies; parallel preparation addresses both legal and reputational considerations.",
        10,
        "Delay the decision until the full scope of damage is assessed, then decide whether criminal charges are warranted.",
        "Assessment has value but delay may compromise evidence and reduce law enforcement interest in the case.",
        5,
        "Decline to involve law enforcement to avoid public disclosure and handle the matter privately through civil action.",
        "Avoids publicity but may leave criminal conduct unaddressed and signals that insider threats have limited consequences.",
        -5,
        "File the report immediately and issue a press release demonstrating zero tolerance for insider misconduct.",
        "Zero tolerance messaging is undercut by disclosure before investigation completes; may compromise prosecution.",
        -5
      )),
    q("CEO/SVPs", "A board member who knows the terminated employee personally expresses concern about the bank's handling of the situation. They request details about the evidence. What approach is most appropriate?",
      buildChoices(
        "Provide a summary appropriate for board oversight while explaining that investigation details must remain confidential to protect legal privilege.",
        "Satisfies governance oversight role while protecting privileged investigation materials and the integrity of the process.",
        10,
        "Share full details with the board member since board members have fiduciary duties and should be fully informed.",
        "Fiduciary duties exist but personal connection creates conflict; full disclosure may compromise investigation.",
        5,
        "Decline to share any information and suggest the board member recuse from matters involving this employee.",
        "Recusal is appropriate but outright refusal to brief may appear defensive and undermine board confidence.",
        -5,
        "Ask the board member to contact the former employee to get their side of the story for a balanced perspective.",
        "Direct contact undermines the investigation and creates significant legal exposure for the bank.",
        -5
      )),

    // IT/Security
    q("IT/Security", "The terminated employee's credentials were disabled, but security discovers they had configured personal email forwarding rules that copied certain loan documents. The rules are still active. What approach is most appropriate?",
      buildChoices(
        "Preserve the forwarding rules as evidence, disable them to stop ongoing exfiltration, and document the timeline for legal and forensic review.",
        "Balances evidence preservation with stopping the breach; documentation supports potential legal action.",
        10,
        "Immediately delete all forwarding rules and personal account references to stop any further data loss.",
        "Stops exfiltration but destroys evidence that could be critical for legal proceedings or insurance claims.",
        5,
        "Leave the rules active temporarily to monitor what data is being accessed and build a stronger case.",
        "Continued exfiltration increases data exposure and may constitute failure to mitigate once the breach is known.",
        -5,
        "Contact the personal email provider to request they block the account and return any exfiltrated data.",
        "Provider cooperation is unlikely without legal process; contacting them directly may alert the former employee.",
        -5
      )),
    q("IT/Security", "Forensic analysis reveals the employee also had valid credentials to a cloud-based loan origination system managed by a third-party vendor. Your contract requires you to notify them of security incidents. What approach is most appropriate?",
      buildChoices(
        "Notify the vendor immediately per contract terms, request they disable the credentials, and coordinate on log review for unauthorized access.",
        "Contractual compliance is mandatory; coordinated response addresses shared risk across the integrated environment.",
        10,
        "Disable your internal SSO connection to the vendor system first, then notify the vendor after you've contained the internal situation.",
        "SSO disconnection helps but may not address direct credentials; delayed notification could breach contract terms.",
        5,
        "Hold off on vendor notification until your internal investigation determines whether vendor systems were actually accessed.",
        "Delays may breach contractual notification requirements and leaves the vendor unable to take protective action.",
        -5,
        "Handle the vendor notification through your standard vendor management process, which may take a few days.",
        "Standard process timelines are inappropriate for security incidents; delay increases exposure window.",
        -5
      )),
    q("IT/Security", "The employee's workstation was imaged, but IT discovers they frequently used a personal laptop on the guest WiFi network. No logs exist for guest network activity. What approach is most appropriate?",
      buildChoices(
        "Document the gap in logging, implement guest network monitoring going forward, and focus forensic efforts on accessible data sources.",
        "Addresses the gap while focusing investigation resources productively; documentation supports control improvement.",
        10,
        "Contact the employee to request return of the personal laptop for examination as part of the investigation.",
        "Request is unlikely to succeed and alerts the subject; any examination would require their consent or legal process.",
        5,
        "Assume the personal laptop was used for malicious purposes and include this assumption in the incident report.",
        "Assumptions without evidence may be challenged; overstatement could undermine credibility of legitimate findings.",
        -5,
        "Implement immediate blocking of all personal devices on guest networks to prevent similar gaps in the future.",
        "Future prevention is good but blocking during active investigation may disrupt operations without addressing the current incident.",
        -5
      )),

    // HR
    q("HR", "Two employees report that the terminated individual contacted them via personal cell phone asking about the bank's response and whether anyone is 'on their side.' What approach is most appropriate?",
      buildChoices(
        "Instruct employees not to engage, document the contacts for the investigation file, and notify legal counsel about potential witness tampering.",
        "Protects employees and investigation integrity; documentation may support legal remedies if contacts escalate.",
        10,
        "Tell employees to block the number and avoid any contact, but don't document it since it was personal communication.",
        "Self-protection advice is good but failure to document loses important evidence of post-termination conduct.",
        5,
        "Allow employees to respond at their discretion since policing personal communications is not the bank's role.",
        "Discretion risks inconsistent responses; employees may inadvertently share investigation details or create legal issues.",
        -5,
        "Have HR call the terminated employee to request they stop contacting staff about work matters.",
        "Direct contact may be perceived as harassment; HR engagement should go through legal counsel.",
        -5
      )),
    q("HR", "The terminated employee files for unemployment, claiming they were fired without cause. The claim requires a response within 10 days and will be reviewed by the state agency. What approach is most appropriate?",
      buildChoices(
        "Coordinate response with legal counsel, providing factual documentation of performance issues while being mindful of what becomes public record.",
        "Legal coordination ensures appropriate disclosure; unemployment responses can be discoverable in future litigation.",
        10,
        "Provide complete documentation of all misconduct to ensure the unemployment claim is denied.",
        "Complete disclosure may over-share sensitive investigation details that could complicate other proceedings.",
        5,
        "Don't respond to the unemployment claim to avoid creating any written record that could be used against the bank.",
        "Non-response typically results in the claim being granted by default; silence doesn't prevent liability.",
        -5,
        "Have the employee's supervisor write a detailed personal statement about why termination was justified.",
        "Supervisor statements may contain inadmissible opinions or emotional content that creates legal exposure.",
        -5
      )),
    q("HR", "Staff morale has dropped and several employees express fear about their own job security after witnessing the abrupt termination. What approach is most appropriate?",
      buildChoices(
        "Have leadership acknowledge the disruption, reaffirm commitment to fair treatment, and remind staff of available support resources without discussing the specific case.",
        "Addresses morale directly while maintaining appropriate confidentiality; support resources help anxious employees.",
        10,
        "Schedule individual meetings with each affected team member to address their specific concerns privately.",
        "Individual attention is valuable but resource-intensive; may create expectation of detailed explanations that can't be provided.",
        5,
        "Explain to staff that the terminated employee engaged in serious misconduct so they understand the situation was unusual.",
        "Sharing misconduct details creates defamation risk and may not reassure staff who don't know the full context.",
        -5,
        "Avoid any discussion of the situation and focus on business as usual to minimize attention on the incident.",
        "Ignoring visible distress leaves anxiety unaddressed and may signal leadership is disconnected from staff concerns.",
        -5
      )),

    // Finance
    q("Finance", "Wire transfer templates the employee created contain embedded instructions that route a portion of certain payments to an unfamiliar account. The templates have been used 3 times since the employee's departure. What approach is most appropriate?",
      buildChoices(
        "Immediately disable all templates the employee created, trace the three transactions to determine if funds were misdirected, and engage counsel about recovery options.",
        "Stops ongoing risk, quantifies exposure, and initiates recovery process; template review should be comprehensive.",
        10,
        "Freeze all wire activity temporarily while conducting a full review of every template in the system.",
        "Comprehensive review is thorough but freezing all wires disrupts legitimate customer activity and signals broader problems.",
        5,
        "Review only the three transactions that already processed and fix those templates, leaving others for normal review cycles.",
        "Addresses known issues but may miss other compromised templates; selective review leaves gaps.",
        -5,
        "Contact the unfamiliar account holder to determine if they have a legitimate relationship with any bank customer.",
        "Direct contact alerts potential fraudsters and may complicate law enforcement investigation.",
        -5
      )),
    q("Finance", "Insurance coverage for employee dishonesty has a $250K limit. Preliminary estimates suggest losses could reach $180K in misdirected funds plus investigation costs. What approach is most appropriate?",
      buildChoices(
        "Notify the insurer promptly per policy terms, document all costs carefully, and explore whether cyber or other policies may provide additional coverage.",
        "Timely notification is typically required; comprehensive documentation maximizes recovery; multiple policies may apply.",
        10,
        "Wait until the investigation concludes and losses are finalized before filing a claim to avoid preliminary estimates.",
        "Delayed notification may breach policy terms; insurers prefer early engagement even with preliminary numbers.",
        5,
        "File the claim immediately for the maximum $250K to ensure full coverage is available for whatever losses emerge.",
        "Filing for more than actual losses is fraudulent; premature maximum claims may raise red flags with the insurer.",
        -5,
        "Handle the losses internally since the deductible and premium increase may exceed the net recovery benefit.",
        "Fails to preserve coverage options; even if not claimed now, notification preserves rights if losses grow.",
        -5
      )),
    q("Finance", "The CFO asks whether incident costs should be disclosed in upcoming quarterly financials. Losses are material but the investigation is ongoing. What approach is most appropriate?",
      buildChoices(
        "Consult with external auditors on disclosure requirements; if material, provide appropriate disclosure with caveats about ongoing investigation and estimate uncertainty.",
        "Auditor guidance ensures compliance; qualified disclosure addresses materiality while acknowledging uncertainty.",
        10,
        "Delay disclosure until the next quarter when investigation should be complete and final numbers are available.",
        "Delayed disclosure of material events may violate accounting standards and create liability if losses grow.",
        5,
        "Disclose the full estimated loss amount to ensure maximum transparency with investors and regulators.",
        "Preliminary estimates may prove inaccurate; disclosure of uncertain numbers without qualification may mislead.",
        -5,
        "Classify investigation costs as routine operating expenses to avoid drawing attention to the incident.",
        "Intentional misclassification of material costs may constitute securities fraud or accounting manipulation.",
        -5
      )),

    // Loans
    q("Loans", "Several loan files the employee worked on have inconsistent documentationsome modifications appear to have been made after initial approval. Borrowers on these loans are current on payments. What approach is most appropriate?",
      buildChoices(
        "Conduct a systematic review of all files the employee touched, prioritizing those with modification indicators, and document findings for potential regulatory disclosure.",
        "Systematic review identifies scope; documentation supports regulatory transparency and any needed remediation.",
        10,
        "Review only the files with obvious inconsistencies since current borrowers don't present immediate risk.",
        "Current payment status doesn't indicate file integrity; selective review may miss systemic issues.",
        5,
        "Contact the current borrowers to verify the terms they believe they agreed to, comparing against file documentation.",
        "Borrower contact may confuse customers about their obligations and create issues if terms were actually modified.",
        -5,
        "Quietly correct any documentation errors to bring files into compliance without creating an investigation record.",
        "Covering up inconsistencies could constitute fraud; documentation issues may need regulatory disclosure.",
        -5
      )),
    q("Loans", "A large commercial borrower calls their relationship manager concerned because the terminated employee mentioned 'problems with their loan file' in a personal conversation last week. What approach is most appropriate?",
      buildChoices(
        "Have the relationship manager acknowledge the call, provide appropriate reassurance about the bank's processes, and flag the file for priority review.",
        "Acknowledges legitimate concern, provides reassurance without speculation, and ensures the file gets reviewed promptly.",
        10,
        "Review the borrower's complete file before returning their call so the RM can speak knowledgeably about any actual issues.",
        "Thorough preparation is good but delays responding to a concerned major customer; may appear evasive.",
        5,
        "Tell the borrower that the terminated employee's statements can't be trusted and their file is fine.",
        "Dismissing concerns without review may prove embarrassing if issues exist; statement about trust may be defamatory.",
        -5,
        "Explain to the borrower that you can't discuss personnel matters but will look into any file concerns.",
        "Overly formal response may increase anxiety; borrower doesn't need personnel details, just file reassurance.",
        -5
      )),
    q("Loans", "The loan committee asks whether pending applications the employee worked on should be delayed for additional review. Current processing targets are already strained. What approach is most appropriate?",
      buildChoices(
        "Implement secondary review for applications the employee substantially completed, communicating expected delays to affected applicants with appropriate context.",
        "Secondary review addresses integrity concerns; proactive communication manages customer expectations.",
        10,
        "Process applications normally but flag them for post-closing audit to avoid delaying customers unnecessarily.",
        "Maintains timing but post-closing discovery of issues is costlier to remediate than pre-closing review.",
        5,
        "Expedite all pending applications to clear the backlog before any issues are discovered that might require disclosure.",
        "Rushing to close before review may perpetuate errors; creates appearance of impropriety if issues emerge later.",
        -5,
        "Reject all applications the employee touched and ask customers to reapply with new documentation.",
        "Wholesale rejection punishes innocent customers and may violate fair lending requirements.",
        -5
      )),

    // Accounting
    q("Accounting", "Journal entries from the employee's last day show unusual patternsseveral reversing entries that don't match standard procedures. The entries affect suspense accounts. What approach is most appropriate?",
      buildChoices(
        "Freeze the affected suspense accounts, trace each entry to source documentation, and reconcile to determine if balances are accurate.",
        "Freeze prevents further manipulation; tracing identifies intent and impact; reconciliation quantifies exposure.",
        10,
        "Reverse all the employee's entries from that day to restore accounts to their prior state.",
        "Wholesale reversal may undo legitimate entries and doesn't address whether prior balances were accurate.",
        5,
        "Add the unusual entries to the standard month-end reconciliation queue for review during normal close.",
        "Standard timing may allow issues to persist; suspense account irregularities warrant immediate attention.",
        -5,
        "Document the unusual patterns but don't investigate further since the employee is gone and can't explain.",
        "Lack of investigation leaves potential fraud undetected and fails to address possible ongoing control issues.",
        -5
      )),
    q("Accounting", "External auditors are scheduled to arrive next week for interim procedures. The incident is still under investigation. What approach is most appropriate?",
      buildChoices(
        "Brief auditors on the incident proactively, provide access to investigation findings as appropriate, and coordinate on any testing implications.",
        "Proactive disclosure maintains auditor trust; coordination ensures their procedures address relevant risks.",
        10,
        "Proceed with the audit as planned without mentioning the incident unless auditors specifically ask about it.",
        "Failure to disclose material events may constitute an omission; auditors will likely discover the incident anyway.",
        5,
        "Request auditors delay their visit until the investigation is complete so you can present a full picture.",
        "Delays may signal concern about findings; auditors may view the request as obstruction or increase scrutiny.",
        -5,
        "Limit auditor access to areas unrelated to the terminated employee to avoid disrupting the investigation.",
        "Access restrictions undermine the audit and may be perceived as hiding material information.",
        -5
      )),
    q("Accounting", "The investigation identifies $45K in expense reimbursements the employee submitted that lack adequate documentation. Some were approved by a supervisor who has since left the bank. What approach is most appropriate?",
      buildChoices(
        "Document the findings, attempt to reconstruct what documentation existed, and include the reimbursements in the overall loss quantification.",
        "Documentation supports any claims; reconstruction may find legitimate support; inclusion ensures complete accounting.",
        10,
        "Write off the $45K as unrecoverable since the approving supervisor isn't available to explain the approvals.",
        "Write-off may be premature; reconstruction efforts might find supporting documentation or identify recovery options.",
        5,
        "Contact the former supervisor to understand what documentation they reviewed before approving the expenses.",
        "Former employees have no obligation to cooperate; contact may be perceived as accusatory.",
        -5,
        "Assume the expenses were legitimate since they were approved through normal channels and focus on larger issues.",
        "Approval doesn't equal legitimacy; $45K is material and warrants investigation regardless of other issues.",
        -5
      )),

    // Deposits
    q("Deposits", "Customer service receives calls from depositors who were contacted by the terminated employee claiming to still work at the bank. The employee asked them to 'verify' account information. What approach is most appropriate?",
      buildChoices(
        "Alert all contact channels about the impersonation, issue customer advisories through secure channels, and report the conduct to law enforcement.",
        "Multi-channel response protects customers; advisory prevents additional victims; law enforcement addresses criminal conduct.",
        10,
        "Contact only the customers who reported the calls to verify their accounts weren't compromised.",
        "Addresses known victims but leaves other customers unwarned and vulnerable to similar contacts.",
        5,
        "Post a general social media notice about phishing attempts without mentioning the specific situation.",
        "Generic notice may not alert customers to the specific threat; connection to former employee is relevant context.",
        -5,
        "Wait to see if any accounts show unauthorized activity before taking action that might alarm customers.",
        "Delay exposes customers to ongoing risk; prevention is preferable to reactive fraud management.",
        -5
      )),
    q("Deposits", "A branch manager reports that the terminated employee came to the branch lobby demanding to speak with management about 'false accusations.' Other customers were present. What approach is most appropriate?",
      buildChoices(
        "Have security calmly escort the individual from the premises, document the incident, and notify legal counsel about potential trespassing and harassment.",
        "Removal protects staff and customers; documentation supports any needed legal action; counsel guides next steps.",
        10,
        "Allow a manager to speak with them privately to de-escalate the situation and understand their concerns.",
        "Private conversation may be well-intentioned but could be perceived as re-engaging with a hostile former employee.",
        5,
        "Call law enforcement immediately and have the individual arrested for trespassing.",
        "Immediate arrest may escalate the situation unnecessarily; removal and documentation is proportionate first response.",
        -5,
        "Ignore the individual and continue normal operations, hoping they will leave on their own.",
        "Presence of hostile former employee creates safety risk for staff and discomfort for customers.",
        -5
      )),
    q("Deposits", "Several customers mention that the terminated employee previously recommended specific products or account changes to them. They want to know if they should reverse those recommendations. What approach is most appropriate?",
      buildChoices(
        "Review each customer's situation individually to determine if the recommendations were suitable, offering to make changes where appropriate.",
        "Individual review addresses legitimate concerns; suitability focus ensures customer interests are protected.",
        10,
        "Tell customers that all recommendations from bank employees are reviewed and approved, so no changes are needed.",
        "Blanket reassurance may be inaccurate; some recommendations may not have been appropriate for specific customers.",
        5,
        "Recommend all affected customers reverse any changes made on the employee's recommendation to be safe.",
        "Wholesale reversal may be unnecessary and costly for customers; some recommendations may have been appropriate.",
        -5,
        "Explain that the bank can't provide advice on whether to keep or reverse prior recommendations.",
        "Unhelpful response leaves customers without guidance; bank should support customers in evaluating their accounts.",
        -5
      )),
  ]
};

    

const SCENARIO_VENDOR_OUTAGE = {
  key: "third-party-core-vendor-outage",
  title: "Third-Party Core Vendor Outage",
  description:
    "Your core banking processor experiences a nationwide outage at 10 AM on a Wednesday. Transactions won't post, branches can't access customer accounts, mobile banking shows stale data, and the vendor's status page says 'investigating.' You have no ETA for restoration.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "The vendor's account executive offers to join your incident call but requests that no details be shared externally until they issue an official statement. What approach is most appropriate?",
      buildChoices(
        "Accept their participation but explain that you must communicate with customers and regulators based on your obligations, not theirs.",
        "Collaboration with vendor is valuable; preserving your independent communication rights is essential for customer relationships and compliance.",
        10,
        "Agree to hold external communications until the vendor provides their statement to ensure messaging alignment.",
        "Alignment has value but ceding communication control to a third party during an outage affecting your customers creates risk.",
        5,
        "Decline vendor participation on the call to avoid any implied agreement about communication restrictions.",
        "Avoids restriction but loses valuable coordination; vendor information improves your ability to respond effectively.",
        -5,
        "Demand the vendor provide their official statement within one hour or you will communicate unilaterally.",
        "Ultimatums may damage the relationship without accelerating vendor response; their timelines are beyond your control.",
        -5
      )),
    q("CEO/SVPs", "Local media picks up the story because customers are posting complaints on social media. A reporter asks whether the bank has a backup plan for vendor failures. What approach is most appropriate?",
      buildChoices(
        "Acknowledge the disruption, explain the bank's contingency measures for serving customers during outages, and provide update timing without criticizing the vendor.",
        "Honest acknowledgment with focus on customer care demonstrates competence; avoiding vendor blame preserves the relationship.",
        10,
        "Decline comment and refer the reporter to the vendor's communications team for technical details.",
        "Deferral may appear evasive; customers are your responsibility even when third parties cause the disruption.",
        5,
        "Provide detailed technical explanation of the vendor's failure to demonstrate the bank wasn't at fault.",
        "Technical blame-shifting may be factually accurate but appears defensive and doesn't address customer concerns.",
        -5,
        "Promise that the bank is considering terminating the vendor relationship to prevent future occurrences.",
        "Premature commitment damages vendor relationship; switching providers during an outage is neither possible nor helpful.",
        -5
      )),
    q("CEO/SVPs", "The outage extends past 4 hours and your primary regulator calls asking for a situation report. They mention other banks on the same vendor have already filed incident reports. What approach is most appropriate?",
      buildChoices(
        "Provide a candid situation report including customer impact, mitigation steps, and expected follow-up timeline, regardless of what other banks have reported.",
        "Regulator transparency is mandatory; your obligations are independent of other institutions' actions.",
        10,
        "Ask the regulator what information other banks provided so you can ensure your report is consistent with theirs.",
        "Consistency has some value but appears more focused on coordination than transparency; provide your own complete picture.",
        5,
        "Provide a brief summary and indicate you'll file a formal report after the incident concludes with complete information.",
        "Deferral may be appropriate for formal filings but regulators calling during an active incident expect substantive information.",
        -5,
        "Explain that the vendor is responsible for the outage and suggest the regulator contact them for technical details.",
        "Deflection doesn't satisfy your regulatory obligations; you're responsible for services you provide to customers.",
        -5
      )),

    // IT/Security
    q("IT/Security", "Your team discovers that the vendor's outage means scheduled overnight batch processing didn't complete. Tomorrow's opening balances will be incorrect unless action is taken. What approach is most appropriate?",
      buildChoices(
        "Work with the vendor to understand what processing completed, implement reconciliation procedures to identify gaps, and prepare customer communication for potential balance discrepancies.",
        "Understanding actual state enables accurate reconciliation; customer communication prevents confusion from stale data.",
        10,
        "Wait for the vendor to confirm restoration and automatically re-run the batch processing before taking any action.",
        "Assumes vendor will restore in time and processing will complete correctly; passive approach may leave morning unprepared.",
        5,
        "Manually calculate and post critical transactions overnight to ensure key accounts are accurate for tomorrow.",
        "Manual posting without vendor coordination creates reconciliation complexity and potential duplicate transactions.",
        -5,
        "Keep branches closed tomorrow until batch processing is confirmed complete to avoid serving customers with incorrect data.",
        "Branch closure is operationally significant; many transactions can proceed with appropriate caution and communication.",
        -5
      )),
    q("IT/Security", "The vendor brings systems back online at 6 PM, but warns that transaction timestamps may show incorrect times due to queue processing. They recommend accepting this rather than delaying restoration further. What approach is most appropriate?",
      buildChoices(
        "Accept restoration with timestamp anomalies, document the known issues, prepare reconciliation procedures, and brief operations teams on what to expect.",
        "Getting services restored outweighs timestamp accuracy; documentation and preparation manages downstream impact.",
        10,
        "Request the vendor correct timestamps before full restoration, even if it adds several more hours of downtime.",
        "Timestamp accuracy has value but extended outage creates more customer impact than reconcilable data issues.",
        5,
        "Reject the restoration until the vendor provides a full quality certification that all data is accurate.",
        "Quality standards are important but vendor certifications during crisis recovery are often incomplete; practical acceptance with monitoring is appropriate.",
        -5,
        "Accept restoration but don't document the timestamp issues to avoid creating evidence of known problems.",
        "Failure to document creates larger problems; known issues need tracking for reconciliation and audit purposes.",
        -5
      )),
    q("IT/Security", "During the outage, you implemented manual workarounds including paper-based transaction logs at branches. Now you need to enter 847 manual transactions into restored systems. What approach is most appropriate?",
      buildChoices(
        "Implement controlled batch entry with dual verification, reconcile against paper logs, and flag accounts affected by manual entry for post-processing review.",
        "Controlled entry with verification minimizes errors; flagging enables targeted review; reconciliation confirms completeness.",
        10,
        "Have each branch enter their own transactions since they know the context and can resolve questions locally.",
        "Distributed entry may be faster but quality control varies by location; centralized review ensures consistency.",
        5,
        "Defer manual entry until the next business day when staff are fresh and less likely to make errors.",
        "Delay means customer accounts remain incorrect longer; errors from tired staff can be caught with verification.",
        -5,
        "Enter transactions as quickly as possible to restore account accuracy, verifying only the largest amounts.",
        "Speed without verification creates errors that may be harder to find later; all transactions warrant some review.",
        -5
      )),

    // HR
    q("HR", "It's now 7 PM and branch staff have been handling frustrated customers with limited system access for 9 hours. Managers report some employees are near breakdown. What approach is most appropriate?",
      buildChoices(
        "Authorize extended break periods, bring in evening shift coverage where available, and provide explicit permission for managers to send severely stressed employees home with pay.",
        "Staff welfare and customer service both suffer from exhausted employees; flexible coverage options address both.",
        10,
        "Keep all staff on site since the outage might resolve soon and you'll need everyone to handle the backlog.",
        "Anticipating quick resolution has already proved wrong; exhausted staff provide poor service and may need recovery time.",
        5,
        "Close branches early and ask customers to return tomorrow when systems should be working.",
        "Early closure may be necessary but should be coordinated with customer communication and consider customers who need services.",
        -5,
        "Tell managers their teams need to push through since everyone is dealing with the same difficult situation.",
        "Pushing through ignores individual limits and may result in inappropriate customer interactions or staff departures.",
        -5
      )),
    q("HR", "Several employees have posted on social media about the outage, including complaints about vendor quality and speculation about whether the bank might switch providers. What approach is most appropriate?",
      buildChoices(
        "Remind all staff of social media policies through managers, request removal of speculation about vendor decisions, but allow general acknowledgment that the day was difficult.",
        "Policy reminder addresses problematic content; allowing general expression acknowledges legitimate frustration.",
        10,
        "Require all employees to remove any posts mentioning the bank or the outage to eliminate any possible issues.",
        "Complete removal is overreaching; employees can discuss their employer within limits; aggressive policy damages morale.",
        5,
        "Take no action since employees have free speech rights and the posts are generally accurate about what happened.",
        "Accuracy doesn't determine appropriateness; speculation about vendor decisions is problematic regardless of outage facts.",
        -5,
        "Identify employees who posted and add documentation to their files for the policy violation.",
        "Documentation without conversation is punitive; most violations during crisis are frustration-driven and warrant guidance.",
        -5
      )),
    q("HR", "The contact center handled 400% normal call volume today with hold times exceeding 45 minutes. Several agents quit mid-shift. What approach is most appropriate?",
      buildChoices(
        "Document the departures, reach out to former employees to understand their concerns, and implement immediate support measures for remaining staff.",
        "Understanding departure reasons prevents additional losses; support for remaining staff addresses their similar concerns.",
        10,
        "Immediately begin recruiting replacements to restore contact center capacity as quickly as possible.",
        "Replacement recruiting is needed but doesn't address conditions that caused departures; remaining staff need attention first.",
        5,
        "Accept the departures as unfortunate but understandable given the extreme circumstances.",
        "Acceptance without action ignores the signal; conditions that drove departures will affect remaining staff.",
        -5,
        "Suspend any disciplinary action against agents who quit without notice given the extenuating circumstances.",
        "Discipline isn't the issue; employees who quit mid-shift during crisis are unlikely to return regardless of policy.",
        -5
      )),

    // Finance
    q("Finance", "Treasury can't access real-time position information due to the outage. A large wire transfer request comes in that would normally be routine, but you can't verify current balances. What approach is most appropriate?",
      buildChoices(
        "Use the most recent confirmed position data plus a conservative buffer for known pending items to make the funding decision, documenting the basis.",
        "Decision can proceed with documented reasoning; conservative approach with buffer addresses uncertainty appropriately.",
        10,
        "Approve the wire based on your knowledge that this customer maintains balances well above the requested amount.",
        "Knowledge-based approval may be accurate but lacks documentation; outages require more formal decision support.",
        5,
        "Decline the wire until system access is restored and you can verify the exact balance.",
        "Decline damages customer relationship and may cause them harm if funds are needed; uncertainty can be managed.",
        -5,
        "Contact the vendor to request emergency read-only access to the customer's balance information.",
        "Vendor is focused on restoration; request for individual account access during system outage is unlikely to succeed.",
        -5
      )),
    q("Finance", "The CFO asks for a preliminary estimate of outage costs for a board update tomorrow. The outage is still ongoing and you have incomplete information. What approach is most appropriate?",
      buildChoices(
        "Provide a framework showing cost categories (overtime, fee waivers, potential customer remediation) with preliminary ranges and clear caveats about estimate uncertainty.",
        "Framework with ranges provides useful structure while acknowledging uncertainty; board can assess scale without false precision.",
        10,
        "Decline to estimate until the outage concludes and you can calculate actual costs with accuracy.",
        "Accuracy is valuable but board needs some context for the situation; declining leaves them without decision-relevant information.",
        5,
        "Provide a single best estimate based on similar past incidents to give the board a number they can plan against.",
        "Single point estimate implies precision that doesn't exist; this outage's costs may differ significantly from past events.",
        -5,
        "Include estimates for potential litigation and regulatory fines in the total to ensure the board understands worst case.",
        "Premature inclusion of speculative costs may alarm the board unnecessarily; focus on known and likely costs.",
        -5
      )),
    q("Finance", "The vendor contract includes service level agreements with financial penalties for downtime. The outage appears to trigger significant SLA credits. What approach is most appropriate?",
      buildChoices(
        "Document all SLA-relevant metrics carefully during the outage, review contract terms with counsel, and prepare a claim package once the incident concludes.",
        "Real-time documentation is crucial for claims; legal review ensures you understand your rights; patience avoids premature disputes.",
        10,
        "Contact the vendor account executive immediately to put them on notice that you expect full SLA credits for the outage.",
        "Notice is appropriate but immediate escalation during active incident may distract vendor from restoration efforts.",
        5,
        "Waive SLA credits in exchange for the vendor's commitment to prioritize your restoration and prevent future occurrences.",
        "Waiving contractual rights without consideration undermines your position; prevention commitments are difficult to enforce.",
        -5,
        "Begin calculating credits in real-time and send hourly updates to the vendor to pressure faster restoration.",
        "Pressure tactics during active incident are counterproductive; vendor is already motivated to restore service.",
        -5
      )),

    // Loans
    q("Loans", "A commercial borrower has a loan closing scheduled today with time-sensitive real estate involved. Without core system access, you can't complete final verification or book the loan. What approach is most appropriate?",
      buildChoices(
        "Contact the borrower and their attorney to explain the situation, explore whether closing can be delayed briefly, and discuss options if delay isn't possible.",
        "Direct communication allows joint problem-solving; borrower input on their constraints helps identify workable solutions.",
        10,
        "Proceed with closing using available documentation and complete system booking when access is restored.",
        "Closing without verification creates risk; if issues emerge post-closing, remediation is more complex.",
        5,
        "Decline to close today and reschedule for when systems are confirmed operational.",
        "Unilateral rescheduling may cause borrower harm if their timeline is inflexible; they should be part of the decision.",
        -5,
        "Have the borrower sign acknowledgment of system issues and accept the loan anyway at their own risk.",
        "Risk transfer to borrower is inappropriate; bank's operational issues shouldn't become customer's problem.",
        -5
      )),
    q("Loans", "Rate locks for several mortgage customers expire today. Without system access, you can't verify current rates or extend locks through normal processes. What approach is most appropriate?",
      buildChoices(
        "Document all expiring locks, communicate with affected borrowers about the situation, and commit to honoring locked rates once systems restore.",
        "Documentation preserves information; proactive communication manages expectations; commitment protects customer interests.",
        10,
        "Extend all expiring locks automatically for 7 days to provide buffer regardless of individual customer situations.",
        "Extension is protective but blanket approach may create issues for customers whose situations have changed.",
        5,
        "Let locks expire and offer affected customers the better of their locked rate or today's rate when systems restore.",
        "Expiration followed by make-good is acceptable but creates customer anxiety; proactive extension is cleaner.",
        -5,
        "Advise customers their locks expired due to vendor issues and they'll need to work with current market rates.",
        "Blaming vendor while harming customers damages relationships; operational issues are the bank's responsibility to manage.",
        -5
      )),
    q("Loans", "The loan servicing queue shows multiple payments due today that can't be processed. Without posting, customers may be reported as late or assessed fees when systems restore. What approach is most appropriate?",
      buildChoices(
        "Document payments received today through all available channels, waive any fees resulting from processing delays, and suppress negative credit reporting for affected payments.",
        "Documentation ensures no payments are lost; fee waiver and reporting protection address customer harm from bank's operational issue.",
        10,
        "Post payments manually into the system as soon as it restores, backdating to today's date to reflect actual receipt.",
        "Manual posting may work but backdating could create audit issues; formal process for outage-related entries is cleaner.",
        5,
        "Process payments with tomorrow's date and explain to customers that system limitations required the adjustment.",
        "Next-day dating may create late payment situations for some customers; they shouldn't bear consequences of operational issues.",
        -5,
        "Send a mass communication warning customers that payments may be delayed and they should verify posting when systems restore.",
        "Communication has value but puts burden on customers to follow up; bank should proactively address any discrepancies.",
        -5
      )),

    // Accounting
    q("Accounting", "Month-end close is tomorrow and the outage has disrupted multiple reconciliation processes. Controllers ask whether to request an extension from auditors. What approach is most appropriate?",
      buildChoices(
        "Assess which reconciliations can proceed with available data, identify gaps that require system access, and communicate specific impact and timeline to auditors.",
        "Specific impact assessment enables targeted extension requests; auditors appreciate clarity about what's affected versus routine delays.",
        10,
        "Request a blanket 5-day extension for all close processes to ensure adequate time regardless of when systems restore.",
        "Blanket extension may be more than needed and raises auditor questions; specific requests tied to actual impact are cleaner.",
        5,
        "Proceed with close as scheduled using whatever data is available, noting limitations in reconciliation documentation.",
        "Proceeding with incomplete data creates accuracy risk; better to document constraints and adjust timeline appropriately.",
        -5,
        "Inform auditors you'll update them once the situation clarifies rather than speculating about impact.",
        "Auditors need timely information to plan their work; vague updates without timeline create uncertainty.",
        -5
      )),
    q("Accounting", "When systems restore, you discover that some transactions posted multiple times due to retry logic during the outage. Affected accounts show inflated balances. What approach is most appropriate?",
      buildChoices(
        "Identify all duplicate transactions systematically, reverse the duplicates with documented justification, and verify corrected balances match source records.",
        "Systematic identification catches all duplicates; documented reversals create audit trail; verification confirms accuracy.",
        10,
        "Contact affected customers to confirm which transactions are legitimate and reverse based on their feedback.",
        "Customer confirmation is helpful for some situations but places burden on them; internal records should be sufficient for duplicates.",
        5,
        "Reverse any transaction that posted multiple times, keeping only the first occurrence based on timestamp.",
        "First occurrence logic may not be accurate if timestamps are unreliable; each duplicate needs individual verification.",
        -5,
        "Leave duplicate transactions in place temporarily to avoid making changes while the situation is still unstable.",
        "Delay in correction means incorrect balances persist; customers may take actions based on inflated amounts.",
        -5
      )),
    q("Accounting", "Regulatory reports that rely on system-generated data were due today. Without system access, you can't generate or validate the required reports. What approach is most appropriate?",
      buildChoices(
        "Contact the relevant regulatory body to explain the situation, request a brief extension, and provide a timeline for submission based on expected system restoration.",
        "Proactive regulatory communication is expected during operational incidents; extension request with timeline demonstrates responsible management.",
        10,
        "Submit reports using the most recent available data with a cover note explaining they may require amendment.",
        "Submission with caveats may satisfy timing but creates amendment complexity; extension is cleaner if available.",
        5,
        "Wait until systems restore and submit reports as soon as possible, explaining the delay was beyond your control.",
        "Waiting without communication may appear evasive; regulators expect proactive notification of compliance challenges.",
        -5,
        "Generate reports manually using available records to meet the deadline regardless of data completeness.",
        "Manual reports with incomplete data may contain errors that create larger compliance issues than a brief delay.",
        -5
      )),

    // Deposits
    q("Deposits", "Customers at branches are frustrated that tellers can't see account balances or process transactions. Some threaten to close accounts and move to competitors. What approach is most appropriate?",
      buildChoices(
        "Acknowledge the frustration sincerely, explain what you can do (verify identity, document requests), provide realistic timeline expectations, and offer to follow up personally.",
        "Acknowledgment validates frustration; explaining available options helps; personal follow-up commitment shows you value the relationship.",
        10,
        "Offer service credits or fee waivers to affected customers to compensate for the inconvenience.",
        "Credits have value but may not address the immediate frustration; some customers need services more than compensation.",
        5,
        "Explain that the vendor caused the problem and the bank is doing everything possible to restore service.",
        "Vendor explanation may be accurate but customers don't care about internal responsibility; they want their needs addressed.",
        -5,
        "Suggest customers try online banking or mobile app since those channels might have more current information.",
        "Suggestion is unhelpful if those channels are also affected; may come across as deflecting rather than helping.",
        -5
      )),
    q("Deposits", "A business customer needs to make payroll today and can't access their account to initiate the ACH. Their employees depend on receiving funds. What approach is most appropriate?",
      buildChoices(
        "Work with the customer to understand the exact amount and timing needed, explore alternative payment methods, and document commitments so funds move as soon as systems allow.",
        "Understanding their specific need enables targeted solutions; alternative methods may address urgency; documentation ensures follow-through.",
        10,
        "Process a cash advance against their account to give them funds to make payroll through other means.",
        "Cash advance addresses immediate need but creates reconciliation complexity and assumes account has sufficient funds.",
        5,
        "Apologize but explain that payroll processing requires system access that isn't currently available.",
        "Accurate but unhelpful; business customer with payroll emergency needs solutions, not explanations of constraints.",
        -5,
        "Suggest they contact their employees to explain the delay is due to bank system issues.",
        "Shifts burden to customer to manage their employees' expectations about a problem the bank caused.",
        -5
      )),
    q("Deposits", "When systems restore, you discover that ATM withdrawals during the outage weren't properly logged. An unknown amount of cash was dispensed without corresponding debits. What approach is most appropriate?",
      buildChoices(
        "Work with ATM vendor to retrieve transaction logs from ATM terminals, reconcile against cash counts, and post transactions using available data with documented methodology.",
        "Terminal logs provide backup data; reconciliation identifies discrepancies; documented methodology supports audit trail.",
        10,
        "Estimate withdrawals based on typical ATM patterns and average transaction amounts, posting estimated debits.",
        "Estimates may be reasonable but lack precision; actual data from terminals should be available and is preferable.",
        5,
        "Wait for customers to report discrepancies rather than attempting to reconstruct transactions from incomplete data.",
        "Waiting shifts burden to customers and may result in some never reporting; proactive reconciliation is appropriate.",
        -5,
        "Absorb the cash shortage as an outage cost rather than attempting to identify and debit individual customer accounts.",
        "Absorption may seem easier but fails to maintain account accuracy; customers may be surprised by later debits when records reconcile.",
        -5
      )),
  ]
};

const SCENARIO_COORDINATED_ATTACK = {
  key: "coordinated-multi-vector-attack",
  title: "Coordinated Multi-Vector Attack with Insider Compromise",
  description:
    "A sophisticated threat actor executes a coordinated attack: social engineering compromises a senior operations manager's credentials, a DDoS attack masks data exfiltration, and physical access badges for three terminated employees are used at branch locations simultaneously. Forensics discovers the compromised manager had access to wire transfer approval systems, and suspicious transfers totaling $4.7M were initiated during the attack window. Law enforcement contacts you—they're investigating the same threat group in connection with attacks on two other regional banks.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "Law enforcement asks you to delay notifying affected customers while their investigation proceeds. Your legal team notes potential notification deadline conflicts. What approach is most appropriate?",
      buildChoices(
        "Explain regulatory notification obligations to law enforcement, propose coordinated timing that satisfies both investigative needs and compliance requirements, and document all communications.",
        "Balances cooperation with compliance; documented coordination protects the bank if timing decisions are later questioned.",
        10,
        "Defer to law enforcement's timeline since obstructing an active investigation could have serious consequences for the bank.",
        "Cooperation is important but regulatory notification deadlines exist independently; missing them creates separate liability.",
        5,
        "Immediately proceed with customer notifications regardless of law enforcement request to ensure full regulatory compliance.",
        "Compliance focus is understandable but unilateral action may compromise the investigation and damage the law enforcement relationship.",
        -5,
        "Request written confirmation from law enforcement that they'll indemnify the bank for any regulatory penalties from delayed notification.",
        "Indemnification request is unrealistic and may appear to prioritize liability management over cooperation or customer protection.",
        -5
      )),
    q("CEO/SVPs", "The compromised operations manager has been with the bank for 18 years and insists they were victimized, not complicit. Their family has called board members directly. How should leadership handle this situation?",
      buildChoices(
        "Place the employee on paid administrative leave pending investigation, ensure they have access to EAP resources, and instruct board members to refer all contacts to the designated spokesperson.",
        "Preserves investigation integrity while treating a potentially innocent employee fairly; clear communication protocols prevent well-meaning interference.",
        10,
        "Terminate the employee immediately given the severity of the incident and the need to demonstrate accountability to regulators.",
        "Swift action shows decisiveness but may be premature if the employee is genuinely a victim; termination doesn't preclude their cooperation.",
        5,
        "Allow the employee to continue working with enhanced monitoring to observe their behavior and gather additional evidence.",
        "Continued access creates ongoing risk; the employee's accounts are already compromised and monitoring may not detect all activity.",
        -5,
        "Have board members respond compassionately to the family's concerns while sharing that an investigation is underway.",
        "Compassionate response is humane but board member communications outside formal channels creates governance and legal risks.",
        -5
      )),
    q("CEO/SVPs", "Two other regional banks attacked by the same threat group are proposing a joint press conference to demonstrate industry coordination. Your communications team is divided on participation. What approach is most appropriate?",
      buildChoices(
        "Participate with carefully prepared talking points focused on customer protection and industry resilience, avoiding any discussion of specific vulnerabilities or investigation details.",
        "Joint response demonstrates industry maturity and shared commitment to security; controlled messaging prevents disclosure of sensitive details.",
        10,
        "Decline participation but issue a supportive statement, allowing the other banks to lead while you maintain independent communication control.",
        "Independence is preserved but absence from joint effort may appear as though your bank has something additional to hide.",
        5,
        "Propose delaying the press conference until all three banks have completed their forensic investigations to ensure accurate information.",
        "Delay may be prudent technically but extended silence fuels speculation; public expects acknowledgment and action, not perfection.",
        -5,
        "Suggest the banks hire a joint crisis communications firm to manage all external messaging and present a unified industry front.",
        "Unified messaging sounds efficient but cedes control of your narrative to a third party and creates coordination complexity.",
        -5
      )),

    // IT/Security
    q("IT/Security", "Forensics reveals the DDoS attack originated from a botnet, but some attack traffic came from IP ranges belonging to your own customers' corporate networks—likely compromised. What approach is most appropriate?",
      buildChoices(
        "Privately notify affected corporate customers about the potential compromise of their networks, offer assistance, and coordinate with them on remediation while preserving evidence.",
        "Customer notification addresses their security issue and builds relationship; private approach avoids embarrassment while enabling coordinated response.",
        10,
        "Block all traffic from the suspected customer IP ranges to protect the bank, then notify customers that their access has been restricted.",
        "Blocking stops the immediate threat but punishes potentially innocent customers and may disrupt their banking operations.",
        5,
        "Report the customer IP addresses to law enforcement and let them handle notification to avoid interfering with the investigation.",
        "Law enforcement handoff is appropriate for the investigation but customers have an independent need to know their networks may be compromised.",
        -5,
        "Implement rate limiting on the suspected IP ranges without notification to reduce attack impact while avoiding difficult conversations.",
        "Rate limiting addresses symptoms but leaves customers unaware their networks are compromised and may be attacking other targets.",
        -5
      )),
    q("IT/Security", "The physical badges used belonged to employees terminated 6, 9, and 14 months ago. Badge deactivation records show the badges were processed for deactivation but the access control system wasn't updated. What approach is most appropriate?",
      buildChoices(
        "Immediately audit all terminated employee badges against the access control system, implement a reconciliation process, and investigate the root cause of the synchronization failure.",
        "Comprehensive audit addresses the immediate gap; process improvement prevents recurrence; root cause investigation may reveal additional issues.",
        10,
        "Deactivate all badges issued more than 12 months ago and require re-issuance to ensure only current employees have valid credentials.",
        "Mass re-issuance is thorough but creates significant operational disruption and doesn't address the underlying process failure.",
        5,
        "Focus the investigation on the three specific badges used in the attack since those represent the confirmed vulnerability.",
        "Narrow focus addresses known gaps but identical issues likely exist for other terminated employees; broader audit is necessary.",
        -5,
        "Implement dual-authentication for all branch access requiring both badge and PIN to compensate for the badge management gap.",
        "Dual-auth improves security but doesn't address the existing population of valid badges held by unauthorized individuals.",
        -5
      )),
    q("IT/Security", "The suspicious wire transfers were initiated using the compromised manager's credentials but approved by a second authorized user who claims they followed standard verification procedures. What approach is most appropriate?",
      buildChoices(
        "Review all verification procedures used, interview the approving user to understand what information led them to approve, and assess whether procedures were followed correctly or are inadequate.",
        "Comprehensive review distinguishes between procedure failure and procedure inadequacy; understanding the approval decision informs remediation.",
        10,
        "Suspend the approving user's wire transfer authority pending investigation, since they approved fraudulent transactions regardless of the reason.",
        "Suspension may be appropriate but pre-judging the user's culpability before understanding what happened may be unfair.",
        5,
        "Implement additional wire transfer controls immediately, including callback verification for all transfers over $100K.",
        "Enhanced controls are prudent but implementing them without understanding the current failure may not address the actual vulnerability.",
        -5,
        "Accept that the approving user followed procedures and focus investigation on how the attacker obtained sufficient information to pass verification.",
        "Attacker methodology matters but accepting procedure compliance without verification may miss an insider threat or procedure gap.",
        -5
      )),

    // HR
    q("HR", "An anonymous tip suggests a current employee in branch operations may have provided the terminated employee badges to the attackers. The tipster refuses to identify themselves further. What approach is most appropriate?",
      buildChoices(
        "Document the tip, discreetly review badge custody records and access logs, and consult with legal on investigation approach before interviewing any employees.",
        "Methodical approach gathers evidence before alerting potential suspects; legal consultation ensures investigation is conducted properly.",
        10,
        "Interview all branch operations employees who had access to terminated employee badges to assess their reactions and gather information.",
        "Broad interviews may surface information but also alert the potential accomplice, allowing evidence destruction or coordination with attackers.",
        5,
        "Dismiss the anonymous tip since unverified allegations shouldn't drive HR investigations that could damage innocent employees' reputations.",
        "Protecting reputations is important but dismissing relevant tips during an active attack investigation may miss a serious insider threat.",
        -5,
        "Immediately place all employees with badge custody access on administrative leave while the investigation proceeds.",
        "Mass leave is disruptive and may punish innocent employees; targeted investigation based on evidence is more appropriate.",
        -5
      )),
    q("HR", "The compromised operations manager's colleagues are split—some believe they were victimized, others suspect complicity. Team dynamics are deteriorating and affecting work quality. What approach is most appropriate?",
      buildChoices(
        "Acknowledge the difficulty of the situation without prejudging the investigation outcome, reinforce behavioral expectations, and provide team support resources while work continues.",
        "Balanced acknowledgment validates emotions while maintaining expectations; team support addresses the underlying stress.",
        10,
        "Separate the manager's direct team members and redistribute them to prevent continued conflict and rumor circulation.",
        "Separation stops immediate conflict but may be disruptive and could be seen as punishing the team for expressing opinions.",
        5,
        "Share investigation updates with the team to address speculation and allow them to form informed opinions about their colleague.",
        "Transparency has value but sharing investigation details with colleagues is inappropriate and could compromise the investigation.",
        -5,
        "Warn employees that continued speculation about a colleague could constitute harassment and will result in disciplinary action.",
        "Discipline threats during a traumatic situation may suppress necessary discussion and damage trust in HR.",
        -5
      )),
    q("HR", "Law enforcement wants to interview several employees, including some who weren't directly involved but may have observed suspicious behavior. Employees ask if they need to cooperate. What approach is most appropriate?",
      buildChoices(
        "Explain that cooperation is voluntary but encouraged, offer to have counsel available during interviews, and reassure employees they won't face retaliation for participating.",
        "Balanced guidance respects employee rights while encouraging cooperation; counsel availability and non-retaliation assurance address employee concerns.",
        10,
        "Direct all employees to cooperate fully with law enforcement to demonstrate the bank's commitment to the investigation.",
        "Cooperation is valuable but directing employees to waive their rights may create liability; the decision should be theirs.",
        5,
        "Advise employees to decline interviews until they've consulted with personal attorneys given the potential legal implications.",
        "Personal counsel is employees' right but actively discouraging cooperation may appear obstructive and damage the investigation.",
        -5,
        "Tell employees that the bank's legal team will represent their interests during law enforcement interviews.",
        "Bank counsel represents the bank, not individual employees; creating this impression may lead to conflicts and employee harm.",
        -5
      )),

    // Finance
    q("Finance", "Of the $4.7M in suspicious transfers, $3.1M has been frozen by correspondent banks. The remaining $1.6M was withdrawn before holds could be placed. Insurance coverage is disputed. What approach is most appropriate?",
      buildChoices(
        "Document all recovery efforts meticulously, work with correspondents to formalize the frozen funds return, engage insurance with detailed claim support, and reserve appropriately for the potential loss.",
        "Comprehensive approach maximizes recovery while appropriately recognizing the loss; documentation supports insurance negotiations.",
        10,
        "Focus recovery efforts on the $3.1M frozen funds since that has the highest likelihood of success, accepting the $1.6M as a likely loss.",
        "Prioritization is reasonable but abandoning the $1.6M prematurely may foreclose recovery options that develop as the investigation proceeds.",
        5,
        "Aggressively dispute the insurance coverage denial since the bank pays significant premiums for exactly this type of loss.",
        "Dispute is appropriate but aggressive posture early may damage the relationship; documented claim support is more effective.",
        -5,
        "Book the entire $4.7M as a loss immediately to present a conservative position to auditors and regulators.",
        "Conservative accounting is prudent but writing off recoverable funds creates unnecessary earnings impact; reserved approach is more appropriate.",
        -5
      )),
    q("Finance", "Regulators request documentation of wire transfer controls as they existed at the time of the attack. The documentation reveals the bank was not fully compliant with recent guidance on dual-control requirements. What approach is most appropriate?",
      buildChoices(
        "Provide the documentation as requested, acknowledge the compliance gap proactively, present the remediation plan already underway, and accept responsibility for the deficiency.",
        "Transparent acknowledgment with remediation demonstrates accountability; proactive disclosure is better than regulator discovery.",
        10,
        "Provide the documentation and wait to see if regulators identify the compliance gap before volunteering information about deficiencies.",
        "Responsive but not proactive approach may work but appears less accountable if regulators discover the gap independently.",
        5,
        "Delay the documentation request while updating procedures to reflect current controls, then provide documentation showing compliance.",
        "Documentation tampering or misrepresentation to regulators creates serious legal and regulatory risk far exceeding the original deficiency.",
        -5,
        "Explain that the compliance gap was scheduled for remediation in the next quarter and the attack occurred before planned improvements were implemented.",
        "Timeline explanation provides context but may appear to excuse non-compliance; accountability focus is more appropriate.",
        -5
      )),
    q("Finance", "The CFO is preparing for an earnings call scheduled in 5 days. The incident is material but the investigation is incomplete. Analysts will likely ask questions. What approach is most appropriate?",
      buildChoices(
        "Prepare disclosure language acknowledging the incident, describing known financial impacts and remediation status, with appropriate forward-looking statement caveats about investigation uncertainties.",
        "Balanced disclosure addresses materiality requirements while caveats protect against claims of incomplete information.",
        10,
        "Postpone the earnings call until the investigation reaches a more conclusive state to avoid disclosing incomplete information.",
        "Postponement signals significant concern and may increase speculation; disclosed uncertainties are preferable to silence.",
        5,
        "Focus the earnings discussion on operational and financial performance, addressing the incident only if analysts raise it directly.",
        "Reactive approach may appear as minimization if the incident is material; proactive acknowledgment is more appropriate.",
        -5,
        "Provide maximum possible detail about the attack to demonstrate transparency and get all bad news out at once.",
        "Maximum detail may compromise the investigation and include speculation that requires later correction; measured disclosure is better.",
        -5
      )),

    // Loans
    q("Loans", "The compromised operations manager had approval authority for commercial loan modifications. Forensics is reviewing whether any unauthorized modifications were made. Commercial clients are asking about their loan terms. What approach is most appropriate?",
      buildChoices(
        "Acknowledge the review is underway, confirm clients' current terms of record, commit to notifying them promptly if any discrepancies are found, and document all client communications.",
        "Transparent acknowledgment with current state confirmation addresses immediate client needs; commitment to follow-up maintains trust.",
        10,
        "Wait until forensic review is complete before communicating with commercial clients to avoid creating unnecessary concern.",
        "Avoiding premature concern is reasonable but clients asking questions deserve honest responses about the current situation.",
        5,
        "Proactively contact all commercial clients whose loans the manager had authority over to review their current terms and satisfaction.",
        "Proactive outreach is customer-focused but may create alarm for clients who weren't impacted; targeted review is more efficient.",
        -5,
        "Assure clients that the attack targeted wire transfers and loan records were not affected, based on current investigation findings.",
        "Premature assurance creates risk if later findings contradict; acknowledging the review is more appropriate than early conclusions.",
        -5
      )),
    q("Loans", "A major commercial borrower hears about the attack through media coverage and calls demanding assurance that their confidential financial information wasn't accessed. Their renewal is pending. What approach is most appropriate?",
      buildChoices(
        "Have a senior relationship manager explain what's known about data access, acknowledge what's still under investigation, and commit to prompt notification if their data was specifically compromised.",
        "Direct communication at appropriate level addresses the relationship; honest acknowledgment of investigation status maintains credibility.",
        10,
        "Provide written assurance that their specific loan file was not accessed, based on current forensic findings.",
        "Written assurance creates exposure if later findings contradict; verbal communication with appropriate caveats is preferable.",
        5,
        "Escalate the concern to legal to ensure any response is properly crafted given the pending renewal and potential liability.",
        "Legal involvement may be appropriate but customer perceives delay; relationship manager response with legal guidance is more responsive.",
        -5,
        "Offer favorable renewal terms to maintain the relationship and demonstrate the bank's commitment despite the incident.",
        "Favorable terms may appear as inducement to overlook the incident; addressing the actual concern is more appropriate.",
        -5
      )),
    q("Loans", "The loan operations team discovers that during the attack window, three loan payoff calculations were generated and sent to closing attorneys. The calculations may have used compromised data. What approach is most appropriate?",
      buildChoices(
        "Immediately regenerate all three payoff calculations using verified data, compare to originals, notify attorneys and customers of any discrepancies, and document the review process.",
        "Prompt verification and notification addresses potential customer harm; documentation supports audit trail and any needed corrections.",
        10,
        "Contact the closing attorneys to ask them to hold closings pending verification of payoff accuracy.",
        "Holding closings prevents harm but attorneys may have already disbursed; direct customer notification may also be needed.",
        5,
        "Review the calculations internally and only notify if discrepancies are found to avoid creating unnecessary alarm.",
        "Efficiency-focused but customers and attorneys deserve to know the calculations are being verified given the attack context.",
        -5,
        "Accept the calculations as issued since the compromise affected wire transfers and there's no evidence loan systems were impacted.",
        "Assumption of no impact may be incorrect; any data generated during the attack window should be verified.",
        -5
      )),

    // Accounting
    q("Accounting", "External auditors request documentation of all transactions approved by the compromised manager during the past 12 months, not just the attack window. The request will require significant resources to fulfill. What approach is most appropriate?",
      buildChoices(
        "Acknowledge the request's scope, provide a realistic timeline for compilation, assign dedicated resources, and keep auditors informed of progress while prioritizing incident response.",
        "Reasonable engagement with auditor request while managing resource constraints; transparency about timeline maintains relationship.",
        10,
        "Push back on the scope as overly broad given that the attack window was limited to 48 hours.",
        "Scope limitation is defensible but auditors may have legitimate concerns about earlier compromises; cooperation is preferable.",
        5,
        "Provide the documentation request to outside counsel to assess whether the bank is legally required to comply with this scope.",
        "Legal review is appropriate but may appear obstructive; auditors have broad rights during an investigation.",
        -5,
        "Deprioritize the auditor request given the active incident response and promise to address it once operations stabilize.",
        "Deprioritization may be necessary practically but should be communicated rather than implemented unilaterally.",
        -5
      )),
    q("Accounting", "The general ledger shows entries during the attack window that were approved through the compromised credentials. Some entries appear legitimate but verification is impossible without the manager's cooperation, which is limited during the investigation. What approach is most appropriate?",
      buildChoices(
        "Flag all entries approved through the compromised credentials for enhanced scrutiny, seek alternative verification sources, and reserve for potential adjustments where verification isn't possible.",
        "Systematic flagging enables tracking; alternative verification addresses the cooperation gap; reserves address uncertainty appropriately.",
        10,
        "Reverse all entries approved through the compromised credentials and re-enter them through verified approval chains.",
        "Reversal ensures clean records but may disrupt legitimate transactions and create customer impact; flagging is less disruptive.",
        5,
        "Accept entries that appear consistent with historical patterns and focus investigation resources on anomalous amounts.",
        "Pattern-based acceptance may miss sophisticated fraud designed to appear normal; comprehensive review is more appropriate.",
        -5,
        "Request the compromised manager provide written attestation of legitimate entries to expedite verification.",
        "Manager attestation during an investigation of their potential complicity has no verification value and may be unreliable.",
        -5
      )),
    q("Accounting", "The incident impacts multiple regulatory reporting deadlines. Some reports require certification of control effectiveness that cannot currently be provided with confidence. What approach is most appropriate?",
      buildChoices(
        "Contact each regulator proactively to explain the situation, request deadline extensions where available, and for required certifications, include appropriate disclosures about the incident's impact on controls.",
        "Proactive communication demonstrates responsibility; extension requests and disclosures appropriately address the control uncertainty.",
        10,
        "File all reports on time with standard certifications, then amend if the investigation reveals issues requiring disclosure.",
        "Timely filing is preferred but certifying control effectiveness you cannot verify creates personal and institutional liability.",
        5,
        "Request blanket deadline extensions for all regulatory filings until the investigation concludes and control effectiveness can be properly assessed.",
        "Blanket extensions may be excessive for reports unaffected by the incident; targeted approach is more appropriate.",
        -5,
        "Delegate report certification to personnel not involved in the investigation to maintain required filing timelines.",
        "Delegation doesn't address the underlying certification validity; signers would face the same uncertainty.",
        -5
      )),

    // Deposits
    q("Deposits", "Branch employees who witnessed the physical intrusion are being approached by media outside the building. Some have already given brief interviews describing what they saw. What approach is most appropriate?",
      buildChoices(
        "Brief all employees on media protocols, provide talking points that protect investigation details while acknowledging customer concern, and designate a spokesperson for future inquiries.",
        "Clear protocols prevent additional unauthorized disclosures; talking points enable appropriate response; spokesperson centralizes communication.",
        10,
        "Instruct employees to decline all media contact and refer inquiries to corporate communications immediately.",
        "Referral to communications is appropriate but blanket prohibition may be difficult to enforce and appears secretive.",
        5,
        "Discipline employees who gave unauthorized interviews to reinforce media protocol compliance.",
        "Discipline may be warranted eventually but immediate punishment during a traumatic situation damages morale and may surface in media coverage.",
        -5,
        "Allow employees to speak freely since attempting to control the narrative will backfire and appear like a cover-up.",
        "Open communication is valued but uncoordinated employee statements may disclose investigation details or contradict each other.",
        -5
      )),
    q("Deposits", "Customers who were in branches during the physical intrusion are demanding to know if their personal information was compromised. Several threaten to close accounts and post negative reviews. What approach is most appropriate?",
      buildChoices(
        "Have branch managers contact each affected customer personally, explain what's known about data access, offer credit monitoring if appropriate, and provide direct contact for any future concerns.",
        "Personal outreach demonstrates care; honest explanation with remediation offer addresses the concern; direct contact maintains relationship.",
        10,
        "Send a form letter to all customers who were present during the intrusion explaining the incident and offering credit monitoring.",
        "Form letter addresses the population but lacks the personal touch warranted by the traumatic experience; personal contact is better.",
        5,
        "Wait until the investigation determines what data was actually accessed before making any commitments to affected customers.",
        "Investigation completion may take time; customers experiencing uncertainty deserve timely communication even if incomplete.",
        -5,
        "Offer account closure without fees and expedited transfer services to customers who want to leave, prioritizing their wishes.",
        "Accommodation is customer-focused but leading with departure facilitation may encourage exodus; retention effort is appropriate.",
        -5
      )),
    q("Deposits", "Social media posts claim the bank 'was robbed' and 'customer data was stolen.' The posts are being widely shared and include some inaccurate details mixed with accurate observations. What approach is most appropriate?",
      buildChoices(
        "Issue a public statement acknowledging the incident occurred, correcting specific inaccuracies, explaining what's known about customer data, and committing to updates as the investigation proceeds.",
        "Direct acknowledgment addresses the public conversation; selective correction maintains credibility; commitment to updates shows ongoing engagement.",
        10,
        "Respond to individual social media posts correcting inaccuracies without issuing a broader public statement.",
        "Individual responses may be seen as defensive or incomplete; broader statement addresses the narrative more effectively.",
        5,
        "Avoid engaging with social media speculation since responding legitimizes the posts and draws more attention to them.",
        "Non-engagement allows inaccurate narrative to spread unchallenged; proactive communication is more effective.",
        -5,
        "Threaten legal action against posters spreading inaccurate information to deter continued speculation.",
        "Legal threats against customers or community members would create severe reputational damage regardless of accuracy concerns.",
        -5
      )),
  ]
};

const SCENARIO_BSA_AML_FAILURE = {
  key: "bsa-aml-systemic-failure",
  title: "Systemic BSA/AML Compliance Failure Uncovered",
  description:
    "An internal audit discovers that the bank's automated transaction monitoring system has been misconfigured for 26 months, resulting in approximately 12,000 potentially suspicious transactions that were never reviewed or filed as SARs. The failure spans retail, commercial, and wire transfer activity. Initial analysis identifies patterns consistent with structuring, potential money laundering, and transactions involving high-risk jurisdictions. FinCEN examinations are scheduled in 6 weeks, and the bank's external auditors are requesting documentation for their annual review.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "The board requests an emergency session to understand the scope. Legal counsel advises that the findings may require voluntary self-disclosure to FinCEN. What approach is most appropriate?",
      buildChoices(
        "Present the board with complete findings, explain the voluntary disclosure considerations including benefits and risks, recommend a timeline for decision, and seek board authorization for the disclosure approach.",
        "Full transparency with board enables informed governance decision; structured timeline balances urgency with deliberation; authorization ensures proper oversight.",
        10,
        "Recommend immediate voluntary disclosure to FinCEN before the board meeting to demonstrate prompt corrective action.",
        "Speed demonstrates urgency but bypassing board authorization for a material regulatory disclosure creates governance concerns.",
        5,
        "Advise waiting until the upcoming FinCEN examination to disclose the issue, since examiners will likely find it anyway.",
        "Examination timing may seem convenient but delaying disclosure of known violations significantly increases regulatory penalties.",
        -5,
        "Present the findings to the board but recommend characterizing the issue as a technical configuration matter rather than a compliance failure.",
        "Minimization may reduce immediate alarm but creates liability if the characterization doesn't hold up under regulatory scrutiny.",
        -5
      )),
    q("CEO/SVPs", "A regional newspaper receives an anonymous tip about 'compliance problems' at the bank. A reporter calls seeking comment before publication. What approach is most appropriate?",
      buildChoices(
        "Acknowledge the bank has identified areas requiring enhanced compliance attention, emphasize proactive remediation efforts, and decline to discuss regulatory matters in detail.",
        "Acknowledgment without specifics addresses the inquiry; remediation emphasis shows responsibility; declining detail protects regulatory process.",
        10,
        "Decline all comment citing ongoing regulatory matters and refer the reporter to the bank's standard media protocols.",
        "No comment is defensible but may be reported as refusal to address compliance concerns, allowing the anonymous source to shape the narrative.",
        5,
        "Provide detailed background explaining the technical nature of the monitoring system failure to demonstrate it wasn't intentional.",
        "Technical explanation may seem exculpatory but detailed disclosure before regulatory resolution could complicate that process.",
        -5,
        "Deny any significant compliance issues exist and suggest the anonymous tip may come from a disgruntled employee with inaccurate information.",
        "Denial creates credibility risk if later disclosures contradict; attacking the source appears defensive.",
        -5
      )),
    q("CEO/SVPs", "The BSA Officer submits their resignation, citing personal reasons but clearly departing due to the compliance failure on their watch. Key institutional knowledge will leave with them. What approach is most appropriate?",
      buildChoices(
        "Accept the resignation with a negotiated transition period, conduct thorough knowledge transfer sessions, engage interim expertise, and treat the departure professionally in all communications.",
        "Managed transition preserves knowledge; interim expertise maintains capability; professional treatment reduces reputational risk from disgruntled departures.",
        10,
        "Request the BSA Officer remain through the FinCEN examination to demonstrate continuity and accountability to regulators.",
        "Continuity has value but forcing someone to remain who wants to leave may affect their cooperation and examination demeanor.",
        5,
        "Accept immediate resignation to demonstrate accountability and show regulators that responsible parties face consequences.",
        "Swift departure may seem accountable but loses critical knowledge and may appear as scapegoating rather than genuine accountability.",
        -5,
        "Negotiate a separation agreement that includes non-disparagement and cooperation clauses but allows immediate departure.",
        "Non-disparagement may protect reputation but immediate departure without knowledge transfer harms remediation efforts.",
        -5
      )),

    // IT/Security
    q("IT/Security", "The monitoring system misconfiguration was caused by a software update that changed threshold parameters. The vendor claims the bank should have validated settings after the update. Change management logs are incomplete. What approach is most appropriate?",
      buildChoices(
        "Document the configuration history as completely as possible, acknowledge the change management gap, implement enhanced post-update validation procedures, and preserve all available evidence.",
        "Complete documentation supports remediation; acknowledging gaps demonstrates accountability; enhanced procedures prevent recurrence.",
        10,
        "Engage the vendor in formal dispute resolution to establish their responsibility for the configuration change.",
        "Vendor accountability may be appropriate but focusing on blame allocation delays remediation and doesn't address the bank's own control gaps.",
        5,
        "Recreate change management documentation to the extent possible based on system logs and staff recollection to fill the gaps.",
        "Documentation recreation may be appropriate if clearly labeled as reconstructed but could appear as fabricating records if not transparent.",
        -5,
        "Emphasize that the vendor's undocumented update caused the failure, positioning the bank as a victim of inadequate vendor practices.",
        "Victim positioning doesn't address the bank's validation and monitoring responsibilities; regulators expect banks to manage vendors.",
        -5
      )),
    q("IT/Security", "Forensic analysis of the 12,000 flagged transactions will take approximately 6 weeks with current resources. The FinCEN examination is in 6 weeks. What approach is most appropriate?",
      buildChoices(
        "Engage additional qualified resources to accelerate analysis, prioritize transactions by risk indicators, provide preliminary findings to examiners with clear completion timeline, and document methodology.",
        "Resource augmentation accelerates work; prioritization ensures highest-risk items reviewed first; transparency with examiners demonstrates good faith.",
        10,
        "Request FinCEN delay the examination until analysis is complete so findings can be presented comprehensively.",
        "Delay request shows desire for completeness but may signal to regulators that the bank is unprepared or trying to manage the examination.",
        5,
        "Focus resources on completing analysis of a representative sample to extrapolate findings for the full population.",
        "Sampling may be efficient but regulators may require complete analysis; sampling methodology must be defensible.",
        -5,
        "Proceed with current resources and present whatever analysis is complete at examination, noting the work is ongoing.",
        "Current pace guarantees incomplete information at examination; additional resources are warranted given the stakes.",
        -5
      )),
    q("IT/Security", "The compliance team wants to implement new monitoring software immediately to demonstrate corrective action. The IT team warns that rushed implementation could create new configuration risks. What approach is most appropriate?",
      buildChoices(
        "Implement enhanced manual review procedures immediately while conducting thorough requirements and testing for new automated monitoring, with realistic implementation timeline.",
        "Manual procedures provide immediate coverage; measured automation implementation prevents repeating the configuration error pattern.",
        10,
        "Accelerate new software implementation with extended parallel testing period to balance speed with risk mitigation.",
        "Parallel testing is prudent but accelerated timelines may not allow adequate validation, potentially repeating the original problem.",
        5,
        "Implement the new software quickly since the risk of continued monitoring gaps outweighs implementation risks.",
        "Speed priority may seem responsive but rushed implementation could create new compliance gaps or data integrity issues.",
        -5,
        "Defer any system changes until after the FinCEN examination to avoid complicating the examination scope.",
        "Deferral may simplify examination but failing to demonstrate corrective action shows lack of urgency about the underlying problem.",
        -5
      )),

    // HR
    q("HR", "Several compliance analysts report they raised concerns about unusual monitoring system behavior months ago but were told to focus on their assigned cases. Staff fear retaliation for speaking up now. What approach is most appropriate?",
      buildChoices(
        "Document all reported concerns with dates and recipients, interview involved staff with non-retaliation protections, assess whether escalation channels failed, and communicate findings to leadership.",
        "Documenting history establishes timeline; protected interviews surface facts; escalation assessment identifies systemic issues; leadership awareness enables response.",
        10,
        "Acknowledge the concerns and assure staff that everyone who raised issues will be protected from any negative consequences.",
        "Protection assurance is important but blanket promises without investigation may be premature; documented process is more credible.",
        5,
        "Focus the investigation on the technical configuration failure rather than whether staff concerns were appropriately addressed.",
        "Technical focus may seem efficient but ignoring the escalation failure misses an important cultural and control issue.",
        -5,
        "Identify managers who dismissed analyst concerns and initiate performance management processes for their failure to escalate.",
        "Accountability may be appropriate but rushing to discipline before understanding the full context may be unfair and chill future reporting.",
        -5
      )),
    q("HR", "The bank needs to hire additional compliance staff quickly to support remediation, but the job market is competitive and the compliance failure may become public. What approach is most appropriate?",
      buildChoices(
        "Develop compelling job descriptions emphasizing the opportunity to lead remediation efforts, offer competitive compensation, and be transparent with candidates about the situation they're entering.",
        "Opportunity framing attracts problem-solvers; competitive compensation addresses market; transparency builds trust and screens for appropriate candidates.",
        10,
        "Engage specialized compliance staffing firms with confidentiality agreements to quietly recruit experienced professionals.",
        "Staffing firms are appropriate but confidentiality focus may backfire if candidates learn of the situation after accepting.",
        5,
        "Delay hiring until after the situation stabilizes to avoid bringing new staff into a crisis environment.",
        "Delay leaves remediation understaffed; experienced compliance professionals often prefer challenging environments with growth opportunity.",
        -5,
        "Hire quickly with significant sign-on bonuses and worry about retention once the immediate crisis passes.",
        "Bonuses may attract candidates but hiring without transparency about the situation creates turnover risk when they discover the reality.",
        -5
      )),
    q("HR", "A compliance manager asks whether they should retain personal legal counsel given the regulatory investigation. Other staff are concerned about individual liability. What approach is most appropriate?",
      buildChoices(
        "Explain that employees have the right to personal counsel, clarify what the bank's counsel can and cannot advise on, and describe circumstances where individual representation may be appropriate.",
        "Clear guidance respects employee rights while providing helpful information; appropriate boundaries protect both employees and the bank.",
        10,
        "Offer to have the bank's legal counsel meet with concerned employees to address their questions about the investigation.",
        "Bank counsel meeting may be helpful but employees should understand that bank counsel represents the bank, not individuals.",
        5,
        "Discourage personal legal counsel since it suggests employees have something to hide and may complicate the bank's response.",
        "Discouraging counsel interferes with employee rights and may create liability; employees should make their own decisions.",
        -5,
        "Advise all compliance staff to obtain personal legal counsel immediately given the serious nature of the regulatory matter.",
        "Blanket advice may be premature and alarming; individual circumstances vary and mass counsel retention may appear defensive.",
        -5
      )),

    // Finance
    q("Finance", "External auditors request all documentation related to the monitoring system configuration and the 12,000 flagged transactions. They indicate this may affect their audit opinion. What approach is most appropriate?",
      buildChoices(
        "Provide all requested documentation promptly, schedule meetings to walk auditors through findings and remediation plans, and discuss potential audit opinion implications transparently.",
        "Prompt documentation demonstrates cooperation; walk-through meetings build understanding; transparent discussion enables planning for potential outcomes.",
        10,
        "Provide documentation but request auditors defer opinion considerations until remediation is further along and the regulatory outcome is clearer.",
        "Deferral request is understandable but auditors have independent obligations; attempting to influence timing may raise concerns.",
        5,
        "Have legal counsel review all documentation before providing to auditors to ensure nothing is shared that could create additional liability.",
        "Legal review may be appropriate but shouldn't significantly delay production; auditors have broad access rights.",
        -5,
        "Provide summary documentation and offer to answer specific questions rather than producing the full volume of underlying records.",
        "Summary approach may seem efficient but auditors require underlying documentation; limiting access suggests concealment.",
        -5
      )),
    q("Finance", "Preliminary analysis suggests the bank may face civil money penalties ranging from $5M to $50M depending on regulatory findings. Insurance coverage for regulatory penalties is limited. What approach is most appropriate?",
      buildChoices(
        "Develop multiple financial scenarios with probability weightings, establish appropriate reserves with documented assumptions, and prepare board and investor communication about potential impacts.",
        "Scenario analysis addresses uncertainty; documented reserves demonstrate prudence; communication preparation enables appropriate disclosure.",
        10,
        "Reserve at the midpoint of the range to balance conservatism with avoiding unnecessary earnings impact from potentially excessive reserves.",
        "Midpoint may be reasonable but reserves should reflect probability assessment rather than arbitrary positioning within the range.",
        5,
        "Defer reserving until regulatory negotiations provide clearer penalty expectations to avoid speculative financial statement impacts.",
        "Deferral may understate known contingencies; auditors and regulators expect appropriate reserves when losses are probable and estimable.",
        -5,
        "Reserve at the minimum of the range since the bank's cooperation and remediation efforts should result in favorable treatment.",
        "Optimistic assumption may prove incorrect; reserves should reflect realistic assessment rather than hoped-for outcomes.",
        -5
      )),
    q("Finance", "The compliance remediation will require approximately $8M in additional technology, staffing, and consulting expenses over 18 months. The budget cycle concluded last month. What approach is most appropriate?",
      buildChoices(
        "Prepare a detailed remediation budget with phased spending projections, request board approval for an unbudgeted expenditure, and implement tracking to monitor actual versus planned spending.",
        "Detailed budget enables informed approval; board authorization provides proper governance; tracking ensures accountability.",
        10,
        "Fund immediate remediation needs from contingency reserves and incorporate the remaining spending into next year's budget cycle.",
        "Contingency use may be appropriate for initial expenses but the full scope warrants explicit board approval rather than incremental funding.",
        5,
        "Reduce other planned expenditures to accommodate remediation costs within the existing approved budget.",
        "Reallocation may be possible but compliance remediation shouldn't displace other critical investments without explicit prioritization decision.",
        -5,
        "Begin remediation spending immediately and seek formal budget approval retroactively once the total cost becomes clearer.",
        "Spending without approval creates governance concerns; remediation urgency doesn't eliminate the need for proper authorization.",
        -5
      )),

    // Loans
    q("Loans", "Several large commercial loan relationships involve businesses in industries flagged in the unmonitered transactions, including cash-intensive businesses and importers from high-risk countries. What approach is most appropriate?",
      buildChoices(
        "Conduct enhanced due diligence on flagged relationships, review transaction patterns against loan purposes, assess whether relationships meet current risk appetite, and document all findings.",
        "Enhanced due diligence addresses the specific risk; pattern review identifies anomalies; risk appetite assessment ensures appropriate relationship decisions.",
        10,
        "Request relationship managers reach out to affected clients for updated business information to support enhanced due diligence.",
        "Client outreach may be appropriate but could alert businesses under scrutiny; internal record review should precede client contact.",
        5,
        "Place all commercial relationships in flagged industries on watch status pending completion of the SAR backlog review.",
        "Watch status may be appropriate for some but blanket treatment based on industry alone may be overreactive and damage relationships unnecessarily.",
        -5,
        "Continue normal relationship management since the monitoring failure doesn't mean these customers actually engaged in suspicious activity.",
        "Normal management ignores the heightened risk; customers in flagged industries warrant enhanced attention until cleared.",
        -5
      )),
    q("Loans", "A commercial borrower whose transactions appear in the flagged population is seeking a significant credit line increase. The relationship manager strongly supports the request. What approach is most appropriate?",
      buildChoices(
        "Defer the credit decision until enhanced due diligence on the flagged transactions is complete, explain the delay to the client without disclosing the specific reason, and document the decision rationale.",
        "Deferral avoids extending credit to a potentially problematic relationship; appropriate explanation maintains the relationship pending clearance.",
        10,
        "Proceed with the credit review but require enhanced transaction monitoring as a condition of any approval.",
        "Proceeding maintains the relationship but approving credit before understanding the flagged activity creates potential exposure.",
        5,
        "Deny the credit increase citing changed market conditions to avoid the awkwardness of explaining the real reason.",
        "Pretextual denial is dishonest; if the relationship is cleared, the false reason creates problems for future business.",
        -5,
        "Approve the credit increase since the flagged transactions may prove innocent and denying credit penalizes the client for the bank's monitoring failure.",
        "Approval before due diligence completion ignores known risk indicators; the bank's failure doesn't eliminate the need for prudent credit decisions.",
        -5
      )),
    q("Loans", "The loan operations team identifies that some flagged wire transfers were loan disbursements and payoffs. Borrowers may have legitimate explanations for transaction patterns that appeared suspicious. What approach is most appropriate?",
      buildChoices(
        "Document the loan-related context for flagged transactions, assess whether the loan purposes adequately explain the patterns, and adjust SAR filing decisions accordingly while maintaining documentation.",
        "Loan context is relevant to SAR decisions; documented assessment shows analytical rigor; appropriate decisions based on all available information.",
        10,
        "Exclude all loan-related transactions from the SAR review since they have legitimate business purposes and don't require suspicious activity analysis.",
        "Categorical exclusion may be premature; some loan-related transactions may still warrant SAR filing depending on circumstances.",
        5,
        "File SARs on all flagged transactions regardless of loan context since the bank can't be certain of the underlying purposes.",
        "Over-filing may seem conservative but SARs should reflect actual suspicion; filing without analytical basis undermines the SAR system.",
        -5,
        "Have relationship managers contact borrowers to verify the business purposes of flagged transactions before making SAR decisions.",
        "Borrower contact about potential SAR activity is inappropriate and may constitute illegal tipping.",
        -5
      )),

    // Accounting
    q("Accounting", "The remediation costs, potential penalties, and possible audit opinion changes may affect covenant calculations on the bank's own borrowings. Debt agreements require notification of material adverse changes. What approach is most appropriate?",
      buildChoices(
        "Review all debt covenant requirements, assess whether current developments trigger notification obligations, consult with counsel on notification content, and communicate proactively if required.",
        "Covenant review identifies obligations; trigger assessment determines requirements; counsel consultation ensures appropriate content; proactive communication demonstrates good faith.",
        10,
        "Prepare notification materials but wait to send until penalty amounts are more certain to provide complete information to lenders.",
        "Completeness has value but notification triggers may not depend on final amounts; delay could itself be a covenant violation.",
        5,
        "Interpret covenant language narrowly and defer notification unless clearly required, since premature disclosure could trigger acceleration.",
        "Narrow interpretation may be defensible but aggressive covenant interpretation during a compliance crisis creates additional credibility risk.",
        -5,
        "Consult with the relationship banker informally about whether they think notification is required before making a formal determination.",
        "Informal consultation may seem collaborative but creates selective disclosure issues and doesn't eliminate formal notification obligations.",
        -5
      )),
    q("Accounting", "The compliance failure may require restatement of prior period financial statements if previously disclosed internal control assessments were inaccurate. Management is evaluating materiality. What approach is most appropriate?",
      buildChoices(
        "Conduct rigorous materiality analysis considering both quantitative and qualitative factors, document the analysis thoroughly, engage external auditors in the assessment, and present findings to the audit committee.",
        "Rigorous analysis demonstrates diligence; documentation supports conclusions; auditor engagement ensures independent perspective; audit committee oversight is appropriate.",
        10,
        "Conclude that the monitoring failure was an operational matter that didn't affect previously reported financial statements and therefore restatement is unnecessary.",
        "Operational characterization may be accurate but internal control over financial reporting could still be affected; analysis should be comprehensive.",
        5,
        "Defer the materiality determination until regulatory penalties are finalized since those amounts will drive the materiality conclusion.",
        "Penalties are one factor but control effectiveness can be material regardless of penalty amounts; comprehensive analysis shouldn't wait.",
        -5,
        "Present management's preferred conclusion to the audit committee while noting the analysis is ongoing and subject to change.",
        "Presenting conclusions before analysis is complete appears to predetermine the outcome; analysis should precede conclusions.",
        -5
      )),
    q("Accounting", "Regulators may require the bank to engage an independent consultant to review BSA/AML programs and issue a public report. This creates potential disclosure of confidential information. What approach is most appropriate?",
      buildChoices(
        "Negotiate consultant engagement terms that protect truly confidential information while meeting regulatory transparency requirements, and prepare for potential disclosure in investor and customer communications.",
        "Negotiated protections address legitimate concerns; preparation for disclosure demonstrates acceptance of accountability.",
        10,
        "Argue strongly against public reporting requirements given competitive sensitivity and potential customer confusion.",
        "Confidentiality arguments may be appropriate but aggressive resistance could increase regulatory penalties and appear uncooperative.",
        5,
        "Accept any consultant engagement terms regulators require to demonstrate full cooperation with the examination.",
        "Full cooperation is valued but accepting any terms without negotiation may create unnecessary confidentiality exposures.",
        -5,
        "Engage your own consultant preemptively and publish a favorable report before regulators can mandate their own review.",
        "Preemptive self-reporting may seem proactive but won't satisfy regulatory requirements and may appear manipulative.",
        -5
      )),

    // Deposits
    q("Deposits", "Branch staff report that some retail customers whose transactions appear in the flagged population have been asking about their account status. Staff are uncertain how to respond. What approach is most appropriate?",
      buildChoices(
        "Provide branch staff with approved talking points that address customer concerns without discussing the compliance review, ensure escalation paths are clear for difficult conversations, and document inquiries.",
        "Talking points ensure consistent response; escalation paths handle complex situations; documentation supports any needed follow-up.",
        10,
        "Instruct staff to respond that accounts are in good standing and there are no issues, since most customers are likely innocent.",
        "Blanket assurance may not be accurate for all customers and could create liability if circumstances change.",
        5,
        "Direct staff to tell customers they cannot discuss account matters and to call the customer service center.",
        "Referral may be appropriate for complex issues but blanket refusal to discuss accounts creates unnecessary customer anxiety.",
        -5,
        "Have the BSA team contact flagged retail customers directly to gather additional information about their transaction patterns.",
        "Direct BSA contact with customers about their transactions may constitute tipping and is generally inappropriate.",
        -5
      )),
    q("Deposits", "A long-standing business customer whose transactions are heavily represented in the flagged population contacts their relationship banker asking why wire transfers are being delayed. What approach is most appropriate?",
      buildChoices(
        "Have the relationship banker explain that enhanced processing procedures are affecting some transactions, offer alternatives for time-sensitive transfers if appropriate, and alert the BSA team to the inquiry.",
        "Procedural explanation is honest without tipping; alternatives address legitimate business needs; BSA awareness enables appropriate monitoring.",
        10,
        "Process the customer's wire transfers normally to avoid alerting them that their activity is under review.",
        "Normal processing maintains cover but may facilitate continued suspicious activity if the customer is actually engaged in money laundering.",
        5,
        "Terminate the relationship immediately given the concentration of flagged transactions to eliminate the bank's exposure.",
        "Immediate termination may be premature before understanding whether the activity was actually suspicious; abrupt exit may itself be reportable.",
        -5,
        "Have the relationship banker ask the customer directly about the business purpose of recent large wire transfers.",
        "Direct questioning about transaction purposes in this context may constitute tipping and could compromise any investigation.",
        -5
      )),
    q("Deposits", "News coverage of the compliance failure leads to increased account closure requests from retail customers concerned about 'banking with a troubled institution.' What approach is most appropriate?",
      buildChoices(
        "Process closure requests professionally without obstruction, have managers available to discuss concerns with customers who are open to conversation, and track closure volumes to monitor trend severity.",
        "Professional processing respects customer choice; available managers may retain some customers; tracking enables management awareness of impact.",
        10,
        "Proactively communicate with all retail customers explaining the situation and emphasizing deposit insurance protection and ongoing operations.",
        "Proactive communication shows transparency but mass communication about a compliance issue may increase rather than decrease concern.",
        5,
        "Offer incentives such as rate bonuses or fee waivers to customers requesting closure to encourage them to remain.",
        "Incentives may retain some customers but could appear desperate and don't address the underlying confidence concern.",
        -5,
        "Implement enhanced verification requirements for account closures to slow the process and give customers time to reconsider.",
        "Friction in closure processes may trap nervous customers and could create regulatory concerns about funds availability.",
        -5
      )),
  ]
};

const SCENARIO_NATURAL_DISASTER = {
  key: "major-natural-disaster-recovery",
  title: "Major Hurricane Impacts Multi-State Operations",
  description:
    "A Category 4 hurricane makes landfall affecting your bank's primary operating region. 23 of 47 branches are in the impact zone—8 have confirmed structural damage, 6 are inaccessible due to flooding, and 9 have no power with unknown timelines for restoration. Your main operations center lost generator fuel and is running on backup batteries with 4 hours remaining. Approximately 340 employees are personally displaced or unable to report to work. Cell networks are intermittent, and local emergency services are overwhelmed. Customers are desperate to access funds, and ATM cash levels in unaffected areas are depleting rapidly.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "The Governor's office requests the bank participate in an emergency financial services coordination call. They want commitments about branch reopenings and ATM availability that you cannot reliably make. What approach is most appropriate?",
      buildChoices(
        "Participate actively, provide honest assessments of what's known and unknown, commit to specific update intervals rather than specific outcomes, and offer to support community relief efforts within capabilities.",
        "Active participation demonstrates community commitment; honest assessments build credibility; update commitments are achievable; relief support shows corporate citizenship.",
        10,
        "Provide optimistic projections to support community confidence while internally working to meet or beat those targets.",
        "Optimism supports morale but unmet commitments during a disaster damage credibility when communities need reliable information most.",
        5,
        "Decline detailed commitments citing the dynamic situation, and offer to provide information once conditions stabilize.",
        "Caution is understandable but appearing unresponsive during a community crisis damages reputation and regulatory relationships.",
        -5,
        "Send a communications representative rather than executive leadership to limit the bank's exposure to commitments.",
        "Delegation may seem prudent but executive absence from emergency coordination signals lack of priority for community needs.",
        -5
      )),
    q("CEO/SVPs", "Media coverage shows customers lined up outside damaged branches trying to access their money. Some customers are visibly distressed on camera. A reporter asks why the bank wasn't better prepared. What approach is most appropriate?",
      buildChoices(
        "Express genuine concern for affected customers and employees, describe specific actions being taken to restore services, provide concrete information about available alternatives, and avoid defensive responses about preparation.",
        "Empathy-first response addresses emotional reality; specific actions show responsiveness; alternatives help customers; avoiding defensiveness maintains focus on solutions.",
        10,
        "Emphasize the bank's extensive disaster planning and note that no institution can fully anticipate a storm of this magnitude.",
        "Preparation emphasis may seem defensive when customers are struggling; focus should be on current response rather than past planning.",
        5,
        "Redirect focus to the heroic efforts of employees who are working despite personal hardships to serve customers.",
        "Employee recognition is appropriate but may appear to deflect from the customer experience being shown on camera.",
        -5,
        "Decline on-camera interviews and issue written statements to maintain message control during a chaotic situation.",
        "Message control is understandable but refusing interviews while customers struggle on camera appears uncaring.",
        -5
      )),
    q("CEO/SVPs", "Your largest commercial depositor, a regional healthcare system, calls the CEO directly. Their payroll is due Friday and they need assurance funds will be accessible. Their employees include first responders working the disaster. What approach is most appropriate?",
      buildChoices(
        "Personally commit to prioritizing their payroll processing, identify specific backup procedures to ensure completion, establish direct communication channels, and follow up in writing.",
        "Personal commitment at CEO level addresses relationship importance; specific procedures demonstrate capability; direct channels ensure rapid problem resolution.",
        10,
        "Assure them the bank is working to restore all services and they will be treated like every other valued customer.",
        "Equal treatment messaging doesn't address the urgency; healthcare payroll during a disaster warrants priority acknowledgment.",
        5,
        "Transfer the call to treasury management to work out technical details while the CEO focuses on overall crisis coordination.",
        "Technical handoff may be necessary but CEO disengagement from a top client during crisis signals misplaced priorities.",
        -5,
        "Promise the payroll will definitely process on time to maintain the relationship, then work to make it happen.",
        "Definitive promises without confirmed capability create risk; honest assessment with maximum effort is more appropriate.",
        -5
      )),

    // IT/Security
    q("IT/Security", "The operations center will exhaust backup power in 4 hours. A secondary site 200 miles away can assume operations but failover was never tested for this duration. Alternatively, you can attempt emergency generator refueling through congested evacuation routes. What approach is most appropriate?",
      buildChoices(
        "Initiate failover to the secondary site immediately while power remains stable, document any issues during the transition, and pursue generator refueling as a parallel backup option.",
        "Immediate failover while stable provides best transition conditions; documentation enables troubleshooting; parallel refueling creates redundancy.",
        10,
        "Attempt emergency refueling first since the secondary site failover is untested and could create additional problems.",
        "Refueling preserves current operations but fuel delivery through disaster zones is unreliable; risking power exhaustion before failover is dangerous.",
        5,
        "Wait until 90 minutes of battery remain before deciding, to gather more information about both options.",
        "Waiting reduces decision time and may result in rushed failover under pressure if refueling fails; earlier action provides more margin.",
        -5,
        "Shut down non-critical systems to extend battery life and wait for conditions to improve before making major infrastructure decisions.",
        "Conservation extends time but doesn't address the fundamental issue; degraded services during a disaster when customers need access most is problematic.",
        -5
      )),
    q("IT/Security", "Cell networks are unreliable and branch employees are unable to reach the help desk for system issues. Some branches are improvising workarounds to serve customers. What approach is most appropriate?",
      buildChoices(
        "Deploy pre-positioned satellite communication equipment to critical branches, document approved emergency procedures, empower branch managers to make reasonable decisions, and establish check-in protocols.",
        "Alternative communication addresses the gap; documented procedures provide guidance; empowered managers can respond locally; check-ins maintain coordination.",
        10,
        "Route all support requests through email and establish that responses may be delayed given communication challenges.",
        "Email routing is a reasonable backup but doesn't help branches without reliable connectivity; alternative channels are needed.",
        5,
        "Direct all branches to follow standard procedures only and escalate any issues that can't wait until communications restore.",
        "Standard procedures may not address disaster conditions; forcing escalation when communication is unreliable leaves branches without options.",
        -5,
        "Trust branch managers to make good decisions without additional guidance since they understand their local situations best.",
        "Local knowledge is valuable but managers need framework and authority for decisions outside normal parameters; guidance enables better decisions.",
        -5
      )),
    q("IT/Security", "Security cameras at several damaged branches are offline. Reports suggest some locations may have been accessed during the storm. Looters have been active in the area. What approach is most appropriate?",
      buildChoices(
        "Coordinate with law enforcement on secured locations, deploy available security personnel to highest-risk branches, document all access attempts, and assess vault and ATM status as soon as safely possible.",
        "Law enforcement coordination maximizes resources; prioritized security deployment focuses effort; documentation supports insurance and investigation; assessment identifies actual losses.",
        10,
        "Focus security resources on branches containing the most cash and negotiable instruments, accepting higher risk at smaller locations.",
        "Prioritization is reasonable but smaller locations still have exposure; risk-based approach should include all locations at appropriate levels.",
        5,
        "Wait until the area is declared safe before attempting to assess or secure branch locations to protect employee safety.",
        "Employee safety is paramount but extended delay may result in preventable losses; coordinated assessment with appropriate safety measures is possible.",
        -5,
        "Announce publicly that all bank locations are being monitored to deter potential looters, even if monitoring capability is limited.",
        "Deterrence may help but false claims about monitoring capability could create liability issues if losses occur.",
        -5
      )),

    // HR
    q("HR", "340 employees are displaced or unable to work. Many have lost homes, vehicles, or have family members in shelters. Several key operations staff are among those affected. Employees are calling asking about pay and benefits. What approach is most appropriate?",
      buildChoices(
        "Immediately communicate that all employees will continue receiving pay regardless of ability to work, activate emergency assistance programs, provide clear benefits information, and establish a dedicated support line.",
        "Pay continuation removes financial stress; assistance programs provide practical help; clear communication reduces anxiety; dedicated support ensures questions are answered.",
        10,
        "Process payroll normally for employees who can work and address affected employees on a case-by-case basis as their situations become clearer.",
        "Case-by-case approach is thorough but delays relief for affected employees and creates uncertainty; blanket support is more appropriate during disaster.",
        5,
        "Focus HR resources on maintaining critical operations staffing and address affected employee concerns once the immediate crisis stabilizes.",
        "Operations focus is understandable but neglecting employee concerns during personal crises damages loyalty and may worsen staffing issues.",
        -5,
        "Direct employees to file for unemployment and disaster assistance through government programs, supplementing only where needed.",
        "Government program referral may be appropriate eventually but immediate corporate support demonstrates commitment to employees during crisis.",
        -5
      )),
    q("HR", "Employees at unaffected branches are working extended shifts to compensate for closed locations. Fatigue is building and some express frustration that their colleagues' absence creates more work for them. What approach is most appropriate?",
      buildChoices(
        "Acknowledge the burden explicitly, implement rotation schedules to manage fatigue, provide additional compensation for extended work, and help staff understand their colleagues' circumstances.",
        "Acknowledgment validates concerns; rotation prevents burnout; additional compensation recognizes sacrifice; context building reduces resentment.",
        10,
        "Remind staff that everyone needs to pull together during emergencies and that affected colleagues would do the same for them.",
        "Unity messaging is appropriate but doesn't address practical concerns about workload and compensation; tangible support is also needed.",
        5,
        "Bring in temporary staff from staffing agencies to relieve pressure on regular employees working extended hours.",
        "Temporary staff may help but onboarding during crisis is challenging; internal rotation and support may be more effective short-term.",
        -5,
        "Document complaints and address attitude issues through performance management once the crisis passes.",
        "Documentation for later action is inappropriate; employees expressing legitimate concerns about unsustainable workloads need support, not discipline.",
        -5
      )),
    q("HR", "A branch manager in an affected area hasn't been heard from in 36 hours. Their last known location was in an evacuation zone. Family members are calling HR asking if the bank knows anything. What approach is most appropriate?",
      buildChoices(
        "Coordinate with local emergency management and law enforcement, designate a single point of contact for the family, keep leadership informed, and prepare for multiple outcomes while hoping for the best.",
        "Official coordination maximizes search resources; single contact prevents conflicting information; leadership awareness enables appropriate response; preparation addresses uncertainty.",
        10,
        "Assure the family that the bank is doing everything possible and provide updates as soon as any information becomes available.",
        "Reassurance is appropriate but without concrete coordination efforts, the bank isn't actually doing everything possible.",
        5,
        "Advise the family to work with emergency services directly since HR doesn't have specialized search and rescue capabilities.",
        "Family referral is technically accurate but appears to abandon responsibility for an employee; coordination support is appropriate.",
        -5,
        "Assume the manager is safe but unreachable due to communication issues and focus resources on employees with confirmed needs.",
        "Optimistic assumption may prove incorrect; 36 hours without contact in an evacuation zone warrants active concern and coordination.",
        -5
      )),

    // Finance
    q("Finance", "Insurance carriers are requesting immediate damage assessments to begin claims processing, but many locations cannot be safely accessed. Preliminary estimates suggest $15-25M in property damage and business interruption losses. What approach is most appropriate?",
      buildChoices(
        "Provide carriers with available documentation and preliminary estimates clearly marked as incomplete, commit to comprehensive assessments as access permits, and establish regular update cadence.",
        "Available documentation starts the process; clear caveats prevent misunderstanding; commitment to updates demonstrates cooperation; regular cadence maintains momentum.",
        10,
        "Wait until comprehensive assessments can be completed to provide accurate claim documentation rather than preliminary estimates.",
        "Accuracy is valued but delay in claim initiation may slow recovery funding; preliminary estimates with caveats are appropriate.",
        5,
        "Provide assessments at the high end of the range to ensure adequate coverage and adjust downward if needed later.",
        "High-end estimates may seem protective but could be viewed as inflating claims; honest estimates with documented uncertainty are more appropriate.",
        -5,
        "Focus internal resources on operations recovery and let the insurance company send their own adjusters to assess damage.",
        "Adjuster reliance may seem efficient but delays claim processing and fails to document the bank's perspective on losses.",
        -5
      )),
    q("Finance", "ATM cash in unaffected areas is depleting rapidly as displaced customers seek funds. Normal armored car routes are disrupted and some vendors are unable to operate. What approach is most appropriate?",
      buildChoices(
        "Coordinate with available armored carriers for priority restocking, identify alternative cash sources including correspondent banks, increase individual ATM withdrawal limits temporarily, and communicate with customers about availability.",
        "Multi-pronged approach addresses supply chain disruption; increased limits help customers access needed funds; communication manages expectations.",
        10,
        "Ration cash by reducing withdrawal limits to extend availability at each ATM until normal restocking resumes.",
        "Rationing extends availability but restricts customer access during a crisis when they need funds most; restocking efforts are better focus.",
        5,
        "Close ATMs that reach low cash levels to prevent complete depletion and direct customers to remaining locations.",
        "Closure may seem prudent but reduces overall access points; restocking effort and customer communication is preferable.",
        -5,
        "Wait for armored carriers to resume normal operations rather than attempting to arrange alternative logistics.",
        "Waiting leaves customers without access; proactive alternative arrangements demonstrate commitment to customer service during crisis.",
        -5
      )),
    q("Finance", "FEMA and state disaster assistance programs require banks to facilitate emergency lending and payment processing for affected customers. These programs have specific requirements and timelines. What approach is most appropriate?",
      buildChoices(
        "Designate a coordinator for disaster assistance programs, train available staff on requirements, establish expedited processing procedures, and communicate availability to affected customers.",
        "Designated coordination ensures accountability; trained staff provide consistent service; expedited procedures help customers quickly; communication drives awareness.",
        10,
        "Process disaster assistance requests through normal channels and prioritize them in the existing workflow.",
        "Normal channel processing may work but specific requirements may not fit existing procedures; dedicated handling is more appropriate.",
        5,
        "Focus on restoring core banking operations first and address disaster assistance programs once capacity permits.",
        "Operations focus is understandable but disaster assistance has specific timelines; delayed participation may disqualify customers from aid.",
        -5,
        "Refer customers to other institutions participating in disaster programs if the bank's capacity is constrained.",
        "Referral may seem practical but abandons customers during crisis; reasonable participation even at reduced capacity maintains relationships.",
        -5
      )),

    // Loans
    q("Loans", "Borrowers in affected areas are calling about mortgage and loan payments due this week. Many have lost income, property damage, or both. FEMA has declared the area a disaster zone qualifying for forbearance programs. What approach is most appropriate?",
      buildChoices(
        "Proactively communicate blanket forbearance availability to all borrowers in declared disaster areas, streamline the application process, suspend negative credit reporting, and train staff on program details.",
        "Proactive communication reaches affected borrowers; streamlined process reduces burden; credit protection prevents additional harm; trained staff provide consistent guidance.",
        10,
        "Offer forbearance to borrowers who contact the bank and request assistance, processing requests on a case-by-case basis.",
        "Responsive assistance helps those who call but misses borrowers too overwhelmed to reach out; proactive outreach is more appropriate.",
        5,
        "Wait for federal guidance on disaster forbearance programs before making commitments to ensure compliance with all requirements.",
        "Waiting for guidance delays relief; disaster programs are well-established and the bank can begin implementation while monitoring updates.",
        -5,
        "Continue normal collection activities for borrowers not in declared disaster zones even if they're experiencing disruption.",
        "Geographic boundaries don't capture all affected borrowers; rigid zone enforcement during regional crisis appears unsympathetic.",
        -5
      )),
    q("Loans", "A construction loan for a major development project was in progress when the hurricane hit. The partially completed structures sustained significant damage. The developer wants to draw on remaining loan proceeds for repairs. What approach is most appropriate?",
      buildChoices(
        "Conduct rapid damage assessment with developer, evaluate whether repairs restore the project to viable completion, adjust draw procedures for disaster conditions, and document modified approach.",
        "Assessment establishes facts; viability evaluation protects the bank; adjusted procedures enable progress; documentation maintains control.",
        10,
        "Freeze all draws until a complete engineering assessment determines whether the project remains financeable.",
        "Complete assessment may be prudent but extended freeze could cause developer default; interim assessment with controlled draws is possible.",
        5,
        "Allow draws to continue under existing procedures since the developer has a contractual right to loan proceeds.",
        "Contractual rights exist but changed circumstances warrant reassessment; automatic draws without damage evaluation create risk.",
        -5,
        "Declare the project in default due to material adverse change and begin workout discussions with the developer.",
        "Default declaration may be premature; disaster damage doesn't automatically render projects unviable and aggressive posture damages relationships.",
        -5
      )),
    q("Loans", "Small business borrowers report that their collateral—inventory, equipment, real estate—has been damaged or destroyed. Several have SBA disaster loans in process but need bridge financing immediately to survive. What approach is most appropriate?",
      buildChoices(
        "Evaluate each business's viability post-disaster, offer bridge financing for viable businesses with modified terms reflecting changed circumstances, and coordinate with SBA lending programs.",
        "Viability assessment protects the bank; bridge financing preserves viable businesses; SBA coordination maximizes available resources.",
        10,
        "Offer emergency unsecured lines of credit to existing business customers in good standing to provide immediate liquidity.",
        "Emergency lines help businesses quickly but unsecured lending without viability assessment creates credit risk.",
        5,
        "Wait for SBA disaster loans to fund since those programs are designed for this situation and reduce the bank's risk.",
        "SBA waiting may seem prudent but businesses may fail before funding arrives; bridge support preserves both businesses and bank relationships.",
        -5,
        "Focus lending resources on new disaster recovery business opportunities rather than supporting potentially impaired existing relationships.",
        "New opportunity focus abandons existing customers during crisis; relationship preservation should be primary focus.",
        -5
      )),

    // Accounting
    q("Accounting", "Property and equipment values are uncertain, receivables may be impaired, and the insurance claim creates a contingent asset. Quarterly reporting deadline is in 3 weeks. What approach is most appropriate?",
      buildChoices(
        "Develop reasonable estimates using available information, document assumptions and methodology, disclose uncertainties in financial statement notes, and coordinate closely with external auditors.",
        "Reasonable estimates enable reporting; documented methodology supports conclusions; disclosure addresses uncertainty; auditor coordination ensures alignment.",
        10,
        "Request a reporting extension given the extraordinary circumstances affecting the ability to produce accurate financial statements.",
        "Extension request may be appropriate if estimates aren't reasonably possible but many uncertainties can be addressed through disclosure rather than delay.",
        5,
        "Use pre-disaster values and defer any impairment recognition until the full impact can be precisely measured.",
        "Pre-disaster values may materially misstate current position; known impairments should be estimated even if precision isn't possible.",
        -5,
        "Recognize maximum potential impairments to be conservative and reverse as the situation clarifies.",
        "Maximum impairment may seem conservative but overstating losses is also a misstatement; reasonable estimates are more appropriate.",
        -5
      )),
    q("Accounting", "Disaster recovery expenses are being incurred rapidly—emergency repairs, temporary facilities, overtime, contractor services. Normal expense approval and documentation processes are overwhelmed. What approach is most appropriate?",
      buildChoices(
        "Implement emergency expense procedures with elevated approval thresholds, create a dedicated disaster cost center, require basic documentation with commitment to full documentation within 30 days.",
        "Emergency procedures enable rapid response; dedicated cost center tracks expenses; documentation commitment maintains eventual control.",
        10,
        "Maintain normal approval processes but expedite reviews to handle the increased volume of requests.",
        "Expedited normal processes may work but disaster expenses may exceed normal authority levels and documentation requirements may be impractical.",
        5,
        "Suspend expense approvals for disaster-related costs and reconcile everything once the emergency passes.",
        "Suspension enables rapid response but creates significant control gaps and reconciliation challenges; some structure should be maintained.",
        -5,
        "Require full documentation for all expenses regardless of size to maintain audit trails during the chaotic period.",
        "Full documentation is ideal but impractical during emergency response; requirement may delay critical spending or go unmet.",
        -5
      )),
    q("Accounting", "External auditors are concerned about the bank's ability to continue as a going concern given the operational disruption and uncertain losses. They request a detailed recovery timeline and capital adequacy analysis. What approach is most appropriate?",
      buildChoices(
        "Provide a comprehensive analysis including multiple recovery scenarios, capital projections under each scenario, and mitigating factors such as insurance coverage and regulatory support options.",
        "Comprehensive analysis addresses auditor concerns directly; multiple scenarios demonstrate thoughtful planning; mitigating factors provide complete picture.",
        10,
        "Assure auditors that the bank's capital position is strong and the disaster impact, while significant, is manageable.",
        "Assurance may be accurate but auditors need documented analysis to support conclusions, not verbal comfort.",
        5,
        "Challenge the going concern question as premature given that the full impact is not yet known and recovery is just beginning.",
        "Challenge may seem reasonable but auditors have professional obligations; providing requested analysis is more productive than disputing the question.",
        -5,
        "Engage separate consultants to prepare the going concern analysis so external auditors receive an independent perspective.",
        "Separate consultants may provide additional comfort but primary analysis should come from management; consultants shouldn't substitute for management assessment.",
        -5
      )),

    // Deposits
    q("Deposits", "Customers are arriving at open branches with damaged identification documents, no account numbers, and desperate needs for cash. Standard identification procedures cannot be followed. What approach is most appropriate?",
      buildChoices(
        "Implement emergency identification procedures allowing alternative verification methods with transaction limits, enhanced documentation, and supervisor approval for exceptions.",
        "Alternative verification enables service; transaction limits control risk; documentation supports later review; supervisor approval provides oversight.",
        10,
        "Serve customers who can provide any identifying information and accept the fraud risk as a cost of disaster response.",
        "Service orientation is appropriate but accepting unlimited fraud risk is imprudent; controlled flexibility balances competing concerns.",
        5,
        "Maintain standard identification requirements since relaxing them creates fraud exposure and regulatory compliance concerns.",
        "Standard requirements are normally appropriate but rigid enforcement during disaster when customers have lost documents appears uncaring and unhelpful.",
        -5,
        "Direct customers without proper identification to return once they've obtained replacement documents.",
        "Return direction may follow normal procedure but customers with urgent needs and no documentation may have no path to compliance.",
        -5
      )),
    q("Deposits", "A rumor spreads on social media that one of your closed branches was 'destroyed' and customer deposits are lost. The branch is damaged but deposits are not affected. Withdrawal requests at other branches spike. What approach is most appropriate?",
      buildChoices(
        "Issue immediate clarification through all channels explaining that deposits are protected by FDIC insurance and the bank's overall stability, while acknowledging the specific branch damage and repair timeline.",
        "Multi-channel clarification reaches concerned customers; FDIC reminder addresses fundamental concern; specific acknowledgment demonstrates transparency.",
        10,
        "Post a social media response correcting the misinformation without drawing additional attention through broader communications.",
        "Social media response addresses the source but customers not on social media need reassurance through other channels.",
        5,
        "Focus on serving customers who come in rather than responding to social media speculation that may blow over.",
        "In-person service is important but allowing misinformation to spread uncorrected may worsen the withdrawal surge.",
        -5,
        "Contact local media to report the false social media posts and request they cover the accurate situation.",
        "Media outreach may help but asking media to cover 'false social media posts' may amplify the story rather than correct it.",
        -5
      )),
    q("Deposits", "Elderly customers who don't use online banking and relied on a closed branch for all transactions are stranded without access to funds. Family members are calling on their behalf. What approach is most appropriate?",
      buildChoices(
        "Deploy mobile banking units or arrange transportation to open branches for vulnerable customers, enable temporary authorization for family members with proper documentation, and proactively contact known affected customers.",
        "Mobile units or transportation solves access problem; temporary authorization with documentation enables family assistance; proactive outreach identifies needs.",
        10,
        "Allow family members to conduct transactions on behalf of elderly relatives who call in to verify authorization.",
        "Phone authorization is reasonable but may not reach customers who can't call; proactive outreach and physical access solutions are also needed.",
        5,
        "Advise family members to obtain power of attorney to conduct transactions on behalf of their elderly relatives.",
        "POA is normally appropriate but obtaining legal documents during a disaster is impractical; temporary emergency procedures are needed.",
        -5,
        "Process transactions for family members who can provide the customer's account information and personal details.",
        "Information-based access creates fraud risk; some verification of actual authorization is necessary even in emergencies.",
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
  SCENARIO_VENDOR_OUTAGE,
  SCENARIO_COORDINATED_ATTACK,
  SCENARIO_BSA_AML_FAILURE,
  SCENARIO_NATURAL_DISASTER
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
