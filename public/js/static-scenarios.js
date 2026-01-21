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
    q("CEO/SVPs", "It's 7:00 AM and you have conflicting reports: IT says containment will take 4+ hours, your CISO wants to disconnect everything immediately which would strand $47M in ACH transactions, and your CFO is concerned about liquidity impact if word spreads. The board chair is calling. What's your first action?",
      buildChoices(
        "Activate formal Incident Command with yourself or a designated executive as commander, establish 90-minute briefing cycles, authorize CISO to proceed with network segmentation of infected zones while preserving ACH processing paths if forensically safe, and brief the board chair with known facts and your governance structure.",
        "Incident Command creates clear authority and rhythm; segmentation balances containment with business continuity; briefing board chair early maintains governance trust and avoids surprising them with media reports.",
        10,
        "Convene an emergency executive meeting to align on facts before taking containment action, asking IT and Security to pause major changes until leadership is synchronized.",
        "Executive alignment has value but pausing containment during active encryption spread allows the attack to worsen; the window for effective containment is measured in minutes, not hours.",
        5,
        "Direct IT to complete full forensic assessment before any containment to understand exactly what we're dealing with, ensuring we don't make uninformed decisions.",
        "Forensic thoroughness seems prudent but during active ransomware spread, every minute of delay means more encrypted systems; containment should proceed in parallel with investigation.",
        -5,
        "Immediately authorize the full network disconnect to stop the spread, then convene leadership to determine next steps once the bleeding has stopped.",
        "Full disconnect stops the attack but also halts all banking operations including the ACH queue; this nuclear option may cause more harm than targeted segmentation and prevents evidence collection.",
        -5
      )),
    q("CEO/SVPs", "By noon, restoration estimates are 5-7 days. The ransom group has a reputation for providing working decryption keys. Your cyber insurance covers ransom payments. The FBI advises against paying but won't prohibit it. Board members are split. How do you frame the ransom decision?",
      buildChoices(
        "Present the board a decision framework covering: legal constraints including OFAC sanctions screening, insurance coordination requirements, law enforcement position, restoration timeline confidence levels, and customer harm metrics. Recommend focusing resources on independent restoration while keeping payment as a documented last resort if specific harm thresholds are crossed.",
        "Framework approach gives board the information needed for governance while maintaining focus on restoration; documented thresholds prevent emotional decision-making and create defensible record.",
        10,
        "Recommend the board pre-authorize payment contingent on restoration failure at the 72-hour mark, so the decision isn't rushed at deadline.",
        "Pre-authorization provides clarity but may signal internally that payment is the plan, potentially reducing restoration urgency; also doesn't account for changing circumstances over 72 hours.",
        5,
        "Recommend categorically refusing payment to maintain ethical clarity and demonstrate the bank won't negotiate with criminals, focusing all resources on restoration.",
        "Ethical stance is defensible but eliminates optionality; if restoration fails and customer harm is severe, the rigid position may be harder to justify than a framework that considered all factors.",
        -5,
        "Delegate the ransom decision to the CISO and General Counsel since they have the technical and legal expertise, keeping the board informed of their decision.",
        "Technical and legal input is essential but ransom payment is a governance-level decision with significant reputational and ethical implications; board should decide, not be informed after the fact.",
        -5
      )),
    q("CEO/SVPs", "A reporter from American Banker calls saying they've confirmed your systems are down and are running a story in two hours. They're asking whether this is a ransomware attack and whether customer data was stolen. Forensics hasn't completed data exfiltration analysis yet. How do you respond?",
      buildChoices(
        "Acknowledge the service disruption affecting specific channels (online banking, ACH processing), confirm you're investigating a cybersecurity incident with law enforcement engaged, state that customer data protection is a priority and you'll provide updates as investigation progresses. Do not confirm or deny ransomware or exfiltration until facts are established.",
        "Confirmation of disruption matches observable reality; 'cybersecurity incident' is accurate without specifying ransomware; customer data priority statement is appropriate; refusing to speculate on unconfirmed facts protects credibility.",
        10,
        "Decline to comment on an active investigation and direct them to a written statement your communications team is preparing.",
        "Declining comment is legally safe but a story will run regardless; 'no comment' often reads as evasive and cedes narrative control to speculation and unnamed sources.",
        5,
        "Proactively confirm it's a ransomware attack to demonstrate transparency and get ahead of the story, emphasizing that you're the victim of a criminal act.",
        "Transparency has value but confirming ransomware before law enforcement coordination may compromise investigation; 'victim' framing may not resonate if customers feel they're the real victims.",
        -5,
        "Deny that any attack occurred and attribute the disruption to planned maintenance that experienced complications, buying time to resolve the situation.",
        "False statements will be exposed quickly and destroy credibility; journalists have likely already confirmed with other sources; lying to media creates larger crisis than the attack itself.",
        -5
      )),

    // IT/Security
    q("IT/Security", "Active encryption is still spreading through network shares. You've identified the compromised service accounts but disabling them will break several production integrations. Your endpoint detection shows 340 infected endpoints and counting. What's your containment priority?",
      buildChoices(
        "Immediately disable the compromised service accounts and segment infected network zones from uninfected zones, accepting that some production integrations will break. Assign a team to document broken integrations for rapid remediation once containment is achieved. Preserve memory state on a sample of infected endpoints before any remediation for forensic analysis.",
        "Stopping lateral movement is critical even at cost of breaking integrations; broken integrations are recoverable, encrypted systems may not be. Memory preservation maintains investigation options. Documentation enables systematic remediation.",
        10,
        "Implement enhanced monitoring on the compromised service accounts and begin segmenting the most critical systems while working to understand exactly how the ransomware is propagating.",
        "Monitoring provides visibility but doesn't stop spread; 'understanding propagation' while it's actively spreading is studying a fire while your house burns. Critical system protection is good but partial.",
        5,
        "Focus containment on protecting the backup infrastructure and any unencrypted systems, accepting that already-infected systems are lost but preventing further spread to clean resources.",
        "Protecting backups is essential but allowing continued spread of infected systems increases recovery scope and may reach the 'protected' systems before containment is complete.",
        -5,
        "Begin immediate restoration from backups on critical systems to get services running, while containment efforts continue in parallel on less critical infrastructure.",
        "Restoration during active spread risks re-infection of restored systems; containment must precede restoration or you're filling a bucket with a hole in it.",
        -5
      )),
    q("IT/Security", "Forensics reports that your backup infrastructure appears clean, but they've found evidence the attackers had access to your environment for 3 weeks before deploying ransomware. Your most recent clean backup is 18 hours old but any backup from the past 3 weeks could contain dormant malware or compromised credentials. What's your restoration strategy?",
      buildChoices(
        "Create an isolated restoration environment completely segmented from production. Restore the 18-hour backup to this environment and conduct validation including malware scanning, credential analysis, and configuration review before connecting to production. Build a parallel workstream to identify and reset any credentials that existed during the 3-week compromise window.",
        "Isolated restoration prevents reinfection; 18-hour backup minimizes data loss; validation catches dormant threats; credential reset addresses persistence mechanisms attackers may have established during their 3-week presence.",
        10,
        "Restore critical systems from the 18-hour backup directly to production with enhanced monitoring to catch any malicious activity, prioritizing service restoration speed.",
        "Speed prioritization is understandable given customer impact but restoration without isolation risks immediate reinfection; enhanced monitoring didn't catch the initial 3-week presence.",
        5,
        "Go back to a backup from before the 3-week compromise window to ensure a completely clean restore point, accepting the significant data loss.",
        "Clean restore point is appealing but 3+ weeks of data loss may be unacceptable for banking operations including transactions, loan modifications, and account changes that can't be recreated.",
        -5,
        "Focus on rebuilding critical systems from scratch rather than restoring from potentially compromised backups, ensuring a definitively clean environment.",
        "Rebuild eliminates backup trust concerns but takes significantly longer than restoration; customer impact duration would extend dramatically while competitors' ATMs continue working.",
        -5
      )),
    q("IT/Security", "Online banking restoration is technically ready but your security team hasn't completed penetration testing on the restored environment. Customer complaints are mounting - 47,000 customers have called the contact center today. Business leaders are pushing hard to restore service. What's your recommendation?",
      buildChoices(
        "Implement a staged restoration: bring online banking up in read-only mode first (balance inquiries, statement access) while completing security validation for transactional functions. Communicate the phased approach to customers with specific timelines. Implement enhanced fraud monitoring and reduced transaction limits when full service returns.",
        "Staged approach restores customer visibility quickly while limiting risk exposure; read-only functions have lower attack surface; fraud monitoring and limits provide compensating controls; transparency manages expectations.",
        10,
        "Restore full online banking functionality given technical readiness, with security team monitoring closely and prepared to shut down if anomalies appear.",
        "Rapid restoration addresses customer pain but 'monitor and react' approach means customers could be harmed before shutdown; security validation exists for a reason.",
        5,
        "Maintain systems offline until security provides unconditional sign-off, regardless of customer impact, since bringing up an insecure system could make things worse.",
        "Security-first principle is sound but 'unconditional sign-off' may never come given time pressures; extended outage has its own risks including deposit flight and regulatory concern.",
        -5,
        "Restore online banking with a disclaimer that customers use services at their own risk during the recovery period, protecting the bank legally while restoring service.",
        "Risk disclaimer may provide legal cover but signals lack of confidence that will accelerate deposit flight; customers expect banks to ensure security, not disclaim it.",
        -5
      )),

    // HR
    q("HR", "It's Day 2 and your IT security team has been working 20+ hour shifts. The CISO reports that two senior engineers are showing signs of severe fatigue - making configuration errors and forgetting steps in procedures. However, these engineers have critical institutional knowledge about the encrypted systems. Pulling them off could slow recovery significantly. What do you recommend?",
      buildChoices(
        "Implement mandatory 8-hour rest rotation for all incident responders immediately, including the senior engineers. Have them document critical knowledge and brief backup personnel before resting. Accept that recovery pace will slow but recognize that fatigued engineers make errors that could extend recovery or cause new incidents.",
        "Mandatory rest protects against cascading failures from fatigue errors; knowledge documentation creates resilience; slower pace is better than errors that cause setbacks or additional security incidents.",
        10,
        "Give the fatigued engineers a 4-hour break and energy support (caffeine, food), then reassess. They can rest fully once we're past the current critical phase.",
        "Short breaks help temporarily but 4 hours doesn't address accumulated sleep debt; 'current critical phase' often extends indefinitely; this delays rather than solves the problem.",
        5,
        "Trust the engineers to know their own limits and let them decide when they need to rest. They're professionals who understand the stakes.",
        "Professional autonomy is respectful but fatigued people consistently overestimate their capabilities; HR has a duty of care that overrides individual judgment in safety-critical situations.",
        -5,
        "Bring in outside contractors immediately to take over from the fatigued engineers so critical work continues without pause.",
        "Contractor support is valuable but immediate handoff of critical systems to people without institutional knowledge or security clearance creates its own risks; integration is better than replacement.",
        -5
      )),
    q("HR", "Branch managers report that several employees are posting on social media about the outage, including one who wrote 'Management has no idea how bad this is - our systems are totally destroyed.' The posts are gaining attention. How should this be handled?",
      buildChoices(
        "Have the employees' managers speak with them privately about social media policy and request post removal. Simultaneously issue a company-wide reminder about social media guidelines during incidents. Separately, assess whether the 'management has no idea' sentiment reflects a real internal communication gap that needs addressing.",
        "Private conversation addresses the immediate issue without public escalation; company-wide reminder prevents similar posts; examining the underlying sentiment shows responsiveness to employee concerns and may reveal real problems.",
        10,
        "Issue a formal warning to the posting employees and require immediate post removal as a condition of continued employment, making clear that unauthorized public statements during crises are a serious policy violation.",
        "Formal discipline may be warranted but escalating immediately during a crisis creates additional stress and may become part of the story if the employee talks to media about being disciplined.",
        5,
        "Have corporate communications post a public response correcting inaccuracies in the employee's characterization of the situation.",
        "Public response amplifies the story and puts the bank in a public dispute with its own employee; even if you 'win' the factual argument, the spectacle is damaging.",
        -5,
        "Ignore the posts since engaging draws more attention and the employee has free speech rights outside of work.",
        "Ignoring allows misinformation to spread unchallenged; while employees have speech rights, confidential information about ongoing incidents has legitimate protection; silence isn't the only alternative to public confrontation.",
        -5
      )),
    q("HR", "Several employees have approached HR confidentially expressing fear that they'll be blamed or terminated for the security breach, even though there's no indication of employee fault. One employee who clicked a phishing link (not confirmed as the entry point) is particularly distressed. How do you address this?",
      buildChoices(
        "Communicate to all staff that the focus is on recovery, not blame, and that the investigation will determine root cause factually. Speak privately with the distressed employee to provide support and clarify that clicking a sophisticated phishing link - if that's even the vector - doesn't constitute a fireable offense under your policies. Connect them with EAP if needed.",
        "Blame-free messaging encourages transparency and information sharing that helps investigation; individual support addresses specific distress; EAP connection provides professional resources; policy clarification reduces fear-driven hiding of information.",
        10,
        "Wait for the investigation to conclude before making any statements about blame or consequences, to avoid committing to positions that might need to change.",
        "Investigation-first seems prudent but leaves employees in anxiety; fear of blame causes people to hide information that could help the investigation and recovery.",
        5,
        "Identify all employees who may have contributed to the breach and have them meet with their managers to review what happened and ensure it doesn't recur.",
        "This approach feels like blame-finding even if framed as 'review'; employees will perceive it as discipline and may become defensive or withhold information.",
        -5,
        "Assure all employees that there will be no consequences for anyone since the real culprits are the criminal attackers, not bank staff.",
        "Blanket amnesty may be premature if investigation reveals genuine policy violations or negligence; also doesn't address the immediate emotional distress of specific individuals.",
        -5
      )),

    // Finance
    q("Finance", "It's Day 3 and customers are increasingly withdrawing funds from your operational branches and ATMs - daily outflows have tripled versus normal. Media speculation about the bank's viability is growing. Your liquidity coverage ratio is still well above regulatory minimums but trending down. What's your recommendation?",
      buildChoices(
        "Activate contingency funding arrangements to pre-position additional liquidity before it's needed. Prepare but don't yet execute a public statement about financial strength. Coordinate with regulators proactively to demonstrate you're monitoring the situation. Continue tracking outflows hourly with defined triggers for escalating response.",
        "Pre-positioning liquidity provides cushion without signaling panic; prepared communications enable rapid response if needed; regulatory coordination builds confidence; defined triggers prevent both under-reaction and over-reaction.",
        10,
        "Issue an immediate public statement about strong capital and liquidity positions to reassure customers and stem outflows before they worsen.",
        "Reassurance may help but unprompted statements about liquidity can backfire by confirming customers should be worried; statement may be better held in reserve if outflows continue.",
        5,
        "Maintain normal liquidity posture since ratios remain healthy and reacting visibly could signal weakness and accelerate the very outflows you're trying to prevent.",
        "Avoiding panic signals has logic but failing to prepare for deterioration could leave you caught flat-footed; internal preparation doesn't require visible external action.",
        -5,
        "Immediately draw down all available credit facilities to maximize cash position, ensuring the bank can meet any level of withdrawal demand.",
        "Maximizing cash seems prudent but dramatic draws signal distress to counterparties and may become news themselves; contingency activation should be proportionate to actual conditions.",
        -5
      )),
    q("Finance", "The $47 million in ACH transactions that were queued when systems went down include payroll files for 340 businesses representing 12,000 employees expecting direct deposits tomorrow. The ACH system won't be restored in time. What approach do you recommend?",
      buildChoices(
        "Immediately contact the 340 businesses to explain the situation and timeline. Offer to issue cashier's checks or wire transfers for critical payroll needs at no cost. Coordinate with the Federal Reserve and NACHA on emergency ACH procedures. Prepare for increased branch traffic from employees seeking cash. Document all accommodations for later reconciliation.",
        "Proactive business contact manages expectations before employees call their employers; alternative payment methods address critical need; Fed/NACHA coordination may unlock options; branch preparation handles downstream impact; documentation enables accurate reconciliation.",
        10,
        "Focus on restoring ACH as quickly as possible and communicate to affected businesses that their files will process as soon as systems are operational, likely within 24-48 hours.",
        "Restoration focus is correct but 24-48 hours means employees miss payday; 'as soon as possible' doesn't give businesses information they need to make alternative arrangements.",
        5,
        "Advise affected businesses to make alternative payroll arrangements through their backup providers and offer to reimburse any fees they incur.",
        "Reimbursement shows goodwill but 340 businesses establishing emergency alternative payroll in 24 hours is unrealistic; many won't have backup providers; this shifts the problem without solving it.",
        -5,
        "Process payroll files manually using wire transfers for the largest employers and address smaller employers after ACH restoration.",
        "Prioritizing large employers seems efficient but small business employees need their paychecks just as much; inequitable treatment creates customer relations and fairness issues.",
        -5
      )),
    q("Finance", "Your cyber insurance policy has a $500,000 retention and covers ransom payments, business interruption, and forensics costs. The adjuster is requesting extensive documentation, but your team is consumed with recovery operations. They've also asked whether the bank complied with all policy requirements regarding security controls. How do you manage the insurance relationship?",
      buildChoices(
        "Designate a specific person to manage insurance coordination so it doesn't distract recovery teams. Provide the adjuster available documentation promptly while noting that complete records will follow recovery. Engage your insurance broker and coverage counsel proactively to review policy compliance questions before responding. Begin tracking all incident costs systematically even if detailed documentation comes later.",
        "Dedicated coordinator prevents distraction while maintaining insurer relationship; prompt partial documentation shows good faith; legal review of compliance questions protects against inadvertent admissions; cost tracking ensures nothing is missed in the claim.",
        10,
        "Ask the insurance company for patience given the active crisis and commit to providing full documentation once recovery is complete.",
        "Patience request is reasonable but insurers have their own timelines; delayed documentation risks coverage disputes; you're also missing opportunities to get advance payments that could help recovery.",
        5,
        "Have the CFO personally handle all insurance communications to ensure consistent messaging and appropriate seniority given the financial stakes.",
        "CFO attention signals seriousness but executive time during crisis is precious; insurance coordination is important but can be delegated with appropriate oversight.",
        -5,
        "Focus entirely on recovery and address insurance after systems are restored - the policy will cover costs regardless of when documentation is submitted.",
        "Recovery priority is correct but ignoring insurance creates problems: late notice can jeopardize coverage, undocumented costs may be unrecoverable, and coverage disputes become harder to resolve with time.",
        -5
      )),

    // Loans
    q("Loans", "You have $23 million in loan disbursements scheduled for the next 48 hours, including several construction loans with funding deadlines tied to contractor schedules. Your loan origination system is encrypted and manual disbursement is possible but risky without normal controls. What's your approach?",
      buildChoices(
        "Implement emergency manual disbursement procedures with enhanced controls: dual officer verification, verbal confirmation with borrowers, documented approval chain, and daily reconciliation. Prioritize disbursements with hard deadlines (construction loans) while deferring flexible timing where possible. Contact affected borrowers proactively to explain process and set expectations.",
        "Emergency procedures balance customer need with risk management; dual verification compensates for missing system controls; prioritization focuses effort where deadline pressure is real; borrower communication manages expectations.",
        10,
        "Pause all disbursements until loan systems are restored to ensure proper controls and documentation, contacting borrowers to explain the force majeure situation.",
        "Pausing protects the bank but borrowers with construction deadlines may face contractor abandonment, lien issues, or project delays that create larger problems; force majeure may not excuse customer harm.",
        5,
        "Process all scheduled disbursements immediately using manual procedures before systems get further behind, dealing with any control issues in post-incident review.",
        "Clearing the backlog seems proactive but 'dealing with control issues later' invites fraud and errors; rush processing without enhanced controls compounds risk rather than managing it.",
        -5,
        "Advise borrowers to seek bridge financing elsewhere if their needs are urgent, offering to reimburse reasonable costs once our systems are restored.",
        "Bridge financing suggestion may not be feasible for many borrowers on short notice; effectively tells customers to solve the bank's problem themselves; damages relationships.",
        -5
      )),
    q("Loans", "A large commercial borrower (a regional hospital with $45 million outstanding) calls demanding to draw their entire $15 million line of credit immediately, citing concerns about the bank's stability and their need to ensure operational funds. Their line is committed and they have a contractual right to draw. However, processing a $15 million manual disbursement carries significant operational and fraud risk. What do you recommend?",
      buildChoices(
        "Honor the draw request - it's a contractual commitment. Implement enhanced verification: have a senior officer call back to a known hospital administrator number, verify authorization documentation, require dual approval, and coordinate directly with their treasury team on wire details. Document everything meticulously. Separately, have relationship management reach out to address their stability concerns.",
        "Contractual obligations must be met regardless of operational convenience; enhanced verification addresses fraud risk; relationship outreach addresses the underlying concern that prompted the protective draw.",
        10,
        "Ask the hospital to delay the draw for 48 hours until systems are restored, explaining that manual processing creates risk for both parties and offering to expedite once systems are operational.",
        "Delay request is reasonable but they have a contractual right to draw; if they're concerned about bank stability, asking them to wait could confirm their fears; declining a committed facility could be a default.",
        5,
        "Process a partial draw of $5 million to meet their immediate needs while requesting they defer the remainder until systems support safer processing.",
        "Partial approach seems like compromise but unilaterally limiting a committed facility is a potential default; the borrower didn't ask for $5 million, they asked for $15 million.",
        -5,
        "Escalate to legal to review whether the ransomware incident constitutes a force majeure event that suspends line of credit obligations during the crisis.",
        "Legal review may be prudent but using force majeure to decline a committed facility draw will damage the relationship permanently and potentially trigger cross-defaults in their other agreements.",
        -5
      )),
    q("Loans", "Mortgage closing scheduled for today can't proceed because title company can't verify the payoff amount on the existing loan from your core system. The borrowers have a moving truck loaded and their old house buyer's financing is contingent on this closing. Manual records suggest the payoff is approximately $287,000 but can't be verified to the penny. What do you advise?",
      buildChoices(
        "Calculate a conservative payoff estimate using the last verified statement plus interest accrual, adding a reasonable cushion (e.g., $500). Document the estimate methodology and obtain borrower acknowledgment of the process. Issue the payoff letter with clear language that a final reconciliation will occur post-recovery with any overage refunded promptly. Coordinate with the title company on this approach.",
        "Conservative estimate with cushion protects all parties; documented methodology is defensible; borrower acknowledgment ensures informed consent; refund commitment handles any overage; title company coordination ensures deal can close.",
        10,
        "Ask the title company to hold the closing for 24-48 hours until systems are restored and an exact payoff can be provided.",
        "Delay protects accuracy but 24-48 hours may collapse the entire transaction chain; moving trucks, contingent sales, and rate locks don't wait; customer harm from failed closing could exceed any payoff variance.",
        5,
        "Provide the $287,000 estimate verbally and let the borrower decide whether to proceed, documenting that they chose to close without a verified payoff.",
        "Borrower choice respects autonomy but 'without a verified payoff' language may spook the title company; approach feels like risk-shifting rather than problem-solving.",
        -5,
        "Decline to provide any payoff information until systems are restored since inaccurate payoffs could create significant liability for the bank.",
        "Liability concern is valid but declining to help customers close their mortgages during an outage caused by the bank creates customer harm and potential liability of a different kind.",
        -5
      )),

    // Accounting
    q("Accounting", "Day 2 and your GL system is still encrypted. Staff are processing transactions using spreadsheets and manual logs. You estimate 4,000+ transactions have been processed outside normal systems. Some transaction details are incomplete. How do you maintain accounting control?",
      buildChoices(
        "Establish a centralized manual transaction register with standardized fields, sequential numbering, and dual sign-off requirements. Assign dedicated staff to maintain the register and reconcile it daily. Create a clear handoff protocol for when GL is restored. Accept that some entries may need post-recovery adjustment but ensure enough detail exists to reconstruct transactions.",
        "Centralized register prevents fragmented records across departments; standardized fields enable eventual system entry; dual sign-off maintains control; daily reconciliation catches issues quickly; clear handoff ensures nothing falls through gaps.",
        10,
        "Allow each department to maintain their own transaction records using whatever method works best for them, with a commitment to reconcile everything once systems are restored.",
        "Departmental flexibility may be faster but creates fragmentation, inconsistent formats, and reconciliation nightmares; 'whatever works' isn't a control framework.",
        5,
        "Suspend all non-essential transaction processing until GL is restored to minimize the volume of manual entries requiring reconciliation.",
        "Suspension reduces manual volume but may not be possible for customer-facing transactions; 'non-essential' is subjective and may create disputes about what qualifies.",
        -5,
        "Focus resources on restoring GL rather than building parallel manual processes, accepting that some transaction detail may be lost but can be reconstructed from bank statements and source documents.",
        "Restoration focus makes sense but 'accepting lost detail' creates audit issues; customer transaction records are not optional documentation; reconstruction is harder and less reliable than contemporaneous recording.",
        -5
      )),
    q("Accounting", "Your external auditors call asking about the incident's impact on your in-progress quarterly financial statement audit. They express concern about internal control reliance and ask whether the incident constitutes a material weakness. How do you respond?",
      buildChoices(
        "Schedule a meeting to walk through: the incident timeline, controls that remained effective, compensating controls implemented for affected processes, transaction volumes and dollar amounts processed manually, your reconciliation and validation plan, and your preliminary assessment of the control implications. Be transparent about what you don't yet know.",
        "Comprehensive briefing demonstrates you're taking the question seriously; transparency builds auditor confidence; preliminary assessment shows you're thinking about control implications; acknowledging unknowns is more credible than false certainty.",
        10,
        "Assure auditors that the incident is operational, not a control weakness, since the ransomware was a criminal attack rather than a control failure.",
        "Criminal attack framing has some merit but auditors will question the controls that failed to prevent or detect the intrusion; dismissing the control question won't make it go away.",
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
        "Assess each reconciliation individually: which can proceed with available data, which can be estimated with documented assumptions, and which must be deferred. Communicate proactively with auditors about modifications. Document all departures from normal procedures. Establish a timeline for completing deferred reconciliations post-recovery. Consider requesting a filing extension if necessary.",
        "Individual assessment avoids all-or-nothing thinking; documented estimates are acceptable practice; auditor communication prevents surprises; deferred reconciliation ensures nothing is forgotten; extension request is a legitimate tool if needed.",
        10,
        "Request an extension on the close and any related filings, explaining the extraordinary circumstances and committing to complete normal procedures once systems are restored.",
        "Extension may be appropriate but blanket delay for everything may be broader than necessary; some reconciliations can proceed and partial progress is better than complete postponement.",
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
        "Deploy additional staff including back-office personnel trained on basic transactions to reduce wait times. Implement a manager rotation in the lobby to triage customers, address concerns, and intervene with hostile customers. Provide tellers explicit permission to step away if they need a break. Prepare a brief statement for media acknowledging high volume and your commitment to serving customers. Consider whether temporary withdrawal limits are necessary to ensure all customers can be served.",
        "Staff augmentation addresses volume; manager presence provides support and de-escalation; teller breaks prevent burnout; media statement shapes narrative; withdrawal limit consideration balances fairness across all customers.",
        10,
        "Focus on processing customers as quickly as possible without adding procedures that might slow things down, trusting that getting through the line is the best way to reduce tension.",
        "Speed focus makes sense but ignoring teller welfare, media presence, and hostile customers lets problems escalate; fast transactions don't address underlying anxiety or fairness issues.",
        5,
        "Close branches temporarily to protect staff and reopen when crowds subside, directing customers to ATMs and digital channels.",
        "Staff protection is important but closing branches during a bank crisis dramatically worsens optics and customer panic; news footage of closed branches confirms worst fears.",
        -5,
        "Have security remove any customers who are being abusive and make clear that hostile behavior won't be tolerated regardless of circumstances.",
        "Maintaining order is appropriate but removing anxious customers during a crisis they didn't create will generate very bad stories; de-escalation should precede removal.",
        -5
      )),
    q("Deposits", "A major employer in your market (8,000 employees) contacts you saying they're considering moving their payroll account to a competitor because their employees didn't get paid due to your ACH failure. The account represents $24 million in average deposits. How do you handle this situation?",
      buildChoices(
        "Have a senior executive call the employer's CFO personally to apologize, explain what happened and what you're doing to prevent recurrence, offer to make whole any employees who incurred costs due to the missed payroll (overdraft fees, late payment penalties), and propose a service credit or fee waiver for the company. Don't make promises about the relationship you can't keep, but demonstrate accountability.",
        "Senior executive engagement shows you take the relationship seriously; specific remediation for affected employees addresses actual harm; service credit acknowledges the business impact; accountability without over-promising maintains credibility.",
        10,
        "Offer significant fee concessions and rate improvements to retain the account, making clear you'll do whatever it takes to keep their business.",
        "Financial incentives may help but they don't address the underlying concern about reliability; 'whatever it takes' may commit you to terms that aren't sustainable.",
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
        "Issue an immediate multi-channel communication (email, website banner, mobile app notification, social media) acknowledging that balance displays may not reflect all recent transactions and providing a specific timeline for when data will be fully synchronized. Have customer service ready to verify actual balances via back-end systems for customers who need certainty. Monitor social media and respond to posts with factual information and offers to help verify balances.",
        "Multi-channel communication reaches customers wherever they are; specific timeline sets expectations; back-end verification option addresses customers with urgent needs; social media engagement counters misinformation with facts.",
        10,
        "Post a single notice on the website explaining that balance synchronization is ongoing and customers should check back in 24-48 hours for accurate information.",
        "Website notice is something but many customers won't see it; no social media response leaves speculation unchallenged; 24-48 hours is a long time to tell customers their balance might be wrong.",
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
      "Let anyone issue ad-hoc warnings", "Inconsistent and noisy.", -5
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
      "Record exposures in a separate incident ledger with clear cross-references", "Audit-ready and traceable.", 10,
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
    "A Category 2 hurricane made landfall 18 hours ago causing widespread damage across your market area. 6 of 14 branches have no power with restoration estimates of 3-7 days. Two branches sustained roof damage with water intrusion into customer areas. Cell towers are overloaded causing intermittent mobile banking failures. Your core processor's regional data center switched to generator power 12 hours ago. Local emergency management has issued a 48-hour shelter-in-place advisory for three counties where 40% of your staff reside. Media is reporting customers waiting hours at competitor ATMs. Your insurance carrier requires damage documentation within 72 hours for expedited claims processing.",
  questions: [
    // CEO/SVPs
    q("CEO/SVPs", "It's now 6 AM the morning after landfall. Your Business Continuity Plan calls for an 8 AM executive briefing, but your Chief Operations Officer is unreachable (likely no cell service), two board members are calling for immediate updates, and the local news station wants a statement for their 7 AM broadcast. How do you proceed?",
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
    q("CEO/SVPs", "By Day 2, you learn a competitor bank is running radio ads promoting their 'full service availability' and offering fee waivers to new customers. Your marketing team wants to respond aggressively. Meanwhile, community groups are requesting you sponsor emergency supply distribution, which would require staff volunteers from already-thin coverage. What's the appropriate strategic response?",
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
    q("CEO/SVPs", "On Day 3, a regional TV station is running a story about elderly customers unable to access medication money due to branch closures and ATM outages. They've requested an on-camera interview. Your two operational branches have 2+ hour wait times. Corporate communications advises against the interview citing litigation risk. Your community banking director believes it's an opportunity to demonstrate responsiveness. What approach do you take?",
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
        "Record the confirmed losses as an operating expense with appropriate internal classification that identifies them as fraud-related for tracking and reporting purposes. Prepare disclosure language addressing the fraud and control environment for management discussion, even if quantitatively immaterial, since qualitative factors may warrant disclosure. Consult with external auditors on disclosure adequacy.",
        "Operating expense treatment is appropriate; internal fraud classification enables tracking; qualitative disclosure may be necessary regardless of amount; auditor consultation ensures appropriate treatment.",
        10,
        "Record the losses as a miscellaneous expense without special classification, avoiding creation of a 'fraud loss' category that invites questions.",
        "Miscellaneous classification obscures the nature of the loss; creating appropriate categories improves transparency, not questions; hiding classification suggests discomfort with facts.",
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
        "Support the expanded testing as appropriate professional skepticism given the control environment concerns. The incremental cost is justified by the assurance value, and resistance may raise auditor concerns about management's commitment to controls. Use the expanded testing as validation of remediation effectiveness.",
        "Expanded testing is a reasonable auditor response to identified fraud; resistance creates relationship tension and suggests management isn't taking controls seriously; viewing testing as validation reframes it constructively.",
        10,
        "Negotiate the scope of expanded testing to focus on the specific control areas affected by the fraud rather than a broad expansion, balancing thoroughness with cost efficiency.",
        "Negotiation is reasonable but auditors have professional judgment about appropriate response to fraud; significant pushback on scope may raise independence concerns.",
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
