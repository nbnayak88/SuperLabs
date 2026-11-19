# C01 POC — 15 Acceptance Tests and Vendor Decision

## POC setup

**Duration:** 2–3 weeks, subject to access and integration readiness.  
**Dataset:** Synthetic 500 employees across three legal entities and two countries; include future hires, transfers, rehires, contingent workers, managers and sensitive fields.  
**Environments:** Isolated sandbox; nonproduction identity and middleware; no production personal data.

| ID | Test | Pass criterion |
|---|---|---|
| P01 | New hire future date | Correct effective-date behavior, no premature downstream activation |
| P02 | Rehire | Employment continuity and history preserved per design |
| P03 | Retroactive job change | Accurate timeline, audit and controlled replication |
| P04 | Cross-legal-entity transfer | Approved fields, org and cost center correctly mapped |
| P05 | Position vacancy | Position occupancy and hierarchy reconcile |
| P06 | Manager change | Correct reporting hierarchy and authorization |
| P07 | Employee self-service | Validated edit, workflow and history |
| P08 | Manager approval | Routing, delegation, rejection and audit |
| P09 | Sensitive data | Negative permission test denies unauthorized access |
| P10 | Country localization | Two-country data and process rules pass |
| P11 | Payroll/time outbound | Approved payload, traceability and downstream acknowledgement |
| P12 | Integration replay | No duplicates or silent loss after simulated failure |
| P13 | Data migration | Reconciliation of records and critical fields; exceptions logged |
| P14 | Workforce analytics | Reproducible headcount metric and authorized visibility |
| P15 | Mobile/accessibility | Defined user journeys completed; accessibility issues logged |

## Quantitative POC thresholds (proposed; approve in discovery)

- 100% pass on mandatory security, data integrity and integration replay tests.
- At least 95% of required noncritical scenario steps complete without vendor workaround.
- 100% of failed integration messages observable and traceable.
- Critical-field migration accuracy ≥99.5% with 100% documented exception resolution before go-live.
- Zero unauthorized sensitive-field disclosures.

## Decision gates

G1 Business scope signed → G2 architecture and security approved → G3 scripted POC passed → G4 5-year TCO normalized → G5 executive decision and documented exceptions.

## Decision record template

Business context | Vendors evaluated | Weighted RFI scores | Mandatory gate results | Evidence references | Architecture risks | Cost assumptions | Selected solution | Conditional actions | Approvers.

## Reusable lessons

Convert each failed test into an explicit architecture decision or configuration experiment. Capture anonymized examples for HR01 learning, role-play and future presales simulations.
