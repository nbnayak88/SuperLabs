# C14 — 20-Test POC

**Pilot:** 2–4 weeks; 150 synthetic employees, three countries, four award types, two currencies and nonproduction SAP/payroll/finance interfaces.

| ID | Scenario | Acceptance evidence |
|---|---|---|
| P01 | Peer recognition tied to company value | Timestamped result, reconciliation and reviewer sign-off |
| P02 | Manager award requiring approval | Timestamped result, reconciliation and reviewer sign-off |
| P03 | Reject award exceeding budget | Timestamped result, reconciliation and reviewer sign-off |
| P04 | Nonmonetary recognition | Timestamped result, reconciliation and reviewer sign-off |
| P05 | Points award and ledger posting | Timestamped result, reconciliation and reviewer sign-off |
| P06 | Catalog redemption in eligible country | Timestamped result, reconciliation and reviewer sign-off |
| P07 | Unavailable reward and points refund | Timestamped result, reconciliation and reviewer sign-off |
| P08 | Taxable award payroll interface | Timestamped result, reconciliation and reviewer sign-off |
| P09 | Finance cost-center reconciliation | Timestamped result, reconciliation and reviewer sign-off |
| P10 | Employee cross-country transfer | Timestamped result, reconciliation and reviewer sign-off |
| P11 | Ineligible employee rejection | Timestamped result, reconciliation and reviewer sign-off |
| P12 | Service milestone automation | Timestamped result, reconciliation and reviewer sign-off |
| P13 | Delegation and approval audit | Timestamped result, reconciliation and reviewer sign-off |
| P14 | Inappropriate text moderation | Timestamped result, reconciliation and reviewer sign-off |
| P15 | Reciprocal recognition fraud detection | Timestamped result, reconciliation and reviewer sign-off |
| P16 | Synthetic-cohort fairness review | Timestamped result, reconciliation and reviewer sign-off |
| P17 | AI draft requiring human approval | Timestamped result, reconciliation and reviewer sign-off |
| P18 | Idempotent failed SAP integration replay | Timestamped result, reconciliation and reviewer sign-off |
| P19 | Accessible multilingual redemption | Timestamped result, reconciliation and reviewer sign-off |
| P20 | Export balances and fulfillment history | Timestamped result, reconciliation and reviewer sign-off |

## Gates
100% mandatory budget, privacy, tax/payroll, anti-fraud and ledger tests; zero duplicate redemption; all integration failures detectable and safely replayable; ≥95% noncritical scenarios pass without workaround; local tax and legal sign-off.

## Decision sequence
Discovery → policy/tax architecture → vendor demo → POC and weighted RFI → five-year TCO → executive decision.

## SuccessLabs role-play
Employee, manager, finance controller, payroll analyst and HR program owner simulate a recognition campaign; learners detect collusion, reconcile tax and recover a failed reward redemption.