window.discussionScenarios = {
    Deposits: [
        {
            title: "Large Cash Deposit Alert",
            description: "A customer attempts to deposit a large sum of cash, triggering a compliance review. Discuss how to handle the situation and ensure proper documentation.",
            discussionPoints: [
                "What steps should be taken to verify the source of funds?",
                "How do you communicate compliance requirements to the customer?",
                "What records must be kept for regulatory purposes?"
            ]
        },
        {
            title: "Suspicious Check Deposit",
            description: "A customer presents a check for deposit that appears altered and is drawn on an unfamiliar out-of-state bank. Discuss how to handle the deposit and mitigate potential fraud risk.",
            discussionPoints: [
                "What procedures should be followed for suspicious checks?",
                "How do you communicate concerns to the customer?",
                "What steps are taken to report and document the incident?"
            ]
        },
        {
            title: "Deposit Hold Dispute",
            description: "A customer becomes upset when a hold is placed on their deposited funds, delaying access to the money. Discuss how to explain deposit hold policies and resolve the customer's concerns.",
            discussionPoints: [
                "What are the bank's policies regarding deposit holds?",
                "How should staff communicate the reason for the hold to the customer?",
                "What options can be offered to help the customer?",
                "How should disputes about deposit holds be documented?",
                "What training can help staff handle similar situations in the future?"
            ]
        },
        {
            title: "Foreign Currency Deposit",
            description: "A customer brings in a large amount of foreign currency for deposit. Discuss the procedures for handling foreign currency, potential risks, and customer communication.",
            discussionPoints: [
                "What steps are required to verify and process foreign currency deposits?",
                "How should exchange rates and fees be explained to the customer?",
                "What are the compliance and documentation requirements?",
                "What risks are associated with foreign currency deposits?",
                "How can staff ensure accuracy and transparency in these transactions?"
            ]
        },
        {
            title: "Third-Party Deposit Attempt",
            description: "An individual attempts to deposit a check into an account that does not belong to them, raising concerns about authorization and fraud. Discuss how to handle third-party deposit attempts and communicate policies to customers.",
            discussionPoints: [
                "What is the bank's policy on third-party deposits?",
                "How should staff verify authorization for such deposits?",
                "What are the potential risks and red flags?",
                "How should the situation be explained to the customer?",
                "What documentation and reporting are required for unusual deposit attempts?"
            ]
        },
        {
            title: "Deposit Fraud Alert",
            description: "A customer attempts to deposit a check that is later found to be fraudulent. Discuss how to handle the situation, communicate with the customer, and prevent future fraud attempts.",
            discussionPoints: [
                "What are the red flags for deposit fraud?",
                "How should the incident be documented and reported?",
                "How do you communicate with the customer about the issue?",
                "What controls can help prevent future fraud?",
                "What follow-up actions are necessary?"
            ]
        },
        {
            title: "Structuring Suspicion",
            description: "A customer makes multiple cash deposits just under $10,000 over consecutive days, a pattern that may indicate structuring to avoid CTR reporting requirements.",
            discussionPoints: [
                "What are the indicators of potential structuring activity?",
                "How should staff document observations without alerting the customer?",
                "What is the process for filing a Suspicious Activity Report?",
                "How do you balance customer service with compliance obligations?",
                "What training helps staff recognize structuring patterns?"
            ]
        },
        {
            title: "Elder Financial Exploitation Concern",
            description: "An elderly customer comes in with a younger person who insists on making a large withdrawal from the customer's account. The elderly customer seems confused and hesitant.",
            discussionPoints: [
                "What are the warning signs of elder financial exploitation?",
                "How should staff privately communicate with the elderly customer?",
                "What are the bank's reporting obligations for suspected exploitation?",
                "How do you balance customer privacy with protection concerns?",
                "What resources exist for referring suspected elder abuse?"
            ]
        },
        {
            title: "Mobile Deposit Duplicate Submission",
            description: "A customer's account shows that the same check was deposited via mobile deposit and then physically at a branch, resulting in duplicate credit. The customer claims it was an accident.",
            discussionPoints: [
                "What controls exist to prevent duplicate mobile deposits?",
                "How should the duplicate credit be reversed and communicated to the customer?",
                "What determines whether this is an error versus intentional fraud?",
                "How should the incident be documented for compliance purposes?",
                "What customer education can prevent future duplicate submissions?"
            ]
        },
        {
            title: "Check Kiting Pattern Detection",
            description: "A business customer has been making frequent large deposits from their account at another bank, immediately followed by withdrawals before the deposited checks clear. The account shows a pattern of inflated balances that never fully materialize.",
            discussionPoints: [
                "What are the key indicators of a check kiting scheme?",
                "How should the account activity be documented and escalated?",
                "What immediate actions should be taken to protect the bank?",
                "How should the customer be approached about the suspicious activity?",
                "What coordination is needed between branches if multiple locations are involved?"
            ]
        },
        {
            title: "Disputed Joint Account Ownership Change",
            description: "One owner of a joint deposit account requests to remove the other owner from the account. The other owner has not consented and the account has significant funds. Both parties have equal rights to the account.",
            discussionPoints: [
                "What are the bank's policies for removing an owner from a joint account?",
                "Can one joint owner unilaterally remove another without consent?",
                "What documentation is required for ownership changes?",
                "How should the bank handle disputes between joint account holders?",
                "What are the potential legal and liability considerations?"
            ]
        },
        {
            title: "Returned Deposit Item Collection",
            description: "A deposited check is returned unpaid after the customer has already withdrawn the funds. The account now has a negative balance and the customer claims they were told the check had cleared.",
            discussionPoints: [
                "What is the difference between funds availability and a check clearing?",
                "How should the negative balance be communicated to the customer?",
                "What collection options exist for recovering the funds?",
                "How should staff explain deposit agreements and customer liability?",
                "What training can help staff set proper customer expectations about deposits?"
            ]
        }
    ],
    Tellers: [
        {
            title: "Counterfeit Bill Detection",
            description: "A teller receives a stack of high-denomination bills from a business customer. The bills pass basic tests but advanced counterfeiting techniques are suspected, including polymer overlays and microprinting. The customer is agitated and claims urgent payroll needs.",
            difficulty: "advanced",
            discussionPoints: [
                "How should advanced forensic tools and central bank resources be used to verify high-tech counterfeit bills?",
                "What are the escalation protocols for suspected organized counterfeiting?",
                "How should the teller manage customer agitation and urgency while maintaining security?",
                "What are the legal and regulatory reporting requirements for large-scale counterfeiting?",
                "How should the bank coordinate with law enforcement and other financial institutions?"
            ]
        },
        {
            title: "Customer Service Dilemma",
            description: "A customer becomes upset after being told they need additional identification to withdraw a large sum. Discuss how the teller should handle the situation to maintain compliance and provide excellent service.",
            discussionPoints: [
                "What are the bank's policies for large withdrawals?",
                "How can the teller de-escalate the situation?",
                "What communication strategies help balance compliance and customer satisfaction?"
            ]
        },
        {
            title: "Unusual Withdrawal Request",
            description: "A customer requests multiple large withdrawals in small denominations over several days, using different branches and accounts. The pattern suggests sophisticated structuring and possible links to criminal activity. The customer is evasive and provides inconsistent explanations.",
            difficulty: "advanced",
            discussionPoints: [
                "How should the teller use transaction monitoring and cross-branch communication to detect advanced structuring?",
                "What are the best practices for documenting and escalating suspicious withdrawal patterns?",
                "How should the teller handle evasive or inconsistent customer explanations?",
                "What are the legal and compliance risks of failing to detect sophisticated structuring?",
                "How should the bank coordinate with law enforcement and regulatory agencies?"
            ]
        },
        {
            title: "Lost or Stolen Card Report",
            description: "A customer approaches the teller to report their debit card as lost or stolen. Discuss the steps the teller should take to secure the account and assist the customer.",
            discussionPoints: [
                "What immediate actions should the teller take to protect the customer's account?",
                "How should the incident be documented and reported?",
                "What information should be provided to the customer about next steps?",
                "How can the teller ensure the customer feels supported and informed?",
                "What are the bank's policies for issuing a replacement card?"
            ]
        },
        {
            title: "Joint Account Withdrawal Dispute",
            description: "Two customers who share a joint account disagree at the teller window about whether a withdrawal should be allowed. Discuss how the teller should handle the dispute and follow bank policy.",
            discussionPoints: [
                "What is the bank's policy for withdrawals on joint accounts?",
                "How should the teller communicate with both parties?",
                "What steps should be taken to de-escalate the situation?",
                "How should the teller document the incident?",
                "When should a supervisor or manager be involved?"
            ]
        },
        {
            title: "Teller Fraud Discovery",
            description: "An internal audit uncovers a complex fraud scheme involving multiple tellers, collusion with external parties, and manipulation of transaction records. The fraud has persisted for months and involves significant financial losses.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic accounting and digital audit trails be used to investigate complex teller fraud?",
                "What are the best practices for uncovering collusion and manipulation of records?",
                "How should the bank coordinate with law enforcement and regulatory agencies?",
                "What advanced controls and monitoring can prevent future teller fraud?",
                "How should the bank communicate findings and corrective actions to staff and regulators?"
            ]
        },
        {
            title: "Power of Attorney Verification",
            description: "A customer presents a complex international Power of Attorney (POA) document, notarized overseas and translated, to make a large withdrawal from a business account. The transaction triggers compliance and legal review due to cross-border risks and potential fraud.",
            difficulty: "advanced",
            discussionPoints: [
                "How should the bank verify and authenticate complex international POA documents?",
                "What are the legal and compliance risks of cross-border POA transactions?",
                "How should the bank coordinate with legal counsel and international authorities?",
                "What advanced documentation and reporting is required for high-risk POA transactions?",
                "How should the bank communicate with customers about complex POA requirements?"
            ]
        },
        {
            title: "Cash Drawer Discrepancy",
            description: "A recurring pattern of cash drawer discrepancies is identified across multiple branches, with shortages and overages linked to sophisticated manipulation of reconciliation procedures. The discrepancies are significant and may indicate organized internal fraud.",
            difficulty: "advanced",
            discussionPoints: [
                "How should the bank use digital reconciliation tools and audit analytics to detect patterns of cash drawer manipulation?",
                "What are the best practices for investigating and documenting multi-branch discrepancies?",
                "How should the bank coordinate with internal audit and law enforcement?",
                "What advanced controls and staff training can prevent future discrepancies?",
                "How should the bank communicate findings and corrective actions to staff and regulators?"
            ]
        },
        {
            title: "Customer Under Duress",
            description: "A series of high-value checks are deposited from multiple new accounts, all drawn on foreign banks with complex routing and endorsement patterns. The checks appear genuine but are flagged by advanced fraud detection systems. The situation may involve international check fraud and money laundering.",
            difficulty: "advanced",
            discussionPoints: [
                "How should the bank use forensic document analysis and international banking contacts to verify check authenticity?",
                "What are the red flags for international check fraud and laundering?",
                "How should the bank coordinate with law enforcement and regulatory agencies?",
                "What advanced reporting and documentation is required for cross-border fraud?",
                "How should customer communication be handled in complex fraud investigations?",
                "What documentation is required after a suspected duress situation?",
                "What training prepares staff for potential robbery or coercion scenarios?"
            ]
        },
        {
            title: "Foreign Currency Deposit Risk Assessment",
            description: "A corporate client attempts to deposit a large sum in multiple foreign currencies, some of which are subject to international sanctions and volatile exchange rates. The transaction triggers compliance alerts and requires advanced risk assessment.",
            difficulty: "advanced",
            discussionPoints: [
                "How should the bank assess and mitigate risks associated with sanctioned or high-risk currencies?",
                "What advanced compliance procedures are required for large, multi-currency deposits?",
                "How should exchange rate volatility and transaction timing be managed?",
                "What are the documentation and reporting requirements for international regulatory bodies?",
                "How should the bank communicate complex risks and requirements to corporate clients?",
                "When should legal or compliance be consulted?",
                "How should the transaction be documented?"
            ]
        },
        {
            title: "Coordinated Deposit Fraud Scheme",
            description: "A coordinated fraud scheme targets the bank with multiple fraudulent deposits using advanced counterfeiting techniques, remote deposit capture, and mule accounts. The fraud is detected only after significant losses have occurred.",
            difficulty: "advanced",
            discussionPoints: [
                "How should the bank use transaction monitoring and AI to detect coordinated deposit fraud?",
                "What are the best practices for investigating and documenting large-scale deposit fraud?",
                "How should the bank recover losses and pursue legal action against fraud rings?",
                "What advanced controls and staff training can help prevent future sophisticated fraud?",
                "How should the bank communicate with affected customers and regulators?",
                "What controls can help prevent future shortages?",
                "How should the situation be communicated to the teller and management?"
            ]
        },
        {
            title: "Complex Structuring Scheme Detection",
            description: "A network of related individuals and businesses is identified making structured deposits across multiple branches and accounts, using advanced evasion tactics to avoid detection and reporting. The activity may indicate organized crime or terrorist financing.",
            difficulty: "advanced",
            discussionPoints: [
                "How should the bank use data analytics and cross-branch coordination to detect complex structuring schemes?",
                "What are the advanced documentation and reporting requirements for suspected organized crime or terrorist financing?",
                "How should the bank coordinate with federal agencies and law enforcement?",
                "What enhanced controls and monitoring should be implemented for high-risk accounts?",
                "How should staff be trained to recognize and escalate sophisticated structuring activity?",
                "How should the situation be handled if the check appears fraudulent?",
                "What documentation is required regardless of the outcome?"
            ]
        },
        {
            title: "Complex Check Kiting Operation",
            description: "A complex check kiting operation is uncovered involving multiple business accounts, cross-bank transactions, and digital payment platforms. The scheme exploits timing differences and remote deposit capture to maximize fraudulent balances before detection.",
            difficulty: "advanced",
            discussionPoints: [
                "How should the bank use cross-bank data sharing and digital payment monitoring to detect complex kiting schemes?",
                "What are the best practices for investigating and documenting multi-account kiting operations?",
                "How should the bank recover losses and pursue legal action against perpetrators?",
                "What advanced controls and system enhancements can prevent future kiting fraud?",
                "How should the bank communicate with affected customers and regulators in large-scale kiting cases?",
                "How should the teller explain the process and requirements?",
                "What are the risks of adding signers and how should they be communicated?"
            ]
        },
        {
            title: "Cashing Check for Non-Customer",
            description: "A person who does not have an account at the bank presents a check drawn on one of your customers' accounts and wants to cash it. The check is for a significant amount.",
            discussionPoints: [
                "What is the bank's policy for cashing checks for non-customers?",
                "What identification and verification should be required?",
                "What fees may apply and how should they be communicated?",
                "What are the risks of cashing checks for non-customers?",
                "How should the transaction be documented and what holds might apply?"
            ]
        }
    ],
    Loans: [
        {
            title: "Loan Application Red Flags",
            description: "A loan application contains inconsistencies in income documentation. Discuss how to address potential fraud and ensure due diligence.",
            discussionPoints: [
                "What are common red flags in loan applications?",
                "How do you verify applicant information?",
                "What steps should be taken if fraud is suspected?"
            ]
        },
        {
            title: "Interest Rate Change Notification",
            description: "A customer with a variable-rate loan calls after receiving a notice of an interest rate increase. Discuss how to explain the change and address the customer's concerns.",
            discussionPoints: [
                "How do you clearly communicate loan terms and changes?",
                "What options can you offer to help the customer manage increased payments?",
                "How do you document the conversation and follow up?"
            ]
        },
        {
            title: "Co-Signer Withdrawal Request",
            description: "A co-signer on a personal loan requests to be removed from the loan agreement after the primary borrower experiences financial difficulties. Discuss how to handle the request and communicate options to both parties.",
            discussionPoints: [
                "What is the process for removing a co-signer from a loan?",
                "How should the risks and responsibilities be explained to both parties?",
                "What alternative solutions can be offered?",
                "How should the request and any changes be documented?",
                "What are the regulatory or policy considerations?"
            ]
        },
        {
            title: "Early Loan Payoff Inquiry",
            description: "A customer contacts the bank to inquire about paying off their loan early and wants to know about any penalties or procedures. Discuss how to explain the process and address the customer's questions.",
            discussionPoints: [
                "What is the bank's policy on early loan payoff?",
                "How should any penalties or fees be communicated?",
                "What steps are required to process an early payoff?",
                "How should the payoff be documented and confirmed?",
                "What follow-up actions are needed to close the loan account?"
            ]
        },
        {
            title: "Loan Payment Deferral Request",
            description: "A customer experiencing temporary financial hardship requests a deferral on their loan payments. Discuss how to evaluate the request, explain options, and document the process.",
            discussionPoints: [
                "What criteria should be used to evaluate a payment deferral request?",
                "How should available options and consequences be explained to the customer?",
                "What documentation is required for a deferral?",
                "How should the deferral be tracked and followed up?",
                "What are the regulatory or policy considerations for payment deferrals?"
            ]
        },
        {
            title: "Loan Application Fraud",
            description: "A loan application is submitted with falsified documents and information. Discuss how to detect, investigate, and respond to loan fraud.",
            discussionPoints: [
                "What are the red flags for loan application fraud?",
                "How should the application be investigated?",
                "What steps should be taken if fraud is confirmed?",
                "How should the customer be notified?",
                "What controls can help prevent future loan fraud?"
            ]
        },
        {
            title: "Collateral Value Decline",
            description: "A routine collateral review reveals that a commercial loan's collateral has significantly decreased in value, putting the loan underwater. The borrower is current on payments.",
            discussionPoints: [
                "What are the bank's options when collateral value declines?",
                "How should this be communicated to the borrower?",
                "What additional security or guarantees might be requested?",
                "How does this affect the loan's risk classification?",
                "What documentation and approval is required for any loan modification?"
            ]
        },
        {
            title: "Straw Borrower Suspicion",
            description: "A loan officer suspects that an applicant may be acting as a 'straw borrower' for someone who cannot qualify for credit themselves. The application looks clean but some details don't add up.",
            discussionPoints: [
                "What are the indicators of a potential straw borrower arrangement?",
                "How should the loan officer investigate these concerns?",
                "What questions should be asked during the application process?",
                "What are the legal and regulatory implications?",
                "How should the investigation be documented regardless of outcome?"
            ]
        },
        {
            title: "Flood Zone Determination Dispute",
            description: "A mortgage applicant disputes the flood zone determination for their property, claiming the assessment is incorrect and they shouldn't need flood insurance.",
            discussionPoints: [
                "What is the process for flood zone determinations?",
                "How can customers challenge a flood zone determination?",
                "What are the bank's obligations regarding flood insurance?",
                "How should staff explain requirements while maintaining customer goodwill?",
                "What documentation is required for the loan file?"
            ]
        },
        {
            title: "Adding Co-Borrower to Existing Loan",
            description: "A borrower requests to add their spouse as a co-borrower to their existing auto loan to help qualify for a rate reduction. The spouse was not part of the original application.",
            discussionPoints: [
                "What is the process for adding a co-borrower to an existing loan?",
                "Does adding a co-borrower require a new loan application and underwriting?",
                "What documentation and credit checks are required for the new co-borrower?",
                "How does adding a co-borrower affect the loan terms and rate?",
                "What are the liability implications for both parties that should be explained?"
            ]
        },
        {
            title: "Loan Renewal with Deteriorating Financials",
            description: "A commercial borrower's line of credit is up for annual renewal, but their financial statements show significant deterioration since the original underwriting. The customer expects automatic renewal.",
            discussionPoints: [
                "What factors should be considered when renewing a loan with weakened financials?",
                "How should the bank communicate concerns to the borrower?",
                "What options exist between full renewal and non-renewal?",
                "What additional covenants or conditions might be appropriate?",
                "How should the decision and rationale be documented?"
            ]
        },
        {
            title: "HMDA Data Accuracy Concern",
            description: "A quality control review identifies potential errors in Home Mortgage Disclosure Act (HMDA) data for several recent mortgage applications. The errors could affect regulatory reporting.",
            discussionPoints: [
                "What HMDA data points are most commonly reported incorrectly?",
                "How should the scope of the data errors be determined?",
                "What is the process for correcting HMDA data submissions?",
                "What are the regulatory consequences of HMDA reporting errors?",
                "What controls can improve HMDA data accuracy going forward?"
            ]
        }
    ],
    Accounting: [
        {
            title: "Reconciling Discrepancies",
            description: "A multi-branch reconciliation uncovers a $250,000 discrepancy involving complex intercompany transfers, off-balance-sheet items, and cross-currency transactions. The issue spans several months and involves multiple accounting systems and external auditors.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic accounting and data analytics be used to trace multi-system discrepancies?",
                "What are the escalation protocols for high-value, multi-branch reconciliation issues?",
                "How should the bank coordinate with external auditors and regulatory bodies?",
                "What advanced controls and documentation are required for resolution?",
                "How should findings be communicated to senior management and the board?"
            ]
        },
        {
            title: "Unrecorded Expense Discovery",
            description: "A forensic audit reveals a pattern of unrecorded expenses across several departments, including international wire transfers and vendor payments routed through third-party intermediaries. The missing entries have significant compliance and fraud implications.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic audit techniques be used to uncover complex patterns of unrecorded expenses?",
                "What are the legal and regulatory risks of unrecorded cross-border transactions?",
                "How should the bank coordinate with compliance, legal, and law enforcement?",
                "What advanced controls and monitoring can prevent future unrecorded expenses?",
                "How should findings and remediation be documented for regulators and auditors?"
            ]
        },
        {
            title: "Accounting Fraud Detection",
            description: "An internal investigation uncovers a sophisticated fraud scheme involving falsified journal entries, collusion between staff and vendors, and manipulation of financial reporting over multiple quarters. The fraud has material impact on regulatory filings and investor disclosures.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic accounting and digital audit trails be used to investigate multi-party accounting fraud?",
                "What are the best practices for uncovering collusion and manipulation of financial statements?",
                "How should the bank coordinate with external auditors, regulators, and law enforcement?",
                "What advanced controls and monitoring can prevent future accounting fraud?",
                "How should the bank communicate findings and corrective actions to investors and regulators?"
            ]
        },
        {
            title: "Intercompany Transaction Reconciliation",
            description: "Persistent, material differences in intercompany accounts are discovered, involving complex derivative transactions, foreign subsidiaries, and regulatory reporting across multiple jurisdictions. The discrepancies trigger a regulatory review and potential enforcement action.",
            difficulty: "advanced",
            discussionPoints: [
                "How should advanced reconciliation tools and cross-jurisdictional audits be used to resolve complex intercompany differences?",
                "What are the legal and compliance risks of unresolved intercompany discrepancies?",
                "How should the bank coordinate with international auditors and regulators?",
                "What advanced documentation and reporting is required for regulatory review?",
                "How should findings be communicated to senior management and the board?"
            ]
        },
        {
            title: "Lease Accounting Transition",
            description: "A post-implementation review of new lease accounting standards uncovers significant errors in the recognition of lease liabilities, including embedded leases, cross-border contracts, and related-party transactions. The errors affect multiple reporting periods and trigger audit and regulatory scrutiny.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic review and data analytics be used to identify and correct complex lease accounting errors?",
                "What are the regulatory and audit risks of misreported lease liabilities?",
                "How should the bank coordinate with external auditors and legal counsel?",
                "What advanced controls and documentation are required for lease accounting compliance?",
                "How should findings and remediation be communicated to regulators and the audit committee?"
            ]
        },
        {
            title: "Revenue Recognition Timing Issue",
            description: "A review reveals that fee income from certain loan products has been recognized before all performance obligations were satisfied, potentially overstating revenue in prior periods.",
            discussionPoints: [
                "How should the scope of the revenue recognition issue be assessed?",
                "What is the process for determining whether restatement is required?",
                "How should this be communicated to management and the audit committee?",
                "What controls should be enhanced to prevent recurrence?",
                "What are the regulatory notification requirements?"
            ]
        },
        {
            title: "Tax Reporting After Account Ownership Change",
            description: "A customer removed a joint owner from their account mid-year, and now there are questions about how interest income should be reported on 1099-INT forms for each party.",
            discussionPoints: [
                "How is interest income allocated when account ownership changes mid-year?",
                "What documentation is needed to support the 1099 reporting?",
                "How should the bank handle disputes about interest allocation?",
                "What are the IRS requirements for reporting joint account income?",
                "How should corrections be handled if 1099s were issued incorrectly?"
            ]
        },
        {
            title: "Accrued Interest Calculation Error",
            description: "A routine review discovers that accrued interest on a portfolio of commercial loans has been calculated incorrectly for several months due to a formula error in a spreadsheet. The cumulative misstatement is material.",
            discussionPoints: [
                "What immediate steps should be taken to quantify the error?",
                "How should the correction entries be recorded and documented?",
                "What is the process for determining if prior financial statements need adjustment?",
                "How should this be communicated to management, auditors, and regulators?",
                "What controls can prevent spreadsheet-based calculation errors in the future?"
            ]
        },
        {
            title: "Fixed Asset Depreciation Discrepancy",
            description: "During year-end close, accounting discovers that depreciation on several branch building improvements was not recorded for two quarters. The fixed asset register and general ledger are now out of sync.",
            discussionPoints: [
                "How should the missing depreciation entries be calculated and recorded?",
                "What caused the breakdown in the depreciation process?",
                "How should the fixed asset register be reconciled to the general ledger?",
                "What is the impact on quarterly financial statements already issued?",
                "What controls should be implemented to ensure depreciation is recorded timely?"
            ]
        },
        {
            title: "Loan Loss Reserve Adequacy Review",
            description: "Examiners have questioned whether the bank's allowance for loan losses is adequate given recent increases in delinquencies. The current methodology may not fully capture emerging credit risks.",
            discussionPoints: [
                "What factors should be considered when evaluating loan loss reserve adequacy?",
                "How should qualitative adjustments be documented and supported?",
                "What data and analysis should be prepared for examiner discussions?",
                "How should changes to the reserve methodology be approved and implemented?",
                "What are the financial statement implications of an inadequate reserve?"
            ]
        },
        {
            title: "Wire Transfer Posting Error",
            description: "A large incoming wire transfer was posted to the wrong customer's account. The error was not discovered until the intended recipient inquired about missing funds three days later.",
            discussionPoints: [
                "What immediate steps should be taken to correct the posting error?",
                "How should both affected customers be notified and made whole?",
                "What reconciliation process failed to catch this error sooner?",
                "How should the correction be documented for audit purposes?",
                "What controls can prevent wire posting errors in the future?"
            ]
        },
        {
            title: "Call Report Filing Deadline Pressure",
            description: "The quarterly Call Report deadline is approaching and several key reconciliations are not complete. Material items remain unresolved and staff are suggesting estimates to meet the deadline.",
            discussionPoints: [
                "What are the consequences of filing an inaccurate Call Report?",
                "How should unresolved items be handled when deadlines are tight?",
                "What level of estimation is acceptable in regulatory filings?",
                "How should the situation be escalated to management?",
                "What process improvements can prevent deadline pressure in future quarters?"
            ]
        }
    ],
    Bookkeeping: [
        {
            title: "Missing Invoice Records",
            description: "A forensic investigation uncovers a sophisticated scheme involving missing invoices, shell companies, and cross-border payments. The fraud spans multiple fiscal years and involves collusion between internal staff and external vendors, triggering regulatory and criminal investigations.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic accounting and digital audit trails be used to uncover multi-year, multi-party invoice fraud?",
                "What are the legal and regulatory implications of cross-border payment fraud?",
                "How should the bank coordinate with law enforcement, auditors, and regulators?",
                "What advanced controls and monitoring can prevent future invoice fraud?",
                "How should findings and remediation be documented for regulatory and criminal proceedings?"
            ]
        },
        {
            title: "Bank Reconciliation Challenge",
            description: "A multi-entity bank reconciliation uncovers a $1.2M discrepancy involving complex intercompany transfers, foreign currency transactions, and off-balance-sheet items. The issue triggers an external audit and regulatory review.",
            difficulty: "advanced",
            discussionPoints: [
                "How should advanced reconciliation tools and forensic analysis be used to resolve multi-entity discrepancies?",
                "What are the escalation protocols for high-value, cross-border reconciliation issues?",
                "How should the bank coordinate with external auditors and regulatory bodies?",
                "What advanced documentation and reporting is required for regulatory review?",
                "How should findings be communicated to senior management and the board?"
            ]
        },
        {
            title: "Duplicate Payment Investigation",
            description: "A duplicate payment is discovered during reconciliation. Discuss how to investigate and correct the duplicate payment.",
            discussionPoints: [
                "What steps should be taken to investigate and correct the duplicate payment?",
                "How should communication with the vendor be handled?",
                "What internal controls can help prevent duplicate payments?",
                "How should the correction be documented in the records?"
            ]
        },
        {
            title: "Straw Borrower Network Uncovered",
            description: "A complex straw borrower network is discovered, involving layered transactions, shell companies, digital payment platforms, and international money laundering. The scheme circumvents lending limits and regulatory oversight, triggering multi-agency investigations.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic accounting and transaction analysis be used to uncover sophisticated straw borrower networks?",
                "What are the legal and regulatory risks of failing to detect international straw borrower schemes?",
                "How should the bank coordinate with compliance, legal, and law enforcement across jurisdictions?",
                "What enhanced due diligence and monitoring procedures should be implemented for high-risk accounts?",
                "How should findings be documented for regulatory and legal defense?"
            ]
        },
        {
            title: "Unapplied Credits Correction",
            description: "A customer discovers unapplied credits in their account. Discuss how to notify the customer and update records.",
            discussionPoints: [
                "How should the customer be notified and records updated?",
                "What procedures can help prevent unapplied credits in the future?",
                "How should the correction be documented for audit purposes?",
                "What follow-up actions are necessary to ensure all credits are properly applied?"
            ]
        },
        {
            title: "Corporate Borrower Renewal Challenge",
            description: "A large corporate borrower with multiple credit facilities is up for renewal, but forensic review reveals deteriorating cash flow, covenant breaches, undisclosed related-party transactions, and offshore entities. The borrower is a key client and threatens litigation if terms are not renewed favorably.",
            difficulty: "advanced",
            discussionPoints: [
                "How should the bank balance relationship management with advanced credit risk analysis and regulatory compliance?",
                "What structuring options exist for covenant breaches and related-party risks involving offshore entities?",
                "How should the bank negotiate with a key client leveraging legal threats?",
                "What are the regulatory, reputational, and legal risks of renewing under deteriorating conditions?",
                "How should the bank document and defend its renewal decision to auditors, regulators, and legal counsel?"
            ]
        },
        {
            title: "Petty Cash Shortage",
            description: "A petty cash shortage is discovered. Discuss controls and procedures to prevent future shortages.",
            discussionPoints: [
                "What controls and procedures can help prevent future shortages?",
                "How should staff be trained on petty cash management?",
                "What follow-up actions are necessary to resolve the issue?"
            ]
        },
        {
            title: "Bookkeeping Fraud Scheme",
            description: "A regulatory examination uncovers systemic HMDA data integrity issues across multiple branches, including misclassification of loan purpose, incorrect geocoding, and missing demographic data. The bank faces potential enforcement action and public disclosure of errors.",
            discussionPoints: [
                "How should the bank conduct a root cause analysis of systemic HMDA data errors?",
                "What are the steps for remediating and restating HMDA data across multiple branches?",
                "How should the bank prepare for regulatory enforcement and public disclosure?",
                "What advanced controls and training can prevent future HMDA data integrity issues?",
                "How should the bank communicate findings and corrective actions to regulators and the public?",
                "How should findings be documented?",
                "What follow-up actions are necessary?"
            ]
        },
        {
            title: "Vendor Master File Manipulation",
            description: "A forensic audit uncovers a sophisticated vendor master file manipulation scheme, involving unauthorized changes to banking information, social engineering, and fraudulent payments routed through international accounts. The fraud triggers regulatory and law enforcement investigations.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic audit and digital monitoring be used to detect and investigate vendor master file fraud?",
                "What are the legal and regulatory implications of international fraudulent payments?",
                "How should the bank coordinate with law enforcement, auditors, and regulators?",
                "What advanced controls and verification procedures can prevent future vendor master file manipulation?",
                "How should findings and remediation be documented for regulatory and criminal proceedings?"
            ]
        },
        {
            title: "Suspense Account Aging",
            description: "The suspense account has grown to contain hundreds of unresolved items, some dating back over a year. Management wants the account cleared but staff lack documentation to properly resolve many items.",
            discussionPoints: [
                "What is the proper use of suspense accounts?",
                "How should aged items be researched and resolved?",
                "What approvals are needed for writing off unresolvable items?",
                "What procedures can prevent future suspense account buildup?",
                "How should this be communicated to auditors?"
            ]
        },
        {
            title: "Account Ownership Change Documentation Trail",
            description: "An audit reveals that several account ownership changes over the past year lack complete documentation. Signature cards are missing or outdated, and the audit trail for approvals is incomplete.",
            discussionPoints: [
                "What documentation is required for account ownership changes?",
                "How should the missing documentation be remediated?",
                "What controls should exist to ensure complete documentation at time of change?",
                "How should this finding be reported to management and auditors?",
                "What training is needed to prevent future documentation gaps?"
            ]
        },
        {
            title: "Month-End Closing Checklist Failure",
            description: "Several steps on the month-end closing checklist were marked complete but the underlying work was not actually done. This was discovered when the following month's reconciliations didn't tie out.",
            discussionPoints: [
                "How should the incomplete items be identified and completed?",
                "What caused the checklist process to break down?",
                "How should supervisory review of checklists be strengthened?",
                "What are the implications for prior month financial statements?",
                "What accountability measures should be implemented?"
            ]
        },
        {
            title: "ACH Batch Processing Error",
            description: "An ACH batch file was processed twice due to a system error, resulting in duplicate debits to multiple customer accounts. Customers are calling to complain about overdrafts and missing funds.",
            discussionPoints: [
                "What immediate steps should be taken to identify all affected accounts?",
                "How should the reversal entries be processed and documented?",
                "How should affected customers be notified and compensated for fees?",
                "What system controls failed and how should they be fixed?",
                "What communication should go to management and regulators?"
            ]
        },
        {
            title: "Unreconciled Correspondent Bank Account",
            description: "The bookkeeping team discovers that a correspondent bank account has not been reconciled in three months. The account shows a significant difference between book and bank balances.",
            discussionPoints: [
                "How should a three-month reconciliation gap be approached?",
                "What are the risks of unreconciled correspondent accounts?",
                "How should the reconciling items be researched and cleared?",
                "What escalation is appropriate for aged reconciliation gaps?",
                "What controls can ensure correspondent accounts are reconciled timely?"
            ]
        }
    ],
    "Loan Servicing": [
        {
            title: "Delinquent Loan Follow-Up",
            description: "A complex commercial loan portfolio shows multiple borrowers with missed payments, cross-collateralized assets, and legal disputes over restructuring terms. The situation involves regulatory scrutiny, litigation risk, and coordination with external counsel.",
            difficulty: "advanced",
            discussionPoints: [
                "How should advanced risk analysis and legal review be used to manage multi-borrower delinquency?",
                "What are the escalation protocols for regulatory and litigation risk?",
                "How should the bank coordinate with external counsel and regulators?",
                "What advanced documentation and reporting is required for high-risk delinquency cases?",
                "How should findings and remediation be communicated to senior management and the board?"
            ]
        },
        {
            title: "Escrow Account Shortage",
            description: "A forensic audit uncovers systemic escrow account shortages across multiple mortgage portfolios, involving misapplied payments, regulatory violations, and class-action litigation threats. The issue spans several years and triggers regulatory enforcement action.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic audit and data analytics be used to identify and resolve systemic escrow shortages?",
                "What are the legal and regulatory risks of misapplied escrow payments?",
                "How should the bank coordinate with regulators, legal counsel, and affected borrowers?",
                "What advanced controls and monitoring can prevent future escrow shortages?",
                "How should findings and remediation be documented for regulatory and legal defense?"
            ]
        },
        {
            title: "Loan Payoff Processing Error",
            description: "A large-scale loan payoff processing error is discovered, affecting hundreds of accounts due to a system migration. The error results in incorrect balances, regulatory reporting issues, and customer litigation threats.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic review and system analysis be used to identify and correct large-scale payoff errors?",
                "What are the legal and regulatory implications of systemic payoff processing failures?",
                "How should the bank coordinate with regulators, legal counsel, and affected customers?",
                "What advanced controls and documentation are required for system migrations?",
                "How should findings and remediation be communicated to regulators and the board?"
            ]
        },
        {
            title: "Insurance Lapse Notification",
            description: "A regulatory review uncovers widespread insurance lapses across a commercial loan portfolio, involving non-compliance with loan terms, collateral risk, and potential enforcement actions. The issue triggers legal review and coordination with multiple insurers.",
            difficulty: "advanced",
            discussionPoints: [
                "How should advanced compliance review and legal analysis be used to address systemic insurance lapses?",
                "What are the regulatory and contractual risks of widespread insurance non-compliance?",
                "How should the bank coordinate with insurers, legal counsel, and regulators?",
                "What advanced controls and monitoring can prevent future insurance lapses?",
                "How should findings and remediation be documented for regulatory and legal defense?"
            ]
        },
        {
            title: "Automatic Payment Failure",
            description: "A system-wide failure in automatic payment processing affects thousands of loans, resulting in missed payments, late fees, regulatory complaints, and reputational damage. The incident requires forensic IT review and coordination with compliance and legal teams.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic IT review and compliance analysis be used to resolve system-wide payment failures?",
                "What are the legal and regulatory implications of large-scale payment processing errors?",
                "How should the bank coordinate with regulators, legal counsel, and affected borrowers?",
                "What advanced controls and monitoring can prevent future payment failures?",
                "How should findings and remediation be communicated to regulators and the board?"
            ]
        },
        {
            title: "Loan Servicing Fraud Alert",
            description: "A customer claims that their loan balance is incorrect due to unauthorized changes. Discuss how to investigate, resolve, and prevent fraud in loan servicing.",
            discussionPoints: [
                "What are the signs of loan servicing fraud?",
                "How should the incident be investigated and documented?",
                "How should the customer be supported?",
                "What controls can help prevent future fraud?",
                "What follow-up actions are necessary?"
            ]
        },
        {
            title: "Force-Placed Insurance Dispute",
            description: "A borrower disputes the force-placed insurance charge on their mortgage, claiming they provided proof of coverage that was not processed correctly by the bank.",
            discussionPoints: [
                "What is the process for force-placing insurance and notifying borrowers?",
                "How should disputed force-placed insurance charges be investigated?",
                "What documentation should the borrower provide?",
                "What are the regulatory requirements for force-placed insurance?",
                "How should refunds be processed if the charge was in error?"
            ]
        },
        {
            title: "Partial Payment Application",
            description: "A borrower consistently sends payments that are less than the full amount due. The payments are being held in suspense rather than applied to the loan. The borrower is frustrated that their balance isn't decreasing.",
            discussionPoints: [
                "What is the bank's policy for applying partial payments?",
                "How should this be explained to the borrower?",
                "What are the regulatory requirements for partial payment handling?",
                "What options exist to help the borrower become current?",
                "How should partial payments be documented?"
            ]
        },
        {
            title: "Deceased Borrower Notification",
            description: "The bank receives notification that a borrower has passed away. There is an outstanding mortgage balance and surviving family members are asking about their options.",
            discussionPoints: [
                "What are the immediate steps when notified of a borrower's death?",
                "How should surviving family members or the estate be communicated with?",
                "What options exist for heirs who wish to keep the property?",
                "What are the regulatory protections for surviving spouses?",
                "What documentation is required throughout the process?"
            ]
        },
        {
            title: "Removing Deceased Co-Borrower from Loan",
            description: "A surviving spouse requests to remove their deceased partner from a joint auto loan. They want the loan in their name only and the title updated accordingly.",
            discussionPoints: [
                "What documentation is required to remove a deceased borrower?",
                "Does the surviving borrower need to re-qualify for the loan independently?",
                "What is the process for updating the title and loan documents?",
                "How should the bank communicate with the grieving customer sensitively?",
                "What are the timeframes and fees involved in this process?"
            ]
        },
        {
            title: "Loan Modification Request During Hardship",
            description: "A borrower contacts the bank requesting a loan modification due to a recent job loss. They are not yet delinquent but anticipate they will be unable to make payments at the current terms.",
            discussionPoints: [
                "What information should be gathered to evaluate a modification request?",
                "What modification options might be available to the borrower?",
                "How should the borrower be advised while the request is being evaluated?",
                "What are the documentation requirements for loan modifications?",
                "How should the modification process be tracked and communicated?"
            ]
        },
        {
            title: "Payoff Quote Discrepancy Complaint",
            description: "A borrower received a payoff quote, sent the quoted amount, but then received notice that additional funds are due. They are upset and demanding the loan be marked as paid in full.",
            discussionPoints: [
                "What factors can cause a payoff amount to differ from a quote?",
                "How should the discrepancy be researched and explained to the borrower?",
                "What is the bank's liability for payoff quote accuracy?",
                "How should the situation be resolved if the bank made an error?",
                "What process improvements can prevent payoff quote issues?"
            ]
        }
    ],
    Compliance: [
        {
            title: "New Regulation Implementation",
            description: "A sweeping new banking regulation requires rapid changes to multi-jurisdictional reporting, cross-border data management, and real-time compliance monitoring. The implementation deadline is aggressive, and failure to comply could result in severe penalties and regulatory action.",
            difficulty: "advanced",
            discussionPoints: [
                "How should advanced project management and legal review be used to implement complex regulatory changes across multiple jurisdictions?",
                "What are the escalation protocols for high-risk compliance gaps and missed deadlines?",
                "How should the bank coordinate with regulators, legal counsel, and technology vendors?",
                "What advanced controls and documentation are required for real-time compliance monitoring?",
                "How should findings and remediation be communicated to senior management and the board?"
            ]
        },
        {
            title: "Suspicious Activity Report (SAR) Dilemma",
            description: "A compliance officer identifies a series of sophisticated transactions involving shell companies, cryptocurrency, and cross-border transfers. The activity may indicate money laundering, terrorist financing, or sanctions evasion, but the SAR threshold is unclear and regulatory guidance is evolving.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic analysis and legal review be used to evaluate complex SAR scenarios?",
                "What are the regulatory and legal risks of failing to file or over-filing SARs in evolving environments?",
                "How should the bank coordinate with law enforcement, regulators, and international partners?",
                "What advanced documentation and escalation procedures are required for high-risk SAR cases?",
                "How should findings and decisions be communicated to senior management and the board?"
            ]
        },
        {
            title: "Customer Privacy Breach Response",
            description: "A major privacy breach exposes thousands of customer records, including sensitive financial and personal data, due to a third-party vendor compromise. The incident triggers regulatory investigations, class-action lawsuits, and reputational damage.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic IT review and legal analysis be used to respond to large-scale privacy breaches?",
                "What are the regulatory and legal risks of third-party data compromises?",
                "How should the bank coordinate with regulators, legal counsel, and affected customers?",
                "What advanced controls and monitoring can prevent future privacy breaches?",
                "How should findings and remediation be documented for regulatory and legal defense?"
            ]
        },
        {
            title: "Whistleblower Complaint Handling",
            description: "A whistleblower submits a detailed complaint alleging systemic compliance failures, regulatory violations, and management cover-ups. The case involves multiple branches, external counsel, and potential criminal investigations.",
            difficulty: "advanced",
            discussionPoints: [
                "How should advanced investigation and legal review be used to address systemic whistleblower complaints?",
                "What are the regulatory and legal risks of management cover-ups and retaliation?",
                "How should the bank coordinate with external counsel, regulators, and law enforcement?",
                "What advanced documentation and reporting is required for whistleblower cases?",
                "How should findings and remediation be communicated to regulators and the board?"
            ]
        },
        {
            title: "OFAC List Screening Hit",
            description: "A high-profile account opening triggers a match on the OFAC sanctions list, involving politically exposed persons, complex ownership structures, and international media attention. The investigation requires coordination with multiple regulatory agencies and legal counsel.",
            difficulty: "advanced",
            discussionPoints: [
                "How should advanced screening tools and legal review be used to investigate complex OFAC matches?",
                "What are the regulatory and reputational risks of handling politically exposed persons and high-profile cases?",
                "How should the bank coordinate with regulators, legal counsel, and international partners?",
                "What advanced documentation and reporting is required for OFAC investigations?",
                "How should findings and remediation be communicated to senior management and the board?"
            ]
        },
        {
            title: "Customer Due Diligence Enhancement",
            description: "In response to regulatory findings, the bank implements an enhanced customer due diligence (EDD) program. Discuss the challenges and procedures for implementing EDD, including for high-risk and politically exposed persons (PEPs).",
            difficulty: "advanced",
            discussionPoints: [
                "What are the key components of an enhanced due diligence program?",
                "How should high-risk customers and PEPs be identified and monitored?",
                "What additional documentation and verification are required for EDD?",
                "How should EDD findings be documented and reported?",
                "What training is needed for staff involved in the EDD process?"
            ]
        },
        {
            title: "Regulatory Reporting Error Investigation",
            description: "A significant error is discovered in the bank's regulatory reporting, potentially affecting multiple reports and periods. The error may be due to data entry, system migration, or formula errors in spreadsheets.",
            difficulty: "advanced",
            discussionPoints: [
                "What immediate actions should be taken to investigate and quantify the reporting error?",
                "How should the error be communicated to regulators and senior management?",
                "What is the process for correcting and resubmitting regulatory reports?",
                "What controls should be enhanced to prevent future reporting errors?",
                "How should findings and remediation be documented for regulatory review?"
            ]
        },
        {
            title: "Compliance Training Program Overhaul",
            description: "The bank's compliance training program is found lacking in several areas, including anti-money laundering (AML), Bank Secrecy Act (BSA), and consumer protection regulations. An overhaul is required to meet regulatory expectations.",
            difficulty: "advanced",
            discussionPoints: [
                "What are the key elements of an effective compliance training program?",
                "How should the training needs be assessed for different employee roles?",
                "What methods and materials are best for delivering compliance training?",
                "How should training completion and effectiveness be monitored and documented?",
                "What are the consequences of inadequate compliance training for the bank?"
            ]
        },
        {
            title: "Third-Party Vendor Compliance Review",
            description: "A critical third-party vendor that handles customer data has failed to provide required compliance certifications and audit reports. The vendor relationship is important but poses increasing risk.",
                difficulty: "advanced",
            discussionPoints: [
                "What are the regulatory expectations for third-party vendor management?",
                "How should the compliance gaps be escalated and documented?",
                "What leverage does the bank have to compel vendor compliance?",
                "When should alternative vendors be considered?",
                "What are the risks of continuing the relationship without proper documentation?"
            ]
        },
        {
            title: "CIP Requirements for Adding Account Owners",
            description: "A business customer wants to add a new authorized signer to their commercial account. The new signer is a foreign national with limited US identification documents.",
                difficulty: "advanced",
            discussionPoints: [
                "What Customer Identification Program (CIP) requirements apply to adding signers?",
                "What alternative documents can satisfy CIP for foreign nationals?",
                "How should OFAC screening be performed for new account parties?",
                "What enhanced due diligence might be required?",
                "How should the verification process be documented for examiners?"
            ]
        }
    ],
    IT: [
        {
                difficulty: "advanced",
            title: "System Outage Response",
            description: "A multi-system outage affects core banking, online, and mobile platforms during peak business hours. The incident involves a suspected cyberattack, regulatory notification requirements, and coordination with external vendors and law enforcement.",
            discussionPoints: [
                "How should advanced incident response and forensic analysis be used to manage multi-system outages?",
                "What are the regulatory and legal risks of prolonged outages and cyberattacks?",
                "How should the bank coordinate with external vendors, law enforcement, and regulators?",
                "What advanced controls and documentation are required for incident response and recovery?",
                "How should findings and remediation be communicated to senior management and the board?"
            ]
        },
        {
            title: "Phishing Email Incident",
            description: "A targeted phishing campaign compromises multiple employee accounts, leading to unauthorized wire transfers and data breaches. The attack uses advanced social engineering and malware, triggering regulatory investigations and customer notifications.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic IT review and legal analysis be used to respond to advanced phishing attacks?",
                "What are the regulatory and legal risks of data breaches and financial losses?",
                "How should the bank coordinate with law enforcement, regulators, and affected customers?",
                "What advanced controls and monitoring can prevent future phishing incidents?",
                "How should findings and remediation be documented for regulatory and legal defense?"
            ]
        },
        {
            title: "Unauthorized Software Installation",
            description: "A forensic audit uncovers unauthorized software installations across multiple workstations, including remote access tools and cryptocurrency miners. The incident exposes the bank to cyber risk, regulatory scrutiny, and potential data breaches.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic IT review and compliance analysis be used to identify and remediate unauthorized software installations?",
                "What are the regulatory and legal risks of cyber risk and data breaches?",
                "How should the bank coordinate with law enforcement, regulators, and external vendors?",
                "What advanced controls and monitoring can prevent future unauthorized installations?",
                "How should findings and remediation be documented for regulatory and legal defense?"
            ]
        },
        {
            title: "Data Backup Failure",
            description: "A system-wide backup failure results in the loss of critical banking data, affecting regulatory reporting, customer accounts, and financial statements. The incident triggers regulatory investigations and reputational damage.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic IT review and compliance analysis be used to recover from large-scale backup failures?",
                "What are the regulatory and legal risks of data loss and reporting failures?",
                "How should the bank coordinate with regulators, legal counsel, and external vendors?",
                "What advanced controls and monitoring can prevent future backup failures?",
                "How should findings and remediation be documented for regulatory and legal defense?"
            ]
        },
        {
            title: "Mobile Banking App Outage",
            description: "A prolonged outage of the mobile banking app affects thousands of customers, leading to missed payments, regulatory complaints, and media coverage. The incident involves complex system dependencies and coordination with multiple vendors.",
            difficulty: "advanced",
            discussionPoints: [
                "How should advanced incident response and forensic analysis be used to resolve prolonged mobile app outages?",
                "What are the regulatory and reputational risks of large-scale outages?",
                "How should the bank coordinate with external vendors, regulators, and affected customers?",
                "What advanced controls and monitoring can prevent future outages?",
                "How should findings and remediation be communicated to senior management and the board?"
            ]
        },
        {
            title: "Internal System Breach (Fraud)",
            description: "IT detects unauthorized access to sensitive banking systems, with evidence that internal credentials were used to commit fraud. Discuss the response, investigation, and prevention strategies for internal system breaches.",
            discussionPoints: [
                "What immediate steps should IT take to contain the breach and secure systems?",
                "How should the incident be investigated and documented?",
                "What are the protocols for working with law enforcement and compliance?",
                "How can IT improve monitoring and access controls to prevent future internal fraud?",
                "What training or policy changes should be considered for staff with privileged access?"
            ]
        },
        {
            title: "Ransomware Attack Discovery",
            description: "IT detects ransomware on several workstations that has begun encrypting files. The malware appears to be spreading through the network. Critical systems are not yet affected.",
            discussionPoints: [
                "What are the immediate containment steps for a ransomware attack?",
                "How should affected systems be isolated while maintaining critical operations?",
                "What is the communication protocol during an active attack?",
                "How should the decision about ransom payment be handled?",
                "What recovery procedures should be initiated?"
            ]
        },
        {
            title: "Privileged Access Abuse",
            description: "Audit logs reveal that a database administrator has been accessing customer account information unrelated to their job duties. The access doesn't appear to involve data exfiltration but violates policy.",
            discussionPoints: [
                "What additional investigation is needed to understand the scope?",
                "How should this be coordinated with HR and legal?",
                "What are the immediate access control changes needed?",
                "How should privileged access monitoring be enhanced?",
                "What are the regulatory reporting considerations?"
            ]
        },
        {
            title: "Cloud Service Provider Incident",
            description: "The bank receives notification from a cloud service provider that a security incident may have exposed some customer data stored in their environment.",
            discussionPoints: [
                "What information should be requested from the cloud provider?",
                "How should the potential data exposure be assessed?",
                "What are the customer notification requirements?",
                "How should this affect the vendor relationship going forward?",
                "What contract provisions apply to this situation?"
            ]
        },
        {
            title: "Shadow IT Discovery",
            description: "IT discovers that a business unit has been using an unauthorized cloud application to store and share customer information. The application lacks proper security controls and compliance certifications.",
            discussionPoints: [
                "What are the immediate risks that need to be addressed?",
                "How should data be migrated out of the unauthorized application?",
                "What drove the business unit to use shadow IT?",
                "How should this be addressed with the business unit leadership?",
                "What processes can prevent future shadow IT proliferation?"
            ]
        },
        {
            title: "Online Banking Access After Ownership Change",
            description: "A customer was removed from a joint account but still has online banking access showing the account. The remaining owner is concerned about unauthorized access to their account information.",
            discussionPoints: [
                "What is the process for revoking online access when account ownership changes?",
                "How should online banking credentials be managed for joint accounts?",
                "What audit trail exists for online access changes?",
                "How can IT ensure timely access removal when ownership changes?",
                "What communication should occur between New Accounts, IT, and the customer?"
            ]
        }
    ],
    Security: [
        {
            title: "Suspicious Activity at ATM",
            description: "A coordinated ATM fraud ring targets multiple branches after hours, using advanced skimming devices, cloned cards, and insider assistance. The incident triggers law enforcement investigations, regulatory reporting, and media attention.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic analysis and law enforcement coordination be used to investigate multi-branch ATM fraud?",
                "What are the regulatory and reputational risks of large-scale ATM fraud?",
                "How should the bank coordinate with law enforcement, regulators, and affected customers?",
                "What advanced controls and monitoring can prevent future ATM fraud?",
                "How should findings and remediation be documented for regulatory and legal defense?"
            ]
        },
        {
            title: "Unauthorized Access Attempt",
            description: "A sophisticated social engineering attack uses cloned employee badges and compromised credentials to attempt access to restricted areas after hours. The incident involves multiple failed access attempts, regulatory notification, and coordination with law enforcement.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic review and law enforcement coordination be used to investigate advanced unauthorized access attempts?",
                "What are the regulatory and legal risks of physical security breaches?",
                "How should the bank coordinate with law enforcement, regulators, and affected staff?",
                "What advanced controls and monitoring can prevent future unauthorized access?",
                "How should findings and remediation be documented for regulatory and legal defense?"
            ]
        },
        {
            title: "Robbery Threat Call",
            description: "A branch receives a credible robbery threat involving multiple suspects, insider information, and coordinated timing. The incident triggers law enforcement response, regulatory reporting, and staff safety protocols.",
            difficulty: "advanced",
            discussionPoints: [
                "How should advanced threat assessment and law enforcement coordination be used to respond to credible robbery threats?",
                "What are the regulatory and legal risks of robbery threats and insider involvement?",
                "How should the bank coordinate with law enforcement, regulators, and affected staff?",
                "What advanced controls and training can improve staff safety and threat response?",
                "How should findings and remediation be documented for regulatory and legal defense?"
            ]
        },
        {
            title: "Lost Key Incident",
            description: "A forensic audit uncovers a pattern of lost keys and unauthorized access incidents across multiple branches, involving insider collusion and physical security breaches. The incident triggers law enforcement investigations and regulatory scrutiny.",
            difficulty: "advanced",
            discussionPoints: [
                "How should forensic review and law enforcement coordination be used to investigate patterns of lost keys and unauthorized access?",
                "What are the regulatory and legal risks of insider collusion and physical security breaches?",
                "How should the bank coordinate with law enforcement, regulators, and affected staff?",
                "What advanced controls and monitoring can prevent future lost key incidents?",
                "How should findings and remediation be documented for regulatory and legal defense?"
            ]
        },
        {
            title: "Suspicious Package Discovery",
            description: "A suspicious package is found in a branch lobby, with evidence of coordinated threats against multiple locations. The incident triggers law enforcement response, regulatory reporting, and staff safety protocols.",
            difficulty: "advanced",
            discussionPoints: [
                "How should advanced threat assessment and law enforcement coordination be used to respond to suspicious packages and coordinated threats?",
                "What are the regulatory and legal risks of physical security threats?",
                "How should the bank coordinate with law enforcement, regulators, and affected staff?",
                "What advanced controls and training can improve staff safety and threat response?",
                "How should findings and remediation be documented for regulatory and legal defense?"
            ]
        },
        {
            title: "Insider Collusion for Fraudulent Access",
            description: "Security uncovers evidence that an employee has colluded with an outsider to provide unauthorized access to secure areas, enabling fraudulent activities within the branch. Discuss the investigation, response, and prevention of insider collusion and physical security fraud.",
            discussionPoints: [
                "What steps should security take to investigate and confirm insider collusion?",
                "How should the bank respond to both the employee and the outsider?",
                "What protocols exist for reporting and documenting internal fraud?",
                "How can physical and procedural controls be improved to prevent similar incidents?",
                "What training or awareness programs can help staff recognize and report suspicious behavior?"
            ]
        },
        {
            title: "Active Shooter Preparedness",
            description: "Management requests a review of the bank's active shooter preparedness after a nearby business experienced an incident. Staff are anxious and asking about safety protocols.",
            discussionPoints: [
                "What are the key elements of an active shooter response plan?",
                "How should staff be trained without creating unnecessary fear?",
                "What physical security enhancements should be considered?",
                "How should drills be conducted effectively?",
                "What communication protocols should exist during an incident?"
            ]
        },
        {
            title: "Tailgating Incident",
            description: "Security footage shows that an unauthorized person followed an employee through a secure door without badging in. The person was later seen in a restricted area before leaving the building.",
            discussionPoints: [
                "What immediate investigation steps should be taken?",
                "How should staff be reminded about tailgating prevention?",
                "What physical controls can reduce tailgating risk?",
                "How should this be documented and reported?",
                "What was the potential exposure from this breach?"
            ]
        },
        {
            title: "Night Deposit Box Tampering",
            description: "A business customer reports that their night deposit was not credited to their account. Security review suggests possible tampering with the night deposit box.",
            discussionPoints: [
                "What evidence should be preserved and reviewed?",
                "How should law enforcement be involved?",
                "What communication should go to the affected customer?",
                "What security enhancements should be considered?",
                "How should this affect procedures for night deposits?"
            ]
        },
        {
            title: "Social Engineering to Change Account Access",
            description: "A caller claiming to be an account holder requests to remove another person from their joint account, citing an urgent situation. The caller has some account information but is failing verification questions.",
            discussionPoints: [
                "What are the red flags for social engineering attempts?",
                "How should failed verification be handled?",
                "What additional verification steps can be used for sensitive changes?",
                "How should the real account holders be notified of the attempt?",
                "What documentation and reporting is required for social engineering attempts?"
            ]
        }
    ],
    "New Accounts": [
        {
            title: "Unusual Account Opening Request",
            description: "A customer requests to open multiple accounts with minimal documentation, using complex ownership structures, international addresses, and digital identity credentials. The situation triggers enhanced due diligence, regulatory reporting, and potential law enforcement involvement.",
            difficulty: "advanced",
            discussionPoints: [
                "How should advanced identity verification and forensic analysis be used to assess complex account opening requests?",
                "What are the regulatory and legal risks of multi-account openings with minimal documentation?",
                "How should the bank coordinate with compliance, legal counsel, and law enforcement?",
                "What advanced controls and monitoring can prevent future account opening fraud?",
                "How should findings and remediation be documented for regulatory and legal defense?"
            ]
        },
        {
            title: "Beneficiary Addition Complication",
            description: "A customer requests to add several beneficiaries to a new account, including international parties and entities with complex legal structures. The information provided is incomplete, inconsistent, and triggers enhanced due diligence and regulatory review.",
            difficulty: "advanced",
            discussionPoints: [
                "How should advanced verification and legal review be used to assess complex beneficiary additions?",
                "What are the regulatory and legal risks of incomplete or inconsistent beneficiary information?",
                "How should the bank coordinate with compliance, legal counsel, and regulators?",
                "What advanced controls and documentation are required for beneficiary additions?",
                "How should findings and remediation be communicated to senior management and the board?"
            ]
        },
        {
            title: "Minor Account Opening Request",
            description: "A parent requests to open multiple accounts for minor children, using trusts, custodial arrangements, and digital identity credentials. The situation involves complex legal, regulatory, and tax considerations, triggering enhanced due diligence and legal review.",
            difficulty: "advanced",
            discussionPoints: [
                "How should advanced legal and compliance review be used to assess complex minor account openings?",
                "What are the regulatory and tax risks of multi-account openings for minors?",
                "How should the bank coordinate with legal counsel, compliance, and regulators?",
                "What advanced controls and documentation are required for minor accounts?",
                "How should findings and remediation be communicated to senior management and the board?"
            ]
        },
        {
            title: "Dormant Account Reactivation",
            description: "A customer requests to reactivate multiple dormant accounts with international ties, complex ownership structures, and missing documentation. The situation triggers enhanced due diligence, regulatory review, and potential law enforcement involvement.",
            difficulty: "advanced",
            discussionPoints: [
                "How should advanced identity verification and forensic analysis be used to assess complex dormant account reactivations?",
                "What are the regulatory and legal risks of reactivating accounts with missing documentation?",
                "How should the bank coordinate with compliance, legal counsel, and law enforcement?",
                "What advanced controls and monitoring can prevent future dormant account fraud?",
                "How should findings and remediation be documented for regulatory and legal defense?"
            ]
        },
        {
            title: "Business Account Documentation Issue",
            description: "A small business owner applies to open multiple business accounts with complex ownership structures, international partners, and missing legal documents. The situation triggers enhanced due diligence, regulatory review, and potential law enforcement involvement.",
            difficulty: "advanced",
            discussionPoints: [
                "How should advanced verification and legal review be used to assess complex business account openings?",
                "What are the regulatory and legal risks of incomplete business account documentation?",
                "How should the bank coordinate with compliance, legal counsel, and regulators?",
                "What advanced controls and documentation are required for business account openings?",
                "How should findings and remediation be communicated to senior management and the board?"
            ]
        }
    ]
};
