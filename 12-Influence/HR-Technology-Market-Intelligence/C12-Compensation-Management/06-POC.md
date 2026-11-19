# C12 — POC and Decision Record

**Pilot:** 2–4 weeks; 150 fictional employees, 3 countries, 2 merit plans, 2 bonus plans, 4 currencies and nonproduction SAP/partner systems.

| ID | Scenario | Evidence |
|---|---|---|
| P01 | Configure merit cycle for two countries | Timestamped result, reconciliation, reviewer and exception log |
| P02 | Load grade and salary range from approved source | Timestamped result, reconciliation, reviewer and exception log |
| P03 | Assign budget to organization and managers | Timestamped result, reconciliation, reviewer and exception log |
| P04 | Apply eligibility and FTE proration | Timestamped result, reconciliation, reviewer and exception log |
| P05 | Calculate merit recommendation against guidelines | Timestamped result, reconciliation, reviewer and exception log |
| P06 | Prevent over-budget submission | Timestamped result, reconciliation, reviewer and exception log |
| P07 | Route exception through approval chain | Timestamped result, reconciliation, reviewer and exception log |
| P08 | Calculate target and actual variable pay | Timestamped result, reconciliation, reviewer and exception log |
| P09 | Apply performance factor with documented source | Timestamped result, reconciliation, reviewer and exception log |
| P10 | Run multi-currency conversion and reconcile | Timestamped result, reconciliation, reviewer and exception log |
| P11 | Model pay compression scenario | Timestamped result, reconciliation, reviewer and exception log |
| P12 | Run pay equity diagnostic with privacy controls | Timestamped result, reconciliation, reviewer and exception log |
| P13 | Restrict manager access to other departments | Timestamped result, reconciliation, reviewer and exception log |
| P14 | Audit compensation change and delegation | Timestamped result, reconciliation, reviewer and exception log |
| P15 | Reject unsupported AI-generated pay recommendation | Timestamped result, reconciliation, reviewer and exception log |
| P16 | Handle promotion and off-cycle increase | Timestamped result, reconciliation, reviewer and exception log |
| P17 | Send approved compensation to Employee Central | Timestamped result, reconciliation, reviewer and exception log |
| P18 | Reconcile payroll downstream interface | Timestamped result, reconciliation, reviewer and exception log |
| P19 | Recover failed integration without duplicate change | Timestamped result, reconciliation, reviewer and exception log |
| P20 | Export history, evidence and exit dataset | Timestamped result, reconciliation, reviewer and exception log |

## Proposed acceptance
100% mandatory budget, access, eligibility, approval and payroll integrity tests pass; zero AI-only pay changes; 100% payroll interface failures detectable and replayable; zero duplicate approved changes; ≥95% noncritical scripted steps pass without workaround; equity review and country legal validation signed off.

## Decision gates
G1 discovery → G2 architecture and country compliance → G3 scripted vendor demos → G4 POC and weighted RFI → G5 five-year TCO → G6 executive recommendation.

## Decision memo
Business outcomes | SAP-first architecture | specialist shortlist | analyst evidence limits | weighted RFI | POC | country compliance | pay equity | integration risk | TCO | recommendation | approvals.

## SuccessLabs learning experiment
Simulate merit planning for a fictional industrial group: manager proposes increases, finance enforces budgets, HR reviews compression and equity, payroll reconciles effective-dated approved results. Participants must defend each recommendation with traceable evidence.
