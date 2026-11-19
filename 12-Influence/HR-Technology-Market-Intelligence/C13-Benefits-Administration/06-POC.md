# C13 — POC and Decision Record

**Pilot assumptions:** 2–4 weeks; 150 fictional employees, 3 countries, 6 plans, 2 carriers, 2 payroll interfaces and synthetic dependent records only.

| ID | Scenario | Acceptance |
|---|---|---|
| P01 | Configure country-specific benefit plan | Timestamped result, data reconciliation and reviewer sign-off |
| P02 | Evaluate eligibility from effective-dated employee data | Timestamped result, data reconciliation and reviewer sign-off |
| P03 | Enroll eligible employee during open enrollment | Timestamped result, data reconciliation and reviewer sign-off |
| P04 | Block ineligible plan selection | Timestamped result, data reconciliation and reviewer sign-off |
| P05 | Add dependent and verify documentation | Timestamped result, data reconciliation and reviewer sign-off |
| P06 | Process marriage or birth life event | Timestamped result, data reconciliation and reviewer sign-off |
| P07 | Process leave-related benefit status change | Timestamped result, data reconciliation and reviewer sign-off |
| P08 | Calculate employer and employee contributions | Timestamped result, data reconciliation and reviewer sign-off |
| P09 | Apply benefit allowance or flexible credit | Timestamped result, data reconciliation and reviewer sign-off |
| P10 | Calculate payroll deduction with effective date | Timestamped result, data reconciliation and reviewer sign-off |
| P11 | Handle retroactive election and reconciliation | Timestamped result, data reconciliation and reviewer sign-off |
| P12 | Transmit carrier enrollment and receive acknowledgment | Timestamped result, data reconciliation and reviewer sign-off |
| P13 | Retry rejected carrier transaction without duplicate | Timestamped result, data reconciliation and reviewer sign-off |
| P14 | Test termination and continuation coverage rule | Timestamped result, data reconciliation and reviewer sign-off |
| P15 | Protect sensitive dependent and health-related information | Timestamped result, data reconciliation and reviewer sign-off |
| P16 | Test multilingual accessible enrollment | Timestamped result, data reconciliation and reviewer sign-off |
| P17 | Prove employee benefit election audit trail | Timestamped result, data reconciliation and reviewer sign-off |
| P18 | Generate approved AI guidance and reject unsupported advice | Timestamped result, data reconciliation and reviewer sign-off |
| P19 | Reconcile HR, carrier and payroll populations | Timestamped result, data reconciliation and reviewer sign-off |
| P20 | Export elections and validate vendor exit | Timestamped result, data reconciliation and reviewer sign-off |

## Suggested acceptance
100% mandatory eligibility, statutory, privacy, carrier and payroll tests pass; zero duplicate carrier elections or payroll deductions; 100% integration errors observable and replayable; ≥95% noncritical scripted steps pass without workaround; country legal and benefits owners sign off.

## Selection gates
G1 country discovery → G2 localization and compliance → G3 SAP vs specialist architecture → G4 vendor demo → G5 POC and weighted RFI → G6 five-year TCO → G7 executive decision.

## Decision memo
Country scope | SAP baseline | specialist shortlist | analyst evidence limits | statutory fit | weighted RFI | POC | provider connectivity | payroll reconciliation | privacy | TCO | recommendation | approvals.

## SuccessLabs experiential learning
Simulate a multinational employee benefit enrollment and life event with employee, benefits administrator, carrier analyst and payroll reviewer personas. Learners trace eligibility, contribution, provider acknowledgment and payroll deductions to uncover integration defects.
