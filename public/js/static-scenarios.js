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
    "At 2:47 AM, your SOC detected anomalous encryption activity spreading across production servers. By 6:00 AM, ransomware has encrypted 73% of your core banking infrastructure including the primary database servers, online banking application tier, and ACH processing systems. The ransom note demands $4.2 million in Bitcoin within 72 hours. Customer-facing systems are completely offline. Your most recent validated backup is 18 hours old, but forensics hasn't confirmed whether backups are compromised. ACH files totaling $47 million in pending transactions are stuck in queue. Social media is lighting up with customer complaints about failed transactions and locked accounts. Your primary regulator has already called asking for a status update.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "It's 7:00 AM and you have conflicting reports: IT says containment will take 4+ hours, your CISO recommends aggressive segmentation that may interrupt ACH flows, and your CFO warns of liquidity and reputational risks. The board chair is calling. What's your first action?",
      buildChoices(
        "Stand up incident command with clear authority, implement targeted segmentation, and brief the board chair.",
        "Structured command clarifies accountability and enables coordinated response while maintaining operational constraints.",
        7,
        "Schedule an immediate executive alignment call to confirm risk tolerances, review containment options with technical teams, and establish clear decision-making authority before proceeding with any segmentation that could impact customer-facing services or critical payment processing.",
        "Alignment reduces contradictory orders but may be slower than pre-established command structure in fast-moving incidents.",
        6,
        "Require complete forensic assessment before containment to preserve evidence.",
        "Forensics are essential but can proceed in parallel with containment in many cases.",
        3,
        "Order immediate network disconnect to stop encryption, accepting operational impacts to customer systems, payment processing, and branch operations. This decisive action will halt the spread immediately but requires extensive coordination with regulators, customer communications, and careful planning for service restoration under complete isolation.",
        "Full disconnect stops spread quickly but causes severe customer impact and reduces recovery options.",
        1
      )),
    q("CEO/SVPs", "By noon, restoration estimates are 5-7 days. The ransom group sometimes provides working keys; insurance may cover payment; law enforcement recommends caution. Board members are split. How do you structure the board decision?",
      buildChoices(
        "Provide a concise decision memo with legal and insurance considerations plus action thresholds.",
        "Combining a memo with delegated authority and explicit thresholds balances board oversight with the need for timely operational decisions under pressure.",
        8,
        "Ask the board to delegate the operational decision to a small executive committee empowered to act quickly once pre-agreed criteria are met, with a required post-action full-board review to maintain governance visibility.",
        "Delegation speeds action while preserving accountability through mandated reporting and post‑action review; this reduces paralysis without abandoning governance.",
        4,
        "Recommend an immediate categorical refusal to pay ransom demands to signal the bank's principled stance against criminal activity and avoid incentivizing further attacks. This approach focuses all available resources and expertise on technical restoration efforts while maintaining the bank's reputation for ethical conduct, even though it may result in longer downtime and greater customer inconvenience in the short term.",
        "Principled refusal is clear but may cause greater customer harm if restoration fails and limited options remain for mitigation.",
        0,
        "Let the CISO and General Counsel make the payment decision given their technical and legal knowledge, and inform the board after the fact to avoid delays.",
        "Operational expertise is critical, but ultimate accountability for a payment that could be reputationally consequential usually rests with the board.",
        -2
      )),
    q("CEO/SVPs", "A reporter from American Banker calls saying they've confirmed your systems are down and are running a story in two hours. They're asking whether this is a ransomware attack and whether customer data was stolen. Forensics hasn't completed data exfiltration analysis yet. How do you respond?",
      buildChoices(
        "Acknowledge service disruption, confirm investigation with law enforcement, and provide a factual holding statement.",
        "A holding statement with a designated spokesperson balances transparency and caution while reducing the chance of off‑the‑cuff inaccuracies.",
        7,
        "Refer the reporter to a written statement from communications that notes the outage and says you're investigating, and offer to schedule a follow-up briefing once initial forensic findings are validated.",
        "A controlled written statement reduces risk of errors while committing to follow-up increases credibility; however, it can feel less responsive than a timely verbal holding statement.",
        6,
        "Confirm publicly that this is a ransomware attack to signal openness and discourage rumor, accepting that the exact details about data exfiltration are under investigation.",
        "Premature confirmation can complicate law enforcement coordination and legal disclosures; measured transparency is often the safer course until facts are verified.",
        3,
        "Deny an incident and attribute the current service disruptions to scheduled maintenance complications and routine system updates that have taken longer than anticipated. This approach avoids immediate reputational damage and provides time for your technical team to complete their response while maintaining customer confidence during the restoration process.",
        "Denying contradicts available evidence and risks severe credibility loss if the truth emerges, which it likely will; this carries long-term reputational risk.",
        1
      )),

    // IT/Security
    q("IT/Security", "Active encryption is still spreading through network shares. You've identified the compromised service accounts but disabling them will break several production integrations. Your endpoint detection shows 340 infected endpoints and counting. What's your containment priority?",
      buildChoices(
        "Disable high-risk compromised accounts and apply targeted segmentation while preserving forensic artifacts.",
        "Targeted account disablement and segmentation reduce spread while limiting unnecessary business disruption; capturing volatile data preserves investigative options, though it requires careful coordination with business owners.",
        7,
        "Prioritize segmentation of critical systems and ramp monitoring on suspected accounts while preparing a phased disablement plan informed by business owners to avoid blunt disruption.",
        "Phased actions informed by business owners balance risk and availability, but slower containment may allow additional encryption if attackers are active; this can be acceptable with strong compensating detection.",
        6,
        "Focus immediately on isolating and hardening backup and restore infrastructure so you have a reliable recovery path, accepting that some production systems may remain compromised longer.",
        "Protecting backups is essential for recovery, and focusing on recovery infrastructure can be paired with rapid containment steps; the trade-off depends on attack dynamics and available staff.",
        4,
        "Order an immediate full network disconnect and cease all integrations to stop the spread completely. This decisive action eliminates lateral movement quickly by severing all network connections, though it will cause severe operational impact across all business functions and remove options for controlled recovery and detailed forensic collection during the incident response phase.",
        "Full disconnect is effective at stopping spread but causes extreme business impact and removes options for controlled recovery and forensic collection; use only when evidence indicates imminent catastrophic spread.",
        2
      )),
    q("IT/Security", "Forensics reports that your backup infrastructure appears clean, but they've found evidence the attackers had access to your environment for 3 weeks before deploying ransomware. Your most recent clean backup is 18 hours old but any backup from the past 3 weeks could contain dormant malware or compromised credentials. What's your restoration strategy?",
      buildChoices(
        "Restore to isolated environment using 18-hour backup with layered validation before promoting services.",
        "Isolated validation limits reinfection risk while enabling faster restoration if the backup is clean; coupling with credential resets reduces persistence risk.",
        8,
        "Restore a minimal set of critical services to a hardened production segment with strict compensating controls and enhanced monitoring, while maintaining full validation workflows for broader systems.",
        "A minimal restore to hardened segments can buy time for customer-critical functions but still risks reinfection if validation is incomplete.",
        5,
        "Choose an older pre-compromise backup to guarantee a clean starting point, accepting substantial data loss and operational disruption.",
        "Older backups increase confidence but sacrifice business continuity and create large reconciliation burdens post-recovery.",
        0,
        "Rebuild all systems completely from scratch to eliminate any possibility of dormant compromise, implementing enhanced security controls and modern architecture patterns. This approach ensures zero residual risk from the compromised environment and provides an opportunity to implement security improvements, even if it extends recovery timeline into weeks and requires significant operational planning.",
        "Rebuild is the most conservative technically but may be impractical given customer and regulatory impact; it's a last-resort strategy and should be weighed against hybrid alternatives.",
        -2
      )),
    q("IT/Security", "Online banking restoration is technically ready but your security team hasn't completed penetration testing on the restored environment. Customer complaints are mounting - 47,000 customers have called the contact center today. Business leaders are pushing hard to restore service. What's your recommendation?",
      buildChoices(
        "Restore in phases: read-only first, then controlled transactional functions with extra verification.",
        "Phased delivery balances availability and risk by allowing customers visibility while limiting exposure for high-risk operations; communication reduces confusion and panic.",
        8,
        "Bring up full service now with enhanced monitoring and a rapid rollback plan if suspicious activity is detected, accepting operational risk to prioritize customer access.",
        "Full restore prioritizes customer needs but places a heavy burden on detection and mitigation teams; it may succeed if monitoring is exceptionally strong.",
        5,
        "Keep services offline until all security tests are complete and forensics confirm the environment is clean, prioritizing security over immediate availability.",
        "Waiting for full assurance minimizes risk but prolongs customer harm and increases reputational pressure; it's safer but costly.",
        0,
        "Open limited transactional functionality exclusively for prioritized customers including high-value relationships and critical business accounts after implementing bespoke verification procedures and additional authentication requirements. This selective approach delays broader public restoration while meeting the immediate needs of your most important customer relationships and preserving resources for comprehensive security validation.",
        "Prioritized access can meet critical needs but creates fairness and PR issues; it requires clear policy and careful communication.",
        -1
      )),

    // HR
    q("HR", "It's Day 2 and your IT security team has been working 20+ hour shifts. The CISO reports that two senior engineers are showing signs of severe fatigue - making configuration errors and forgetting steps in procedures. However, these engineers have critical institutional knowledge about the encrypted systems. Pulling them off could slow recovery significantly. What do you recommend?",
      buildChoices(
        "Implement formal rotation: require rest for impaired staff, pair engineers with shadowed backups for handovers.",
        "Combines rest with continuity: handovers preserve knowledge, surge specialists reduce pressure, and pairing reduces error risk without a total loss of capability.",
        8,
        "Enforce an immediate 8-hour rest policy for incident responders and reassign critical tasks to trained backups after concise knowledge-transfer sessions; provide EAP and monitoring for affected staff.",
        "Prioritizes safety and error reduction; may slow recovery but reduces chances of costly mistakes during frantic recovery work.",
        7,
        "Allow engineers to self-manage breaks and supplement them with temporary oversight and spot-checks from senior managers to ensure critical tasks are completed.",
        "Maintains momentum but relies on fatigued staff judgment; oversight reduces some risk but doesn't eliminate the danger of human error under fatigue.",
        2,
        "Immediately replace the fatigued engineers with external contractors or consulting specialists to maintain recovery momentum and speed. This approach accepts the onboarding and knowledge-transfer risks while ensuring that critical restoration work continues without interruption from human factors issues. The contractors' fresh perspective and energy can compensate for their lack of institutional knowledge during this critical phase.",
        "Contractors can provide immediate capacity but often lack institutional context, increasing the chance of procedural errors or missed dependencies.",
        -1
      )),
    q("HR", "Branch managers report that several employees are posting on social media about the outage, including one who wrote 'Management has no idea how bad this is - our systems are totally destroyed.' The posts are gaining attention. How should this be handled?",
      buildChoices(
        "Managers speak privately to employees to request removal and remind them of social media policy.",
        "Private remediation limits escalation while a public clarification reduces misinformation; internal channels give staff a constructive outlet for concerns.",
        8,
        "Issue a public corrections statement from communications addressing inaccuracies and reaffirming the bank's response actions to reassure customers and stakeholders.",
        "Public corrections can calm external audiences but risk amplifying the issue and drawing further attention to internal dissent.",
        5,
        "Apply formal disciplinary measures to the poster(s) to deter further breaches of policy and require removal of the content.",
        "Discipline may be necessary in egregious cases but can increase internal fear and may be criticized externally if perceived as heavy-handed.",
        1,
        "Do nothing publicly and focus exclusively on private operational recovery efforts, allowing the social media issue to fade naturally as the technical situation improves and normal operations resume. This approach avoids drawing additional attention to the negative posts while concentrating all management effort on resolving the underlying problems that prompted the employee frustration.",
        "Non-engagement avoids inflaming the situation but allows misinformation to spread unchallenged and leaves employees feeling unheard.",
        -1
      )),
    q("HR", "Several employees have approached HR confidentially expressing fear that they'll be blamed or terminated for the security breach, even though there's no indication of employee fault. One employee who clicked a phishing link (not confirmed as the entry point) is particularly distressed. How do you address this?",
      buildChoices(
        "Issue a blame-free message emphasizing recovery and learning, offer private support, and run phishing reminders.",
        "Blame-free messaging encourages transparency; support and training reduce future risk and help employees report issues promptly.",
        8,
        "Tell staff you'll wait for the investigation to conclude before commenting on blame, but provide immediate private support to anyone expressing distress and ensure they know how the investigation will proceed.",
        "Balancing investigation integrity with immediate support reduces panic while preserving fact-finding, though it leaves some uncertainty in the short term.",
        5,
        "Request that managers compile lists of employees who may have been involved in risky actions and meet them individually to review behavior and compliance.",
        "Proactive review can identify training gaps but risks creating a culture of suspicion and discouraging honest reporting.",
        0,
        "Announce that no one will face discipline for honest mistakes during the incident to ensure full cooperation with recovery and investigation efforts. This blanket amnesty policy removes fear-based barriers to information sharing and encourages employees to come forward with any details that might assist in understanding the incident timeline and attack vectors without worrying about personal consequences.",
        "Temporary amnesty may encourage reporting but could shield gross negligence and complicate later disciplinary consistency.",
        -1
      )),

    // Finance
    q("Finance", "It's Day 3 and customers are increasingly withdrawing funds from your operational branches and ATMs - daily outflows have tripled versus normal. Media speculation about the bank's viability is growing. Your liquidity coverage ratio is still well above regulatory minimums but trending down. What's your recommendation?",
      buildChoices(
        "Consider cautiously activating contingency funding with documented triggers and dual sign-off.",
        "Pre-positioning liquidity can provide a necessary cushion and tests contingency processes; adding strict triggers and dual sign-off reduces the chance of noisy market signaling while preserving optionality, provided activation follows Treasury confirmation and crisis reporting.",
        8,
        "Deliver a concise, factual customer communication targeted to affected segments explaining impacted services and immediate mitigations. Stand up prioritized outreach for high-balance and vulnerable customers, equip the call center with validated scripts and emergency authorization paths, designate a single liaison for employer escalations with SLAs, and coordinate discrete intraday liquidity actions under delegated Treasury authority with clear delegated limits and post-action reporting.",
        "Operationalized outreach combined with discrete intraday liquidity actions and a single liaison with SLAs provides practical relief for at-risk customers while minimizing visible market signaling; coupling actions to clear delegated limits improves speed and governance. Assign a named owner with SLAs for follow-up and reconciliation.",
        7,
        "Maintain normal liquidity posture since ratios remain healthy and reacting visibly could signal weakness and accelerate the very outflows you're trying to prevent.",
        "Avoiding panic signals has logic but failing to prepare for deterioration could leave you caught flat-footed; internal preparation doesn't require visible external action.",
        -2,
        "Immediately draw down all available credit facilities and backup liquidity sources to maximize the bank's cash position and ensure adequate reserves to meet any level of withdrawal demand. This decisive action demonstrates proactive financial management and provides maximum flexibility during the crisis, even though it may signal some degree of stress to counterparties and could become visible in financial reporting or market intelligence.",
        "Maximizing cash seems prudent but dramatic draws signal distress to counterparties and may become news themselves; contingency activation should be proportionate to actual conditions.",
        -3
      )),
    q("Finance", "The $47 million in ACH transactions that were queued when systems went down include payroll files for 340 businesses representing 12,000 employees expecting direct deposits tomorrow. The ACH system won't be restored in time. What approach do you recommend?",
      buildChoices(
        "Prioritize outreach to largest employers and offer expedited payment options where appropriate.",
        "Targeted outreach plus a short request form and a named liaison reduces inconsistent promises and preserves audit trails while enabling feasible accommodations.",
        10,
        "Engage Fed/NACHA and correspondent banks to identify emergency routing options; pre-clear a prioritized subset of payrolls using pre-validated lists and simple rules, and require dual-approval for any manual wire equivalents.",
        "Pre-clearing a prioritized subset with simple rules and dual-approval can operationalize expedited routing while maintaining controls and auditability.",
        5,
        "Ask businesses to arrange alternative payrolls through their backup payroll providers and other banking relationships while offering to reimburse reasonable administrative fees where documentation shows direct costs. This approach requires affected businesses to take immediate action to secure alternative processing, placing the burden of finding solutions on the employers rather than the bank.",
        "Reimbursement helps but is often impractical at scale; pairing guidance with prioritized direct assistance for critical employers mitigates harm.",
        -5,
        "Consider manual wires for the largest, highest-impact payrolls where existing controls and approval procedures permit, and publish clear eligibility criteria and detailed reconciliation procedures for all manual processing activities to ensure proper documentation and audit trail maintenance.",
        "Manual wires for the largest payrolls can be practical if controls and eligibility are clear, but fairness and resource limits must be managed.",
        -5
      )),
    q("Finance", "Your cyber insurance policy has a $500,000 retention and covers ransom payments, business interruption, and forensics costs. The adjuster is requesting extensive documentation, but your team is consumed with recovery operations. They've also asked whether the bank complied with all policy requirements regarding security controls. How do you manage the insurance relationship?",
      buildChoices(
        "Appoint a dedicated coordinator to gather documentation and request interim payments with evidence packet.",
        "Coordinator-led engagement preserves recovery focus while enabling insurer intake and interim payments; counsel involvement reduces coverage risk and systematic cost tracking and chain-of-custody preserve claim defensibility while SLAs ensure timely insurer coordination. Assign a named insurance liaison with SLAs for evidence delivery and reconciliation.",
        10,
        "Propose an intake call with insurer and broker to agree a phased documentation plan, request conditional interim payments for clearly defined urgent costs upon submission of an initial evidence packet, and assign a single liaison with SLAs to manage insurer queries. Coordinate a rapid counsel review of substantive statements before making admissions while keeping recovery teams focused on operational priorities.",
        "An intake call that requests conditional interim payments and assigns a liaison with SLAs speeds liquidity to critical tasks while preserving coverage positions through counsel-reviewed communications.",
        5,
        "Have the CFO personally handle all insurance communications to ensure consistent messaging and appropriate seniority given the financial stakes. This approach centralizes decision-making and reduces the risk of inconsistent statements or inadvertent admissions that could jeopardize coverage, though it places additional burden on executive leadership during an already demanding crisis period.",
        "CFO attention signals seriousness but executive time during crisis is precious; insurance coordination is important but can be delegated with appropriate oversight.",
        -5,
        "Focus entirely on recovery and address insurance documentation requirements after systems are fully restored and tested, since the policy will cover legitimate costs regardless of when the supporting documentation is ultimately submitted to the carrier for review.",
        "Recovery priority is correct but ignoring insurance creates problems: late notice can jeopardize coverage, undocumented costs may be unrecoverable, and coverage disputes become harder to resolve with time.",
        -5
      )),

    // Loans
    q("Loans", "You have $23 million in loan disbursements scheduled for the next 48 hours, including several construction loans with funding deadlines tied to contractor schedules. Your loan origination system is encrypted and manual disbursement is possible but risky without normal controls. What's your approach?",
      buildChoices(
        "Implement emergency manual procedures with enhanced controls and dual verification.",
        "Emergency procedures balance customer need with risk management; adding a named owner, published checklist and mandatory escrow/pre-funded holds for the largest draws increases accountability and reduces fraud exposure while preserving urgent funding paths.",
        7,
        "Stand up a narrowly scoped, documented manual disbursement channel led by a senior credit officer with mandatory treasury sign-off: authorize time-critical construction draws through a third-party escrowed-release or pre-funded hold, require independent borrower confirmation to a pre-validated contact, dual officer verification, same-day reconciliation, and a mandatory staff checklist that includes a call-back verification log and treasury settlement confirmation. Publish the checklist and escalation path to staff with a designated compliance reviewer to avoid ad-hoc deviations.",
        "Senior-led escrow or pre-funded hold plus mandatory call-back logs, treasury settlement confirmation, a published checklist and compliance reviewer make urgent disbursements operationally achievable while preserving a strong, auditable control framework. Assign a named settlement owner with SLAs for confirmation and audit.",
        6,
        "Process all scheduled disbursements immediately using manual procedures before systems get further behind, dealing with any control issues in post-incident review.",
        "Clearing the backlog seems proactive but 'dealing with control issues later' invites fraud and errors; rush processing without enhanced controls compounds risk rather than managing it.",
        -2,
        "Advise borrowers to seek bridge financing elsewhere if their needs are urgent, offering to reimburse reasonable costs once our systems are restored. This approach requires customers to find alternative funding sources through other financial institutions or private lenders, effectively transferring the bank's operational problem to the borrowers during their time of need and potentially damaging long-term relationships despite the offer of future cost reimbursement.",
        "Bridge financing suggestion may not be feasible for many borrowers on short notice; effectively tells customers to solve the bank's problem themselves; damages relationships.",
        -3
      )),
    q("Loans", "A large commercial borrower (a regional hospital with $45 million outstanding) calls demanding to draw their entire $15 million line of credit immediately, citing concerns about the bank's stability and their need to ensure operational funds. Their line is committed and they have a contractual right to draw. However, processing a $15 million manual disbursement carries significant operational and fraud risk. What do you recommend?",
      buildChoices(
        "Honor the draw with strict safeguards: senior officer call-back, dual approvals, treasury confirmation.",
        "Fulfilling contractual rights while layering call-back validation, dual approvals, treasury confirmation, expedited fraud screening and real-time settlement confirmation preserves legal obligations and reduces operational risk; naming a relationship lead improves communication and trust.",
        7,
        "Offer a senior-led verification and settlement pathway that honors the committed facility: apply pre-validated call-back protocols to a known treasury contact, require treasury authorization of settlement mechanics, expedite fraud screening and wire verification, implement immediate settlement confirmation procedures, and issue a written settlement confirmation with a dedicated relationship contact and checklist for settlement steps. Ensure the checklist is completed and signed by settlement officers.",
        "Pre-validated call-backs, treasury authorization, settlement checklists completed by settlement officers, and immediate confirmation make same-day settlement procedurally safer while preserving the borrower's contractual rights and reducing reconciliation risk. Assign a settlement owner with SLAs to confirm and document settlement steps.",
        6,
        "Process a partial draw of $5 million to meet their immediate needs while requesting they defer the remainder until systems support safer processing.",
        "Partial approach seems like compromise but unilaterally limiting a committed facility is a potential default; the borrower didn't ask for $5 million, they asked for $15 million.",
        -2,
        "Escalate to legal to review whether the ransomware incident constitutes a force majeure event that suspends line of credit obligations during the crisis. This approach seeks to invoke contractual protections that may excuse performance during extraordinary circumstances beyond the bank's control, providing legal justification for temporary suspension of credit facility access while the technical crisis is resolved and normal operational controls are restored.",
        "Legal review may be prudent but using force majeure to decline a committed facility draw will damage the relationship permanently and potentially trigger cross-defaults in their other agreements.",
        -3
      )),
    q("Loans", "Mortgage closing scheduled for today can't proceed because title company can't verify the payoff amount on the existing loan from your core system. The borrowers have a moving truck loaded and their old house buyer's financing is contingent on this closing. Manual records suggest the payoff is approximately $287,000 but can't be verified to the penny. What do you advise?",
      buildChoices(
        "Compute conservative payoff estimate with documented cushion; obtain borrower acknowledgement.",
        "Conservative estimate plus borrower acknowledgement and an escrow option with a named trustee balances closing urgency with auditability and gives the title company clearer assurance; ensure the payoff memo and escrow terms are filed in the loan record and assign an escrow reconciliation owner with SLAs.",
        10,
        "Provide a documented conservative payoff estimate, and if the title company requires stronger assurance, open a short-term independent escrow with a neutral trustee for the disputed portion. Obtain borrower and title company sign-off on escrow terms and commit to a documented independent reconciliation within 72 hours with immediate refund of any overage. Record the methodology and escrow terms in the loan file and issue the title company written confirmation of escrow mechanics; assign an escrow reconciliation owner.",
        "Third-party escrow with neutral custody, documented reconciliation, written escrow confirmation and an assigned reconciliation owner provides a defensible path to closing while protecting all parties and creating an audit trail. Ensure the reconciliation owner has SLAs and a documented handoff.",
        5,
        "Provide the $287,000 estimate verbally to the borrower and allow them to decide whether to proceed with the closing, documenting in the loan file that the borrowers chose to close without a fully verified payoff amount and accepted the associated risks of potential discrepancies.",
        "Borrower choice respects autonomy but 'without a verified payoff' language may spook the title company; approach feels like risk-shifting rather than problem-solving.",
        -5,
        "Decline to provide any payoff information until systems are fully restored since providing inaccurate payoff amounts could create significant liability exposure for the bank and potentially result in regulatory violations regarding proper loan documentation and closure procedures.",
        "Liability concern is valid but declining to help customers close their mortgages during an outage caused by the bank creates customer harm and potential liability of a different kind.",
        -5
      )),

    // Accounting
    q("Accounting", "Day 2 and your GL system is still encrypted. Staff are processing transactions using spreadsheets and manual logs. You estimate 4,000+ transactions have been processed outside normal systems. Some transaction details are incomplete. How do you maintain accounting control?",
      buildChoices(
        "Establish a centralized manual transaction register with standardized fields, sequential numbering, and dual sign-off requirements, and document the residual risks and operational trade-offs. Assign a small dedicated team to maintain the register, require photographic or scanned supporting documents for each high-risk entry, and reconcile daily with explicit exception routing. Create a clear handoff protocol, SLAs for system-entry timelines, and provide a prioritized list of high-risk transactions to aim resources where they matter most. Be realistic about capacity: some low-value items may be batched to preserve resources.",
        "Centralized register prevents fragmented records; targeted supporting requirements, SLAs and exception routing enable reconstruction and auditability while prioritization limits resource strain. Assign a reconciliation owner with SLAs for post-incident reconstruction.",
        10,
        "Adopt a hybrid approach: require centralized capture for high-risk and customer-facing transactions using a mandated template, sequential numbering, required supporting fields, and scanned evidence; allow low-value items to be logged locally and batch-submitted daily. Define explicit dollar/value and risk thresholds for central capture, assign a reconciliation lead (Controller-designated) with 24-hour escalation for anomalies, require daily sampling checks, and enforce system-entry SLAs (e.g., entries posted within 5 business days of restore). Document the sampling methodology, retention policy and reconciliation ownership for manual records.",
        "Hybrid preserves control where it matters while minimizing friction; named ownership, SLAs, sampling and documented retention and ownership make it operationally defensible and auditable. Assign a reconciliation lead with SLAs for deferred items.",
        5,
        "Suspend all non-essential transaction processing until GL is restored to minimize the volume of manual entries requiring reconciliation, but maintain prioritized customer-facing transactions under strict manual controls and escalate any exceptions immediately.",
        "Suspension reduces manual volume and fraud risk while carving a limited pathway for essential customer transactions maintains service where necessary.",
        -5,
        "Focus resources on restoring GL rather than building parallel manual processes, accepting that some transaction detail may be lost but can be reconstructed from bank statements and source documents.",
        "Restoration focus makes sense but 'accepting lost detail' creates audit issues; customer transaction records are not optional documentation; reconstruction is harder and less reliable than contemporaneous recording.",
        -5
      )),
    q("Accounting", "Your external auditors call asking about the incident's impact on your in-progress quarterly financial statement audit. They express concern about internal control reliance and ask whether the incident constitutes a material weakness. How do you respond?",
      buildChoices(
        "Propose an initial focused briefing: incident timeline, effective controls, compensating controls, and a prioritized list of impacts with named remediation owners and an auditor liaison.",
        "Comprehensive briefing with named owners, checkpoints, auditor liaison and evidence timelines demonstrates management ownership and helps auditors evaluate whether the issue rises to a material weakness versus a significant deficiency. Confirm an auditor liaison with SLAs for evidence delivery.",
        10,
        "Acknowledge the criminal nature of the incident and present a focused briefing that lists impacted control areas, interim compensating controls in effect, objective evidence (sample reconciliations, exception logs), named remediation owners with deadlines, and a realistic timeline for returning to normal operations. Propose weekly status checkpoints and commit to delivering targeted evidence packages within agreed timelines to support their evaluation.",
        "Concrete evidence, named owners, and scheduled checkpoints let auditors assess remediation progress rather than react to vague assurances; this shows management ownership and facilitates auditor confidence.",
        5,
        "Ask auditors to postpone their evaluation until the incident is fully resolved so you can provide a complete picture rather than speculating about control implications.",
        "Postponement request may be reasonable but auditors have their own timeline pressures; delay could result in qualified opinion or audit delay that creates market concerns.",
        -5,
        "Provide auditors only the information they specifically request, avoiding volunteering details about control gaps or manual processing volumes that might raise additional concerns.",
        "Minimal disclosure seems protective but auditors will discover the full picture eventually; appearing to hide information damages the relationship and increases skepticism about everything else.",
        -5
      )),
    q("Accounting", "Month-end close is in 5 days. Critical systems won't be fully restored by then. Your close process normally involves 47 reconciliations, many requiring system data that's currently unavailable. What's your approach?",
      buildChoices(
        "Assess each reconciliation individually: which can proceed, which can be estimated with documented assumptions, and which must be deferred; document alternatives and owners.",
        "Individual assessment plus documented alternative procedures, assigned reconciliation owners and timelines preserves reporting integrity and makes deferred work auditable while reducing the risk of later findings. Ensure each deferred item lists an owner and an SLA for completion.",
        10,
        "Request targeted extensions only for specific reconciliations that materially cannot be completed, and propose concrete alternative close procedures agreed with auditors (e.g., expanded sample sizes for later verification, temporary use of bank statements plus signed managerial attestations, and a clear timetable for finalization). Assign owners for each deferred item and capture assumptions and estimation methods in a close memo to support later audit validation.",
        "Agreed alternative procedures with owners and documented assumptions preserve reporting integrity while enabling a practical close.",
        5,
        "Complete the close using best estimates everywhere systems data is unavailable, with a plan to restate if material differences emerge once true data is available.",
        "Estimates are sometimes necessary but 'everywhere' is too broad; restatement risk should be minimized not accepted as likely; auditors may not accept this approach.",
        -5,
        "Skip this month's close entirely and do a combined two-month close once systems are fully restored and tested, ensuring complete accuracy.",
        "Skipped close creates significant reporting problems; regulatory filings, board reporting, and management visibility all depend on timely financial information; combined close doesn't eliminate the work, just defers it.",
        -5
      )),

    // Deposits
    q("Deposits", "Branch lobbies are packed with anxious customers demanding to withdraw funds and close accounts. Wait times exceed 2 hours. Some customers are verbally abusing tellers, and two tellers have been reduced to tears. News cameras have arrived and are filming the lines. What immediate actions do you take?",
      buildChoices(
        "Deploy additional staff, assign rotating managers to triage and de-escalate, and authorize short teller breaks; issue a coordinated holding statement.",
        "Staffing plus manager triage reduces wait times and stress while a coordinated holding statement and documented limits prevent inconsistent local promises; assign a branch ops owner with SLAs.",
        10,
        "Create a 'fast lane' for simple withdrawals, route complex cases to a staffed help desk, publish teller FAQs and eligibility rules, and post clear signage and social updates to reduce confusion.",
        "Fast lanes and clear guidance improve throughput and reduce escalation; FAQs and signage help ensure consistent, auditable handling of exceptions.",
        5,
        "Temporarily close the most affected branches to protect staff while directing customers to nearby open branches, ATMs and a staffed hotline for urgent issues.",
        "Closing some branches can protect staff but worsens public perception; directing customers to alternatives and staffing a hotline mitigates immediate access issues.",
        -5,
        "Use trained security to de-escalate only where necessary, prioritizing manager-led de-escalation and staff safety measures before removals.",
        "Security involvement must be measured; de-escalation and manager presence reduce the need for removals and avoid negative optics.",
        -5
      )),
    q("Deposits", "A major employer in your market (8,000 employees) contacts you saying they're considering moving their payroll account to a competitor because their employees didn't get paid due to your ACH failure. The account represents $24 million in average deposits. How do you handle this situation?",
      buildChoices(
        "Have a senior executive call the employer's CFO personally to apologize, explain the facts and remediation steps, and offer immediate remediation support where appropriate.",
        "Executive outreach demonstrates accountability; combining it with a single point-of-contact, eligibility rules, recorded agreements and timelines prevents overpromising while addressing employee harm directly. Assign a remediation owner with SLAs for employer and employee reconciliation.",
        10,
        "Offer a targeted remediation package: immediate provisional payroll support (wires or cashier's checks) for impacted employees, a dedicated account team to coordinate settlements, documented eligibility criteria, a short SLA for resolving claims, and a fraud‑verification step to prevent abuse. Provide an agreed communication plan and single coordination point to keep employees informed and document all remediation steps for reconciliation.",
        "Defined eligibility, SLA commitments, a clear communication plan, and fraud checks give employers actionable remediation while protecting the bank and ensuring scarce operational resources are used appropriately.",
        5,
        "Explain that the incident was caused by criminal attackers and that no bank can guarantee immunity from such attacks, emphasizing your strong track record before this incident.",
        "Factual explanation is accurate but doesn't address their employees' missed paychecks; essentially telling them 'not our fault' when their employees couldn't pay rent.",
        -5,
        "Accept that they'll likely leave and focus resources on retaining customers who haven't yet indicated they're considering leaving.",
        "Triage thinking has logic but $24 million in deposits is significant; writing off the relationship before attempting to save it concedes too easily.",
        -5
      )),
    q("Deposits", "It's Day 4 and online banking is partially restored. Customers can view balances but some are seeing incorrect information - transactions that processed during the outage aren't reflected yet. Social media is exploding with customers posting screenshots of 'wrong' balances and speculating about lost money. How do you address this?",
      buildChoices(
        "Issue an immediate multi-channel communication acknowledging that balance displays may be incomplete and provide an estimated synchronization timeline.",
        "Transparent multi-channel messaging and prioritized outreach reduce panic, but coordination with operations is essential to avoid promising timelines or capabilities you can't deliver.",
        10,
        "Publish a concise multi-channel advisory explaining which balances may be incomplete, an estimated sync timeline, a staffed verification hotline with trained agents who can confirm critical balances from back-end data, and proactive outreach to high-balance or vulnerable customers to offer manual verification and scheduled follow-ups. Post sample scripts and FAQs for frontline staff and schedule periodic public updates to reduce rumor-driven escalation.",
        "A staffed hotline, sample scripts, and periodic public updates give practical reassurance to at-risk customers and reduce social media-driven panic, provided staffing and back-end access are coordinated to meet the commitments.",
        5,
        "Take online banking back offline until all data is fully synchronized to avoid confusing customers with incorrect information.",
        "Removing access they just got back is frustrating; customers who can see their balances (even if incomplete) are better off than those with no visibility; this extends the outage for a data quality issue.",
        -5,
        "Let customers know through the call center that they can call in to verify their actual balances but avoid public communications that might highlight the data synchronization issue.",
        "Call center option is good but expecting customers to call rather than proactively communicating puts burden on them; avoiding public communications doesn't make the social media speculation disappear.",
        -5
      )),
  ]
};




/* ------------------------- SCENARIO 2 ------------------------- */
const SCENARIO_LIQUIDITY = {
  key: "liquidity-stress-event",
  title: "Liquidity Stress Triggered by Market News",
  description:
    "Breaking market news triggers unusual withdrawal activity and increased customer inquiries about the bank's strength. Leadership activates the Liquidity Playbook.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "It's 7:15 AM. Social posts claim a nearby bank was closed by regulators and customers are already lining up before opening. Online banking logins have spiked ~340% and local TV is arriving. What's your immediate action?",
      buildChoices(
        "Hold a brief crisis leadership standup, ask Treasury to verify liquidity, and issue a short factual message and branch talking points.",
        "A short, coordinated standup plus factual messages arms frontline staff and keeps communications consistent while letting Treasury confirm facts; it balances speed and accuracy.",
        10,
        "Monitor the situation for a short period before speaking publicly — the social panic might subside without intervention.",
        "Waiting cedes the narrative to speculation; sometimes a rapid assessment shows panic will pass without amplification, though it risks ceding control of the message.",
        5,
        "Post a brief factual update highlighting a couple of verified strength indicators and point customers to official channels for details.",
        "A short factual post can reach customers quickly but must avoid unverified claims; pairing it with branch talking points maintains consistency.",
        -5,
        "Focus on immediate operations — deploy cash and extend branch hours — and provide a minimal communications note about where to get verified information.",
        "Operations matter but customers also need clear guidance; pairing a short communications note with operational support reduces panic and prevents mixed messages.",
        -5
      )),
    q("CEO/SVPs", "By noon the morning rush is handled but withdrawals are 8× normal. Treasury warns that if this pace continues three days you may need to draw contingency credit. A board member, a reporter, and your regulator are requesting updates. How do you prioritize?",
      buildChoices(
        "Brief the board with facts, promptly update the regulator with the same information, and provide a concise spokesperson statement to the reporter so stakeholders hear from you first.",
        "Board member needs information to fulfill governance role; regulator communication maintains the relationship and prevents them from forming concerns based on external information; reporter statement provides your perspective rather than 'bank declined to comment.'",
        10,
        "Prioritize the regulator call first since they have supervisory authority; the board member and reporter can wait a short time.",
        "Regulator is important but not so urgent it should delay a 5-minute board member briefing; making the board member wait when they're concerned creates governance tension; all three can be handled within an hour.",
        5,
        "Decline the reporter interview and concentrate on the board and regulator to avoid media amplification.",
        "Declining media requests when cameras are at your branch means the story runs without your input; 'bank declined to comment' sounds worse than a factual statement; you don't control whether coverage happens, only whether you participate.",
        -5,
        "Delegate all three communications to others so you can remain focused on operations.",
        "Some delegation is appropriate but CEO/SVP voice is important for all three audiences during a crisis; board member calling the CEO expects to speak with the CEO; regulator and reporter may also expect senior leadership.",
        -5
      )),
    q("CEO/SVPs", "Day 3: withdrawals have slowed to 2× normal, but a Facebook rumor claims your bank is 'about to be sold,' which is false. Marketing wants a denial; legal advises silence. What do you decide?",
      buildChoices(
        "Issue a concise factual statement that no sale discussions exist, prepare consistent branch talking points, and avoid extended back-and-forth with rumor sources.",
        "Direct address stops the rumor's spread; factual statement is defensible; not engaging in back-and-forth avoids amplification; branch preparation ensures consistent response; recognizing the rumor is driving behavior distinguishes this from ignorable noise.",
        10,
        "Publish a high-level message about the bank’s community commitment rather than a simple denial.",
        "Overly detailed response looks defensive and may amplify the rumor more than a simple denial; detailed 'we'd never sell' statements may also be remembered if circumstances ever change.",
        5,
        "Follow the lawyer’s advice and say nothing to avoid dignifying the rumor.",
        "Legal caution is understandable but the rumor is causing real-world behavior (withdrawals); letting false information spread unchallenged when it's affecting your business is worse than the risk of engaging.",
        -5,
        "Threaten legal action against people spreading the rumor to show you're serious.",
        "Legal threats against community members on Facebook will backfire spectacularly; it will become the story instead of your bank's stability; this is how small crises become PR disasters.",
        -5
      )),

    // IT/Security
    q("IT/Security", "A 340% spike in logins is causing slow page loads and timeouts, which fuels a 'locked out' narrative. Adding server capacity will take 4–6 hours; rate limiting could slow heavy/malicious traffic sooner. What do you do?",
      buildChoices(
        "Start capacity expansion while deploying targeted rate limiting to reduce automated traffic and preserve normal customer access; prioritize login and balance-check functions and communicate briefly about high volume and remediation work.",
        "Both actions work faster together than either alone; intelligent rate limiting preserves legitimate access; prioritizing critical functions focuses resources; proactive communication prevents 'locked out' narrative.",
        10,
        "Focus only on adding capacity — avoid rate limiting so customers don't feel restricted.",
        "Capacity-only means 4-6 hours of degraded service during a crisis; intelligent rate limiting can distinguish between customers checking balances and bots hammering your systems; the goal is preserving access, not avoiding any controls.",
        5,
        "Implement aggressive rate limiting immediately to stabilize the system; customers can tolerate slower responses.",
        "Aggressive rate limiting without distinguishing traffic types may block legitimate customers; 'customers can wait' during a bank run is dangerous thinking; this could worsen the situation.",
        -5,
        "Treat performance as non-urgent and address it during the normal change window tonight.",
        "Waiting for normal change windows during a crisis that's being affected by system performance is inappropriate; timeout errors during a bank run create exactly the panic narrative you're trying to avoid.",
        -5
      )),
    q("IT/Security", "You detect credential-stuffing attacks during the traffic spike. Extra authentication would increase customer support load. What's your approach?",
      buildChoices(
        "Deploy risk-based authentication that challenges only high-risk patterns (new device/location or rapid repeats) and brief fraud operations on the pattern.",
        "Risk-based approach balances security and customer experience; targeting genuinely suspicious patterns catches attackers without burdening legitimate users; fraud team briefing ensures coordinated response.",
        10,
        "Require additional authentication for all logins during the crisis; customers will accept friction given the circumstances.",
        "Universal challenges during a crisis will drive more calls to overwhelmed service lines and may convince customers the bank is 'making it hard to get my money'; this adds friction when you need to reduce it.",
        5,
        "Temporarily disable the extra security measures to prioritize access and address fraud later.",
        "Disabling security during a crisis when attackers are specifically targeting you is extremely risky; fraud losses during this period could be substantial; 'address fraud later' may mean significant losses.",
        -5,
        "Assume existing controls suffice and focus only on customer access.",
        "Letting attacks continue when you've detected them is negligent; existing controls catch 'most' means some succeed; if accounts are compromised during the crisis, it adds a fraud incident to your liquidity incident.",
        -5
      )),
    q("IT/Security", "Day 2: a tech blogger posts speed-test screenshots from the outage (now fixed). Their post is spreading in rumor groups. Do you engage?",
      buildChoices(
        "Acknowledge the prior issues, explain capacity was added and current performance is normal, and offer to answer technical questions or invite a re-test; keep the tone factual and non-defensive.",
        "Factual acknowledgment doesn't deny the real problem they captured; explaining the fix shows responsiveness; inviting re-test demonstrates confidence; not being defensive builds credibility.",
        10,
        "Ignore it — engaging may amplify the story further.",
        "Ignoring leaves their narrative as the only one; the connection to existing rumor groups means it's already amplified; a factual response from you is better than the story spreading unchallenged.",
        5,
        "Have legal demand the post be taken down since it is now outdated.",
        "Legal demands to take down factual (if outdated) information will backfire; the blogger will post about the legal threat and it becomes a bigger story; this is reputation damage disguised as reputation protection.",
        -5,
        "Publish your own speed-test results proving the app works perfectly.",
        "Proving they were 'wrong' when they documented a real problem makes you look dishonest; the screenshots show what actually happened on Day 1; this isn't about winning an argument, it's about maintaining credibility.",
        -5
      )),

    // HR
    q("HR", "Branch staff are exhausted after handling 5× normal volume; one teller broke down. A manager asks to close early for employee wellbeing, but you worry about the signal it sends. What do you advise?",
      buildChoices(
        "Avoid closing early if possible; provide immediate support (temporary staff, overtime premiums, on-site HR, and EAP access), and excuse any staff needing immediate rest.",
        "Avoiding early closure prevents harmful signal; additional staff reduces burden on existing team; overtime premiums and food show appreciation tangibly; HR presence provides support; EAP referral helps the individual without forcing them to struggle through.",
        10,
        "Approve an early closure — employee wellbeing must come first; customers can use ATMs and online banking.",
        "Early closure during a liquidity event signals that something is wrong; 'customers can use other channels' when customers want face-to-face reassurance misses the point; wellbeing matters but there are ways to support it without closing.",
        5,
        "Tell the manager everyone needs to push through — this is what they signed up for.",
        "'Push through' without support is how you get turnover and breakdowns; 'what they signed up for' is dismissive of genuine stress; this response will damage morale further.",
        -5,
        "Replace stressed staff with other-branch employees who didn't handle the surge.",
        "Removing staff who've been handling the situation may feel punitive to them; new staff won't know the customers or the context; rotation can help but wholesale replacement is disruptive.",
        -5
      )),
    q("HR", "The next morning three employees call in sick, including a key teller. The operations manager wants documentation for sick calls this week. You're concerned about morale and legal risk. What's your guidance?",
      buildChoices(
        "Avoid extra documentation requirements; have managers check in supportively, authorize temp or reallocated staffing, and address stress drivers rather than policing absences.",
        "Documentation requirements during crisis are legally and morally problematic; supportive outreach shows care while gathering information; temp staffing addresses the operational need; root cause focus is correct approach.",
        10,
        "Require documentation for this week only, given the circumstances, and explain the reason clearly.",
        "Even time-limited documentation requirements during a crisis send the wrong message; 'extraordinary circumstances' sounds like threatening employees during their hardest week; this may increase stress-related absences.",
        5,
        "Mark the absences unexcused and counsel employees on return about commitment during difficult times.",
        "Punitive treatment of stress-related absences will spread through your workforce instantly; 'commitment counseling' after employees struggled through a crisis is toxic; this creates long-term retention problems.",
        -5,
        "Call absent employees at home to verify illness before approving sick time.",
        "Calling employees at home to verify sickness is invasive, potentially illegal depending on jurisdiction, and signals profound distrust; this will damage your culture far beyond the current crisis.",
        -5
      )),
    q("HR", "A week later things have stabilized. Marketing wants a social campaign recognizing 'heroes'; HR worries employees who struggled may feel excluded. How should recognition be handled?",
      buildChoices(
        "Recognize the team's effort broadly rather than singling individuals; favor internal recognition (team lunch, CEO thanks, small bonuses) over external social media featuring specific employees.",
        "Team recognition is inclusive; internal recognition avoids the problems of external campaigns; acknowledging difficulty validates everyone's experience; avoiding hero narratives prevents creating implicit villains.",
        10,
        "Run the social campaign featuring employees who volunteer to participate — it can boost morale and marketing.",
        "Voluntary participation still creates visible in-group/out-group; employees who struggled may feel coerced to participate or shamed for not being featured; mixing employee recognition with marketing has risks.",
        5,
        "Skip recognition — everyone was just doing their jobs and special recognition sets unrealistic expectations.",
        "No recognition after an extremely difficult period is demoralizing; 'just doing their jobs' dismisses genuine above-and-beyond effort; this approach damages engagement.",
        -5,
        "Use recognition to imply those who called in sick let teammates down.",
        "Using recognition to shame absent employees is toxic; this guarantees turnover and creates a culture of fear; employees will remember this messaging forever.",
        -5
      )),

    // Finance
    q("Finance", "Treasury reports $8M drawn from cash reserves over two days; buffer is $45M. You have an untested $20M FHLB line; CFO proposes drawing $10M now at +75bps. Recommendation?",
      buildChoices(
        "Draw $10M now to establish a buffer and test the contingency process; the carry cost is a modest insurance premium and confirming access reduces operational risk.",
        "Drawing now provides liquidity buffer and tests the process; carrying cost is reasonable insurance premium; discovering operational issues proactively is valuable; proven access gives confidence for further draws if needed.",
        10,
        "Wait until another $10M in reserves is used before drawing — you still have buffer.",
        "Waiting until you're deeper into reserves to test contingency funding is backward; if the FHLB draw has issues, you want to discover them with $35M remaining, not $25M; proactive positioning is better than reactive.",
        5,
        "Draw the full $20M to maximize the buffer while uncertain.",
        "Full draw may be excessive and expensive; it may also signal to the FHLB that you're more concerned than you are; measured draw is more appropriate than maximum draw.",
        -5,
        "Avoid using the FHLB line because it will appear in financials and cause concern if noticed.",
        "Avoiding contingency funding to manage appearances is exactly backward; contingency lines exist to be used; not using available funding during a stress event to avoid disclosure is poor risk management.",
        -5
      )),
    q("Finance", "Day 4: deposit base is down $12M (≈2.5%). Marketing suggests a 'welcome back' CD special at +50bps; CFO worries about margin. How do you evaluate?",
      buildChoices(
        "Analyze who left — rate-sensitive accounts vs. relationship customers. If departures were confidence-driven, prioritize outreach and confidence-building rather than competing on rate; if rate-sensitive, don’t overpay to chase them.",
        "Deposit analysis determines the right response; rate specials don't address confidence departures; customer outreach addresses actual concerns; recognizing rate-sensitive money isn't worth chasing protects margin.",
        10,
        "Launch the CD special immediately to signal you’re competing for deposits.",
        "CD special as a signal is expensive signaling; competing for deposits through rate when the issue was confidence is ineffective; 'crisis is over' messaging through a rate special is mixed at best.",
        5,
        "Do nothing and let deposits stabilize naturally.",
        "Complete passivity may be appropriate for rate-sensitive departures but ignores customers who left due to fear and might return with outreach; some proactive effort is warranted.",
        -5,
        "Match the market's highest CD rate to be most attractive to returning depositors.",
        "Rate matching race to recapture confidence-driven departures is expensive and ineffective; if customers left because they were scared, the highest rate in the market won't bring them back; this destroys margin.",
        -5
      )),
    q("Finance", "The board requests a post-incident liquidity report. Your Contingency Funding Plan assumed max daily outflow 3% but you saw 5% on Day 1. What do you recommend to the board?",
      buildChoices(
        "Give an honest assessment: calibrate CFP assumptions based on this experience, lower activation triggers, and add social media monitoring as an early warning indicator.",
        "Honest assessment builds credibility; recalibration based on real experience is appropriate; earlier triggers enable faster response; social media monitoring addresses the specific acceleration factor.",
        10,
        "Tell the board the CFP performed well — you managed it successfully so the plan was adequate.",
        "Successful outcome doesn't mean the plan was optimal; assumptions were exceeded, which is worth examining; 'it worked' framing avoids useful analysis of what could be improved.",
        5,
        "Blame original plan authors and recommend a full CFP overhaul.",
        "Blame assignment isn't constructive; complete overhaul implies the plan failed when it actually worked; this framing doesn't help the board understand what happened or what to improve.",
        -5,
        "Minimize the assumption misses to avoid undermining board confidence.",
        "Minimizing findings to manage board perception is poor governance; board needs accurate information to oversee risk; if the CFO is managing information to protect their reputation, that's a problem.",
        -5
      )),

    // Loans
    q("Loans", "During the liquidity stress, you had to slow loan origination to preserve cash. Now that things have stabilized, you have a $3.2 million commercial loan that was ready to close last week - the borrower is frustrated by the delay. Your loan officer says the borrower is threatening to go to a competitor. You've verified the loan is fully approved and creditworthy. How do you proceed?",
      buildChoices(
        "Close the loan promptly - you delayed for legitimate liquidity reasons, not credit concerns, and those reasons have passed. Have your loan officer call the borrower personally to apologize for the delay, explain (generally) that the bank was managing through unusual conditions, and confirm you're ready to close. A small relationship gesture (waiving a minor fee) may help.",
        "Prompt closing is appropriate now that conditions allow; personal outreach addresses relationship damage; general explanation provides context without oversharing; relationship gesture acknowledges the inconvenience.",
        10,
        "Hold off another week to ensure the liquidity situation is truly stable before committing $3.2 million.",
        "Another week's delay after telling the borrower you're ready will likely lose the relationship; if you're confident the crisis has passed, continued delay is excessive caution; you need to resume normal business.",
        5,
        "Let the borrower go to a competitor if they're that impatient - you don't want borrowers who don't understand that banks face occasional constraints.",
        "Losing a creditworthy $3.2M relationship because the borrower was frustrated by crisis-driven delays is poor customer management; 'don't want impatient borrowers' is rationalizing relationship loss.",
        -5,
        "Offer to reduce the loan rate significantly to compensate the borrower for the delay and ensure they don't leave.",
        "Significant rate reduction for a delay you've already explained punishes you for prudent liquidity management; this sets a precedent that delays equal price concessions; a minor gesture is different from a material rate cut.",
        -5
      )),
    q("Loans", "Your mortgage pipeline has 47 loans in process that were delayed by the liquidity event. Rate locks are expiring on 12 of them, and borrowers are asking whether the bank will honor the original rates or require re-locks at current (higher) rates. Your secondary market team notes that honoring expired locks will cost approximately $85,000 in hedge losses. What's your policy?",
      buildChoices(
        "Honor the original rates for locks that expired solely due to your delay - you caused the expiration, not the borrowers. Communicate this policy proactively to all affected borrowers before they ask. The $85K cost is a reasonable price for maintaining your reputation and avoiding 12 potential complaints or lost customers. Document the decision clearly for audit purposes.",
        "Honoring bank-caused expirations is fair; proactive communication builds trust; $85K cost is justified by reputation and relationship value; documentation protects against future questions.",
        10,
        "Honor locks only for borrowers who specifically complain - those who don't ask will accept the re-lock rate.",
        "Inconsistent treatment based on who complains is unfair and risky; borrowers talk to each other and to real estate agents; when word spreads that some got honored rates and others didn't, you'll face bigger problems.",
        5,
        "Require all borrowers to re-lock at current rates - the delays were due to force majeure and you shouldn't bear the cost of market movements.",
        "Force majeure framing for a self-created liquidity stress is weak; borrowers met their obligations and your delay caused the lock expirations; requiring them to bear market risk you created damages relationships and reputation.",
        -5,
        "Split the difference - offer to share the rate increase 50/50 with borrowers as a compromise.",
        "Splitting costs for your own delay isn't really fair to borrowers; it's mathematically convenient but philosophically wrong; if you caused the problem, you should bear the cost.",
        -5
      )),
    q("Loans", "A commercial borrower who drew their entire $500,000 line of credit during the liquidity stress (to 'make sure they had access') now wants to pay it back. They've been a good customer for 8 years and have never previously drawn the line. They clearly panicked along with everyone else. Should you charge the interest for the period they held the funds?",
      buildChoices(
        "Charge the interest - they borrowed money, and borrowing money costs interest. However, use this as a relationship touchpoint: have their relationship manager call to discuss what drove the draw, reassure them about the bank's stability, and thank them for their long relationship. Don't punish, but don't give away interest income either.",
        "Charging interest is appropriate for actual borrowing; relationship touchpoint addresses the underlying concern; not punishing shows understanding while maintaining normal business terms.",
        10,
        "Waive the interest as a gesture of goodwill - they've been a good customer and the draw was driven by your bank's situation, not their need.",
        "Waiving interest for panic draws sets a problematic precedent; the bank's situation was real but managed appropriately; waiving costs for customers who panicked penalizes those who stayed calm.",
        5,
        "Charge a penalty rate for the panic draw to discourage this behavior in future stress events.",
        "Penalty for a customer scared by a real (if overblown) concern about your bank is counterproductive; this guarantees losing an 8-year relationship and becoming a negative word-of-mouth story.",
        -5,
        "Reduce their line of credit availability since they demonstrated they'll draw opportunistically during stress.",
        "Reducing a line for a customer who used it as intended (credit availability during uncertainty) punishes them for your product working as designed; this damages an 8-year relationship over one understandable action.",
        -5
      )),

    // Accounting
    q("Accounting", "During the three-day liquidity stress, your staff made numerous account adjustments - waiving fees for customers who complained, reversing ATM charges, crediting service fees as goodwill gestures. The volume was so high that normal documentation was abbreviated. Now your controller is concerned about the audit trail. You estimate approximately $23,000 in fee waivers and credits were granted. How do you address this?",
      buildChoices(
        "Conduct a post-incident reconciliation: identify all fee waivers and credits from the period, document the reason for each (crisis-related customer accommodation), and create a summary memo explaining the circumstances and total amount. The $23K is a reasonable crisis-response cost, but it needs proper documentation even if created after the fact.",
        "Post-incident reconciliation creates the needed documentation; individual identification enables proper accounting; summary memo provides context; acknowledging reasonable cost frames appropriately.",
        10,
        "Acknowledge the relative immateriality but implement a prioritized post-incident reconciliation plan: require branch teams to submit summarized supporting details for amounts above a modest threshold, produce a concise executive memo, and assign owners to close documentation gaps within a defined timeline.",
        "This balances crisis practicality with audit defensibility: focus effort where it matters while providing a clear trail and remediation responsibility.",
        5,
        "Reverse all the fee waivers and credits that weren't properly documented - staff need to learn that shortcuts aren't acceptable.",
        "Reversing customer accommodations after the crisis is over is terrible customer relations; 'teaching staff a lesson' at customers' expense is wrong; the issue is documentation, not the decision to waive fees.",
        -5,
        "Don't create documentation after the fact - that could look like fabricating records. Just note that crisis conditions prevented normal procedures.",
        "Creating documentation after events isn't fabrication if it accurately reflects what happened; 'crisis conditions prevented normal procedures' without reconciliation leaves the gap; reconstructing records from system data is appropriate.",
        -5
      )),
    q("Accounting", "Your insurance coverage includes 'bank operations disruption' coverage that might apply to some of the liquidity event costs (overtime, temporary staff, expedited cash delivery). The claim would be approximately $45,000 but requires demonstrating that the event constituted a covered 'disruption.' Your CFO wants to file the claim. Your operations team is hesitant because it might raise questions about whether the bank experienced an actual crisis. What's your recommendation?",
      buildChoices(
        "File the claim - you purchased the insurance for situations like this and $45K is material. The coverage question is for the insurer to determine. Document your costs thoroughly. If the claim is approved, you recover costs you legitimately incurred. If denied, you've lost nothing but time. Your hesitancy about acknowledging a 'crisis' shouldn't override recovering covered costs.",
        "Filing is appropriate since you purchased coverage for this purpose; insurer makes coverage determination; thorough documentation supports the claim; recognizing the hesitancy but proceeding anyway is correct prioritization.",
        10,
        "Engage the insurer/broker for a pre-filing intake discussion to confirm what evidence they require; file a focused claim that documents actual, itemized costs and frames the submission against your policy terms rather than applying labels that could create credibility issues.",
        "Aligning claim framing and documentation with insurer expectations increases recovery odds while preserving consistent external messaging.",
        5,
        "Don't file the claim because the $45K isn't worth the questions it might raise with your board, regulators, or customers.",
        "Not recovering $45K in legitimate costs because you're worried about acknowledging you had extra costs is overly cautious; you've already publicly managed the event, and insurance recovery is normal business.",
        -5,
        "File the claim with maximum possible costs including items you're not sure were actually related to the event.",
        "Inflating a claim with uncertain items is inappropriate and potentially fraudulent; insurance claims should reflect actual, documented costs; this creates legal and regulatory risk far exceeding $45K.",
        -5
      )),
    q("Accounting", "During quarterly close, your external auditors ask about the liquidity event and whether it should be disclosed in financial statement notes or MD&A. The event lasted 3 days, you remained well above regulatory minimums throughout, and deposits have substantially recovered. The auditors note that some peer banks have disclosed similar events while others haven't. What's your position?",
      buildChoices(
        "Disclose in MD&A: a brief factual description of the event, how it was managed, and current status. Skip the financial statement notes since there was no material financial impact. Disclosure provides transparency without overstating significance. The fact that peers have disclosed similar events suggests this is becoming expected practice.",
        "MD&A disclosure is appropriate for a significant event even without material financial impact; financial statement notes aren't warranted without material impact; peer disclosure trends support inclusion; brief factual description avoids both under and over-disclosure.",
        10,
        "Form a management disclosure recommendation after consulting legal and auditors: propose a brief MD&A note if operational significance or stakeholder expectations justify it, and document the rationale for the chosen level of disclosure.",
        "This shows management ownership while incorporating auditor and legal input so disclosure is reasoned, not reflexive.",
        5,
        "Avoid any disclosure since the event had no material financial impact and disclosure might alarm investors.",
        "Avoiding disclosure of a significant operational event to prevent investor concern prioritizes message management over transparency; if investors later learn of an undisclosed liquidity event, trust is damaged.",
        -5,
        "Provide extensive disclosure including detailed day-by-day metrics to demonstrate how well the bank handled the situation.",
        "Extensive day-by-day disclosure goes beyond what's needed and may suggest the event was more significant than it was; appropriate disclosure is factual and proportionate, not a detailed defense.",
        -5
      )),

    // Deposits
    q("Deposits", "It's 9:15 AM on Day 1. A customer in your main branch lobby is loudly telling other waiting customers that they saw on the news this bank is 'in trouble' and everyone should get their money out. Several customers look alarmed. Your branch manager asks how to handle this. What's your guidance?",
      buildChoices(
        "Approach the customer calmly and privately, acknowledge concern, offer one-on-one discussion and factual information, and have another staff member reassure other customers—avoid public confrontation.",
        "Calm private approach de-escalates without public confrontation; acknowledging concern validates feelings; factual information addresses the actual worry; not arguing publicly avoids making it a scene; attending to other customers prevents fear spreading.",
        10,
        "Ask the customer to leave if they're going to spread rumors - you can't allow that behavior in your branch.",
        "Asking them to leave will be seen by other customers and look like you're suppressing information; it may also escalate the situation; the customer has a right to their opinion even if it's wrong.",
        5,
        "Make an announcement to the lobby explaining that the bank is financially sound and there's no reason for concern.",
        "Public announcement in response to one customer's comments may amplify rather than diminish the concern; it makes the issue bigger than one person's comments; handle individually rather than broadcasting.",
        -5,
        "Ignore the customer and trust that other customers will recognize unfounded rumors - engaging will only give them attention.",
        "Ignoring while other customers are visibly alarmed lets fear spread unchallenged; the branch manager's silence may be interpreted as confirmation; some response is necessary.",
        -5
      )),
    q("Deposits", "By mid-afternoon on Day 1, your branches have paid out significantly more cash than normal. One branch is running low and needs a cash delivery. Your normal armored carrier can deliver tomorrow morning. You can arrange an emergency same-day delivery for $2,500, or you could transfer cash from another branch using your own staff (against your normal security procedures). What do you decide?",
      buildChoices(
        "Pay the $2,500 for same-day delivery. A branch running out of cash during a liquidity scare - even for an hour - would be catastrophic for confidence. Don't compromise your security procedures for internal transfer. The $2,500 is excellent insurance against a 'bank ran out of money' story that could trend on social media within minutes.",
        "$2,500 is cheap insurance against confidence catastrophe; maintaining security procedures is important; recognizing the social media speed of potential damage justifies the cost.",
        10,
        "Use the normal carrier tomorrow morning - running slightly low isn't the same as running out, and $2,500 is expensive for a few hours of cushion.",
        "Slightly low during a bank run is dangerous - you don't know what the afternoon will bring; $2,500 against the reputational cost of running out is trivial; this is false economy.",
        5,
        "Transfer cash from another branch using your staff - the security procedures are guidelines, not laws, and this is an emergency.",
        "Security procedures exist for good reasons; staff cash transfers create liability exposure; if something goes wrong during the transfer, you've added a security incident to your liquidity incident.",
        -5,
        "Close the low-cash branch early to prevent running out, explaining that you're doing so for 'operational reasons.'",
        "Closing a branch during a bank run for any stated reason will be interpreted as 'they ran out of money'; this is the worst possible outcome; pay for the delivery.",
        -5
      )),
    q("Deposits", "Post-crisis, you're analyzing what happened. You discover that 40% of the elevated withdrawals came from customers who had been with the bank less than 2 years, and specifically those who opened accounts through your online channel (no branch relationship). Longer-tenured customers and those with branch relationships were significantly calmer. What strategic insight do you draw?",
      buildChoices(
        "Digital-only customer relationships are more fragile during stress events - they lack the personal connection and trust that branch relationships provide. This doesn't mean you should abandon digital acquisition, but you should invest in relationship-building touches for digital customers (personal outreach, video calls, branch invitations) to build loyalty that survives stress events.",
        "Recognizing the relationship fragility insight is valuable; not abandoning digital is realistic; relationship-building for digital customers addresses the gap; loyalty that survives stress is the goal.",
        10,
        "Focus future marketing on branch-based customers since they're more loyal - digital customers aren't worth the volatility.",
        "Abandoning digital acquisition because of stress-event behavior ignores that digital is the industry's future; the insight is about relationship investment, not channel abandonment.",
        5,
        "Implement higher balance requirements for digital-only accounts to ensure only committed customers open them.",
        "Balance requirements don't create loyalty, relationships do; this is a barrier to growth that doesn't address the actual issue; many loyal customers started with small balances.",
        -5,
        "The analysis just shows that newer customers are less loyal, which is obvious - there's no meaningful strategic insight here.",
        "Dismissing the digital-relationship correlation as 'obvious' misses the actionable insight; tenure and channel are different factors; the finding that channel matters independently is useful.",
        -5
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
    // CEO/SVPs
    q("CEO/SVPs", "Your wire operations supervisor calls with concerning news: a $847,000 wire transfer was requested via email from your largest construction vendor requesting a change to their banking instructions. The email came from the vendor's actual email address but your dual-control process flagged it because the payment amount doesn't match open invoices. The wire hasn't been sent yet. Your accounts payable clerk is certain the email is legitimate because she recognizes the signature block. What would you instruct the team to do first?",
      buildChoices(
        "Temporarily pause any wire changes or payments and verify the request using an independently sourced phone number. Preserve the email headers.",
        "Independent verification addresses the core BEC tactic of legitimate-appearing emails; preserving evidence enables investigation; convening the team treats this as the serious incident it may be; addressing the clerk's confidence helps prevent future incidents.",
        10,
        "Call the vendor's email address back asking them to confirm the request, since the email came from their legitimate domain.",
        "Replying to or calling the email sender doesn't verify anything - if the account is compromised, the fraudster receives your reply; this is exactly how BEC schemes succeed.",
        5,
        "Allow the payment to proceed since dual control exists and the amount can be recovered if it's fraud - maintaining vendor relationships is important.",
        "Wire transfers are extremely difficult to recover once sent, especially internationally; 'maintaining relationships' by sending potentially fraudulent wires serves no one; dual control exists to stop payments, not to create false confidence.",
        -5,
        "Have the clerk call the number in the email signature to verify before making a decision, since she has the relationship with this vendor.",
        "Phone numbers in email signatures are controlled by whoever controls the email - potentially the fraudster; relationship-based trust is exactly what BEC exploits; verification must use independently sourced contact information.",
        -5
      )),
    q("CEO/SVPs", "Two hours into your investigation, IT confirms the vendor's email account was compromised. The fraudster had access for 3 weeks and monitored invoice traffic. You discover that your bank actually sent a $312,000 wire last week based on a similar request that passed dual control because the amount matched an open invoice. The receiving bank is in Eastern Europe. Your CFO wants to know the communication plan. What should you prioritize in external and recovery communications?",
      buildChoices(
        "Promptly notify law enforcement through your BSA/fraud team and inform your cyber insurer.",
        "Law enforcement notification enables SWIFT recall and international cooperation; insurance carrier notification meets policy requirements and may provide resources; receiving bank contact is time-sensitive; internal communication raises awareness without compromising investigation; LE coordination on external communications protects evidence.",
        10,
        "Immediately notify all vendors that your payment processes are compromised and they should verify all recent payments they've received from you.",
        "Broad vendor notification before you understand the scope may be premature and could tip off the fraudster about your investigation; you should notify the compromised vendor, but mass communication can wait for proper coordination.",
        5,
        "Focus internally first - get the facts, understand how this happened, and prepare a complete communication plan before notifying anyone external.",
        "Internal focus sounds prudent but wire recovery is time-sensitive - every hour reduces recovery probability; law enforcement and receiving bank notification can't wait for a complete communication plan.",
        -5,
        "Immediately issue a press release acknowledging the fraud to demonstrate transparency and protect your reputation before the story leaks.",
        "Press release before coordinating with law enforcement could compromise the investigation and recovery efforts; transparency is important but timing and coordination matter; premature disclosure serves no one.",
        -5
      )),
    q("CEO/SVPs", "It's now Day 3. Law enforcement has opened an investigation but the $312,000 wire is unrecoverable - funds were moved within hours. Your insurance claim is in process with a $50,000 deductible. The compromised vendor is upset they weren't notified immediately and is questioning your security practices. Your board wants a briefing. A local business reporter has called asking about 'wire fraud at your bank.' How do you balance and manage these competing demands?",
      buildChoices(
        "Brief the board first with full facts and remediation plans, Acknowledge the vendor's concerns and explain law enforcement coordination",
        "Board briefing is governance priority with full transparency expected; vendor acknowledgment maintains the relationship while explaining constraints; reporter response is appropriately limited without being evasive; each audience gets appropriate information.",
        10,
        "Decline all external communication until the law enforcement investigation is complete, including no response to the reporter and limited vendor communication.",
        "Complete silence isn't sustainable - the reporter will write a story regardless, and vendor relationship damage will compound; coordinated limited disclosure is better than stonewalling that invites speculation.",
        5,
        "Provide the reporter with a full account to control the narrative and demonstrate your bank's transparency and quick response.",
        "Full disclosure to media before internal stakeholders are briefed inverts proper priorities; 'controlling the narrative' through complete transparency can compromise the investigation and isn't owed to media before your board and affected parties.",
        -5,
        "Focus on defending your bank's practices to the vendor and reporter - your dual control process worked on the larger amount, demonstrating strong controls.",
        "Defensive posture about the successful control while a $312,000 fraud succeeded isn't the right tone; dual control working once doesn't address why it failed before; this framing will frustrate the vendor and skeptical reporter.",
        -5
      )),

    // IT/Security
    q("IT/Security", "Upon examining the fraudulent email, you discover it came from the vendor's legitimate email server - their account was actually compromised, not spoofed. Your email security tools didn't flag it because DMARC/SPF passed. The fraudster used the real account to monitor invoice conversations and timed the request perfectly. Which security improvements should you prioritize?",
      buildChoices(
        "Add or improve external email banners for payment-change requests, deploy conversation-analysis or impersonation detection.",
        "External banners address user awareness regardless of technical authentication; conversation analysis detects the specific BEC pattern used; impersonation detection adds another layer; acknowledging the DMARC limitation shows proper understanding of the threat model.",
        10,
        "Tighten DMARC policies to reject any email that doesn't perfectly authenticate from vendor domains.",
        "Stricter DMARC doesn't help when the email legitimately authenticates from a compromised account - the email WAS from the vendor's server; this addresses the wrong problem.",
        5,
        "Block all emails from the compromised vendor domain until they confirm their security has been restored.",
        "Domain blocking punishes the vendor for being a victim and disrupts legitimate business; the fraudster has already moved on; this is reactive rather than addressing the underlying control gap.",
        -5,
        "Focus on user training since the clerk's certainty about the signature block was the real failure point.",
        "Training alone won't solve this - the email was genuinely from the vendor's account and the signature was real; technical controls are needed because human judgment failed in exactly the scenario BEC is designed for.",
        -5
      )),
    q("IT/Security", "Your wire operations team asks whether they should delete the fraudulent emails to prevent anyone from accidentally acting on similar requests. Your legal counsel wants to preserve all evidence. Marketing wants to use the emails as a training example. The compromised vendor is asking you to share the email headers so they can investigate their own breach. How should the email evidence be handled?",
      buildChoices(
        "Preserve all original emails and headers in a forensic store, do not delete production copies.",
        "Preservation is legally and investigatively critical; vendor sharing helps them remediate their compromise which protects everyone; sanitized training versions serve awareness without compromising evidence; law enforcement clearance ensures you don't interfere with investigation.",
        10,
        "Preserve the emails but decline to share anything with the vendor since they were the source of the compromise and sharing could expose your security practices.",
        "Declining to help the vendor investigate their own breach is counterproductive - they're a victim too and their remediation protects your future dealings; withholding headers doesn't protect meaningful security practices.",
        5,
        "Delete the fraudulent emails from the production email system to prevent accidental action, keeping copies only in a secure evidence folder.",
        "Deletion from production systems could be seen as evidence tampering and may eliminate metadata that only exists in the production environment; the risk of 'accidental action' should be addressed through holds and flags, not deletion.",
        -5,
        "Immediately distribute the emails as a training example to all staff so everyone can see what the fraud looked like and be alert for similar attempts.",
        "Distribution before evidence preservation and law enforcement coordination is premature; sending actual fraudulent emails around the organization creates confusion about what's real; training should use sanitized examples.",
        -5
      )),
    q("IT/Security", "A week after the incident, your email security vendor offers an emergency upgrade that includes AI-powered BEC detection, but it requires sending email content to their cloud for analysis. Your current email security is on-premises. The cost is $45,000 annually. Your CFO is skeptical about more spending after losing $312,000 and questions whether technology would have prevented this. How do you make your case?",
      buildChoices(
        "Explain that this attack exploited a compromised, legitimately authenticated account.",
        "Balanced analysis acknowledges technology limitations while explaining potential benefits; honest privacy evaluation shows security thinking; acknowledging CFO's skepticism shows you're not just seeking budget; layered defense framing is accurate.",
        10,
        "Argue strongly for the upgrade - $45,000 is nothing compared to the $312,000 loss, and opposing it puts the CFO at fault for any future fraud.",
        "Strong argument with implicit blame creates adversarial dynamic; the $45K vs $312K comparison ignores that the tool may not have caught this specific attack; framing it as CFO's fault for future fraud is manipulative.",
        5,
        "Agree with the CFO that technology spending isn't the answer and focus resources on process improvements and training instead.",
        "Dismissing technology improvements entirely swings too far - process and training are important but this attack succeeded partly because email security couldn't detect compromised-account BEC; balanced approach is better.",
        -5,
        "Recommend the upgrade without mentioning the cloud privacy implications since the security benefit outweighs the risk.",
        "Omitting privacy implications from a security recommendation is inappropriate - cloud email analysis has real privacy and compliance implications that leadership should consider; this undermines trust in your recommendations.",
        -5
      )),

    // HR
    q("HR", "The accounts payable clerk who nearly approved the $847,000 wire is shaken - she keeps saying she 'almost lost the bank $847,000' and her supervisor reported she was crying at her desk. The clerk who actually approved the $312,000 wire last week hasn't been told yet that it was fraudulent. Both employees have clean records and good performance reviews. How do you address the human element with affected employees?",
      buildChoices(
        "Acknowledge the first clerk's distress and reaffirm that her vigilance helped catch an attempt, reassure her she's not in trouble",
        "First clerk reframing as success (she caught it) addresses her distress accurately; private supportive conversation for second clerk is appropriate given the circumstances; emphasizing sophistication and procedure-following acknowledges reality; training focus is appropriate for control failures, not performance failures.",
        10,
        "Treat both situations the same way - the fraud succeeded in one case due to luck, not different performance, so both clerks should receive identical support and training.",
        "Identical treatment ignores the psychological reality - one clerk caught fraud and feels terrible, while another approved fraud unknowingly and will feel differently; the situations require different conversations even if the policy response is similar.",
        5,
        "The second clerk should face disciplinary action since she approved a fraudulent wire - procedures exist to prevent exactly this outcome.",
        "Disciplinary action for following procedures that failed is unfair and counterproductive; the fraud succeeded because the invoice amount matched and dual control was satisfied; punishing procedure-following creates fear-based culture where employees won't report concerns.",
        -5,
        "Wait until the investigation is complete before having any conversations with the clerks to avoid influencing their statements.",
        "Waiting to provide support while employees are distressed is harmful; you can provide emotional support and reassurance without influencing factual statements; treating employees as suspects damages trust and culture.",
        -5
      )),
    q("HR", "Your CFO wants to implement mandatory BEC awareness training for all employees who handle payments, but your training calendar is full with required annual compliance training. The training vendor offers a 15-minute micro-learning module on BEC that could be deployed immediately, or a comprehensive 2-hour course available in 6 weeks. Your payment employees are already stressed from the incident. What is your recommendation for timely BEC training given current obligations?",
      buildChoices(
        "Deploy the 15-minute micro-learning now to capture the teachable moment, schedule the full 2-hour course once the compliance calendar allows",
        "Immediate micro-learning captures the teachable moment; comprehensive training later provides depth; stress-as-motivator is supported by adult learning research - relevant, timely training has better retention than abstract compliance training.",
        10,
        "Postpone all BEC training until the compliance training cycle is complete to avoid overwhelming employees and ensure proper attention to required training.",
        "Postponement misses the critical learning window - 6+ weeks from now, the emotional impact will have faded and the training becomes abstract compliance rather than relevant response to lived experience.",
        5,
        "Replace some compliance training with BEC training since the BEC risk is more immediate and real than annual compliance topics.",
        "Replacing required compliance training creates regulatory risk and may not be permissible; the choice isn't either/or - micro-learning can supplement rather than replace.",
        -5,
        "Require the full 2-hour training immediately for all payment employees regardless of other obligations given the seriousness of the incident.",
        "Mandatory 2-hour training immediately after a stressful incident, on top of existing obligations, is overwhelming and may create resentment rather than learning; timing and delivery matter for training effectiveness.",
        -5
      )),
    q("HR", "Three months after the incident, you're conducting annual performance reviews. The clerk who approved the $312,000 fraudulent wire has otherwise excellent performance. Her supervisor asks whether the wire incident should be reflected in her review rating. The employee has not had any other issues and completed enhanced training. Other employees are aware of what happened. How should the incident be reflected in performance reviews?",
      buildChoices(
        "Acknowledge the incident in the review narrative, note completed training and any improvements.",
        "Acknowledgment in narrative provides completeness; protecting rating recognizes she followed procedures; distinguishing systemic from individual failure is important; documentation awareness addresses potential perception issues.",
        10,
        "Exclude any mention of the incident from the review since she wasn't disciplined and including it would essentially be retroactive punishment.",
        "Exclusion creates an incomplete record and may seem inconsistent if others know about the incident; acknowledgment isn't punishment if it's factual and includes context; pretending significant events didn't happen undermines review credibility.",
        5,
        "Reflect the incident in her rating - regardless of procedure compliance, she approved a fraudulent wire and performance reviews should reflect actual outcomes.",
        "Rating reduction for procedure-compliant behavior that had bad outcomes is unfair and creates perverse incentives - employees will avoid any action that could go wrong rather than following procedures; outcomes matter but so does context.",
        -5,
        "Let the supervisor make the call without HR guidance since they know the employee's overall performance and team dynamics best.",
        "Abdicating guidance on a sensitive, precedent-setting review decision isn't appropriate; supervisors need HR support on complex situations; inconsistent treatment across the organization creates risk.",
        -5
      )),

    // Finance
    q("Finance", "Your wire operations procedures require dual control: one person initiates, another approves. Both must verify the payment matches approved invoices and confirm banking instructions against the vendor master file. The $312,000 fraud succeeded because the fraudster knew the exact invoice amount and the request asked to update the vendor master file simultaneously with the payment. Your auditors want to know how you'll prevent this. What control enhancement would you recommend to prevent similar change-and-pay fraud?",
      buildChoices(
        "Require a 24-48 hour waiting period after vendor banking changes before payments go to new accounts.",
        "Time-delay addresses the specific attack pattern by preventing immediate exploitation of changed details; out-of-band verification adds human confirmation; identifying the simultaneous change-and-pay pattern shows you understand how the control was defeated.",
        10,
        "Require three-person approval for all wire transfers over a certain threshold instead of dual control.",
        "Adding a third approver doesn't address the core issue - all three people would likely be fooled by the same legitimate-looking email with matching invoice amounts; more people reviewing the same information doesn't improve detection.",
        5,
        "Require vendors to submit banking changes in writing on company letterhead through physical mail.",
        "Physical mail requirement is impractical in modern business and easily forged; it creates process friction without addressing the core issue of verifying legitimacy; fraudsters can mail letters too.",
        -5,
        "Remove dual control and have a single senior person responsible for all wire decisions, reducing the chance that fraudulent requests pass through multiple people.",
        "Removing dual control eliminates a key fraud prevention mechanism; a single person is MORE susceptible to fraud, not less; this is backward from control theory.",
        -5
      )),
    q("Finance", "The $312,000 is being written off as an operating loss. Your insurance will reimburse $262,000 after the deductible. You're preparing quarter-end financial statements and the external auditors are asking questions. The loss is material enough to require disclosure but your CEO is concerned about the reputational impact of discussing fraud in public filings. How should the loss and insurance recovery be disclosed in quarter-end reporting?",
      buildChoices(
        "Disclose the loss and expected insurance recovery in the financial statements and notes as required by GAAP.",
        "GAAP disclosure is required and non-negotiable; factual without excessive detail protects both compliance and reputation appropriately; auditor collaboration ensures proper treatment; clearly stating reputation doesn't override requirements shows appropriate priorities.",
        10,
        "Defer to the CEO's concerns and work with auditors to characterize the loss in a way that doesn't mention fraud specifically - perhaps as a 'vendor dispute' or 'operational adjustment.'",
        "Mischaracterizing a fraud loss to avoid disclosure creates audit and regulatory risk; auditors may not accept euphemistic characterizations for known fraud; this prioritizes reputation over accuracy.",
        5,
        "Provide auditors with minimal information and push back on detailed disclosure requirements - the fraud investigation is ongoing and detailed disclosure could compromise it.",
        "Withholding information from auditors is inappropriate regardless of investigation status; detailed disclosure requirements exist for a reason; investigation status doesn't override financial reporting obligations.",
        -5,
        "Disclose the incident comprehensively in the financial statements including how the fraud occurred and what controls failed to demonstrate transparency.",
        "Comprehensive disclosure of control failures goes beyond required disclosure and creates unnecessary reputation and litigation risk; transparency is good but financial statement notes aren't the place for incident post-mortems.",
        -5
      )),
    q("Finance", "Your vendor master file maintenance process requires documented approval for banking instruction changes, but the documentation is a simple email from the requestor's manager. The fraudster's request included what appeared to be appropriate approval. You need to strengthen the process but your procurement team is concerned about adding friction to vendor management. How do you balance control and efficiency for vendor banking updates?",
      buildChoices(
        "Adopt tiered verification: basic administrative updates follow current process, but banking instruction changes require enhanced checks and independent callback verification.",
        "Tiered approach adds friction only where risk justifies it; independent verification addresses the core vulnerability; distinguishing banking from other details shows risk-based thinking; framing as mutual protection addresses vendor relationship concerns.",
        10,
        "Require in-person verification for all vendor banking changes - vendors must appear at the bank with identification to update their payment information.",
        "In-person requirement is impractical for vendors who aren't local and creates significant friction for a relatively infrequent process; it may drive vendors to competitors with easier processes.",
        5,
        "Implement a blockchain-based vendor verification system that creates an immutable record of all banking instruction changes.",
        "Blockchain adds technical complexity without addressing the core issue - the problem is verifying that a change request is legitimate, not recording changes immutably; this is technology looking for a problem.",
        -5,
        "Accept the current process risk since the fraud was caught by dual control most of the time - one successful fraud doesn't justify major process changes.",
        "Accepting $312,000 losses as cost of doing business is poor risk management; the fraud that succeeded used the same method as the one that was caught, so 'most of the time' is luck, not control; this attitude invites repeat incidents.",
        -5
      )),

    // Loans
    q("Loans", "Your commercial lending team frequently wires loan proceeds to third parties designated by borrowers - title companies, contractors, equipment vendors. The BEC incident has made you realize these wires use similar processes to vendor payments. Last month you wired $1.2 million to a contractor based on borrower email instructions. How do you assess and address this exposure?",
      buildChoices(
        "Review recent loan funding wires for change-and-pay patterns and require independent callback verification for third-party disbursements. Add documented closing-instruction checks to loan files; borrowers and vendors face similar BEC risks.",
        "Pattern review assesses existing exposure; callback verification addresses the control gap; documentary requirements create enforceable process; recognizing borrowers are susceptible shows complete threat understanding.",
        10,
        "Adopt a risk-based approach that treats routine, pre-authorized payees (recurring vendors and established contractors) with streamlined verification, while requiring voice-based callback confirmation to independently sourced contacts for any new or changed third-party payees or wiring instructions.",
        "Risk-based differentiation balances efficiency for predictable, low-risk flows and stronger controls for change events; independent callbacks stop BEC-style changes while reducing friction for trusted payees.",
        5,
        "Require all loan disbursements to go directly to borrowers, who can then pay their own contractors and vendors.",
        "Direct-to-borrower only creates problems for construction loans and other legitimate third-party payment structures; it shifts fraud risk to borrowers without eliminating it and may lose business.",
        -5,
        "Add BEC warning language to loan documents so borrowers are on notice and the bank isn't liable if their instructions are fraudulently intercepted.",
        "Liability shifting through document language doesn't prevent the fraud or protect the borrower relationship; you're still going to have an unhappy borrower and potential litigation even if your documents provide a defense.",
        -5
      )),
    q("Loans", "A construction loan borrower calls upset because their project is delayed - you placed a hold on a $340,000 draw request after the BEC incident because it included updated wiring instructions for the general contractor. The borrower verified the instructions are legitimate and is frustrated by the delay. Your loan officer wants to release the funds to maintain the relationship. How do you proceed?",
      buildChoices(
        "Keep the hold until you independently verify the contractor's instructions using a sourced phone number, not details in the request. Explain this protects the borrower as well and complete verification quickly to limit delay.",
        "Maintaining the hold until verification is complete protects everyone; independent sourcing is critical - the borrower's verification may also be compromised; framing as mutual protection addresses the relationship concern; quick completion shows responsiveness.",
        10,
        "Use an expedited, documented verification SLA: the loan team will independently confirm wire instructions by calling the contractor via an independently sourced number within two hours; if verified within SLA, release funds immediately and record the verification steps. If not verified, maintain the hold until confirmed.",
        "An SLA-driven verification process preserves borrower timelines while keeping independent authentication central; it balances responsiveness with control and gives the loan officer a clear, actionable path to resolve disputes quickly.",
        5,
        "Release the funds but document that the borrower provided verification, protecting the bank if the wire turns out to be fraudulent.",
        "Documentation doesn't prevent fraud or necessarily protect the bank from claims that it should have had better processes; this prioritizes covering the bank over preventing harm to the borrower.",
        -5,
        "Refer the borrower to your legal department since they're disputing a bank policy and you can't make exceptions to fraud controls.",
        "Legal referral is unnecessary escalation that will further frustrate the borrower; this is a process issue that can be resolved through verification, not a legal dispute; this response appears to hide behind policy.",
        -5
      )),
    q("Loans", "Your mortgage team regularly wires payoff funds to other financial institutions. A mortgage processor notices that a payoff statement from another lender has different wiring instructions than the same lender used last month. The processor asks whether the new enhanced verification procedures apply to financial institution wires or just vendors. What's your guidance?",
      buildChoices(
        "Enhanced verification applies - financial institutions can be impersonated too, payoff fraud is a known scheme",
        "Including financial institutions in verification shows consistent risk management; streamlined process for known correspondents is practical; flagging the specific instruction change shows appropriate concern and judgment.",
        10,
        "Financial institutions are lower risk than vendors since they're regulated entities with established banking relationships - normal procedures should apply.",
        "Regulated status doesn't prevent impersonation or compromise; payoff fraud schemes specifically target the assumption that bank-to-bank wires are safer; the changed instructions are a red flag regardless of recipient type.",
        5,
        "Apply the same callback procedures to all wires regardless of recipient type - no exceptions for financial institutions.",
        "No-exception approach sounds rigorous but may be impractical - you can't call back every receiving bank on the same terms as a vendor; risk-based procedures can be appropriate while still being thorough.",
        -5,
        "The processor should use their judgment - if the overall payoff statement looks legitimate, the wiring instruction change is probably just an operational update.",
        "Processor judgment without verification is how the original fraud succeeded; 'probably just operational' is exactly what the fraudsters want you to assume; this response undermines the enhanced controls you're implementing.",
        -5
      )),

    // Accounting
    q("Accounting", "You're preparing the accounting entries for the BEC fraud. The $312,000 wire was sent to the legitimate vendor's invoice for legitimate goods received. However, the payment went to a fraudulent account and the vendor never received it. You still owe the vendor. Your controller asks how to record this situation. What's the correct treatment?",
      buildChoices(
        "Record a fraud loss expense for the $312,000 and retain the accounts payable to the vendor.",
        "This maintains correct liability recognition while tracking expected recoveries and ensures cash planning reflects the likelihood of paying the vendor again; careful documentation supports later audit review.",
        10,
        "Record the $312,000 as a reduction of accounts payable now, but document the vendor's lack of receipt and pursue recovery from the intermediary banks and insurer.",
        "Reducing A/P prematurely misstates liabilities and hides the bank's obligation to the vendor; while recovery efforts proceed, financial statements should reflect the true payable position.",
        5,
        "Wait until insurance reimbursement is certain before recording any entries - the net loss may be only the $50,000 deductible.",
        "Waiting for insurance certainty delays recognition of a known loss; GAAP requires recording the loss when incurred and insurance recovery when probable; this approach mismatches timing.",
        -5,
        "Record the payment as a vendor advance since the funds were sent for a legitimate invoice - reclassify to expense only if recovery fails.",
        "Advance classification suggests future benefit from the payment when there is none; the funds went to a fraudster, not the vendor; this misrepresents the nature of the transaction.",
        -5
      )),
    q("Accounting", "Your CFO wants to accelerate the insurance recovery recognition to offset the fraud loss impact on quarterly earnings. The insurance company has acknowledged the claim and is processing it, but hasn't issued a formal commitment letter. The expected recovery is $262,000. Your external auditors are asking about the support for the insurance receivable. What position do you take?",
      buildChoices(
        "Recognize an insurance receivable only when collectibility is probable and the amount is reasonably estimable.",
        "This balances timely recognition with conservative disclosure: use probabilities and sensitivity disclosure when certainty is incomplete and avoid earnings-driven recognition.",
        10,
        "Support the CFO's view conditionally: agree to disclose the expected recovery and include a memorandum of assumptions, but defer recognizing the full receivable until a formal insurer commitment or strong, documented precedent supports probability of payment.",
        "Conditional support preserves management credibility while protecting accounting accuracy; disclosure helps stakeholders without prematurely altering earnings.",
        5,
        "Defer entirely to the external auditors' judgment on recognition since they'll have to sign off on the financial statements.",
        "Deferring your judgment to auditors abdicates management responsibility for accounting positions; auditors evaluate management's conclusions, they don't make them; this isn't appropriate professional practice.",
        -5,
        "Record the full $262,000 receivable now since insurance companies always pay valid claims - being conservative about recognition just makes your results look worse unnecessarily.",
        "'Insurance always pays' isn't documentation for an accounting position; conservatism exists because claims are disputed, denied, or adjusted; this approach prioritizes results over accuracy.",
        -5
      )),
    q("Accounting", "Six months after the incident, you're preparing for the external audit. The auditors want to understand your fraud risk assessment and whether the BEC incident indicated control deficiencies that should be reported. Your controls detected the second attempt ($847,000) but failed to prevent the first ($312,000). The auditors are asking whether this is a significant deficiency or material weakness. How do you frame your response?",
      buildChoices(
        "Provide a frank management assessment that describes the control failure root causes, the specific compensating controls implemented.",
        "Proactive, evidence-backed assessment demonstrates management ownership and helps auditors evaluate classification; prioritizing remediation and providing evidence reduces the likelihood of an adverse auditor conclusion.",
        10,
        "Minimize the event in communications and emphasize the detection of the larger attempted fraud while noting the stolen amount was not material to the financial statements.",
        "Minimization without remediation detail undermines credibility; auditors focus on control root causes and remediation, not just amounts.",
        5,
        "Accept whatever classification the auditors propose to avoid an adversarial relationship - the difference between significant deficiency and material weakness doesn't affect operations.",
        "Passive acceptance abdicates management responsibility to present your position; classification differences matter for reporting requirements and perception; you should engage substantively, not just accept.",
        -5,
        "Present only the detection success ($847,000 caught) and minimize discussion of the failure, letting auditors discover the $312,000 if they ask specifically.",
        "Selective presentation to auditors is inappropriate and will damage credibility if they discover you minimized relevant information; auditors reviewing fraud risk will certainly find the successful fraud; this approach invites deeper scrutiny.",
        -5
      )),

    // Deposits
    q("Deposits", "A business customer comes to your branch claiming they received a fraudulent email appearing to be from your bank requesting they verify their account by clicking a link. The email used your bank's logo and looked legitimate. The customer didn't click but is concerned. You examine the email - it's a well-crafted phishing attempt that spoofed your domain. What's your response?",
      buildChoices(
        "Thank the customer for reporting and not clicking, Collect the email details and report to your IT security team immediately",
        "Thanking the customer encourages future reporting; collecting details enables investigation; warning and education protects the customer; broader advisory consideration shows appropriate concern about scope; campaign recognition shows threat awareness.",
        10,
        "Assure the customer that your bank's email is secure and the email they received must be from a different source that just used your logo.",
        "Assurance about 'your email is secure' misses the point - the phishing email impersonated your bank to attack your customer; this response doesn't address the threat or collect useful information.",
        5,
        "Direct the customer to report the email to the FTC or FBI's IC3 since email fraud is a law enforcement matter, not a bank matter.",
        "Deflecting to law enforcement as 'not a bank matter' abandons your customer and misses valuable threat intelligence; phishing attempts against your customers using your brand are absolutely your matter.",
        -5,
        "Ask the customer to forward the suspicious email to your general customer service email address so the appropriate team can review it.",
        "Forwarding to general customer service may lose critical header information and delay security team review; direct collection or forwarding to a security address is more appropriate.",
        -5
      )),
    q("Deposits", "Following the BEC incident, your tellers are now questioning every wire transfer request more thoroughly. A longtime business customer is frustrated - they've done weekly payroll wires for years with the same instructions and now the teller is calling to verify every transaction. The customer threatens to move their business if 'you can't process a simple wire anymore.' How do you handle this?",
      buildChoices(
        "Have a relationship manager speak with the customer: acknowledge the frustration, explain that recent fraud attempts have required enhanced verification",
        "Relationship manager involvement shows appropriate escalation; acknowledging frustration validates the customer; explaining the context provides understanding; protection framing addresses their concern; streamlined arrangement for recurring transactions balances security and service.",
        10,
        "Apologize for the inconvenience and instruct the teller to use lighter verification for this established customer's regular transactions.",
        "Lighter verification for known patterns is exactly what the BEC attackers exploited - they researched regular transactions to make their fraud match established patterns; this response undermines the control improvement.",
        5,
        "Explain that these are new bank policies and the customer can either accept the enhanced procedures or find a bank with weaker security.",
        "Ultimatum framing is poor customer service and doesn't acknowledge the customer's legitimate frustration; presenting enhanced security as 'take it or leave it' is unnecessarily adversarial.",
        -5,
        "Offer to waive wire fees as compensation for the inconvenience since the enhanced verification is causing service problems.",
        "Fee waiver addresses the wrong issue - the customer's complaint is about time and friction, not cost; waiving fees doesn't fix the process complaint and may not retain the customer.",
        -5
      )),
    q("Deposits", "A business customer reports that their bookkeeper wired $23,000 to a fraudulent account after receiving a BEC email impersonating one of their vendors - the same type of fraud that hit your bank. The customer wants to know if the bank can help recover the funds and whether the bank should have caught this. The wire instructions were legitimate (not to a flagged account) and dual control was satisfied. What's your response?",
      buildChoices(
        "Express empathy and explain the recovery process: you can initiate a wire recall request but recovery depends on the receiving bank and whether funds are still available.",
        "Empathy shows appropriate customer care; explaining recall process sets realistic expectations; distinguishing bank controls from customer decisions is accurate and important; offering resources helps without admitting liability.",
        10,
        "Decline to assist with recovery since the fraud was against the customer, not the bank - the bank processed a valid instruction from an authorized user.",
        "Declining to assist is poor customer service even if technically accurate; you can help with the process without accepting liability; this response damages the relationship unnecessarily.",
        5,
        "Apologize for the bank's failure to detect the fraud and commit to improving your systems to prevent this from happening to other customers.",
        "Apologizing for 'bank's failure' accepts responsibility that isn't yours - the customer's vendor was compromised and the customer authorized the payment; this creates liability exposure without accurate acknowledgment of what happened.",
        -5,
        "Suggest the customer sue their vendor for having insecure email that allowed the fraud to occur.",
        "Legal advice to customers is inappropriate and unhelpful in the moment; suggesting they sue their vendor doesn't help recover funds or address their immediate concern; this response appears dismissive.",
        -5
      )),
  ]
};


/* ------------------------- SCENARIO 4 ------------------------- */
const SCENARIO_REG_EXAM = {
  key: "regulatory-exam-announced",
  title: "Regulatory Exam Announced with Short Notice",
  description:
    "It's Friday at 4:30 PM when you receive a call from your primary regulator: a full-scope safety and soundness examination will begin Monday at 8:00 AM. The exam team of 6 examiners will be on-site for 3 weeks. The Examiner-in-Charge mentions they'll be focusing on credit quality, BSA/AML compliance, IT controls, and liquidity management. Your last exam was 18 months ago with some findings that were due for validation. Your BSA Officer resigned 6 weeks ago and the position is still vacant. Several policy documents haven't been updated since the last exam. Key managers have PTO scheduled for next week, and your annual audit is also scheduled to begin in 2 weeks.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "It's now 5:00 PM Friday. You have the weekend to prepare for examiners arriving Monday. Your BSA Officer position is vacant and BSA/AML is a stated exam focus. Your Chief Credit Officer is on vacation until Wednesday. Several senior managers have flights booked for Monday. What's your immediate prioritization?",
      buildChoices(
        "Designate an acting BSA Officer for the exam, brief senior leaders, request voluntary schedule adjustments where feasible.",
        "Acting BSA designation addresses the most visible gap; CCO contact respects their time while communicating urgency; manager request balances exam needs with employee wellbeing; Saturday meeting uses available time without requiring Friday night chaos.",
        10,
        "Send an all-hands email requiring everyone to cancel PTO and be on-site Monday, given the importance of the exam.",
        "Mandatory PTO cancellation may be legally problematic, damages morale, and signals panic; some staff may have non-refundable travel or family obligations that make compliance impossible.",
        5,
        "Focus the weekend on document preparation and worry about staffing gaps when examiners actually ask questions that reveal the gaps.",
        "Document prep is important but visible gaps like vacant BSA Officer will be noticed immediately; reactive approach to staffing suggests poor preparation and lack of control.",
        -5,
        "Call the Examiner-in-Charge back and request a 2-week delay to allow proper preparation given the short notice.",
        "Delay requests are rarely granted and signal to regulators that you're not examination-ready; the short notice may itself be a message about regulatory concerns; better to demonstrate preparedness.",
        -5
      )),
    q("CEO/SVPs", "Saturday morning, your board chair calls asking why they weren't notified Friday evening about the examination. They learned about it from another board member who heard from a bank employee. The board chair is upset about the communication breakdown and wants to know the plan. How do you handle this?",
      buildChoices(
        "Apologize sincerely for the communication gap - you should have contacted the board chair Friday evening regardless of the hour. Provide a concise briefing on scope, known focus areas, key risks (BSA vacancy, stale policies), and your preparation plan. Commit to daily updates during the exam and ask what level of information they want.",
        "Sincere apology acknowledges the legitimate concern without making excuses; comprehensive briefing demonstrates you have a handle on the situation; asking their preference respects the governance relationship.",
        10,
        "Explain that you were focused on preparation activities Friday evening and planned to brief the board on Monday before examiners arrived.",
        "Explanation sounds like excuse-making; board should know before examiners arrive, not the same morning; Friday evening call was appropriate regardless of how busy you were.",
        5,
        "Point out that the board member who shared the information violated confidentiality expectations about exam notifications.",
        "Deflecting to the leak rather than addressing the communication gap appears defensive; the board chair's concern about not being told is legitimate regardless of how they learned.",
        -5,
        "Suggest that regulatory exams are operational matters and board involvement should wait until there are actual findings to discuss.",
        "Governance framing is incorrect; boards should be informed promptly of regulatory examinations; suggesting they wait for findings signals you might try to manage information.",
        -5
      )),
    q("CEO/SVPs", "On Day 2 of the exam, the Examiner-in-Charge requests a private meeting with you. She expresses concern that several document requests haven't been fulfilled, staff seem unprepared for interviews, and the acting BSA Officer couldn't answer basic questions about transaction monitoring. She asks whether the bank is taking the examination seriously. How do you respond?",
      buildChoices(
        "Acknowledge the concerns without excuses, explain the specific challenges (BSA vacancy, short notice), own the preparation gaps, and commit to remediation (document timeline, interview prep, and bringing in BSA expertise). Ask what would demonstrate appropriate seriousness.",
        "Direct acknowledgment shows you're listening; explaining challenges provides context without excuse-making; specific commitments demonstrate action orientation; asking for guidance shows partnership rather than defensiveness.",
        10,
        "Explain that the short notice made adequate preparation impossible and that the bank shouldn't be judged based on Day 2 performance.",
        "Short notice explanation may have merit but sounds like excuse-making to regulators; asking not to be judged suggests you expect findings and are positioning for a narrative battle.",
        5,
        "Assure her that the bank takes the examination very seriously and that any gaps are temporary issues that will be resolved.",
        "Assurances without specifics are empty; 'temporary issues' minimizes concerns she's raised; this response doesn't address her specific observations.",
        -5,
        "Push back on the characterization, noting that your staff have been working hard and that the exam team's expectations may be unreasonable given the circumstances.",
        "Defensive pushback damages the relationship; questioning examiner expectations rarely ends well; hard work doesn't equal effective preparation.",
        -5
      )),

    // IT/Security
    q("IT/Security", "The IT examiner requests your complete vulnerability scan results for the past 12 months, including all identified vulnerabilities and remediation status. You know that 23 critical vulnerabilities from 8 months ago were closed late (outside policy timeframes), and 4 critical vulnerabilities identified 6 weeks ago remain open. What do you provide?",
      buildChoices(
        "Provide the requested 12-month scan results plus a concise summary of remediation status, late closures, and plans for currently open items, including any compensating controls.",
        "Complete disclosure is required; attempting to hide or filter information will be discovered and damage credibility far more than the findings themselves; contextual summary shows you understand and manage your risk.",
        10,
        "Provide the scan results but exclude the report showing remediation timeframes to avoid highlighting the late closures unless specifically asked.",
        "Selective disclosure is risky; examiners will likely request remediation timeframes anyway and discovering you omitted them intentionally is worse than the original finding.",
        5,
        "Provide only the most recent 6 months of scans, explaining that older data isn't readily accessible and offering to retrieve it if specifically needed.",
        "Partial response to a clear request signals you're hiding something; 'not readily accessible' for 12-month-old IT data isn't credible; this approach invites deeper scrutiny.",
        -5,
        "Request clarification on what they're actually looking for to avoid providing more information than necessary for their review.",
        "Clarification requests for straightforward document requests appear to be stalling; they asked for 12 months of scan results, which is a clear request.",
        -5
      )),
    q("IT/Security", "An examiner is interviewing your network administrator about access controls. Afterward, your admin tells you the examiner asked several questions about a shared administrator account that's used for emergency system access. The admin explained it honestly - the account exists and is used occasionally. You know this account wasn't documented in your policies and violates your access management standards. What do you do?",
      buildChoices(
        "Avoid coaching the admin's testimony. Prepare clear documentation about the shared account (purpose, access, usage, compensating controls) and provide it to the examiner while beginning remediation planning.",
        "Post-interview coaching could be seen as witness tampering; proactive documentation demonstrates transparency and control awareness; remediation planning shows you're addressing the gap regardless of exam outcome.",
        10,
        "Brief the admin on how to answer if asked follow-up questions, emphasizing the compensating controls and limited use of the account.",
        "Coaching testimony appears to be coordinating stories; if the examiner asks the admin again and gets a different answer, credibility is damaged for both the admin and management.",
        5,
        "Wait to see if the examiner raises the shared account as a finding before providing any additional information about it.",
        "Waiting appears to hide known issues; examiners respect proactive disclosure more than defensive reaction to findings they've already identified.",
        -5,
        "Explain to the examiner that the admin may have been confused and that the 'shared account' is actually a properly documented emergency access process.",
        "Contradicting your own staff's honest testimony to examiners is extremely risky; if the examiner asks the admin again or reviews documentation, the contradiction exposes a credibility problem.",
        -5
      )),
    q("IT/Security", "The examiner asks to observe a live demonstration of your incident response procedures by having your team respond to a simulated phishing attack. Your IR procedures are documented but haven't been tested in 9 months - the last test revealed several gaps that were supposed to be addressed but weren't. What's your response?",
      buildChoices(
        "Agree to the demonstration while disclosing your last formal test date and known gaps. Show documented procedures with an honest walkthrough highlighting where execution may differ from documentation.",
        "Transparency about test history and known gaps is better than demonstrating and having those gaps exposed; honest walkthrough shows self-awareness; this approach manages examiner expectations while showing good faith.",
        10,
        "Request time to prepare the team before the demonstration, explaining that you want to ensure the best possible representation of your capabilities.",
        "Preparation request may be reasonable but signals you're not confident in day-to-day readiness; examiners want to see actual capabilities, not rehearsed performances.",
        5,
        "Explain that IR procedures are sensitive and a live demonstration could compromise security controls, offering to walk through documentation instead.",
        "Security sensitivity argument is weak for a simulated exercise with regulators; this appears to be avoiding a test you fear failing; documentation walkthrough doesn't demonstrate actual capability.",
        -5,
        "Conduct the demonstration confidently, hoping the team performs better than the last test and that gaps aren't obvious to the examiner.",
        "Hope isn't a strategy; if the test reveals gaps, you've demonstrated poor capability AND lack of awareness; better to acknowledge gaps upfront than have them discovered.",
        -5
      )),

    // HR
    q("HR", "An examiner wants to interview the employee who handles BSA suspicious activity report (SAR) filings. This employee has been covering BSA duties since the BSA Officer resigned but hasn't been formally designated, trained, or given authority. They're nervous about the interview and worried about saying the wrong thing. How do you prepare them?",
      buildChoices(
        "Be honest with the employee: acknowledge the difficult position, reassure them their job isn't at risk for truthful answers, prepare them to answer honestly (including 'I don't know'), and brief them on their actual responsibilities versus the former BSA Officer's duties. Don't coach scripted answers.",
        "Honest acknowledgment reduces employee stress; job security assurance prevents fear-driven answers; permission to say 'I don't know' is important; distinguishing actual vs expected responsibilities enables accurate testimony.",
        10,
        "Provide the employee with documentation about BSA requirements and coach them on the key concepts so they can answer questions more confidently.",
        "Crash-course training before an exam interview doesn't create actual competence; if the employee gives textbook answers that don't match their actual practice, follow-up questions will expose the gap.",
        5,
        "Have a more senior manager sit in on the interview to help answer questions the employee can't handle.",
        "Manager presence may intimidate the employee and can appear to be monitoring testimony; examiners typically prefer unaccompanied interviews for honest answers; this signals concern about what the employee might say.",
        -5,
        "Request that the examiner interview the acting BSA Officer instead since they're the appropriate person to answer BSA questions.",
        "Redirecting may seem logical but the examiner chose to interview this specific person for a reason; refusing access to requested staff creates friction and suggests you're controlling information.",
        -5
      )),
    q("HR", "During the second week, staff morale is deteriorating. Examiners have been critical in several interviews, a rumor is spreading that the bank 'failed' the exam, and two employees have asked whether they should start looking for other jobs. Your exam coordinator is overwhelmed and snapped at an examiner yesterday. How do you address the organizational stress?",
      buildChoices(
        "Hold a brief all-staff message acknowledging stress, clarifying that exams don't 'pass/fail,' thank everyone, privately support the overwhelmed coordinator, address the snap incident with an apology to the examiner, and consider temporary support for the remaining week.",
        "Staff communication addresses rumor and morale broadly; coordinator support prevents further incidents; direct examiner acknowledgment shows accountability; temporary support addresses root cause of being overwhelmed.",
        10,
        "Send an email reminding everyone that exams are normal and that professionalism is expected regardless of pressure.",
        "Reminder email may seem like scolding during an already stressful time; doesn't address the specific rumor or the coordinator incident; professionalism reminder without support doesn't help.",
        5,
        "Focus entirely on getting through the remaining week and plan to address morale issues after examiners leave.",
        "Deferring morale issues allows problems to compound; more incidents could occur; employees asking about job hunting need immediate reassurance, not post-exam attention.",
        -5,
        "Remove the exam coordinator from their role given the unprofessional behavior with the examiner.",
        "Removal during the exam is disruptive and may be disproportionate; the coordinator may be overwhelmed due to inadequate support; punitive response to stress doesn't address the root cause.",
        -5
      )),
    q("HR", "After the exam concludes, you receive word that findings will include criticism of inadequate staffing in compliance functions, specifically noting the vacant BSA Officer position and undertrained backup staff. The board wants to know why the position wasn't filled before the exam. What do you tell them?",
      buildChoices(
        "Provide an honest timeline: when the position became vacant, what recruiting efforts were made, why the hire hasn't closed, and what interim measures were implemented. Acknowledge that the gap created exam risk and present a concrete plan with timeline for filling the role and addressing training deficiencies. Don't shift blame to HR processes or market conditions.",
        "Honest timeline enables board to understand the situation; acknowledging risk shows awareness; concrete plan demonstrates action orientation; avoiding blame-shifting maintains credibility.",
        10,
        "Explain that the BSA Officer market is highly competitive and qualified candidates are difficult to find, which caused the extended vacancy.",
        "Market conditions may be real but sound like an excuse; doesn't address what interim measures were taken; boards expect management to solve difficult problems, not cite them as reasons for gaps.",
        5,
        "Note that the regulatory exam was surprise timing and that the position would have been filled under normal circumstances.",
        "Blaming exam timing implies you were planning to fill the position eventually but weren't treating it as urgent; suggests compliance staffing depends on exam schedule, not risk management.",
        -5,
        "Suggest that the exam finding is overstated since the bank has never had a BSA enforcement action and day-to-day operations continued without incident.",
        "Challenging finding validity to the board is deflecting; no enforcement action history doesn't mean current staffing is adequate; 'without incident' may not be accurate if issues weren't detected.",
        -5
      )),

    // Finance
    q("Finance", "Examiners are reviewing your Allowance for Credit Losses (ACL) methodology and have questions about your qualitative adjustment factors. Your Q-factors were increased 18 months ago during economic uncertainty but haven't been adjusted since, even as conditions improved. The examiner asks why qualitative factors that were supposed to be temporary haven't been reconsidered. What's your response?",
      buildChoices(
        "Acknowledge the Q-factors should have been formally reconsidered. Present current credit metrics and outlook, and commit to a formal quarterly Q-factor review process with documentation focused on process improvement.",
        "Acknowledging the process gap is appropriate; current metrics provide context; committing to quarterly review addresses the systemic issue; avoiding defensive arguments about the outcome keeps focus on improvement.",
        10,
        "Explain that you chose to maintain conservative reserve levels given continued economic uncertainty, which is a prudent credit risk management approach.",
        "Conservative explanation may be substantively reasonable but doesn't address the process question - the issue is lack of documented reconsideration, not the outcome of maintaining factors.",
        5,
        "Point out that the reserve levels are well above peer averages, suggesting that the methodology produces appropriate results regardless of the Q-factor review frequency.",
        "Peer comparison deflects from the process question; 'appropriate results' doesn't mean appropriate process; examiners care about methodology governance, not just outcome levels.",
        -5,
        "Argue that Q-factors, once established, should be maintained consistently rather than adjusted frequently to avoid manipulation of reserve levels.",
        "Consistency argument misunderstands the purpose of qualitative factors - they're supposed to reflect changing conditions; avoiding adjustment 'to prevent manipulation' suggests you don't understand the methodology.",
        -5
      )),
    q("Finance", "The liquidity examiner asks about your contingency funding plan. Upon review, you realize the plan hasn't been updated in 14 months and still references credit facilities that have been modified, assumptions that are outdated, and contact information for people who've left the bank. What do you do?",
      buildChoices(
        "Don't update the CFP on the spot. Acknowledge it needs refresh, provide a verbal summary of current liquidity, available facilities, and contingency actions, and commit to a full CFP refresh within 30 days, offering to share the updated version.",
        "Acknowledging the gap is necessary since they've already seen the document; verbal summary demonstrates current awareness; committed timeline shows action orientation; real-time updating would be obvious and insulting.",
        10,
        "Quickly update the most obvious errors (contact information, facility details) and provide the corrected version, explaining that you identified some administrative updates that were needed.",
        "Real-time corrections appear to be covering up the staleness; 'administrative updates' minimizes what are substantive gaps; examiners will note the timing of your 'discovery' of needed updates.",
        5,
        "Explain that the core plan is sound and the outdated details are minor issues that don't affect the viability of the contingency strategy.",
        "Minimizing outdated information as 'minor' suggests you don't understand why current planning matters; facility modifications could materially change available liquidity; this response invites deeper scrutiny.",
        -5,
        "Note that liquidity has been strong so the contingency plan hasn't needed to be activated, which is why updates weren't prioritized.",
        "Strong liquidity argument misses the point - contingency plans are for when things aren't strong; not prioritizing updates because you haven't had a crisis is exactly the attitude that leads to crises being worse.",
        -5
      )),
    q("Finance", "On the last day, the Examiner-in-Charge mentions that the exam will include a Matter Requiring Attention (MRA) related to liquidity risk management practices, specifically the contingency funding plan. She asks if you'd like to discuss the proposed language before the report is finalized. What's your approach?",
      buildChoices(
        "Accept the opportunity to discuss. Your goals: ensure the MRA accurately describes the issue (not overstated or understated), understand the specific expectations for remediation, and propose a realistic timeline. Don't argue against having an MRA - you know the CFP was deficient. Use the discussion to show you understand the issue and are committed to addressing it.",
        "Discussion opportunity is valuable and shouldn't be declined; accuracy ensures you're addressing the right issue; understanding expectations prevents future disagreement; realistic timeline prevents over-commitment; accepting the finding appropriately shows maturity.",
        10,
        "Accept the discussion and try to negotiate the finding down to a Recommendation rather than an MRA, given that no actual liquidity stress occurred.",
        "Negotiating severity based on 'nothing bad happened' misses the point of supervisory findings; attempting to minimize may irritate the EIC and suggest you don't take the issue seriously.",
        5,
        "Decline the discussion, noting that you prefer to receive the formal written finding and respond through official channels.",
        "Declining a courtesy opportunity to discuss appears rigid or confrontational; official channels still exist, but pre-report discussion can clarify expectations and build relationship.",
        -5,
        "Accept the discussion but push back strongly on the MRA, arguing that your liquidity position has been consistently strong and a planning documentation issue doesn't warrant formal supervisory action.",
        "Pushback on a finding the examiner has already decided to issue rarely changes the outcome and damages the relationship; strong position arguments don't address the process failures they've documented.",
        -5
      )),

    // Loans
    q("Loans", "The credit examiner is reviewing your largest criticized assets and asks for the credit file on a $3.2 million commercial real estate loan that was downgraded to Substandard 4 months ago. You know this file has documentation gaps - the most recent appraisal is 2 years old, financial statements are 18 months stale, and the workout notes are incomplete. What do you do?",
      buildChoices(
        "Provide the file as-is and brief the credit examiner: acknowledge documentation gaps, explain your current credit and collateral assessment, and describe remediation actions (updated appraisal ordered, financials requested). Don't try to 'fix' the file before sharing.",
        "Providing the actual file is required; proactive acknowledgment of gaps shows awareness; current assessment demonstrates active management despite documentation issues; remediation actions show you're addressing the problem.",
        10,
        "Provide the file but prepare a supplemental memo explaining the documentation gaps and your current understanding of the borrower's status.",
        "Supplemental memo is good but should be discussed verbally with the examiner before they review the file; letting them discover gaps and then reading your explanation feels like damage control rather than transparency.",
        5,
        "Request a day to prepare the file for examiner review, using the time to update documentation where possible.",
        "Day delay is obvious stalling; whatever you 'prepare' will look like you created it for the exam; examiners want to see actual practices, not exam-ready presentations.",
        -5,
        "Explain that this particular credit is in active workout and documentation practices differ during the workout phase.",
        "Workout explanation may have some merit but doesn't excuse 2-year-old appraisals or 18-month stale financials; this response sounds like excuse-making for poor credit administration.",
        -5
      )),
    q("Loans", "The examiner identifies 3 loans totaling $1.8 million that they believe should be downgraded from Pass to Special Mention based on borrower financial deterioration. Your loan officers disagree - they've met with these borrowers and believe the situations are improving. The examiner's analysis is based solely on financial statement ratios. How do you handle the disagreement?",
      buildChoices(
        "Prepare a written response for each loan: acknowledge the ratio concerns, provide qualitative factors supporting your classification (borrower meetings, market context), include any updates since the statements, and request a meeting to discuss professionally.",
        "Written response creates a record; acknowledging ratio concerns shows you've considered their analysis; qualitative factors provide complete picture; meeting enables dialogue; accepting you may not win everything shows reasonableness.",
        10,
        "Accept the examiner's classifications to avoid conflict, planning to re-evaluate the loans after the exam concludes.",
        "Automatic acceptance may seem cooperative but abandons loans that may be correctly classified; post-exam re-evaluation suggests you're managing the exam, not the credits.",
        5,
        "Escalate to the Examiner-in-Charge immediately, arguing that the credit examiner is substituting their judgment for bank management's without adequate basis.",
        "Escalation over the examiner's head on a substantive credit disagreement is aggressive; credit classification disagreements are normal and should be worked through, not escalated as grievances.",
        -5,
        "Point out that the examiner hasn't met with the borrowers and therefore lacks the relationship context that informs your classification decisions.",
        "Relationship context argument, while partially valid, sounds like you're saying examiners can't evaluate credits they haven't personally visited; financial deterioration is observable from statements regardless of relationship.",
        -5
      )),
    q("Loans", "Near the end of the exam, you learn that the credit examiner intends to classify a $4.7 million relationship as Loss (requiring immediate charge-off) that you have classified as Doubtful. The difference is approximately $2.1 million in additional charge-off that would materially impact quarterly earnings. The examiner's position is that the collateral liquidation value doesn't support the current carrying amount. What's your approach?",
      buildChoices(
        "Request a meeting with the credit examiner and your CCO to understand their collateral valuation analysis. Bring your own collateral support documentation. This is a significant enough disagreement that it warrants thorough discussion before the finding is finalized. If you can't resolve it, understand the appeal process but recognize that exercising it has relationship implications.",
        "Meeting request is appropriate for material differences; CCO involvement shows senior attention; understanding their analysis before arguing enables productive dialogue; knowing the appeal process is prudent; recognizing relationship implications shows maturity.",
        10,
        "Immediately engage an independent appraisal firm to provide an updated collateral valuation that you can submit before the report is finalized.",
        "Rush appraisal may be appropriate but feels like trying to create favorable evidence; appraisers chosen and paid by the bank during a classification dispute may face credibility questions.",
        5,
        "Escalate to the Examiner-in-Charge, arguing that a classification requiring $2.1 million in charge-offs should receive more senior examiner review before being finalized.",
        "Escalation may be warranted for material issues but framing it as 'should receive senior review' implies the credit examiner isn't qualified to make the call; better to work the substance than the process.",
        -5,
        "Accept the Loss classification for now and file a formal appeal after the examination, when you'll have more time to prepare supporting documentation.",
        "Post-exam appeal is an option but deferring without attempting pre-report discussion wastes an opportunity; some discussions are more productive before positions are officially documented.",
        -5
      )),

    // Accounting
    q("Accounting", "The examiner reviewing your audit function asks about the status of internal audit findings from the past 18 months. You know that 12 of 47 findings remain open past their original remediation dates, and 3 of those are over 6 months past due. How do you present this information?",
      buildChoices(
        "Provide a complete aging schedule with original dates, current status, revised remediation dates where applicable, and explanations for past-due items. For the three significantly overdue findings, include specific status updates on work completed and remaining steps.",
        "Complete disclosure is necessary since they'll likely see the information anyway; aging schedule shows organized tracking; explanations for past-due items demonstrate awareness; acknowledging this is normal shows appropriate perspective.",
        10,
        "Provide the findings list but emphasize that all critical findings have been addressed and the remaining open items are lower priority.",
        "Prioritization framing may be accurate but could be seen as minimizing; if examiners disagree with your priority assessment, you've positioned yourself badly; let the facts speak without spin.",
        5,
        "Request time to update the status of all findings before providing the information, ensuring the data is current.",
        "Update request signals the tracking isn't current, which is a finding in itself; providing what you have with acknowledgment of currency limitations is better than delayed, suspiciously-timed updates.",
        -5,
        "Explain that the audit function has been focused on current-year work and historical finding remediation has been deprioritized appropriately.",
        "Deprioritization of remediation is exactly the wrong message; it suggests findings aren't taken seriously; audit functions should both conduct current work AND track remediation.",
        -5
      )),
    q("Accounting", "During the exam, examiners identify what they believe is an error in your Call Report from two quarters ago - a classification issue that would shift approximately $800,000 between line items. The dollar impact is small relative to your balance sheet but the examiners expect you to file an amendment. Your CFO thinks the original classification was defensible and doesn't want to file an amendment that suggests an error. What do you recommend?",
      buildChoices(
        "Review the specific classification guidance with your CFO. If the examiners' interpretation is reasonable even if yours was also defensible, file the amendment. Regulatory reports should reflect the regulator's interpretation when ambiguity exists. The relationship cost of arguing over a non-material classification isn't worth it. Document your analysis regardless of the outcome.",
        "Guidance review ensures you understand the issue; regulator interpretation deference is appropriate for Call Reports; relationship cost analysis is practical; documentation protects you either way.",
        10,
        "File the amendment immediately as requested without pushback to demonstrate cooperation and avoid creating friction.",
        "Immediate compliance seems cooperative but abandoning a defensible position without review may set a precedent; you should understand the issue before deciding, even if you ultimately comply.",
        5,
        "Maintain your original classification and document why you believe it's correct, offering to discuss with the examiner's supervisor if they disagree.",
        "Standing firm on an $800K non-material classification creates friction disproportionate to the issue; supervisor escalation over interpretive differences this small is rarely productive.",
        -5,
        "Note that Call Report amendments for prior quarters create questions from analysts and investors, and the cost of those questions outweighs the regulatory preference.",
        "External communication concern is real but shouldn't drive regulatory reporting accuracy; this response suggests you're prioritizing market perception over regulatory compliance.",
        -5
      )),
    q("Accounting", "On the final day, examiners provide a list of documents they're taking copies of for their workpapers. You notice the list includes internal emails between your CFO and CCO discussing the appropriateness of certain loan classifications, including some candid language about 'examiner expectations' and 'picking our battles.' These were responsive to a broad document request. What's your reaction?",
      buildChoices(
        "Don't attempt to withdraw or redact the documents - they've already been identified and any attempt to remove them will draw more attention and suggest concealment. Note internally that candid email language about regulatory matters can become part of examination records. Going forward, consider that any document could become an examiner workpaper.",
        "Withdrawal attempt would backfire; documents are part of the record now; internal noting addresses the future behavior without creating current conflict; this is a lesson about email candor, not an action item.",
        10,
        "Request a meeting with the Examiner-in-Charge to provide context for the emails before they become part of the official workpapers.",
        "Context meeting may seem proactive but highlights documents that might otherwise receive routine treatment; drawing attention to 'examiner expectations' language invites questions about what you meant.",
        5,
        "Object to the inclusion of internal deliberative communications that weren't directly requested and ask that they be removed from the document list.",
        "Objection is unlikely to succeed and creates adversarial dynamic on the final day; 'deliberative' characterization doesn't provide privilege protection in examination context; this makes the emails more notable, not less.",
        -5,
        "Contact legal counsel to assert privilege over internal communications and prevent their inclusion in examiner workpapers.",
        "Privilege assertion in banking examination context is very limited; attempting it for candid but non-privileged emails will fail and damage the regulatory relationship; this looks like you have something to hide.",
        -5
      )),

    // Deposits
    q("Deposits", "Examiners want to observe branch operations and customer interactions. Your branches have been informed of the exam but not specifically prepared for examiner visits. Your branch operations manager is concerned that a particular branch has had recent customer complaints and employee turnover - it may not present well. Do you try to influence which branch the examiner visits?",
      buildChoices(
        "Don't attempt to steer examiners away from problematic branches - this will be obvious and create worse impressions than whatever they might see. Instead, brief the troubled branch manager honestly: examiners may visit, be professional, answer questions truthfully, and don't try to hide problems. If issues surface, you want them handled with integrity.",
        "Steering attempts are transparent and insulting to examiners; honest briefing prepares staff without coaching dishonesty; integrity during observation is more valuable than curated presentation.",
        10,
        "Suggest that the examiner visit your strongest performing branch to see your operations at their best, offering to arrange a tour.",
        "Best-branch suggestion is obvious steering; examiners may visit multiple branches or specifically avoid your suggestion; appearing to curate their experience undermines trust.",
        5,
        "Provide a list of all branches and let the examiner choose, but note that some branches are more convenient to your main office where they're based.",
        "Convenience suggestion is subtle steering; examiners understand logistics and will see through 'helpful' suggestions that happen to avoid problem locations.",
        -5,
        "Quickly address the most visible issues at the troubled branch before examiner visits can occur - clean up the lobby, brief staff on key messages, review recent transactions for documentation.",
        "Exam-motivated cleanup is obvious and suggests day-to-day operations differ from exam-ready presentation; if the cleanup is noticed, it raises questions about normal practices.",
        -5
      )),
    q("Deposits", "An examiner observing branch operations witnesses a teller override a system warning on a cash transaction just below the CTR threshold. The teller explains they know the customer and the amount is slightly under $10,000 for a legitimate business purpose. The examiner takes notes and later asks you about your structuring monitoring and CTR training. How do you respond?",
      buildChoices(
        "Take the question seriously - the observed behavior is a BSA red flag regardless of the teller's intent. Explain your current training program and monitoring systems honestly. Commit to reviewing the specific transaction, the teller's history of sub-threshold transactions, and your training effectiveness. The examiner has identified a potential control weakness that needs investigation.",
        "Taking the question seriously shows you understand BSA risk; honest explanation of current controls is appropriate; commitment to review demonstrates you'll act on what they observed; recognizing the control weakness is more important than defending current practices.",
        10,
        "Explain that the teller is experienced and exercises appropriate judgment for regular customers, and that your monitoring systems would catch actual structuring patterns.",
        "Experienced teller judgment defense doesn't address the training gap that allowed a system warning override without appropriate skepticism; monitoring systems catching patterns isn't the same as preventing facilitation.",
        5,
        "Note that the transaction was under $10,000 so no CTR was required, and the customer's legitimate business purpose was known to the teller.",
        "Under-threshold defense completely misses the point - the examiner is concerned about potential structuring facilitation and inadequate training, not whether a CTR was filed.",
        -5,
        "Express surprise that the examiner would question the teller's judgment and note that you trust your employees to make appropriate decisions with customers they know.",
        "Surprise and trust defense is exactly the wrong response to a BSA observation; willful blindness can result from misplaced trust; this response suggests you don't understand structuring risk.",
        -5
      )),
    q("Deposits", "After the examination concludes, you receive the preliminary findings. One finding criticizes your deposit account opening procedures for inadequate CIP verification, citing 3 accounts opened in the past year where beneficial ownership wasn't properly verified for business accounts. The finding recommends enhanced training and procedure updates. Your operations team believes 2 of the 3 accounts were actually properly documented but the files were disorganized. How do you respond?",
      buildChoices(
        "Prepare a response that: acknowledges the CIP concern is valid and commits to training and procedure updates, provides additional documentation for the 2 accounts you believe were proper (if truly available), and accepts the finding on the third account. Partial factual correction paired with acceptance of the underlying concern is appropriate.",
        "Acknowledging the concern shows responsiveness; providing documentation demonstrates the actual situation; accepting what you can't dispute is appropriate; this balanced response neither capitulates entirely nor argues excessively.",
        10,
        "Provide the missing documentation for all 3 accounts and request that the finding be removed since the verification was actually performed.",
        "Requesting finding removal based on 'actually performed' verification puts you in opposition to the examiner's conclusion; even if documentation exists, the finding about procedure effectiveness has merit if files are disorganized.",
        5,
        "Accept the entire finding without factual correction to demonstrate cooperation and avoid appearing argumentative.",
        "Full acceptance when you have evidence that 2 accounts were proper abandons a legitimate factual position; cooperation doesn't require agreeing with incorrect facts.",
        -5,
        "Challenge the finding methodology, noting that 3 accounts out of thousands opened represents a de minimis error rate that doesn't warrant a formal finding.",
        "De minimis argument misunderstands CIP compliance - it's a per-account requirement, not a statistical threshold; this response suggests you don't take beneficial ownership verification seriously.",
        -5
      )),
  ]
};


/* ------------------------- SCENARIO 5 ------------------------- */
const SCENARIO_WEATHER = {
  key: "severe-weather-branch-closures",
  title: "Severe Weather Causes Branch Closures and Outages",
  description:
    "A hurricane made landfall about 18 hours ago causing widespread local damage. Six of 14 branches currently lack power with estimated restoration in 3–7 days. Two branches have roof damage with water intrusion into customer areas. Cellular networks are congested, causing intermittent mobile banking outages. Your core processor shifted to generator power 12 hours ago. Local emergency management has issued a 48‑hour shelter‑in‑place advisory covering counties where many staff live. Media report long lines at competitor ATMs. Your insurer requests damage documentation within 72 hours for expedited claims.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "It's 6 AM the morning after landfall. Your Business Continuity Plan scheduled an 8 AM executive briefing, but your COO is unreachable, two board members are requesting immediate updates, and local news is seeking a 7 AM statement. How do you proceed?",
      buildChoices(
        "Delegate a senior VP to gather status from available department heads, provide board members a brief holding statement with a commitment to a full briefing by 10 AM, and give media a short statement acknowledging the situation and directing customers to digital channels while deferring operational details.",
        "Addresses multiple stakeholder needs proportionally while buying time for accurate information; holding statements manage expectations without committing to unverified details.",
        10,
        "Proceed with the 8 AM briefing as planned with whoever is available, ask board members to join that call, and decline media interviews until you have complete information.",
        "Following established protocol has merit, but rigidly adhering to timing when key leaders are unavailable may produce an incomplete picture; declining media entirely misses an opportunity to reassure customers.",
        5,
        "Immediately call an emergency all-hands with available executives, provide the board a detailed preliminary damage assessment, and give media a comprehensive interview to demonstrate leadership visibility.",
        "Acting decisively appears strong but preliminary assessments shared broadly often require correction; detailed media interviews without verified facts can create liability and confusion.",
        -5,
        "Focus first on reaching the COO through alternate means since they own branch operations, ask board members to wait for the scheduled briefing, and have Marketing draft a media statement for your review.",
        "Prioritizing the COO seems logical but creates a bottleneck when they may be unreachable for hours; this delays all stakeholder communications unnecessarily.",
        -5
      )),
    q("CEO/SVPs", "By Day 2, a competitor is advertising 'full service availability' and fee waivers to attract customers. Marketing recommends an aggressive response. Community groups are also requesting that you sponsor emergency supply distribution, which would require staff volunteers from already-thin coverage. What is the appropriate strategic response?",
      buildChoices(
        "Avoid direct competitive response in messaging; instead focus communications on your recovery progress, customer accommodations, and community commitment. Evaluate sponsorship for supply distribution on a limited scale that doesn't compromise branch staffing, potentially partnering with another organization to share the load.",
        "Competitive attacks during disasters often backfire reputationally; demonstrating community focus while maintaining service delivery shows authentic commitment without overextending resources.",
        10,
        "Match the competitor's offer with your own fee waivers for existing customers and a modest new customer incentive. Decline the community sponsorship request to focus resources on customer service recovery.",
        "Fee waivers for existing customers show loyalty appreciation, but competing for new customers during a disaster can appear opportunistic; declining community involvement entirely may damage long-term reputation.",
        5,
        "Prepare a response ad highlighting your community roots and the competitor's opportunistic behavior. Fully sponsor the supply distribution as a high-visibility community investment.",
        "Calling out competitor behavior directly often escalates negatively; full sponsorship during resource constraints may compromise primary banking services customers depend on.",
        -5,
        "Ignore the competitor entirely and decline the sponsorship, focusing all resources on restoring normal operations as quickly as possible.",
        "Operational focus is important but ignoring both community needs and competitive dynamics during an extended crisis can erode customer loyalty and market position.",
        -5
      )),
    q("CEO/SVPs", "On Day 3, a regional TV story highlights elderly customers unable to access medication funds because of branch closures and ATM outages, and they've requested an on-camera interview. Your operational branches have long wait times. Corporate communications cautions against the interview; your community banking director sees an opportunity to show responsiveness. What approach do you take?",
      buildChoices(
        "Accept the interview with preparation: acknowledge the hardship specific customers are facing, outline concrete accommodations you've implemented (emergency cash limits, mobile deposit, partner ATM networks), commit to prioritized service for vulnerable customers, and have branch staff ready to assist anyone who contacts you through the story.",
        "Transparent acknowledgment with specific solutions demonstrates accountability; preparing for follow-through turns potential negative coverage into demonstrated responsiveness.",
        10,
        "Decline the on-camera interview but offer a written statement expressing concern and listing available services. Have your community banking director reach out directly to any customers identified in the story.",
        "Written statements are lower risk but appear less personal during a human-interest story; direct outreach is good but reactive rather than proactive in addressing the broader issue.",
        5,
        "Accept the interview and focus messaging on the unprecedented nature of the storm, the challenges all businesses are facing, and your commitment to restoring normal service as quickly as possible.",
        "This framing appears defensive and doesn't address the specific customer hardship; focusing on your challenges rather than customer solutions can worsen perception.",
        -5,
        "Decline the interview based on legal counsel's advice and issue a press release about your overall recovery efforts. Instruct branches to provide standard service without special accommodations that could create precedent.",
        "Following legal advice has merit, but declining during a sympathetic story appears evasive; refusing accommodations for vulnerable customers during a documented crisis creates significant reputation and regulatory risk.",
        -5
      )),

    // IT/Security
    q("IT/Security", "Your core processor reports their backup generator fuel supply will last approximately 36 more hours if utility power isn't restored. They're prioritizing fuel deliveries but can't guarantee timing. Your DR site is 200 miles away and fully operational, but a full failover takes 4-6 hours and has never been tested during actual transaction volume. What's your recommendation?",
      buildChoices(
        "Immediately begin pre-failover preparations (synchronization verification, staff notifications, customer communication drafts) while monitoring fuel situation hourly. Establish a decision trigger point at 18 hours remaining fuel. Simultaneously identify and pre-position critical staff at the DR site. If fuel delivery is confirmed with margin, hold position; if not, execute failover during lowest transaction volume window before reaching critical threshold.",
        "Preparation without premature commitment preserves options; defined trigger points prevent last-minute decisions; pre-positioning staff reduces failover risk; choosing timing optimizes for success.",
        10,
        "Wait for the core processor to make the decision since they own the infrastructure and have more visibility into fuel delivery status. Focus your team on ensuring branch systems can handle extended offline periods if needed.",
        "The processor manages their infrastructure, but you're accountable for your customers' access; deferring entirely leaves you reactive. Branch offline capability helps but doesn't address the core dependency.",
        5,
        "Initiate failover immediately to avoid any risk of unplanned outage. The 4-6 hour window is manageable if started now, and it eliminates the uncertainty of the fuel situation.",
        "Decisiveness has value, but premature failover during elevated transaction volumes (customers accessing emergency funds) creates guaranteed disruption to avoid a possible one; untested failover under pressure increases risk.",
        -5,
        "Escalate to the processor's executive team demanding they prioritize fuel delivery and guarantee continuity. Document all communications to establish their liability if an outage occurs.",
        "Escalation is appropriate but focusing on liability positioning rather than parallel preparation leaves you without alternatives if their efforts fail.",
        -5
      )),
    q("IT/Security", "Your security team reports a 400% increase in phishing emails targeting customers with subjects like 'Urgent: Verify your account for disaster relief deposit' and 'Branch closure notification - action required.' Some emails are sophisticated enough to pass casual inspection. Meanwhile, you need to send legitimate communications about service changes, fee waivers, and branch status. How do you balance security awareness with customer communication?",
      buildChoices(
        "Immediately issue a security advisory through all channels (email with clear branding, website banner, mobile app notification, social media) establishing how customers can verify legitimate communications. Include specific examples of scam patterns without reproducing exact language. Ensure all legitimate outbound communications reference this advisory and include verification instructions. Brief branch and call center staff on handling suspicious activity reports.",
        "Multi-channel advisory establishes authentication baseline; examples help recognition without providing templates to attackers; cross-referencing creates verification chain; staff preparation handles inquiries.",
        10,
        "Pause all outbound email communications until the phishing wave subsides to avoid confusion. Use only social media and website for updates since those are harder to spoof. Monitor for fraudulent activity and respond to customer reports individually.",
        "Pausing email reduces confusion risk but limits reach to customers most needing information; social media and web help but exclude customers with limited connectivity post-storm; reactive monitoring misses prevention opportunity.",
        5,
        "Send a single comprehensive email to all customers covering security warnings, service updates, and available accommodations. Consolidating communications reduces the number of messages that could be confused with phishing attempts.",
        "Consolidation reduces volume but one long email is more likely to be skimmed or ignored; mixing security warnings with service information dilutes both messages.",
        -5,
        "Focus security resources on enhanced transaction monitoring and fraud detection rather than customer communication. Sophisticated customers will recognize phishing; others will call the branch if concerned.",
        "Enhanced monitoring is valuable but assumes fraud will be caught after initiation rather than prevented; this underestimates social engineering sophistication and abandons less sophisticated customers.",
        -5
      )),
    q("IT/Security", "A branch manager calls reporting that water damage from roof intrusion has affected a server closet containing a local network switch, a cash recycler interface, and backup tapes from 2019 that were never retrieved for offsite storage. The branch is in a flood zone and insurance adjusters need access within 48 hours. What are the immediate priorities?",
      buildChoices(
        "First, assess whether the equipment is in standing water and confirm power is disconnected to eliminate safety hazards. Document the damage photographically for insurance before anything is moved. The 2019 backup tapes are a potential data security issue - determine if they contain customer PII and if so, treat as a potential breach requiring controlled destruction. The network equipment is replaceable; focus on insurance documentation and data handling.",
        "Safety first prevents injury; photo documentation before moving supports insurance claims; old backup tapes with PII are a breach risk requiring proper handling regardless of current operational value; prioritizes correctly.",
        10,
        "Have the branch manager secure the area and send IT staff to assess whether any equipment is salvageable. Retrieve the backup tapes for review to determine if the data is still accessible. Coordinate with insurance on documentation requirements.",
        "Assessment is reasonable but sending IT staff into potentially hazardous conditions without safety clearance is risky; retrieving tapes for 'review' rather than controlled handling could compound data security issues.",
        5,
        "Instruct the branch manager to dispose of all damaged equipment and tapes immediately given the water contamination. File an insurance claim listing the equipment. Order replacements to restore branch network connectivity.",
        "Rapid disposal destroys insurance documentation and may not meet data destruction compliance requirements; disposing of potential PII without proper handling creates regulatory liability.",
        -5,
        "Focus on restoring branch network connectivity as the priority since customers need service. Work with the equipment vendors to assess salvageability. Add the backup tape situation to the post-incident review list.",
        "Customer service focus is understandable but network equipment in a damaged building may not be the path to service restoration; deferring the backup tape issue ignores a time-sensitive compliance matter.",
        -5
      )),

    // HR
    q("HR", "It's Day 2 and you're getting reports that several employees are being pressured by their managers to report to work despite the shelter-in-place advisory, road hazards, and personal property damage. One manager argued that 'essential employees' must report regardless. You also have employees at unaffected branches volunteering for extra shifts. How do you handle this?",
      buildChoices(
        "Issue immediate guidance to all managers clarifying that employee safety supersedes staffing needs, that 'essential' designations don't override safety advisories, and that no adverse action will be taken for weather-related absences during the advisory period. Create a voluntary shift pool for employees at unaffected branches with clear compensation terms. Follow up directly with the managers reported for applying pressure.",
        "Clear policy protects employees and limits liability; voluntary pool maintains service without coercion; direct follow-up addresses the immediate behavior while establishing expectations.",
        10,
        "Contact the specific employees being pressured to assure them they won't face consequences for prioritizing safety. Ask the managers to focus on coverage solutions using available staff rather than pressuring those in affected areas.",
        "Direct employee support is good but doesn't address the systemic issue; asking managers to find solutions without clear policy may result in continued pressure through different means.",
        5,
        "Remind all managers of the employee handbook policy on severe weather and let them make judgment calls based on their local knowledge of conditions and individual employee situations.",
        "Handbook reference is appropriate but deferring to manager judgment when you're already seeing problematic behavior perpetuates the issue; local conditions vary but safety advisory applies universally.",
        -5,
        "Implement mandatory reporting for all employees not in the shelter-in-place counties to ensure coverage, with premium pay as incentive. Those in affected areas should report when conditions allow personal travel.",
        "Mandatory reporting for unaffected employees may seem fair but creates pressure on employees who may have affected family members; vague 'when conditions allow' guidance leaves room for manager pressure to continue.",
        -5
      )),
    q("HR", "An employee at a flooded branch contacts you directly, bypassing their manager, to report that they lost their home in the storm and are staying in an emergency shelter. They're worried about their job because they can't work their scheduled shifts and have exhausted their PTO. They also mention that their manager told them to 'figure it out' when they called. What support should you provide?",
      buildChoices(
        "Immediately assure the employee of job security during the disaster period. Activate emergency assistance fund if available, or expedite a pay advance. Connect them with EAP for housing and counseling resources. Document the manager's response for follow-up while focusing on the employee's immediate needs. Communicate that their only job right now is taking care of themselves and their family.",
        "Job security assurance addresses core anxiety; financial assistance provides immediate relief; EAP connection offers specialized resources; documenting manager response ensures accountability without burdening the employee further.",
        10,
        "Express sympathy and assure them their job is safe. Offer to transfer them temporarily to an unaffected branch if they're able to work, which would allow them to earn wages. Make a note to coach their manager on appropriate disaster response.",
        "Job assurance is correct, but offering work transfer to someone in a shelter may add pressure they don't need; noting rather than addressing the manager response delays accountability for poor handling.",
        5,
        "Follow standard procedures by having the employee submit a leave request to their manager and apply for any applicable benefits through normal HR channels. Offer EAP contact information for counseling support.",
        "Standard procedures aren't designed for disaster situations; requiring the employee to work through the manager who already dismissed them adds burden and potential conflict.",
        -5,
        "Contact the employee's manager to get their perspective on the conversation before committing to any accommodations. Ensure consistent application of disaster policies across all similarly situated employees.",
        "Manager perspective may be valuable for documentation, but prioritizing policy consistency over immediate support for an employee in crisis appears callous and delays necessary assistance.",
        -5
      )),
    q("HR", "As branches begin reopening on Day 4, you're facing a staffing puzzle: some employees are eager to return to work and normalcy, others are still dealing with property damage and childcare issues (schools remain closed), and a few have indicated trauma symptoms from the storm experience. Managers are requesting 'all hands on deck' to handle the customer backlog. How do you guide staffing decisions?",
      buildChoices(
        "Implement a tiered return-to-work framework: priority shifts for willing employees with no personal barriers, flexible scheduling options (partial days, alternate locations) for those managing ongoing issues, and clear no-penalty extended leave for those with documented trauma or displacement. Train managers on recognizing stress signs and adjust workload expectations to account for reduced staffing while maintaining service.",
        "Tiered approach accommodates diverse situations; flexibility options retain employees who can partially contribute; trauma recognition protects employee wellbeing and limits liability; realistic expectations prevent further burnout.",
        10,
        "Survey all employees on their availability and constraints, then build schedules based on who can work. Bring in temporary staff from staffing agencies to fill gaps. Offer overtime premium for employees who can work extra hours.",
        "Surveying is reasonable but puts burden on employees to self-advocate; temporary staff may lack training and add management overhead; overtime premium may inadvertently pressure employees not truly available.",
        5,
        "Establish a consistent return date for all employees based on when schools and utilities are generally restored, with standard leave policies applying to anyone with individual circumstances requiring more time.",
        "Consistent date seems fair but doesn't accommodate the wide variation in individual impact; standard leave policies may not cover disaster-related situations, creating inequity.",
        -5,
        "Ask managers to reach out individually to their team members to assess availability and schedule accordingly. Provide guidance that the bank appreciates everyone's flexibility during this difficult time.",
        "Individual outreach seems personal but varies by manager skill, potentially creating inconsistent treatment; general appreciation language without specific policies leaves employees uncertain of their actual options.",
        -5
      )),

    // Finance
    q("Finance", "Cash demand has spiked dramatically - your open branches and ATMs are experiencing 3x normal withdrawal volumes. Armored car service is operating on limited routes due to road conditions, and your cash vault facility is in a county still under evacuation advisory. You have approximately 48 hours of cash at current burn rate across the network. How do you manage liquidity?",
      buildChoices(
        "Immediately coordinate with your armored carrier and Federal Reserve Bank on emergency cash shipment options, including potential direct Fed deliveries if your vault is inaccessible. Implement temporary daily ATM withdrawal limits (communicated clearly with rationale) to extend supply while prioritizing branch cash for in-person needs. Identify partner institutions for reciprocal ATM agreements to distribute demand. Monitor hourly and adjust limits as supply improves.",
        "Fed coordination opens emergency supply channels; ATM limits with explanation balance preservation with transparency; partner agreements distribute demand; dynamic adjustment responds to changing conditions.",
        10,
        "Focus on rerouting armored car service to prioritize your highest-volume locations, even if it means some branches receive reduced deliveries. Temporarily increase ATM withdrawal limits to reduce branch transaction volume.",
        "Prioritizing high-volume locations is logical but increasing ATM limits during a shortage accelerates depletion; reducing branch transactions isn't clearly achieved by this approach.",
        5,
        "Implement immediate, unannounced withdrawal limits across all channels to preserve cash. Once supply is secured, restore normal limits and apologize for any inconvenience.",
        "Unannounced limits will cause customer confusion and complaints, potentially creating panic that increases demand; this approach sacrifices trust for short-term preservation.",
        -5,
        "Transfer available cash from unaffected branches to those with higher demand, depleting the lower-volume locations. Customers at those branches can use digital banking or travel to busier locations.",
        "Consolidation seems efficient but depleting smaller branches disadvantages customers in those communities during a disaster when travel may be difficult; assumes digital access that may be compromised.",
        -5
      )),
    q("Finance", "Your insurance carrier is requesting damage documentation within 72 hours for expedited claims processing. However, two damaged branches are still inaccessible due to safety concerns, several finance staff are dealing with personal storm impacts, and you're uncertain whether all damage has manifested (a structural engineer hasn't cleared the buildings). How do you balance documentation needs with practical constraints?",
      buildChoices(
        "Contact your insurance carrier immediately to explain access limitations and request a documentation extension or acceptance of preliminary submissions with supplementation. Document what you can access now (exterior photos, utility damage, accessible areas) with clear notations about scope limitations. Engage a public adjuster if you don't have in-house expertise. Reserve the right to supplement findings once full access is available.",
        "Proactive carrier communication often yields flexibility; preliminary documentation with clear scope notes protects your position; professional adjuster engagement ensures thorough claims; supplementation rights are standard.",
        10,
        "Hire an emergency response contractor to access and document the damaged branches immediately, working with local authorities for access if needed. Complete documentation is worth the expedited effort to meet the deadline.",
        "Urgency is understandable but pushing into unsafe buildings creates liability exposure; authorities may not grant access for documentation purposes during active advisories; complete documentation isn't possible until damage manifests.",
        5,
        "Focus available finance staff on damage documentation as their priority, even if other financial duties are delayed. The 72-hour deadline is critical for expedited claims and missing it could significantly impact recovery funding.",
        "Prioritization is reasonable but tasking potentially affected staff adds to their burden; overemphasizing the deadline may lead to unsafe access attempts or incomplete documentation done under pressure.",
        -5,
        "Accept that the 72-hour window will be missed for full documentation and proceed with standard claims processing timeline. Use this experience to advocate for more realistic disaster provisions in future policy renewals.",
        "Standard processing may result in slower reimbursement when you need funds most; not exploring extension options before accepting the miss leaves potential options untested; policy advocacy doesn't address current situation.",
        -5
      )),
    q("Finance", "On Day 5, your CFO is assembling a board presentation on financial impact. Current estimates show $400K in direct damage, $150K in emergency operating costs, $200K in fee waivers and customer accommodations, and unknown ongoing revenue impact from closed branches. Insurance coverage has a $250K deductible. The board will want a clear financial picture, but significant uncertainty remains. How should you present the information?",
      buildChoices(
        "Present known costs with high confidence, estimated costs with explicit ranges and assumptions, and clearly flag unknown categories with methodology for how they'll be quantified. Include a timeline for when estimates will improve. Recommend a board-approved contingency reserve and define triggers for when updated estimates warrant additional board communication.",
        "Transparency about certainty levels builds credibility; explicit assumptions allow board to evaluate estimates; timeline sets expectations; contingency reserves and triggers demonstrate forward-thinking risk management.",
        10,
        "Provide a single estimated total impact number that represents your best current judgment, with a footnote acknowledging uncertainty. Boards need clear numbers for decision-making, not ranges that suggest you don't have a handle on the situation.",
        "Single numbers appear decisive but false precision undermines credibility when estimates change; footnoted uncertainty is easily overlooked; this approach risks board decisions based on unreliable figures.",
        5,
        "Delay the financial impact portion of the presentation until more information is available. Focus the board discussion on operational recovery status and customer impact, which are more knowable at this stage.",
        "Delay avoids presenting unreliable numbers but boards have fiduciary duties requiring financial visibility; they'll ask for numbers regardless, making you appear unprepared.",
        -5,
        "Present worst-case scenario figures to ensure the board isn't surprised by higher final costs. Conservative financial presentation protects against criticism if impacts exceed estimates.",
        "Worst-case framing may trigger unnecessary concern or premature cost-cutting decisions; consistently presenting conservative estimates erodes confidence in your projections over time.",
        -5
      )),

    // Loans
    q("Loans", "Multiple commercial borrowers are contacting you about their businesses being affected by the storm. One restaurant owner's building is destroyed and they want to know about their loan obligations. A retail store owner has lost inventory but the building is intact and insured. A contractor is actually seeing increased demand for repair work and wants to expand their line of credit. How do you triage these very different situations?",
      buildChoices(
        "Segment by situation: for total loss, immediately explore insurance assignment, SBA disaster loans, and your own workout options while suspending payments pending assessment. For partial loss with insurance, expedite insurance documentation requirements and offer interim accommodations while claims process. For the growth opportunity, apply normal credit expansion criteria but expedite review given time-sensitive demand. Document all accommodations consistently.",
        "Situation-based segmentation addresses actual needs rather than blanket policies; appropriate urgency for distressed borrowers; normal rigor for growth request prevents disaster from masking credit issues; documentation ensures consistency.",
        10,
        "Offer all three borrowers a 90-day payment deferral as standard disaster accommodation, then reassess each situation once the immediate crisis passes and more information is available.",
        "Uniform deferral is administratively simple but doesn't address the restaurant owner's fundamental business viability question; may be unnecessary for the contractor and delays their opportunity.",
        5,
        "Prioritize the restaurant owner as most at risk of default. Work with them intensively on restructuring options. Handle the other two through normal channels since their situations are less urgent.",
        "Prioritizing highest risk makes sense but intensive restructuring focus on one borrower may delay needed accommodations for others; the contractor's opportunity may be time-limited.",
        -5,
        "Have your team reach out to all commercial borrowers proactively with a standard disaster assistance package, ensuring fair and equal treatment regardless of their specific situation.",
        "Proactive outreach is good but equal treatment regardless of situation means some receive inappropriate accommodations while others receive insufficient support; disaster response requires situational judgment.",
        -5
      )),
    q("Loans", "A consumer borrower who lost their home calls requesting immediate forbearance on their mortgage. Upon pulling their file, you see they were already 60 days delinquent before the storm and had a modification application pending. Providing disaster forbearance would pause the modification process and restart the delinquency clock. Denying disaster forbearance when their home is destroyed seems callous. What's the appropriate approach?",
      buildChoices(
        "Recognize this as a complex situation requiring individual review: the home destruction changes the fundamental nature of the loan regardless of prior status. Consult with servicing and legal on how disaster overlays interact with the pending modification. The borrower deserves clear information about their options even if the path forward is complicated. Prioritize communication and documentation over immediate decisioning.",
        "Individual review acknowledges complexity; consulting appropriate expertise prevents well-intentioned errors; borrower communication respects their autonomy to make informed decisions; documentation protects all parties.",
        10,
        "Provide the disaster forbearance since denying it would be reputationally damaging and potentially discriminatory. Address the prior delinquency and modification application after the forbearance period when the borrower's situation stabilizes.",
        "Forbearance avoids immediate conflict but may not serve the borrower's interests if it complicates their options; deferring the complexity doesn't resolve it and may create larger issues later.",
        5,
        "Deny the disaster forbearance since they weren't current when the disaster occurred and were already in modification review. Offer to expedite the pending modification decision instead.",
        "The logic seems consistent but ignores that home destruction fundamentally changes the situation; expedited modification review for a destroyed property may not produce meaningful options.",
        -5,
        "Escalate to a senior decision-maker to make the call on this exception situation. This is above a loan officer's authority given the potential precedent implications.",
        "Escalation may be appropriate but framing it as someone else's decision abdicates the responsibility to develop a recommendation; focusing on precedent rather than this borrower's situation is backwards.",
        -5
      )),
    q("Loans", "Your mortgage team is receiving requests for disaster-related appraisal waivers and inspection deferrals on loans in the pipeline. Waiving appraisals could speed closings for buyers whose housing situations are now urgent, but property values are uncertain post-storm and some properties may have undiscovered damage. What lending posture do you take?",
      buildChoices(
        "Implement a tiered approach based on risk: for properties in unaffected areas, proceed with existing appraisals with documentation that conditions haven't changed. For properties in affected areas, require at minimum an exterior inspection and insurance confirmation before closing, with borrower acknowledgment of potential undiscovered issues. Pause closings on properties with visible damage pending full assessment. Communicate timeline expectations clearly to all parties.",
        "Tiered approach balances urgency with prudence; exterior inspection and insurance provide minimum risk mitigation; visible damage pause prevents known problems; clear communication manages expectations.",
        10,
        "Honor existing appraisals since they represent pre-storm values and any damage should be covered by homeowner's insurance. The urgent housing need outweighs the risk of undiscovered damage.",
        "Pre-storm values may be materially different from current reality; insurance coverage assumption may not account for all damage types or deductibles; this transfers significant risk to borrowers and the bank.",
        5,
        "Require new appraisals for all properties in affected areas before any closings proceed. Market conditions have changed materially, and lending against uncertain collateral values is imprudent.",
        "New appraisals seem prudent but appraisers may be unavailable or unable to assess amid ongoing recovery; this could effectively halt lending when housing need is highest without clear timeline for resolution.",
        -5,
        "Offer borrowers the choice: proceed with closing using existing appraisal with a borrower acknowledgment of risk, or wait for a new appraisal. Let informed consumers make their own decision.",
        "Consumer choice seems fair but places complex risk assessment on borrowers who may not understand the implications; bank retains collateral risk regardless of borrower acknowledgment.",
        -5
      )),

    // Accounting
    q("Accounting", "Your branch managers are making ad-hoc decisions to waive fees, reverse charges, and provide emergency credits to customers affected by the storm. These accommodations are appropriate but are being processed inconsistently and without documentation that would support audit review. Some branches have processed $50K+ in adjustments. How do you establish controls without impeding disaster response?",
      buildChoices(
        "Immediately implement a streamlined disaster accommodation approval and tracking process: define approval thresholds by amount, require brief documentation of customer impact, create a distinct GL coding for disaster-related adjustments, and communicate to managers that you're enabling their flexibility while creating an audit trail. Review accumulated adjustments for consistency and flag outliers for follow-up.",
        "Streamlined process enables continued flexibility while establishing controls; distinct coding enables tracking and reporting; retroactive review catches inconsistencies; communication explains the 'why' to gain cooperation.",
        10,
        "Send guidance to branch managers establishing consistent policies for fee waivers and credits during the disaster period, with specific dollar thresholds and documentation requirements. Apply these prospectively and review prior adjustments after the crisis.",
        "Prospective guidance is appropriate but may still create confusion about past decisions; deferring review entirely risks the period of highest adjustment volume going unexamined.",
        5,
        "Require all disaster-related adjustments above $100 to receive central approval before processing to ensure consistency and proper documentation from this point forward.",
        "Central approval creates bottleneck precisely when customers need rapid assistance; $100 threshold may not be practical given volume; doesn't address accumulated adjustments.",
        -5,
        "Trust branch managers to make appropriate decisions during the crisis and conduct a comprehensive audit after things normalize. Adding processes now will slow customer service when speed matters most.",
        "Manager trust is valuable but undocumented decisions create audit findings and potential fair lending issues if accommodations vary by customer; comprehensive after-the-fact audit is much harder than contemporaneous tracking.",
        -5
      )),
    q("Accounting", "The water-damaged branch had physical cash in a teller vault and cash recycler that was exposed to contamination. The cash is technically legal tender but is damaged and will need to be processed for mutilated currency exchange with the Federal Reserve. However, your branch records show a different starting balance than what was physically recovered. How do you handle the discrepancy?",
      buildChoices(
        "Immediately segregate and secure all recovered currency with photographic documentation of condition. Conduct a complete reconciliation of the branch's last known cash position against what was recovered, documenting any discrepancy with potential explanations (water displacement, visibility issues, etc.). File the mutilated currency claim with the Fed with full supporting documentation. Treat any unreconciled difference as a loss pending investigation.",
        "Segregation preserves evidence; photo documentation supports all processes; full reconciliation quantifies the issue; multiple explanations acknowledges uncertainty; treating as loss pending investigation is conservative and audit-defensible.",
        10,
        "Process all recovered cash through standard mutilated currency procedures and record the exchanged amount as the branch's recovered cash position. Any difference from prior records can be attributed to storm damage as the cause is obvious.",
        "Standard processing is appropriate for the currency but attributing discrepancy to storm without investigation could mask theft or prior errors; obvious cause is not documented cause.",
        5,
        "Write off the full pre-storm vault balance as a storm loss since the cash was compromised regardless of recovery amount. This simplifies accounting and is clearly supportable given the circumstances.",
        "Full write-off when partial recovery is possible overstates losses and may raise insurance or audit questions; simplification sacrifices accuracy.",
        -5,
        "Have the branch manager reconstruct records to the best of their ability and adjust prior balances if the discrepancy appears to be a pre-storm record-keeping error rather than a storm-related loss.",
        "Reconstruction may be appropriate for obvious errors but adjusting prior records to reduce discrepancy without clear evidence is problematic for audit integrity; this could mask actual issues.",
        -5
      )),
    q("Accounting", "As you prepare month-end close, you need to determine how to account for various storm-related items: committed but unprocessed fee waivers, estimated customer credits not yet posted, pending insurance claims, and potential loan loss reserve adjustments for affected borrowers. Some amounts are known, others are estimates with significant uncertainty. How do you approach the close?",
      buildChoices(
        "Apply proper accounting treatment by category: accrue known and estimable amounts (committed fee waivers, systematic customer credits) with documented methodology; disclose but don't record gain contingencies (insurance claims pending); evaluate loan portfolio for impairment indicators per existing policy. Prepare a comprehensive memo documenting all storm-related estimates, assumptions, and significant uncertainties for auditor review.",
        "Proper GAAP treatment maintains integrity; documented methodology supports estimates; conservative gain contingency treatment is appropriate; impairment evaluation follows existing frameworks; comprehensive documentation enables audit review.",
        10,
        "Record all known amounts and make reasonable estimates for uncertain items. Note the storm-related activity in management discussion but avoid excessive complexity given the temporary nature of the situation.",
        "Recording known amounts is correct but 'reasonable estimates' without documented methodology may not withstand audit scrutiny; characterizing disaster accounting as 'temporary' may understate ongoing impacts.",
        5,
        "Keep storm-related items in suspense accounts until amounts are finalized to avoid booking estimates that will require adjustment. This provides cleaner financials and easier subsequent true-up.",
        "Suspense accounts defer recognition but may violate GAAP matching requirements; cleaner financials shouldn't take precedence over accurate representation of known and estimable liabilities.",
        -5,
        "Accelerate recognition of insurance claims and loss recoveries to offset recorded losses and present a more balanced view of the net financial impact to stakeholders.",
        "Accelerating gain contingencies before realization criteria are met violates GAAP; presenting balanced view shouldn't override proper accounting treatment.",
        -5
      )),

    // Deposits
    q("Deposits", "An elderly customer comes to your one operational branch with a $5,000 check from FEMA, requesting immediate cash. Your standard policy requires holds on government checks over $2,500. The customer says they need the money today for emergency housing - their home is destroyed and they're staying with family temporarily. Branch staff asks for guidance. What do you advise?",
      buildChoices(
        "Exercise the exception authority to release funds immediately with appropriate documentation: verify the check authenticity through FEMA check characteristics, document the customer's emergency situation, have a supervisor approve the hold exception, and process the transaction. FEMA disaster assistance checks have extremely low fraud rates and the customer need is clear.",
        "Exception authority exists for situations like this; FEMA check verification is straightforward; documentation protects the bank; supervisor approval follows proper process; context-appropriate risk assessment balances policy with customer need.",
        10,
        "Offer to release $2,500 today per standard policy and expedite the hold release on the remaining $2,500 to tomorrow given the circumstances. This balances accommodation with prudent risk management.",
        "Partial release provides some assistance and reduced risk, but the customer stated they need the full amount today and half measures may not meet their actual need while still requiring them to return.",
        5,
        "Explain the hold policy apologetically but firmly - exceptions undermine controls and create precedent. Suggest they try a check-cashing service that might provide immediate funds, though fees will apply.",
        "Policy consistency has value but rigid application during documented disasters ignores the purpose of exception authority; directing to fee-based alternatives when you could help damages relationship and reputation.",
        -5,
        "Call FEMA to verify the check before making any exception. If they can confirm the payment, release the funds; if you can't reach them or get verification, apply standard hold policy.",
        "Verification sounds prudent but FEMA doesn't have a check verification hotline; this creates an impossible condition that defaults to denial while appearing to offer a path to approval.",
        -5
      )),
    q("Deposits", "Your mobile and online banking platforms are experiencing intermittent failures due to the regional infrastructure issues. Customer complaints are mounting on social media, and some are threatening to move their accounts. Your vendor says they're working on it but can't guarantee restoration timing. How do you manage customer communication and expectations?",
      buildChoices(
        "Implement proactive status communication: website banner with current status and estimated restoration, social media updates every 2-4 hours, IVR message for phone banking. Acknowledge the frustration directly, explain the infrastructure cause beyond your control, describe what you're doing to restore service, and highlight available alternatives (partner ATMs, phone support, open branches). Assign social media staff to respond individually to complaints with specific helpful information.",
        "Proactive communication reduces inquiry volume; regular updates show active management; honest explanation builds understanding; alternatives give customers options; individual responses demonstrate care.",
        10,
        "Post a single statement explaining the outage is due to regional infrastructure issues affecting many providers, and that services will be restored as soon as possible. Avoid committing to timelines you can't control.",
        "Single statement is efficient but static communication during an ongoing outage appears unresponsive; avoiding timelines is prudent but 'as soon as possible' provides no useful information.",
        5,
        "Focus resources on working with the vendor to restore service rather than on customer communications. Once service is restored, the complaints will stop and those are better actions than words.",
        "Restoration should be priority but silence during extended outage accelerates customer attrition and social media criticism; solving the problem doesn't address the relationship damage from poor communication.",
        -5,
        "Directly challenge inaccurate complaints on social media to correct the record - if customers are claiming outages are longer than actual, or blaming you for infrastructure issues, set the facts straight.",
        "Accuracy matters but defensive public responses to frustrated customers typically escalate rather than resolve; being 'right' doesn't win customer loyalty during a crisis.",
        -5
      )),
    q("Deposits", "As branches reopen, you're seeing customers with unusual requests: large cash withdrawals for home repairs, requests to add family members to accounts quickly, wire transfers to contractors they just met, and increased activity on accounts that were previously dormant. Your BSA/AML monitoring is generating numerous alerts. How do you balance fraud prevention with legitimate disaster-related banking needs?",
      buildChoices(
        "Adjust monitoring thresholds and alert handling specifically for disaster period: create an expedited review queue for disaster-related patterns with staff trained on legitimate disaster typology versus fraud indicators. Apply enhanced scrutiny to classic fraud patterns (elder customer adding new person, large wires to unknown parties, dormant account sudden activity) while streamlining review of obvious disaster patterns (cash for repairs, increased check deposits from insurance). Document the risk-based approach.",
        "Adjusted thresholds prevent alert fatigue while maintaining detection; expedited review balances speed with scrutiny; distinguishing disaster patterns from fraud patterns enables appropriate response; documentation supports audit review.",
        10,
        "Maintain standard monitoring thresholds - disasters attract fraudsters precisely because banks relax controls. Process alerts through normal procedures even if it takes longer, and train staff to ask additional questions about unusual requests.",
        "Standard thresholds will generate overwhelming false positives that obscure real fraud; normal processing during abnormal volume creates backlogs; additional questions without framework creates inconsistent customer experience.",
        5,
        "Temporarily suspend monitoring thresholds for customers with addresses in disaster-declared areas since their activity changes are explicable. Focus BSA resources on non-disaster areas where unusual activity is more likely to be suspicious.",
        "Geographic suspension is overbroad and removes protection precisely where fraud may increase; disaster areas attract scammers targeting vulnerable populations.",
        -5,
        "Prioritize customer service by processing all requested transactions promptly and filing SARs after the fact if patterns warrant. The disaster creates reasonable explanations for unusual activity.",
        "After-the-fact SARs don't prevent fraud losses or protect customers from scams; reasonable explanations exist but so do heightened fraud attempts; this removes real-time intervention capability.",
        -5
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
        "Immediately audit all service accounts for similar issues, quarantine any accounts with unexplained access, implement mandatory expiration and quarterly access reviews, require documented approval for any emergency account with enforced just-in-time privileges, and include a management accountability assessment in the incident record. Prioritize forensic preservation for accounts with sensitive access.",
        "Auditing and quarantine reduce reinfection risk; just-in-time privileges and recurring reviews prevent recurrence; naming management accountability and preserving forensic evidence balance remediation with investigatory needs.",
        10,
        "Decommission this specific account immediately, apply short-term compensating controls (credential rotation, enhanced logging) for other similar privileged accounts, and schedule a full historical audit once immediate containment and forensics are complete so as not to destroy evidence.",
        "Targeted decommissioning and compensating controls reduce immediate risk while planning a broader audit preserves evidence and sequences actions sensibly.",
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
        "Assess notification requirements under applicable state laws (which vary by data elements), document the analysis, consult privacy counsel, and prepare tiered notification templates (full notice, targeted outreach, and monitoring offers) so you can move rapidly if any jurisdiction requires or if compromise occurs.",
        "Tiered templates and counsel-backed analysis let you meet varied legal thresholds quickly while tailoring outreach to risk profiles and jurisdictions.",
        10,
        "Conclude notification is not required in many jurisdictions given no SSNs, but prepare a targeted voluntary advisory for higher-risk groups (e.g., commercial borrowers) and retain templates and evidence so you can pivot to formal notification if counsel advises or if misuse is identified.",
        "This pragmatic stance minimizes unnecessary alarm while providing a defensible, prepared response if circumstances change or counsel recommends notification.",
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
        "Assume possible access given the intent demonstrated, rotate any embedded credentials immediately, snapshot the repository for forensic review (preserving timestamps and metadata), run a targeted diff to detect exfiltration or code downloads, and assess commercial sensitivity to inform legal and competitive responses.",
        "Snapshotting and diffs preserve evidence while credential rotation addresses immediate risk; sensitivity assessment informs legal and business mitigation options.",
        10,
        "Treat lack of clear logs as inconclusive: accelerate logging analysis and repository access monitoring, implement temporary repository access restrictions, and prioritize forensic review before concluding whether code was accessed.",
        "Inconclusive logs warrant temporary restrictions and expedited review rather than dismissal; this avoids premature conclusions while targeting investigation resources.",
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
        "Acknowledge that the departure and subsequent incident are being handled appropriately, reinforce that personnel matters are confidential, offer EAP resources, and provide a brief, factual FAQ to managers to ensure consistent, non-speculative answers while avoiding operational detail disclosure.",
        "Acknowledgment with manager FAQs preserves confidentiality while equipping leaders to respond consistently; EAP support addresses wellbeing.",
        10,
        "Share limited, verified facts about the unauthorized access (scope and protections taken) in a controlled, manager-led briefing to correct harmful misinformation while protecting privacy and legal considerations.",
        "Controlled factual briefings help counter misinformation while respecting confidentiality and legal constraints; this balances reputation and privacy.",
        5,
        "Tell staff that the rumors are false without providing specifics, trusting that a clear denial will end speculation.",
        "Denial without context may not be credible and could intensify speculation; acknowledgment with confidentiality boundaries is better.",
        -5,
        "Ignore the rumors since engaging with them gives them credibility and they'll die down once the situation is resolved.",
        "Ignoring allows harmful narratives to solidify; appropriate acknowledgment with boundaries is more effective than silence.",
        -5
      )),
    q("HR", "The employee's emergency contact— their spouse — calls HR demanding to know why their husband/wife was 'treated so unfairly' and threatening to 'go to the media' about the bank's 'toxic management.' What approach is most appropriate?",
      buildChoices(
        "Listen empathetically, explain that personnel matters are confidential and you cannot discuss private details, offer to document their concerns and provide a single point of contact for follow-up, and advise calmly on appropriate legal or union channels if applicable.",
        "Empathetic listening and a designated contact de-escalate the caller while preserving confidentiality; documenting the call creates a record for legal and HR follow-up.",
        10,
        "Tell them the bank has evidence of unauthorized access after termination and encourage cooperation with investigators to avoid further reputational harm.",
        "Encouraging cooperation is constructive, but sharing investigatory details with family risks confidentiality and legal exposure; such statements should be carefully vetted.",
        5,
        "Immediately transfer the caller to the bank's legal team without acknowledging their concerns, since it may be pre-litigation.",
        "Abrupt transfers can escalate distress and appear evasive; legal involvement may be necessary but should follow a documented HR acknowledgement.",
        -5,
        "Warn the caller that public allegations could be defamatory and imply the bank may retaliate publicly if contacted by media.",
        "Threats or implied retaliation are inappropriate and legally risky; maintain professionalism and avoid adversarial language.",
        -5
      )),
    q("HR", "Exit interview notes from two months ago show the employee expressed frustration about being 'passed over' for promotion and feeling 'undervalued.' These notes weren't escalated as a potential insider threat indicator. What approach is most appropriate?",
      buildChoices(
        "Conduct a root‑cause review of exit interview procedures to define clear escalation criteria for concerning language, train HR on those criteria, and assign a named owner to ensure improvements are implemented and monitored.",
        "A structured review with clear criteria and ownership reduces future blind spots without unfairly blaming individual staff; it balances learning and accountability.",
        10,
        "Conclude that most exit interview frustration is normal and that adding formal escalation will produce too many false positives, so no change is needed.",
        "While avoiding overload is valid, doing nothing misses a chance to tune detection thresholds and capture meaningful signals.",
        5,
        "Require automatic security referral for any exit interview containing language about being 'passed over' or 'undervalued' to ensure no potential threat is missed, even if many will be false alarms.",
        "Automatic referrals reduce the chance of missing real threats but could overwhelm security and harm employee trust if overused.",
        -5,
        "Discipline the HR staff member who conducted the exit interview for not escalating, to set an example and deter negligence.",
        "Disciplining without considering process gaps is punitive and may deter candid exit conversations; focus on systemic fixes instead.",
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
        "Provide a factual incident scope briefing, highlight controls that were and were not affected, and offer timely evidence of compensating controls and remediation steps while leaving the ultimate assessment to the auditors.",
        "This supplies auditors with the necessary facts without pre-judging their professional assessment, and demonstrates management cooperation and remediation planning.",
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
        "Track direct out-of-pocket costs plus estimated incident-related staff time using a simple, standardized time entry template for affected roles; document the estimation methodology and thresholds so insurer and legal teams can assess recoverability.",
        "Capturing both direct costs and a transparent estimate of staff time creates a more complete claim and is defensible if the methodology is documented and consistently applied.",
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
        "Preserve detailed records of the amounts paid and consult counsel on recoverability and potential offset options; only pursue offsets or recoveries with legal authorization and a documented basis to avoid statutory or contractual exposure.",
        "This protects the bank legally while preserving recovery options where law or contract supports them; it avoids knee-jerk actions that could create additional liabilities.",
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
  description:
    "At 4:23 AM, your core banking vendor's primary data center experienced a cascading failure. Your core processing, online banking, mobile app, and debit card authorization systems are all offline. The vendor's status page shows 'investigating' with no ETA. 127 other financial institutions are affected. Your vendor relationship manager isn't responding, and the emergency hotline has a 90-minute hold time. Customers are waking up to declined debit cards at gas stations and grocery stores. Your ATMs are dispensing cash from local reserves but can't verify balances. Social media complaints are mounting, and a local news station has already called asking for a statement. The vendor's last major outage in 2019 lasted 14 hours.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "It's now 6:00 AM and you have no reliable information from the vendor about cause or restoration timeline. Your board chair is calling, customers are flooding social media, and branch managers are asking what to tell staff arriving for the 8:00 AM opening. What's your immediate leadership approach?",
      buildChoices(
        "Activate incident command immediately with clear roles: assign someone to continuously attempt vendor contact through all channels, designate a customer communications lead, prepare branch guidance for opening, and brief the board chair with known facts while acknowledging the uncertainty. Don't wait for vendor information to start your response.",
        "Parallel activation across all fronts is essential when you can't control the timeline; waiting for vendor information cedes the initiative; board chair deserves to know what you know even if it's limited; branch guidance can't wait for perfect information.",
        10,
        "Focus all efforts on reaching the vendor for information before activating broader response, since any communications without knowing the restoration timeline could prove inaccurate.",
        "Vendor information is valuable but waiting for it paralyzes your response; you can communicate uncertainty and still be helpful; your customers are affected now regardless of when the vendor responds.",
        5,
        "Immediately issue a public statement blaming the vendor for the outage to set customer expectations that this is outside your control.",
        "Blame-shifting may be factually accurate but damages the vendor relationship you need for resolution and appears to deflect rather than help customers; you chose the vendor and customers hold you accountable.",
        -5,
        "Delay branch opening until you have clarity from the vendor to avoid staff facing customers without answers.",
        "Delayed opening may seem prudent but customers will arrive regardless; closed branches with no explanation creates worse optics than open branches with limited service; your people can help even without complete information.",
        -5
      )),
    q("CEO/SVPs", "By noon, the vendor has provided three different restoration estimates, each pushed back within hours of being given. Customer complaints are now trending on social media, and a regional newspaper is preparing a story about 'local banks leaving customers stranded.' The vendor's CEO has offered to do a joint statement with affected banks. What's your approach?",
      buildChoices(
        "Decline the joint statement and issue your own communication focused on what YOUR customers can do: branch locations with available services, ATM access, alternative payment methods, and how you'll make affected customers whole. Own your customer relationship regardless of vendor failures.",
        "Individual response keeps you in control of your customer narrative; joint statement dilutes accountability; customers care about their bank, not vendor industry dynamics; action-oriented communication is more valuable than explanations.",
        10,
        "Participate in the joint statement to present a unified industry response and share the reputational burden across the 127 affected institutions.",
        "Joint response has some efficiency but your customers chose you, not an industry consortium; collective messaging often becomes lowest-common-denominator and delays action.",
        5,
        "Wait for the vendor to resolve the issue before making any public statements, since any commitment now could prove wrong given the unreliable timeline estimates.",
        "Silence during an extended outage is worse than statements that need updating; customers expect acknowledgment and help, not silence until everything is fixed.",
        -5,
        "Use social media to publicly pressure the vendor by tagging their executives and demanding accountability, showing customers you're fighting for them.",
        "Public vendor confrontation may generate brief customer sympathy but damages the working relationship you need for resolution and makes you look out of control; fight privately, serve publicly.",
        -5
      )),
    q("CEO/SVPs", "It's now 8:00 PM on day one - the outage has lasted 16 hours with no clear end in sight. Your primary regulator calls asking about your business continuity plans and why you don't have a backup core provider. They hint at potential supervisory concerns about vendor concentration risk. How do you handle this conversation?",
      buildChoices(
        "Acknowledge the valid concern about vendor concentration, explain your existing BCP provisions and their limitations in this scenario, describe immediate steps being taken to serve customers, and commit to a post-incident review of vendor risk management. Don't be defensive about a legitimate regulatory concern.",
        "Regulatory acknowledgment without defensiveness builds credibility; BCP transparency shows you've thought about resilience even if it has gaps; post-incident review commitment demonstrates learning orientation.",
        10,
        "Explain that single-vendor concentration is industry-standard for community banks and that maintaining redundant core systems isn't economically feasible for your institution size.",
        "Industry-standard argument may be accurate but sounds defensive; regulators are aware of economics but are asking about YOUR risk management; comparison to peers doesn't address the customer impact.",
        5,
        "Point out that the vendor passed the third-party risk assessment required by regulators, implying that regulatory requirements were followed.",
        "Compliance-checkbox response misses the point; passing an assessment didn't prevent this outage; regulators are asking about real resilience, not paper compliance.",
        -5,
        "Suggest that the regulator should be investigating the vendor rather than questioning your bank's risk management practices.",
        "Deflection to vendor investigation may have merit but antagonizes the regulator during an active incident; your risk management choices are legitimately in scope regardless of vendor failures.",
        -5
      )),

    // IT/Security
    q("IT/Security", "Your ATMs are running on local cash reserves and cached authorization data, but the cache is getting stale. Some customers are seeing 'balance unavailable' messages while others are getting declined for transactions that should approve. You estimate the ATM network can continue degraded operations for another 6 hours before the cache becomes dangerously unreliable. What's your recommendation?",
      buildChoices(
        "Continue ATM operations with clear on-screen messaging about potential issues and a conservative approach to approvals (authorize known good patterns, decline uncertain ones). Prepare to shift ATMs to 'cash advance' mode with fixed limits if cache reliability degrades further. Monitor fraud patterns closely.",
        "Continued degraded service is better than no service; transparent messaging manages expectations; conservative approvals balance customer access with risk; having a next-phase plan ready prevents reactive decisions.",
        10,
        "Shift ATMs to cash-advance mode immediately with a fixed $200 limit for all customers regardless of account status, eliminating the cache reliability concern entirely.",
        "Fixed limit mode is a viable fallback but implementing it preemptively denies customers with legitimate higher needs; save this option for when cache reliability actually degrades.",
        5,
        "Take all ATMs offline until core connectivity is restored to prevent any possibility of incorrect authorizations or fraud.",
        "Offline ATMs during a payment system outage compounds customer harm dramatically; some access with risk controls is better than no access; your fraud controls can manage the elevated risk.",
        -5,
        "Continue current operations without changes since the 6-hour estimate provides buffer and the vendor may restore service before then.",
        "Hoping for vendor resolution without preparation leaves you scrambling if it doesn't happen; the estimate is uncertain and preparing fallback options now is prudent.",
        -5
      )),
    q("IT/Security", "The vendor's technical team asks for remote access to your firewall management console to troubleshoot why your connection isn't restoring while other banks are coming back online. They say it's urgent and will significantly speed your restoration. Your security team is concerned about granting this access during an active incident when you can't verify the vendor's environment security. What do you recommend?",
      buildChoices(
        "Offer a supervised alternative: your network team will share screens and execute commands the vendor specifies, maintaining control of your security perimeter while enabling their troubleshooting. Document all actions taken. This is slower but maintains security boundaries.",
        "Supervised access preserves security controls while enabling troubleshooting; screen sharing accomplishes the technical goal without granting direct access; documentation creates audit trail; small speed sacrifice for significant risk reduction.",
        10,
        "Grant the access since the vendor is a trusted partner with existing agreements, and the business need to restore service outweighs the incremental security risk.",
        "Trust and agreements are relevant but the vendor is experiencing an uncharacterized security incident; their environment may be compromised; granting access during their incident is exactly when you shouldn't.",
        5,
        "Refuse any vendor access to your security infrastructure and troubleshoot the connection issue entirely with internal resources.",
        "Complete refusal may be overly rigid if the vendor genuinely needs to see something to help; supervised alternatives exist that don't require granting access.",
        -5,
        "Grant temporary access with a plan to rotate all credentials after the incident, balancing immediate need with post-incident security hygiene.",
        "Post-incident rotation doesn't address real-time risks during the access window; if the vendor environment is compromised, damage occurs during access, not after credentials are rotated.",
        -5
      )),
    q("IT/Security", "By day two, your connectivity is restored but you're discovering data synchronization issues: some transactions processed through manual workarounds haven't reconciled with the restored core system, and customer balance displays are showing inconsistencies. The vendor wants to run an automated reconciliation script across your production database. What's your position?",
      buildChoices(
        "Require the vendor to provide the script for your team's review before execution, run it first in a test environment if possible, execute it during low-volume hours with your DBAs present, and maintain the ability to roll back. This is your production data and you need to understand what's being done to it.",
        "Script review ensures you understand what will be modified; test execution catches problems; your DBA presence maintains control; rollback capability is essential for production changes; vendor expertise doesn't eliminate your responsibility.",
        10,
        "Allow the vendor to run their standard reconciliation script since they've done this for 127 other banks and have the expertise to handle it correctly.",
        "Other bank experience is relevant but doesn't mean the script is appropriate for your specific data state; standard scripts may not account for your specific manual workarounds.",
        5,
        "Refuse the automated script entirely and reconcile all discrepancies manually to maintain complete control over your customer data.",
        "Complete manual reconciliation may be appropriate for small volumes but at scale introduces more errors than automated approaches; the goal is accuracy, not control theater.",
        -5,
        "Let the vendor run the script immediately since customers are seeing wrong balances and speed of correction matters more than process.",
        "Customer impact creates urgency but wrong script execution could make things worse; a few hours for review and testing is worth preventing a second data quality incident.",
        -5
      )),

    // HR
    q("HR", "Branch staff have been handling frustrated customers for 10 hours with no system access. Several tellers have reported crying in the break room, one manager walked off the job mid-shift, and calls from employees asking whether they can go home are increasing. You still have 2 hours until normal closing time. How do you handle staffing?",
      buildChoices(
        "Authorize managers to release non-essential staff early with pay, keep skeleton crews for remaining customers, deploy any available support staff to relieve the most stressed employees, and communicate that mental health support is available. Document that early release was authorized so employees don't worry about consequences.",
        "Early release with pay acknowledges the extraordinary circumstances; skeleton crews maintain service; relieving stressed employees prevents worse outcomes; mental health resources address real needs; documented authorization removes fear of repercussions.",
        10,
        "Keep all scheduled staff until normal closing time but gather everyone for a brief thank-you acknowledgment and remind them that difficult days happen in banking.",
        "Acknowledgment is appropriate but forcing exhausted staff to stay when volume may not require it prioritizes schedule over wellbeing; 'difficult days happen' minimizes a genuinely exceptional situation.",
        5,
        "Close branches early since systems are down anyway and staff clearly can't continue effectively.",
        "Early closing may be necessary in extreme cases but closing before attempting other options abandons customers who are coming to branches precisely because digital channels are down.",
        -5,
        "Remind employees that this is their job and the situation, while difficult, is temporary, encouraging them to maintain professional composure.",
        "Professionalism reminders during a genuine crisis may come across as dismissive; employees are managing real customer distress and deserve support, not lectures.",
        -5
      )),
    q("HR", "The manager who walked off mid-shift sends a text message saying they quit and aren't coming back. They were a 7-year employee with strong performance history and were visibly overwhelmed before leaving. Their departure has created a coverage gap for tomorrow. How do you respond?",
      buildChoices(
        "Have a senior HR leader call them personally (not text) to express concern for their wellbeing, not to pressure them to return. Indicate that no decisions need to be made right now and that you'd like to talk when they're ready. Fill tomorrow's coverage gap through other means. Leave the door open for a conversation once emotions settle.",
        "Personal call demonstrates genuine concern; not pressuring preserves relationship; wellbeing focus is appropriate; coverage gap is a separate operational problem; leaving door open recognizes this may be a crisis reaction, not a permanent decision.",
        10,
        "Accept the resignation via reply text and immediately begin recruiting for the position to ensure continuity.",
        "Quick acceptance may be premature; 7-year employees rarely quit via text under normal circumstances; accepting without conversation treats a crisis reaction as a final decision.",
        5,
        "Have their direct supervisor call to discuss what happened and ask them to reconsider given their strong history and the temporary nature of the situation.",
        "Supervisor call seems logical but they were overwhelmed by the supervisor's operational demands; having the same chain ask them to reconsider may feel like pressure rather than support.",
        -5,
        "Send a formal resignation acceptance letter noting that walking off during a shift is job abandonment and may affect their eligibility for rehire or unemployment benefits.",
        "Formal letter with punitive language transforms a reachable situation into a permanent break; 7-year employees in crisis deserve a conversation, not a legal notice.",
        -5
      )),
    q("HR", "After the outage is resolved, several employees express frustration that they weren't compensated for the exceptional stress and extended hours, noting they received regular pay for an extraordinarily difficult period. The HR director mentions that crisis pay premiums weren't budgeted. What do you recommend?",
      buildChoices(
        "Implement a one-time recognition payment for employees who worked during the outage, even if it wasn't pre-budgeted. The cost is small compared to the value of employee retention and morale. Communicate it as appreciation for exceptional performance, not an entitlement for future incidents.",
        "One-time payment recognizes genuine exceptional effort; budget constraints are real but discretionary spending exists; framing as appreciation rather than entitlement prevents precedent concerns while acknowledging reality.",
        10,
        "Offer comp time or extra PTO instead of cash, allowing employees to recover without impacting the unbudgeted expense category.",
        "Comp time is a valid recognition form but some employees may prefer cash; offering only non-cash options when cash is what was asked may feel like a workaround rather than genuine recognition.",
        5,
        "Explain that compensation structures are set in advance and crisis situations are part of banking, noting that employees are already paid for their roles which include handling difficult situations.",
        "Technically accurate but tone-deaf to employees who experienced an exceptional event; 'part of banking' framing dismisses a genuinely unusual situation; this response increases attrition risk.",
        -5,
        "Promise to include crisis premium provisions in the next budget cycle so employees are protected in future incidents.",
        "Future promise doesn't address current employee frustration; they worked through this crisis and are asking about this crisis; deferring to next budget cycle feels dismissive.",
        -5
      )),

    // Finance
    q("Finance", "Your merchant services customers (businesses that process card payments through you) have lost 16+ hours of payment processing capability. Several are claiming significant revenue losses and asking about compensation. Your merchant services contract has a force majeure clause for vendor outages, but enforcing it strictly may damage relationships. How do you approach this?",
      buildChoices(
        "Proactively offer merchant statement credits covering fees for the outage period, even though the contract doesn't require it. For merchants claiming revenue losses, express sympathy but explain that revenue guarantees aren't something any payment processor provides. Document all accommodations. The fee credits cost less than merchant attrition.",
        "Proactive fee credits demonstrate partnership; distinguishing fees (within your control) from revenue losses (not) is appropriate; documentation supports consistency; retention economics favor accommodation over contractual enforcement.",
        10,
        "Review each merchant claim individually on a case-by-case basis, making accommodations where the relationship warrants it.",
        "Case-by-case review is fair but creates inconsistency and is resource-intensive; merchants talk to each other and different treatment becomes visible; criteria-based approach scales better.",
        5,
        "Point all merchants to the force majeure clause and explain that vendor outages are contractually excluded from service guarantees.",
        "Contract enforcement is your right but exercising it after a genuine crisis damages relationships; merchants chose you over alternatives and feel abandoned when you hide behind legal terms.",
        -5,
        "Offer to compensate documented revenue losses to maintain relationships, establishing a process for merchants to submit claims.",
        "Revenue loss compensation sounds generous but is practically unlimited exposure; every business will claim maximum losses; you're accepting liability the contract and common practice don't require.",
        -5
      )),
    q("Finance", "The CFO asks for an estimate of total incident costs for the board meeting tomorrow. You have confirmed fee waivers of $47,000, estimated productivity losses around $85,000, and potential merchant credits of unknown amount. There may be regulatory costs if examination findings result. Insurance may cover some losses but you haven't filed a claim yet. How do you present the financial impact?",
      buildChoices(
        "Present what's known with confidence levels: confirmed costs of $47K, estimated costs of $85K with methodology explained, and identified but unquantified categories (merchant credits, regulatory, legal) with explanation of when estimates will be available. Note insurance recovery potential without assuming proceeds.",
        "Confidence-level presentation gives board actionable information while being transparent about uncertainty; explaining methodology enables board to evaluate estimates; noting unquantified categories sets expectation of updates.",
        10,
        "Provide a single total estimate that represents your best judgment, acknowledging it may need adjustment as more information becomes available.",
        "Single number seems cleaner for board consumption but conflates known and estimated amounts; board can't assess what's firm versus speculative; appears more certain than warranted.",
        5,
        "Wait until all costs are finalized to present a complete picture, noting that preliminary estimates would likely need significant revision.",
        "Waiting for completeness may not be possible given board timeline; boards understand estimates and prefer visibility over delay; 'significant revision' caveat undermines confidence in your financial controls.",
        -5,
        "Present worst-case scenario figures to ensure the board isn't surprised, building in contingency for all uncertain categories.",
        "Worst-case presentation creates unnecessary alarm and may trigger board decisions (cost cutting, vendor termination) that aren't warranted by actual exposure; estimates should be realistic, not conservative.",
        -5
      )),
    q("Finance", "Your cyber insurance policy potentially covers business interruption from vendor outages, but the deductible is $100,000 and estimated quantifiable losses are around $132,000. Filing a claim may increase future premiums and require significant documentation effort. The CFO is uncertain whether to file. What do you recommend?",
      buildChoices(
        "File the claim with thorough documentation. The $32,000 net recovery is worth having, premium impacts from a single claim are typically modest, and the documentation process forces disciplined cost tracking that benefits future incidents. Not filing sets a precedent of self-insuring losses the policy should cover.",
        "Filing is appropriate when losses exceed deductible; premium impact is a factor but shouldn't drive under-recovery; documentation discipline has independent value; self-insuring covered losses wastes the premium already paid.",
        10,
        "Don't file given the modest net recovery and premium impact; treat this as a cost of doing business and reserve insurance claims for larger incidents.",
        "Premium preservation logic seems financially prudent but effectively increases your deductible to whatever threshold you're willing to file at; you paid for coverage starting at $100K.",
        5,
        "Wait to see if any additional costs emerge that would increase the claim value before initiating the documentation-intensive filing process.",
        "Waiting for larger losses hopes things get worse; file with current amounts and supplement if more costs emerge; delay risks policy notice deadlines.",
        -5,
        "File an inflated claim that includes estimated reputational damage and customer attrition to maximize recovery against the deductible.",
        "Inflated claims are insurance fraud; reputational and attrition estimates aren't typically covered categories anyway; this approach risks policy cancellation and legal consequences.",
        -5
      )),

    // Loans
    q("Loans", "You have a $2.3 million commercial real estate closing scheduled for today - the largest of the quarter. The title company is ready, the borrower has a rate lock expiring, and construction financing starts Monday. Your loan origination system is completely down and you can't access the final documentation or verify the wire instructions. The borrower's attorney is calling every 30 minutes. What do you do?",
      buildChoices(
        "Contact your title company and settlement attorney to explain the situation and work together on alternatives: can closing proceed with the title company holding funds in escrow until your systems verify and release? Can the rate lock be extended at no cost given circumstances outside anyone's control? Explore every path to close today with appropriate safeguards.",
        "Collaborative problem-solving with closing partners may find solutions you can't create alone; escrow holding is a legitimate mechanism; rate lock extension is reasonable given force majeure; exploring all paths before declining serves the customer.",
        10,
        "Offer a short, documented postponement while simultaneously proposing mitigations: request a one-business-day extension of the rate lock (or compensate for any incremental cost), and explore whether the title company can hold funds in escrow pending system verification so the borrower can avoid moving deadlines. Communicate clearly and escalate to senior credit for an exception if needed.",
        "A short, well-documented postponement with concrete mitigations respects borrower timelines while preserving controls; offering compensation or escrow-based solutions reduces relationship risk and shows proactive problem-solving.",
        5,
        "Proceed with the closing using the documentation you have from prior system access, verifying what you can manually and accepting some risk to meet the customer's critical deadline.",
        "Customer focus is admirable but $2.3M closing without system verification creates unacceptable operational and fraud risk; manual verification of wire instructions specifically is dangerous.",
        -5,
        "Advise the borrower to close with another lender if their timeline is critical, offering to reimburse any rate differential or fees they incur.",
        "Alternative lender suggestion abandons a customer at their most critical moment for a problem you caused; even with reimbursement, the relationship damage is severe; this is a last resort, not a first response.",
        -5
      )),
    q("Loans", "Several mortgage borrowers with payments due today are calling concerned because they can't access online banking to make their payments and don't want to be reported late. Your payment processing is down so you can't actually post payments even if they could submit them. How do you handle the payment due date issue?",
      buildChoices(
        "Issue immediate guidance: no borrower will be reported late or charged late fees for payments due during the outage period, with a grace period extending several days after restoration. Document this policy clearly. Accept payments through any channel available (branch cash, phone with card, mail) and post them with original due dates once systems restore.",
        "Clear policy eliminates borrower anxiety; grace period extension is appropriate for system failure; accepting through alternative channels maintains payment flow; back-dating posts to due dates protects credit reporting accuracy.",
        10,
        "Extend the grace period for late fees but note that credit reporting will reflect actual payment receipt dates per standard bureau reporting requirements.",
        "Grace period for fees helps but credit reporting concern is what most borrowers actually worry about; bureau requirements are real but you control what you report and can report based on payment tender date, not posting date.",
        5,
        "Advise borrowers to mail checks immediately so they have proof of payment attempt, and note that postmark dates will be honored.",
        "Mail suggestion provides some protection but is slow and uncertain; borrowers calling want immediate resolution, not multi-day workarounds; phone or branch alternatives are faster.",
        -5,
        "Explain that due dates are contractual and can't be modified, but that you'll work with any borrower who experiences credit impact to submit corrections.",
        "Contractual rigidity during your system failure is tone-deaf; working with impacted borrowers after the fact creates unnecessary credit damage that correction processes can't fully undo.",
        -5
      )),
    q("Loans", "A commercial borrower calls saying they need to draw $500,000 from their line of credit today to meet payroll - their employees get paid tomorrow and the funds need to clear overnight. Your loan system is down so you can't verify available credit or process the draw normally. The relationship manager confirms verbally that the line should have sufficient availability. What's your approach?",
      buildChoices(
        "Process the draw using emergency manual procedures: have the relationship manager document the credit availability verification from whatever records are accessible, require dual officer approval for the manual disbursement, process via wire with appropriate verification of destination account, and reconcile when systems restore. Payroll obligations are critical.",
        "Emergency procedures exist for this scenario; RM verification with documentation provides reasonable assurance; dual approval maintains control; wire processing is available even without loan system; payroll criticality justifies controlled risk-taking.",
        10,
        "Ask the borrower to use an alternative funding source for payroll and commit to processing their draw first thing when systems restore, plus covering any bridge financing costs they incur.",
        "Alternative funding suggestion may not be feasible on 24-hour notice; covering costs is generous but doesn't solve their immediate problem; committed line of credit exists precisely for situations like this.",
        5,
        "Decline the draw until systems restore since you can't verify credit availability, explaining that proper controls protect both parties.",
        "Control protection sounds prudent but failing to fund a committed facility when the borrower has an immediate need is potentially a default on your commitment; verbal verification plus documentation is reasonable assurance.",
        -5,
        "Process the draw based on the relationship manager's verbal confirmation without additional documentation, trusting the long-standing relationship.",
        "Trust is valuable but $500K without documentation creates problems: what if RM memory is wrong? What if fraud is involved? Verbal confirmation plus contemporaneous documentation is the right balance.",
        -5
      )),

    // Accounting
    q("Accounting", "It's day two and you've been processing transactions through manual workarounds: paper tickets, spreadsheets, and email authorizations. You estimate 3,400 transactions worth $8.7 million have been processed outside normal systems. Some entries have incomplete information. Systems may restore later today. How do you prepare for reconciliation?",
      buildChoices(
        "Halt new manual processing except for genuinely critical items. Assign a team to organize and digitize all manual records now, before systems restore, creating a structured reconciliation queue. Categorize by transaction type and completeness. Identify items with incomplete information and attempt to complete them while memories are fresh and source documents are available.",
        "Halting manual processing limits the reconciliation scope; digitizing now prevents lost paperwork; categorization enables systematic processing; completing incomplete records now is easier than reconstructing later.",
        10,
        "Continue manual processing for immediate, customer-facing needs but stand up a dedicated reconciliation triage team now to digitize records, prioritize items by risk/value, and prepare templates so post-restoration reconciliation is tractable.",
        "This hybrid approach preserves customer service while investing effort now to reduce backlog complexity; preparing templates and triage minimizes lost information and speeds eventual reconciliation.",
        5,
        "Stop taking any new transactions until systems restore to prevent the reconciliation problem from growing larger.",
        "Transaction freeze limits growth but abandons customers still needing service; the 3,400 transactions already processed still need reconciliation regardless of whether you add more.",
        -5,
        "Wait for systems to restore and rely on the vendor's reconciliation tools to identify and resolve discrepancies automatically.",
        "Vendor tools may help but they can't reconcile manual records they don't know about; reconciliation requires matching your manual records to their system records, which requires your preparation.",
        -5
      )),
    q("Accounting", "Systems are restored but the reconciliation reveals a $47,000 discrepancy between your manual records and the restored core system. Despite significant effort, you can't identify the source. The month-end close is in 3 days. Your external auditors are asking about the outage's impact on financial statement reliability. How do you proceed?",
      buildChoices(
        "Record the $47,000 in a suspense account only after performing an accelerated, prioritized forensic reconciliation on the highest-risk items (large-dollar or unusual transactions). Document the reconciliation steps and interim conclusions, disclose the variance and your remediation plan to auditors, and proceed with close while committing to a defined, short post-close resolution timeline.",
        "Prioritized reconciliation focuses limited time on likely causes while suspense accounting preserves reporting timeliness; transparent auditor engagement and a post-close remediation deadline balance controls and reporting obligations.",
        10,
        "If the accelerated forensic work can't reasonably resolve the variance within available time, request a narrowly scoped extension for the close limited to completing the reconciliation of this item and provide auditors with interim documentation of efforts.",
        "A targeted extension may be justified in narrow circumstances, but should be a last resort after focused reconciliation; this approach ties the extension to concrete deliverables.",
        5,
        "Book the discrepancy as an incident-related expense and move on, since the amount is immaterial and extended investigation isn't worth the cost.",
        "Expensing unreconciled amounts without investigation is improper; even immaterial amounts deserve reasonable effort to understand; auditors will question why you didn't try harder.",
        -5,
        "Split the discrepancy across multiple accounts to keep any single variance below investigation thresholds and avoid highlighting the reconciliation failure.",
        "Splitting to avoid thresholds is manipulation that conceals problems rather than addressing them; this approach will generate audit findings when detected.",
        -5
      )),
    q("Accounting", "The vendor is offering a 15% service credit on your monthly core processing fees for the next 12 months as compensation for the outage. This credit is worth approximately $180,000. Your CFO asks how to account for it. What's the appropriate treatment?",
      buildChoices(
        "Recognize the credits as a reduction of expense over the 12-month period as they're earned, matching the benefit to the periods in which the underlying services are received. Disclose the arrangement and total expected benefit. This treatment aligns with how the original services are expensed.",
        "Period matching is appropriate accounting; recognizing credits as earned aligns with service consumption; disclosure provides transparency; this treatment is consistent with GAAP guidance on vendor consideration.",
        10,
        "Disclose the arrangement and recognize a portion of the benefit now only to the extent it's tied to services already incurred (e.g., credits that offset previously billed service periods), and recognize the remainder as a reduction of expense over the remaining service periods with clear policy documentation.",
        "This hybrid approach avoids aggressive one-time recognition while reflecting any immediately realizable benefit and documenting assumptions for auditors.",
        5,
        "Net the credits against the incident costs already booked to show the true net financial impact in the period when the incident occurred.",
        "Netting seems intuitive but the credits relate to future services, not past incident costs; netting mixes different periods and different transaction types.",
        -5,
        "Don't record the credits until actually received as bill credits, following a cash-basis approach for vendor considerations.",
        "Cash basis isn't appropriate for accrual-basis entities; waiting for billing credits delays recognition of a known and measurable benefit.",
        -5
      )),

    // Deposits
    q("Deposits", "Branch lobbies are filling with customers who can't use ATMs, can't use debit cards, and can't access online banking. Your tellers can do basic transactions using paper records and signature cards but can't verify balances or transaction history. Some customers are demanding to withdraw their entire balances but you can't confirm what those balances are. How do you handle large withdrawal requests?",
      buildChoices(
        "Establish a reasonable maximum for unverified withdrawals (perhaps $500-1,000) available to any customer with proper ID, explaining that larger withdrawals require balance verification that isn't currently possible. Offer to take contact information and call customers when systems restore if they need larger amounts urgently. Document all unverified transactions meticulously.",
        "Reasonable maximum balances customer access with prudent risk management; explanation is honest about the limitation; callback offer shows commitment to service; documentation enables post-restoration reconciliation.",
        10,
        "Honor any withdrawal request where the customer can provide a recent statement showing sufficient balance, using the statement as verification.",
        "Statement verification is creative but statements can be outdated or manipulated; this creates fraud opportunity for people with old statements from closed or low-balance accounts.",
        5,
        "Refuse all withdrawals until systems restore since you can't verify customer authority to access accounts without system validation.",
        "Refusing all withdrawals during a multi-day outage is untenable; customers have legitimate needs and some access with controls is better than none; this approach will generate regulatory complaints.",
        -5,
        "Trust long-standing customers for larger withdrawals based on teller recognition and relationship history, while being more cautious with less familiar customers.",
        "Relationship-based differential treatment seems reasonable but creates fair lending concerns if recognition correlates with protected characteristics; also creates fraud opportunity if fraudsters are 'recognized' by mistake.",
        -5
      )),
    q("Deposits", "A business customer calls saying they're a restaurant and need to make their daily deposit of $12,000 in cash - they have no secure place to hold it overnight and their insurance doesn't cover cash on premises. Your vault systems are down so you can't process deposits normally. They're a 15-year customer. What do you offer?",
      buildChoices(
        "Accept the deposit using a manual receipt and secured physical storage in your vault. Document thoroughly with multiple witnesses and photos. Process the deposit to their account first thing when systems restore. The physical security of a bank vault is available even when systems aren't.",
        "Manual receipt with documentation creates an appropriate record; vault physical security exists independent of systems; witness documentation protects both parties; prompt processing commitment maintains trust; 15-year customers deserve accommodation.",
        10,
        "Accept the deposit but explain it won't post to their account until systems restore, which could be several days, and they won't earn interest for that period.",
        "Accepting is good but the delay and interest stipulation is unnecessarily punitive; posting delay is a system limitation but interest treatment is a choice; customer is solving a problem you created.",
        5,
        "Explain that you can't accept deposits during the outage and suggest they find a secure alternative like a night drop at another bank or a safe deposit box rental.",
        "Alternative suggestions may be impractical at 6 PM with $12K cash; directing a 15-year customer to a competitor for a service you physically can provide damages the relationship; your vault works even if your systems don't.",
        -5,
        "Accept the deposit but require them to sign a hold-harmless agreement waiving any claims if the funds are lost or misposted during the manual process.",
        "Hold-harmless requirement transfers risk to the customer for your system failure; legal protection shouldn't come at the cost of customer goodwill; your internal controls should manage the risk, not waivers.",
        -5
      )),
    q("Deposits", "After systems restore, you discover that 23 customers were incorrectly charged overdraft fees during the outage due to timing issues with pending transactions. Total fees are $1,840. Your operations manager suggests reversing the fees proactively before customers complain. Your compliance officer is concerned that some of those overdrafts were legitimately incurred regardless of the outage. What do you do?",
      buildChoices(
        "Reverse all 23 fees proactively - the outage created conditions where customer behavior couldn't account for system timing, and distinguishing 'legitimate' from 'outage-caused' overdrafts isn't practically possible. The $1,840 is immaterial compared to customer goodwill. Document the decision rationale and communicate to affected customers.",
        "Proactive reversal is the customer-right answer; trying to distinguish legitimate overdrafts is hair-splitting that creates inconsistency; immaterial cost supports simple resolution; documentation creates an auditable record; customer communication closes the loop.",
        10,
        "Review each overdraft individually to determine whether it was caused by outage timing or would have occurred anyway, reversing only those clearly outage-related.",
        "Individual review seems fair but is resource-intensive and creates arbitrary distinctions; some cases will be ambiguous and different reviewers will decide differently; blanket reversal is cleaner.",
        5,
        "Wait for customers to complain and reverse fees for those who contact you, since many customers may not notice the small charges.",
        "Complaint-based reversal saves money on customers who don't notice but isn't customer-centric; you know the charges may be unfair but are only fixing it if caught; this approach generates regulatory risk if discovered.",
        -5,
        "Retain the fees since overdraft disclosures make clear that fees apply regardless of circumstances, and the outage doesn't change the contractual terms.",
        "Contractual argument is technically defensible but completely misses the customer relationship point; enforcing contract terms that result from your system failure is a bad look.",
        -5
      )),
  ]
};



/* ------------------------- SCENARIO: Regulatory Inquiry ------------------------- */
const SCENARIO_REGULATORY_INQUIRY = {
  key: "regulatory-inquiry-customer-complaints",
  title: "Regulatory Inquiry Triggered by Customer Complaints",
  description:
    "Regulators contact the bank after receiving multiple customer complaints about delays, fees, and inconsistent explanations � before the bank has formally escalated an incident.",
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
        "Creates abuse risk and weakens the bank�s ability to justify decisions.",
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
  description:
    "Your internal audit team discovered unusual patterns during a routine reconciliation: over the past 9 months, a senior operations specialist has been manipulating dormant account records to divert small amounts ($50-$500) to external accounts. Total identified losses are $127,000 across 340 customer accounts. The employee has been with the bank for 12 years with excellent performance reviews and recently received a promotion. They have administrative access to core banking and wire systems. The employee's manager is their brother-in-law. Preliminary evidence suggests at least one other employee may have been aware. No customers have complained yet because the amounts are small and accounts are inactive. Your external auditors begin their annual fieldwork in 3 weeks.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "It's Monday morning and internal audit just briefed you on the findings. The suspected employee is currently at their desk. Their brother-in-law (the manager) is in a meeting. Your General Counsel is traveling. The audit committee chair has a standing request to be notified of any fraud findings. What's your immediate sequence of actions?",
      buildChoices(
        "Have security discreetly escort the employee to HR for an administrative meeting while IT simultaneously disables their system access. Reach General Counsel by phone regardless of travel. Brief the audit committee chair with known facts. Instruct the manager's meeting to continue without interruption until counsel advises on their handling.",
        "Simultaneous employee removal and access termination prevents evidence destruction or flight; counsel involvement is essential before manager conversation given family relationship; audit committee notification fulfills governance obligation; controlled manager handling preserves investigation options.",
        10,
        "Wait for General Counsel to return tomorrow before taking any action, continuing normal monitoring of the employee's activity to gather additional evidence.",
        "Counsel involvement is wise but 24-hour delay with an employee who has admin access to wire systems creates significant risk; monitoring may not catch real-time evidence destruction; delay after audit discovery also looks bad.",
        5,
        "Immediately confront both the employee and their manager-brother-in-law together to get their explanations before deciding on next steps.",
        "Joint confrontation allows coordination of stories and tips off both that an investigation is underway; family relationship complicates dynamics; this isn't how fraud investigations should be conducted.",
        -5,
        "Convene the full executive team to discuss the findings and build consensus on an approach before taking any action that might expose the bank to litigation.",
        "Consensus-building seems prudent but executive team meeting takes time during which the suspected fraudster has wire system access; speed matters more than broad alignment at this stage.",
        -5
      )),
    q("CEO/SVPs", "After the employee is placed on administrative leave, their spouse (who doesn't work at the bank) calls the CEO's office threatening to 'go to the media' if their partner isn't immediately reinstated, claiming this is retaliation for a discrimination complaint filed last month. You weren't aware of any discrimination complaint. What approach do you take?",
      buildChoices(
        "Don't engage substantively with the spouse. Direct the call to HR with instruction to document the contact. Immediately verify with HR whether a discrimination complaint exists. Regardless of whether it does, continue the fraud investigation on its own merits while ensuring all actions are thoroughly documented. Brief employment counsel on the retaliation allegation.",
        "Non-engagement with spouse is appropriate as they aren't an employee; HR documentation creates a record; verifying complaint existence is important for risk assessment; continuing investigation on merits demonstrates non-retaliatory basis; employment counsel protects against litigation risk.",
        10,
        "Explain to the spouse that their partner was placed on leave due to a serious matter unrelated to any discrimination complaint, and that the bank follows fair processes.",
        "Explanation seems reasonable but sharing any information about an employee matter with their spouse is problematic; even denying retaliation implicitly confirms an adverse action and invites further dialogue.",
        5,
        "Have HR immediately investigate the discrimination complaint before proceeding further with the fraud investigation to ensure the bank isn't exposed to retaliation claims.",
        "Investigating the complaint has merit but pausing the fraud investigation gives the impression that allegations can be used as a shield; discrimination and fraud are separate matters that should proceed in parallel.",
        -5,
        "Engage your media relations team to prepare a response in case the spouse follows through on their threat, getting ahead of the story.",
        "Media preparation is premature and may escalate a situation that might not materialize; preparing for publicity also increases the chance of leaks; focus should be on the investigation, not external communications.",
        -5
      )),
    q("CEO/SVPs", "External auditors are scheduled to begin fieldwork in 3 weeks. Your CFO suggests delaying notification until you've completed your internal investigation so you can present a complete picture. Your General Counsel suggests immediate disclosure because the auditors will likely discover it anyway. The identified losses are below your audit materiality threshold. What's your approach?",
      buildChoices(
        "Notify the external auditors promptly through a formal communication documenting what you know, what you're investigating, and what remediation is underway. Being proactive, even for below-materiality amounts, demonstrates governance integrity and prevents the appearance of concealment.",
        "Proactive notification prevents later appearance of hiding information; auditors discovering undisclosed fraud damages the relationship more than the fraud itself; below-materiality doesn't mean below-disclosure for matters involving employee misconduct and control failures.",
        10,
        "Notify auditors at the start of their fieldwork in 3 weeks, by which time you'll have more complete information and can present a clearer picture of scope and remediation.",
        "Waiting for fieldwork start is a reasonable middle ground but creates a 3-week window where auditors could learn from other sources; timing the disclosure to your convenience may appear calculated.",
        5,
        "Don't proactively notify since the amounts are below materiality; if auditors discover the matter during fieldwork, provide full cooperation at that point.",
        "Materiality argument has technical merit but auditors expect to be informed of known fraud regardless of amount; waiting to be discovered damages trust and invites questions about what else wasn't disclosed.",
        -5,
        "Complete the internal investigation before engaging auditors so you can demonstrate that the situation is under control and doesn't require additional audit procedures.",
        "Presenting a resolved situation seems cleaner but auditors should be involved in assessing control implications and may want to perform their own procedures; delayed disclosure suggests prioritizing optics over transparency.",
        -5
      )),

    // IT/Security
    q("IT/Security", "The suspected employee had administrator-level access to core banking, wire transfer systems, and the data warehouse. Their access was terminated when they were escorted out, but you need to assess what evidence might exist and what damage could have occurred. Where do you focus first?",
      buildChoices(
        "Immediately image the employee's workstation and preserve all system access logs for accounts they touched. Review wire transfer history for any unusual patterns. Assess data warehouse queries they ran to identify potential reconnaissance of other accounts. Document chain of custody for all evidence.",
        "Workstation imaging captures local evidence before changes; access logs provide investigation foundation; wire review addresses highest-risk systems; data warehouse queries reveal scope; chain of custody is essential for potential criminal prosecution.",
        10,
        "Focus on the specific accounts identified in the audit finding since that's where known fraud occurred, expanding the review only if initial analysis reveals additional concerns.",
        "Focused approach seems efficient but administrator access means the identified accounts may be only a fraction of the activity; narrow scope may miss related misconduct or accomplices.",
        5,
        "Have the employee's former colleagues review their recent work to identify anything unusual, leveraging their knowledge of normal processes.",
        "Colleague review sounds practical but at least one other employee may have been aware of the scheme; involving colleagues before understanding who knew what risks tipping off accomplices or compromising evidence.",
        -5,
        "Reset all administrator passwords across the environment as an immediate security measure since we don't know what the employee may have shared.",
        "Mass password reset seems prudent but is disruptive and may destroy evidence of unauthorized access attempts; also doesn't address the investigation need to understand what access actually occurred.",
        -5
      )),
    q("IT/Security", "Forensic analysis reveals the employee ran data warehouse queries over the past year that returned information on 12,000 dormant accounts - far more than the 340 accounts with confirmed manipulation. You can't tell from logs alone whether they actually used this data. What do you recommend?",
      buildChoices(
        "Expand the investigation scope to include analysis of all 12,000 accounts for patterns consistent with the known scheme. This is resource-intensive but necessary to understand true exposure. Simultaneously, develop a proactive customer communication plan in case the scope proves larger.",
        "Expanded analysis is necessary because absence of evidence isn't evidence of absence; the queried accounts represent potential undiscovered fraud; proactive communication planning prepares for worst case while hoping for best.",
        10,
        "Sample the 12,000 accounts statistically to determine whether the fraud pattern extends beyond the known 340, escalating to full review only if sampling reveals additional issues.",
        "Statistical sampling is a legitimate audit technique but may miss fraud that targeted specific account characteristics; sampling efficiency doesn't justify the risk of leaving customer harm undiscovered.",
        5,
        "Focus remediation on the confirmed 340 accounts and monitor the 12,000 queried accounts going forward for any suspicious activity.",
        "Forward monitoring doesn't address fraud that may have already occurred; if the employee manipulated more accounts, customers are currently experiencing losses you're choosing not to look for.",
        -5,
        "Treat the additional queries as concerning but explainable by their job duties, documenting the finding for the investigation file without expanding scope.",
        "Job duties explanation requires validation; 12,000 dormant account queries when only 340 were manipulated is a significant anomaly that demands investigation, not documentation and dismissal.",
        -5
      )),
    q("IT/Security", "The investigation reveals the employee was using a generic 'operations support' account for some of the fraudulent transactions rather than their personal credentials. Three other employees also have access to this generic account. What immediate actions are warranted?",
      buildChoices(
        "Disable the generic account immediately and require all operations to use individual credentials with appropriate access. Audit all historical transactions through the generic account for the investigation period. Assess whether the three other employees with access have any knowledge of or involvement in the scheme.",
        "Generic account elimination is a fundamental control improvement; historical audit addresses the evidence gap; assessing other users is necessary for complete investigation - shared credentials don't mean shared culpability, but it must be examined.",
        10,
        "Keep the generic account active but add enhanced monitoring to detect any further suspicious use while the investigation continues.",
        "Continued use of shared credentials is a control failure that shouldn't persist; monitoring doesn't compensate for the inability to attribute actions to individuals.",
        5,
        "Interview the three other employees immediately to determine whether they knew about the fraudulent activity before making any system changes.",
        "Interviews are needed but before making system changes leaves the control gap open; also, interviewing without coordinating with counsel and HR could compromise the investigation or create employment issues.",
        -5,
        "Document the generic account as a finding for the control remediation plan and address it as part of overall security improvements after the investigation concludes.",
        "Deferring remediation of a known control weakness that enabled fraud is inappropriate; this should be fixed immediately regardless of investigation timeline.",
        -5
      )),

    // HR
    q("HR", "The suspected employee's brother-in-law (their manager) insists he had no knowledge of the scheme and wants to cooperate fully. However, audit findings show he approved the employee's recent promotion and signed off on reconciliations that should have detected the variances. He has 18 years of tenure and strong relationships across the bank. How should HR handle his situation?",
      buildChoices(
        "Place the manager on paid administrative leave pending investigation, recognizing this is precautionary and not a presumption of guilt. Engage outside investigative counsel to interview him given the conflict of interest that in-house resources would have. Preserve his system access logs and email for review.",
        "Administrative leave is appropriate given his relationship to the suspect and supervisory role over the failed controls; outside counsel avoids conflicts and adds credibility; log preservation maintains investigation integrity.",
        10,
        "Allow the manager to continue working in a modified role with no supervisory duties while the investigation proceeds, demonstrating good faith in his claimed innocence.",
        "Continued presence in the workplace, even modified, creates awkwardness for the team and may influence witnesses; administrative leave is the standard practice for personnel involved in fraud investigations.",
        5,
        "Accept his statement of non-involvement and focus investigation resources on the actual perpetrator, since there's no direct evidence he participated in the scheme.",
        "Absence of direct evidence isn't exoneration when he had supervisory responsibility for controls that failed; family relationship also requires heightened scrutiny regardless of his statements.",
        -5,
        "Terminate his employment for supervisory failure regardless of whether he knew about the fraud, since the reconciliation failures occurred on his watch.",
        "Termination without completing the investigation exposes the bank to wrongful termination claims; supervisory failure may warrant discipline but the degree depends on investigation findings.",
        -5
      )),
    q("HR", "Word has spread through the operations department that a long-tenured employee was escorted out and their manager is on leave. Rumors are circulating about embezzlement. Some employees are anxious about whether they'll be implicated. Others are angry that someone they trusted apparently committed fraud. What communication approach do you recommend?",
      buildChoices(
        "Issue a factual statement to the operations department acknowledging that an investigation is underway, that appropriate personnel actions have been taken, and that the investigation will determine facts before conclusions. Remind employees of confidentiality expectations and provide EAP resources for anyone experiencing stress. Establish a hotline for anyone with relevant information.",
        "Factual acknowledgment stops speculation without oversharing; confidentiality reminder protects investigation; EAP addresses emotional impact; hotline may surface additional witnesses or victims.",
        10,
        "Say nothing to staff and allow the investigation to proceed confidentially, addressing rumors only if they become disruptive to operations.",
        "Silence allows rumors to flourish and may signal to employees with relevant information that management doesn't want to hear from them; also appears to be hiding something.",
        5,
        "Share the full details of the fraud with the department so employees understand exactly what happened and can assist in identifying any other suspicious activity.",
        "Full disclosure compromises the investigation, could defame individuals not yet proven culpable, and isn't necessary for employees to provide relevant information; oversharing creates legal risk.",
        -5,
        "Emphasize in communications that management is confident no other employees are involved to calm anxiety and maintain morale.",
        "Confidence statement before investigation is complete could prove false; if additional involvement is discovered, management credibility is damaged; assurances should await facts.",
        -5
      )),
    q("HR", "During the investigation, another employee comes forward claiming they raised concerns about the suspected employee's reconciliation practices six months ago to their supervisor, but nothing was done. If true, this suggests a pattern of dismissed warnings. The employee is worried about retaliation. How do you handle this?",
      buildChoices(
        "Thank the employee for coming forward and document their account thoroughly. Assure them of non-retaliation protections and provide a direct HR contact if they experience any adverse treatment. Investigate the prior complaint handling as a separate but related matter. Include the whistleblower protection practices in the overall remediation recommendations.",
        "Documentation preserves the record; non-retaliation assurance is legally and ethically required; investigating prior complaint handling addresses potential systemic issues; systemic recommendations prevent recurrence.",
        10,
        "Add the employee's information to the investigation file and let the investigative counsel determine whether to interview them as part of the overall review.",
        "Including in investigation is appropriate but the employee came forward with concerns about retaliation that need immediate acknowledgment; passive routing to counsel doesn't address their immediate needs.",
        5,
        "Ask the employee to provide their concerns in writing to ensure accurate documentation, and explain that HR will review after the current investigation concludes.",
        "Writing requirement creates a barrier for someone already nervous about retaliation; deferring to after investigation dismisses concerns that may be material to current findings.",
        -5,
        "Interview the supervisor who allegedly dismissed the prior concerns to get their perspective before determining how to proceed with the employee's claims.",
        "Supervisor interview may be needed but interviewing them first, before fully documenting the employee's account, may allow the supervisor to prepare a response or retaliate against the employee.",
        -5
      )),

    // Finance
    q("Finance", "You need to determine the full financial impact for board reporting and regulatory notification. The confirmed losses are $127,000, but the investigation isn't complete. External auditors will expect a loss provision estimate. How do you approach the quantification?",
      buildChoices(
        "Establish a range: confirmed losses of $127,000 at minimum, with an estimated upper bound based on the 12,000 queried accounts and average manipulation amount. Document all assumptions clearly. Update the estimate as investigation proceeds. Reserve based on the midpoint of the range with disclosure of uncertainty.",
        "Range approach acknowledges uncertainty while providing decision-useful information; documented assumptions enable auditor review; midpoint reserve is defensible; disclosure of uncertainty is transparent.",
        10,
        "Book the confirmed $127,000 as the loss provision and adjust as additional losses are identified, avoiding speculation about amounts not yet verified.",
        "Confirmed-only approach seems conservative but likely understates exposure given the 12,000 queried accounts; auditors may challenge whether provision is adequate; GAAP requires estimating probable losses.",
        5,
        "Wait until the investigation is complete before booking any loss provision to ensure the amount is accurate and doesn't require subsequent adjustment.",
        "Waiting for completeness delays financial reporting and may not be possible given board and regulatory timelines; estimated provisions are standard practice when losses are probable.",
        -5,
        "Book a large provision covering the maximum possible exposure to demonstrate conservative accounting and avoid criticism for understatement.",
        "Maximum provision may be overly conservative and misleading if actual losses are much lower; provisions should reflect probable losses, not worst-case scenarios; excess reserves create their own problems.",
        -5
      )),
    q("Finance", "The $127,000 in identified losses came from 340 customer accounts. These customers need to be made whole. The amounts range from $50 to $2,100 per account. What restitution approach do you recommend?",
      buildChoices(
        "Credit all affected accounts promptly, even before investigation is complete, since the customer harm is clear regardless of legal proceedings. Calculate interest for the period funds were missing. Send individual notifications to account holders explaining that an error was identified and corrected. Document all restitution for regulatory reporting.",
        "Prompt restitution is the right customer outcome and demonstrates good faith to regulators; interest makes customers completely whole; individual notification is respectful; documentation supports compliance.",
        10,
        "Wait for investigation completion and legal review before making any restitution payments to ensure the amounts are accurate and the bank's legal position is protected.",
        "Legal caution is understandable but customers shouldn't bear the cost of delays; amounts are confirmed by audit; restitution doesn't require legal proceedings to be complete.",
        5,
        "Credit the accounts but don't proactively notify customers since the amounts are small and notification might create more questions than it answers.",
        "Silent crediting avoids questions but isn't transparent; customers deserve to know their accounts were affected; lack of notification could appear as a cover-up if later discovered.",
        -5,
        "Offer restitution only to customers who complain, since most won't notice the small amounts and proactive restitution increases the bank's costs unnecessarily.",
        "Complaint-only approach is ethically wrong and likely regulatory violation; customers are victims regardless of whether they noticed; 'unnecessary costs' framing is problematic.",
        -5
      )),
    q("Finance", "Your primary regulator needs to be notified of the fraud. You have 30 days under SAR filing requirements, but there's also a question of proactive supervisory notification given the internal control implications. Your compliance officer recommends immediate notification; your General Counsel prefers waiting until the investigation is more complete. How do you decide?",
      buildChoices(
        "Notify the regulator proactively now with known facts, the investigation status, and remediation steps underway. Proactive transparency typically generates better regulatory outcomes than delayed disclosure, even when facts are incomplete. File the SAR within required timeframes with whatever additional information is available.",
        "Proactive notification demonstrates good governance and builds regulatory trust; complete information isn't required for initial notification; SAR filing is a separate compliance requirement; transparency serves the bank better than strategic timing.",
        10,
        "Wait two weeks to allow investigation progress, then notify the regulator with a more complete picture while still meeting the 30-day SAR requirement.",
        "Two-week delay is within SAR timeframes but proactive supervisory notification is different from SAR filing; waiting when you have material information invites questions about why you didn't notify sooner.",
        5,
        "File the SAR within 30 days as required and let that serve as regulatory notification, avoiding separate supervisory contact that might invite additional scrutiny.",
        "SAR-only approach meets minimum requirements but misses the opportunity to demonstrate proactive governance; regulators distinguish between minimum compliance and partnership.",
        -5,
        "Consult with the regulator informally before making any formal notification to gauge their expected response and tailor your communication accordingly.",
        "Informal consultation to gauge response appears to be managing the regulator rather than transparent reporting; regulators generally don't appreciate being pre-socialized on fraud notifications.",
        -5
      )),

    // Loans
    q("Loans", "Review of the suspected employee's activities shows they processed 47 loan payoff adjustments in the past year. These adjustments reduced payoff amounts by small amounts ($100-$400) with the differences diverted to external accounts. Borrowers received the benefit of lower payoffs. How do you address this?",
      buildChoices(
        "Do not attempt to recover the small amounts from borrowers who received the benefit unknowingly - they are not at fault. Write off the losses as part of the fraud. However, review all 47 loans for any other irregularities and correct borrower records to reflect accurate accounting. Document the decision rationale.",
        "Customer-friendly approach is appropriate since borrowers were unwitting beneficiaries; recovery attempts would be costly and create ill will; accurate records still matter for regulatory and accounting purposes; documented rationale supports the decision.",
        10,
        "Contact all 47 borrowers to explain the situation and request repayment of the excess credits they received, offering a payment plan if needed.",
        "Recovery attempt seems fair but borrowers didn't do anything wrong; pursuit of small amounts from innocent customers creates significant reputation risk and likely costs more than recovered.",
        5,
        "Correct the loan records to reflect accurate balances, resulting in small amounts owed by borrowers, and let them discover the change on their next statement.",
        "Silent correction is less disruptive but borrowers will be confused by balance changes; lack of explanation appears deceptive; this approach may generate complaints and regulatory concerns.",
        -5,
        "Leave loan balances as-is since the amounts are immaterial and changing them creates customer confusion and system reconciliation issues.",
        "Leaving incorrect records is poor practice regardless of materiality; loan balances should be accurate; the fraud impact should be recognized through proper loss accounting, not ignored.",
        -5
      )),
    q("Loans", "The investigation reveals the suspected employee also had approval authority for loan modifications up to $250,000. There's no evidence of modification fraud yet, but the access existed. Your Chief Credit Officer wants to re-underwrite all modifications the employee approved. That's 156 loan modifications over 2 years. What do you recommend?",
      buildChoices(
        "Conduct a risk-based review: prioritize modifications with unusual characteristics (borrower complaints, early re-default, significant payment reduction without clear hardship documentation). Full re-underwriting of all 156 may not be necessary if targeted review doesn't reveal issues, but the decision should be based on initial findings, not assumed.",
        "Risk-based approach balances thoroughness with efficiency; unusual characteristics are indicators of potential problems; willingness to expand based on findings demonstrates appropriate caution without assuming worst case.",
        10,
        "Re-underwrite all 156 modifications since the employee has demonstrated willingness to commit fraud and we can't assume modifications were handled properly.",
        "Comprehensive review seems prudent but may be excessive if initial review doesn't reveal concerning patterns; resource-intensive approach should be based on evidence, not assumption.",
        5,
        "Review only modifications that have defaulted since those are the only ones with evident harm; performing modifications are unlikely to have been fraudulent.",
        "Default-only review is too narrow; fraudulent modifications could be performing due to favorable terms rather than borrower capacity; the fraud evidence warrants broader review.",
        -5,
        "Don't review modifications since there's no evidence of modification fraud, and reviewing could create liability if problems are found that should have been caught at approval.",
        "Avoiding review to avoid finding problems is indefensible; duty to investigate when a known fraudster had modification authority; 'creating liability' thinking is backwards.",
        -5
      )),
    q("Loans", "A borrower calls asking why they received a letter about an 'account review' for their loan modification that was approved 18 months ago. They're current on payments and worried something is wrong. The letter was part of the investigation-related review. How should the call be handled?",
      buildChoices(
        "Explain that the bank periodically reviews modifications to ensure quality and accuracy, that their account appears to be in good standing, and that no action is needed from them. Document the call but don't disclose investigation details. If they press, offer a callback from a supervisor.",
        "General explanation is truthful without disclosing investigation; reassurance addresses their concern; documentation maintains records; supervisor callback option addresses persistent questions appropriately.",
        10,
        "Tell the borrower that there was a fraud investigation and their loan was reviewed to make sure it wasn't affected, assuring them everything is fine.",
        "Fraud disclosure is more information than necessary and may alarm the borrower; investigation details shouldn't be shared with customers; this creates unnecessary anxiety.",
        5,
        "Apologize for the letter being sent in error and tell them to disregard it, since the review found no issues with their loan.",
        "Calling it an error is a lie that could create problems if the review had found issues; untrue statements to customers are never appropriate.",
        -5,
        "Transfer them to the investigation team since they're asking about something related to the fraud case.",
        "Investigation team shouldn't be fielding routine customer calls; this escalates a simple question inappropriately and may disclose investigation existence unnecessarily.",
        -5
      )),

    // Accounting
    q("Accounting", "The fraud losses will appear in your financial statements. Your controller asks how to classify and disclose them. The amounts ($127,000 confirmed, potentially more) are below materiality for your institution. However, the fraud and control failures may require disclosure regardless. What accounting treatment do you recommend?",
      buildChoices(
        "Record the confirmed losses as an operating expense and tag them with a dedicated fraud loss code for internal reporting. Prepare draft disclosure language for MD&A and consult auditors on the need for note disclosure given qualitative factors. Ensure the controller documents the rationale in a memo for audit support.",
        "Tagging the expense preserves transparency while providing structured reporting and audit support; memo documentation supports subsequent auditor review.",
        10,
        "Classify the loss as other operating expense while preparing an internal fraud impact memo and limiting public disclosure to summary-level MD&A language until auditors advise otherwise.",
        "This provides reasonable internal controls and staged disclosure while ensuring auditors are engaged before broader public statements.",
        5,
        "Defer recognition until investigation is complete to ensure the amount is accurate, booking the loss in the quarter when final findings are available.",
        "Deferral isn't appropriate when losses are known; GAAP requires recognition when probable and estimable; timing to avoid current quarter impact isn't a valid accounting reason.",
        -5,
        "Net the losses against a reserve or other income line to minimize visibility of the fraud-related expense.",
        "Netting to minimize visibility is inappropriate presentation; fraud losses should be transparent, not buried; this approach invites audit and regulatory criticism.",
        -5
      )),
    q("Accounting", "The external auditors have arrived for their annual fieldwork. You previously notified them of the fraud. They're now asking to expand their testing of internal controls significantly, which will increase audit fees by an estimated $75,000. Your CFO questions whether this expansion is necessary given the fraud has been identified and addressed. How do you respond?",
      buildChoices(
        "Agree to the expanded testing but propose a collaborative plan that targets the highest-risk control areas and includes a management-provided rationale and evidence package to streamline the auditors' work and avoid unnecessary scope creep. Offer to fund targeted, agreed-upon additional procedures rather than opposing all expansion.",
        "Collaborative scope-shaping supports auditor objectives while controlling costs; providing organized evidence reduces time and helps auditors focus on true risk areas.",
        10,
        "Negotiate the scope of expanded testing to focus on the specific control areas affected by the fraud rather than a broad expansion, and offer to provide supplemental internal testing results and documentation to reduce external testing time.",
        "Negotiation that pairs scope narrowing with robust internal evidence can be productive; auditors retain final judgment, but well-prepared management support often reduces external testing burden.",
        5,
        "Accept the expanded testing but make clear to the auditors that management disagrees with the necessity and will document that disagreement.",
        "Documented disagreement about auditor professional judgment is unusual and may signal adversarial relationship; accepting while disagreeing is awkward posture that helps no one.",
        -5,
        "Refuse the expanded testing scope and ask the audit firm to justify each incremental procedure, escalating to the audit committee if they won't reduce scope.",
        "Refusal and escalation creates significant tension with auditors and may result in qualified opinion or auditor withdrawal; audit committee generally supports auditor independence.",
        -5
      )),
    q("Accounting", "During expanded testing, auditors discover that the generic 'operations support' account used by the fraudster had been flagged in a prior-year management letter as a segregation of duties concern. The finding was marked 'management disagrees' and no remediation occurred. How does this affect your response?",
      buildChoices(
        "Acknowledge that the prior finding should have been remediated and that the disagreement was inappropriate in hindsight. Include this in your control remediation plan with a commitment to address all outstanding management letter items. Brief the audit committee on the connection between the dismissed finding and the fraud.",
        "Acknowledging error demonstrates integrity; remediation commitment shows learning; audit committee briefing is appropriate governance given the significance of the prior dismissal.",
        10,
        "Explain that the prior-year finding was a judgment call at the time and that hindsight shouldn't be used to second-guess decisions that seemed reasonable then.",
        "Hindsight argument has some merit but the finding proved prescient; defensive posture about a decision that enabled fraud isn't a good look; accountability is more appropriate.",
        5,
        "Point out that the auditors themselves accepted the management disagreement in the prior year without escalating, suggesting shared responsibility for the control gap.",
        "Shared responsibility argument may have factual basis but blaming auditors for accepting your disagreement is adversarial; you made the decision not to remediate.",
        -5,
        "Minimize the connection between the prior finding and the fraud, noting that the specific fraud methodology wasn't contemplated by the original segregation of duties concern.",
        "Minimization of a clear control failure that enabled fraud damages credibility; even if the specific fraud wasn't anticipated, the generic account access was the mechanism.",
        -5
      )),

    // Deposits
    q("Deposits", "The 340 affected customer accounts are all dormant. Many haven't had activity in 2+ years. Under your state's escheatment laws, some of these accounts may be approaching the dormancy period for unclaimed property reporting. How does the fraud affect your escheatment obligations?",
      buildChoices(
        "The fraud-related activity shouldn't reset the dormancy clock since it wasn't customer-initiated. Review each account's dormancy status based on last legitimate customer activity. However, your outreach to affected customers regarding the fraud and restitution will likely generate customer contact that does reset dormancy legitimately.",
        "Correct legal interpretation that fraudulent activity doesn't constitute customer contact for dormancy purposes; however, restitution notifications will generate responses that legitimately reset accounts; comprehensive approach addresses both considerations.",
        10,
        "Use the fraud investigation and restitution process as an opportunity to do outreach that resets dormancy on all affected accounts, reducing your near-term escheatment obligations.",
        "Using fraud remediation to strategically reset dormancy may work but is ethically questionable; escheatment laws exist to protect customers and shouldn't be circumvented through creative interpretation of 'contact.'",
        5,
        "Treat the fraud-related transactions as account activity that resets the dormancy period, since there was actual monetary movement regardless of the source.",
        "Incorrect interpretation; fraudulent transactions shouldn't benefit the bank by resetting dormancy; this approach could face regulatory scrutiny if challenged.",
        -5,
        "Exclude all affected accounts from the next escheatment reporting cycle while the fraud investigation is pending to avoid complications.",
        "Exclusion from escheatment reporting isn't appropriate without legal basis; investigation status doesn't suspend statutory obligations; this creates compliance risk.",
        -5
      )),
    q("Deposits", "Branch staff are asking how to handle the situation if they recognize the name of the employee on administrative leave from news coverage or word of mouth. They're uncertain whether to discuss with customers who might ask, or with each other. What guidance do you provide?",
      buildChoices(
        "Issue clear guidance: staff should not discuss personnel matters or ongoing investigations with customers or among themselves beyond what's officially communicated. If customers ask, staff should redirect to 'I'm not able to discuss personnel matters.' Explain that speculation or sharing information could compromise the investigation or create legal issues for individuals.",
        "Clear prohibition with rationale helps staff understand expectations; customer redirect script gives them a tool; explanation of why (investigation and legal) makes the request reasonable rather than arbitrary.",
        10,
        "Trust staff to use good judgment about what to share and with whom, providing general guidance to be discreet without over-specifying.",
        "Judgment-based approach sounds reasonable but people define discretion differently; lack of clear guidance leads to inconsistent behavior and potential leaks or speculation.",
        5,
        "Prohibit all discussion with threat of discipline for anyone who discusses the matter, ensuring complete information control.",
        "Threat-based approach may ensure compliance but damages trust and morale; people will discuss despite threats, just more covertly; explanation works better than intimidation.",
        -5,
        "Prepare detailed talking points that staff can share with customers who ask, ensuring consistent and accurate information reaches the public.",
        "Detailed talking points for customer consumption is inappropriate for an ongoing investigation involving personnel matters; staff shouldn't be sharing investigation details with customers.",
        -5
      )),
    q("Deposits", "One of the 340 affected customers is a personal account belonging to a state legislator who has been publicly critical of the banking industry. If they're notified of the fraud and restitution along with other customers, there's risk they could publicize it. Your government affairs team suggests handling their notification separately with a personal call from leadership. How do you proceed?",
      buildChoices(
        "Treat the legislator the same as all other affected customers - same notification, same restitution, same timing. Special treatment for a public figure could appear to be seeking favorable treatment or could backfire if the differential handling becomes known. Document the decision to ensure consistency.",
        "Equal treatment is the right principle; special handling for a potential critic appears to be currying favor or managing them specially; consistency is defensible, favoritism is not.",
        10,
        "Have leadership make a courtesy call to the legislator after the standard notification is sent, not to provide different treatment but to ensure any questions can be answered directly.",
        "Follow-up call after standard notification is a reasonable middle ground but may still appear as special treatment if disclosed; the rationale of 'ensuring questions are answered' applies to all customers.",
        5,
        "Delay the legislator's notification until after other customers have been notified to allow time to prepare for potential public response.",
        "Delayed notification for one customer is differential treatment that could become a story itself if discovered; timing manipulation based on public profile is inappropriate.",
        -5,
        "Notify the legislator first with enhanced explanation and apology to preempt criticism and demonstrate the bank takes the matter seriously.",
        "First notification for a critic appears to be managing them rather than treating all customers fairly; enhanced explanation suggests other customers are getting less; this is exactly the wrong approach.",
        -5
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
        "Use the afternoon window; arrange Fedwire for urgent payrolls so critical items clear while you validate the corrected file.",
        "Afternoon window provides validation time; Fedwire backup addresses urgent items; root cause knowledge prevents repeat failure.",
        10,
        "Push the corrected file into the 9:00 AM window after basic checks, to reduce customer impact quickly.",
        "Speed addresses customer urgency but submitting without root cause understanding risks another rejection and greater reputational damage.",
        5,
        "Submit only low-risk transactions now and hold higher-value ones for later processing to limit exposure.",
        "Splitting seems efficient but creates reconciliation complexity and the validation that cleared low-risk items may not have caught the original error.",
        -5,
        "Ask the Fed for an extension on the 9:00 AM deadline to gain extra validation time.",
        "Extension requests are rarely granted for operational errors; the ask may damage the relationship without providing benefit.",
        -5
      )),
    q("CEO/SVPs", "A board member calls after seeing social media complaints about 'bounced paychecks.' They want to know why they're learning about this from Twitter instead of management. What approach is most appropriate?",
      buildChoices(
        "Acknowledge the gap, give a short briefing, explain the planned formal notification, and set a regular update cadence.",
        "Acknowledgment accepts responsibility; briefing addresses their immediate need; explanation provides context; schedule prevents recurrence.",
        10,
        "Explain that the incident team focused on resolution and that board messaging was queued after customer notification.",
        "Prioritization explanation is accurate but may sound defensive; acknowledging the gap while explaining is more appropriate.",
        5,
        "Point out that operational matters are management responsibilities and caution that immediate board involvement could slow response.",
        "Governance boundary argument may be technically correct but dismisses a legitimate concern about communication during a visible incident.",
        -5,
        "Call an emergency board meeting so all directors hear the update at once before more external developments occur.",
        "Emergency call may seem responsive but diverts leadership attention from resolution; structured update is more appropriate than real-time board involvement.",
        -5
      )),
    q("CEO/SVPs", "Your largest payroll client�a hospital system with 2,400 employees�calls the CEO directly. Their employees didn't receive direct deposits and the hospital's HR director is demanding to know when staff will be paid. What approach is most appropriate?",
      buildChoices(
        "Commit to same‑day resolution using Fedwire for their payroll, assign a single relationship contact, and confirm completion directly with their finance lead.",
        "Specific commitment with backup method addresses their urgent need; dedicated contact shows relationship priority; CFO confirmation closes the loop appropriately.",
        10,
        "Tell them the file will be corrected and resubmitted in the afternoon window and that you will expedite their processing.",
        "Afternoon resubmission may resolve the issue but doesn't guarantee same-day availability depending on their employees' banks; manual backup is more certain.",
        5,
        "Explain that all affected clients are being handled the same and you cannot prioritize some over others.",
        "Equal treatment sounds principled but relationship size and employee impact warrant differentiated response; rigid equality may lose a key client.",
        -5,
        "Hand the caller to treasury operations for technical timeline details.",
        "Technical transfer may seem efficient but CEO-to-CEO escalation warrants CEO-level response; transfer appears to diminish the relationship.",
        -5
      )),

    // IT/Security
    q("IT/Security", "Initial analysis shows the file corruption occurred after the ACH origination system handed off to the file transfer platform. The transfer platform vendor claims their logs show a clean handoff. Your logs are ambiguous. What approach is most appropriate?",
      buildChoices(
        "Preserve forensic snapshots from both systems now, run a joint timestamped log review with the vendor, and document the chain of custody.",
        "Forensic preservation protects evidence; joint analysis addresses the ambiguity; timestamp correlation identifies the actual failure point; documentation supports any needed escalation.",
        10,
        "Focus internal investigation on your origination system while noting the vendor's claim for follow-up.",
        "Internal focus is practical but accepting vendor claims without verification may miss the actual cause and leave you exposed to repeat failures.",
        5,
        "Escalate to the vendor's executives and demand proof the transfer platform was not responsible before continuing any joint work.",
        "Executive escalation may be needed eventually but adversarial posture before completing joint analysis damages the working relationship.",
        -5,
        "Add more validation checks between origination and transfer systems immediately while you continue the investigation.",
        "Preventive controls are appropriate but implementing changes before understanding the cause may not address the actual vulnerability.",
        -5
      )),
    q("IT/Security", "The corrected file is ready for the afternoon window. Your standard change management process requires 24-hour review for production file changes. The business is pressing for immediate submission. What approach is most appropriate?",
      buildChoices(
        "Use emergency change procedures with documented justification, require IT and business sign-off, enable extra monitoring for the submission, and schedule a post‑incident review.",
        "Emergency procedures exist for this situation; dual sign-off maintains accountability; enhanced monitoring catches issues quickly; post-incident review addresses process improvement.",
        10,
        "Adhere to the standard 24‑hour review because it exists to prevent incidents like this, even if it delays submission.",
        "Process adherence is generally correct but emergency procedures exist for genuine emergencies; rigid adherence causes unnecessary customer harm.",
        5,
        "Let business approve alone to avoid IT delays since the customer impact is high.",
        "Business-only approval bypasses IT controls that exist for good reason; emergency procedures should involve both functions.",
        -5,
        "Have a developer manually inspect and submit the file outside the automated pipeline.",
        "Manual bypass avoids the suspected system but introduces human error risk and creates an undocumented process that can't be repeated reliably.",
        -5
      )),
    q("IT/Security", "During the incident, you discover the ACH origination system has been running on an unsupported operating system version for 8 months due to a delayed upgrade project. This wasn't the root cause but could complicate regulatory discussions. What approach is most appropriate?",
      buildChoices(
        "Log the finding in the incident record, evaluate if it contributed, speed up the upgrade timeline, and prepare regulator-facing talking points.",
        "Transparent documentation maintains integrity; contribution assessment is appropriate due diligence; accelerated upgrade addresses the gap; preparation enables consistent response.",
        10,
        "Note the OS issue internally but keep the incident record focused on the established root cause.",
        "Root cause focus is appropriate but omitting a relevant system condition from the record could appear as concealment if discovered later.",
        5,
        "Stop remediation work and prioritize the OS upgrade immediately to close the gap before regulators ask.",
        "Upgrade urgency is understandable but diverting resources from active incident remediation creates customer harm; sequencing should address both.",
        -5,
        "Delay documenting the OS status until upgrades are complete so the record shows it was addressed.",
        "Documentation timing manipulation could be viewed as concealment; contemporaneous documentation of what was known when is more defensible.",
        -5
      )),

    // HR
    q("HR", "Operations staff have been working since 5:00 AM when the rejection was discovered. It's now 2:00 PM and the afternoon file has been submitted. The team wants to know if they can go home, but reconciliation work remains and tomorrow's file needs preparation. What approach is most appropriate?",
      buildChoices(
        "Let non-critical staff go home but keep a core reconciliation team, promise relief by a set time, and call in fresh staff for tomorrow's work.",
        "Tiered release addresses fatigue while maintaining capability; specific relief commitment provides certainty; fresh staff for new work prevents errors.",
        10,
        "Keep the whole team until reconciliation finishes since they already know the context.",
        "Continuity has value but fatigued staff make errors; structured handoff with documentation is preferable to exhausted experts.",
        5,
        "Require everyone to stay until full resolution but provide meals and comp time later.",
        "Meals and comp time don't address fatigue-related error risk; staggered release is more appropriate than indefinite retention.",
        -5,
        "Allow individuals to decide if they can keep working based on how they feel.",
        "Self-assessment sounds respectful but fatigued people often misjudge their own impairment; management should make staffing decisions.",
        -5
      )),
    q("HR", "A call center supervisor reports that two representatives broke down crying during difficult customer calls. Call volume remains elevated and the representatives want to continue working. What approach is most appropriate?",
      buildChoices(
        "Move the affected reps to less stressful support work, ensure manager check-ins, promote EAP resources, and watch team stress metrics.",
        "Task rotation provides relief while keeping staff productive; check-ins show care; EAP visibility addresses broader need; monitoring prevents cascade.",
        10,
        "Let the reps choose whether to keep taking calls since they know their own capacity.",
        "Autonomy sounds respectful but staff in distress may not make optimal decisions; supportive reassignment protects them and customers.",
        5,
        "Send both reps home paid and bring in backups to cover calling volume.",
        "Home release may be appropriate but doesn't address the broader team stress or provide alternatives; rotation is more proportionate.",
        -5,
        "Thank them, suggest a short break, and let them return to calls afterwards.",
        "Short breaks don't address the underlying stress; returning to the same triggering environment without role change is unlikely to help.",
        -5
      )),
    q("HR", "An operations employee posts on LinkedIn that the bank 'had a major ACH meltdown due to management cutting corners on system upgrades.' The post is factually inaccurate but gaining traction. What approach is most appropriate?",
      buildChoices(
        "Manager addresses the employee privately, issue a general social media reminder to staff, and check whether the post reflects real concerns.",
        "Private conversation addresses the specific issue; general reminder prevents escalation; concern assessment may surface valid feedback.",
        10,
        "Ask the employee to remove the post and document a policy violation for later HR action.",
        "Removal request is appropriate but documenting for discipline during an active incident may chill future issue reporting.",
        5,
        "Have communications publish a public correction to counter the false claim.",
        "Public response engages with an employee dispute publicly, amplifying the story and creating an adversarial dynamic.",
        -5,
        "Do nothing and rely on free speech protections outside work.",
        "Ignoring allows misinformation to spread; employees have speech rights but not to make false public statements about their employer.",
        -5
      )),

    // Finance
    q("Finance", "The Fed settlement for the rejected file didn't occur, but your correspondent bank funded customer accounts based on expected settlement. You now have a $12.3M position mismatch that will correct with the afternoon file, but your correspondent is calling about the daylight overdraft. What approach is most appropriate?",
      buildChoices(
        "Tell the correspondent what's happening, give expected resolution timing, offer to pay related overdraft charges, log the arrangement, and escalate if it extends.",
        "Transparent explanation maintains relationship; charge coverage addresses their concern; documentation supports reconciliation; escalation protocol addresses extended exposure.",
        10,
        "Move $12.3M from your Fed account to them now to clear the overnight position and reconcile later.",
        "Immediate transfer clears their position but may create your own Fed account issues depending on balances; explanation with commitment is cleaner.",
        5,
        "Remind them they funded based on their own processes; the afternoon settlement will correct the position.",
        "Technically accurate but dismissive of a legitimate concern from a key partner; relationship maintenance warrants more engagement.",
        -5,
        "Pass the call to the treasurer to handle the relationship details.",
        "Treasury involvement is appropriate but the escalation framing suggests avoidance; incident management includes managing financial impacts.",
        -5
      )),
    q("Finance", "Commercial clients are asking for fee credits due to the delayed payrolls. Some are demanding compensation for their own costs�employee complaints, HR overtime, manual check processing. Total credit requests are approaching $180,000. What approach is most appropriate?",
      buildChoices(
        "Create a tiered credit approach: automatic credits for direct bank fees, documented review for consequential costs, clear criteria, and approval limits.",
        "Framework provides consistency; tiered approach addresses different claim types appropriately; criteria and authority limits maintain control.",
        10,
        "Credit direct bank fees automatically but require legal review for consequential damages.",
        "Automatic fee credits are appropriate but legal framing for all other costs may seem adversarial; reasonable cost review is more customer-friendly.",
        5,
        "Offer standardized volume-based credits without documentation to close claims fast.",
        "Speed has value but undocumented credits may over-compensate some and under-compensate others; reasonable documentation supports fairness.",
        -5,
        "Deny consequential damages entirely citing contractual liability limits.",
        "Legal position may be defensible but rigid enforcement during a service failure damages relationships; goodwill has value.",
        -5
      )),
    q("Finance", "The CFO asks for a financial impact summary for the board. Direct costs are clear but reputational impact and potential client attrition are uncertain. The board meeting is in 4 hours. What approach is most appropriate?",
      buildChoices(
        "Give direct costs now, provide indirect impact ranges with assumptions, name metrics to track, and promise updated figures as data arrives.",
        "Quantified directs provide concrete information; ranged indirects acknowledge uncertainty appropriately; metrics enable tracking; update commitment maintains engagement.",
        10,
        "Report only quantifiable direct costs and say indirects will be assessed over coming weeks.",
        "Direct-only focus is conservative but board may want some indication of potential magnitude even if uncertain; ranges with caveats are appropriate.",
        5,
        "Postpone the summary until more accurate data is available to avoid misleading the board.",
        "Delay leaves board without financial context for a material incident; presenting with appropriate caveats is preferable to silence.",
        -5,
        "Give a worst-case projection including attrition and reputational losses so the board understands full exposure.",
        "Comprehensive projection sounds thorough but speculative worst-case numbers may alarm unnecessarily; ranges with assumptions are more appropriate.",
        -5
      )),

    // Loans
    q("Loans", "Several auto loan payments that were in the failed file have now missed their due dates. The loan system has automatically assessed late fees and sent notices to borrowers who thought they had paid. What approach is most appropriate?",
      buildChoices(
        "Reverse late fees for affected accounts, send corrected notices explaining the bank error, suppress negative reporting, and document remediation for compliance.",
        "Immediate reversal addresses customer harm; corrected notices explain the situation; credit reporting suppression prevents lasting damage; documentation supports audit trail.",
        10,
        "Reverse fees if customers ask and fast-track complaints for affected borrowers.",
        "Request-based reversal helps those who call but misses borrowers who don't realize the bank erred; proactive reversal is more appropriate.",
        5,
        "Wait for the corrected file to settle and then remediate based on the final status.",
        "Waiting provides certainty but leaves late fees and notices in place longer than necessary; parallel remediation is possible.",
        -5,
        "Send a general bulletin about the ACH issue without naming affected accounts.",
        "General communication is vague; affected borrowers deserve specific notification that their account was impacted and remediated.",
        -5
      )),
    q("Loans", "A mortgage payment in the failed file was for a borrower on a loss mitigation plan with strict payment timing requirements. Missing the payment deadline could technically default them out of the program. What approach is most appropriate?",
      buildChoices(
        "Record that the bank's error caused the missed payment, keep the borrower in the program, post payment for program purposes, and note the exception.",
        "Bank-error documentation establishes cause; maintained status protects borrower; backdated posting for program purposes is appropriate given circumstances; exception notation maintains records.",
        10,
        "Tell the borrower and ask them to make a replacement payment today by an alternate method.",
        "Borrower contact is appropriate but asking them to pay again shifts the burden for the bank's error; internal remediation is more appropriate.",
        5,
        "Process when the corrected file settles and then review eligibility.",
        "Standard processing may technically default the borrower for the bank's error; proactive protection is warranted.",
        -5,
        "Flag the account for supervisor review after settlement before taking program action.",
        "Supervisor review is appropriate but waiting until after settlement may be too late to prevent program default; immediate action is needed.",
        -5
      )),
    q("Loans", "The failed file included escrow disbursements for property tax payments with a county deadline of today. If taxes aren't received by the county by 5:00 PM, borrowers will incur penalties. What approach is most appropriate?",
      buildChoices(
        "Find all escrow items due today, wire the tax payments now, absorb wire fees, and reconcile against the corrected ACH when it posts.",
        "Wire transfer meets the deadline; bank absorbs costs appropriately for its error; reconciliation maintains accounting integrity.",
        10,
        "Call county tax offices to explain the situation and ask for extensions.",
        "Extension requests may help but counties may not accommodate; wire transfer backup ensures deadlines are met regardless.",
        5,
        "Include the tax payments in the afternoon file and inform borrowers about any penalties and remediation.",
        "Afternoon file may not settle at county in time for deadline; penalties create customer harm that proactive wire prevents.",
        -5,
        "Ask affected borrowers to pay taxes themselves today and promise bank reimbursement later.",
        "Borrower payment shifts the burden for bank's error and requires them to have funds available; bank should solve its own problem.",
        -5
      )),

    // Accounting
    q("Accounting", "The failed and corrected files will create reconciliation complexity�some transactions will appear twice, some once, some with different effective dates. The suspense account is already growing. What approach is most appropriate?",
      buildChoices(
        "Set up a dedicated reconciliation workspace, define matching rules for incident cases, assign owners, and set a clearance target with daily updates.",
        "Dedicated workspace isolates complexity; matching rules ensure consistency; ownership creates accountability; target date with tracking ensures completion.",
        10,
        "Use normal reconciliation for routine items while escalating exceptions into an incident workspace with exception logs for auditors.",
        "Selective application preserves proven controls for routine items while ensuring incident anomalies receive prioritized, documented handling; this reduces risk of missed duplicates.",
        5,
        "Hold all incident transactions in suspense until everything settles, then reconcile in one pass.",
        "Single-pass approach seems efficient but extended suspense creates audit concerns and delays identifying specific issues.",
        -5,
        "Assign the work to whoever is available and let them handle it at their own pace.",
        "Unstructured assignment may result in inconsistent treatment and extended timelines; structured approach is necessary for this volume.",
        -5
      )),
    q("Accounting", "External auditors are currently on-site for quarterly procedures. They've heard about the incident and are asking for documentation. The incident is still being resolved. What approach is most appropriate?",
      buildChoices(
        "Give auditors current documentation: incident timeline, remediation actions taken, financial impacts so far, and say updates will follow as the incident evolves.",
        "Current documentation demonstrates transparency; timeline and actions show control; ongoing status with update commitment sets expectations.",
        10,
        "Provide staged documentation now and promise scheduled supplements; ask auditors what they need most right away.",
        "Staged delivery meets auditors' timeliness needs while recognizing the investigation's evolving nature; prioritizing requested items reduces unnecessary work.",
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
        "Initiate reversals for duplicate credits with a controlled workflow: notify affected customers promptly, stagger reversals to limit operational risk, and include a remediation helpline for customers who dispute reversals. Coordinate with compliance on notice timing and regulatory disclosures.",
        "Immediate correction is important but coupling reversals with customer communication and staged processing reduces customer harm and operational mistakes.",
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
        "Give representatives clear retention talking points that acknowledge the error, outline remediation steps, allow modest retention offers within policy, and forward media threats to communications for monitoring.",
        "Talking points enable consistent response; authorized offers address retention; media threat escalation enables preparation without over-reacting.",
        10,
        "Escalate calls that meet difficulty criteria to supervisors so complex or high-risk conversations get experienced handling without premature promises.",
        "Supervisor escalation is appropriate for difficult calls but media-threat criteria may route too many calls and not address the underlying frustration.",
        5,
        "Log customers who threaten media contact and schedule callbacks by relationship managers to address concerns and reduce escalation risk.",
        "Callback list may be appropriate but treating media threats as the escalation trigger may miss equally upset customers who don't threaten.",
        -5,
        "Coach representatives to treat customers respectfully and follow complaint procedures, rather than dismissing those who threaten media contact as manipulators.",
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
    [/Acknowledge service impact, what�s known, and provide update cadence/i, 'Provide a factual update and outline near-term next steps'],
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
    [/Disable logging/i, 'Reduce non-essential telemetry temporarily to manage noise'],
    [/Disable dual control/i, 'Relax dual checks to expedite work'],
    [/Share admin (access|credentials) with (vendor )?widely/i, 'Broaden administrative access to speed changes'],
    [/Reboot everything/i, 'Perform sweeping resets quickly to restore service'],
    [/Large config changes ad-hoc/i, 'Implement broad configuration changes quickly to accelerate recovery'],
    [/Silence until/i, 'Minimize messaging until details are clearer'],
    [/Promise instant( resolutions| fixes)?/i, 'Offer firm commitments on immediate resolution'],
    [/Share internal (dashboards|tools|maps)/i, 'Increase transparency by sharing high-level internal views'],
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
    // mid-score: mild neutralization only
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
  // Use the full pool of scenarios so `Generate` can pick from all available scenarios.
  // Previously this preferred scenarios with exactly 21 questions which limited
  // selection to only those entries (causing repeat cycling between a small set).
  const pool = source;
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
