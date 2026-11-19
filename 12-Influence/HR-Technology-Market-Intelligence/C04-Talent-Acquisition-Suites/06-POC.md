# C04 POC — 20 Test Scenarios and Selection

## Pilot design
2–4 weeks; synthetic 300 applicants, 40 requisitions, 4 countries, 3 languages, 10 hiring managers and 20 interviewers; simulated SAP Employee Central, identity provider and assessment interfaces. Volumes are illustrative, not vendor limits.

| ID | Test | Acceptance |
|---|---|---|
| P01 | Position-linked requisition | Correct budget, position and approval |
| P02 | Country-specific requisition | Required fields and legal templates |
| P03 | Job distribution | Posting and status traceable |
| P04 | Accessible mobile application | Candidate completes journey |
| P05 | Candidate consent | Consent captured, versioned and auditable |
| P06 | Duplicate applications | No unintended duplicate identity |
| P07 | Talent-pool nurture | Consent-respecting communications |
| P08 | Screening | Documented job-related criteria and override |
| P09 | Interview scheduling | Calendar and time-zone correctness |
| P10 | Structured scorecard | Consistent criteria, independent feedback |
| P11 | AI-generated questions | Human approves and rejects unsafe suggestions |
| P12 | AI skill match | Explainable suggestions; no autonomous rejection |
| P13 | Assessment partner | Secure consented data transfer |
| P14 | Offer approval | Correct grade, compensation and approvers |
| P15 | Offer-to-onboarding | Accurate data and status transfer |
| P16 | Onboarding-to-EC | Future hire and employee ID reconciliation |
| P17 | RBAC negative test | Interviewer cannot access restricted fields |
| P18 | Candidate deletion/retention | Lawful data lifecycle and audit |
| P19 | Integration outage/replay | No silent loss or duplicate hire |
| P20 | Recruiting analytics | Time-to-fill and conversion reconcile |

## Suggested POC thresholds — approve with customer
- 100% mandatory privacy, fairness governance, permission and data-integrity scenarios pass.
- Zero autonomous AI hiring rejections.
- 100% offer-to-EC identities reconciled in test set.
- 100% integration failures detectable and replayable.
- ≥95% of noncritical scripted steps completed without workaround.
- Critical accessibility defects resolved before launch.

## Decision gates
G1 scope/requirements → G2 SAP portfolio architecture decision → G3 security and AI policy → G4 vendor scripted demonstration → G5 scored POC → G6 five-year TCO → G7 selection and risk acceptance.

## Executive decision record
Vendors and SAP paths | Analyst report evidence | Weighted RFI | POC outcomes | Privacy/fairness | Integration fit | Country coverage | Migration feasibility | 5-year TCO | Decision | Conditional actions.

## Learning experiments
Use fictional candidate personas and a human interviewer simulation to test whether AI assistance improves question quality without shifting decision accountability away from humans. Capture interviewer reflections and architecture evidence.
